import axios, { AxiosInstance } from "axios";

const withErrorHandler = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response) {
        const errorObject = error.response;
        if (errorObject.data?.errors) {
          return Promise.reject(errorObject.data?.errors);
        } else {
          return Promise.reject(errorObject.data || errorObject.statusText);
        }
      } else {
        return Promise.reject(error.message);
      }
    }
  );
};

const baseUrlTransform = (url: string) => {
  return import.meta.env.VITE_API_URL + url;
};

const useFetchWrapper = () => {
  /* Creating an axios instance with a baseURL of /api/v2. */
  const API = axios.create({
    // TODO: fix headers
    headers: {
      "Content-Type": "application/json",
    },
  });
  withErrorHandler(API);
  return API;
};

export { useFetchWrapper, baseUrlTransform };
