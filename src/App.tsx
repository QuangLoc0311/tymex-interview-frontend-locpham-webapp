import { BrowserRouter, Route, Routes } from "react-router";
import { Products } from "./pages/Products";
import Background from "./assets/background.png";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition classNames="transition-route" timeout={300}>
          <div className="main">
            <img className="bg-image" src={Background} />
            <Routes>
              <Route path={"/"} element={<Products />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
