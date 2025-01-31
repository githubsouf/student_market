import { FC, useState } from 'react';
import ProductList from '../components/product/ProductList';
import Filter from '../components/ui/Filter';
import { products, categories } from '../data/data';
import { Products} from '../types/types';

const CategoryPage: FC = () => {
    const [cart, setCart] = useState<Products[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Products[]>(products);

    const handleAddToCart = (product: Products) => {
        setCart([...cart, product])
        alert(`${product.title} ajouté au panier`)
    }

    const handleFilterSelect = (filter: string[]) => {
        const filtered = products.filter((product) => product.category === filter[0]);
        setFilteredProducts(filtered)
    };

    return (
        <div className='flex gap-4 flex-wrap justify-center'>
            <div className="w-1/4">
                <Filter
                    filters={categories.map(category => category.title)}
                    onFilterSelect={handleFilterSelect}
                />
            </div>

            <div>
                <ProductList count={6} title={"BEST SELLL"} products={filteredProducts} onAddToCart={handleAddToCart}/>
            </div>
        </div>
    );
};

export default CategoryPage;