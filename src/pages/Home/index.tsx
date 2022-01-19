import { FC } from 'react';

import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={s.home_wrapper}>
      <div className={s.title}>Hello RnB</div>
    </div>
  );
};
export default Home;
