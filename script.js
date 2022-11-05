function divCreate(cls){
let div1=document.createElement("div");
div1.className=cls;
return div1;
}
function colCreate(conName,imgsrc,cap,reg){
let col1=divCreate("col-lg-4 com-sm-12");
let card=divCreate("card");
let cardHeader=divCreate("card-header text-white bg-dark border-success");
cardHeader.setAttribute("id","country");
cardHeader.innerHTML=conName;
let cardBody=divCreate("card-body");
cardBody.setAttribute("id","contentBody");
let img1=document.createElement("img");
img1.className="card-img-top";
img1.setAttribute("src",imgsrc)
let title1=divCreate("card-title");
title1.setAttribute("id","capital");
title1.innerHTML=cap;
let title2=divCreate("card-title");
title2.setAttribute("id","region");
title2.innerHTML=reg;
cardBody.append(img1,title1,title2);
card.append(cardHeader,cardBody);
col1.append(card);
return col1;
}
let container=divCreate("container");
let row=divCreate("row");
let countriesListURL="https://restcountries.com/v3.1/all";
let countryList=fetch(countriesListURL);
countryList.then((data)=>data.json()).then((data1)=>{
    for(let i=0;i<data1.length; i++){
        let column=colCreate(data1[i].name.common,data1[i].flags.png,"Capital: "+data1[i].capital[0],"Region: "+data1[i].continents[0]);
        row.append(column);
    }
}).catch((error)=>console.log(error));
container.appendChild(row);
document.body.append(container);