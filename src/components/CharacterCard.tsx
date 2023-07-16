import { CharacterData } from "../interfaces/CharacterInterface";

interface Props {
    character: CharacterData;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <figure className="bg-slate-300 rounded-t-lg max-h-28 overflow-hidden">
                <img
                    className="rounded-t-lg mx-auto h-28"
                    src={character.pictures[0]?.url}
                    alt={`A lil image of ${character.name}`}
                />
            </figure>
            <div className="p-5 font-normal text-gray-700 dark:text-gray-400">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {character.name}
                    </h5>
                </a>
                <p className="mb-3">Origin: {character.origin}</p>
                <p className="mb-3">Age: {character.age}</p>
                <p className="mb-3">Gender: {character.gender}</p>
                <p className="mb-3">
                    Height:{" "}
                    {character.height === "??"
                        ? character.height
                        : character.height + "m"}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;
