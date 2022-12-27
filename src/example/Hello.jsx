import './hello.css'
import logoReact from '../assets/react.svg'

const Hello = () => {
    // tra ve jsx dung dom (virtual dom)
    if(true){
        return <h2> Hoc ReactJS </h2>
    }
    
    return (
       <>
            <h1 className="title"> Hello you !</h1>
            <img src={logoReact} />
       </>
    )
}
// Hello : function component
export default Hello;