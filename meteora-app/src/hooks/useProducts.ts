import IProduct from "@/types/IProduct";
import {
  tshirtImage,
  pantsImage,
  tennisImage,
  jacketImage,
  glassImage,
  purseImage,
} from "@/utils/cardImagesImports";

const products: IProduct[] = [
  {
    id: "1",
    name: "Camiseta Conforto",
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: 70.0,
    image: tshirtImage,
    colors: ["Azul", "Marrom", "Preto"],
    sizes: ["P", "PP", "M", "G", "GG"],
    category: "Camisetas",
  },
  {
    id: "2",
    name: "Calça Alfaiataria",
    description:
      "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    price: 180.0,
    image: pantsImage,
    colors: ["Creme", "Marrom", "Preto"],
    sizes: ["34", "36", "38", "40", "42"],
    category: "Calças",
  },
  {
    id: "3",
    name: "Tênis Chunky",
    description:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    price: 250.0,
    image: tennisImage,
    colors: ["Branco", "Cinza", "Preto"],
    sizes: ["34", "35", "36", "38", "41"],
    category: "Calçados",
  },
  {
    id: "4",
    name: "Jaqueta Jeans",
    description:
      "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    price: 150.0,
    image: jacketImage,
    colors: ["Azul Claro", "Offwhite", "Preto"],
    sizes: ["P", "PP", "M", "G", "GG"],
    category: "Casacos",
  },
  {
    id: "5",
    name: "Óculos Redondo",
    description:
      "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: 120.0,
    image: glassImage,
    colors: ["Prata", "Dourado", "Cinza Chumbo"],
    sizes: ["Único"],
    category: "Óculos",
  },
  {
    id: "6",
    name: "Bolsa Coringa",
    description:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: 120.0,
    image: purseImage,
    colors: ["Marrom Claro", "Marrom Escuro", "Preto"],
    sizes: ["Único"],
    category: "Bolsas",
  },
];

export default products;
