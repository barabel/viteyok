import { type ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './react-button-play.scss';

export const ReactButtonPlay: FCClass<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={cn('react-button-play', className)}
      type='button'
      {...props}
    ></button>
  );
}
