import {ReactNode} from "react";

const CharacterPageElement = (props: { children?: ReactNode, className?: string }) => {
    return <div className={props.className ? props.className + " border-solid border-8" : props.className}>
        {props.children}
    </div>
}

export default CharacterPageElement;