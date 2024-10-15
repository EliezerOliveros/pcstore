const products = [
    {
      id: "Ggb235",
      name:"Play5",
      description: "Consola PlayStation®5 La consola PS5® hace posibles nuevas formas de juego que jamás habías imaginado.Experimenta tiempos de carga ultrarrápidos con la SSD de alta velocidad, una inmersión más profunda gracias a la retroalimentación háptica, gatillos adaptativos y Audio 3D2, además de una nueva generación de increíbles juegos de PlayStation®.",
      stock: 15,
      category: "Consola",
      image: "/img/consola/play5-01.jpg",
      price: 500000,
    },
    {
      id: "Ggb236",
      name:"XboxserieX",
      description: " Xbox Series X, la consola más rápida y potente de la historia.juega miles de títulos de cuatro generaciones de consolas: todos los juegos se ven y se juegan mejor en Xbox Series X.En el corazón de la Serie X se encuentra la Xbox Velocity Architecture, que combina una unidad SSD personalizada y software integrado para disminuir significativamente los tiempos de carga dentro y fuera del juego. Muévete sin problemas entre varios juegos en un instante con Quick Resume. Explora mundos nuevos y disfruta de la acción con los 12 teraflops de potencia de procesamiento de gráficos.",
      stock: 10,
      category: "Consola",
      image:"/img/consola/xboxseriex-01.png ",
      price: 400000,
    },
    {
      id: "Ggb237",
      name:"LogiteckLogitech-ratón G502Hero 2,4 GHz",
      description: "G502 Hero SE:Sensor Hero 16K de alto rendimiento: el sensor más preciso de Logitech hasta la fecha con hasta 16.000 PPP para lo último en velocidad de juego, precisión y capacidad de respuesta en todo el rango de PPP11 botones personalizables y memoria integrada: Asigna comandos personalizados a los botones y guarda hasta cinco perfiles listos para reproducir directamente en el ratón",
      stock: 30,
      category: "Mouse",
      image:"/img/raton/logitech-ratón-g502hero-01.jpg",
      price: 20000,
    },
    {
      id: "Ggb238",
      name:"Mouse Gamer Logitech G903 Hero Lightspeed Inalámbrico",
      description: "El mouse gamer inalámbrico Logitech G903 Lightspeed está diseñado para satisfacer las necesidades de los jugadores exigentes. Aquí tienes una descripción detallada de sus características:",
      stock: 17,
      category: "mouse",
      image:"/img/raton/ratongamer-logitechg903hero-01.avif",
      price: 110000,
    },
    {
      id: "Ggb239",
      name:"Teclado Gamer Inalámbrico Logitech G915 Lightspeed",
      description: "UEGA EN LA SIGUIENTE DIMENSIÓN Un gran avance en diseño e ingeniería, ahora en combinaciones de colores en blanco y negro. G915 TKL incorpora tecnología inalámbrica LIGHTSPEED de calidad profesional, RGB LIGHTSYNC avanzada e interruptores mecánicos de perfil bajo y alto rendimiento. Creado meticulosamente con materiales premium, el G915 TKL tiene un sofisticado diseño de incomparable belleza, resistencia y rendimiento. Y ahora con un diseño aún más compacto. G915 TKL. Juega en la siguiente dimensión.",
      stock: 12,
      category: "keyboard",
      image:"/img/teclado/tecladogamer-logitechg915-01.jpg",
      price: 250000,
    }
  ]

  const getProducts = ( ) =>{
    return new Promise((resolve, reject) => {
      
    setTimeout(() => {
      resolve(products)
      }, 2000)
    })
  }

  const getProduct = ( ) => {
    return new Promise( (resolve) => {
      setTimeout (() => {
        const product = products.find( (product)=> product.id === "Ggb235" )
        resolve(product)
    }, 2000)
   })
  }


  export { getProducts, getProduct }