import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ProductRegistration(): JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [subcategory, setSubcategory] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [unit, setUnit] = useState<string>('');
    const dispatch = useDispatch();
    return (
        <>
            <h2>Добавление продукта</h2>
            <form
                action=""
                onSubmit={(event) => {
                    event.preventDefault();
                    dispatch({ type: 'products/add', payload: { title, category, subcategory, amount, unit } });
                }}
            >
                <label htmlFor="">Введите наименование товара</label>
                <input type="text" onChange={(event) => setTitle(event.target.value)} />
                <label htmlFor="">Введите категорию товара</label>
                <input type="text" onChange={(event) => setCategory(event.target.value)} />
                <label htmlFor="">Введите подкатегорию товара</label>
                <input type="text" onChange={(event) => setSubcategory(event.target.value)} />
                <label htmlFor="">Введите количество товара</label>
                <input type="number" onChange={(event) => setAmount(Number(event.target.value))} />
                <label htmlFor="">Введите единицу измерения</label>
                <input type="text" onChange={(event) => setUnit(event.target.value)} />
                <button type="submit">Добавить товар</button>
            </form>
        </>
    );
}

export default ProductRegistration;