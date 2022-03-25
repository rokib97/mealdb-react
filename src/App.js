import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./Footer/Footer";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleSearch = (input) => {
    setSearchValue(input);
  };
  const handleAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header handleSearch={handleSearch} openModal={openModal} cart={cart} />
      <Welcome />
      <Meals searchValue={searchValue} handleAddToCart={handleAddToCart} />
      <Footer></Footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn btn-success" onClick={closeModal}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
        {cart.map((crt) => (
          <Cart cart={crt} />
        ))}
      </Modal>
    </div>
  );
}

export default App;
