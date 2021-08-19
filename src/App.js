import './App.css';
import Main from './layout/Main';
// import { BrowserRouter as Router, Route, Link, Switch, useParams, NavLink } from 'react-router-dom';
import moment from 'moment';
import Index from './pages/Index'
import ViewportContext from './component/ViewportContext'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  // let day = new Date(2011, 9, 16);
  // let dayWrapper = moment('2011-11-2').toDate();
  // console.log(window.innerWidth);
  // console.log(dayWrapper);
  return (
    <>
      <ViewportContext>
        <Main />
      </ViewportContext>
    </>
  );
}
export default App;
