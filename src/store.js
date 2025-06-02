import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpos: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "acount/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "acount/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "acount/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpos: action.payload.purpos,
        balance: state.balance + action.payload.amount,
      };
    case "acount/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpos: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "acount/deposit", payload: 500 });
console.log(store.getState());
store.dispatch({ type: "acount/withdraw", payload: 200 });
console.log(store.getState());

store.dispatch({
  type: "acount/requestLoan",
  payload: { amount: 1000, purpos: "Buy a car" },
});

console.log(store.getState());
