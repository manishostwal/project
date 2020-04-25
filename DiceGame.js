var x;
var highest=0;
var highest1=0;
var number=0;
var number1=0;
var y=0;
var temp=1;
var th=0;
$(function(){
    $('#flip').click(function(){
            $('#p').slideDown(2000)

    })
    $('#flip').click(function(){
        $('#p').slideUp(2500)

})
})
function jq(){
$('#p').slideDown(2000)
$('#pp').slideDown(2000)
$('#p').slideUp(2000)
$('#pp').slideUp(2000)


}
function wel(){

$('#ma').slideDown(10000)
$('#ma').slideUp(3000)

}
function win(){
    $('#n').slideDown(4000)
    $('#n').slideUp(3000)
}

function newgame(){
    var x=0;
    var highest=0;
    var highest1=0;
    var number=0;
    var number1=0;
    var y=0;
    var temp=1;
    var th=0;
    document.getElementById('a5').innerHTML=" "

    document.getElementById('a4').innerHTML=" "
    document.getElementById('a7').innerHTML= " "
    document.getElementById('sc').innerHTML=number1
    document.getElementById('sc1').innerHTML=number1
    home();aA    

}

function home(){
    var delay=5000;
    setInterval(() => {
      var o=document.getElementById('home')
      o.style.display='none'
      var obj=document.getElementById('test')
      obj.style.display='block'
    }, delay);
    wel();
    document.getElementById('a7').innerHTML= "START GAME"
    }
function winner(){
    if(x>20){
        document.getElementById('a7').innerHTML= "Player 1 win"
        win();
        document.getElementById('ma3').innerHTML= "Player 1 win"
    }
    if(y>20){
        document.getElementById('a7').innerHTML= "Player 2 win"
        win();
        document.getElementById('ma3').innerHTML= "Player 2 win"
    }

}
document.getElementById("cc").addEventListener("click",()=>{
   newgame();
    }); 

function thrw(){
    temp++;
}
function resulit(){
    
    if(highest>highest1&&number==0){
        document.getElementById('a5').innerHTML="you are winner"
        document.getElementById('a4').innerHTML="looser"
        win();
        jq();
        document.getElementById('na2').innerHTML= ' "Yeah" WNNER WINNER CHIKEN DINEER Player 1  win'
        highest=0;
        highest1=0;
    }
    if(highest<highest1&&number==0){
 document.getElementById('a4').innerHTML="you are winner"
 document.getElementById('a5').innerHTML="losser"  
 win();
 jq();
 document.getElementById('na2').innerHTML= ' "Yeah" WNNER WINNER CHIKEN DINEER Player 2  win'
 highest=0;
        highest1=0; 
}
    if(highest>highest1&&number1==0){
        document.getElementById('a5').innerHTML="you are winner"
        document.getElementById('a4').innerHTML="looser"
        win();
        jq();
        document.getElementById('na2').innerHTML= ' "Yeah" WNNER WINNER CHIKEN DINEER Player 1  win'
        highest=0;
        highest1=0;
    }
    if(highest<highest1&&number1==0){
 document.getElementById('a4').innerHTML="you are winner"
 document.getElementById('a5').innerHTML="losser"    
 win();
 jq();
 document.getElementById('na2').innerHTML= ' "Yeah" WNNER WINNER CHIKEN DINEER Player 2 win'
 highest=0;
        highest1=0;
}

}

function pass(){
    
               temp++;
               if(temp%2==0){
                document.getElementById('a7').innerHTML= "Player 2 Turn"
               }
               if(temp%2!==0){
                document.getElementById('a7').innerHTML= "Player 1 Turn"
               }
console.log(temp);
    }
    
    function ab(){
   if (temp%2==0) {
    document.getElementById('a7').innerHTML= " Player 2 is playing"
        throwdice1();
        console.log("if "+temp);   
        
   } 
   if(temp%2!==0){
    document.getElementById('a7').innerHTML= "Player 1 is playing"
        throwdice();
        console.log("else"+temp);

   }
  }
  document.getElementById("dice").addEventListener("click",()=>{
    ab();
    console.log("highest;"+highest);
    console.log("highest1"+highest1);
    }); 
     
    
document.getElementById("c").addEventListener("click",()=>{
        pass(); 
        
    })
function throwdice(){
x=Math.floor(Math.random()*5+1)
console.log("num"+x);
// document.getElementById('eee').innerHTML=x
document.images["mydice"].src=eval("face"+x+".src")
if(x==1){
number=0;
document.getElementById('sc').innerHTML=number
document.getElementById('a5').innerHTML="looser"
document.getElementById('a7').innerHTML= "Player 2 Turn"
resulit();
}
if(number>51){
    document.getElementById('a5').innerHTML="you are winner"
}
if(x==2){
number+=x;
highest+=x;
document.getElementById('sc').innerHTML=number
document.getElementById('a5').innerHTML=" "

}
if(x==3){
number+=x;
highest+=x;
document.getElementById('sc').innerHTML=number
document.getElementById('a5').innerHTML=" "

}
if(x==4){
number+=x;
highest+=x;
document.getElementById('sc').innerHTML=number
document.getElementById('a5').innerHTML=" "
}
if(x==5){
number+=x;
highest+=x;
  document.getElementById('sc').innerHTML=number
  document.getElementById('a5').innerHTML=" "
}
if(x==6){
number+=x;
highest+=x;
document.getElementById('sc').innerHTML=number
document.getElementById('a5').innerHTML=" "
}

}

function throwdice1(){
    y=Math.floor(Math.random()*5+1)
    console.log("num"+y);
    // document.getElementById('eee').innerHTML=y
    document.images["mydice"].src=eval("face"+y+".src")


if(y==1){
    number1=0;
    document.getElementById('sc1').innerHTML=number1

    document.getElementById('a7').innerHTML= "Player 1 Turn"
    
    thrw();
    temp++;
    resulit();
    }
    if(number1>51){
        document.getElementById('a4').innerHTML="you are winner"
        
    }

    if(y==2){
    number1+=y;
    highest1+=y;
    document.getElementById('sc1').innerHTML=number1
    document.getElementById('a4').innerHTML=" "
    }
    if(y==3){
    number1+=y;
    highest1+=y;
    document.getElementById('sc1').innerHTML=number1
    document.getElementById('a4').innerHTML=" "
    }
    if(y==4){
    number1+=y;
    highest1+=y;
    document.getElementById('sc1').innerHTML=number1
    document.getElementById('a4').innerHTML=" "
    }
    if(y==5){
    number1+=y;
    highest1+=y;
    document.getElementById('sc1').innerHTML=number1
    document.getElementById('a4').innerHTML=" "
    }
    if(y==6){
    number1+=y;
    highest1+=y;
    document.getElementById('sc1').innerHTML=number1
    document.getElementById('a4').innerHTML=" "
    }
    else{
    
    } }

