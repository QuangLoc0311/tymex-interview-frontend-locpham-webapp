import { BrowserRouter, Route, Routes } from "react-router";
import { Products } from "./pages/Products/Products";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Banner } from "./components/Banner/Banner";
import { ConfigProvider, theme } from "antd";

function App() {
  return (
    <BrowserRouter>
      <TransitionGroup component={null}>
        <CSSTransition classNames="transition-route" timeout={300}>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <div className="main">
              <Header />
              <Banner />
              <Routes>
                <Route path={"/"} element={<Products />} />
              </Routes>
              <Footer />
            </div>
          </ConfigProvider>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
}

export default App;
