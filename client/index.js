import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import Dishes from './components/Dishes';

import styles from './scss/application.scss';


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/dishes" component={Dishes} />
      </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))





// class App extends React.Component {
//   render(){
//     return (
//       <div className="row">
//         {/* <ChatWindow pollInterval={3000} url="/messages" />
//         <Chatroom url="http://slack-server.elasticbeanstalk.com/calendar/junior" /> */
//         <Main></Main>}
//       </div>
//     )
//   }
// }

// render(
//   <App />,
//   document.getElementById('root')
// );

