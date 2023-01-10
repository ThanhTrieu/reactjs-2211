

export default function ButtonTodo(props) {
    return (
        <button
            type={props.type}
            onClick={() => props.click()}
        >{props.children}</button>
    )
}