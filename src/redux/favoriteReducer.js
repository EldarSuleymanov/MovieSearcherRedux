const initialState = {
  data: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVORITE_ADD':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'FAVORITE_DELETE':
      return {
        ...state,
        data: state.data.filter(
          (item) => item.show.id !== action.payload.show.id,
        ),
      };

    default:
      return state;
  }
};
