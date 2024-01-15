//task -  select all the buttons of the html element in a variable named buttons




//task - select the body element to change its background color


buttons.forEach(function (button) {
  /*learning ----> the use of addEventlistener that is on clicking on the required buttons the
  color changing event must happen you need to write your logic inside this eventListener*/
  
  button.addEventListener('click', function (e) {
    
    console.log(e.target.id);
    //task - write the required logic to style the  background color of the body

  });
});
