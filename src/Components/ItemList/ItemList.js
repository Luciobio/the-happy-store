import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items, loading}) => {
    const showItems = items.map(prod => <Item key= {prod.id} prod= {prod}/>)

    const isLoading = loading? <h2>Loading...</h2> : (
        <div className="ItemList">
            {showItems}
        </div>
    );

    return (
        isLoading
    )
}

export default ItemList;