import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/Services/Services";
import AuthProvider from "./contexts/AuthProvider";
import Doctor from "./Pages/Doctor/Doctor/Doctor";
import Login from "./Pages/Login/Login/Login";
import Service from "./Pages/Service/Service/Service";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
      <Header />
        <Switch >
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/about">
            <About></About>
          </PrivateRoute>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/doctor">
            <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
            </Route>
          <PrivateRoute exact path="/doctor/:doctorId">
            <Doctor></Doctor>
          </PrivateRoute>
          <PrivateRoute exact path="/service/:serviceId">
            <Service></Service>
          </PrivateRoute>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
