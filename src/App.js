import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./component/About/About";
import Appointment from "./component/Appointment/Appointment";
import Banner from "./component/Banner/Banner";
import Confirm from "./component/Confirm/Confirm";
import Details from "./component/Details/Details";
import Doctors from "./component/Doctors/Doctors";
import Facilities from "./component/Facilities/Facilities";
import Footer from "./component/Footer/Footer";
import Mission from "./component/Mission/Mission";
import Nav from "./component/Nav/Nav";
import NotFound from "./component/NotFound/NotFound";
import Register from "./component/Register/Register";
import Servise from "./component/Servise/Servise";
import SignIn from "./component/Sign-in/SignIn";
import Success from "./component/Success/Success";
import AuthProvider from "./Context/AuthProvider";
import Privateroute from "./Privateroute/Privateroute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path='/'>
              <Nav></Nav>
              <Banner></Banner>
              <Servise></Servise>
              <Mission></Mission>
              <Facilities></Facilities>
              <Footer></Footer>

            </Route>
            <Route path='/home'>
              <Nav></Nav>
              <Banner></Banner>
              <Servise></Servise>
              <Mission></Mission>
              <Facilities></Facilities>
              <Footer></Footer>

            </Route>
            <Privateroute path='/appointment'>
              <Nav></Nav>
              <Appointment></Appointment>
              <Footer></Footer>

            </Privateroute>
            <Route path='/about'>
              <Nav></Nav>
              <About></About>
              <Footer></Footer>

            </Route>

            <Route path='/register'>
              <Nav></Nav>
              <Register></Register>
              <Footer></Footer>

            </Route>

            <Route path='/signin'>
              <Nav></Nav>
              <SignIn></SignIn>
              <Footer></Footer>

            </Route>

            <Privateroute path='/details/:id'>
              <Nav></Nav>
              <Details></Details>
              <Footer></Footer>

            </Privateroute>

            <Privateroute path='/doctor'>
              <Nav></Nav>
              <Doctors></Doctors>
              <Footer></Footer>

            </Privateroute>

            <Privateroute path='/confirm/:doctorName'>
              <Nav></Nav>
              <Confirm></Confirm>
              <Footer></Footer>

            </Privateroute>



            <Route path='/success'>
              <Nav></Nav>
              <Success></Success>
              <Footer></Footer>
            </Route>



            <Route path='*'>
              <NotFound></NotFound>

            </Route>


          </Switch>
        </BrowserRouter>


      </AuthProvider>

    </div>
  );
}

export default App;
