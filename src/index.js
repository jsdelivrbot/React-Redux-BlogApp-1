import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

//import react-router
import{BrowserRouter, Route} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//testing
class Hello extends Component {
    render(){
        return(
            <div>Hello!</div>
        )
    }
}
//testing
class Goodbye extends Component {
    render(){
        return(
            <div>Goodbye!</div>
        )
    }
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route path="/hello" component={Hello}/>
            <Route path="/goodbye" component={Goodbye}/>
        </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
