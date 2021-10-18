import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Onboarding from "./Components/Onboarding";
import Home from "./Components/Home";
import LocalStorage from "./Components/LocalStorage";
import Upload from "./Components/Upload";
import Notifications from "./Components/Notifications";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Onboarding} />
          <Route path='/home' component={Home} />
          <Route path='/localstorage'component={LocalStorage} />
          <Route path='/upload' component={Upload} />
          <Route path='/notifications' component={Notifications}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
