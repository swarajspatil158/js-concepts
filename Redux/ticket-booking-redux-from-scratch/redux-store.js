// action creators
const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};
const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};
//reducers
const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name != action.payload.name;
    });
  }
  return oldReservationList;
};
const cancelationHistory = (oldCancelationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancelationList, action.payload];
  }
  return oldCancelationList;
};
const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// redux store
const { createStore, combineReducers } = Redux;
const railwayCentralStore = combineReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancelationHistory: cancelationHistory,
});

const store = createStore(railwayCentralStore);

const action = newBooking("swaraj", 58);
store.dispatch(newBooking("sarvesh", 20));
store.dispatch(newBooking("akash", 10));
store.dispatch(cancelBooking("akash", 5));
store.dispatch(action);
// store.dispatch(action);
console.log(store.getState());
