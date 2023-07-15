import { CharacterData } from "../interfaces/CharacterInterface";

interface Props {
    character: CharacterData;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={character.pictures[0]?.url} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {character.name}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {character.description}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;
