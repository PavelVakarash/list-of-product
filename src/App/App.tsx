import React from 'react';
import Counter from '../features/counter/Counter';
import UserPage from '../features/user/UserPage';
import Students from '../features/students/Students';
import StudentRegistration from '../features/students/StudentRegistration';
import StudentRemove from '../features/students/StudentsRemove';
import ProductRegistration from '../features/products/ProductAdd';
import Products from '../features/products/Products';
import ProductRemove from '../features/products/ProductRemove';

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
      <UserPage />
      <Students />
      <StudentRegistration />
      <StudentRemove />
      <Products />
      <ProductRegistration />
      <ProductRemove />
    </div>
  );
}

export default App;
