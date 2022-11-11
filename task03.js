const btnList = document.getElementsByClassName("btn");
for (let i =0; i<3; i++) {
    btnList[i].onclick = (e) => {
        e.path[3].remove();
    };
}