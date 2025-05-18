//Group for types:to define the items inside a Cart

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

//We want to persist the data about a product even
//when you refresh or leave the page(make use of local storage)
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items
              .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter((item) => item.quantity > 0),
          };
        }),

      clearCart: () =>
        set((state) => {
          return { items: [] };
        }),
    }),
    { name: "cart" }
  )
);
