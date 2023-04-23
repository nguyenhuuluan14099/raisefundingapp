import axios from "api/axios";

export function requestAuthRegister(data) {
  console.log(data);
  return axios.post("/auth/register", {
    ...data,
  });
}

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};
export const requestAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-type": "application/json",
    refreshToken: token,
  });
};
