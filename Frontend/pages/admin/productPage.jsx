import { use, useEffect, useState } from "react";
import Loader from "../../src/components/loader";
import axios from "axios";
import ProductCard from "../../src/components/productCard";

export default function ProductPage(){

    const [products, setProducts] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        if (isPageLoading) {
          axios.get(import.meta.env.VITE_API_URL + "/api/products")
            .then((response) => {
              setProducts(response.data);
              setIsPageLoading(false);
            });
        }
    }, [isPageLoading]);

    return (
        <div className="w-full h-[calc(100vh-100px)]">
            {isPageLoading ? <Loader/> :
                <div className="w-full h-full flex flex-row flex-wrap gap-[20px] p-[20px] justify-center overflow-y-auto">
                    {products.map((item) => {
                        return(
                            <ProductCard key={item.id} product={item}/>
                        )
                    }
                    
                        
                    )}
                    {products.map((item) => {
                        return(
                            <ProductCard key={item.id} product={item}/>
                        )
                    }
                    
                        
                    )}
                    {products.map((item) => {
                        return(
                            <ProductCard key={item.id} product={item}/>
                        )
                    }
                    
                        
                    )}
                    
                    </div>}
        </div>

        
    );
}