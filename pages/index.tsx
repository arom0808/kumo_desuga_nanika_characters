import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CharactersGroup from "../components/CharactersGroup";
import {charactersGroups} from "../support/data";

type groupsT = { [key: string]: { name: string, desc: string } }

export const getStaticProps: GetStaticProps<{ groups: groupsT }> = async () => {
    const groups = Object.fromEntries(Object.getOwnPropertyNames(charactersGroups).map(value => {
        return [value, {name: charactersGroups[value].name, desc: charactersGroups[value].desc}];
    }));
    return {props: {groups}};
}

const Home: NextPage<{ groups: groupsT }> = (props) => {
    return <div className={styles.container}>
        <Head>
            <title>Список персонажей</title>
            <meta name="description" content="Characters list"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <h1 className={"text-3xl font-semibold pb-10"}>Персонажи</h1>
            <div className={"flex flex-col items-center divide-y-4"}>
                {
                    Object.getOwnPropertyNames(props.groups).map(value => <CharactersGroup key={value} id={value}/>)
                }
            </div>
        </main>
    </div>
}

export default Home