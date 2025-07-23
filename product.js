const allProducts = [
    {
      id: 1,
      title: "Rosery Paris Women Bodycon Dark Green Midi Dress",
      price: 607,
      originalPrice: 2499,
      discount: "75% off",
      rating: 4.1,
      reviews: 1159,
      image: "https://i.ibb.co/PvmmvZQP/voiceimage.png",
      url: "https://www.flipkart.com/rosery-paris-women-bodycon-dark-green-midi-calf-length-dress/p/itm7459250e0410a"
    },
    {
      id: 2,
      title: "Gujari Women Fit & Flare Pink Midi Dress",
      price: 426,
      originalPrice: 1499,
      discount: "71% off",
      rating: 3.9,
      reviews: 240,
      image:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdba954f-a7f5-417a-9337-8b79.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYmE5NTRmLWE3ZjUtNDE3YS05MzM3LThiNzE5MzI2ZjZiZVwvZGZ0ZHRicC0wOThkMjQ0NC1jYzQ0LTRjMTYtYWQ0ZC02ZmM1MjI1NzUyNjYucG5nIiwiaGVpZ2h0IjoiPD0xMDkxIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOTdhLTkzMzctOGI3MTkzMjZmN",

      url: "https://www.flipkart.com/gujari-women-fit-and-flare-pink-midi-dress/p/itmfe4156019b6a3"
    },
    {
      id: 3,
      title: "RAPL BHARAT Women A-Line White Knee-Length Dress",
      price: 179,
      originalPrice: 1199,
      discount: "85% off",
      rating: 4.2,
      reviews: 517,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTt9bJAjhU1tADTw0j1PYs-XbW_MY8Uqjd9mqdny-xTrWhKp_DDp9qNcc1JYTLumEDiEuC1L5Ia",
      url: "https://www.flipkart.com/rapl-bharat-women-a-line-white-knee-length-dress/p/itma02f83cd5d6c6"
    },
    {
      id: 4,
      title: "PLUSS Women A-Line Blue Midi Dress",
      price: 400,
      originalPrice: 3999,
      discount: "89% off",
      rating: 4.0,
      reviews: 140,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHHh3v1OCBijs1ySooiLRpBeZmsa5c2GRDO8bb8MEINH3j1fEcyDnp8qABw9eNGdkVXMkokQ4",
      
    },
    {
      id: 5,
      title: "Daevish Women Fit & Flare Grey Maxi Dress",
      price: 439,
      originalPrice: 2499,
      discount: "82% off",
      rating: 3.8,
      reviews: 312,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShBjrAwHVqNFIyJ2aJ-vkHevokFzmw6D9VwdSPCIOPQkXtIVbc",
      
    },
    {
      id: 6,
      title:"Boys analog watch",
      price: 800,
      originalPrice: 1000,
      discount: "20% Off",
      rating:4.8,
      rating:500,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/n/c/2/1-anlg-492-black-black-sc-analogue-men-original-imah2gh72h6tqpqx.jpeg?q=70",





    },
  {
    id: 7,
    title:"girls smart watch",
    price:800,
    originalPrice:1000,
    discount:"20% Off",
    rating:4.8,
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/7/m/1-kk-flower-rose-gold-party-wear-watch-for-girl-women-house-of-original-imahd89yjbnctzsz.jpeg?q=70"
    },
    
    {
        id: 101,
        title: "Classic Leather Strap Watch",
        price: 49,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/2/r/1-antique-2-0-day-date-softest-silicone-strap-analog-rustet-boys-original-imahdg34vjvn8q4t.jpeg?q=70",
        category: "Watches"
      },
      {
        id: 102,
        title: "Stainless Steel Chronograph",
        price: 99,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/h/s/minimalist-matrix-men-women-original-imah6efzazfpqkqf.jpeg?q=70",
        category: "Watches"
      },
      {
        id: 103,
        title: "Elegant Rose Gold Watch",
        price: 85,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/d/g/q/-original-imagqhvfkgjugkfy.jpeg?q=70",
        category: "Watches"
      },
      {
        id: 104,
        title: "Digital Sport Watch",
        price: 35,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/h/s/minimalist-matrix-men-women-original-imah6efzazfpqkqf.jpeg?q=70",
        category: "Watches"
      },
      {
        id: 105,
        title: "Minimalist Black Dial Watch",
        price: 42,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/h/q/4/1-sk-pg-4075-blk-slvr-basic-analog-watch-for-men-with-day-and-original-imah5f9wfqgpfeyw.jpeg?q=70",
        category: "Watches"
      },
      
    

  ];
  
