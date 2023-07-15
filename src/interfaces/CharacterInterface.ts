interface Picture {
    id: string;
    url: string;
    primary: string;
    collectionId: string;
}

export interface CharacterData {
    id: string;
    name: string;
    japaneseName: string | null;
    age: string;
    gender: string;
    race: string;
    job: string;
    height: string;
    weight: string;
    origin: string;
    description: string | null;
    pictures: Picture[];
}
