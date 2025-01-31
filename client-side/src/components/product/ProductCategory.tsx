import { FC } from "react";
import * as FaIcons from "react-icons/fa"; // Importez tous les icônes FontAwesome

interface ProductCategoryProps {
    logo: string;  // Le nom de l'icône
    name: string;  // Le titre de la catégorie
    onClick: () => void;
}

const ProductCategory: FC<ProductCategoryProps> = ({ logo, name, onClick }) => {
    // Recherche dynamique de l'icône à partir de son nom (chaine de caractères)
    const IconComponent = FaIcons[logo as keyof typeof FaIcons]; // Récupère l'icône correspondant au nom
    return (
        <div className="flex items-center gap-4 p-2 rounded-lg shadow-md">
            {IconComponent && <IconComponent size={30} />} {/* Affiche l'icône */}
            <h3 className="text-lg font-semibold">{name}</h3>
            <button
                onClick={onClick}
                className="ml-auto px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                <a href={`/category/`}>{name}</a>
            </button>
        </div>
    );
};

export default ProductCategory;
