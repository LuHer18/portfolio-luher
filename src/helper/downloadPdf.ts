

export const downloadPdf = (url: string) => { // Ruta relativa al archivo en la carpeta `public`
    const link = document.createElement('a');
    link.href = url;
    link.download = 'curriculum-luis-herrera.pdf'; // Nombre con el que se descargará el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}
