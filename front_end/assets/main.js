export const categories = [
    {
        'name' : 'Shirts',
        'describe' : "Shirts are a versatile wardrobe staple that can be dressed up or down. They're available in a variety of styles, colors, and fabrics, so you can find the perfect shirt for any occasion.",
        'image' : '/_nuxt/assets/images/category/shirts.jpg',
    },
    {
        'name' : 'Jeans',
        'describe' : "A classic pair of jeans is a must-have for any wardrobe. Made from durable denim, these jeans are perfect for everyday wear. They're available in a variety of styles, so you can find the perfect pair to suit your taste.",
        'image' : '/_nuxt/assets/images/category/jeans.jpg',
    },
    {
        'name' : 'Swimwear',
        'describe' : "Swimwear is the perfect way to stay cool and stylish at the beach or pool. Our swimwear is made from high-quality materials that are comfortable and durable. We offer a variety of styles to suit all body types and tastes.",
        'image' : '/_nuxt/assets/images/category/jackets.jpg',
    },
    {
        'name' : 'Sleepwear',
        'describe' : "Sleepwear is the perfect way to relax and unwind after a long day. Our sleepwear is made from soft, comfortable fabrics that will keep you cozy all night long. We offer a variety of styles to suit all tastes, so you can find the perfect set to make your sleep time even more enjoyable.",
        'image' : '/_nuxt/assets/images/category/sleepwear.jpg',
    },
    {
        'name' : 'Sportswear',
        'describe' : "Sportswear is the perfect way to stay comfortable and stylish while you're working out or playing sports. Our sportswear is made from high-quality materials that are breathable and moisture-wicking. We offer a variety of styles to suit all activities and tastes, so you can find the perfect outfit to help you perform your best.",
        'image' : '/_nuxt/assets/images/category/sportswear.jpg',
    },
    {
        'name' : 'Jumpsuits',
        'describe' : "Jumpsuits are a versatile and stylish clothing option that can be dressed up or down. They're perfect for any occasion, from a casual day out to a formal event. Our jumpsuits are made from high-quality materials that are comfortable and durable.",
        'image' : '/_nuxt/assets/images/category/jumpsuits.jpg',
    },
    {
        'name' : 'Blazers',
        'describe' : "Blazers are a versatile piece of clothing that can be dressed up or down. They are perfect for any occasion, from a casual day out to a formal event. Blazers are typically made from a wool or cotton blend and come in a variety of styles and colors.",
        'image' : '/_nuxt/assets/images/category/blazers.jpg',
    },
    {
        'name' : 'Jackets',
        'describe' : "Jackets are a more casual alternative to blazers. They are perfect for everyday wear, whether you are running errands or meeting up with friends. Jackets are typically made from a cotton or denim blend and come in a variety of styles, including bomber jackets, denim jackets, and leather jackets.",
        'image' : '/_nuxt/assets/images/category/jackets.jpg',
    },
    {
        'name' : 'Shoes',
        'describe' : "Shoes are an essential part of any wardrobe. They come in a variety of styles, from sneakers to heels. The right pair of shoes can complete any outfit and make you look and feel your best.",
        'image' : '/_nuxt/assets/images/category/shoes.jpg',
    },
];


const runtimeConfig = useRuntimeConfig();
export const getImgUrl = (filename) => {
  return `${filename}`;
};
