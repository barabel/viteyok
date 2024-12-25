import cn from 'classnames';
import './react-button.scss';
import { type IconsArray } from '@/shared/enums';
import { Icon } from '@/shared/react/icon';
import { type ReactNode } from 'react';

enum ReactButtonVariant {
  def = '',
  beige = 'beige',
  bordered = 'bordered',
  borderedBeige = 'bordered-beige',
}

export interface TReactButton {
  variant?: `${ReactButtonVariant}` | ReactButtonVariant
  title: string
  url?: string
  disabled?: boolean
  onClick?: () => void
  icon?: `${IconsArray}` | IconsArray
  type?: 'button' | 'submit' | 'reset'
  typography?: string
  isAttention?: boolean
}

const parentClass = 'react-button' as const;
const classes = {
  parent: parentClass,
  wrapper: `${parentClass}__wrapper`,
  content: `${parentClass}__content`,
  wrapperIcon: `${parentClass}__wrapper-icon`,
  icon: `${parentClass}__icon`,
} as const;

export const ReactButton: FCClass<TReactButton> = ({
  className,
  variant = '',
  title,
  url,
  disabled,
  icon,
  onClick,
  type = 'button',
  typography = 't1',
  isAttention,
  ...props
}) => {
  const Tag = url ? 'a' : 'button';
  const isExternal = url ? 'url' : false;

  const renderPart = (): ReactNode => {
    return (
      <span className={classes.content}>
        {title}
        {icon && (
          <div className={classes.wrapperIcon}>
            <Icon
              className={'react-button__icon'}
              icon={icon}
            />
          </div>
        )}
      </span>
    )
  }

  return (
    <Tag
      className={cn(classes.parent,
        className,
        typography,
        {
          [`${classes.parent}--${variant}`]: variant,
          [`${classes.parent}--disabled`]: disabled,
          [`${classes.parent}--attention`]: isAttention,
        },
      )}
      href={url}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      disabled={disabled}
      type={url ? undefined : type}
      {...props}
    >
      <span className={classes.wrapper}>
        {renderPart()}
        {renderPart()}
      </span>
    </Tag>
  );
}
