let mainsection = document.getElementById("content");
let heading=document.createElement("h1");
heading.innerText="CALL BACK HELL TASK"
heading.classList.add("container-fluid","headingsection")
mainsection.appendChild(heading);
let bodysection = document.createElement("div");
bodysection.classList.add("container-fluid","bodysection");
let content = document.createElement("div");
content.innerText="Welcome to INDIA U+1F1EE, U+1F1F3";
mainsection.appendChild(bodysection);
bodysection.appendChild(content);
content.classList.add("contentsection");
console.log(mainsection);
setTimeout(() => {
    content.innerText="10";
    setTimeout(() => {
        content.innerText="9";
        setTimeout(() => {
            content.innerText="8";
            setTimeout(() => {
                content.innerText="7";
                setTimeout(() => {
                    content.innerText="6";
                    setTimeout(() => {
                        content.innerText="5";
                        setTimeout(() => {
                            content.innerText="4";
                            setTimeout(() => {
                                content.innerText="3";
                                setTimeout(() => {
                                    content.innerText="2";
                                    setTimeout(() => {
                                        content.innerText="1";
                                        setTimeout(() => {
                                            content.innerText="Happy Independence Day";
                                            
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);