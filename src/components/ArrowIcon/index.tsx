import clsx from 'clsx';
import { MouseEventHandler } from 'react';

import style from './style.module.scss';

type ArrowIconProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ArrowIcon = ({ className, onClick }: ArrowIconProps) => {
  return (
    <button className={clsx(className, style.arrow)} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
      >
        <line
          x1="1.63604"
          y1="8.70711"
          x2="8.70711"
          y2="1.63604"
          stroke="#fff"
          strokeWidth="2"
        />
        <line
          x1="8.70711"
          y1="14.364"
          x2="1.63604"
          y2="7.29289"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default ArrowIcon;
