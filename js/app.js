let myNavBar = document.getElementById("navbar");
myNavBar.style.cssText ="display:flex; align-items:center;justify-content:space-between";
let logo = document.createElement("div");
let logoImage = document.createElement("img");
let textLogo = document.createTextNode("ZAHID");
logo.appendChild(logoImage);
logo.appendChild(textLogo);
myNavBar.appendChild(logo);

logoImage.src="../Go_Logo_Black.svg.png";
logoImage.style.cssText ="width:60px;height:30px;margin-right:6px;"

myNavBar.style.cssText = "width:100%;height:70px;align-items:center;display:flex;justify-content:space-between;border-bottom:1px solid white;position:fixed;z-index:20";
logo.style.cssText = "color:red;font-size:30px;font-family:Arial, Helvetica, sans-serif;inline-height:80px;padding:0 3%; display:flex;";

let myUl = document.createElement("ul");
myUl.setAttribute("id", "myUL");
// myNavBar.appendChild(myUl);

let listArray = [
  "Home",
  "Team",
  "products",
  "Ingradints",
  "Conference",
  "Contact Us",
];
let listOfId=["home-banner","our-team","products","our-ingradints","conference","contact"]


 window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 50){
        myNavBar.classList.add("active-nav");
        
    }else{
        myNavBar.classList.remove("active-nav");
    }
 })




for (let i = 0; i < listArray.length; i++) {
  let myLi = document.createElement("li");
  let myLink = document.createElement("a");
  let myLinkText = document.createTextNode(`${listArray[i]}`);
  myLink.appendChild(myLinkText);
  myLi.appendChild(myLink);
  myUl.appendChild(myLi);
  myLink.href = `#${listOfId[i]}`;
  myLi.style.cssText = "display:inline-block;margin:0; inline-height:70px;"
  myLink.style.cssText= "font-size:18px;text-transform:uppercase;font-weight:bold;color:white;padding:21px;text-decoration:none;"


  myLink.addEventListener("mouseover", ()=>{
    myLink.style.background="grey"
  });


  myLink.addEventListener("mouseleave", ()=>{
    myLink.style.background="transparent"
  });

  // const sections = document.querySelectorAll('section');
  // window.addEventListener('scroll',()=>{
  //   let current = '';
  //   sections.forEach(section=>{
  //     const sectionTop= section.offsetTop;
  //     const sectionHeight= section.clientHeight;
  //     if(pageYOffset >=(sectionTop-sectionHeight/3)){
  //       current= section.getAttribute('id');
  //     }
  //   })

  //   myLi.forEach(li=>{
  //     li.classList.remove('active-nav');
  //     if(li.classList.contains(current)){
  //       li.classList.add('active-nav')
  //     }
  //   })


  // })

  


}
myUl.style.cssText = "float: right;margin-right:10px";
myNavBar.appendChild(myUl);




    // append to section home-banner

let firstSection = document.getElementById("home-banner");
let heading = document.createElement("h1");
let textHeading = document.createTextNode("thank you for joining ");
let mySpan = document.createElement("span");
let textSpan = document.createTextNode("us at fini europe.");
mySpan.appendChild(textSpan);
heading.appendChild(textHeading);
heading.appendChild(mySpan);
mySpan.style.cssText = "display:flex;justify-content:center";
firstSection.appendChild(heading);
heading.style.cssText="justify-content: center;margin:200px  400px;text-transform:capitalize;color:white;font-size:48px;font-weight:bold;width:580px;align-items:center;display:flex;flex-direction:column;margin-bottom:0"


let paragraph = document.createElement("p");
let textPara = document.createTextNode("if we had the chance to connect ,it was our sincere pleasure .if we missed");
let mySpan2 = document.createElement("span");
let textSpan2 = document.createTextNode("you,we'd love to continue the conversation .");
mySpan2.appendChild(textSpan2);
paragraph.appendChild(textPara);
paragraph.appendChild(mySpan2);
paragraph.style.cssText="justify-content: center;color:white;font-size:17px;font-weight:bold;width:660px;align-items:center;display:flex;flex-direction:column;margin-top:40px;margin-left:350px;"

