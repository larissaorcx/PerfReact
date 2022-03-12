import {List, ListRowRenderer} from 'react-virtualized';
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }>
    onAddToWishlist: (id: number) => void
}

export function SearchResults({totalPrice, results, onAddToWishlist}: SearchResultsProps){

    const rowRenderer: ListRowRenderer = ({index, key, style}) => {
        return(
        <div key={key} style={style}>
            <ProductItem
            product={results[index]}
            onAddToWishlist={onAddToWishlist} />
        </div>
        )
    }

    return(
        <div>
            <h2>Soma de todos os valores: {totalPrice}</h2>

            <List 
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={25} //num de itens pre carregados 
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

            {/* {results.map(product => {
                return(
                    <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist}/>
                );
            })} */}
        </div>
    )
}