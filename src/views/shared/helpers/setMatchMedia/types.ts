import { type MediaSizes } from '@/shared/enums';

// https://stackoverflow.com/questions/37688318/typescript-interface-possible-to-make-one-or-the-other-properties-required

export type MediaSizesType = keyof typeof MediaSizes;
export type MediaQueryType = 'min' | 'max';

interface ISetMatchMediaGeneralProps {
  callback: (event: MediaQueryList | MediaQueryListEvent) => void
  /** Нужно ли запустить каллбак прежде чем навесить медиаквери, по-умолчанию true */
  executeCallback?: boolean
}

interface ISetMatchMediaMin extends ISetMatchMediaGeneralProps {
  min: MediaSizesType
  max?: never
}

interface ISetMatchMediaMax extends ISetMatchMediaGeneralProps {
  min?: never
  max: MediaSizesType
}

export interface IGetMediaQueryList {
  func: (mediaSize: MediaSizesType, type: MediaQueryType) => MediaQueryList
}

export type TSetMatchMediaProps = ISetMatchMediaMin | ISetMatchMediaMax
