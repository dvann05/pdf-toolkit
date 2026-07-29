import { PDFDocument } from "pdf-lib";

export class ImageToPDF {
  constructor() {
    this.images = [];
  }

  async addImage(file) {
    this.images.push(file);
  }

  clear() {
    this.images = [];
  }

  async createPDF() {
    if (this.images.length === 0) {
      throw new Error("Tidak ada gambar dipilih.");
    }

    const pdfDoc = await PDFDocument.create();

    for (const file of this.images) {
      const bytes = new Uint8Array(await file.arrayBuffer());

      let image;

      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
      ) {
        image = await pdfDoc.embedJpg(bytes);
      } else if (file.type === "image/png") {
        image = await pdfDoc.embedPng(bytes);
      } else {
        continue;
      }

      const page = pdfDoc.addPage([
        image.width,
        image.height,
      ]);

      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }

    return await pdfDoc.save();
  }
}	
