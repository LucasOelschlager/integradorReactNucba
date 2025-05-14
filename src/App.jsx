import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./routes/Home";
import { Nosotros } from "./routes/Nosotros";
import { Login } from "./routes/Login";
import { UserProvider } from "./context/userContext";
import { CategoryProvider } from "./context/categoryContext";
import "./index.css";
import { Register } from "./routes/Register";
import { initializeUsersInLocalStorage } from "./utils/localStorage";
import { CartProvider } from "./context/cartContext";

function App() {
  initializeUsersInLocalStorage();
  return (
    <CartProvider>
      <UserProvider>
        <CategoryProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </CategoryProvider>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
2;
