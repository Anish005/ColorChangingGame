//task1 -  select all the buttons of the html element in a variable named buttons


const buttons = document.querySelectorAll('.button');

//task2 - select the body element to change its background color
const body = document.querySelector('body');

buttons.forEach(function (button) {
  
  button.addEventListener('click', function (e) {
    // task3 - should console log the target id to show the name of the button is being clicked on
    console.log(e.target.id);
    //task4 - write the required logic to style the  background color of the body

  });
});
