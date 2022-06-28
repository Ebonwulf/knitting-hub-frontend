import './App.scss';
import Dashboard from './containers/Dashboard/Dashboard';
import BookDashboard from './containers/BookDashboard/BookDashboard';
import PatternDashboard from './containers/PatternDashboard/PatternDashboard';

function App() {
  const refreshPage = () => {
    window.location.refresh(true);
  };

  const changeDashboard = () => {
    switch (window.location.pathname) {
      case '/knitting-hub-frontend/':
        return <Dashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/books':
        return <BookDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/new-book':
        return <BookDashboard />;
      case '/knitting-hub-frontend/description-page':
        return <BookDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/patterns':
        return <PatternDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/new-pattern':
        return <PatternDashboard refreshPage={refreshPage} />;
      case '/knitting-hub-frontend/pattern-page':
        return <PatternDashboard refreshPage={refreshPage} />;
      default:
        return <Dashboard refreshPage={refreshPage} />;
    }
  };

  let dashboard = changeDashboard();
  return <div className='App'>{dashboard}</div>;
}

export default App;
