import Action from './types/Action';
import UserState from './types/UserState';

const initialState: UserState = {
  value: { name: 'Guest', age: 0 },
};

export default function userReducer(
  state: UserState = initialState,
  action: Action
): UserState {
  switch (action.type) {
    case 'user/editName':
      return { ...state, value: { ...state.value, name: action.payload } };
    case 'user/editAge':
      return { ...state, value: { ...state.value, age: action.payload } };
  }
  return state;
}