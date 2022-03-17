import {ImageLoader} from "next/image";

export const CharactersPreviewLoader: ImageLoader = (resolverProps) => {
    return `/images/characters/preview/${resolverProps.src}.webp`;
}

export const CharactersImageLoader: ImageLoader = (resolverProps) => {
    return `/images/characters/image/${resolverProps.src}.webp`;
}