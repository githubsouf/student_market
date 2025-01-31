import {FC, useState} from 'react';
import ProductList from '../components/product/ProductList';
import {products} from '../data/data';
import {Products} from '../types/types';

interface ProductListPageProps {
    count?: number,
    title?: string,
    className?: string
}

const ProductListPage: FC<ProductListPageProps> = ({
                                                       count = 6,
                                                       title = "",
                                                       className='mb-10'
                                                   }) => {
    const [cart, setCart] = useState<Products[]>([])
    const handleAddToCart = (product: Products) => {
        setCart([...cart, product])
        alert(`${product.title} ajouté au panier`)
    }
    return (
        <div className={className}>
            <ProductList products={products} title={title} count={count} onAddToCart={handleAddToCart}/>
        </div>
    );
};

export default ProductListPage;