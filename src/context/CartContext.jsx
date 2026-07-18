import { useMemo, useState } from 'react';
import { CartContext } from './cartContext';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity = 1, size) => {
    if (!product || product.stock === 0) return;

    const selectedSize = size ?? product.availableSize?.[0];
    setItems((current) => {
      const index = current.findIndex(
        (item) => item.id === product.id && item.size === selectedSize,
      );
      if (index === -1) return [...current, { ...product, quantity, size: selectedSize }];

      return current.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
          : item,
      );
    });
  };

  const updateQuantity = (id, size, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: Math.max(0, Math.min(quantity, item.stock)) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id, size) =>
    setItems((current) => current.filter((item) => item.id !== id || item.size !== size));

  const count = items.reduce((total, item) => total + item.quantity, 0);
  const value = useMemo(
    () => ({ items, count, addToCart, updateQuantity, removeFromCart }),
    [items, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
