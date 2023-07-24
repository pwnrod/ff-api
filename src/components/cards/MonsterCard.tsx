import { MonsterData } from '../interfaces/MonsterInterface';

type Props = {
    monster: MonsterData;
};

const MonsterCard = ({ monster }: Props) => {
    return (
        <div className='ff-dialog flex'>
            <div className='bg-white w-20 h-32 relative mr-6'>
                <img
                    src={monster.picture}
                    className='object-cover w-full h-full'
                    alt={`An image of ${monster.name}`}
                />
            </div>
            <div className='flex flex-col text-xl justify-center'>
                <h3 className='text-2xl'>{monster.name}</h3>
                <p>
                    <span className='text-ffLightBlue mr-2'>HP</span>
                    {monster.hitPoints}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>MP</span>
                    {monster.manaPoints}
                </p>
                <p>
                    <span className='text-ffLightBlue mr-2'>WEAK</span>
                    {monster.elementalWeakness}
                </p>
            </div>
        </div>
    );
};

export default MonsterCard;
