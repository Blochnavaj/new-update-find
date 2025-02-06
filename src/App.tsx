import './App.css';
import { useState, useEffect } from 'react';
import Login from './pages/User-authentication/Logindesk';
import PasswordRecovery from './pages/User-authentication/PasswordRecovery';
import Registration from './pages/User-authentication/RegistrationDesk';
import EmailVerified from './pages/User-authentication/EmailVerified';
import PasswordUpdated from './pages/User-authentication/PasswordUpdated';
import RegistrationSuccess from './pages/User-authentication/RegistrationSuccess';
import ResetPassword from './pages/User-authentication/ResetPassword';
import RecoveryDone from './pages/User-authentication/RecoveryDone';

import Profile from './pages/Profile/ProfilePage';
import Subscription from './pages/Profile/SubscriptionDeck';
import Notifications from './pages/Notifications/Notifications';
import Support from './pages/Support/Support';

import Catalog from './pages/Catalog/Catalog';

import ProductListing from './pages/Listing/ProductListing';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from './pages/preloader/Preloader';
import AdminNotifications from './pages/Admin/AdminNotifications';

function App() {
  {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Preloader />;
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/emailverified" element={<EmailVerified />} />
        <Route path="/passwordupdated" element={<PasswordUpdated />} />
        <Route path="/registrationsuccess" element={<RegistrationSuccess />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/recoverydone" element={<RecoveryDone />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/support' element={<Support />} />

        <Route path='/catalog' element={<Catalog />} />

        <Route path='/productlisting' element={<ProductListing />} />

        <Route path='/adminpanel' element={<AdminNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;
