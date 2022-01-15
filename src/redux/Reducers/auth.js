let user;
if (window.localStorage.getItem("adminData")) {
  user = JSON.parse(window.localStorage.getItem("adminData"));
} else {
  user = null;
}
export const authReducer = (state = user, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
