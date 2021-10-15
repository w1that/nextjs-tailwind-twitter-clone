import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <div className="dark:bg-black "><Component {...pageProps} /></div>
}

export default MyApp
