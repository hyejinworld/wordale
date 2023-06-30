const 정답 = "APPLE";

let attempts = 0;
let index = 0;
let timer;


function appStart() {
    const displayGameover =() =>{
        const div = document.createElement("div");
        div.innerText = "게임이 종료되었습니다.";
        div.style = "display:flex; justify-content:center; position:absolute; top:40vh left:38vw;";
        document.body.appendChild(div);
        //자식을 추가한다.
    }
    
    
    const nextLine =() =>{
        if(attempts === 6) return;
        attempts += 1;
        index = 0;
    }

const gameover = () =>{
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
    clearInterval(timer);

};
const handleEnterkey = () =>{
    let 맞은_개수 = 0;
    for(let i=0; i < 5; i++){
    //    console.log("i는 이겁니다",i);
    const block = document.querySelector(
        `.board-block[data-index= '${attempts}${i}']`
    );
    const 입력한_글자 = block.innerText;
    const 정답_글자 = 정답[i];
    if(입력한_글자 === 정답_글자) block.style.background = "#6AAA64";
    else if(정답.includes(입력한_글자)) block.style.background = "#C9B458";
    else block.style.background = "#787C7E";
    
    block.style.color = "white";
    }

    if (맞은_개수 === 5) gameover();
    else nextLine();

   // if(index!==5) return; 
//정답확인
//console.log("엔터키");
};
const handleBackspace = (thisBlock) => {
    thisBlock.innerText = "";
    if(index!== 0) 
    index -= 1;
    
};
    const handleKeydown = (event) => {
        

        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(
            `.board-block[data-index= '${attempts}${index}']`
        );
        
        if(event.key ==="Backspace") handleBackspace(thisBlock);
        else if(index === 5){
         if(event.key === "Enter")handleEnterkey();
         else return;
       } else if(index === 5) return;
        
        else if (65 <= keyCode && keyCode <= 90){
        thisBlock.innerText = key;
        index += 1;
            
                //index++;
        //index = indx += 1;
    } //다음인덱스
    }
    ;

const startTimer = () =>{
    const 시작_시간 = new Date();

    function setTime(){
        const 현재_시간 = new Date();
        const 흐른_시간 =  new Date(현재_시간 - 시작_시간);
        //console.log
        const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
        const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
    
        const timeH1 = document.querySelector("#timer");
        timeDiv.innerText = `${분}:${초}`;
    }   
    
    timer = setInterval(setTime,1000);

};

 
    startTimer();
    window.addEventListener("keydown", handleKeydown);
    
}

//카멜표기법
appStart();
