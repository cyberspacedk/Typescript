import React, {
  ReactElement, ReactNode, FC, HTMLAttributes,
} from 'react';

// Ограничить конкретный тип пропса для элемента на примере extends,
// тут мы говорим что он содержит только то что может быть в HTMLDivElement
export type PropTypes = {
  title?: string;
  children: ReactNode;
  extends: HTMLAttributes<HTMLDivElement>;
}

// Func component should return ReactElement
export const Component2: FC<PropTypes> = ({ children, title, ...other }: PropTypes): ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div {...other}>
    {title}
    :
    {children}
  </div>
);
