import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ProductRemove(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  return (
    <>
      <h2>Удаление продукта по названию</h2>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: 'products/remove', payload: title });
        }}
      >
        <label htmlFor="">Введите название товара</label>
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">Удалить</button>
      </form>
    </>
  );
}

export default ProductRemove;