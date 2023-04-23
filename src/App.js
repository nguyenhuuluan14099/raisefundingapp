import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice.js";
import { getToken, logOut } from "util/auth01.js";
import RequireAccessPage from "pages/RequireAccessPage.js";
import { permissions } from "constant/permissions.js";

//Luan's project

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.js"));
const CampaignPage = lazy(() => import("./pages/CampaignPage.js"));
const PaymentPage = lazy(() => import("./pages/PaymentPage.js"));
const CampaignAddNew = lazy(() => import("./pages/CampaignAddNew.js"));
const LayoutDashboard = lazy(() => import("layout/LayoutDashboard.js"));
const CampaignView = lazy(() => import("pages/CampaignView.js"));
const UnAuthorizePage = lazy(() => import("pages/UnAuthorizePage.js"));
const WithdrawPage = lazy(() => import("pages/WithdrawPage.js"));

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { accessToken } = getToken();

    if (user && user.id) {
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: accessToken,
        })
      );
    } else {
      const { refreshToken } = getToken();
      if (refreshToken) {
        dispatch(authRefreshToken(refreshToken));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [user, dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/unauthorize"
            element={<UnAuthorizePage></UnAuthorizePage>}
          ></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route
            element={
              <RequireAccessPage
                allowPermission={[permissions.campaign.CREATE_CAMPAIGN]}
              ></RequireAccessPage>
            }
          >
            <Route
              path="/start-campaign"
              element={<CampaignAddNew></CampaignAddNew>}
            ></Route>
          </Route>

          <Route
            path="/dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
        </Route>

        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
