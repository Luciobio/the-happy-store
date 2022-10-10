import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import './ItemList.css'

const ItemList = ({ items, loading }) => {
    const showItems = items.map(prod => <Item key={prod.id} prod={prod} />)

    const isLoading = loading ?
        (
            <Loading />
        ) : (
            <div className="ItemList">
                {showItems}
            </div>
        );

    return (
        isLoading
    )
}

export default ItemList;