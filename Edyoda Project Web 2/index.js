// var counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 5) {
//         counter = 1;
//     }
// }, 3000);

var playerData =[
    {
        "id":0,
        "playerName":"Hardik Pandya",
        "from":"MI",
        "price":"6.50Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerImg":"https://images.news18.com/ibnlive/uploads/2020/08/1598273519_1-3-696x464.jpg?im=FitAndFill,width=1200,height=1200",
        "playerTeam":"Mumbai Indians"
    },

    {
        "id":1,
        "playerName":"Virat Kohli",
        "from":"RCB",
        "price":"8Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://images.hindustantimes.com/img/2022/05/28/1600x900/kohli-ipl-rcb-new_1652985401184_1653750259132.jpg",
        "playerTeam":"Royal Challengers Banglore"

    },

    {
        "id":2,
        "playerName":"Yuvraj Singh",
        "from":"MI",
        "price":"1Cr",
        "isPlaying":false,
        "description":"BatsMan",
        "playerImg":"https://c.ndtvimg.com/2018-12/9096s95g_yuvraj-singh-mumbai-indians_625x300_22_December_18.jpg",
        "playerTeam":"Mumbai Indians"
    },

    {
        "id":3,
        "playerName":"Chris Morris",
        "from":"RR",
        "price":"16.25Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerImg":"https://imgk.timesnownews.com/story/Chris_Morris_retirement.jpg",
        "playerTeam":"Rajasthan Royals"
    },

    {
        "id":4,
        "playerName":"Glenn Maxwell",
        "from":"RCB",
        "price":"14.25Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerImg":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/09/15/996353-glenn-maxwell-7-cricket.jpg",
        "playerTeam":"Royal Challengers Banglore"
    },

    {
        "id":5,
        "playerName":"Rohit Sharma",
        "from":"MI",
        "price":"6.50Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://c.ndtvimg.com/2020-11/b8bkke5_rohit-sharma-ipl-trophy-bcciipl_625x300_11_November_20.jpg",
        "playerTeam":"Mumbai Indians"
    },

    {
        "id":6,
        "playerName":"Ishan Kishan",
        "from":"MI",
        "price":"2.50Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://c.ndtvimg.com/2022-02/d3828pg_ishan-kishan-ipl_625x300_12_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
        "playerTeam":"Mumbai Indians"
    },

    // I have added some data so that in each team ther should be mininum 2 player must present

    {
        "id":7,
        "playerName":"M.S.Dhoni",
        "from":"CSK",
        "price":"6.50Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://static.toiimg.com/thumb/msid-82147662,imgsize-94231,width-400,resizemode-4/82147662.jpg",
        "playerTeam":"Chennai Super Kings"
    },

    {
        "id":8,
        "playerName":"Ravindra Jadeja",
        "from":"CSK",
        "price":"2.50Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerImg":" https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/09/1763204-jaddu.jpg ",
        "playerTeam":"Chennai Super Kings"
    },

    {
        "id":9,
        "playerName":"Rishabh Pant",
        "from":"DC",
        "price":"16Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/23/97a85e3e6768af9e24f9fcced328691a_original.jpg",
        "playerTeam":"Delhi Capitals"
    },

    {
        "id":10,
        "playerName":"Shardul Thakur",
        "from":"DC",
        "price":"10.75Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerImg":"https://www.firstpost.com/wp-content/uploads/2022/05/Shardul-Thakur-PBKS-DC-IPL-2022-Sportzpics-640.jpg",
        "playerTeam":"Delhi Capitals"
    },

    {
        "id":11,
        "playerName":"Shreyas Iyer",
        "from":"KKR",
        "price":"12.25Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://www.kkr.in/static-assets/waf-images/33/fa/81/16-9/388-218/7UrxiNunTt.jpg",
        "playerTeam":"Kolkata Knight Riders"
    },

    {
        "id":12,
        "playerName":"Pat Cummins",
        "from":"KKr",
        "price":"7.50Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerImg":" https://images.newindianexpress.com/uploads/user/imagelibrary/2022/5/13/w1200X800/Pat_Cummins_PTI.jpg",
        "playerTeam":"Kolkata Knight Riders"
    },

    {
        "id":13,
        "playerName":"KL Rahul",
        "from":"LSG",
        "price":"17Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://telanganatoday.com/wp-content/uploads/2022/04/KL-Rahul.jpg",
        "playerTeam":"Lucknow Super Giants"
    },

    {
        "id":14,
        "playerName":"Andrew Tye",
        "from":"LSG",
        "price":"1Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerImg":"https://img.cricketworld.com/images/f-106365/andrew-tye-lsg-smiling.jpg",
        "playerTeam":"Lucknow Super Giants"
    },

    {
        "id":15,
        "playerName":"Mayank Agrawal",
        "from":"PBKS",
        "price":"12Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://www.crictracker.com/wp-content/uploads/2018/11/Mayank-Agarwal-KXIP.jpg",
        "playerTeam":"Punjab Kings"
    },

    {
        "id":16,
        "playerName":"Arshdeep Singh",
        "from":"PBKS",
        "price":"4Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerImg":"https://staticg.sportskeeda.com/editor/2021/04/fd484-16181400128167-800.jpg",
        "playerTeam":"Punjab Kings"
    },

    {
        "id":17,
        "playerName":"Kuldip Yadav",
        "from":"RR",
        "price":"1Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerImg":"https://i0.wp.com/crictoday.com/wp-content/uploads/2021/06/Kuldeep-Yadav.png?fit=1200%2C675&ssl=1",
        "playerTeam":"Rajasthan Royals"
    },

    {
        "id":18,
        "playerName":"Kane Williamson",
        "from":"SRH",
        "price":"14Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/h1ufhwhzlglcnveg_1644571605.jpeg",
        "playerTeam":"Sunrisers Hyderabad"
    },

    {
        "id":19,
        "playerName":"Sean Abbott",
        "from":"SRH",
        "price":"2.40Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerImg":"https://moneyball.insidesport.in/img/singleplayer/Sean-Abbott.jpg",
        "playerTeam":"Sunrisers Hyderabad"
    },

    {
        "id":20,
        "playerName":"Shubman Gill",
        "from":"GT",
        "price":"8Cr",
        "isPlaying":true,
        "description":"BatsMan",
        "playerImg":"https://images.news18.com/ibnlive/uploads/2022/04/shubman.jpg",
        "playerTeam":"Gujrat Titans"
    },

    {
        "id":21,
        "playerName":"Rashid Khan",
        "from":"GT",
        "price":"15Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerImg":"https://www.crictracker.com/wp-content/uploads/2022/04/Rashid-Khan.jpg",
        "playerTeam":"Gujrat Titans"
    },


];
 
