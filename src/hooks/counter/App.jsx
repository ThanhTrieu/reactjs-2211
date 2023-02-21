import React, { useState } from "react";
import Button from "./components/Button";
import Result from "./components/Result";

const AppCounter = () => {
    // useState: hooks cua reactJS
    // chi duoc su dung hooks trong function component
    // luon luon co tien to use dung dang truoc - de phan biet day la hooks
    // hooks: useState - dung de xu ly state cho function component
    const [count, setCount] = useState(10);
    // count: ten cua state ma chung ta can dinh nghia
    // setCount: phuong thuc de cap nhat - thay doi state(count)
    // useState: tra ve 1 mang bao gom 2 phan tu (phan tu thu nhat chinh la state cua ung dung can khai bao - phan tu thu 2 chinh la phuong thuc cap nhat lai state cua ung dung)
    // tham so (0) truyen vao useState - chinh la gia tri mac dinh gan cho state
    /*
        this.state = {
            count: 0
        }
    */
   // setCount tuong duong nhu this.setState trong class component
   const changeCount = () => {
        setCount(count + 1); // replace state cu bang state moi
   }

    return (
        <>
            <Result result={count} />
            <Button 
                type="button" name="increment"
                click={changeCount}
            > + </Button>
        </>
    )
}
export default AppCounter;