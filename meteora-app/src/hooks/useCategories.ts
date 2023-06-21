const useCategories = (size: "mobile" | "tablet" | "desktop") => {
  const categories = [
    {
      name: "Camisetas",
      image: `/assets/categorias/${size}/camisetas.png`,
    },
    {
      name: "Bolsas",
      image: `/assets/categorias/${size}/bolsas.png`,
    },
    {
      name: "Calçados",
      image: `/assets/categorias/${size}/calcados.png`,
    },
    {
      name: "Calças",
      image: `/assets/categorias/${size}/calcas.png`,
    },
    {
      name: "Casacos",
      image: `/assets/categorias/${size}/casacos.png`,
    },
    {
      name: "Óculos",
      image: `/assets/categorias/${size}/oculos.png`,
    },
  ];

  return categories;
};

export default useCategories;
