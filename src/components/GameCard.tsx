import { GameData } from '../interfaces/GameInterface';

type Props = {
    game: GameData;
};

const GameCard = ({ game }: Props) => {
    return (
        <div className='ff-dialog flex'>
            <div className='bg-white w-20 h-32 relative mr-6'>
                <img
                    src={game.picture}
                    className='object-contain w-full h-full'
                    alt={`An image of ${game.title}`}
                />
            </div>
            <div className='flex flex-col text-xl justify-center'>
                <h3 className='text-2xl'>{game.title}</h3>
                <p>
                    <span className='text-ffLightBlue mr-2'>PLATFORM</span>
                    {game.platform}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>RELEASE</span>
                    {game.releaseDate}
                </p>
            </div>
        </div>
    );
};

export default GameCard;
