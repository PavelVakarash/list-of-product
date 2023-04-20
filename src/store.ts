import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './features/counter/counterReducer';
import userReducer from './features/user/userReducer';
import studentsReducer from './features/students/studentsReducer';
import productsReducer from './features/products/productsReducer';

const store = createStore(
    combineReducers({
        counter: counterReducer,
        user: userReducer,
        students: studentsReducer,
        products: productsReducer
    }),
    composeWithDevTools()
);

export default store;
export type RootState = ReturnType<typeof store.getState>;