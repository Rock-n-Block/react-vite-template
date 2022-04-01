import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { useDispatch } from 'react-redux';
import { getMaxBet } from 'store/bets/actions';
import s from './Home.module.scss';

const Home: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.homeWrapper}>
      <Logo onClick={() => dispatch(getMaxBet())} />
      ;
    </div>
  );
};
export default Home;
