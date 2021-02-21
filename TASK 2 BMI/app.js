function calculateBMI() {
   
    var h=document.getElementById('height').value;  
    var w=document.getElementById('weight').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    document.getElementById('height').value= "";
    document.getElementById('weight').value="";

    document.getElementById("output").innerHTML="Your BMI is " + bmio;
    if(h==0 & w==0){
        alert("Please Enter Height and Weight!")
    }
    if(bmio>25){
        document.getElementById('bad').style.display="block";
    }
    else  {
        document.getElementById('good').style.display="block";
    }
    
}