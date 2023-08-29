import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";

function App() {
  const dataUserRedux = useSelector((state) => state.user.account);
  console.log(">>> dataUserRedux", dataUserRedux);

  const { user, loginContext } = useContext(UserContext);

  console.log(">>> user: ", user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
