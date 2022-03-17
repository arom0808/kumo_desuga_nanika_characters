import Image from 'next/image'
import {CharactersListT} from "../types";

const CharactersPreviewsList = (props: { characters: CharactersListT }) => {
    return <div>
        {
            props.characters.map((character) =>
                <div key={character.id}>
                    <Image src={`/images/characters/preview/${character.id}.webp`} width={100} height={100} alt={character.name}/>
                </div>)
        }
    </div>
}
export default CharactersPreviewsList;