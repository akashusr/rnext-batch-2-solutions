// dependencies
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Layout>
      <Homepage />
      <ToastContainer autoClose={2000} />
    </Layout>
  );
};

export default App;
