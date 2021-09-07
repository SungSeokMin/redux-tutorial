import { SHOW_ALL, SHOW_COMPLETE } from '../action';

const initialState = 'ALL';

export default function filter(previosState = initialState, action) {
  switch (action.type) {
    case SHOW_ALL:
      return 'ALL';

    case SHOW_COMPLETE:
      return 'COMPLETE';

    default:
      return previosState;
  }
}
