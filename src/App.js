import './App.css';
import LandingPage from './features/public-console/landing-page/landing-page';
import { Route, Routes } from 'react-router-dom'
import PageHeader from '../src/features/elements/page-header/page-header'
import PageFooter from '../src/features/elements/page-footer/page-footer'
import Help from './features/public-console/help/help';
import Company from './features/public-console/company/company';
import Pricing from './features/public-console/pricing/pricing';
import Business from './features/public-console/business/business';
import PaymentGateway from './features/public-console/payment-gateway/payment-gateway';
import Duo from './features/public-console/duo/duo';
import Verified from './features/public-console/verified/verified';

function App() {
  return (
    <div>
      <PageHeader />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/help" Component={Help} />
        <Route path="/company" Component={Company} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/business" Component={Business} />
        <Route path="/paymentGateway" Component={PaymentGateway} />
        <Route path="/duo" Component={Duo} />
        <Route path="/verified" Component={Verified} />
      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;
