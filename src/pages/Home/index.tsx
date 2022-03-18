import { FC } from 'react';

import { ReactComponent as Logo } from 'assets/img/icons/logo.svg';

import { Button } from 'components';
import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={s.home_wrapper}>
      <div className={s.title}>Hello RnB</div>
      <Logo />
      <Button>Connect</Button>
    </div>
  );
};
export default Home;
