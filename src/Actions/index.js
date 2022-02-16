export const ADDMOVIE = (item) => {
  return {
    type: "ADDMOVIE",
    payload: item,
  };
};

export const DELETEMOVIE = (Id) => {
  return {
    type: "DELETEMOVIE",
    payload: Id,
  };
};
