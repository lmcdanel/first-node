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
