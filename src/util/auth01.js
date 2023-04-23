import Cookies from "js-cookie";
const accessTokenKey = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const objToken = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};
export const saveToken = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    Cookies.set(accessTokenKey, accessToken, {
      ...objToken,
    });
    Cookies.set(refreshTokenKey, refreshToken, {
      ...objToken,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const getToken = () => {
  const accessToken = Cookies.get(accessTokenKey);
  const refreshToken = Cookies.get(refreshTokenKey);
  return {
    accessToken,
    refreshToken,
  };
};
export const logOut = () => {
  const accessToken = Cookies.get(accessTokenKey);
  if (accessToken) {
    Cookies.remove(accessTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
