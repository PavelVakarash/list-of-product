import Action from "./types/Action";
import ProductsState from "./types/ProductsState";

const initialState: ProductsState = {
    value: [
      { title: 'Яблоко Голден', category: 'Фрукты', subcategory: 'Яблоко', amount: 2, unit: 'кг' },
      { title: 'Шоколад Алёнка', category: 'Десерты', subcategory: 'Шоколад', amount: 0.1, unit: 'кг' },
      { title: 'Пельмени сибирские', category: 'Мясо', subcategory: 'Полуфабрикат', amount: 1, unit: 'шт' },
      { title: 'Помидор Черри', category: 'Овощи', subcategory: 'Помидор', amount:1.5, unit: 'кг' },
    ],
  }; 

export default function productsReducer(state: ProductsState = initialState, action: Action): ProductsState {
    switch (action.type) {
    case 'products/add':
    return { value: [...state.value, action.payload] };
    case 'products/remove':
        return { value: state.value.filter((product) => product.title !== action.payload) };
    }
    return state;
    }
    