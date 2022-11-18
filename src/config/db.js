// Fake Environment until Database
// passing blogList(blogPosts) - to Home BlogList as params
const blogPosts = [
    {
      id: 1,
      title: '7 CSS tools you should be using ',
      category: 'development',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/designer-1.png',
    },
    {
      id: 2,
      title: 'Getting into Winter, best VScode Color Themes',
      category: 'technology',
      subCategory: ['vscode', 'themes', 'color'],
      description: 
        "<h1></h1> Visuals are essential for productivity when writing, editing and debugging code. VSCode features are elegant, lighting fast editorial use, ideal for everday. With the support of hundreds of other programmers creating radical new color themes, which by the way has more than 5,000 themes to choose from. So lets jump in and check out the stylish themes!",
      authorName: 'Inari Williams',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'November 17, 2022',
      cover: '/assets/images/snorkle.png',
    },
    {
      id: 3,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/helper.png',
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'adventure',
      subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/graphic-design-trends.png',
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'cooking',
      subCategory: ['bbq', 'food', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/make-it-personal.png',
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'travel',
      subCategory: ['beaches', 'sea', 'holidays'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover:
        '/assets/images/helper.png',
    },
    {
      id: 7,
      title: 'Art & Perception',
      category: 'art',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.png',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/Synthwave-Postmodern.png',
    },
  ];

export default blogPosts;