import { FC } from "react";
import ProductCategory from "./ProductCategory";
import { Categories } from "../../types/types";

interface CategoriesListProps {
    categories: Categories[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div className="flex flex-col gap-4">
            {categories.map((category) => (
                <ProductCategory
                    key={category.id}
                    logo={category.icon}  // Passe le nom de l'icône comme chaîne
                    name={category.title}
                />
            ))}
        </div>
    );
};

export default CategoriesList;
