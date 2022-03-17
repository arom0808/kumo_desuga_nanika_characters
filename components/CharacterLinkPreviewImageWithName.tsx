import Image from "next/image";
import {CharactersPreviewLoader} from "../support/imageLoaders";
import Link from "next/link";
import {characters} from "../support/data";

const CharacterLinkPreviewImageWithName = (props: { id: string }) => {
    const character = characters[props.id];
    return <div className={"relative m-2 rounded-md border border-solid border-black basis-36"}>
        <Link href={`/characters/${props.id}`}><a>
            <Image className={"rounded-md"} loader={CharactersPreviewLoader} src={props.id} width={100}
                   height={100} layout={"responsive"} alt={character.name}/>
            <div
                className={"absolute bottom-0 right-0 text-base text-gray-50 bg-black px-1 rounded-tl-xl"}>{character.name}</div>
        </a></Link>
    </div>;
}

export default CharacterLinkPreviewImageWithName;