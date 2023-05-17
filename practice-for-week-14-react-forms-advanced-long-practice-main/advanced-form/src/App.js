import { Link, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Report from "./components/report";
import SampleSurvey from "./components/sampleSurvey";
import SensoryPreferrences from "./components/sensoryPreferences";
import "./app.css";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const handleOnclick = ((e)=> {
    setCurrentTab(e.target.innerText)
  })
  return (
    <div className="app">
      <Header currentTab={currentTab} />
      <nav className="nav">
        <Link to="/sampleSurvey" onClick={handleOnclick}>Sample Survey</Link>
        <Link to="/sensoryPreferences" onClick={handleOnclick}>Sensory Preferences</Link>
        <Link to="/report" onClick={handleOnclick}>Report</Link>
        <Link to="/" onClick={handleOnclick}>Home</Link>
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
