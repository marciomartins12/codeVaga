import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Restaurantes from "../../../Services/restauranteUsuario.json";
const HomepageRestaurante = ({id}) =>{
    const navigate  = useNavigate();
    const restaurante = Restaurantes.find((e)=> e.id === id)
  useEffect(()=>{
      if (id == null){
          navigate("/")
      }

  },[])
    return(
        <section>
            nome { restaurante.nome}
        </section>
    )
}
export default HomepageRestaurante;