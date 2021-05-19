

//generates the buddhist quotes
function createOneBuddhistQuote(){
  var buddhistQuotes = [
    {firstPart: "Todo vuestro cuerpo", secondPart: "se llenara", thirdPart:"de luz."},
    {firstPart: "Antes de entrar,", secondPart: "en el templo", thirdPart: "perdonen."},
    {firstPart: "La presencia es conciencia pura", secondPart: "conciencia reclamada a la mente", thirdPart: "al mundo de la forma." },
    {firstPart: "Para entender todo,", secondPart: "es necesario ", thirdPart: "olvidarlo todo." },
    {firstPart: "La paz viene", secondPart: "de adentro,", thirdPart: "no la busques afuera." },
    {firstPart: "En lo que pensamos,", secondPart: "será él mismo el", thirdPart: "encargado de castigarte." },
    {firstPart: "La muerte no se teme,", secondPart: "si la vida se ha", thirdPart: "vivido sabiamente." },
    ];
  for (i= 0 ; i < buddhistQuotes.length; i++){
    var rand = Math.floor(Math.random() * buddhistQuotes.length);
    var firstPart_new = (buddhistQuotes[rand].firstPart)
    rand = Math.floor(Math.random() * buddhistQuotes.length);
    var secondPart_new = (buddhistQuotes[rand].secondPart);
    rand = Math.floor(Math.random() * buddhistQuotes.length);
    var thirdPart_new = (buddhistQuotes[rand].thirdPart);
    }
   new_line = firstPart_new +" "+ secondPart_new +" "+ thirdPart_new;
   return new_line;
  //document.getElementById("demo").innerHTML = new_line;
}

//put the number of quotes on each picture for buddhist quotes
function putTheQuotes(number){
  var list_quotes = document.getElementsByTagName("q");
    for (list= 0 ; list < number; list++){
      list_quotes[list].innerHTML = createOneBuddhistQuote();
    }
}

function createOneMindfulQuote(){
  var MindfullnessQuotes = [
    {firstPart: "Mindfulness means being awake", secondPart: "it means knowing what you are doing.", thirdPart:"– Jon Kabat-Zinn"},
    {firstPart: "To think in terms of either pessimism or optimism oversimplifies the truth", secondPart: "the problem is to see reality as it is.", thirdPart: "Thích Nhất Hạnh"},
    {firstPart: "Many people are alive but", secondPart: "don’t touch the miracle of being alive", thirdPart: "Thích Nhất Hạnh" },
    {firstPart: "The present moment is the only time", secondPart: "over which we have dominion.", thirdPart: "Thích Nhất Hạnh" },
    {firstPart: "Everything that has a beginning has an ending", secondPart: "make your peace with that and all will be well.", thirdPart: "Jack Kornfield" },
    {firstPart: "You are the sky", secondPart: "everything else is just the weather.", thirdPart: "Pema Chödrön" },
    {firstPart: "Altogether, the idea of meditation is not to create states of ecstasy or absorption", secondPart: "but to experience being.", thirdPart: "Chögyam Trungpa" },
    ];
  for (i= 0 ; i < MindfullnessQuotes.length; i++){
    var rand = Math.floor(Math.random() * MindfullnessQuotes.length);
    var firstPart_new = (MindfullnessQuotes[rand].firstPart)
    rand = Math.floor(Math.random() * MindfullnessQuotes.length);
    var secondPart_new = (MindfullnessQuotes[rand].secondPart);
    rand = Math.floor(Math.random() * MindfullnessQuotes.length);
    var thirdPart_new = (MindfullnessQuotes[rand].thirdPart);
    }
   new_line = firstPart_new +" "+ secondPart_new +" "+ thirdPart_new;
   return new_line;
  //document.getElementById("demo").innerHTML = new_line;
}

//put the number of quotes on each picture for buddhist quotes
function putMindfulQuotes(number){
  var list_quotes = document.getElementsByTagName("q");
    for (list= 0 ; list < number; list++){
      list_quotes[list].innerHTML = createOneMindfulQuote();
    }
}

//generates mindfulness quotes 
function createMindfulQuote(){
  var mindfullFirstPart = ["¿Las pequeñas cosas?","El momento presente es el único tiempo","La única cosa que es real al final de tu viaje","La meditación es ser consciente de lo que está pasando ahora mismo:","La atención plena es simplemente ser consciente de lo que está sucediendo en este momento sin desear que sea diferente;","La práctica de la meditación no se trata de intentar","La atención no es difícil,"];
      mindfullSecondPart = ["¿Los pequeños momentos?","sobre el que tenemos","es lo que está sucediendo y lo que estás haciendo en este momento","en tu cuerpo, en tus sentimientos,","disfrutando de lo agradable sin aferrarse cuando cambia (que lo hace);","mirar hacia otro lugar para convertirse en algo mejor ","sólo tenemos"];
      mindfullThirdPart = ["No son tan pequeños. Jon Kabat-Zinn","algún dominio. Thích Nhất Hạnh","esto es todo lo que hay, siempre. Eckhart Tolle","en tu mente y en el mundo. Thich Nhat Hanh","estar con lo desagradable sin temor a que siempre será de esta manera (que no lo hará). James Baraz","se trata de hacerse amigo de lo que ya somos. Pema Chödrön","que recordar hacerlo. Sharon Salzberg"];
    
  var randomFirstPart = capital[Math.floor(Math.random() * mindfullFirstPart.length)];
      randSecondPart = mid[Math.floor(Math.random() * mindfullSecondPart.length)];
      randThirdPart = end[Math.floor(Math.random() * mindfullThirdPart.length)];
  return randomFirstPart +'<br>'+ randSecondPart +'<br>'+ randThirdPart;
  }   


