import { Container} from '@material-ui/core';
import {Switch , Route} from 'react-router-dom'
import './App.css';
import Header from './component/Header/Header';
import SimpleBottomNavigation from './component/MainNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import { BrowserRouter } from 'react-router-dom';

const App = ()=> {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Trending}/>
          <Route path="/movies"  component={Movies}/>
          <Route path="/series"  component={Series}/>
          <Route path="/"  component={Search}/>
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
