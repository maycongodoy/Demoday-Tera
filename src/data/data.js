import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Os Melhores Tênis",
  subtitle: "Para seus pés",
  img: heroimg,
  btntext: "Nosso Produtos",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Top Vendas",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Compre Agora",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Compre Agora",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "DESTAQUES",
  title: "NIKE AIR WITH EDIÇÃO LIMITADA",
  text: "Nosso propósito é mover o mundo para frente. Atuamos construindo comunidades, protegendo nosso planeta e aumentando o acesso ao esporte..",
  btn: "SAIBA MAIS...",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "DESTAQUES",
  title: "NIKE SNEAKERS AIR LANÇAMENTO",
  text: "O brilho vive nos tênis Nike Sneakers Air Lancing, o basquete OG que dá um novo toque ao que você conhece melhor: sobreposições costuradas duráveis, acabamentos limpos e a quantidade perfeita de flash para fazer você brilhar.",
  btn: "SAIBA MAIS...",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Melhores Avaliações",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Compre Agora",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Modelo de assinatura da Jordan Brands nos últimos anos, Jayson Tatum estará lançando o Air Jordan 37 nesta temporada antes de atingir potencialmente seu primeiro tênis de assinatura com a Jumpman, que ele havia rumores de estar em andamento recentemente através de seu Twitter.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Mais informação"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Chegando na hora certa para o outono, esta próxima versão do Zoom Freak 4 aparentemente se inspira no Dia de Ação de Graças. Laranja e marrom, dois grampos do feriado, são usados ​​em toda a parte superior, vestindo as partes não banhadas em tons de cinza.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Mais informação"
    },
    {
      title: "Nike Air Max Plus",
      text: "O Nike Air Max Plus aproveitou a revelação de várias cores nos últimos meses. E ao embarcarmos oficialmente na temporada de outono, um conjunto adicional foi adicionado ao calendário, incluindo este recém-revelado colorway cinza e laranja.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Mais informação"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular série de AJ1s com o popular bloqueio de cores com o sabor original Yellow Toe. O colorway foi revelado no PE pelo músico Zach Myers, quase quatro anos depois, os fanáticos por Jordan finalmente terão sua chance de lançar um GR.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Mais informação"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Mais informação"
    },
    {
      title: "Puma Announces Breanna",
      text: "Pela primeira vez em mais de uma década, uma silhueta de basquete exclusiva está sendo feita para uma das melhores e mais brilhantes estrelas da WNBA, a medalhista de ouro olímpica e estrela do Seattle Storm, Breanna Stewart. Puma Stewie 1 Quiet Fire estará disponível nesta sexta-feira.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Mais informação"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "De alternâncias de renda a reformas inspiradas na cidade, o Nike Air Force 1 apresentou uma série de modificações exclusivas. Aqui, porém, a marca está reduzindo as coisas, optando por uma colorway simples liderada principalmente por preto e Laranja Laser.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Mais informação"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "O mundo da Sanrio é vasto e repleto de muitos personagens icônicos. Poucos na família, no entanto, rivalizam com a imensa influência da Hello Kitty, que foi a mascote de tudo, desde mercadorias de Pringles até colaborações de tênis.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Mais informação"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "A estética noturna vista aqui é aplicada aos painéis de couro preto caído da parte superior e à construção de malha perfurada da língua, enquanto o acabamento Royal e os Swooshes do antepé proporcionam intriga adicional à paleta escurecida.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Mais informação"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


const ArrayTennis2 = 
[
    {
      "id": "94313731",
      "name": "Tênis Nike Revolution 5 Max" ,
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
    },
    {
      "id": "94313762",
      "name": "Tênis Nike Revolution 5",
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94313762.jpg"
    },
    
    { 
      "id": "943137XQ",
      "name": "Tênis Nike Revolution 5",
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/943137XQ.jpg"
    },
    {
      "id": "95077714",
      "name": "Tênis Asics Patriot 12 Noosa",
      "price": 199.99,
      "oldPrice": 279.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95077714.jpg"
    },
    {
      "id": "9507779N",
      "name": "Tênis Asics Patriot 12 Noosa",
      "price": 199.99,
      "oldPrice": 279.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9507779N.jpg"
    },
    {
      "id": "92601102",
      "name": "Tênis Oakley Modoc Low 3.0",
      "price": 449.99,
      "oldPrice": 559.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/92601102.jpg"
    },
    {
      "id": "9465450R",
      "name": "Tênis Nike Renew Run",
      "price": 279.99,
      "oldPrice": 399.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9465450R.jpg"
    },
    {
      "id": "95004531",
      "name": "Tênis Nike Quest 3",
      "price": 299.99,
      "oldPrice": 449.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95004531.jpg"
    },
    {
      "id": "94672705",
      "name": "Tênis adidas Lite Racer 20",
      "price": 179.99,
      "oldPrice": 229.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94672705.jpg"
    },
    {
      "id": "92456602",
      "name": "Tênis Infantil Puma Wired",
      "price": 179.99,
      "oldPrice": 209.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/92456602.jpg"
    },
    {
      "id": "94461431",
      "name": "Tênis Infantil Nike Flex Runner",
      "price": 279.99,
      "oldPrice": null,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94461431.jpg"
    },
    {
      "id": "95850662",
      "name": "Tênis adidas Runfalcon 2.0",
      "price": 199.99,
      "oldPrice": 279.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95850662.jpg"
    },
    {
      "id": "943137X8",
      "name": "Tênis Nike Revolution 5",
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/943137X8.jpg"
    },
    {
      "id": "93227802",
      "name": "Tênis Infantil Puma Wired",
      "price": 159.99,
      "oldPrice": 189.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/93227802.jpg"
    },
    {
      "id": "93828502",
      "name": "Tênis Infantil Nike Pico 5 Baby",
      "price": 139.99,
      "oldPrice": 179.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/93828502.jpg"
    },
    
    {
      "id": "95150929",
      "name": "Tênis Asics Patriot 12",
      "price": 199.99,
      "oldPrice": 259.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95150929.jpg"
    },
    {
      "id": "95870805",
      "name": "Tênis Asics Gel-Pacemaker",
      "price": 299.99,
      "oldPrice": 399.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95870805.jpg"
    },
    {
      "id": "95707805",
      "name": "Tênis Mizuno Wave Prophecy X",
      "price": 1299.99,
      "oldPrice": 1499.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95707805.jpg"
    },
    {
      "id": "94672719",
      "name": "Tênis adidas Lite Racer 20",
      "price": 179.99,
      "oldPrice": 229.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94672719.jpg"
    },
    {
      "id": "95876431",
      "name": "Tênis Asics Gel-Nagoya 3",
      "price": 299.99,
      "oldPrice": 379.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95876431.jpg"
    },
   
    {
      "id": "95707845",
      "name": "Tênis Mizuno Wave Prophecy X",
      "price": 1299.99,
      "oldPrice": 1499.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95707845.jpg"
    },
    {
      "id": "946545OX",
      "name": "Tênis Nike Renew Run",
      "price": 279.99,
      "oldPrice": 399.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/946545OX.jpg"
    },
    {
      "id": "9465450M",
      "name": "Tênis Nike Renew Run",
      "price": 279.99,
      "oldPrice": 399.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9465450M.jpg"
    },
    {
      "id": "95939145",
      "name": "Tênis Fila Grand Prix",
      "price": 199.99,
      "oldPrice": 249.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95939145.jpg"
    },
    {
      "id": "95326905",
      "name": "Tênis Fila Recovery",
      "price": 259.99,
      "oldPrice": 299.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95326905.jpg"
    },
    {
      "id": "951509X8",
      "name": "Tênis Asics Patriot 12",
      "price": 199.99,
      "oldPrice": 259.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/951509X8.jpg"
    },
    {
      "id": "9515093X",
      "name": "Tênis Asics Patriot 12",
      "price": 199.99,
      "oldPrice": 259.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9515093X.jpg"
    },
    {
      "id": "9590484W",
      "name": "Tênis Puma Anzarun SR BDP",
      "price": 229.99,
      "oldPrice": 329.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9590484W.jpg"
    },
    {
      "id": "943137D0",
      "name": "Tênis Nike Revolution 5",
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/943137D0.jpg"
    },
    {
      "id": "9465459P",
      "name": "Tênis Nike Renew Run",
      "price": 279.99,
      "oldPrice": 399.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/9465459P.jpg"
    },
    {
      "id": "94218131",
      "name": "Tênis Infantil Nike Court Borough Low 2",
      "price": 199.99,
      "oldPrice": 299.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94218131.jpg"
    },
    {
      "id": "95707858",
      "name": "Tênis Mizuno Wave Prophecy X",
      "price": 1299.99,
      "oldPrice": 1499.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95707858.jpg"
    },
    {
      "id": "94876962",
      "name": "Tênis adidas Lite Racer 2.0",
      "price": 179.99,
      "oldPrice": 249.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94876962.jpg"
    },
    {
      "id": "94313703",
      "name": "Tênis Nike Revolution 5",
      "price": 249.99,
      "oldPrice": 349.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/94313703.jpg"
    },
    
    {
      "id": "93761902",
      "name": "Tênis Oakley Modoc 2.0",
      "price": 449.99,
      "oldPrice": 649.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/93761902.jpg"
    },
    {
      "id": "95150919",
      "name": "Tênis Asics Patriot 12",
      "price": 199.99,
      "oldPrice": 259.99,
      "image": "https://imgcentauro-a.akamaihd.net/230x230/95150919.jpg"
    }
  ]

import Product1 from "../assets/ImgCards/product1.png";
import Product2 from "../assets/ImgCards/product2.png";
import Product3 from "../assets/ImgCards/product3.png";
import Product4 from "../assets/ImgCards/product4.png";
import Product5 from "../assets/ImgCards/product5.png";
import Product6 from "../assets/ImgCards/product6.png";
import Product7 from "../assets/ImgCards/product7.png";
import Product8 from "../assets/ImgCards/product8.png";
import Product9 from "../assets/ImgCards/product9.png";
import Product10 from "../assets/ImgCards/product10.png";
import Product11 from "../assets/ImgCards/product11.png";
import Product12 from "../assets/ImgCards/product12.png";

const ArrayTennis = [
  {
    id: "0p0x1",
    name: "Tênis Nike Multi Inteligente",
    type: "Tênis de corrida masculino",
    price: "R$ 250.00",
    image: Product1,
    color: "amarelo",
  },
  {
    id: "0M0x1",
    name: "Nike Força Aérea Verde",
    type: "Tênis de corrida masculino",
    price: "R$ 200.00",
    image: Product2,
    color: "verde",
  },
  {
    id: "0M0x2",
    name: "Nike asr Adpt BB Rose",
    type: "Tênis de corrida masculino",
    price: "R$ 150.00",
    image: Product3,
    color: "vermelho",
  },
  {
    id: "0M0x3",
    name: "Nike Air Premium",
    type: "Tênis de corrida masculino",
    price: "R$ 180.00",
    image: Product4,
    color: "rose",
  },
  {
    id: "0M0x4",
    name: "Nike Adaptar BB Pro",
    type: "Tênis de corrida masculino",
    price: "R$ 190.00",
    image: Product5,
    color: "marron",
  },
  {
    id: "0M0x11",
    name: "Air Jordan PR3",
    type: "Tênis de corrida masculino",
    price: "R$ 200.00",
    image: Product6,
    color: "azul-marinho",
  },
  {
    id: "0M0x10",
    name: "Nike Air Low Premium",
    type: "Tênis de corrida masculino",
    price: "R$ 210.00",
    image: Product7,
    color: "azul-escuro",
  },
  {
    id: "0M0x9",
    name: "Nike Zoom Max",
    type: "Tênis de corrida masculino",
    price: "R$ 320.00",
    image: Product8,
    color: "azul-black",
  },
  {
    id: "0M0x8",
    name: "Nike Jordan Air Max",
    type: "Tênis de corrida masculino",
    price: "R$ 160.00",
    image: Product9,
    color: "marron-claro",
  },
  {
    id: "0M0x7",
    name: "Nike Old Max-x",
    type: "Tênis de corrida masculino",
    price: "R$ 185.00",
    image: Product10,
    color: "roxo",
  },
  {
    id: "0M0x6",
    name: "Nike Air Black Max",
    type: "Tênis de corrida masculino",
    price: "R$ 190.00",
    image: Product11,
    color: "preto",
  },
  {
    id: "0M0x5",
    name: "Nike Lime Jordan 11",
    type: "Tênis de corrida masculino",
    price: "R$ 400.00",
    image: Product12,
    color: "verde",
  },
];







 


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales,ArrayTennis2, ArrayTennis };
