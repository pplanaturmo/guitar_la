import { useEffect, useState } from "react";
import { db } from "../data/db";
import { useMemo } from "react";

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const STOCK = 6;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itemIndex = cart.findIndex((element) => element.id === item.id);

    if (itemIndex < 0) {
      //no existe
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      if (item.quantity < STOCK) {
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity++;
        setCart(updatedCart);
      }
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < STOCK) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  }

  function emptyCart() {
    const empty = [];
    setCart(empty);
  }

  //derived state

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    emptyCart,
    isEmpty,
    totalPrice,
  };
};
