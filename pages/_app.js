import "../styles/globals.css";
import { useState, useEffect, createContext } from "react";

// Set correct viewport height for different devices
if (typeof window !== "undefined") {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

// Create width context with intial null value
export const WidthContext = createContext(null);

function MyApp({ Component, pageProps }) {
  // Create state for device width
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <WidthContext.Provider value={{ width }}>
      <Component {...pageProps} width={width} />
    </WidthContext.Provider>
  );
}

export default MyApp;
