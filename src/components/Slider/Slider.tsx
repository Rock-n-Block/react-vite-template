/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { VFC, useCallback } from 'react';

import ReactSlider, { ReactSliderProps } from 'react-slider';
import cn from 'clsx';

import { divide, omit } from 'lodash';
import { Text } from 'components';
import styles from './styles.module.scss';
import { SliderState } from './Slider.types';

export interface ExtendedSliderProps extends ReactSliderProps {
  className?: string;
  // TODO: remove when types are fixed in package
  value?: any;
  defaultValue?: any;
}

export const Slider: VFC<ExtendedSliderProps> = (props) => {
  const nativeProps = omit(props, 'className');
  const { className, value, defaultValue } = props;

  const renderThumb = useCallback((props: unknown, state: SliderState) => {
    return (
      <div {...props} className={styles.thumb}>
        <Text>{state.valueNow}</Text>
      </div>
    );
  }, []);

  return (
    <ReactSlider
      {...nativeProps}
      className={cn(
        styles.slider,
        { [styles.range]: value?.length || defaultValue?.length },
        className,
      )}
      trackClassName={styles.track}
      thumbActiveClassName={styles.thumbActive}
      markClassName={styles.mark}
      renderThumb={renderThumb}
    />
  );
};
