import React, { ReactElement } from 'react';

const styles = {
  primary: {
    color: 'blue',
  },
  danger: {
    color: 'red',
  },
};

// Создаем тип на основе описанного styles
type StylesType = typeof styles;

// Создадим тип в который запишем ключи типа StylesType
type ButtonType = keyof StylesType; // primary | danger

interface PropTypes {
  type: ButtonType; // primary | danger
}

// Тут в проп style могут попасть только те ключи которые в нем есть,
// потому что мы типизировали проп type в котором содержатся только ключи styles
export function Button({ type }: PropTypes): ReactElement {
  return (
    <button style={styles[type]} type="button">Click </button>
  );
}
