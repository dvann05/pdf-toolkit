const features=[

["📄","Word → PDF"],

["📝","PDF → Word"],

["📊","Excel → PDF"],

["📈","PDF → Excel"],

["📽️","PPT → PDF"],

["🎞️","PDF → PPT"],

["🖼️","Image → PDF"],

["🌄","PDF → Image"],

["📚","Merge PDF"],

["✂️","Split PDF"],

["🗜️","Compress PDF"],

["🔄","Rotate PDF"],

["🗑️","Delete Pages"],

["📑","Extract Pages"],

["↕️","Reorder Pages"],

["💧","Watermark"],

["🔢","Page Number"],

["🔒","Lock PDF"],

["🔓","Unlock PDF"],

["🕘","History"]

];

const grid=document.getElementById("grid");

features.forEach(item=>{

grid.innerHTML+=`

<div class="card" onclick="openFeature('${item[1]}')">

<div class="icon">${item[0]}</div>

<div class="title">${item[1]}</div>

</div>

`;

});

function openFeature(name){

if(name==="Word → PDF"){

location.href="pages/word-to-pdf.html";

return;

}

alert(name+" masih dalam pengembangan.");

}