var teamData = [
    {
        "id":0,
        "teamFullName":"Mumbai Indians",
        "sName":"MI",
        "fullSname":"MI (Mumbai Indians)",
        "teamIcon":"https://cutewallpaper.org/21/mumbai-indians-logo/Corel-Draw-Mumbai-Indians-Logo-With-Pen-Tool-YouTube.jpg",
        "WonCount":5,
    },

    {
        "id":1,
        "teamFullName":"Chennai Super Kings",
        "sName":"CSK",
        "fullSname":"CSK (Chennai Super Kings)",
        "teamIcon":"https://wallpapercave.com/wp/wp3156840.jpg",
        "WonCount":4,
    },

    {
        "id":2,
        "teamFullName":"Royal Challengers Banglore",
        "sName":"RCB",
        "fullSname":"RCB (Royal Challengers Banglore)",
        "teamIcon":"https://pbs.twimg.com/media/EQtmN0fUcAAnCyu?format=jpg&name=small",
        "WonCount":0,
    },

    {
        "id":3,
        "teamFullName":"Kolkata Knight Riders",
        "sName":"KKR",
        "fullSname":"KKR (Kolkata Knight Riders)",
        "teamIcon":"https://i.pinimg.com/originals/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg",
        "WonCount":2,
    },

    {
        "id":4,
        "teamFullName":"Sunrisers Hyderabad",
        "sName":"SRH",
        "fullSname":"SRH (Sunrisers Hyderabad)",
        "teamIcon":"https://i.pinimg.com/originals/b7/7d/f5/b77df59b1a5f0f209b94a0148ddb02d5.jpg",
        "WonCount":1,
    },

    {
        "id":5,
        "teamFullName":"Delhi Capitals",
        "sName":"DC",
        "fullSname":"DC (Delhi Capitals)",
        "teamIcon":"https://i.pinimg.com/originals/35/08/7e/35087eada185f7ca06fc9883de8f0420.jpg",
        "WonCount":0,
    },

    {
        "id":6,
        "teamFullName":"Gujrat Titans",
        "sName":"GT",
        "fullSname":"GT (Gujrat Titans)",
        "teamIcon":"https://img.jagranjosh.com/images/2022/February/2122022/gujarat_titans_team_logo.jpg",
        "WonCount":1,
    },

    {
        "id":7,
        "teamFullName":"Punjab Kings",
        "sName":"PBKS",
        "fullSname":"PBKS (Punjab Kings)",
        "teamIcon":"https://images.news18.com/ibnlive/uploads/2022/02/pbks-logo.jpg",
        "WonCount":0,
    },

    {
        "id":8,
        "teamFullName":"Lucknow Super Giants",
        "sName":"LSG",
        "fullSname":"LSG (Lucknow Super Giants)",
        "teamIcon":"https://www.thestatesman.com/wp-content/uploads/2022/01/ipl-1-1024x683.jpg",
        "WonCount":0,
    },

    {
        "id":9,
        "teamFullName":"Rajasthan Royals",
        "sName":"RR",
        "fullSname":"RR (Rajasthan Royals)",
        "teamIcon":"https://www.newznew.com/wp-content/uploads/2020/09/Rajasthan-Royals-Logo.jpg",
        "WonCount":0,
    }
];

