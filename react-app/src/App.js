import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ActivityIndex from "./components/Activity/ActivityIndex";
import BusinessDetail from "./components/Business/BusinessDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <ActivityIndex />
          </Route>
          <Route exact path="/businesses/:businessId">
            <BusinessDetail />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/businesses/current">
            null
          </Route>
          <Route path="/reviews/current">
            null
          </Route>
          <Route path="/images/current">
            null
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
