const formBtn = document.querySelector("#get-btn");
const cardsSection = document.querySelector("#cards-section");
const postForm = document.querySelector("#post-form");

const BASE_URL = "https://6849a4ad45f4c0f5ee72552a.mockapi.io/crud";

formBtn.addEventListener("click", function () {
  cardsSection.textContent = "";
  fetch(BASE_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = item.img;
        const title = document.createElement("h5");
        title.textContent = item.title;

        card.appendChild(img);
        card.appendChild(title);
        cardsSection.appendChild(card);
      });
    });
});

postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const img = document.querySelector("#photo-url").value;
  const title = document.querySelector("#post-title").value;

  const myObj = {
    img,
    title,
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myObj),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      postForm.reset();
    });
});

const deleteForm = document.querySelector("#delete-form");

deleteForm.addEventListener("submit", function (e) {
  const productId = document.querySelector("#product-id").value;
  e.preventDefault();

  fetch(`https://6849a4ad45f4c0f5ee72552a.mockapi.io/crud/${productId}`, {
    method: "DELETE",
  });
});
