import "node:fs";
import {readFile, writeFile} from 'node:fs';
function enter_pwd() {
  pwd = window.prompt("Enter password...", "Hint: Name of company whose website you are trying to access.");
  if (pwd === null){
    return;
  }
  if (pwd === "MoleTech") {
    document.getElementById("pwd_lgr").innerHTML = "Correct! 😁";
    setTimeout(function() {
      window.open("https://moletech.powerappsportals.com");
    }, 2000);
  }
  else {
    document.getElementById("pwd_lgr").innerHTML = "Incorrect. 🙁";
    setTimeout(function() {
      window.close();
    }, 2000);
  }
}
function replace_button_text(){
  document.getElementById("rand_bin_1").innerHTML = " ÿ÷„î³w  üÍ8Abee  ÿð";
}
function replace_button_txt_reset(){
  document.getElementById("rand_bin_1").innerHTML = "00 FF F7 8F EE B3 77 00 0F FC CD 38 41 64 65 65 00 0F FF F0";
}
function mtagain(){
  window.open("https://moletech.powerappsportals.com", "MoleTech", `width=875,height=450`);
}
function mt(){
  window.open("https://moletech.powerappsportals.com");
}
function ms(){
  window.open("https://microsoft.com");
}
function goo(){
  window.open("https://google.com");
}
function rd1ts(){
  var sel1 = document.getElementById("sel1");
  sel1.selected = true;
}
function returninp1(){
  var inp1 = document.getElementById("inp1").value;
  alert(inp1);
}
function mtpwdinp(){
  const inp2 = document.getElementById("inp2");
  if (inp2 === "MoleTech"){
    window.open("https://moletech.powerappsportals.com");
  }
  else{
    window.alert("Incorrect password", "The password entered is incorrect.")
  }
}
const exportinp1v = () => {
  const inp1txt = "/Saves/inp1/Temp/inp1.mbTemp"
  const inp1a = document.createElement("a");
  const inp1v = document.getElementById("inp1").value;
  const fileinp1 = new Blob([inp1v], { type: 'text/plain' });
  inp1a.href = URL.createObjectURL(fileinp1);
  inp1a.download = "inp1.mbTemp";
  inp1a.click();
  URL.revokeObjectURL(inp1a.href);
};
function clearinp1(){
  document.getElementById("inp1").value = "";
}
function importinp1v(){
  readFile("/Saves/inp1/inp1.mbSave,saveData.dataSet(userChoice).data", (err, data) => {
    if (err) throw err;
    console.log(data);
    document.getElementById("inp1").value = data;
  }); 
}
function saveinp1(){
  
}
function getResults1(){
  F1Fi1 = document.getElementById("F1Fi1").value;
  F1Fi2 = document.getElementById("F1Fi2").value;
  alert("You are a(n) " + F1Fi1 + " and you live in a(n) " + F1Fi2 + ".");
  function addParams() {
    var thisurl = new URL("/");
    thisurl.searchParams.append("organism", F1Fi1);
    thisurl.searchParams.append("home", F1Fi2);
  }
  addParams();
}
function leaveSiteAlert(){
  const lsa = window.confirm("Leave site?", "Your changes may not be saved.");
  if (lsa === null){
    return;
  }
  else{
    window.close;
  }
}
document.addEventListener("keydown", function(event){ 
  if (event.key === "Ctrl" + "W" || "Ctrl" + "w"){
    leaveSiteAlert(); 
  }
});

