import './App.scss';
import Fruits from "./pages/fruit/fruits";
import Vegetable from "./pages/vegetable/vegetable";
import { Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <Redirect to="/fruits" />
            </Route>
            <Route path="/fruits" component={Fruits}/>
            <Route path="/vegetables" component={Vegetable}/>
        </Switch>
    </div>
  );
}

export default App;
