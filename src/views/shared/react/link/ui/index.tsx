import cn from 'classnames';
import './react-link.scss';
import { type TIconId } from '@/shared/enums';
import { Icon } from '@/shared/react/icon';
import { type ReactNode } from 'react';
import { isExternalUrl } from '@/shared/helpers/url';

const parentClass = 'react-link' as const;
const classes = {
  parent: parentClass,
  wrapper: `${parentClass}__wrapper`,
  content: `${parentClass}__content`,
} as const;

export interface IReactLink {
  title: string
  url?: string
  icon?: TIconId
  leftIcon?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const ReactLink: FCClass<IReactLink> = ({
  className,
  title,
  url,
  disabled,
  onClick,
  icon,
  leftIcon,
  ...props
}) => {
  const Tag = url ? 'a' : 'button';
  const isExternal = url ? isExternalUrl(url) : false;

  const renderIcon = (): ReactNode => {
    return (
      icon && (
        <Icon
          className={'react-link__icon'}
          icon={icon}
        />
      )
    )
  }

  return (
    <Tag
      className={cn(classes.parent, 'h5', className, { [`${classes.parent}--disabled`]: disabled })}
      href={url}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      disabled={disabled}
      type={url ? undefined : 'button'}
      {...props}
    >
      <div className={classes.wrapper}>
        {leftIcon && renderIcon()}
        {title && (
          <span className={cn(classes.content, 'h5')}>
            {title}
          </span>
        )}
        {!leftIcon && renderIcon()}
      </div>
    </Tag>
  );
}