firstSection.appendChild(paragraph);

    // append to our-team

    let secondSection = document.querySelector("#our-team");
    let heading2 = document.createElement("h2");
    let textHeading2= document.createTextNode("Here's how you can get in touch");
    secondSection.style.cssText= "align-items:center;text-align:center;background-image: url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);background-repeat: no-repeat;background-size:cover; background-attachment: fixed; min-height:550px; padding-top :90px;";
    heading2.appendChild(textHeading2);
    secondSection.appendChild(heading2);
    let para = document.createElement("p");
    let textParagraph = document.createTextNode("our team can't wait to share more with you . please don't hesitate to reach out to any one of us");
    para.appendChild(textParagraph);
    secondSection.appendChild(para);
    para.style.cssText="margin:20px 0";



    let DivSendEmailAll = document.createElement("div");
    DivSendEmailAll.style.cssText="display:flex;margin-top:70px;gap:20px;margin-left:5%;";
    for(let j=1 ; j<4; j++) {
    
    let DivSendEmail = document.createElement("div");
    DivSendEmail.style.cssText="background-color:white;height:20%;padding:20px;text-align:center;";
    let titleTag = document.createElement("h3");
    let title = document.createTextNode("martin muller francic");
    titleTag.appendChild(title);
    DivSendEmail.appendChild(titleTag);
    let descriptionTag = document.createElement("p");
    let description = document.createTextNode("area sales manager germany ,austria and switzerland");
    descriptionTag.style.cssText = "width: 80% ;text-align: center;margin:3% 0;margin-left:15%";
    descriptionTag.appendChild(description);
    DivSendEmail.appendChild(descriptionTag);

    let DivContainer = document.createElement("div");
    DivContainer.style.cssText="color :red;display :flex;align-items :center;justify-content :center;gap:6px";
    let iconOfEmail = document.createElement("i");
    iconOfEmail.setAttribute("class", "fa-regular fa-envelope");
    iconOfEmail.style.cssText="color :white;background-color :red;width:25px;height:18px;border-radius :50%;padding:3px 0";
    let sendEmailTag = document.createElement("p");
    let sendEmail = document.createTextNode("send email");
    sendEmailTag.appendChild(sendEmail);
    DivContainer.appendChild(iconOfEmail);
    DivContainer.appendChild(sendEmailTag);
    DivSendEmail.appendChild(DivContainer);
    DivSendEmailAll.appendChild(DivSendEmail);
    secondSection.appendChild(DivSendEmailAll);
    }

    
    let DivSendEmailAll2= document.createElement("div");
    DivSendEmailAll2.style.cssText="display:flex;gap:20px;margin:2% 0;margin-left:5%;";
    for(let k=1 ; k<4; k++) {
    
    let DivSendEmail2 = document.createElement("div");
    DivSendEmail2.style.cssText="background-color:white;height:20%;padding:20px;text-align:center;";
    let titleTag2 = document.createElement("h3");
    let title2 = document.createTextNode("martin muller francic");
    titleTag2.appendChild(title2);
    DivSendEmail2.appendChild(titleTag2);
    let descriptionTag2 = document.createElement("p");
    let description2 = document.createTextNode("area sales manager germany ,austria and switzerland");
    descriptionTag2.style.cssText = "width: 80% ;text-align: center;margin:3% 0;margin-left:15%";
    descriptionTag2.appendChild(description2);
    DivSendEmail2.appendChild(descriptionTag2);

    let DivContainer2 = document.createElement("div");
    DivContainer2.style.cssText="color :red;display :flex;align-items :center;justify-content :center;gap:6px";
    let iconOfEmail2 = document.createElement("i");
    iconOfEmail2.setAttribute("class", "fa-regular fa-envelope");
    iconOfEmail2.style.cssText="color :white;background-color :red;width:25px;height:18px;border-radius :50%;padding:3px 0";
    let sendEmailTag2 = document.createElement("p");
    let sendEmail2 = document.createTextNode("send email");
    sendEmailTag2.appendChild(sendEmail2);
    DivContainer2.appendChild(iconOfEmail2);
    DivContainer2.appendChild(sendEmailTag2);
    DivSendEmail2.appendChild(DivContainer2);
    DivSendEmailAll2.appendChild(DivSendEmail2);
    secondSection.appendChild(DivSendEmailAll2);
    }

    
    let DivSendEmailAll3= document.createElement("div");
    DivSendEmailAll3.style.cssText="display:flex;gap:20px;margin:2% 0;justify-content:center;margin-right:3% ;margin-bottom:5%";
    let DivSendEmail3 = document.createElement("div");
    DivSendEmail3.style.cssText="background-color:white;height:20%;padding:20px;text-align:center;";
    let titleTag3 = document.createElement("h3");
    let title3 = document.createTextNode("martin muller francic");
    titleTag3.appendChild(title3);
    DivSendEmail3.appendChild(titleTag3);
    let descriptionTag3 = document.createElement("p");
    let description3 = document.createTextNode("area sales manager germany ,austria and switzerland");
    descriptionTag3.style.cssText = "width: 80% ;text-align: center;margin:3% 0;margin-left:15%";
    descriptionTag3.appendChild(description3);
    DivSendEmail3.appendChild(descriptionTag3);

    let DivContainer3 = document.createElement("div");
    DivContainer3.style.cssText="color :red;display :flex;align-items :center;justify-content :center;gap:6px";
    let iconOfEmail3 = document.createElement("i");
    iconOfEmail3.setAttribute("class", "fa-regular fa-envelope");
    iconOfEmail3.style.cssText="color :white;background-color :red;width:25px;height:18px;border-radius :50%;padding:3px 0";
    let sendEmailTag3 = document.createElement("p");
    let sendEmail3 = document.createTextNode("send email");
    sendEmailTag3.appendChild(sendEmail3);
    DivContainer3.appendChild(iconOfEmail3);
    DivContainer3.appendChild(sendEmailTag3);
    DivSendEmail3.appendChild(DivContainer3);
    DivSendEmailAll3.appendChild(DivSendEmail3);
    secondSection.appendChild(DivSendEmailAll3);

    // append to Products

    let thirdSection = document.querySelector("#products");
    thirdSection.style.cssText="padding-top:3%;text-align:center"
    let heading3 = document.createElement("h1");
    let textHeading3= document.createTextNode("Learn more about innovation solutions crafted by Kalsec");
    heading3.appendChild(textHeading3);
    thirdSection.appendChild(heading3);
    let para3 = document.createElement("p");
    let textParagraph3 = document.createTextNode("Browse our resources to learn how make a difference in your next product formulation");
    para3.appendChild(textParagraph3);
    thirdSection.appendChild(para3);
    para3.style.cssText="margin:20px 0";


    let orderView = document.createElement("div");
    orderView.style.cssText="display:flex;align-items:center;justify-content:start;gap:15px;margin:4% 0;margin-left:6%";
    let order = document.createElement("div");
    order.style.cssText="display:flex;align-items:center;justify-content:start;gap:5px";
    let orderIcon = document.createElement("i");
    orderIcon.setAttribute("class","fa-solid fa-sort");
    let orderPara = document.createElement("p");
    let viewParaText = document.createTextNode("Order By");
    orderPara.appendChild(viewParaText);
    order.appendChild(orderIcon);
    order.appendChild(orderPara);
    
    
   
    let View = document.createElement("div");
    View.style.cssText="display:flex;align-items:center;justify-content:start;gap:5px";
    let viewCheck = document.createElement("input");
    viewCheck.setAttribute("type", "checkbox");
    viewCheck.setAttribute("id", "viewAll");
    let viewLabel = document.createElement("label");
    let viewLabelText = document.createTextNode("View All");
    viewLabel.appendChild(viewLabelText);
    viewLabel.setAttribute("for", "viewAll");
    View.appendChild(viewCheck);
    View.appendChild(viewLabel);
    
    orderView.appendChild(order);
    orderView.appendChild(View);
    thirdSection.appendChild(orderView);


    let FirstCard = document.createElement("div");
    FirstCard.style.cssText = "display: flex;flex-direction:row;align-items:center;margin-bottom:3%;margin-top:3%";
    for(let l=1; l<5; l++){
    let Card = document.createElement("div");
    Card.style.cssText = "display: flex;flex-direction:column;align-items:center;gap:10px ;margin-left:8%";
    let CardImage= document.createElement("div");
    CardImage.style.cssText="background-color:rgb(82, 81, 81);width:70%;height:100px;color:white;text-transform:capitalize;font-weight:bold;font-size:20px;padding:55px 1px;text-align:center;outline:2px solid rgb(82, 81, 81);border:3px solid grey;"
    let CardImageText = document.createTextNode("cover placeholder image"); 
    CardImage.appendChild(CardImageText);
    let CardTitle = document.createElement("p");
   
    let CardTitleText = document.createTextNode("natural taste & sensory solutions"); 
    CardTitle.style.cssText="text-transform:capitalize;font-size:16px;width:80%;display:flex;align-items:center;justify-content:center";
    CardTitle.appendChild(CardTitleText);
    let Download = document.createElement("a");
    Download.href ="#";
    Download.style.cssText="text-transform:upperCase;font-size:16px;color:red;margin-right:5%;";
    let DownloadText = document.createTextNode("download now"); 
    Download.appendChild(DownloadText);

    Card.appendChild(CardImage);
    Card.appendChild(CardTitle);
    Card.appendChild(Download);
    FirstCard.appendChild(Card);
    }

    thirdSection.appendChild(FirstCard);



    
    let secondCard = document.createElement("div");
    secondCard.style.cssText = "display: flex;flex-direction:row;align-items:center;margin-bottom:3%;margin-top:3%;";
    for(let l=1; l<5; l++){
    let Card2 = document.createElement("div");
    Card2.style.cssText = "display: flex;flex-direction:column;align-items:center;gap:10px ;margin-left:8%";
    let CardImage2= document.createElement("div");
    CardImage2.style.cssText="background-color:rgb(82, 81, 81);width:70%;height:100px;color:white;text-transform:capitalize;font-weight:bold;font-size:20px;padding:55px 1px;text-align:center;outline:2px solid rgb(82, 81, 81);border:3px solid grey;"
    let CardImageText2 = document.createTextNode("cover placeholder image"); 
    CardImage2.appendChild(CardImageText2);
    let CardTitle2 = document.createElement("p");
   
    let CardTitleText2 = document.createTextNode("natural taste & sensory solutions"); 
    CardTitle2.style.cssText="text-transform:capitalize;font-size:16px;width:80%;display:flex;align-items:center;justify-content:center";
    CardTitle2.appendChild(CardTitleText2);
    let Download2 = document.createElement("a");
    Download2.href ="#";
    Download2.style.cssText="text-transform:upperCase;font-size:16px;color:red;margin-right:5%;";
    let DownloadText2 = document.createTextNode("download now"); 
    Download2.appendChild(DownloadText2);

    Card2.appendChild(CardImage2);
    Card2.appendChild(CardTitle2);
    Card2.appendChild(Download2);
    secondCard.appendChild(Card2);
    }

    thirdSection.appendChild(secondCard);


    
    let thirdCard = document.createElement("div");
    thirdCard.style.cssText = "display: flex;flex-direction:row;align-items:center;margin-bottom:3%;margin-top:3%;";
    for(let l=1; l<4; l++){
    let Card3 = document.createElement("div");
    Card3.style.cssText = "display: flex;flex-direction:column;align-items:center;gap:10px ;margin-left:8%";
    let CardImage3= document.createElement("div");
    CardImage3.style.cssText="background-color:rgb(82, 81, 81);width:70%;height:100px;color:white;text-transform:capitalize;font-weight:bold;font-size:20px;padding:55px 1px;text-align:center;outline:2px solid rgb(82, 81, 81);border:3px solid grey;"
    let CardImageText3 = document.createTextNode("cover placeholder image"); 
    CardImage3.appendChild(CardImageText3);
    let CardTitle3 = document.createElement("p");
   
    let CardTitleText3 = document.createTextNode("natural taste & sensory solutions"); 
    CardTitle3.style.cssText="text-transform:capitalize;font-size:16px;width:80%;display:flex;align-items:center;justify-content:center";
    CardTitle3.appendChild(CardTitleText3);
    let Download3 = document.createElement("a");
    Download3.href ="#";
    Download3.style.cssText="text-transform:upperCase;font-size:16px;color:red;margin-right:5%;";
    let DownloadText3 = document.createTextNode("download now"); 
    Download3.appendChild(DownloadText3);

    Card3.appendChild(CardImage3);
    Card3.appendChild(CardTitle3);
    Card3.appendChild(Download3);
    thirdCard.appendChild(Card3);
    }

    thirdSection.appendChild(thirdCard);

    // append to our-ingradints



    let forthSection = document.querySelector("#our-ingradints");
    let headingSectionFour = document.createElement("h1");
