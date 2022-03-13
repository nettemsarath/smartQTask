import axios from "axios";

const fetchAvailableOrders = async () => {
  try {
    const { data } = await axios.get(
      "https://smartqdemo.firebaseio.com/events-data.json"
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export { fetchAvailableOrders };
