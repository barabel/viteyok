import { type ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './react-button-close.scss';

enum ReactButtonCloseVariant {
  def = '',
  white = 'white',
}

const parentClass = 'react-button-close' as const;
const classes = {
  parent: parentClass,
} as const;

export const ReactButtonClose: FCClass<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: `${ReactButtonCloseVariant}` }> = ({
  className,
  variant = '',
  ...props
}) => {
  return (
    <button
      className={cn(
        classes.parent,
        className,
        {
          [`${classes.parent}--${variant}`]: variant,
        },
      )}
      type='button'
      {...props}
    />
  );
}
