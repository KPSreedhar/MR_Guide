import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibraryDetails from "./pages/LibraryDetails";
import ApiDetails from "./pages/ApiDetails";
import FrameworkDetails from "./pages/FrameworkDetails";
import Navbar from "./components/Navbar"; // Add this import
import Libraries from "./pages/Libraries";
import Apis from "./pages/Apis"
import Frameworks from "./pages/Frameworks";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./components/Footer";
import { AuthProvider } from "./Firebase/AuthProvider"; // Add this import
import Login from "./pages/LoginPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id" element={<DetailsPage />} />
          <Route path="/libraries" element={<Libraries />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/library/:id" element={<LibraryDetails />} />
        <Route path="/api/:id" element={<ApiDetails />} />
        <Route path="/framework/:id" element={<FrameworkDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App