import './menu.css';
import margarita from '../assets/margarita.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import hawaiana from '../assets/hawaiana.jpg';
import cuatroQuesos from '../assets/cuatro_quesos.jpg';
import vegetariana from '../assets/vegetariana.jpg';
import bbqChicken from '../assets/bbq_chicken.jpg';

//Lista de pizzas
const PIZZAS = [
    { id: 1, nombre: "Margarita",img:margarita, precio: 10, ingredientes: ["Tomate", "Mozzarella", "Albahaca"] },
    { id: 2, nombre: "Pepperoni",img:pepperoni, precio: 12, ingredientes: ["Pepperoni", "Mozzarella", "Salsa"] },
    { id: 3, nombre: "Hawaiana",img:hawaiana, precio: 11, ingredientes: ["Piña", "Jamón", "Queso"] },
    { id: 4, nombre: "Cuatro Quesos",img:cuatroQuesos, precio: 13, ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina"] },
    { id: 5, nombre: "Vegetariana",img:vegetariana, precio: 11, ingredientes: ["Pimientos", "Cebolla", "Champiñones"] },
    { id: 6, nombre: "BBQ Chicken",img:bbqChicken, precio: 14, ingredientes: ["Pollo", "Salsa BBQ", "Cebolla Morada"] },
];

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