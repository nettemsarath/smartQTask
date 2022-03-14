export const selectAvailableOrders = (state) => {
  return {
    loadingAvailableOrders: state.loadingAvailableOrders,
    availableOrders: state.availableOrders,
    error: state.error,
  };
};

export const selectSetAvailableOrders = (state) => state.getAvailableOrders;

export const selectAddItemsToCart = (state) => state.addItemsToCart;
export const selectItemsInCart = (state) => state.itemsInCart;

export const selectRemoveItemFromCart = (state) => state.removeItemFromCart;
export const selectRemoveallItemsFromCart = (state) =>
  state.removeallItemsFromCart;
