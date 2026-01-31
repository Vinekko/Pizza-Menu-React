import './menu.css';
import { PIZZAS } from './data';

//Componente de cada pizza
function PizzaItem({ nombre,img, precio, ingredientes }) {
    return (
        <div className="card">
            <div className="header">
                <h3 className="pizzaName">{nombre}</h3>
                <img className="pizzaImg" src={img} alt={nombre} />
                <span className="price">${precio}</span>
            </div>
            <ul className="ingredients">
                {ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
                </ul>
        </div>
    );
};

// Componente Principal (El Menú)
export default function MenuPizzeria() {
    return (
        <div className="container">
            <h1 className="title">Menú de Pizzas</h1>
            {/* Contenedor Flexbox principal */}
            <div className="flexGrid">
                {PIZZAS.map((pizza) => ( //Map itera por cada uno de los elementos de la lista de pizzas
                    <div key={pizza.id} className="column">
                        <PizzaItem
                            nombre={pizza.nombre}
                            img={pizza.img}
                            precio={pizza.precio}
                            ingredientes={pizza.ingredientes}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}