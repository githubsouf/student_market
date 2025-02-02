import { FC, useState } from "react";

interface FilterProps {
    filters: string[];
    onFilterSelect: (selectedFilters: string[]) => void;
}

const Filter: FC<FilterProps> = ({ filters, onFilterSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
    };
    const applyFilters = () => {
        onFilterSelect(selectedFilters);
        setIsOpen(false); // Fermer le menu après application
    };

    return (
        <div className="relative bg-white shadow-md rounded-md p-4 w-64">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left text-white p-2 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold"
            >
                Sélectionner des filtres ▾
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 p-3">
                    <ul className="space-y-2">
                        {filters.map((filter, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id={`filter-${index}`}
                                    checked={selectedFilters.includes(filter)}
                                    onChange={() => toggleFilter(filter)}
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <label htmlFor={`filter-${index}`} className="text-gray-700">
                                    {filter}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={applyFilters}
                        className="mt-3 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Appliquer
                    </button>
                </div>
            )}
        </div>
    );
};

export default Filter;
