import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import styles from "../styles/Home.module.css";
import { getName } from "../utils/wallets";
import Home from "./home";

import { coinbaseWallet } from "../connectors/coinbasewallet";
import { metaMask } from "../connectors/metamask";
import { walletConnect } from "../connectors/walletconnect";
import { URI_AVAILABLE } from "@web3-react/walletconnect";
import { getConfig, selectConnector } from "../actions/wallet/walletSlice";

import util_web3 from "../utils/web3";
import { useCookies } from "react-cookie";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./signup";
import ConnectWallet from "./connectwallet";
import Collection from "./collection";
import CardDetails from "./collection/CardDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cookie } from "@mui/icons-material";
import GlobalStyle from "../styles/Globalstyle";
import ThemeContext from "../contexts/ThemeContext";
import { light, dark } from "../styles/themes";
import useThemeMode from "../hooks/useThemeMode";
import Deneme from "./deneme";
const IndexPage: NextPage = () => {
  const { connector } = useWeb3React();

  const defaultConnector = useSelector(selectConnector);

  function getDefaultConnector(): string {
    switch (defaultConnector) {
      case "metamask":
        void metaMask.connectEagerly().catch(() => {
          console.debug("Failed to connect eagerly to metamask");
        });
        util_web3.connectWallet();
        return "metamask";
        break;
      case "coinbase":
        void coinbaseWallet.connectEagerly().catch(() => {
          console.debug("Failed to connect eagerly to coinbase wallet");
        });
        return "coinbase";
        break;
      case "walletconnect":
        walletConnect.events.on(URI_AVAILABLE, (uri: string) => {
          console.log(`uri: ${uri}`);
        });
        walletConnect.connectEagerly().catch(() => {
          console.debug("Failed to connect eagerly to walletconnect");
        });
        return "walletconnect";
        break;

      default:
        return "metamask";
    }
  }

  useEffect(() => {
    console.log(`Priority Connector is: ${getName(connector)}`);
    getDefaultConnector();
    dispatch(getConfig());
  }, []);

  const [currentTheme, setCurrentTheme] = useState("dark");
  // const [cookies, setCookie] = useCookies()
  const [cookies, setCookie, removeCookie] = useCookies(["CookieConsent"]);

  const setCurrentThemeAndSavePref = (theme) => {
    setCurrentTheme(theme);
    setCookie("CookieConsent", theme, {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
  };
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "dark" ? dark : light;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfig());
  }, []);

  return (
    <div className={styles.container}>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/collection" element={<Collection />}></Route>
              <Route path="/carddetails" element={<CardDetails />}></Route>
              <Route path="/connectwallet" element={<ConnectWallet />}></Route>
              <Route path="/deneme" element={<Deneme />}></Route>
            </Routes>
          </BrowserRouter>
          <Navbar />


          <Cookie />
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext>
    </div>
  );
};

export default IndexPage;