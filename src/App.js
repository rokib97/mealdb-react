import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

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
  console.log(cart);
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

  return (
    <div className="App">
      <Header handleSearch={handleSearch} openModal={openModal} />
      <Meals searchValue={searchValue} handleAddToCart={handleAddToCart} />
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
          <h1 key={crt.idMeal}>{crt.strMeal}</h1>
        ))}
      </Modal>
    </div>
  );
}

export default App;
