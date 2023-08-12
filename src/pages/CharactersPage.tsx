import useFetchCharacters from '../hooks/useFetchCharacters';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';


const CharactersPage = () => {
    const { data, loading, error } = useFetchCharacters();
    const animatedStyles = useAnimatedPadding();

    if (loading) return 'Loading...';
    if (error) return 'Error: ' + error.message;

    let renderedCharacters: React.ReactNode[] | null = null;

    if (data) {
        renderedCharacters = data?.map((character) => {
            return (
                <li className="">
                    <a href='#' className='ff-hover-finger block relative text-xl'>{character.name}</a>
                </li>
            );
        });
    }

    return (
        <animated.main
            style={animatedStyles}
            className='max-w-5xl grid grid-cols-5 mx-auto relative'
        >
            <section className='ff-dialog p-12 pr-0 col-span-3'>
                <div className='max-h-[500px] overflow-scroll'>
                    <ul className='grid grid-cols-2 grid-rows-3 gap-2'>
                        {renderedCharacters}
                    </ul>
                </div>
            </section>
            <section className='ff-dialog p-12 col-span-2'>
            </section>
        </animated.main>
    );
};

export default CharactersPage;
