import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import Login from './pages/Login';
import Register from './pages/Register';
export const CredentialsContext = React.createContext();

export default function App() {
  const credentialsState = useState(null);
  return (
    <div className="App">
      <CredentialsContext.Provider value={credentialsState}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/todos">
            <TodoPage />
          </Route>
        </Switch>
      </CredentialsContext.Provider>
    </div>
  )
};