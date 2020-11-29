import { IMovieList } from 'store/reducer/types';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('favourite');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: IMovieList[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('favourite', serializedState);
  } catch {
    // ignore write errors
  }
};
