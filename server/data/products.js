const products = [
  {
    title: 'Herman Coat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://xuongmunon.blueseaco.vn/wp-content/uploads/2018/03/mu-luoi-trai-dep-nhat-the-gioi-anh-1.png',
    category: ['men', 'hat'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'red'],
    price: 33,
  },
  {
    title: 'Bird Print Dress',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://www.shophaiyen.com/wp-content/uploads/2017/08/M%E1%BA%B7t-sau-%C3%81o-thun-Overdoe-Th%C3%A1i-Lan-m%C3%A0u-tr%E1%BA%AFng.jpg',
    category: ['men', 'hat'],
    size: ['X', 'M', 'XL'],
    color: ['blue', 'black'],
    price: 45,
  },
  {
    title: 'Sharkskin Waistcoat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
    category: ['men', 'hat'],
    size: ['X', 'M', 'XL'],
    color: ['red', 'black'],
    price: 20,
  },
  {
    title: 'Womens Casualwear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: ['women', 'dress'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black'],
    price: 80,
  },
  {
    title: 'Flip Flops',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
    category: ['men', 'hat'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black'],
    price: 79,
  },
  {
    title: 'Lala Coat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    category: ['men', 'dress'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black'],
    price: 55,
  },
  {
    title: 'Court Shoes',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
    category: ['men', 'shoes'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black'],
    price: 30,
  },
  {
    title: 'Suede Shoes',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://i.pinimg.com/originals/0d/07/7a/0d077adf0f04a5b74a8f601a1697558c.jpg',
    category: ['men', 'shoes'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black'],
    price: 11,
  },
  {
    title: 'Cotton Hat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.',
    img: 'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
    category: ['women', 'hat'],
    size: ['X', 'M', 'XL'],
    color: ['yellow', 'black', 'green'],
    price: 30,
  },
];

module.exports = products;
