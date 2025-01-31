import ProductListPage from './ProductListPage';
import CategoriesList from "../components/product/CategoriesList";
import { categories} from '../data/data';

const HomePage = () => {
        return (
                <div className="flex gap-10 flex-wrap justify-center ">
                        <div className="w-1/3">
                            <CategoriesList categories={categories}/>
                        </div>
                        <div>
                            <ProductListPage />
                        </div>
                </div>

                );};
export default HomePage;