import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { fetchAvailableOrders } from "@/httpRequest";

const store = (set) => ({
  loadingAvailableOrders: true,
  availableOrders: {
    extras: { categories: null },
    menu: null,
    paymentMethods: null,
    submenu: null,
  },
  error: null,
  getAvailableOrders: async () => {
    try {
      const allOrders = await fetchAvailableOrders();

      const menuItems = allOrders.menu.map((menu_item) => {
        return {
          ...menu_item,
          id: Math.floor(Math.random() * 1000),
        };
      });
      set({
        loadingAvailableOrders: false,
        availableOrders: {
          extras: allOrders.extras,
          menu: menuItems,
          paymentMethods: allOrders.paymentMethods,
          submenu: allOrders.submenu,
        },
      });
    } catch (error) {
      set({
        loadingAvailableOrders: false,
        error: error,
      });
    }
  },
  itemsInCart: [],
  addItemsToCart: (newOrder) => {
    set((state) => ({
      itemsInCart: [...state.itemsInCart, newOrder],
    }));
  },
  removeItemFromCart: (order) => {
    set((state) => ({
      itemsInCart: state.itemsInCart.filter(
        (item) => item.foodid !== order.foodid
      ),
    }));
  },
  removeallItemsFromCart: (order) => {
    set((state) => ({
      itemsInCart: [],
    }));
  },
});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
