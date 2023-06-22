import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/home/home.components';
import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Landing from './views/landing/landing.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home/:id" component={Detail} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route exact path="" component={Landing}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
