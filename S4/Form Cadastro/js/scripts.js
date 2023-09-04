document.getElementById("aluno").addEventListener("click", () => toggleView("aluno"));
document.getElementById("professor").addEventListener("click", () => toggleView("professor"));

function toggleView(tipo) {
    const area = document.getElementById("area-area");
    const lattes = document.getElementById("area-lattes");
    const matricula = document.getElementById("area-matricula");
    const curso = document.getElementById("area-curso");

    if (tipo === "aluno") {
        area.style.display = "none";
        lattes.style.display = "none";
        matricula.style.display = "block";
        curso.style.display = "block";

    } else if (tipo === "professor") {
        area.style.display = "block";
        lattes.style.display = "block";
        matricula.style.display = "block";
        curso.style.display = "none";

    }
}
