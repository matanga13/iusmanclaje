fetch("./components/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    console.log(data)
    document.querySelector("header").innerHTML = data;
  });

  fetch("./components/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    console.log(data)
    document.querySelector("footer").innerHTML = data;
  });

  fetch("./components/nav-bar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    console.log(data)
    document.querySelector("nav").innerHTML = data;
  });

