import './App.css';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import Home from './view/Home'
import Artist from './view/artist/ArtistList'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/artist' component={Artist} />
   </Router>
  );
}

export default App;
