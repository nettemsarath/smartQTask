import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { fetchAvailableOrders } from "@/httpRequest";

const store = (set) => ({
  loadingAvailableOrders: true,
  availableOrders: null,
  error: null,
  getAvailableOrders: async () => {
    try {
      const allOrders = await fetchAvailableOrders();
      set({
        loadingAvailableOrders: false,
        availableOrders: allOrders,
      });
    } catch (error) {
      set({
        loadingAvailableOrders: false,
        error: error,
      });
    }
  },
});

const useStore = create(
  persist(process.env.NODE_ENV !== "production" ? devtools(store) : store, {
    name: "event-management", // unique name
    getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
  })
);

export default useStore;
