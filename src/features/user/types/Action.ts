type Action =
  | { type: 'user/editName'; payload: string }
  | { type: 'user/editAge'; payload: number }
  ;

export default Action;