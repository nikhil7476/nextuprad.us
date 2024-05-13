// components/GoogleTagManager.js

import { useEffect } from "react";

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", gtmId);

    return () => {
      document.head.removeChild(script);
    };
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;
