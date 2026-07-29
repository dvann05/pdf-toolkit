import { PDFDocument } from "pdf-lib";
const pickBtn = document.getElementById("pickImages");
const preview = document.getElementById("preview");
const convertBtn = document.getElementById("convert");

let selectedImages = [];

const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.multiple = true;

pickBtn.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", () => {

    preview.innerHTML = "";
    selectedImages = [];

    Array.from(input.files).forEach(file => {

        selectedImages.push(file);

        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);

        preview.appendChild(img);

    });

});

convertBtn.addEventListener("click", async () => {

    if(selectedImages.length===0){
        alert("Silakan pilih gambar terlebih dahulu.");
        return;
    }

    const pdfDoc = await PDFDocument.create();

    for(const file of selectedImages){

        const bytes = await file.arrayBuffer();

        let image;

        if(file.type==="image/png"){
            image = await pdfDoc.embedPng(bytes);
        }else{
            image = await pdfDoc.embedJpg(bytes);
        }

        const page = pdfDoc.addPage([image.width,image.height]);

        page.drawImage(image,{
            x:0,
            y:0,
            width:image.width,
            height:image.height
        });

    }

    const pdfBytes = await pdfDoc.save();

const blob = new Blob([pdfBytes], {
    type: "application/pdf"
});

const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "Image-to-PDF.pdf";
a.click();

URL.revokeObjectURL(url);

alert("PDF berhasil dibuat.");
