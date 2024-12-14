let female= document.querySelector(".female")
let male= document.querySelector(".male")
let height= document.querySelector(".height")
let weight= document.querySelector(".weight")
let calculate= document.querySelector(".calculate")
let result= document.querySelector(".result")
let sugg= document.querySelector(".sugg")
let heightError= document.querySelector(".heightError")
let weightError= document.querySelector(".weightError")
let main=document.querySelector(".main")


female.addEventListener("click",function(){
   main.style.background = "#a7c6fd"
})

male.addEventListener("click",function(){
   main.style.background = "#89caca"
})



calculate.addEventListener("click", function(){
    // if(gender.option =="select"){
    //     genderError.innerHTML = "gender is Requried"
    //  }
    //  else{
    //     genderError.innerHTML = ""
    // }
     

     if(height.value ==""){
        heightError.innerHTML = "Height is Requried"
     }
     else{
        heightError.innerHTML = ""
     }

     if(weight.value ==""){
        weightError.innerHTML = "Weight is Requried"
     }

     else{
        weightError.innerHTML = ""
     }

     if(height.value !="" && weight.value !=""){
        let bmi= (weight.value* 2.2046 / (height.value*height.value))*703;

        result.innerHTML = bmi.toFixed(2);

        if(bmi<18.5){
            sugg.innerHTML="Underweight";
            sugg.style.color="Red"
        }

        else if(bmi>=18.5 && bmi<=24.9){
            sugg.innerHTML="Healthy Weight";
            sugg.style.color="#1a881a"
        }

        else if(bmi>=25.0 && bmi<=29.9){
            sugg.innerHTML="Overweight";
            sugg.style.color="yellow"

        }

        else if(bmi>30.0) {
            sugg.innerHTML="Obesity";
            sugg.style.color="Red"
        }

        
     }
})

