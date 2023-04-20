import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

function UserPage(): JSX.Element {
  const value = useSelector((globalState: RootState) => globalState.user.value);
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      {value.name} {value.age}

      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: 'user/editName', payload: name });
        }}
      >
        <label htmlFor="">Имя</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button type="submit">Изменить имя</button>
      </form>
    </div>
  );
}

export default UserPage;