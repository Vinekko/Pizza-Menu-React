import margarita from '../assets/margarita.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import hawaiana from '../assets/hawaiana.jpg';
import cuatroQuesos from '../assets/cuatro_quesos.jpg';
import vegetariana from '../assets/vegetariana.jpg';
import bbqChicken from '../assets/bbq_chicken.jpg';

//Lista de pizzas (buena practica para una lista de objetos es tenerla en un archivo aparte)
export const PIZZAS = [
    {
        id: 1,
        nombre: "Margarita",
        img: margarita,
        precio: 10,
        ingredientes: ["Tomate", "Mozzarella", "Albahaca"]
    },
    {
        id: 2,
        nombre: "Pepperoni",
        img: pepperoni,
        precio: 12,
        ingredientes: ["Pepperoni", "Mozzarella", "Salsa"]
    },
    {
        id: 3,
        nombre: "Hawaiana",
        img: hawaiana,
        precio: 11,
        ingredientes: ["Piña", "Jamón", "Queso"]
    },
    {
        id: 4,
        nombre: "Cuatro Quesos",
        img: cuatroQuesos,
        precio: 13,
        ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina"]
    },
    {
        id: 5,
        nombre: "Vegetariana",
        img: vegetariana,
        precio: 11,
        ingredientes: ["Pimientos", "Cebolla", "Champiñones"]
    },
    {
        id: 6,
        nombre: "BBQ Chicken",
        img: bbqChicken,
        precio: 14,
        ingredientes: ["Pollo", "Salsa BBQ", "Cebolla Morada"]
    }
];