let headingSectionFourText = document.createTextNode("Give our ingredients and try .");
headingSectionFour.appendChild(headingSectionFourText);
forthSection.appendChild(headingSectionFour);
headingSectionFour.style.cssText="color:white;font-size:48px;font-weight:bold;width:580px;align-items:center;display:flex;flex-direction:column;text-align:center;margin-top:8%;width:50%;justify-content: center;margin-left:25%"


let paragraphSectionFour= document.createElement("p");
let paragraphSectionFourText = document.createTextNode("We have assembled samples to help you see for yourself the difference");
let spanSectionFour = document.createElement("span");
let spanSectionFourText = document.createTextNode("Kalsec can make --naturally.");
spanSectionFour.appendChild(spanSectionFourText);
paragraphSectionFour.appendChild(paragraphSectionFourText);
paragraphSectionFour.appendChild(spanSectionFour);
paragraphSectionFour.style.cssText="justify-content: center;color:white;font-size:23px;font-weight:500;width:660px;align-items:center;display:flex;flex-direction:column;margin-top:2%;margin-left:25%;"

forthSection.appendChild(paragraphSectionFour);


let myDiv = document.createElement('div');
let myDivText = document.createTextNode("order sample");
myDiv.appendChild(myDivText);
// myDiv.style.cssText = "display:flex ;width:100%";
let btn = document.createElement('button');

