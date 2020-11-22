interface IParam {
  type: string;
  payload?: any
}

export function createReducer(initialState: any, fnMap: any) {
  return (state = initialState, { type, payload }: IParam) => {
    const handle = fnMap[type];

    return handle ? handle(state, payload) : state;
  };
}
