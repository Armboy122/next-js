import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h1>My website</h1>
      <Component {...pageProps} />
    </div>
  );
}
