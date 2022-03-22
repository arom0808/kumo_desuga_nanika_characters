import {ImageLoader} from "next/image";

export const CharactersPreviewLoader: ImageLoader =
    resolverProps => `/images/characters/preview/${resolverProps.src}.webp`;

export const CharactersImageLoader: ImageLoader =
    resolverProps => `/images/characters/image/${resolverProps.src}/main.webp`;

export const CharactersAdditionalImageLoaderBuilder: (characterId: string) => ImageLoader =
    characterId => resolverProps => `/images/characters/image/${characterId}/additional/${resolverProps.src}.webp`;