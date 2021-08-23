import './App.css';
import Main from './layout/Main';
// import { BrowserRouter as Router, Route, Link, Switch, useParams, NavLink } from 'react-router-dom';
import moment from 'moment';
import ViewportContext from './component/ViewportContext'
function App() {
  return (
    <>
      <ViewportContext>
        <Main />
      </ViewportContext>
    </>
  );
}
export default App;
