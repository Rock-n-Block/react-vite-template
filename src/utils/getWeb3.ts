import Web3 from 'web3';

export const getWeb3 = async (isMainnet: boolean) => {
  const rpcUrl = isMainnet ? 'https://bsc-dataseed.binance.org/' : 'https://data-seed-prebsc-2-s1.binance.org:8545/';
  const web3 = new Web3(rpcUrl);
  return web3;
};
