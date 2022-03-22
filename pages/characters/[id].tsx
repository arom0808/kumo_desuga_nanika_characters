import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {characters} from "../../support/data";
import {CharacterDB} from "../../support/types";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Character.module.css";
import {CharactersAdditionalImageLoaderBuilder, CharactersImageLoader} from "../../support/imageLoaders";
import Link from "next/link";
import CharacterPageElement from "../../components/CharacterPageElement";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.getOwnPropertyNames(characters).map(id => ({params: {id}}));
    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps<{ character: CharacterDB & { id: string } }, { id: string }> = async (context) => {
    if (!context.params)
        throw new Error();
    return {props: {character: {id: context.params.id, ...characters[context.params.id]}}};
}

const Character: NextPage<{ character: CharacterDB & { id: string } }> = (props) => {
    const characterAdditionalImageLoader = CharactersAdditionalImageLoaderBuilder(props.character.id);
    return <div className={"h-full p-4"}>
        <Head>
            <title>{props.character.name}</title>
            <meta name="description" content={props.character.id}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={styles.characterPageMain}>
            <CharacterPageElement className={styles.mainPhoto}>
                <Image src={props.character.id} loader={CharactersImageLoader} layout={"responsive"} width={"100%"}
                       height={"100%"} alt={"Изображение персонажа"}/>
            </CharacterPageElement>
            <CharacterPageElement className={styles.shortDesc}>
                {props.character.shortDesc}
            </CharacterPageElement>
            <CharacterPageElement className={styles.titles}>
                {props.character.titles.map((value, index) =>
                    <div key={index}>{value}</div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.nicknames}>
                {props.character.nicknames.map((value, index) =>
                    <div key={index}>{value}</div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.belonging}>
                {props.character.belonging.map((value, index, array) =>
                    <div key={index}>
                        {index + 1 == array.length ? <div>{value}</div> : <del>{value}</del>}
                    </div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.relations}>
                {Object.getOwnPropertyNames(props.character.relations).map(
                    value => <div key={value}>
                        <Link href={`/characters/${value}`} passHref={true}>
                            <a className={"text-green-600"}>{characters[value].name}</a>
                        </Link>
                        {" " + props.character.relations[value]}
                    </div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.race}>
                {props.character.race.map((value, index, array) =>
                    <div key={index}>
                        {index + 1 == array.length ? <div>{value}</div> : <del>{value}</del>}
                    </div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.occupation}>
                {props.character.occupation.map((value, index) =>
                    <div key={index}>{value}</div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.quote}>
                {props.character.quote}
            </CharacterPageElement>
            <CharacterPageElement className={styles.ages}>
                {Object.getOwnPropertyNames(props.character.ages).map((value, index) =>
                    <div key={index}>
                        {`${value} - ${props.character.ages[Number(value)]}`}
                    </div>
                )}
            </CharacterPageElement>
            <CharacterPageElement className={styles.averageParameters}>
                {props.character.averageParameters.map((value, index) =>
                    <div key={index}>{`Средняя ${value.name} - ${value.value}`}</div>)}
            </CharacterPageElement>
            <CharacterPageElement className={styles.additionalPhoto1}>
                <Image src={"0"} loader={characterAdditionalImageLoader} layout={"responsive"} width={"100%"}
                       height={"100%"} alt={"Дополнительное персонажа 1"}/>
            </CharacterPageElement>
            <CharacterPageElement className={styles.additionalPhoto2}>
                <Image src={"1"} loader={characterAdditionalImageLoader} layout={"responsive"} width={"100%"}
                       height={"100%"} alt={"Дополнительное персонажа 2"}/>
            </CharacterPageElement>
            <CharacterPageElement className={styles.additionalPhoto3}>
                <Image src={"2"} loader={characterAdditionalImageLoader} layout={"responsive"} width={"100%"}
                       height={"100%"} alt={"Дополнительное персонажа 3"}/>
            </CharacterPageElement>
            <CharacterPageElement className={styles.additionalPhoto4}>
                <Image src={"3"} loader={characterAdditionalImageLoader} layout={"responsive"} width={"100%"}
                       height={"100%"} alt={"Дополнительное персонажа 4"}/>
            </CharacterPageElement>
        </main>
    </div>
}

export default Character;