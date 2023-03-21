const image=document.getElementById('image');

const boxes=document.getElementsByTagName('div');

image.addEventListener('dragstart',dragging);
image.addEventListener('dragend',dragged);

for(let box of boxes)
{
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',drop);
}

function dragging()
{
    setTimeout(()=>{
        this.className="invisible";
    },0)
}

function dragged()
{
    this.className="img"
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    e.preventDefault();
}

function dragLeave(e)
{
    e.preventDefault();
}

function drop()
{
    this.className="box";
    this.append(image);
}