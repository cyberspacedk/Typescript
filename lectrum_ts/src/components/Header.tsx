import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children? : never;
}

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  // поскольку title это необязательное поле нужена проверка
  const content = typeof title === 'string' ? title.toLowerCase() : null;
  const [counter, setCounter] = useState(0);

  const increase = (): void => {
    setCounter((prev) => prev + 1);
  };
  const decrease = (): void => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter}</h3>
    </>
  );
};

Header.defaultProps = {
  title: 'Default header',
};

/*
тут запрещаем чилдренов
тип переменной стейта типизруется благодаря интерференции
чтобы не использовать интерференцию то указываем дженерик useState<number>(0)
*/
