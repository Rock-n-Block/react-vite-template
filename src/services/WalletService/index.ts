import { ConnectWallet } from '@amfi/connect-wallet';
import { IConnect, IError } from '@amfi/connect-wallet/dist/interface';
import BigNumber from 'bignumber.js/bignumber';
import Web3 from 'web3';

import { connectWallet as connectWalletConfig, contracts } from 'config';
import bep20 from 'config/abi/bep20';

import { chainsEnum } from 'types';

export class WalletService {
  public connectWallet: ConnectWallet;

  public walletAddress = '';

  public contracts: any = {};

  constructor() {
    this.connectWallet = new ConnectWallet();
  }

  public async initWalletConnect(
    chainName: chainsEnum,
    providerName: 'MetaMask' | 'WalletConnect', // ADD PROVIDERS HERE
  ): Promise<boolean> {
    return new Promise((resolve) => {
      const { provider, network, settings } = connectWalletConfig(chainName);

      const connecting = this.connectWallet
        .connect(provider[providerName], network, settings)
        .then((connected: boolean | {}) => {
          return connected;
        })
        .catch((err: any) => {
          console.error('initWalletConnect providerWallet err: ', err);
        });

      Promise.all([connecting]).then((connect: any) => {
        resolve(connect[0]);
      });
    });
  }

  public logOut(): void {
    this.connectWallet.resetConect();
  }

  public Web3(): Web3 {
    return this.connectWallet.currentWeb3();
  }

  public async getTokenBalance(address: string) {
    const contract = this.connectWallet.getContract({
      address,
      abi: bep20 as any[],
    });

    return contract.methods.balanceOf(this.walletAddress).call();
  }

  public async getTokenDecimals(address: string) {
    const contract = this.connectWallet.getContract({
      address,
      abi: bep20 as any[],
    });

    return contract.methods.decimals().call();
  }

  public setAccountAddress(address: string) {
    this.walletAddress = address;
  }

  public getAccount(): Promise<
    | IConnect
    | IError
    | {
        address: string;
      }
  > {
    return this.connectWallet.getAccounts();
  }

  static getMethodInterface(abi: Array<any>, methodName: string) {
    return abi.filter((m) => {
      return m.name === methodName;
    })[0];
  }

  encodeFunctionCall(abi: any, data: Array<any>) {
    return this.Web3().eth.abi.encodeFunctionCall(abi, data);
  }

  async createTransaction({
    method,
    data,
    contract,
    tx,
    to,
    walletAddress,
    value,
  }: {
    method: string;
    data: Array<any>;
    contract: ''; // ADD CONTRACT NAMES HERE
    tx?: any;
    to?: string;
    walletAddress?: string;
    value?: any;
  }) {
    const transactionMethod = WalletService.getMethodInterface(
      contracts.params[contract][contracts.type].abi,
      method,
    );

    let signature;
    if (transactionMethod) {
      signature = this.encodeFunctionCall(transactionMethod, data);
    }

    if (tx) {
      tx.from = walletAddress || this.walletAddress;
      tx.data = signature;

      return this.sendTransaction(tx);
    }
    return this.sendTransaction({
      from: walletAddress || this.walletAddress,
      to: to || contracts.params[contract][contracts.type].address,
      data: signature || '',
      value: value || '',
    });
  }

  sendTransaction(transactionConfig: any) {
    return this.Web3().eth.sendTransaction({
      ...transactionConfig,
      from: this.walletAddress,
    });
  }

  async totalSupply(tokenAddress: string, abi: Array<any>, tokenDecimals: number) {
    const contract = this.connectWallet.getContract({ address: tokenAddress, abi });
    const totalSupply = await contract.methods.totalSupply().call();

    return +new BigNumber(totalSupply).dividedBy(new BigNumber(10).pow(tokenDecimals)).toString(10);
  }

  async checkTokenAllowance({
    contractName,
    tokenDecimals,
    approvedAddress,
    walletAddress,
    amount,
  }: {
    contractName: string;
    tokenDecimals: number;
    approvedAddress?: string;
    walletAddress?: string;
    amount?: string | number;
  }): Promise<boolean> {
    try {
      const contract = this.connectWallet.getContract({
        address: contracts.params[contractName][contracts.type].address,
        abi: contracts.params[contractName][contracts.type].abi,
      });
      const walletAdr = walletAddress || this.walletAddress;

      let result = await contract.methods
        .allowance(
          walletAdr,
          approvedAddress || contracts.params[contractName][contracts.type].address,
        )
        .call();

      result =
        result === '0'
          ? null
          : +new BigNumber(result).dividedBy(new BigNumber(10).pow(tokenDecimals)).toString(10);
      return !!(result && new BigNumber(result).minus(amount || 0).isPositive());
    } catch (error) {
      return false;
    }
  }

  async approveToken({
    contractName,
    tokenDecimals,
    approvedAddress,
    walletAddress,
  }: {
    contractName: string;
    tokenDecimals: number;
    approvedAddress?: string;
    walletAddress?: string;
  }) {
    try {
      const approveMethod = WalletService.getMethodInterface(
        contracts.params[contractName][contracts.type].abi,
        'approve',
      );

      const approveSignature = this.encodeFunctionCall(approveMethod, [
        approvedAddress || walletAddress || this.walletAddress,
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        WalletService.calcTransactionAmount(90071992000.5474099, tokenDecimals),
      ]);

      return this.sendTransaction({
        from: walletAddress || this.walletAddress,
        to: contracts.params[contractName][contracts.type].address,
        data: approveSignature,
      });
    } catch (error) {
      return error;
    }
  }

  static calcTransactionAmount(amount: number | string, tokenDecimal: number): string {
    return new BigNumber(amount).times(new BigNumber(10).pow(tokenDecimal)).toString(10);
  }

  static weiToEth(amount: number | string, decimals = 18): string {
    return new BigNumber(amount).dividedBy(new BigNumber(10).pow(decimals)).toString(10);
  }

  static ethToWei(amount: number | string, decimals = 18): string {
    return new BigNumber(amount).multipliedBy(new BigNumber(10).pow(decimals)).toString(10);
  }

  static getAddress(contractName: string): string {
    return contracts.params[contractName][contracts.type].address;
  }

  createContract(contractName: string, tokenAddress: string, abi: Array<any>) {
    if (!this.contracts[contractName]) {
      const contract = this.connectWallet.getContract({ address: tokenAddress, abi });
      this.contracts = {
        ...this.contracts,
        [contractName]: contract,
      };
    }
  }

  async callContractMethod({
    contractName,
    methodName,
    data,
    contractAddress,
    contractAbi,
  }: {
    contractName: string;
    methodName: string;
    data: any[];
    contractAddress: string;
    contractAbi: Array<any>;
  }) {
    try {
      if (!this.contracts[contractName] && contractAddress && contractAbi) {
        this.createContract(contractName, contractAddress, contractAbi);
      }

      if (this.contracts[contractName]) {
        const method = await this.contracts[contractName].methods[methodName];
        return await method(...data).call();
      }
    } catch (err: any) {
      throw new Error(err);
    }
    return new Error(`contract ${contractName} didn't created`);
  }
}
