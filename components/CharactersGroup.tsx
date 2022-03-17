import CharactersPreviewsList from "./CharactersPreviewsList";
import {charactersGroups} from "../support/data";

const CharactersGroup = (props: { id: string }) => {
    const group = charactersGroups[props.id];
    return <div className={"w-full"}>
        <div className={"flex justify-center"}>
            <div className={"flex flex-col items-center"}>
                <div className={"text-2xl font-semibold"}>{group.name}</div>
                <div className={"text-xl font-normal"}>{group.desc}</div>
            </div>
        </div>
        <CharactersPreviewsList charactersIds={group.characters}/>
    </div>
}
export default CharactersGroup;