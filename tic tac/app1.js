var pl1_tunn=document.getElementById('txt');
var pl2_tunn=document.getElementById('txt1');
var count=0;
var maindiv=document.getElementById('main_div');


//box1
var b1=document.createElement('input');
b1.setAttribute("class","box1");
b1.setAttribute("id","box1");

b1.setAttribute("type","button");
b1.setAttribute("onClick","box1()");


var b2=document.createElement('input');
b2.setAttribute("class","box2");
b2.setAttribute("id","box2");
b2.setAttribute("type","button");
b2.setAttribute("onClick","box2()");


var b3=document.createElement('input');
b3.setAttribute("class","box3");
b3.setAttribute("id","box3");

b3.setAttribute("type","button");
b3.setAttribute("onClick","box3()");


var b4=document.createElement('input');
b4.setAttribute("class","box4");
b4.setAttribute("id","box4");

b4.setAttribute("type","button");
b4.setAttribute("onClick","box4()");


var b5=document.createElement('input');
b5.setAttribute("class","box5");
b5.setAttribute("id","box5");

b5.setAttribute("type","button");
b5.setAttribute("onClick","box5()");


var b6=document.createElement('input');
b6.setAttribute("class","box6");
b6.setAttribute("id","box6");

b6.setAttribute("type","button");
b6.setAttribute("onClick","box6()");


var b7=document.createElement('input');
b7.setAttribute("class","box7");
b7.setAttribute("id","box7");

b7.setAttribute("type","button");
b7.setAttribute("onClick","box7()");


var b8=document.createElement('input');
b8.setAttribute("class","box8");
b8.setAttribute("id","box8");

b8.setAttribute("type","button");
b8.setAttribute("onClick","box8()");


var b9=document.createElement('input');
b9.setAttribute("class","box9");
b9.setAttribute("id","box9");

b9.setAttribute("type","button");
b9.setAttribute("onClick","box9()");
 check_turn();
function check_turn()
{
if(count%2===0){
    pl2_tunn.setAttribute("class","txt_hide");
    pl1_tunn.setAttribute("class","txt");
}
else
{
    pl1_tunn.setAttribute("class","txt_hide");
    pl2_tunn.setAttribute("class","txt");
}
}

 

