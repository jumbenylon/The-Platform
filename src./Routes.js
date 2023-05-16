import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home'
import SignUpPage from './pages/signup';
import SignInPage from './pages/signin';
import OnboardingPage from './pages/onboarding';
import DashboardPage from './pages/dashboard';
import Clients from './pages/how-it-works/clients';
import Freelancers from './pages/how-it-works/freelancers';
import Enterprise from './pages/how-it-works/enterprise';
import { BaseLayout } from './components';
import { Outlet } from 'react-router-dom/dist';

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout><Outlet /></BaseLayout>} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
      <Route exact path="/signin" element={<SignInPage />} />
      <Route exact path='/onboarding' element={<OnboardingPage />} />
      <Route exact path='/dashboard' element={<DashboardPage />} />
      <Route path="how-it-works">
        {/* <Route element={<div><h1>Each Page</h1>
          <Outlet />
        </div>} /> */}
        <Route exact path="clients" element={<Clients />} />
        <Route exact path="freelancers" element={<Freelancers />} />
        <Route exact path="enterprise" element={<Enterprise />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default MyRoutes;