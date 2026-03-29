import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
