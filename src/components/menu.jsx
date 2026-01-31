import './menu.css';
import { PIZZAS } from './data';

function PizzaItem({ nombre, img, precio, ingredientes, esEspecial }) {
    // RENDERIZADO CONDICIONAL: 
    // Creamos una variable para guardar cómo se verá el nombre
    let nombreMostrado = nombre;

    if (esEspecial === true) {
        nombreMostrado = nombre + " (Disponible) ⭐";
    }
    if (esEspecial === false) {
        nombreMostrado = nombre + " (Agotado) ❌";
    }

    return (
        <div className="card">
            <div className="header">
                {/* Usamos la variable que definimos arriba */}
                <h3 className="pizzaName">{nombreMostrado}</h3>
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

export default function MenuPizzeria() {
    return (
        <div className="container">
            <h1 className="title">Menú de Pizzas</h1>
            <div className="flexGrid">
                {PIZZAS.map((pizza) => (
                    <div key={pizza.id} className="column">
                        <PizzaItem
                            nombre={pizza.nombre}
                            img={pizza.img}
                            precio={pizza.precio}
                            ingredientes={pizza.ingredientes}
                            esEspecial={pizza.esEspecial} // Pasamos la nueva prop
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}