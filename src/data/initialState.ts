export const review = [
  {
    id: 1,
    name: "Lenovo Tab K10",
    rating: 4,
    comment: "nice device for portable use",
    user: 2,
    timestamps: "2023-09-27T07:29:20.018Z",
  },
]
export const products = [
  {
    id: 1,
    name: "Lenovo Tab K10",
    image:
      "https://www.reliancedigital.in/medias/Lenovo-Tab-K10-Tablets-492573487-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTU5ODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hlZC85Njc2MTkzMDcxMTM0LmpwZ3xmZWNiZGZhYjEyNGNiY2JiNjFjM2YzMTQ3MWIzMDYwMzg1OTRmNDY5MGNkOGRiNDIyNmY4ZTMxMjM3NTVjOTQ0",
    brand: "Lenovo",
    category: "Tab",
    description: `Bring your operations to the next level with the Lenovo Tab K10 tablet.
    It’s enterprise-ready and highly customizable to the needs of your business, with a battery that lasts all day, as well as a battery-less option for stationary and always-on displays.
    Enjoy a spacious and clear workspace on its spacious 26.1cms (10.3) FHD touchscreen as well.`,
    // reviews: [review],
    rating: 4,
    numReviews: 0,
    price: "18,499.00",
    countInStock: 4,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
  {
    id: 2,
    name: "Xiaomi Pad 6",
    image: "https://m.media-amazon.com/images/I/71LRY1j6UHL._SL1500_.jpg",
    brand: "Xiaomi",
    category: "Tab",
    description: `Snapdragon 870 Octa-Core Processor | Adreno 650 | Qualcomm AI engine | LPDDR5 RAM | UFS 3.1 | Up to 8GB RAM
    144Hz 7-Stage Refresh Rate | 27.9cm(11) Display | 2.8K Resolution | 1 Billion Colors | 2880*1800 High Resolution
    Quad Speakers with Dolby Atmos | Long Lasting 8840mAh Battery | Android 13 | MIUI 14 with Android & Security Updates
    8MP Front Camera with Focus Frame | 13MP Rear Camera | Metal Unibody Design`,
    // reviews: [review],
    rating: 0,
    numReviews: 0,
    price: "28,999.00",
    countInStock: 0,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
  {
    id: 3,
    name: "Redmi 12C",
    image: "https://m.media-amazon.com/images/I/81YEyQqHjPL._SL1500_.jpg",
    brand: "Xiaomi",
    category: "Mobile",
    description: `Processor: High performance MediaTek Helio G85,upto 2Ghz; Enhanced gaming with 1GHz GPU | 4+3GB(Virtual RAM) LPDDR4x
    Camera: 50MP f/1.8 AI Dual camera with Portrait mode & Night Mode | 5MP Selfie camera
    Display: Large 17cm HD+ display with Scratch resistant Glass and Oleophobic coating | 500nits peak brightness
    5000mAh(typ) battery with 10W charger in-box
    Dual band Wifi support ensures better throughput and connectivity`,
    // reviews: [review],
    rating: 0,
    numReviews: 0,
    price: "8,499.00",
    countInStock: 1,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
  {
    id: 4,
    name: "Apple iPhone 14 (128 GB) - Blue",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
    brand: "Apple",
    category: "Mobile",
    description: `15.40 cm (6.1-inch) Super Retina XDR display
    Advanced camera system for better photos in any light
    Cinematic mode now in 4K Dolby Vision up to 30 fps
    Action mode for smooth, steady, handheld videos
    Vital safety technology — Crash Detection calls for help when you can’t
    All-day battery life and up to 20 hours of video playback
    Industry-leading durability features with Ceramic Shield and water resistance`,
    // reviews: [review],
    rating: 4,
    numReviews: 0,
    price: "62,999.00",
    countInStock: 3,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
  {
    id: 5,
    name: "Apple 2023 MacBook Air laptop",
    image: "https://m.media-amazon.com/images/I/81xW62KXNhL._SL1500_.jpg",
    brand: "Apple",
    category: "Laptop",
    description: `IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100% recycled aluminium enclosure is strikingly thin and light.
    SUPERCHARGED BY M2 — Get more done faster with a powerful 8-core CPU, 10-core GPU and up to 24GB of unified memory.
    UP TO 18 HOURS OF BATTERY LIFE — Go all day with the power-efficient performance of the Apple M2 chip. (Battery life varies by use and configuration. See our website for more information.)
    SPACIOUS, BEAUTIFUL DISPLAY — The high-resolution, 38.91-centimetre (15.3-inch) Liquid Retina display features 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail. (The display on the 15-inch MacBook Air has rounded corners at the top. When measured as a standard rectangular shape, the screen is 38.91 centimetres (15.3 inches) diagonally (actual viewable area is less.)
    SILENT DESIGN — MacBook Air features a fanless design that runs completely silent, no matter the task.`,
    // reviews: [review],
    rating: 0,
    numReviews: 0,
    price: "1,26,990.00",
    countInStock: 2,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
]

export const users = [
  {
    id: 1,
    name: "Admin",
    lastname: "",
    email: "admin@example.com",
    password: "admin@123",
    isAdmin: true,
    timestamps: "2023-09-27T07:07:21.207Z",
  },
  {
    id: 2,
    name: "Rajkamal",
    lastname: "Prasad",
    email: "rajkamal512@gmail.com",
    password: "pass@123",
    isAdmin: false,
    timestamps: "2023-09-27T07:09:14.433Z",
  },
]

export const orders = [
  {
    user: 2,
    orderItems: [
      {
        name: "Lenovo Tab K10",
        qty: 1,
        image:
          "https://www.reliancedigital.in/medias/Lenovo-Tab-K10-Tablets-492573487-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTU5ODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hlZC85Njc2MTkzMDcxMTM0LmpwZ3xmZWNiZGZhYjEyNGNiY2JiNjFjM2YzMTQ3MWIzMDYwMzg1OTRmNDY5MGNkOGRiNDIyNmY4ZTMxMjM3NTVjOTQ0",
        price: "18,499.00",
        product: "Tab",
      },
    ],
    shippingAddress: {
      address: "Indira nagar thane(w)",
      city: "Thane",
      postalCode: "400604",
      country: "India",
    },
    paymentMethod: "PTM",
    paymentResult: {
      id: 1,
      status: "pending",
      update_time: "",
      email_address: "rajkamal512@gmail.com",
    },
    itemsPrice: "18,499",
    taxPrice: "21,828.82",
    shippingPrice: "100",
    totalPrice: "21,928.82",
    isPaid: false,
    paidAt: "2023-09-27T07:09:14.433Z",
    isDelivered: false,
    deliveredAt: "",
    timestamps: "2023-09-27T07:09:14.433Z",
  },
]
