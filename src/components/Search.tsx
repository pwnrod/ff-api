import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = async () => {
            await fetch("https://www.moogleapi.com/api/v1/characters/search", {
                method: "GET",
            });
        };
        console.log(searchTerm);
        setSearchTerm("");
    };

    return (
        <div className="w-1/2 mx-auto">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col items-center space-y-2"
            >
                <label htmlFor="searchTerm">Enter Search Term</label>
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    className="border-gray-300 border rounded-sm"
                />
                <button
                    type="submit"
                    className="bg-green-600 rounded-sm px-3 py-1 text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Search;
