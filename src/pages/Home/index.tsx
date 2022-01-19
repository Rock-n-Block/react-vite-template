import { FC } from 'react';

import s from './Home.module.scss';
// import Logo from 'assets/img/icons/logo.svg';

const Home: FC = () => {
  return (
    <div className={s.home_wrapper}>
      <div className={s.title}>Hello RnB</div>
      {/* <Logo /> */}
    </div>
  );
};
export default Home;