//put the number of quotes on each picture for buddhist quotes
function putTheMindfulQuotes(number){
  var list_quotes1 = document.getElementsByTagName("q");
    for (list1= 0 ; list1 < number; list1++){
      list_quotes1[list1].innerHTML = createMindfulQuote();
    }
  return list_quotes1[list1].innerHTML;
}

const radioButtons = document.getElementsByName('optradio');
const formNumber = document.getElementById("FormControlSelect");
var dropDownList = document.querySelector('input[name=optradio]:checked').value;
var numbers = document.getElementsByTagName("option");

//validate which radio button has been selected 
function getRadioValue(tagName) {
  var radios = document.getElementsByName(tagName);
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          return radios[i].value;
      }
  } 
}



// Validates options selected on the form
function validateForm(){  
  var clickedButton = getRadioValue("optradio");
  var select = document.getElementById("FormControlSelect");
  var selectValue =select.options[select.selectedIndex].value;

  if (clickedButton == "Buddhism") {
      if (selectValue === "1") {
        putTheQuotes(1);
      }
      else if (selectValue === "2"){
      putTheQuotes(2);
      }
      else if (selectValue === "3"){
      putTheQuotes(3);
      }
      else if (selectValue === "4"){
      putTheQuotes(4);
      }
      else if (selectValue === "5"){
      putTheQuotes(5);
      }
      else {
      putTheQuotes(6);  
      }
    } else {
        if(selectValue === "1"){
          putMindfulQuotes(1);
        }
      else if (selectValue === "2"){
        putMindfulQuotes(2);
      }
      else if (selectValue === "3"){
        putMindfulQuotes(3);
      }
      else if (selectValue ==="4"){
        putMindfulQuotes(4);
      }
      else if (selectValue ==="5"){
        putMindfulQuotes(5);
      }else {
        putMindfulQuotes(6);
     }
    }
}

//validates the form on submit and clears the form
var radioValue = document.querySelector('input[name="optradio"]:checked').value;
    submitButton = document.getElementById("submitButton");
    formRequest = document.getElementsByName('myForm');
    resetBut = document.getElementById('Reset');


submitButton.addEventListener("click",($event)=> {
  $event.preventDefault();
  validateForm();
});

function clearTheQuotes(number){
    var list_quotes1 = document.getElementsByTagName("q");
      for (list1= 0 ; list1 < number; list1++){
        list_quotes1[list1].innerHTML = "Try again";
      }
  }

resetBut.addEventListener("click",()=> {
  clearTheQuotes(6);
});

/*
resetBut.addEventListener("click",()=> {
  clearTheQuotes();
});
*/


//links the quotes with the click of the submit button
//var submitButton = document.getElementsByID('submitButton');
  //submitButton.addEventlistener('click',validateRadioButton)
//submitButton.addEventlistener('click',putTheQuotes(4))

  
function createBuddhistQuote(number){
  for (j= 0 ; j < number; j++){
    for (i= 0 ; i < buddhistQuotes.length; i++){
      var rand = Math.floor(Math.random() * buddhistQuotes.length);
      var firstPart_new = (buddhistQuotes[rand].firstPart)
      rand = Math.floor(Math.random() * buddhistQuotes.length);
      var secondPart_new = (buddhistQuotes[rand].secondPart);
      rand = Math.floor(Math.random() * buddhistQuotes.length);
      var thirdPart_new = (buddhistQuotes[rand].thirdPart);
    }
    new_line = firstPart_new +" "+ secondPart_new +" "+ thirdPart_new ;
  }
  document.getElementById("demo").innerHTML = new_line;
}

var sentence = [
["¿Las pequeñas cosas?","El momento presente es el único tiempo","La única cosa que es real al final de tu viaje","La meditación es ser consciente de lo que está pasando ahora mismo:","La atención plena es simplemente ser consciente de lo que está sucediendo en este momento sin desear que sea diferente;","La práctica de la meditación no se trata de intentar","La atención no es difícil,"],
["¿Los pequeños momentos?","sobre el que tenemos","es lo que está sucediendo y lo que estás haciendo en este momento","en tu cuerpo, en tus sentimientos,","disfrutando de lo agradable sin aferrarse cuando cambia (que lo hace);","mirar hacia otro lugar para convertirse en algo mejor ","sólo tenemos"],
["No son tan pequeños. Jon Kabat-Zinn","algún dominio. Thích Nhất Hạnh","esto es todo lo que hay, siempre. Eckhart Tolle","en tu mente y en el mundo. Thich Nhat Hanh","estar con lo desagradable sin temor a que siempre será de esta manera (que no lo hará). James Baraz","se trata de hacerse amigo de lo que ya somos. Pema Chödrön","que recordar hacerlo. Sharon Salzberg"] 
];

function createMindfulQuote(number){
  for (z= 0 ; z < number; z++){
    for (k= 0 ; k < number[0].length; k++){
      var rand = Math.floor(Math.random() * number[0].length);
      var firstPartmind = mindfullFirstPart[rand];
    }
    for (l= 0 ; l < mindfullSecondPart.length; l++){
      var rand = Math.floor(Math.random() * mindfullSecondPart.length);
      var secondPartmind = mindfullSecondPart[rand];
    }
    for (m= 0 ; m < mindfullThirdPart.length; m++){
      var rand = Math.floor(Math.random() * mindfullThirdPart.length);
      var thirdPartmind = mindfullThirdPart[rand];
    }
    new_lineMind  = firstPartmind +" "+ secondPartmind +" "+ thirdPartmind;
    console.log(new_lineMind)
  }
}

//createMindfulQuote(5)



