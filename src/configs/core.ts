import axios, { AxiosInstance } from 'axios';

/**
 * The function `withErrorHandler` is a TypeScript function that adds error handling logic to an Axios
 * instance by intercepting responses.
 * @param {AxiosInstance} instance - The `instance` parameter in the `withErrorHandler` function is
 * expected to be an AxiosInstance, which is an interface for Axios HTTP client. It is used to make
 * HTTP requests and handle responses in a more structured way.
 * @returns The function `withErrorHandler` is returning a function that sets up an interceptor on the
 * Axios instance to handle responses. If there is an error in the response, it checks if there are
 * specific error messages in the response data. If there are errors, it rejects the promise with the
 * errors. If there are no specific errors, it rejects the promise with the response data or status
 * text. If there is
 */
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
  return import.meta.env.VITE_API_URL + '/api' + url;
};

/**
 * The function `useFetchWrapper` creates an axios instance with specified headers and applies an error
 * handler before returning it.
 * @returns The `useFetchWrapper` function is returning an instance of Axios with custom headers set.
 * It also includes an error handling function `withErrorHandler` that is not defined in the provided
 * code snippet.
 */
const useFetchWrapper = () => {
  const API = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
  });
  withErrorHandler(API);
  return API;
};

export { useFetchWrapper, baseUrlTransform };
