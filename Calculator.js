let stri= '';
function calc(event){
    const ids=["plus","minus","multiply","divide","dot","block0","block1","block2","block3","block4","block5","block6","block7","block8","block9"];
    if(ids.includes(event.target.id)){
       stri+= event.target.innerText;
       console.log(stri);
    }
    console.log(event.target.id);
    if(event.target.id==="clr"){
        console.log("text");
        stri="";
    }
    document.getElementById("input").value=stri;
}
function answer(){
    stri=eval(stri);
}