

export default function ListTodo(props){
    return (
        <ul>
            {props.todo.map((item, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>

                    <input
                        type="checkbox"
                        onChange={() => props.finish(item.id)}
                        defaultChecked={item.done}
                    />

                    <span style={ item.done  ? {color: 'red', textDecoration: 'line-through'} : {} }> {item.name} </span>

                    <button
                        style={{ marginLeft: '5px' }}
                        onClick={()=>props.remove(item.id)}
                    > xoa </button>
                </li>
            ))}
        </ul>
    )
}