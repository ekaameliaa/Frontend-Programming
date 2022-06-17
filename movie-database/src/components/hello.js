/**
 * membuat komponen hello
 * componen merender elemen
 */

const Hello = (props) => {
    //diluar return adalah js biasa
    //destruction
    const { name } = props;
    return(
        //didalam retun adalah jsx
        <div className="hello">
            <h2>Hello react</h2>
            <p>Saya {name} Frontend Enginer</p>
        </div>
    )
}

export default Hello;