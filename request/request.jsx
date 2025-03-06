export const PostRequest = async (data) => {
  // data is optional
  return fetch("http://localhost:3000/api/car", {
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
export const Get = async () => {
  const res = await fetch("http://localhost:3000/api/car", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
export const GetSingle = async (id) => {
  const res = await fetch(`http://localhost:3000/api/car/${id}`);
  const data = await res.json();
  return data;
};
