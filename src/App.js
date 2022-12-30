import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Route path="/">
              <Home/>
            </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;


