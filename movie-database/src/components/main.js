import Hello from "./hello"
/**
 * Membuat componen main
 * componen main menampung konten utama
 */
const Main = () => {
    return(
        <main>
            <Hello name = "Eka"/>
            <Hello name = "Amelia"/>
            <Hello name = "Putri"/>
            <Hello name = "akila"/>
            <Hello name = "sahla"/>
        </main>
    )
}

export default Main;