import { useEffect, useState } from "react";

function Counter(){
    //variabel angka

    /**
     * usestate mengembelaikan sepasang value dalam bentuk array: [0, function()]
     */
    const [ angka, setAngka ] = useState(0);

    function addAngka(){
        //state tidak boleh diubah sevara langsung
    
        setAngka(angka + 1);
    }

    function updateDom(){
        console.log("Lifecycle: Dimount");

        //melakukan side effect mengakses DOM
        document.title = `Hasil: ${angka}`;
    }

    /**
     * useEffect ini dijalankan pada lifecycle mouunt dan update
     */

    useEffect(updateDom, [angka])

    console.log("Lifecycle: Dirender");

    return(
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>add</button>
        </div>
    )
}

export default Counter;