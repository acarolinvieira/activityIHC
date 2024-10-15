   
    const relButton = document.getElementById("relButton");
    const relSelect = document.querySelector("select");
    const reportOutput = document.querySelector(".report-output");
    const cancelButton = document.getElementById("cancelButton");

    relButton.addEventListener("click", () => {
       
        if (relSelect.value) {
            reportOutput.textContent = `Relatório de ${relSelect.value} gerado com sucesso!`;
            reportOutput.style.fontStyle = "italic";
            reportOutput.style.color = "green"; 
        } else {
            reportOutput.textContent = "Por favor, selecione um relatório.";
            reportOutput.style.fontStyle = "italic";
            reportOutput.style.color = "red"; 
        }
    });

    cancelButton.onclick = () => {
        relSelect.value = ""; 
        reportOutput.textContent = ""; 
    };

    function toggleDarkMode() {
        const body = document.body;
        const cards = document.querySelectorAll('.card');
        const sections = document.querySelectorAll('.sectionClass');
    
        body.classList.toggle('dark-mode');
        // cards.classList.toggle('dark-mode');
        cards.forEach(card => {
            card.classList.toggle('dark-mode');
        });
        sections.forEach(section => {
            section.classList.toggle('dark-mode');
        });
    }