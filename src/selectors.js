export const selectAvailableOrders = (state) => {
  return { loadingAvailableOrders: true, availableOrders: null, error: null };
};

export const selectSetAvailableOrders = (state) => state.getAvailableOrders;
