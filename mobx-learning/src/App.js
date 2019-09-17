import React from "react";
import { Provider } from "mobx-react";
import store from "./store";
import Home from "./pages/home";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <Home></Home>
        </Provider>
      </>
    );
  }
}
export default TodoList;
