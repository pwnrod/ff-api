export const getRandomGil = (currentGil: number, maxGil: number) => {
    const increment = Math.floor(Math.random() * (maxGil - currentGil + 1)) + 1;
    return Math.min(currentGil + increment, maxGil);
};
