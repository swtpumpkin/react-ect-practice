// imports

// actions

// action creators

// initial state

const initialstate = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer

function reducer(state = initialstate, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

// reducer export

export default reducer;
