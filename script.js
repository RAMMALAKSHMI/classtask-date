var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "150px";

var inputdate = document.createElement("input");
inputdate.setAttribute("type", "date");
inputdate.id = "dob";
inputdate.style.width = "30%";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Display Data";
button.style.margin = "10px";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.borderRadius = "10px";

button.addEventListener("click", displaydata);
div.append(inputdate, button);
document.body.append(div);




function displaydata() {
    var input = document.getElementById("dob").value;

    var birthdate = new Date(input);
    console.log(birthdate);

    var currentdate = new Date();

    var millisecdiff = parseInt(currentdate.getTime()) - parseInt(birthdate.getTime());

    var secdiff = Math.floor(millisecdiff / 1000);

    var mindiff = Math.floor(secdiff / 60);

    var hrdiff = Math.floor(mindiff / 60);

    var daydiff = Math.floor(hrdiff / 24);

    var yeardiff = currentdate.getFullYear() - birthdate.getFullYear();

    var mnthdiff = yeardiff * 12 + ((currentdate.getMonth()) - (birthdate.getMonth()));

    var div1 = document.createElement("div");
    div1.style.textAlign = "center";

    var bd = document.createElement("p");
    bd.innerHTML = `Given Date: ${birthdate}`;
    var paragraphy = document.createElement("p");
    paragraphy.innerHTML = `Years: ${yeardiff}`;
    var paragraphm = document.createElement("p");
    paragraphm.innerHTML = `Months: ${mnthdiff}`;
    var paragraphd = document.createElement("p");
    paragraphd.innerHTML = `Days: ${daydiff}`;
    var paragraphh = document.createElement("p");
    paragraphh.innerHTML = `Hours: ${hrdiff}`;
    var paragraphm = document.createElement("p");
    paragraphm.innerHTML = `Minutes: ${mindiff}`;
    var paragraphs = document.createElement("p");
    paragraphs.innerHTML = `Seconds: ${secdiff}`;
    var paragraphms = document.createElement("p");
    paragraphms.innerHTML = `Milliseconds: ${millisecdiff}`;

    div1.append(bd,paragraphy,paragraphm,paragraphd,paragraphh,paragraphm,paragraphs,paragraphms);
    document.body.append(div1);
}
