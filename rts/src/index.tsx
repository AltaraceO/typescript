import ReactDOM from "react-dom";
import { GuestList } from "./state/GuestList";
import Search from "./state/Search";
import { EventComponent } from "./events/EventComponent";
import UserRef from "./refs/UserRef";
const App = () => {
  return (
    <div>
      <GuestList />
      <hr />
      <Search />
      <hr />
      <EventComponent />
      <hr />
      <UserRef />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
