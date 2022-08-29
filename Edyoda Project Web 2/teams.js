let urlData =location.href;
let newUrl = new URL(urlData);
let wholeTeam = newUrl.searchParams.get("name")

teamDetail = JSON.parse(localStorage.getItem("teamArray"));
playerDetail = JSON.parse(localStorage.getItem("playerArray"));

var mainTeam = document.getElementById("teamPlayer")
// console.log(mainTeam)
var tableTeam = document.getElementById("tableTeam")
// console.log(tableTeam)

var cnt=0;

for(var i=0; i<playerDetail.length; i++){
    if(wholeTeam == playerDetail[i].from){
        var Status=" "
        if(playerDetail[i].isPlaying == true){
            Status = "Is Playing"
        }
        else{
            Status = "On Bench"
        }
        var currentP=playerDetail[i].playerName
        cnt++
        mainTeam.innerHTML+= `
        <div class="Card card1" onclick="clickTrigger('${currentP}')">
            <img src="${playerDetail[i].playerImg}" class="image img1" alt="player" />
            
            <div class="details">
                 <p class="pName"><b><i>Name:</i></b> ${playerDetail[i].playerName}</p>
                 <p class="tName"><b><i>Team:</i></b> ${playerDetail[i].from}</p>
                 <p class="pPrice"><b><i>Price:</i></b> ${playerDetail[i].price}</p>
                 <p class="pStatus"><b><i>Status:</i></b> ${Status}</p>
                 <p class="pRole"><b><i>Role:</i></b> ${playerDetail[i].description}</p>
            </div>
 
        </div>
        `
    }
    function clickTrigger(res){
        window.open(`./playerDetails.html?name=${res}`, "_self")
    }
}

var topBatsman=" "
for(var j=0;j<playerDetail.length;j++){
  if(playerDetail[j].description=="Batsman" &&playerDetail[j].from == wholeTeam){
   topBatsman=playerDetail[j].playerName

   break
  }
  else{
   topBatsman="No Player"
  }
}

 var topBowler=" "
for(var j=0;j<playerDetail.length;j++){
  if(playerDetail[j].description=="Bowler"&&playerDetail[j].from==wholeTeam){
   topBowler=playerDetail[j].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}

console.log(cnt)
teamDetail.map((item)=>{
    if(wholeTeam == item.sName){
        return tableTeam.innerHTML+= `
        <div>
            <div class="teamIcon">
              <img src="${item.teamIcon}" class="pageIcon"/>
            </div>
            <div class="teamDetail">
               <span><i> Team:</i> ${item.teamFullName}</span><br>
               <span><i> Player Count:<i> ${cnt}</span><br>
               <span><i> Top Batsman:<i> ${topBatsman}</span><br>
               <span><i> Top Bowler:<i> ${topBowler}</span><br>
               <span><i> Championship Won:<i> ${item.WonCount}</span>
            </div>
        </div>
          `
    }

})