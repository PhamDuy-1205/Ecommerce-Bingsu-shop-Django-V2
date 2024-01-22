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


export const sizeList = ['XS', 'S', 'M', 'L', 'XL']


export const detailItemReview = [
    {
        'name' : "Jackson's Emporium",
        'date' : "01 Jan 2024",
        'star_vote' : 4,
        'review_content' : "I am beyond furious with the blatant scam I fell victim to in my recent purchase from Jackson. I shelled out a whopping $2000, only to receive a laughable brick in return. This is absolutely unacceptable!",
    },
    {
        'name' : "Anderson's Wonders",
        'date' : "01 Jan 2024",
        'star_vote' : 2,
        'review_content' : "What a disgrace! I spent $2000 on a product from Anderson, and all I got was a useless brick. This is not just a mistake; it's a deliberate act of deception. I demand an immediate resolution!",
    },
    {
        'name' : "Mitchell's Treasures",
        'date' : "01 Jan 2024",
        'star_vote' : 1,
        'review_content' : "Your store has reached a new low! On a recent purchase, I forked out $2000 only to receive a single brick from Mitchell. This level of deceit is outrageous, and I expect you to rectify this situation promptly",
    },
    // {
    //     'name' : "Robinson's Emporium",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 5,
    //     'review_content' : "I am seething with anger over the scam I encountered with my recent order from Robinson. I paid $2000, and what did I get? A brick! You've crossed the line, and I demand a refund and an explanation",
    // },
    // {
    //     'name' : "Thompson's Finds",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 3,
    //     'review_content' : "The audacity of your store, Thompson, is mind-boggling. I spent $2000 thinking I'd get a legitimate product, but all I received was a brick. This is not just a mistake; it's a scam, and I won't tolerate it",
    // },
    // {
    //     'name' : "Harrison's Bazaar",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 2,
    //     'review_content' : "I've never been more enraged with an online purchase. I handed over $2000 for a product from Harrison, and what arrived? A brick! This is a complete betrayal of trust, and I demand immediate action",
    // },
    // {
    //     'name' : "Mitchell's Haven",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 2,
    //     'review_content' : "Your store, Mitchell, actions are utterly despicable. I spent $2000, and in return, I got a brick. This is a deliberate act of fraud, and I insist on a full refund and a public apology for such disgraceful business practices",
    // },
    // {
    //     'name' : "Davis' Corner",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 4,
    //     'review_content' : "I am writing to express my sheer disgust with the scam I fell prey to on my recent purchase from Davis. $2000 down the drain for a worthless brick. This is daylight robbery, and I demand retribution",
    // },
    // {
    //     'name' : "Thomas' Marvel",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 1,
    //     'review_content' : "I'm writing this with absolute fury regarding my recent purchase. I paid $2000, and what did I receive? A brick from Thomas. Your store's deceitful practices will not go unnoticed, and I demand immediate restitution",
    // },
    // {
    //     'name' : "Harris' Finds",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 2,
    //     'review_content' : "Your store's actions are reprehensible. I spent $2000, expecting a genuine product, but all I got was a brick from Harris. This is not just a mistake; it's a deliberate act of fraud, and I demand swift action.",
    // },
    // {
    //     'name' : "Brown's Emporium",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 5,
    //     'review_content' : "My recent purchase from Brown has left me seething. $2000 gone, and what did I get? A brick! This is a scam, and I expect you to rectify this immediately or face the consequences.",
    // },
    // {
    //     'name' : "Martin's Treasures",
    //     'date' : "01 Jan 2024",
    //     'star_vote' : 1,
    //     'review_content' : "I am writing to express my extreme anger and disappointment with the scam I fell victim to on my recent purchase from Martin. $2000 for a brick is beyond outrageous, and I demand a resolution and accountability",
    // },
]