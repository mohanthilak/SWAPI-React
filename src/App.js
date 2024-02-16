import {
    BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import People from "./pages/People/People";
import PlanetsComponent from "./pages/Planets/PlanetsComponent";
import FilmsComponent from "./pages/Films/FilmsComponent";
import SpeciesComponent from "./pages/Species/SpeciesComponent";
import VehiclesComponent from "./pages/Vehicles/VehiclesComponent";
import StarshipsComponent from "./pages/StarShips/StarshipsComponent";
import JSONEntity from "./pages/JSONEntity/JSONEntity";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/people">
                        <People/>
                    </Route>
                    <Route exact path="/planets">
                        <PlanetsComponent />
                    </Route>
                    <Route exact path="/films">
                        <FilmsComponent />
                    </Route>
                    <Route exact path="/species">
                        <SpeciesComponent />
                    </Route>
                    <Route exact path="/vehicles">
                        <VehiclesComponent />
                    </Route>
                    <Route exact path="/starships">
                        <StarshipsComponent />
                    </Route>
                    <Route exact path="/entity">
                        <JSONEntity />
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
