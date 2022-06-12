import Dashboard from '../../containers/Dashboard/Dashboard';
import BookDashboard from '../../containers/BookDashboard/BookDashboard';
import PatternDashboard from '../../containers/PatternDashboard/PatternDashboard';

const Main = () => {
  const changeNavBar = () => {
    switch (window.location.pathname) {
      case '/book-hub':
        return <BookDashboard />;
      case '/pattern-hub':
        return <PatternDashboard />;
      default:
        return <Dashboard />;
    }
  };
  let navBar = changeNavBar();
  return <div className='main'>{navBar}</div>;
};

export default Main;
