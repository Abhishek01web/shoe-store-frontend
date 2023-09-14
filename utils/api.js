import { strapi_api_token, api_url } from "./urls";

const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " + strapi_api_token,
    },
  };

  const res = await fetch(`${api_url}${endpoint}`, options);
  const data = await res.json();

  return data;

};

export default fetchDataFromApi;

export const makepaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${api_url}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + strapi_api_token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
  });
  const data = await res.json()
  return data;
}