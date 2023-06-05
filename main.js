const SERVICES = [
  {
    title: "Uñas de acrilico",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Uñas de gel",
    img: "https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  },
  {
    title: "Manicura basica",
    img: "https://images.unsplash.com/photo-1610992015836-7c249d75782d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Manicura francesa",
    img: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=407&q=80",
  },
];

const PRICES = [
  {
    title: "Uñas de acrilico",
    price: "150.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam sapiente harum in dolores ad quia molestias laborum dignissimos.",
  },
  {
    title: "Uñas de gel",
    price: "200.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam sapiente harum in dolores ad quia molestias laborum dignissimos.",
  },
  {
    title: "Manicura basica",
    price: "200.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam sapiente harum in dolores ad quia molestias laborum dignissimos.",
  },
  {
    title: "Manicura francesa",
    price: "250.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam sapiente harum in dolores ad quia molestias laborum dignissimos.",
  },
];

const TESTIMONIALS = [
  {
    name: "Eleanor Pena",
    stars: 7,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae placeat dolorem officia quia totam reprehenderit sequi possimus sit vitae, nostrum, nemo impedit non itaque enim obcaecati voluptates!",
  },
  {
    name: "Michell Ross",
    stars: 9,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae placeat dolorem officia quia totam reprehenderit sequi possimus sit vitae, nostrum, nemo impedit non itaque enim obcaecati voluptates!",
  },
  {
    name: "Jessica Pearson",
    stars: 10,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae placeat dolorem officia quia totam reprehenderit sequi possimus sit vitae, nostrum, nemo impedit non itaque enim obcaecati voluptates!",
  },
];

const createServices = () => {
  SERVICES.map((service) => {
    const homeSlider = document.getElementById("homeSlider");
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");

    article.classList.add("home--slider__item");
    img.setAttribute("src", service.img);
    h2.innerHTML = service.title;

    article.appendChild(h2);
    article.appendChild(img);
    homeSlider.appendChild(article);
  });
};

const createPrices = () => {
  PRICES.map((price) => {
    const pricesList = document.getElementById("pricesList");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    article.classList.add("prices--list__item");

    h3.innerHTML = price.title;
    h2.innerHTML = price.price;
    p.innerHTML = price.description;
    a.innerHTML = "Reservar";

    a.setAttribute("href", "#reserve");

    article.appendChild(h3);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(a);

    pricesList.appendChild(article);
  });
};

createTestimonails = () => {
  TESTIMONIALS.map((testimonial) => {
    const testimonialsList = document.getElementById("testimonialsList");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    article.classList.add("testimonials--list__item");

    h3.innerHTML = testimonial.name;
    h4.innerHTML = `${testimonial.stars}/5`;
    p.innerHTML = testimonial.content;

    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    testimonialsList.appendChild(article);
  });
};

createServices();
createPrices();
createTestimonails();
