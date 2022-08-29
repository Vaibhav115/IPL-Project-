let urlData = location.href
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
// console.log(playerUrl)

teamDetail = JSON.parse(localStorage.getItem("teamArray"));
playerDetail = JSON.parse(localStorage.getItem("playerArray"));

var playerData =document.getElementById("playerDetailWrapper")
// console.log(playerData)

for(var i=0;i<playerDetail.length; i++){
    if(playerDetail[i].playerName==playerUrl){

        var playingOrNot = " "
        if(playerDetail[i].isPlaying==true){
            playingOrNot = "Playing"
        }
        else{
            playingOrNot = "On Bench"
        }

        playerData.innerHTML+=
        `   <div class="detailWrapper">
             <div id="playerImg">
                 <img src="${playerDetail[i].playerImg}" alt=""/>
             </div>
             <div class="detailPlayer">
                <span><i>Player Name: ${playerDetail[i].playerName}</i></span><br>
                <span><i>Team Name: ${playerDetail[i].playerTeam}</i></span><br>
                <span><i>Team Code: ${playerDetail[i].from}</i></span><br>
                <span><i>Worth: ${playerDetail[i].price}</i></span><br>
                <span><i>Status: ${playingOrNot}</i></span>
             </div>
            </div>`

    }
}

