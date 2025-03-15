const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const PostRequest = async (data) => {
  // data is optional
  return fetch(`${endpoint}/api/car`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

// get api
export const Get = async () => {
  const res = await fetch(`${endpoint}/api/car`, {
    cache: "no-cache",
    // mode: "no-cors",
  });
  const data = await res.json();
  return data;
};
export const GetSingle = async (id) => {
  const res = await fetch(`${endpoint}/api/car/${id}`);
  const data = await res.json();
  return data;
};