var addPlayerClick=()=>{
    window.open("./addPlayer.html","_self")
}

var addTeamClick=()=>{
    window.open("./addTeam.html","_self")
}


let teamDetail = [];
let playerDetail = [];

if (localStorage.getItem('teamArray') == null)
localStorage.setItem('teamArray',JSON.stringify(teamData))

if(localStorage.getItem('playerArray') == null)
localStorage.setItem('playerArray',JSON.stringify(playerData))

teamDetail = JSON.parse(localStorage.getItem('teamArray'));
playerDetail = JSON.parse(localStorage.getItem('playerArray'));


var searchArray = [];

for(var i=0; i<teamDetail.length; i++){
    searchArray.push(teamDetail[i].sName)
}
 
let searchBar = document.querySelector('#searchBox')
let inputBox = searchBar.querySelector('input')
let dropDown = searchBar.querySelector('.autoBox')
let icon = searchBar.querySelector('.icon')


inputBox.onkeyup =(e)=>{
    if(e.keycode==13){
        icon.click()
    }

    let userData = e.target.value;
    let emptyArray = [];

    if(userData){
        emptyArray = searchArray.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add('active');
        showSuggestion(emptyArray);
        let allList = dropDown.querySelectorAll('li');
        for(let i=0; i < allList.length; i++) {

            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    }else{
        searchBar.classList.remove("active");
    }
}
function currentLi(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        window.open(`./teams.html?name=${element.textContent}`,"_self")
    }
    searchBar.classList.remove("active");

}
function showSuggestion(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    }
    dropDown.innerHTML= listData;
}

var teamGrid = document.getElementById("teamContainer")
// console.log(teamGrid)
for(var i=0; i<teamDetail.length; i++){

    teamGrid.innerHTML+= `
    <div class="Card" onclick="clickTrigger('${i}')">
        <img src="${teamDetail[i].teamIcon}" class="image" alt="" />
            <div class="details">
                <p class="text1"> Team: ${teamDetail[i].teamFullName}</p>
                <p class="text2"> Won Count: ${teamDetail[i].WonCount}</p>
            </div>
    </div>
    `
}
function clickTrigger(res){
    var clickedCard=teamDetail[res].sName

    window.open(`./teams.html?name=${clickedCard}`,"_self")
}