btn.appendChild(myDiv);
forthSection.appendChild(btn);
myDiv.style.cssText="background-color:red;color:white;font-size:20px; font-weight:600;text-transform:capitalize;display:flex;display:flex ;width:100%"
btn.style.cssText="background-color:red;color:white;border-radius:5px;width:15%;padding:1% 1%;border-radius:5px;border-color:transparent;padding-left:2.5%;justify-content:center;margin-left:45%;margin-top:2%;"



// append to Conference
let fiveSection = document.getElementById("conference");

let DivContainerFiveSection= document.createElement("div");
DivContainerFiveSection.style.cssText="text-align:center;padding-top:5%;color:white;";
let paraOfFiveSection = document.createElement("p");
let paraOfFiveSectionText = document.createTextNode("upcoming conference");
paraOfFiveSection.style.cssText ="font-size:26px;font-weight:100;opacity:0.8";
paraOfFiveSection.appendChild(paraOfFiveSectionText);
let TitleInHeading = document.createElement("h1");
let TitleInHeadingText = document.createTextNode("We hope to see you at FTSE Mexico "); 
TitleInHeading.style.cssText="margin:2% 0;font-size:38px;width:40%;text-align:center;justify-content:center;margin-left:30%;";
TitleInHeading.appendChild(TitleInHeadingText);
let sayHello = document.createElement("p");
let sayHelloText = document.createTextNode("Please stop by and say hello on December 1 and 2."); 
sayHello.style.cssText ="font-size:18px;font-weight:100;opacity:0.8";
sayHello.appendChild(sayHelloText);
DivContainerFiveSection.appendChild(paraOfFiveSection);
DivContainerFiveSection.appendChild(TitleInHeading);
DivContainerFiveSection.appendChild(sayHello);
fiveSection.appendChild(DivContainerFiveSection);


