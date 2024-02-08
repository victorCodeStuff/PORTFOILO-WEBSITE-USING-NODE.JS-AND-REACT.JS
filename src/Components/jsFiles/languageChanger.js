function languageChanger (){
    const buttonToLanguage = document.getElementById("languageChanger");
    const mySectionLanguage = document.getElementsByClassName("mySectionLanguage")
    var languageCounter = 0;

    function changeToEnglish (){
        for (let i = 0; i < mySectionLanguage.length; i++) {
            mySectionLanguage[i].innerHTML = "Eu sou Victor, um Desenvolvedor Full Stack dedicado e proficiente em <strong> HTML, CSS, JavaScript, React e Node.js </strong> desde o início da minha jornada de programação em 2023. Atualmente, estou cursando uma graduação em Sistemas de Informação, combinando conhecimento acadêmico com experiência prática em desenvolvimento web. No desenvolvimento web, tenho excelência em HTML para estrutura, CSS para estilização e JavaScript para interatividade. Especializado em React, crio interfaces de usuário modernas e responsivas, enquanto no servidor, utilizo o Node.js para sistemas backend escaláveis e robustos, lidando com tarefas como criação de APIs e gerenciamento de lógica do servidor.";
            mySectionLanguage[i].style.fontSize = "135%";
        }
    }
    function changeToPortguese(){
        for (let i = 0; i < mySectionLanguage.length; i++) { 
            mySectionLanguage[i].innerHTML = "I'm Victor, a dedicated Full Stack Developer proficient in <strong> HTML, CSS, JavaScript,  React, and Node.js </strong> since starting my programming journey  in 2023. Currently pursuing an Information Systems degree, I blend  academic knowledge with practical web development experience. In web  development, I excel in HTML for structure, CSS for styling, and JavaScript  for interactivity. Specializing in React, I create modern, responsive user interfaces, while on the server-side, I leverage Node.js for scalable and robust back-end systems, handling tasks like crafting APIs and managing server logic.";
            mySectionLanguage[i].style.fontSize = "150%"
        }
    }

    function changingLanguage(){
        languageCounter ++;
        console.log(languageCounter)
        if (languageCounter === 1){
            changeToPortguese()
       
           

    }
    if (languageCounter === 2){
        languageCounter = 0;
        changeToEnglish();
       }
    
}
buttonToLanguage.addEventListener('click', changingLanguage);
    
    
}
export default languageChanger