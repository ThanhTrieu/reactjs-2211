
export default function ButtonComponent(props) {
    // props: tham so chua toan bo porps tu component khac truyen sang
    return (
        <button
            name={props.name}
            type={props.type}
            onClick={ () => props.click()}
        >{props.children}</button>
    )
}