// append to contact

let contact =document.getElementById("contact");
contact.style.cssText="background-color:grey;text-align:center;padding:3% 0;color:white;";
let titleOfContact = document.createElement("h1");
let titleOfContactText = document.createTextNode("Get in touch");
titleOfContact.style.cssText="font-size:35px;margin-bottom:2%"
titleOfContact.appendChild(titleOfContactText);
contact.appendChild(titleOfContact);
let form = document.createElement("form");
form.style.cssText ="display:flex;flex-direction:column;gap:1%;width:50%;margin-left:22%;padding-left:10%"
let divForm1 = document.createElement("div");
divForm1.style.cssText ="display:flex;flex-direction:row;gap:20%;padding-left:3%"
let divInp1 = document.createElement("div");
divInp1.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;"
let label1 = document.createElement("label");
let labelText1 = document.createTextNode("First Name :");
label1.appendChild(labelText1);
divInp1.appendChild(label1);
let inp = document.createElement("input");
inp.style.cssText ="width:100%;padding:4% 30%;outline:none;border-color: white"
inp.type="text";
inp.placeholder="Enter First Name";
divInp1.appendChild(inp);


let divInp2 = document.createElement("div");
divInp2.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;"
let label2 = document.createElement("label");
let labelText2 = document.createTextNode("Last Name :");
label2.appendChild(labelText2);
divInp2.appendChild(label2);
let inp2 = document.createElement("input");
inp2.type="text";
inp2.placeholder="Enter Last Name";
divInp2.appendChild(inp2);
inp2.style.cssText ="width:100%;padding:4% 30%;outline:none;border-color: white"
divForm1.appendChild(divInp1);
divForm1.appendChild(divInp2);
form.appendChild(divForm1);

