import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import './style.css'

const Home = ()=>{
    return(
        <>
        
        <Header/>
    
        <h1 className="titulo">Home</h1>
       <section>
        <div className="linha">
            <Card nome = "Clara" profissao ="Analista"/>
            <Card nome = "Vitor" profissao ="Analista"/>
            <Card nome = "Daniel" profissao ="Analista"/>
        </div>
        </section>

        <Footer/>
       
        </>
    )
}
export default Home