import globalStyles from "../styles/globalCss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <globalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