contact.appendChild(form);




let divForm2 = document.createElement("div");
divForm2.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;margin-right:22%;margin-top:2%"
let label3 = document.createElement("label");
let labelText3 = document.createTextNode("Email Address:");
label3.appendChild(labelText3);
divForm2.appendChild(label3);
let inp3 = document.createElement("input");
inp3.style.cssText ="width:78%;outline:none;border-color: white;padding:1% 16%;"
inp3.type="email";
inp3.placeholder="Enter your Email";
divForm2.appendChild(inp3);
form.appendChild(divForm2);




let divForm3 = document.createElement("div");
divForm3.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;margin:2% 0;margin-right:22%;"
let label4 = document.createElement("label");
let labelText4 = document.createTextNode("Your Message:");
label4.appendChild(labelText4);
divForm3.appendChild(label4);
let inp4 = document.createElement("input");
inp4.style.cssText ="width:78%;outline:none;border-color: white;padding:8% 16%;"
inp4.type="textarea";
inp4.placeholder="How we can help you?:)";
divForm3.appendChild(inp4);
form.appendChild(divForm3);


let myDivOfBtn = document.createElement('div');
let myDivOfBtnText = document.createTextNode("send message");
myDivOfBtn.appendChild(myDivOfBtnText);
let btn2 = document.createElement('button');
btn2.appendChild(myDivOfBtn);
contact.appendChild(btn2);
myDivOfBtn.style.cssText="background-color:red;color:white;font-size:20px; font-weight:600;text-transform:capitalize;display:flex;display:flex ;width:100%"
btn2.style.cssText="background-color:red;color:white;border-radius:5px;width:14%;padding:1% 0%;border-radius:5px;border-color:transparent;padding-left:2%;justify-content:center;margin-right:26%;margin-top:2%;"


// append to footer
let footer = document.getElementById("footer");
footer.style.cssText="background-color: rgb(82, 81, 81);display:flex;flex-direction: column;padding:1% 5%;"
let divOfFooter = document.createElement("div");
divOfFooter.style.cssText="display:flex;flex-direction: row;gap:1%"
let firstLetter = document.createElement("p");
let firstLetterText = document.createTextNode("about");
firstLetter.appendChild(firstLetterText);
let secondLetter = document.createElement("p");
let secondLetterText = document.createTextNode("contact");
secondLetter.appendChild(secondLetterText);
let thirdLetter = document.createElement("p");
let thirdLetterText = document.createTextNode("help");
thirdLetter.appendChild(thirdLetterText);
let fourthLetter = document.createElement("p");
let fourthLetterText = document.createTextNode("home");
fourthLetter.appendChild(fourthLetterText);
divOfFooter.appendChild(firstLetter);
divOfFooter.appendChild(secondLetter);
divOfFooter.appendChild(thirdLetter);
divOfFooter.appendChild(fourthLetter);
footer.appendChild(divOfFooter);



let divOfFooter2 = document.createElement("div");
divOfFooter2.style.cssText="margin-top:1%;";
let divOfFooter2Text = document.createTextNode("thanks for you copy rights @fshshsdjdj ");
divOfFooter2.appendChild(divOfFooter2Text);
footer.appendChild(divOfFooter2);