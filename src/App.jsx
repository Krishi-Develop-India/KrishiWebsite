import Home from './components/Home';
import Documentation from './components/Documentation';
import './css/App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/documentation" component={Documentation} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
