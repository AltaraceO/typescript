import ReactDOM from "react-dom";
import { GuestList } from "./state/GuestList";
import Search from "./state/Search";
import { EventComponent } from "./events/EventComponent";
const App = () => {
  return (
    <div>
      <GuestList />
      <Search />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
