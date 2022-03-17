import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CharactersGroup from "../components/CharactersGroup";

const Home: NextPage = () => {
    return <div className={styles.container}>
        <Head>
            <title>Список персонажей</title>
            <meta name="description" content="Characters list"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <h1 className={"text-3xl font-semibold pb-10"}>Персонажи</h1>
            <CharactersGroup name={"Администраторы"} desc={"Великие"}
                             characters={[{id: "Shiraori", name: "Шираори"}, {id: "Kuro", name: "Куро"}]}/>
        </main>
    </div>
}

export default Home