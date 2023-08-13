import { CharacterData } from '../../interfaces/CharacterInterface';

type Props = {
    character: CharacterData;
};

const CharacterCard = ({ character }: Props) => {
    return (
        <div className='flex flex-col'>
            <div className='bg-white w-20 h-32 relative mx-auto'>
                <img
                    src={character.pictures[0]?.url}
                    className='object-cover w-full h-full'
                    alt={`An image of ${character.name}`}
                />
            </div>
            <div className='mt-4 flex flex-col text-xl justify-center'>
                <p>
                    <span className='text-ffLightBlue mr-2'>NAME</span>
                    {character.name}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>AGE</span>
                    {character.age}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>JOB</span>
                    {character.job}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>ORIGIN</span>
                    {character.origin}
                </p>
            </div>
        </div>
    );
};

export default CharacterCard;
