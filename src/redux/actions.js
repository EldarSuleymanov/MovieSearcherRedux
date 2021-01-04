export const inputActionCreator = (text) => {
  return {
    type: 'INPUT_DONE',
    payload: text,
  };
};

export const errorActionCreator = (message) => {
  return {
    type: 'ERROR_MESSAGE',
    payload: message,
  };
};

export const asyncFuncThunk = (url, search) => {
  return function (dispatch) {
    return fetch(url + search)
      .then((data) => data.json())
      .then((array) => {
        if (array.length) {
          dispatch(DataActionCreator(array));
          dispatch(errorActionCreator(''));
        } else {
          dispatch(errorActionCreator('there is no such movie'));
        }
      })
      .catch((e) => {
        dispatch(errorActionCreator('Something went wrong, try again later'));
      });
  };
};

export const DataActionCreator = (array) => {
  return {
    type: 'DATA_IN',
    payload: array,
  };
};

export const FavoriteAdd = (movie) => {
  return {
    type: 'FAVORITE_ADD',
    payload: movie,
  };
};

export const FavoriteDeleted = (movie) => {
  return {
    type: 'FAVORITE_DELETE',
    payload: movie,
  };
};
