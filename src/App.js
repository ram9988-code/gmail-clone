import React from 'react';

import { BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom';
import './App.css';
import Header from './website-file/Header-file/Header';
import Sidebar from './website-file/Sidebar-file/Sidebar';
import Mail from './website-file/Mail-file/Mail';
import EmailList from './website-file/EmailList-file/EmailList';
import SendMail from './website-file/send-mail/SendMail'
import { useSelector } from 'react-redux';
import { selectMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen=useSelector( selectMessageIsOpen);
  return (
  <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
           <Route path="/mail">
            <Mail/>
           </Route>
          <Route path="/">
            <EmailList/>
          </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
   </Router>
  );
}

export default App;
