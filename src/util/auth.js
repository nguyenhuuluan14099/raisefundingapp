import Cookies from "js-cookie";
const accessTokenKey = "crow_accessTokenKey";
const refreshTokenKey = "crow_refreshTokenKey";

const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    Cookies.set(accessTokenKey, accessToken, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refreshToken, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
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
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
