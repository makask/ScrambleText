let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext('2d');

fetch('/plotMe.xml').then(response=> {
    console.log(response.body.toString());
}).then(xml => {
    return new DOMParser().parseFromString(xml, 'text/xml');
}).then(object => {
    let els = object.children[0].children;
    for(let i = 0; i < els.length; i++){
        let props = {};       
        for(let j = 0; j<els[i].children.length;j++){
            props[els.children[j].tagName] = els.children[j].textContent;
        }
        if(els[i].tagName == 'Line'){
            ctx.beginPath(); 
            ctx.moveTo(props.XStart)           
        }
    }
});