import './App.css';
import LandingPage from './features/public-console/landing-page/landing-page';
import { Route, Routes } from 'react-router-dom'
import PageHeader from '../src/features/elements/page-header/page-header'
import PageFooter from '../src/features/elements/page-footer/page-footer'
import Help from './features/public-console/help/help';
import Company from './features/public-console/company/company';

function App() {
  return (
    <div>
      <PageHeader />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/help" Component={Help} />
        <Route path="/company" Component={Company} />

      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;
