import {CharactersGroupT} from "../types";
import CharactersPreviewsList from "./CharactersPreviewsList";

const CharactersGroup = (props: CharactersGroupT) => {
    return <div>
        <div className={"flex justify-center"}>
            <div className={"text-2xl font-semibold"}>{props.name}</div>
        </div>
        <CharactersPreviewsList characters={props.characters}/>
    </div>
}
export default CharactersGroup;