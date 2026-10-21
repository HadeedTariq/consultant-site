import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/app/routes/HomePage";
import Layout from "./pages/app/components/Layout";
import ContactUsPage from "./pages/app/components/ContactUsSection";
import AboutUsPage from "./pages/app/routes/AboutUs";
import PrivacyPolicyPage from "./pages/app/routes/PrivacyPolicy";
import TermsAndConditionsPage from "./pages/app/routes/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-conditions" element={<TermsAndConditionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
