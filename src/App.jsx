import { AddCategory } from './componentes/AgregarCategoria';
import { GridGif } from './componentes/GridGIfs';
import { useState } from "react";

const App = () => {
  // Componente principal de la aplicación.

  const [categories, setCategories] = useState([]);
  // Define 'categories' como el estado para almacenar las categorías que el usuario ingresa.
  // Inicialmente es un array vacío, lo que significa que no hay categorías seleccionadas.

  const [selectedIndex, setSelectedIndex] = useState(0);
  // Estado para manejar la categoría seleccionada.

  const handleCategoryClick = (index) => {
    setSelectedIndex(index);
  };
  // Función que actualiza el índice de la categoría seleccionada.

  return (
    <div className="container mt-5">
      <h1>Buscador de Gifs</h1>
      <AddCategory categories={categories} setCategories={setCategories} />

      {/* Renderizado de categorías como list-group */}
      <ul className="list-group mt-4">
        {categories.length === 0 ? (
          <li className="list-group-item">No hay categorías</li>
        ) : (
          categories.map((category, index) => (
            <li
              key={category}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
              onClick={() => handleCategoryClick(index)}
            >
              {category}
            </li>
          ))
        )}
      </ul>

      {/* Renderiza solo el GridGif de la categoría seleccionada */}
      {categories[selectedIndex] && (
        <GridGif key={categories[selectedIndex]} category={categories[selectedIndex]} />
      )}
    </div>
  );
};

export default App;
