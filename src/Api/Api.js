import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
      });
}
const GetApiDetails = () => {
  const headers = {
    "Content-Type": "application/json,",
  };
  return AxiosRequest(
    `https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?page=1&limit=5`,
    "GET",
    headers,
  {},
  );
};

// const getApiJobDetails = (id) => {
//   const headers = {
//     "Content-Type": "application/json,",
//   };
//   return AxiosRequest(
//     "https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs"+ id,'GET',headers,{}
    
//   );

// };

export { GetApiDetails };
