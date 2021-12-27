import React, { useState,useEffect } from "react";
import AdminScreen from "./AdminScreen";
import LoginScreen from "./LoginScreen";
import Navbar from "./Components/navbar/Navbar";
import Reports from "./Components/reports/Reports";
import Logout from "./Logout";

import ChatPage from "./pages/chat/ChatPage";
import Welcome from "./Components/Welcome/Welcome";
import CompletedOrders from "./Components/CompletedOrders/CompletedOrders";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  FetchProductPage,
  OnlineProductPage,
} from "./pages/fetchproduct/FetchProduct";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {localStorage.getItem("Token") ? ( */}
            <>
              <Navbar user={user} setUser={setUser}/>

              <Route
                exact
                path="/fetchproducts/:Pname"
                component={FetchProductPage}
              />

              <Route
                exact
                path="/onlineproducts/:Pname"
                component={OnlineProductPage}
              />
              <Route
                exact
                path="/completedorders"
                component={CompletedOrders}
              />
              <Route exact path="/reports" component={Reports} />

              <Route exact path="/messages" component={ChatPage} />
              <Route exact path="/admin">
                <AdminScreen user={user} setUser={setUser} />
              </Route>

              <Route exact path="/" component={Welcome} />
            
            </>
          {/* // ) : (
          //   <>
          //     <Route exact path="/">
          //       <LoginScreen user={user} setUser={setUser} />
          //     </Route>
          //     <Redirect to="/" />
          //   </>
          // )} */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
