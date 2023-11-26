import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import Footer from "./components/footer";
import ProductForm from "./components/ProductForm";
import GestionUsers from "./pages/GestionUsers";
import Acceuil from "./components/Acceuil.jsx";
import Profile from "./pages/Profile";
import ProductsDetails from "./components/ProductDetails";
import GestionProducts from "./pages/GestionProducts";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/liste" element={<ProductsDetails />} />

            <Route
              path="/login"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/acceuil" />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail" element={<productDetails />} />
            <Route path="/acceuil" element={<Acceuil />} />
            <Route path="/users" element={<GestionUsers />} />
            <Route path="/products" element={<GestionProducts />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
