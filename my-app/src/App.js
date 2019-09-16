import React, { useState } from "react";
import { Provider } from "mobx-react";
import store from "./store";
import Home from "./pages/home";
function TodoList() {
  const [] = useState();
  return (
    <>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </>
  );
}
export default TodoList;
