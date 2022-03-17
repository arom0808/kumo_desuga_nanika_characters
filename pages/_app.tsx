import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from 'next/link'

function MyApp({Component, pageProps}: AppProps) {
    return <div>
        <header className={"shadow-md flex justify-center"}>
            <Link href={"/aaaa/"} passHref={true}>
                <a className={"text-4xl font-medium"}>Главная</a>
            </Link>
        </header>
        <Component {...pageProps} />
    </div>
}

export default MyApp