function box1(){
    if(count%2===0)
    {
 
b1.setAttribute("value",user1_coin);
    }
    else
    {var text= "PLAYER "+user1_coin+"turn";
        b1.setAttribute("value",user2_coin);
    }
    
    b1.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box2(){
    if(count%2===0)
    {
b2.setAttribute("value",user1_coin);
    }
    else
    {
        b2.setAttribute("value",user2_coin);
    }
    b2.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box3(){
    if(count%2===0)
    {
b3.setAttribute("value",user1_coin);
    }
    else
    {
        b3.setAttribute("value",user2_coin);
    }
    b3.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box4(){
    if(count%2===0)
    {
b4.setAttribute("value",user1_coin);
    }
    else
    {
        b4.setAttribute("value",user2_coin);
    }
    b4.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box5(){
    if(count%2===0)
    {
b5.setAttribute("value",user1_coin);
    }
    else
    {
        b5.setAttribute("value",user2_coin);
    }
    b5.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box6(){
    if(count%2===0)
    {
b6.setAttribute("value",user1_coin);
    }
    else
    {
        b6.setAttribute("value",user2_coin);
    }
    b6.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box7(){
    if(count%2===0)
    {
        b7.setAttribute("value",user1_coin);
    }
    else
    {
        b7.setAttribute("value",user2_coin);
    }
    b7.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box8(){
    if(count%2===0)
    {
b8.setAttribute("value",user1_coin);
    }
    else
    {
        b8.setAttribute("value",user2_coin);
    }
    b8.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
function box9(){
    if(count%2===0)
    {
b9.setAttribute("value",user1_coin);
    }
    else
    {
        b9.setAttribute("value",user2_coin);
    }
    b9.setAttribute("disabled","disabled");
    count++;
    check_turn();
    won();
}
var match_toss=false;
var win=false;
function won()
{ if(count===8 && win===false&& match_toss===false)
{
    to();
    function to()
    {

    
    swal("Now its time to toss", {
        icon: "warning",
        button:
        {
text:"Go",
        }}).then(function(){
            swal( {
                text:"PLAYER1 CHOOSE HEAD OR TAIL",
                content: "input",
                button:
                {
        text:"NEXT",
                }
              })
              .then(function(value){
                if((value!==""&&value!==" "&&value!==undefined&&value!==null)&&(value.toUpperCase()==='HEAD'||value.toUpperCase()==='TAIL')){
                    swal("PLAYER1 SELECT '"+value.toUpperCase()+"'", {
                        icon: "success",
                        button:
                        {
        text:"NEXT PLAYER 2....",
                        }
                      }).then(function(){
                          var sel='';
                          if(value.toUpperCase()==='HEAD'){
                        sel='TAIL';      
                          }
                          else
                          {sel='HEAD';      
        
                          }
                        swal("PLAYER2 SELECT '"+sel+"'", {
                            icon: "success",
                            button:
                            {
            text:"TOSS",
                            }}).then(function(){
                               
                            var tos=Math.round(Math.random());
                            if(tos===0)
                            {
                                swal("PLAYER1 WON TOSS", {
                                    icon: "success",
                                    button:
                                    {
                    text:"OK",
                                    }})
                                    check_turn();
                            }
                            else if(tos===1)
                            {
                                swal("PLAYER2 WON TOSS", {
                                    icon: "success",
                                    button:
                                    {
                    text:"OK",
                                    }})
                                    count--;
                                    check_turn();
                            }
                            match_toss=true;
                            })
                      });
                  
                }
                else
                {
                    swal({
                        title: "ERROR",
                        text: "YOU MUST SELECT 'HEAD' OR 'TAIL'",
                        icon: "error",
                        buttons: {
                            text:"OK",
                        },
                        dangerMode: true,
                      })
                      .then(function(again){
                        if (again) {
                          
to();
                            
                        } 
                      });
                }
              }).catch(function(err){
                  console.log(err);
                  to();
              })
            
        })}
}
else if( b1.getAttribute("value")!==null&& b2.getAttribute("value")!==null &&b3.getAttribute("value")!==null && b1.getAttribute("value")===b2.getAttribute("value")&&b2.getAttribute("value")===b3.getAttribute("value")){
    
    swal("player "+b1.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
        
      win=true;
}
else if(b1.getAttribute("value")!==null&& b4.getAttribute("value")!==null &&b7.getAttribute("value")!==null&& b1.getAttribute("value")===b4.getAttribute("value")&&b4.getAttribute("value")===b7.getAttribute("value")){
    swal("player "+b1.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
    
    win=true;
}

else if(b1.getAttribute("value")!==null&& b5.getAttribute("value")!==null &&b9.getAttribute("value")!==null&&b1.getAttribute("value")===b5.getAttribute("value")&&b5.getAttribute("value")===b9.getAttribute("value")){
    swal("player "+b1.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
    
    win=true;
}
else if(b4.getAttribute("value")!==null&& b5.getAttribute("value")!==null &&b6.getAttribute("value")!==null&&b4.getAttribute("value")===b5.getAttribute("value")&&b5.getAttribute("value")===b6.getAttribute("value")){
    swal("player "+b4.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
    
    win=true;
}
else if(b7.getAttribute("value")!==null&& b8.getAttribute("value")!==null &&b9.getAttribute("value")!==null&&b7.getAttribute("value")===b8.getAttribute("value")&&b8.getAttribute("value")===b9.getAttribute("value")){
    swal("player "+b7.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
    
    
    win=true;
}
else if(b2.getAttribute("value")!==null&& b5.getAttribute("value")!==null &&b8.getAttribute("value")!==null&&b2.getAttribute("value")===b5.getAttribute("value")&&b5.getAttribute("value")===b8.getAttribute("value")){
    swal("player "+b2.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })

    
    win=true;
}
else if(b3.getAttribute("value")!==null&& b6.getAttribute("value")!==null &&b9.getAttribute("value")!==null&&b3.getAttribute("value")===b6.getAttribute("value")&&b6.getAttribute("value")===b9.getAttribute("value")){
    swal("player "+b3.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })

    
    win=true;
}
else if(b7.getAttribute("value")!==null&& b5.getAttribute("value")!==null &&b3.getAttribute("value")!==null&&b3.getAttribute("value")===b5.getAttribute("value")&&b5.getAttribute("value")===b7.getAttribute("value")){
   
    swal("player "+b7.getAttribute("value")+" won", {
        icon: "success",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
    win=true;
}

else if((count===9||count===8) && win===false){
    swal("MATCH TIED", {
        icon: "error",
        button:
        {
text:"PLAY AGAIN",
        }}).then(function(){
           
            a();
        })
}



}



maindiv.appendChild(b1);
maindiv.appendChild(b2);
maindiv.appendChild(b3);
maindiv.appendChild(b4);
maindiv.appendChild(b5);
maindiv.appendChild(b6);
maindiv.appendChild(b7);
maindiv.appendChild(b8);
maindiv.appendChild(b9);
