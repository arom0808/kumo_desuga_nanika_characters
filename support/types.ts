export type CharacterDB = {
    name: string,
    shortDesc: string,
    titles: string[],
    nicknames: string[],
    belonging: string[],
    relations: { [characterId: string]: string },
    race: string[],
    occupation: string[],
    quote: string,
    ages: { [value: number]: string },
    averageParameters: { name: string, value: number }[]
};

export type CharactersSetDB = { [key: string]: CharacterDB };

export type CharactersGroupDB = { name: string, desc: string, characters: Set<string> };

export type CharactersGroupsSetDB = { [key: string]: CharactersGroupDB };