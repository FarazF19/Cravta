import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Enterprise_SignUp from "./pages/Enterprise_SignUp";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/onboard" element={<Onboarding />} />
        <Route path="/enterprise" element={<Enterprise_SignUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
