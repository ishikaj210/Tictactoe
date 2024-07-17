let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let newgameb = document.querySelector("#new");
let mess1 = document.querySelector(".mess");
let mes1 = document.querySelector("#mes");

let turno = true;

const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const reset = () =>{
    turno = true;
    enable();
    mess1.classList.add("hide");
};


boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turno){
        box.innerText = "O";
        turno = false;
        }else{
            box.innerText="X";
            turno = true;
        }
        box.disabled = true;

        checkwin();
});
});


const showwin = (winner) =>{
    mes1.innerText = `winner is ${winner}`;
    mess1.classList.remove("hide");
    disable();
};

const checkwin = () => {
    for (pat of winpat){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1!= "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwin(pos1);
                return true;
            }
        }
    }
}

newgameb.addEventListener("click",reset);
resetb.addEventListener("click",reset);
