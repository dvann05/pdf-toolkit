const input=document.getElementById("wordFile");

const status=document.getElementById("status");

const btn=document.getElementById("convertBtn");

input.onchange=()=>{

if(input.files.length){

status.innerHTML=

"File dipilih:<br><b>"+

input.files[0].name+

"</b>";

}

};

btn.onclick=()=>{

if(input.files.length==0){

alert("Pilih file Word terlebih dahulu.");

return;

}

alert("Fitur konversi akan dibuat pada tahap berikutnya.");

};
