import type { Product } from "./components/ProductsContainer.vue";



export const productsData: { Category: string; id: string; Products: any[] }[] = [
    {
      Category: "Lunch",
      id: "1",
      Products: [
        {
          id: 1,
          name: "Grilled Chicken Sandwich",
          description: "Grilled chicken breast with lettuce, tomato, and mayo.",
          price: 8,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F578E4DD9B8F840A88AE1F1A9.avif",
        },
        {
          id: 2,
          name: "Turkey Club",
          description: "Turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
          price: 9,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F58A0D5D4A2E735A3CB9B4C29.avif",
        },
        {
          id: 3,
          name: "BLT",
          description: "Bacon, lettuce, and tomato sandwich with mayo.",
          price: 7,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F5814F8AE95BD55A91B773AFF.avif",
        },
        {
          id: 4,
          name: "Veggie Wrap",
          description: "Fresh vegetables and hummus in a whole wheat wrap.",
          price: 6,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F5A190745B53CB3F5DB064715.avif",
        },
        {
          id: 5,
          name: "Pasta Salad",
          description: "Pasta with fresh vegetables and a light vinaigrette.",
          price: 5,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F60C4864198F854409D97D4BF.avif",
        },
      ],
    },
    {
      Category: "Soups",
      id: "2",
      Products: [
        {
          id: 6,
          name: "Tomato Basil Soup",
          description: "Creamy tomato soup with fresh basil.",
          price: 4,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF1DC2DEA061EB90FFF3C1F03B4DC1.avif",
        },
        {
          id: 7,
          name: "Chicken Noodle Soup",
          description: "Classic chicken noodle soup with carrots and celery.",
          price: 5,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F4CE9AE02BEA03AA653B59E39.avif",
        },
        {
          id: 8,
          name: "Minestrone Soup",
          description: "Italian vegetable soup with pasta and beans.",
          price: 5,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F349AEBF0953AB9AE4BAED742.avif",
        },
       
      ],
    },
    {
      Category: "Meats",
      id: "3",
      Products: [
       
        {
          id: 11,
          name: "Pork Chops",
          description: "Grilled pork chops with a side of applesauce.",
          price: 18,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF2045FAD79B4A9F7B0796875B4F60.avif",
        },
        {
          id: 12,
          name: "Lamb Shank",
          description: "Braised lamb shank with rosemary and garlic.",
          price: 28,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF2045E9E56FA8BAF92147210AA947.avif",
        },
        {
          id: 13,
          name: "BBQ Ribs",
          description: "Slow-cooked ribs with smoky BBQ sauce.",
          price: 22,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EED6F4BA6A52CF9AFACAAEADFA6AC8.avif",
        },
      ],
    },
    {
      Category: "Seafood",
      id: "4",
      Products: [
       
        {
          id: 15,
          name: "Shrimp Scampi",
          description: "Shrimp sautéed in garlic butter sauce with white wine.",
          price: 20,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F5A6298C69443330263DA5A44.avif",
        },
        {
          id: 16,
          name: "Lobster Roll",
          description: "Fresh lobster salad in a toasted roll.",
          price: 22,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F44B07BC4B51E938723B6C88B.avif",
        },
        {
          id: 17,
          name: "Fish Tacos",
          description: "Grilled fish tacos with fresh salsa.",
          price: 15,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE96C7C7B2ED029103328614CD96B7.avif",
        },
      ],
    },
    {
      Category: "Drinks",
      id: "5",
      Products: [
       
        {
          id: 19,
          name: "Lemonade",
          description: "Fresh squeezed lemonade.",
          price: 2,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF289EE6D64B56912AD56C777CFA54.avif",
        },
        {
          id: 20,
          name: "Mojito",
          description: "Classic mojito with fresh mint and lime.",
          price: 7,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF204867A9A309BACDB3448FF857E2.avif",
        },
        {
          id: 21,
          name: "Smoothie",
          description: "Fruit smoothie with yogurt and honey.",
          price: 5,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF20480AA86B00B902D5ED58323188.avif",
        },
      ],
    },
    {
      Category: "Desserts",
      id: "6",
      Products: [
       
        {
          id: 23,
          name: "Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust.",
          price: 7,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF2047D166BE70B21AF4E4B01DE920.avif",
        },
        {
          id: 24,
          name: "Apple Pie",
          description: "Classic apple pie with a flaky crust.",
          price: 5,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF20469E20C57EAE649428265D3E35.avif",
        },
        {
          id: 25,
          name: "Ice Cream Sundae",
          description: "Vanilla ice cream with hot fudge and a cherry.",
          price: 4,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF2046BF2F3150ABF3E681BBFD7513.avif",
        },
      ],
    },
    {
      Category: "Salads",
      id: "7",
      Products: [
        {
          id: 26,
          name: "Caesar Salad",
          description: "Crisp romaine lettuce with Caesar dressing and croutons.",
          price: 8,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D5F5AA23D78BA1904D240066583.avif",
        },
        {
          id: 27,
          name: "Greek Salad",
          description: "Fresh salad with tomatoes, cucumbers, olives, and feta cheese.",
          price: 7,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF204AE586474E98A6DCBC07A14134.avif",
        },
        {
          id: 28,
          name: "Cobb Salad",
          description: "Mixed greens with chicken, bacon, eggs, and blue cheese.",
          price: 10,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF204AE586474E98A6DCBC07A14134.avif",
        },
        {
          id: 29,
          name: "Quinoa Salad",
          description: "Healthy quinoa salad with vegetables and a light dressing.",
          price: 9,
          imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF204AE586474E98A6DCBC07A14134.avif",
        },
      ],
    },
  ];