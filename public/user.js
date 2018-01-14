let isRed= false;


function buttonClick() {
  console.log ("Button Clicked!");

  if(isRed) {
    console.log("It is currently red");
    document.getElementById('body').classList.remove('red');
  }

  else {
    console.log("It is currently white");
    document.getElementById('body').classList.add('red');
  }

  isRed= !isRed;

}

function onload(){
  console.log("Loaded");

   let url = window.location.href;
   let urlParts= url.split('/');
   let name = urlParts[urlParts.length-1];
   name = name.charAt(0).toUpperCase() + name.slice(1);
   document.getElementById('welcome').innerHTML = `Welcome ${name}, to`;


   console.log(url, urlParts,name);


  // let url = window.location.href;
  // let params = url.split('?');
  // let name = params[1].split('=');
  // name= name[1];
  // name= name.charAt(0).toUpperCase() + name.slice(1);
  //
  // console.log(name);
  //
  // document.getElementById('welcome').innerHTML = `Welcome ${name}, to`;
  //
  //
  //
  // console.log(url);

}
