import { Link, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Report from "./components/report";
import SampleSurvey from "./components/sampleSurvey";
import SensoryPreferrences from "./components/sensoryPreferences";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <nav className="nav">
        <Link to="/sampleSurvey">Sample Survey</Link>
        <Link to="/sensoryPreferences">Sensory Preferences</Link>
        <Link to="/report">Report</Link>
        <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sampleSurvey" component={SampleSurvey} />
        <Route path="/sensoryPreferences" component={SensoryPreferrences} />
        <Route path="/report" component={Report} />
      </Switch>
    </div>
  );
}

export default App;
