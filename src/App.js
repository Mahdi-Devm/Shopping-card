import { useState } from "react";

const fakeData = [
  {
    id: 1,
    name: "Automatic Pen",
    image: "https://dummyimage.com/150x150/000/fff&text=Pen+1",
    price: 15,
    brand: "Pilot",
  },
  {
    id: 2,
    name: "Gel Pen",
    image: "https://dummyimage.com/150x150/000/fff&text=Pen+2",
    price: 19,
    brand: "Uni-ball",
  },
  {
    id: 3,
    name: "Fountain Pen",
    image: "https://dummyimage.com/150x150/000/fff&text=Pen+3",
    price: 7,
    brand: "Parker",
  },
  {
    id: 4,
    name: "bore Pen",
    image: "https://dummyimage.com/150x150/000/fff&text=Pen+4",
    price: 25,
    brand: "Parker",
  },
];
export default function App() {
  const [name, setname] = useState("");
  const [beand, setbeand] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(
    "https://dummyimage.com/150x150/000/fff&text=Pen+5"
  );
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(fakeData);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { name, beand, price: parseFloat(price), image };
    setname("");
    setbeand("");
    setprice("");
    setimage(
      `https://dummyimage.com/150x150/000/fff&text=Pen+${
        1 + allProducts.length
      }`
    );
    if (name === "" && price === "" && beand === "") {
      alert("😑😑😐😐😶😶");
    } else {
      setAllProducts([...allProducts, newItem]);
    }
  }
  function closeitem(id) {
    setAllProducts(allProducts.filter((item) => item.id !== id));
  }
  function Buyitem(item) {
    setCart([...cart, item]);
  }
  function close(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <>
      <div>
        <Headers />
      </div>
      <div className="maincontianer">
        <div>
          <ShoppingCartItem cart={cart} close={close} />
          <AddList
            name={name}
            setname={setname}
            beand={beand}
            setbeand={setbeand}
            price={price}
            setprice={setprice}
            handleSubmit={handleSubmit}
          />
        </div>
        <Allproduact
          allProducts={allProducts}
          closeitem={closeitem}
          Buyitem={Buyitem}
        />
      </div>
      <Footer />
    </>
  );
}

function Headers() {
  return (
    <header
      style={{
        backgroundColor: "#262524",
        color: "#f8f8f8",
        textAlign: "center",
        padding: "20px 0",
        fontSize: "1.8rem",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "4px solid #efeeec",
      }}
    >
      <h1
        style={{
          margin: 0,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        header
      </h1>
    </header>
  );
}
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#262524",
        color: "#f8f8f8",
        textAlign: "center",
        padding: "20px 0",
        fontSize: "1.2rem",
        fontWeight: "bold",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
        borderTop: "4px solid #efeeec",
      }}
    >
      <p
        style={{
          margin: 0,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        footer
      </p>
    </footer>
  );
}
function ShoppingCartItem({ cart, close }) {
  return (
    <div className="shopping-cart">
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="shopping-cart-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <h6>${item.price}</h6>
            <button className="button" onClick={() => close(item.id)}>
              Close
            </button>
          </div>
        ))
      )}
    </div>
  );
}
function AddList({
  name,
  setname,
  beand,
  setbeand,
  price,
  setprice,
  handleSubmit,
}) {
  return (
    <form className="add-list-form" onSubmit={handleSubmit}>
      <button className="button">Submit</button>
      <h3 className="text-primary text-center">Item</h3>
      <h4>Name</h4>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <h4>Beand</h4>
      <input
        type="text"
        placeholder="beand"
        value={beand}
        onChange={(e) => setbeand(e.target.value)}
      />
      <h4>Price</h4>
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
    </form>
  );
}

function Allproduact({ allProducts, closeitem, Buyitem }) {
  return (
    <div className="allproduact">
      {allProducts.map((item) => {
        return (
          <Itemproduact
            item={item}
            key={item.id}
            closeitem={closeitem}
            Buyitem={Buyitem}
          />
        );
      })}
    </div>
  );
}

function Itemproduact({ item, closeitem, Buyitem }) {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h3>{item.brand}</h3>
      <h3>{item.price}</h3>
      <div>
        <button className="buttons" onClick={() => Buyitem(item)}>
          Buy Item
        </button>
        <button className="buttons" onClick={() => closeitem(item.id)}>
          ⨉
        </button>
      </div>
    </div>
  );
}
