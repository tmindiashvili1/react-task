import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route, 
  Link 
} from "react-router-dom"
import { 
  combineReducers, 
  createStore
} from 'redux'
import { Provider } from 'react-redux'
import Main from './containers/Main'
import Result from './containers/Result'
import reducer from './reducers/combineReducer'
import './App.css';

const reducers = combineReducers(reducer)
const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="main">

              <nav className="nav">
                <ul>
                  <li>
                    <Link to="/">მთავარი</Link>
                  </li>
                  <li>
                    <Link to="/result">შედეგები</Link>
                  </li>
                </ul>
              </nav>

              <section className="component">
                <Route path='/' exact component={Main} />
                <Route path='/result' component={Result} />
              </section>

            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
