let container = document.getElementsByName("container");
let drag_cell = null;
let from = 0;

for(let i = 0; i < divs.length; i++)
{
  divs[i].ondragstart = function()
  {
    //记录起始位置
    from = $(this).index()+1;
    drag_cell = this;
  }

  //取消dragover时浏览器默认的动作
  divs[i].ondragover = function()
  {
    event.preventDefault();
  }

  divs[i].ondrop = function()
  {
    if(drag_cell != null && drag_cell != this)
    {

      //判断移动对象是不是
      if(this.textContent != "")
      {
        alert("Can't switch two number-cell");
      }
      else
      {
        console.log(from + " *** " + ($(this).index()+1));

        //计算移动距离，判断是否能移动
        let distance = Math.abs(($(this).index()+1)-from);
        if(distance != 3 && distance != 1 && distance != 0)
        {
          alert("Oops, so far to switch!");
        }
        else
        {
          let temp = document.createElement("div");
  
          container[0].replaceChild(temp,this);
          container[0].replaceChild(this,drag_cell);
          container[0].replaceChild(drag_cell,temp);
          if(check_result() == true)
          {
            if(isRunning)
            {
              isRunning = false;

              clockEl.classList.remove('clock--started');

              startBtnEl.classList.remove('clock-button--pause');
              startBtnTextEl.innerHTML = 'Continue';
            }
            alert("Godd Job! Using time: " + timePlaceholderEl.textContent);
          }
        }
      }
    }
  }
}

//检查是否完成
function check_result()
{
  for(let i = 0; i < divs.length-1; i++)
  {
    console.log(divs[i].textContent + " " + i);
    if(divs[i].textContent != (i+1))
    {
      return false;
    }
  }

  return true;
}