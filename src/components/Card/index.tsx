import './style.css'
import User from "../../assets/user.jpg"


const Card = (props:any) => {
    const { nome, profissao } = props;
  
    return (
        <div className="card">
            <div className="container">
               <img src={User}/>
                <h4><b>{nome}</b></h4>
                <p>{profissao}</p>
            </div>
        </div>
    );
  };

export default Card