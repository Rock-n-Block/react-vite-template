/* eslint-disable jsx-a11y/label-has-associated-control */

import cn from 'clsx';

import { VFC } from 'react';
import styles from './styles.module.scss';

export interface SliderProps {
  onChangeComplete?: (...args) => void;
  // onChange?: (...args) => void;
  step?: string;
  className?: string;
  min?: string;
  max?: string;
  id?: string;
  name?: string;
}

export const Slider: VFC<SliderProps> = ({ className, min, max, id, name, step = '1', onChangeComplete }) => {
  const range = (Math.abs(parseInt(max, 10)) - Math.abs(parseInt(min, 10))) / parseInt(step, 10);
  const newArr = new Array(range).fill('')
    .map((i, index) => <option value={(index * range).toString()}> </option>);
  return (
    <div className={cn(styles.slider, className)}>
      <label className={cn(styles.label)} htmlFor={id}> {name} </label>

      <input
        className={cn(styles.input)}
        type="range"
        min={min}
        max={max}
        id={id}
        name={name}
        // onChange={onChange}
        onMouseUp={onChangeComplete}
        list="list"
      />
      <datalist id="list">
        {
          newArr
        }
      </datalist>
    </div>
  );
};
