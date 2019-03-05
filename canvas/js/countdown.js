var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date();
endTime.setDate(new Date().getDate()+1);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

function getCurrentShowTimeSeconds() {
    var time = new Date();
    // var ret = endTime.getTime() - time.getTime();//毫秒
    // // console.info(ret);
    // ret = Math.round(ret/1000);
    // // console.info(ret);
    // return ret>=0?ret:0;
    var ret = time.getHours()*3600+time.getMinutes()*60+time.getSeconds();
    return ret;
}

function update() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();
    var curHours = parseInt(curShowTimeSeconds/3600);
    var curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60);
    var curSeconds = curShowTimeSeconds%60;

    var nextHours = parseInt(nextShowTimeSeconds/3600);
    var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
    var nextSeconds = nextShowTimeSeconds%60;

    //判断秒数不同了，那么更新时间
    if(curSeconds != nextSeconds){
        if(parseInt(curHours/10)!=parseInt(nextHours/10)){
            addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curHours/10));
        }
        if(parseInt(curHours%10)!=parseInt(nextHours%10)){
            addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }
        if(parseInt(curMinutes/10)!=parseInt(nextMinutes/10)){
            addBalls(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10));
        }
        if(parseInt(curMinutes%10)!=parseInt(nextMinutes%10)){
            addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10));
        }
        if(parseInt(curSeconds/10)!=parseInt(nextSeconds/10)){
            addBalls(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
        }
        if(parseInt(curSeconds%10)!=parseInt(nextSeconds%10)){
            addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
        }
        curShowTimeSeconds = nextShowTimeSeconds;
    }
    updateBalls();
}

function updateBalls() {
    for (var i = 0;i<balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if(balls[i].y >= WINDOW_HEIGHT-RADIUS){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = -balls[i].vy*0.75;
        }
    }
    var cnn = 0;
    for (var i=0;i<balls.length;i++){
        if(balls[i].x-RADIUS>0&&balls[i].x+RADIUS<WINDOW_WIDTH){
            balls[cnn++] = balls[i];//i的数量一定比cnn大或者等于，所以往前放
        }
    }
    while(balls.length>Math.min(300,cnn)){//比放进来的数目多的全部丢掉,限制在300以内
        balls.pop();
    }
    console.info(balls.length);
}

function addBalls(x,y,num){
    for (var i = 0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                var aBalls = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
                    vy:-5,
                    color:colors[Math.floor(Math.random()*colors.length)]
                };
                balls.push(aBalls);
            }

        }
    }
}

window.onload = function () {
    WINDOW_WIDTH = document.body.clientWidth||document.documentElement.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight||document.documentElement.clientWidth;

    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;//-1是因为算出的是radium+1的长度
    MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();
    // console.info(curShowTimeSeconds);
    setInterval(function(){
        render(context);
        update();
    },50);

}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "rgb(0,102,153)";
    for (var i = 0;i<digit[num].length;i++){
        for (var j = 0; j < digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                cxt.beginPath();
                //注意i,j
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
                cxt.stroke();
            }
        }
    }
}

function render(cxt) {
    //不覆盖
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var hours = parseInt(curShowTimeSeconds/3600);
    var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
    var seconds = curShowTimeSeconds%60;
    //hour的十位数
    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
    renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
    renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
    renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);

    for (var j = 0; j < balls.length;j++){
        cxt.fillStyle = balls[j].color;
        cxt.beginPath();
        cxt.arc(balls[j].x,balls[j].y,RADIUS,0,2*Math.PI);
        cxt.closePath();
        cxt.fill();

    }

}