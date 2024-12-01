import {useState} from "react";

export const UseStateArrayComponent = () => {

    const [items, setItems] = useState([]);
    const [fruit, setFruit] = useState('');

    const addItem = () => {
            setItems([...items,
                {id: items.length ,
                name: fruit}])
    }
    return (<>

            <p>Fruit: <input value={fruit} onChange={(e => setFruit(e.target.value))} type="text"/></p>
        <p>
            <button onClick={addItem}>Add Item</button>
        </p>

        <hr/>
        {
            items.map(item => (
                <ul key={item.id}>
                    <li>{item.id + 1} :: {item.name}</li>
                </ul>
            ))
        }
    </>)
}