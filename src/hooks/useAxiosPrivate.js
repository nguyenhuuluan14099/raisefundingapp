import { axiosPrivate } from "api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const { auth } = useSelector((state) => state);
  const request = useRefreshToken();

  useEffect(() => {
    const requestAxiosPrivate = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseAxiosPrivate = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const preRequest = error.config;
        if (error?.response?.status === 403 || !preRequest.sent) {
          preRequest.sent = true;
          const newAccessToken = await request();
          preRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(preRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestAxiosPrivate);
      axiosPrivate.interceptors.response.eject(responseAxiosPrivate);
    };
  }, [auth.accessToken, request]);
  return axiosPrivate;
}
