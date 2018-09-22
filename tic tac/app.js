var user1_coin="";
var user2_coin="";
function a()
{
    swal( {
        text:"ENTER PLAYER1 COIN:",
        content: "input",
        button:
        {
text:"NEXT",
        }
      })
      .then(function(value){
        if((value!==""&&value!==" "&&value!==undefined&&value!==null)&&(value.toUpperCase()==='Y'||value.toUpperCase()==='X')){
            swal("PLAYER1 SELECT '"+value.toUpperCase()+"'", {
                icon: "success",
                button:
                {
text:"NEXT PLAYER 2....",
                }
              }).then(function(){
                  if(value.toUpperCase()==='Y'){
                user2_coin='X';      
                  }
                  else
                  {user2_coin='Y';      

                  }
                swal("PLAYER2 SELECT '"+user2_coin+"'", {
                    icon: "success",
                    button:
                    {
    text:"NOW START GAME",
                    }}).then(function(){
                       
                        var sc=document.createElement('script');
                        sc.setAttribute("src","./app1.js");
                        document.body.appendChild(sc);
                        
                    })
              });
            user1_coin=value.toUpperCase();
        }
        else
        {
            swal({
                title: "ERROR",
                text: "YOU MUST SELECT 'X' OR 'Y'",
                icon: "error",
                buttons: {
                    text:"OK",
                },
                dangerMode: true,
              })
              .then(function(again){
                if (again) {
                  a();
                } else {
                    a();
                }
              });
        }
      }).catch(function(err){
          console.log(err);
          a();
      })
}

a();


//---------------------------------------------------------------------------------------------------



