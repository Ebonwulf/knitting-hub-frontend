import './Main.scss';
import Dashboard from '../../containers/Dashboard/Dashboard';
import BookDashboard from '../../containers/BookDashboard/BookDashboard';
import PatternDashboard from '../../containers/PatternDashboard/PatternDashboard';

const Main = () => {
  const changeNavBar = () => {
    switch (window.location.pathname) {
      case '/knitting-hub-frontend/':
        return <Dashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/book-hub':
        return <BookDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/books':
        return <BookDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/new-book':
        return <BookDashboard />;
      case '/knitting-hub-frontend/pattern-hub':
        return <PatternDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/patterns':
        return <PatternDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/new-pattern':
        return <PatternDashboard />;
      default:
        return <Dashboard refreshPage={refreshPage} />;
    }
  };

  const refreshPage = () => {
    window.location.refresh(false);
  };

  let navBar = changeNavBar();
  return <div className='main'>{navBar}</div>;
};

export default Main;
