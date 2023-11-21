import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

import style from './style.module.scss';

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={clsx(className, style.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
