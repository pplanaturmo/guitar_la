// import { useEffect, useState } from "react";
// import { db } from "./data/db";
import Guitar from "./Components/Guitar";
import Header from "./Components/Header";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    emptyCart,
    isEmpty,
    totalPrice,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        emptyCart={emptyCart}
        isEmpty={isEmpty}
        totalPrice={totalPrice}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar, index) => {
            return (
              <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Guitar LA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
