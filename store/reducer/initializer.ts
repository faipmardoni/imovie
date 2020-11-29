import { IReducerParam } from './types';

export function createReducer(initialState: any, fnMap: any) {
  return (state = initialState, { type, payload }: IReducerParam) => {
    const handle = fnMap[type];

    return handle ? handle(state, payload) : state;
  };
}
