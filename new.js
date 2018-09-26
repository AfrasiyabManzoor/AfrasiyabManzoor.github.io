
//toggling _==__________+++++++++++++++++++__________====================
$(document).ready(() => {

    $('.personal').on('click',() => {
       $('.PI').slideToggle('slow');
     });

     $('.sum').on('click',() => {
        $('.summary').slideToggle('slow');
      });

      $('.qual').on('click',() => {
        $('.qualification').slideToggle('slow');
      });

      $('.PA').on('click',() => {
        $('.programming').slideToggle('slow');
      });

      $('.FORM').on('click',() => {
        $('.FOOORM').slideToggle('slow');
      });
  
});

//responsive_navbarresponsive_navbarresponsive_navbarresponsive_navbar
function responsive_navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//TIMER??????????????????????????????????????????????????????????????????
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
//used by startTime() //used by startTime() //used by startTime() 
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//validate form
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["msg"].value;
    if (x == "") {
        alert("Name must not be empty.");
        return false;
    }
    else if(!(/^[A-Za-z\s]+$/.test(x))){
        alert("Name cant have symbols other than alphabets.");
        return false;
    }
    else if(x.length < 3){
        alert("I have never seen a name with less than 3 alphabets");
        return false;
    }
    else if(y == ""){
        alert("Write somehthing.");
        return false;
    }
    else{
        alert("Form Submitted.");
        return false;
    }
}