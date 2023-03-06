export const Request = async (method, URL, data) => {
  const response = await fetch(URL, {
    method: method,
    body: JSON.stringify(data),
    headers: data
      ? {
          "X-RapidAPI-Key":
            "00f1d3928cmshac0fe61124e879dp118fb9jsn852c1c5aaad0",
          "X-RapidAPI-Host": "testimonial.p.rapidapi.com",
        }
      : {},
  });
  if (response.status >= 400) {
    return await response.json().then((errorResponseData) => {
      const errorMessage = new Error("Something went wrong!");
      errorMessage.data = errorResponseData;
      throw errorMessage;
    });
  }
  return await response.json();
};
