// pages/_app.js

import '../styles/partb.css'; // Import the partb.css globally here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
