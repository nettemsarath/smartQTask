export const selectAvailableOrders = (state) => {
  return {
    loadingAvailableOrders: state.loadingAvailableOrders,
    availableOrders: state.availableOrders,
    error: state.error,
  };
};

export const selectSetAvailableOrders = (state) => state.getAvailableOrders;
