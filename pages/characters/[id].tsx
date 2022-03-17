import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {characters} from "../../support/data";
import {CharacterDB} from "../../support/types";
import Head from "next/head";

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
    return <div className={"h-full flex-grow"}>
        <Head>
            <title>{props.character.name}</title>
            <meta name="description" content={props.character.id}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={"h-full"}>
            <div className={"flex flex-row h-full"}>
                <div className={"block w-2/3 overflow-y-auto h-full"}>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                    <h1 className={"text-3xl font-semibold pb-10"}>{props.character.name}</h1>
                </div>
                <div className={"block w-1/3 h-full overflow-y-auto"}>
                    {/*<Image className={"rounded-md"} loader={CharactersImageLoader} src={props.character.id} width={203}*/}
                    {/*       height={454} layout={"responsive"} alt={props.character.name}/>*/}
                    aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>aa<br/>
                </div>
            </div>
        </main>
    </div>
}

export default Character;