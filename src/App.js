import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
import {Notfound} from './pages/Notfound';
import 'bootstrap/dist/css/bootstrap.css';
import  {ResumeContextProvider}  from './context/ResumeContext'

function App() {
  return (
    <div className="app">
      <ResumeContextProvider>
          <Router>
            <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/notfound/:id">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </ResumeContextProvider>
    </div>
  );
}

export default App;
