var turn = true;

var arr = [['','',''],['','',''],['','','']];

function check() {
    for(let i = 0;i<3;i++)
    {
        if(arr[i][0]=='O' && arr[i][1]=='O' && arr[i][2]=='O')
        {
            document.querySelector("#answer").innerHTML = "Player 1 (O) Won";
            document.querySelector("h2").innerHTML = '';
            return;
        }
        if(arr[i][0]=='X' && arr[i][1]=='X' && arr[i][2]=='X')
        {
            document.querySelector("#answer").innerHTML = "Player 2 (X) Won";
            document.querySelector("h2").innerHTML = '';
            return;
        }
    }
    for(let i = 0;i<3;i++)
    {
        if(arr[0][i]=='O' && arr[1][i]=='O' && arr[2][i]=='O')
        {
            document.querySelector("#answer").innerHTML = "Player 1 (O) Won";
            document.querySelector("h2").innerHTML = '';
            return;
        }
        if(arr[0][i]=='X' && arr[1][i]=='X' && arr[2][i]=='X')
        {
            document.querySelector("#answer").innerHTML = "Player 2 (X) Won";
            document.querySelector("h2").innerHTML = '';
            return;
        }
    }
    if(arr[0][0]=='X' && arr[1][1]=='X' && arr[2][2]=='X')
    {
        document.querySelector("#answer").innerHTML = "Player 2 (X) Won";
        document.querySelector("h2").innerHTML = '';
        return;
    }
    if(arr[0][0]=='O' && arr[1][1]=='O' && arr[2][2]=='O')
    {
        document.querySelector("#answer").innerHTML = "Player 1 (O) Won";
        document.querySelector("h2").innerHTML = '';
        return;
    }
    if(arr[2][0]=='X' && arr[1][1]=='X' && arr[0][2]=='X')
    {
        document.querySelector("#answer").innerHTML = "Player 2 (X) Won";
        document.querySelector("h2").innerHTML = '';
        return;
    }
    if(arr[0][2]=='O' && arr[1][1]=='O' && arr[2][0]=='O')
    {
        document.querySelector("#answer").innerHTML = "Player 1 (O) Won";
        document.querySelector("h2").innerHTML = '';
        return;
    }
}
function draw()
{
    for(let i = 0;i<3;i++)
    {
        for(let j = 0;j<3;j++)
        {
            if(arr[i][j]==='')
            return '';
        }
    }
    return 'Draw';
}
function fun(t) {
    if (turn)
    {
        if(t.innerHTML==='')
        {
            t.innerHTML = "O";
            document.querySelector("h2").innerHTML = "Player 2 turn...(X)";
            turn = false;
            var i = parseInt(t.id[0]);
            var j = parseInt(t.id[1]);
            arr[i][j] = 'O';
        }
    }
    else
    {
        if(t.innerHTML==='')
        {
            t.innerHTML = "X";
            document.querySelector("h2").innerHTML = "Player 1 turn...(O)";
            turn = true;
            var i = parseInt(t.id[0]);
            var j = parseInt(t.id[1]);
            arr[i][j] = 'X';
        }
    }
    var x = draw();
    if (!x=='')
    {
        document.querySelector("#answer").innerHTML = x;
        document.querySelector("h2").innerHTML = '';
    }
    check();
    

}

