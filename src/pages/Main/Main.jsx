import Dashboard from '../../containers/Dashboard/Dashboard';
import BookDashboard from '../../containers/BookDashboard/BookDashboard';
import PatternDashboard from '../../containers/PatternDashboard/PatternDashboard';

const Main = () => {
  const changeNavBar = () => {
    switch (window.location.pathname) {
      case '/book-hub':
        return <BookDashboard refreshPage={refreshPage} />;
      case '/books':
        return <BookDashboard />;
      case '/new-book':
        return <BookDashboard />;
      case '/pattern-hub':
        return <PatternDashboard refreshPage={refreshPage} />;
      case '/patterns':
        return <PatternDashboard />;
      case '/new-pattern':
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
