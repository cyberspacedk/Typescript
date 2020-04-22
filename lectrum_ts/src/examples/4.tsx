import React, {
  ReactElement, ReactNode, FC, MouseEvent,
} from 'react';

// Ограничиваем тип события, говорим что это только может быть MouseEvent
export type PropTypes = {
  onClick: (e: MouseEvent) => void;
}

/*
Если передать ф-цию которую типизировали как MouseEvent например в проп onFocus то TS не пропустит
TS понимает тип благодаря интерференции
*/
export const Component2: FC<PropTypes> = ({ onClick }: PropTypes): ReactElement => (
  <button type="button" onClick={onClick} onFocus={onClick}>
    click
  </button>
);
