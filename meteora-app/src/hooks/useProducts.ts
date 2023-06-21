import {
  tshirtImage,
  pantsImage,
  tennisImage,
  jacketImage,
  glassImage,
  purseImage,
} from "@/utils/cardImagesImports";

const products = [
  {
    id: 1,
    name: "Camiseta Conforto",
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: 70.0,
    image: tshirtImage,
  },
  {
    id: 2,
    name: "Calça Alfaiataria",
    description:
      "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    price: 180.0,
    image: pantsImage,
  },
  {
    id: 3,
    name: "Tênis Chunky",
    description:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    price: 250.0,
    image: tennisImage,
  },
  {
    id: 4,
    name: "Jaqueta Jeans",
    description:
      "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    price: 150.0,
    image: jacketImage,
  },
  {
    id: 5,
    name: "Óculos Redondo",
    description:
      "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: 120.0,
    image: glassImage,
  },
  {
    id: 6,
    name: "Bolsa Coringa",
    description:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: 120.0,
    image: purseImage,
  },
];

export default products;
