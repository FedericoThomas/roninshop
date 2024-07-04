const products = [
  {
    id: "1",
    name: "Hoodie Berserk",
    price: 2500,
    category: "Hoodies",
    img: "https://http2.mlstatic.com/D_NQ_NP_659665-MCO53380927133_012023-O.webp",
    stock: 50,
    description: "Hoodie Japones Bersek color Negro",
  },

  {
    id: "2",
    name: "Remera Japon",
    price: 1500,
    category: "Remeras",
    img: "https://acdn.mitiendanube.com/stores/903/627/products/honshi-blanca-dorso-b70b218c1d0abe9b0b17090433425884-1024-1024.jpg",
    stock: 40,
    description: "Remera Japon, Tori, color Blanco",
  },
  {
    id: "3",
    name: "Musculosa Japon ",
    price: 3500,
    category: "Musculosas",
    img: "https://http2.mlstatic.com/D_NQ_NP_643444-MLA47682564471_092021-O.webp",
    stock: 15,
    description: "Musuculosa Japon, Ola, color Gris",
  },
];

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});

export default getProducts;
