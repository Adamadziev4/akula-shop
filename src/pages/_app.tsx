import { CartProvider } from "@/context/CartProvider";
import { FavoriteProvider } from "@/context/FavoriteProvider";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <Component {...pageProps} />
      </FavoriteProvider>
    </CartProvider>
  );
}
