import axios from "axios";

// const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const PostRequest = async (data) => {
  // data is optional
  return fetch(`api/car`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

// get api
// export const Get = async () => {
//   const res = await axios.get(`api/car`);
//   const { data } = res;
//   return data;
// };
export const Get = async () => {
  const res = await fetch(`api/car`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
export const GetSingle = async (id) => {
  const res = await fetch(`api/car/${id}`);
  const data = await res.json();
  return data;
};
