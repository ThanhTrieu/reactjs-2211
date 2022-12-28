

export default function Button(props){
    return (
        <button onClick={()=>props.click()} type={props.type}>{props.children}</button>
    )
}