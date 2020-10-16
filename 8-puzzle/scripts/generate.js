let count = 0;
let numberArray = new Array();
let divs = document.getElementsByName("cell");


getRandom(1, 8, 8);
setNumber();

//随机数生成器，第三个是数量，他在这里一定要等于end-start+1
function getRandom(start, end, quantity) {
    if(count < quantity)
    {
        if(start == end)
        {
            numberArray[count] = start;
            count++;
        }
        else
        {
            let differ = end - start;
            let reuslt = Math.round(start + differ * Math.random());
            numberArray[count] = reuslt;
            count++;

            if(reuslt == end)
            {
                getRandom(start, reuslt-1, quantity);
            }
        
            else if(reuslt == start)
            {
                getRandom(reuslt+1, end, quantity);
            }
        
            else if(start < reuslt < end)
            {
                //0或1选择，选择半段先递归
                let flag = Math.round(0 + 1 * Math.random());
                if(flag == 0)
                {
                    getRandom(start, reuslt-1, quantity);
                    getRandom(reuslt+1, end, quantity);
                }
                else
                {
                    getRandom(reuslt+1, end, quantity);
                    getRandom(start, reuslt-1, quantity);
                }
            }
        }
    }
}

//给每个cell设置数值
function setNumber()
{
    for(let i = 0; i < divs.length; i++)
    {
        divs[i].textContent = numberArray[i];
    }

    divs[divs.length-1].textContent = "";
    divs[divs.length-1].style.backgroundColor = "white";
    divs[divs.length-1].draggable = false;
}