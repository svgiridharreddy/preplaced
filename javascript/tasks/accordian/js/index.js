// var accordion = document.getElementsByClassName("accordian");
// console.log("accordion are", typeof(accordion))
// for(let i = 0; i < accordion.length; i++){
//   accordion[i].addEventListener("click",function(){
//     var subject = this.nextElementSibling;
//     if(subject.style.display === "block"){
//       subject.style.display = "none";
//     } else {
//       subject.style.display = "block";
//     }
//   })
// }

class Accordian{
  constructor(selector){
    this.selector = document.querySelector(selector);
    this.buttons = this.selector.querySelectorAll(".accordian");
    console.log(this.buttons);
    this.buttons.forEach(button => {
      button.addEventListener("click", () => this.toggleAccordian(button))
    });
  }

  toggleAccordian(clickedButton){
    this.buttons.forEach(button => {
      if(button !== clickedButton){
        button.classList.remove('active');
        button.nextElementSibling.classList.remove('active');
      }
    })
    clickedButton.classList.toggle('active');
    clickedButton.nextElementSibling.classList.toggle('active');
  }
}

const myAccordion = new Accordian('.section');