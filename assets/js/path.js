const PATH = window.location.protocol +"//"+ window.location.host;
console.log(PATH);
//document.head.innerHTML = document.head.innerHTML + "<base href='https://3241.com.ar/iusm/' />";
document.head.innerHTML = document.head.innerHTML + "<base href='"+PATH+"/iusmanclaje/' />";