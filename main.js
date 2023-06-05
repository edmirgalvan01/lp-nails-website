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

const createService = () => {
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

createService();
