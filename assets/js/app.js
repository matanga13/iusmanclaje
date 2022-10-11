/*
Inclusión de componentes por Vanilla JS. 
Optimizar para PHP
*/

fetch("./components/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
   
    document.querySelector("header").innerHTML = data;
  });

  fetch("./components/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    
    document.querySelector("footer").innerHTML = data;
  });

  fetch("./components/nav-bar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    
    document.querySelector("nav").innerHTML = data;
  });

  fetch("./components/related.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    
    if (document.querySelector("#related")){document.querySelector("#related").innerHTML = data};
  });

  // /*
  //   VISITED LINKS
  // */

  //   const page = location.pathname.split('/');
  //   console.log(page[1]);
  //   const node = document.querySelectorAll("a[href='hdv-1.html']");
  //  console.log(node);
    


