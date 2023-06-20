const useCategories = (size: "mobile" | "tablet" | "desktop") => {
  const categories = [
    {
      name: "Camisetas",
      image: `/assets/categorias/${size}/Categoria camiseta.png`,
    },
    {
      name: "Bolsas",
      image: `/assets/categorias/${size}/Categoria Bolsas.png`,
    },
    {
      name: "Calçados",
      image: `/assets/categorias/${size}/Categoria Calçados.png`,
    },
    {
      name: "Calças",
      image: `/assets/categorias/${size}/Categoria calças.png`,
    },
    {
      name: "Casacos",
      image: `/assets/categorias/${size}/Categoria casacos.png`,
    },
    {
      name: "Óculos",
      image: `/assets/categorias/${size}/Categoria óculos.png`,
    },
  ];

  return categories;
};

export default useCategories;
