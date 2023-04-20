import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

function Products(): JSX.Element {
  const value = useSelector((globalState: RootState) => globalState.products.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Продукты</h2>
      {value.map((product) => (
        <div>
          {product.title} {product.category} {product.subcategory} {product.amount} {product.unit}
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: 'products/remove', 
                payload: product.title
              })}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;