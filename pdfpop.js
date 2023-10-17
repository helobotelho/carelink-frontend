document.getElementById('openPdfPopup').addEventListener('click', function() {
    var overlay = document.getElementById('pdfPopup');
    var popup = document.getElementById('popup-contents');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    var pdfFrame = document.getElementById("pdfFrame");
    pdfFrame.src = "./images/Relatorio 1.pdf";
});


document.getElementById('close-btn-pdf').addEventListener('click', function() {
    var overlay = document.getElementById('pdfPopup');
    var popup = document.getElementById('popup-contents');

    overlay.style.display = 'none';
    popup.style.display = 'none';

    var pdfFrame = document.getElementById("pdfFrame");
    pdfFrame.src = ""; // Limpa o src para parar de exibir o PDF
});




document.getElementById('openPdfPopup_2').addEventListener('click', function() {
    var overlay = document.getElementById('pdfPopup_2');
    var popup = document.getElementById('popup-contents');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    var pdfFrame = document.getElementById("pdfFrame_2");
    pdfFrame.src = "./images/Relatorio 2.pdf";
});


document.getElementById('close-btn-pdf_2').addEventListener('click', function() {
    var overlay = document.getElementById('pdfPopup_2');
    var popup = document.getElementById('popup-contents');

    overlay.style.display = 'none';
    popup.style.display = 'none';

    var pdfFrame = document.getElementById("pdfFrame_2");
    pdfFrame.src = ""; // Limpa o src para parar de exibir o PDF
});