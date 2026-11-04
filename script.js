//your JS code here. If required.
let body=document.querySelector("body");
        let gridcontainer=document.createElement("div")
        body.appendChild(gridcontainer);
       gridcontainer.id="grid-container"
        gridcontainer.style.display="grid";
        gridcontainer.style.gridTemplateColumns="200px 200px 200px"
        for(let i=1;i<=9;i++){
            let box=document.createElement("div");
            gridcontainer.appendChild(box);
            box.id=i
            box.style.width="200px";
            box.style.height="200px";
            box.style.border="2px solid black";
            box.style.margin="3px"

        }
       let form=document.querySelector("form");
       form.addEventListener("submit",(e)=>{
           e.preventDefault();
           let boxid=form.elements[0].value;
           let boxcol=form.elements[1].value;
        let box = document.getElementById(boxid);
           box.style.backgroundColor=boxcol;
           
       })
 
       for(let i=1;i<=9;i++){
		   form=document.querySelector("form");
		   form.addEventListener("reset",(e)=>{
           e.preventDefault();
           
      let box = document.getElementById(i);
           box.style.backgroundColor="transparent";
           console.log(boxid,boxcol)
	   });
       })