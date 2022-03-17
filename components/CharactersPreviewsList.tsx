import CharacterLinkPreviewImageWithName from "./CharacterLinkPreviewImageWithName";

const CharactersPreviewsList = (props: { charactersIds: Set<string> }) => {
    return <div className={"flex justify-center flex-wrap"}>
        {
            Array.from(props.charactersIds).map((id) => {
                return <CharacterLinkPreviewImageWithName key={id} id={id}/>
            })
        }
    </div>
}
export default CharactersPreviewsList;