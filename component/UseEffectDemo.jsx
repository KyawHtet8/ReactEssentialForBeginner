import {useEffect, useState} from "react";

export const UseEffectDemo = () => {

    const [x, setX] =useState(0);
    const [y, setY] =useState(0);

    const logMouseEventPosition  = e => {
        console.log('This is mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }
        useEffect(() => {
            console.log('useEffect is called');
            window.addEventListener('mousemove', logMouseEventPosition);
        },[])

    return (
            <>
                <h1>Mouser Position</h1>
                <h4>Coordinate X - {x}, Y - {y} </h4>

            </>
    )
}