

export default function InputNumber(props){
    return (
        <input
            onChange={props.change}
            type={props.type}
            name={props.name}
        />
    )
}