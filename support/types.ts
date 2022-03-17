export type CharacterProfileDB = { status: string, affiliation: string[], occupation: string[], relations: { [key: string]: string } };

export type CharacterCharacteristicsDB = { race: string[], sex: boolean, age: string[], hairColor: string, eyeColor: string };

export type CharacterParametersDB = { titles: string[], sobriquets: string[], profile: CharacterProfileDB, characteristics: CharacterCharacteristicsDB }

export type CharacterDB = { name: string, desc: string, appearance: string, personality: string, parameters: CharacterParametersDB };

export type CharactersSetDB = { [key: string]: CharacterDB };

export type CharactersGroupDB = { name: string, desc: string, characters: Set<string> };

export type CharactersGroupsSetDB = { [key: string]: CharactersGroupDB };