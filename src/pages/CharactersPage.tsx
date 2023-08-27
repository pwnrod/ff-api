import { useState } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';
import CharacterCard from '../components/cards/CharacterCard';
import { CharacterData } from '../interfaces/CharacterInterface';

const CharactersPage = () => {
    const { data, loading, error } = useFetchCharacters();
    const [currentCharacter, setCurrentCharacter] =
        useState<CharacterData | null>(null);
    const animatedStyles = useAnimatedPadding();

    if (loading) return 'Loading...';
    if (error) return 'Error: ' + error.message;

    let renderedCharacterList: React.ReactNode[] | null = null;
    let renderedCurrentCharacter: React.ReactNode | null = null;

    const onCharacterClick = (id: string) => {
        const clickedCharacter: CharacterData | null =
            data?.find((character) => character.id === id) ?? null;
        setCurrentCharacter(clickedCharacter);
    };

    if (data) {
        renderedCharacterList = data?.map((character) => {
            return (
                <li key={character.id} className=''>
                    <a
                        href='#'
                        onClick={() => onCharacterClick(character.id)}
                        data-message={character.description}
                        className='ff-hover-finger block relative text-2xl'
                    >
                        {character.name}
                    </a>
                </li>
            );
        });
    }

    if (currentCharacter) {
        renderedCurrentCharacter = (
            <CharacterCard character={currentCharacter} />
        );
    }

    return (
        <animated.main
            style={animatedStyles}
            className='max-w-5xl grid grid-cols-5 mx-auto relative'
        >
            <section className='ff-dialog py-4 pr-0 col-span-3'>
                <div className='pl-12 max-h-[365px] overflow-y-scroll'>
                    <ul className='grid grid-cols-2 grid-rows-3 gap-2'>
                        {renderedCharacterList}
                    </ul>
                </div>
            </section>
            <section className='ff-dialog p-12 col-span-2'>
                {currentCharacter ? (
                    renderedCurrentCharacter
                ) : (
                    <div>
                        <h2 className='text-xl text-center'>
                            Scroll through and click a character to learn more
                            about them
                        </h2>
                    </div>
                )}
            </section>
        </animated.main>
    );
};

export default CharactersPage;
