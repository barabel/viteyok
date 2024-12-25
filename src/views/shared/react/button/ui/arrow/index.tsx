import cn from 'classnames';
import { Icon } from '@/shared/react/icon';
import './react-button-arrow.scss';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

enum ReactButtonArrowVariant {
  DEFAULT = '',
  LEFT = 'left',
}

enum ReactButtonArrowColor {
  DEFAULT = '',
  GREEN = 'green',
}

export interface IReactButtonArrow {
  className?: string
  variant?: `${ReactButtonArrowVariant}`
  color?: `${ReactButtonArrowColor}`
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  onClick?: () => void
}

const parentClass = 'react-button-arrow' as const;
const classes = {
  parent: parentClass,
  wrapper: `${parentClass}__wrapper`,
  content: `${parentClass}__content`,
  icon: `${parentClass}__icon`,
} as const;

export const ReactButtonArrow = forwardRef<HTMLButtonElement, IReactButtonArrow>(({
  className,
  variant = '',
  color = '',
  disabled,
  onClick,
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(classes.parent, className, { [`${classes.parent}--${variant}`]: variant, [`${classes.parent}--${color}`]: color })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={classes.wrapper}>
        <span className={classes.content}>
          <Icon className={classes.icon} icon='longArrow' />
        </span>
        <span className={classes.content}>
          <Icon className={classes.icon} icon='longArrow' />
        </span>
      </span>
    </button>
  );
})
