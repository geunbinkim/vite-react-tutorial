const CHANGE_KEYWORD = 'change_keyword';

interface ActionType {
  type: string;
  keyword: string;
}

export const changeKeyword = (keyword: string) => ({
  type: CHANGE_KEYWORD,
  keyword: keyword,
});

const initialState = '';

export default function searchKeyword(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return state;
  }
}
