import { FC } from "react";
import * as FaIcons from "react-icons/fa";

interface ProductCategoryProps {
    logo: string;
    name: string;
}

const ProductCategory: FC<ProductCategoryProps> = ({ logo, name }) => {

    const IconComponent = FaIcons[logo as keyof typeof FaIcons]; // Récupère l'icône correspondant au nom
    return (
        <div className="flex items-center gap-4 p-2 rounded-lg shadow-md">

            {IconComponent && <IconComponent size={30}/>}
            <a href={`/category/${name}`}>
                <h3 className="text-lg font-semibold">{name}</h3>
            </a>
        </div>
    )
        ;
};

export default ProductCategory;
