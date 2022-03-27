import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./Pages/CheckOut/CheckOut";
import SignUp from "./Pages/SignUp/SignUp";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setAuth } from "./Actions/auth";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Kh3jlSHwgDA0oUl0IBI0sre2p0jFC8m55MWkfI8h1d8kIx03hIWN32vqmJcXmuVZrffFYi2lhi5AAkZq7TnlePG009euyWok3"
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setAuth(authUser));
      } else {
        dispatch(setAuth(null));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Header />
            <Home />
          </Route>
          <Route exact={true} path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route exact={true} path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact={true} path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
