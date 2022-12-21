var firstnamesign = document.getElementById("Firstnamesign"),
lasttnamesign     = document.getElementById("Lasttnamesign"),
email             = document.getElementById("Emailsign"),
passwordsign      = document.getElementById("Passwordsign"),
errorsign         = document.getElementById("errorsign");



function signin(){
	
	if(firstnamesign.value == '' || lasttnamesign.value == '' || email.value == ''|| passwordsign.value == '')
	{
		errorsign.innerHTML ="Enter The Vaild Data";
	}
		
}

var emaillogin         = document.getElementById("Emaillogin"),
passwordlogin           = document.getElementById("Passwordlogin"),
errorlogin         = document.getElementById("Errorlogin");


function loginin(){
	
	
	if(emaillogin.value == '' || passwordlogin.value == '')
	{
		errorlogin.innerHTML ="Enter The Vaild Data";
	}
	else{
		
		window.open("OnlineStore.html");
		
	}
	
	
	
}



var  backword=document.getElementsByClassName("backwordjs");





backword.onclick=function(){
	window.open("OnlineStore.html");
	
}






function onlsearch(){
	
	

var Onlinesearch = document.getElementById("onlinesearch");
var Namevigetablesjs = document.getElementById("namevigetablesjs");
var vigetables11 = document.getElementById("vigetablesjs");

var onsearch =Onlinesearch.value.toLowerCase();
var resultsearch = Namevigetablesjs.textContent.indexOf(onsearch);

if(resultsearch > -1){
	
	vigetables11.style.display="block";
	
	
}
else{
	
	vigetables11.style.display="none";
	
}

var Namefruit = document.getElementById("namefruitjs");
var fruit11=document.getElementById("Frutsjs");
var onsearchfruit =Onlinesearch.value.toLowerCase();
var resultsearchfruit = Namefruit.textContent.indexOf(onsearchfruit);
if(resultsearchfruit > -1){
	fruit11.style.display="block";
	
	
}
else{
	
	fruit11.style.display="none";
	
}
var Namejuice = document.getElementById("namejuicejs");
var juice11=document.getElementById("Juicejs");
var onsearchjuice =Onlinesearch.value.toLowerCase();
var resultsearchjuice = Namejuice.textContent.indexOf(onsearchjuice);
if(resultsearchjuice > -1){

	juice11.style.display="block";
	
	
}
else{
	
	juice11.style.display="none";
}
var Namechicken= document.getElementById("namechickenjs");
var chicken11=document.getElementById("Chickenjs");
var onsearchchicken =Onlinesearch.value.toLowerCase();
var resultsearchchicken = Namechicken.textContent.indexOf(onsearchchicken);
if(resultsearchchicken > -1){

	chicken11.style.display="block";
	
	
}
else{
	
	chicken11.style.display="none";
}
var Namefish= document.getElementById("namefishjs");
var fish11=document.getElementById("Fishjs");
var onsearchfish =Onlinesearch.value.toLowerCase();
var resultsearchfish = Namefish.textContent.indexOf(onsearchfish);
if(resultsearchfish > -1){

	fish11.style.display="block";
}
else{
	
	fish11.style.display="none";
}

var Namepizza= document.getElementById("namepizzajs");
var pizza11=document.getElementById("Pizzajs");
var onsearchpizza =Onlinesearch.value.toLowerCase();
var resultsearchpizza = Namepizza.textContent.indexOf(onsearchpizza);
if(resultsearchpizza > -1){

	pizza11.style.display="block";
	
	
}
else{
	
	pizza11.style.display="none";
}
}


function svig(){

var SEarchvig= document.getElementById("searchvigetable");
var SEarch =SEarchvig.value.toLowerCase();
var Namecatvig1= document.getElementById("nam-catb1");
var Namecatvig2= document.getElementById("nam-catb2");
var Namecatvig3= document.getElementById("nam-catb3");
var Namecatvig4= document.getElementById("nam-catb4");
var Namecatvig5= document.getElementById("nam-catb5");
var Namecatvig6= document.getElementById("nam-catb6");

var Typevig1= document.getElementById("typevig1");
var Typevig2= document.getElementById("typevig2");
var Typevig3= document.getElementById("typevig3");
var Typevig4= document.getElementById("typevig4");
var Typevig5= document.getElementById("typevig5");
var Typevig6= document.getElementById("typevig6");

var resultcatvig1 = Namecatvig1.textContent.indexOf(SEarch);

if(resultcatvig1 > -1){

	Typevig1.style.display="block";
	
	
}
else{
	
	Typevig1.style.display="none";
}

var resultcatvig2 = Namecatvig2.textContent.indexOf(SEarch);
if(resultcatvig2 > -1){

	Typevig2.style.display="block";
	
	
}
else{
	
	Typevig2.style.display="none";
}

var resultcatvig3 = Namecatvig3.textContent.indexOf(SEarch);
if(resultcatvig3 > -1){

	Typevig3.style.display="block";
	
	
}
else{
	
	Typevig3.style.display="none";
}

var resultcatvig4 = Namecatvig4.textContent.indexOf(SEarch);
if(resultcatvig4 > -1){

	Typevig4.style.display="block";
	
	
}
else{
	
	Typevig4.style.display="none";
}


var resultcatvig5 = Namecatvig5.textContent.indexOf(SEarch);
if(resultcatvig5 > -1){

	Typevig5.style.display="block";
	
	
}
else{
	
	Typevig5.style.display="none";
}


var resultcatvig6 = Namecatvig6.textContent.indexOf(SEarch);
if(resultcatvig6 > -1){

	Typevig6.style.display="block";
	
	
}
else{
	
	Typevig6.style.display="none";
}


}


function schi(){
	
	
var SEarchChi= document.getElementById("searchChiken");
var SEArch =SEarchChi.value.toLowerCase();
var Namcatchi1= document.getElementById("namcatchi1");
var Namcatchi2= document.getElementById("namcatchi2");
var Namcatchi3= document.getElementById("namcatchi3");
var Namcatchi4= document.getElementById("namcatchi4");
var Namcatchi5= document.getElementById("namcatchi5");
var Namcatchi6= document.getElementById("namcatchi6");

var Typechi1= document.getElementById("typechi1");
var Typechi2= document.getElementById("typechi2");
var Typechi3= document.getElementById("typechi3");
var Typechi4= document.getElementById("typechi4");
var Typechi5= document.getElementById("typechi5");
var Typechi6= document.getElementById("typechi6");	
	
	
var resultcatchi1 = Namcatchi1.textContent.indexOf(SEArch);

if(resultcatchi1 > -1){

	Typechi1.style.display="block";
	
	
}
else{
	
	Typechi1.style.display="none";
}	



var resultcatchi2 = Namcatchi2.textContent.indexOf(SEArch);

if(resultcatchi2 > -1){

	Typechi2.style.display="block";
	
	
}
else{
	
	Typechi2.style.display="none";
}	


var resultcatchi3= Namcatchi3.textContent.indexOf(SEArch);

if(resultcatchi3 > -1){

	Typechi3.style.display="block";
	
	
}
else{
	
	Typechi3.style.display="none";
}	
	
	
	
	
var resultcatchi4 = Namcatchi4.textContent.indexOf(SEArch);

if(resultcatchi4 > -1){

	Typechi4.style.display="block";
	
	
}
else{
	
	Typechi4.style.display="none";
}


var resultcatchi5 = Namcatchi5.textContent.indexOf(SEArch);

if(resultcatchi5 > -1){

	Typechi5.style.display="block";
	
	
}
else{
	
	Typechi5.style.display="none";
}	
		
	
	
var resultcatchi6 = Namcatchi6.textContent.indexOf(SEArch);

if(resultcatchi6 > -1){

	Typechi6.style.display="block";
	
	
}
else{
	
	Typechi6.style.display="none";
}	
		
	
	
	
	
}



function sfru(){
	
	
var SEarchFru= document.getElementById("searchfruitjs");
var SEARch =SEarchFru.value.toLowerCase();
var Nacmecatfruit1= document.getElementById("nacmecatfruit1");
var Nacmecatfruit2= document.getElementById("nacmecatfruit2");
var Nacmecatfruit3= document.getElementById("nacmecatfruit3");
var Nacmecatfruit4= document.getElementById("nacmecatfruit4");
var Nacmecatfruit5= document.getElementById("nacmecatfruit5");
var Nacmecatfruit6= document.getElementById("nacmecatfruit6");

var Typefruit1= document.getElementById("typefruit1");
var Typefruit2= document.getElementById("typefruit2");
var Typefruit3= document.getElementById("typefruit3");
var Typefruit4= document.getElementById("typefruit4");
var Typefruit5= document.getElementById("typefruit5");
var Typefruit6= document.getElementById("typefruit6");	
	
	
var resultFruit1 = Nacmecatfruit1.textContent.indexOf(SEARch);

if(resultFruit1 > -1){

	Typefruit1.style.display="block";
	
	
}
else{
	
	Typefruit1.style.display="none";
}	


var resultFruit2 = Nacmecatfruit2.textContent.indexOf(SEARch);

if(resultFruit2 > -1){

	Typefruit2.style.display="block";
	
	
}
else{
	
	Typefruit2.style.display="none";
}


var resultFruit3 = Nacmecatfruit3.textContent.indexOf(SEARch);

if(resultFruit3 > -1){

	Typefruit3.style.display="block";
	
	
}
else{
	
	Typefruit3.style.display="none";
}	


var resultFruit4 = Nacmecatfruit4.textContent.indexOf(SEARch);

if(resultFruit4 > -1){

	Typefruit4.style.display="block";
	
	
}
else{
	
	Typefruit4.style.display="none";
}

var resultFruit5 = Nacmecatfruit2.textContent.indexOf(SEARch);

if(resultFruit5 > -1){

	Typefruit5.style.display="block";
	
	
}
else{
	
	Typefruit5.style.display="none";
}



var resultFruit6 = Nacmecatfruit6.textContent.indexOf(SEARch);

if(resultFruit6 > -1){

	Typefruit6.style.display="block";
	
	
}
else{
	
	Typefruit6.style.display="none";
}


}




function sjui(){
	
	
var SEarchJuic= document.getElementById("searchjuicdejs");
var SEARCh=SEarchJuic.value.toLowerCase();
var Namecatjui1= document.getElementById("namecatjui1");
var Namecatjui2= document.getElementById("namecatjui2");
var Namecatjui3= document.getElementById("namecatjui3");
var Namecatjui4= document.getElementById("namecatjui4");
var Namecatjui5= document.getElementById("namecatjui5");
var Namecatjui6= document.getElementById("namecatjui6");

var Typejuuice1= document.getElementById("typejuuice1");
var Typejuuice2= document.getElementById("typejuuice2");
var Typejuuice3= document.getElementById("typejuuice3");
var Typejuuice4= document.getElementById("typejuuice4");
var Typejuuice5= document.getElementById("typejuuice5");
var Typejuuice6= document.getElementById("typejuuice6");	
	
	
var resultjuice1 = Namecatjui1.textContent.indexOf(SEARCh);

if(resultjuice1 > -1){

	Typejuuice1.style.display="block";
	
	
}
else{
	
	Typejuuice1.style.display="none";
}



var resultjuice2 = Namecatjui2.textContent.indexOf(SEARCh);

if(resultjuice2 > -1){

	Typejuuice2.style.display="block";
	
	
}
else{
	
	Typejuuice2.style.display="none";
}

var resultjuice3 = Namecatjui3.textContent.indexOf(SEARCh);

if(resultjuice3 > -1){

	Typejuuice3.style.display="block";
	
	
}
else{
	
	Typejuuice3.style.display="none";
}


var resultjuice4 = Namecatjui4.textContent.indexOf(SEARCh);

if(resultjuice4 > -1){

	Typejuuice4.style.display="block";
	
	
}
else{
	
	Typejuuice4.style.display="none";
}

var resultjuice5 = Namecatjui5.textContent.indexOf(SEARCh);

if(resultjuice5 > -1){

	Typejuuice5.style.display="block";
	
	
}
else{
	
	Typejuuice5.style.display="none";
}

var resultjuice6 = Namecatjui6.textContent.indexOf(SEARCh);

if(resultjuice6 > -1){

	Typejuuice6.style.display="block";
	
	
}
else{
	
	Typejuuice6.style.display="none";
}


}




function spi(){
	
var SEArchPizza= document.getElementById("searchpizzajsf");

var SEARCHh=SEArchPizza.value.toLowerCase();

var Namecatpizaa1= document.getElementById("namecatpizaa1");
var Namecatpizaa2= document.getElementById("namecatpizaa2");
var Namecatpizaa3= document.getElementById("namecatpizaa3");
var Namecatpizaa4= document.getElementById("namecatpizaa4");
var Namecatpizaa5= document.getElementById("namecatpizaa5");
var Namecatpizaa6= document.getElementById("namecatpizaa6");

var typepizza1= document.getElementById("typepizza1");
var Typepizza2= document.getElementById("typepizza2");
var Typepizza3= document.getElementById("typepizza3");
var Typepizza4= document.getElementById("typepizza4");
var Typepizza5= document.getElementById("typepizza5");
var Typepizza6= document.getElementById("typepizza6");	
	
	
var resultpizza1 = Namecatpizaa1.textContent.indexOf(SEARCHh);

if(resultpizza1 > -1){

	typepizza1.style.display="block";
	
	
}
else{
	
	typepizza1.style.display="none";
}


var resultpizza2 = Namecatpizaa2.textContent.indexOf(SEARCHh);

if(resultpizza2 > -1){

	typepizza2.style.display="block";
	
	
}
else{
	
	typepizza2.style.display="none";
}


var resultpizza3 = Namecatpizaa3.textContent.indexOf(SEARCHh);

if(resultpizza3 > -1){

	typepizza3.style.display="block";
	
	
}
else{
	
	typepizza3.style.display="none";
}



var resultpizza4 = Namecatpizaa4.textContent.indexOf(SEARCHh);

if(resultpizza4 > -1){

	typepizza4.style.display="block";
	
	
}
else{
	
	typepizza4.style.display="none";
}


var resultpizza5 = Namecatpizaa5.textContent.indexOf(SEARCHh);

if(resultpizza5 > -1){

	typepizza5.style.display="block";
	
	
}
else{
	
	typepizza5.style.display="none";
}

var resultpizza6 = Namecatpizaa6.textContent.indexOf(SEARCHh);

if(resultpizza6 > -1){

	typepizza6.style.display="block";
	
	
}
else{
	
	typepizza6.style.display="none";
}




}


	


	
var Borderpi1= document.getElementById("borderjspi1");
var Borderpi2= document.getElementById("borderjspi2");
var Borderpi3= document.getElementById("borderjspi3");
var Borderpi4= document.getElementById("borderjspi4");
var Borderpi5= document.getElementById("borderjspi5");
var Borderpi6= document.getElementById("borderjspi6");



var Borderadd1= document.getElementById("borderadd1");
var Borderadd2= document.getElementById("borderadd2");
var Borderadd3= document.getElementById("borderadd3");
var Borderadd4= document.getElementById("borderadd4");
var Borderadd5= document.getElementById("borderadd5");
var Borderadd6= document.getElementById("borderadd6");

function borderclickpi1(){

Borderpi1.classList.toggle("bordernew");
Borderadd1.classList.toggle("borderaddnew11");
}

function borderclickpi2(){

Borderpi2.classList.toggle("bordernew");
Borderadd2.classList.toggle("borderaddnew11");
}

function borderclickpi3(){

Borderpi3.classList.toggle("bordernew");
Borderadd3.classList.toggle("borderaddnew11");
}

function borderclickpi4(){

Borderpi4.classList.toggle("bordernew");
Borderadd4.classList.toggle("borderaddnew11");
}

function borderclickpi5(){

Borderpi5.classList.toggle("bordernew");
Borderadd5.classList.toggle("borderaddnew11");
}


function borderclickpi6(){

Borderpi6.classList.toggle("bordernew");
Borderadd6.classList.toggle("borderaddnew11");
}




	

var Borderchik1= document.getElementById("borderjschick1");
var Borderchik2= document.getElementById("borderjschick2");
var Borderchik3= document.getElementById("borderjschick3");
var Borderchik4= document.getElementById("borderjschick4");
var Borderchik5= document.getElementById("borderjschick5");
var Borderchik6= document.getElementById("borderjschick6");



var Borderaddchik1= document.getElementById("borderaddchik1");
var Borderaddchik2= document.getElementById("borderaddchik2");
var Borderaddchik3= document.getElementById("borderaddchik3");
var Borderaddchik4= document.getElementById("borderaddchik4");
var Borderaddchik5= document.getElementById("borderaddchik5");
var Borderaddchik6= document.getElementById("borderaddchik6");

function borderclickchik1(){

Borderchik1.classList.toggle("bordernew");
Borderaddchik1.classList.toggle("borderaddnew11");
}

function borderclickchik2(){

Borderchik2.classList.toggle("bordernew");
Borderaddchik2.classList.toggle("borderaddnew11");
}

function borderclickchik3(){

Borderchik3.classList.toggle("bordernew");
Borderaddchik3.classList.toggle("borderaddnew11");
}

function borderclickchik4(){

Borderchik4.classList.toggle("bordernew");
Borderaddchik4.classList.toggle("borderaddnew11");
}

function borderclickchik5(){

Borderchik5.classList.toggle("bordernew");
Borderaddchik5.classList.toggle("borderaddnew11");
}

function borderclickchik6(){

Borderchik6.classList.toggle("bordernew");
Borderaddchik6.classList.toggle("borderaddnew11");
}








var Borderfish1= document.getElementById("borderjsfish1");
var Borderfish2= document.getElementById("borderjsfish2");
var Borderfish3= document.getElementById("borderjsfish3");
var Borderfish4= document.getElementById("borderjsfish4");
var Borderfish5= document.getElementById("borderjsfish5");
var Borderfish6= document.getElementById("borderjsfish6");



var Borderaddfish1= document.getElementById("borderaddfish1");
var Borderaddfish2= document.getElementById("borderaddfish2");
var Borderaddfish3= document.getElementById("borderaddfish3");
var Borderaddfish4= document.getElementById("borderaddfish4");
var Borderaddfish5= document.getElementById("borderaddfish5");
var Borderaddfish6= document.getElementById("borderaddfish6");

function borderclickfish1(){

Borderfish1.classList.toggle("bordernew");
Borderaddfish1.classList.toggle("borderaddnew11");
}

function borderclickfish2(){

Borderfish2.classList.toggle("bordernew");
Borderaddfish2.classList.toggle("borderaddnew11");
}

function borderclickfish3(){

Borderfish3.classList.toggle("bordernew");
Borderaddfish3.classList.toggle("borderaddnew11");
}

function borderclickfish4(){

Borderfish4.classList.toggle("bordernew");
Borderaddfish4.classList.toggle("borderaddnew11");
}

function borderclickfish5(){

Borderfish5.classList.toggle("bordernew");
Borderaddfish5.classList.toggle("borderaddnew11");
}

function borderclickfish6(){

Borderfish6.classList.toggle("bordernew");
Borderaddfish6.classList.toggle("borderaddnew11");
}
	

var Bordervig1= document.getElementById("bordervigjs1");
var Bordervig2= document.getElementById("bordervigjs2");
var Bordervig3= document.getElementById("bordervigjs3");
var Bordervig4= document.getElementById("bordervigjs4");
var Bordervig5= document.getElementById("bordervigjs5");
var Bordervig6= document.getElementById("bordervigjs6");



var Borderaddvig1= document.getElementById("borderaddvig1");
var Borderaddvig2= document.getElementById("borderaddvig2");
var Borderaddvig3= document.getElementById("borderaddvig3");
var Borderaddvig4= document.getElementById("borderaddvig4");
var Borderaddvig5= document.getElementById("borderaddvig5");
var Borderaddvig6= document.getElementById("borderaddvig6");

function borderclickvig1(){

Bordervig1.classList.toggle("bordernew");
Borderaddvig1.classList.toggle("borderaddnew11");
}

function borderclickvig2(){

Bordervig2.classList.toggle("bordernew");
Borderaddvig2.classList.toggle("borderaddnew11");
}

function borderclickvig3(){

Bordervig3.classList.toggle("bordernew");
Borderaddvig3.classList.toggle("borderaddnew11");
}

function borderclickvig4(){

Bordervig4.classList.toggle("bordernew");
Borderaddvig4.classList.toggle("borderaddnew11");
}

function borderclickvig5(){

Bordervig5.classList.toggle("bordernew");
Borderaddvig5.classList.toggle("borderaddnew11");
}

function borderclickvig6(){

Bordervig6.classList.toggle("bordernew");
Borderaddvig6.classList.toggle("borderaddnew11");
}



var Borderjuice1= document.getElementById("borderjuic1");
var Borderjuice2= document.getElementById("borderjuic2");
var Borderjuice3= document.getElementById("borderjuic3");
var Borderjuice4= document.getElementById("borderjuic4");
var Borderjuice5= document.getElementById("borderjuic5");
var Borderjuice6= document.getElementById("borderjuic6");



var Borderaddjuice1= document.getElementById("borderaddjuice1");
var Borderaddjuice2= document.getElementById("borderaddjuice2");
var Borderaddjuice3= document.getElementById("borderaddjuice3");
var Borderaddjuice4= document.getElementById("borderaddjuice4");
var Borderaddjuice5= document.getElementById("borderaddjuice5");
var Borderaddjuice6= document.getElementById("borderaddjuice6");

function borderclickjuice1(){

Borderjuice1.classList.toggle("bordernew");
Borderaddjuice1.classList.toggle("borderaddnew11");
}

function borderclickjuice2(){

Borderjuice2.classList.toggle("bordernew");
Borderaddjuice2.classList.toggle("borderaddnew11");
}

function borderclickjuice3(){

Borderjuice3.classList.toggle("bordernew");
Borderaddjuice3.classList.toggle("borderaddnew11");
}

function borderclickjuice4(){

Borderjuice4.classList.toggle("bordernew");
Borderaddjuice4.classList.toggle("borderaddnew11");
}

function borderclickjuice5(){

Borderjuice5.classList.toggle("bordernew");
Borderaddjuice5.classList.toggle("borderaddnew11");
}

function borderclickjuice6(){

Borderjuice6.classList.toggle("bordernew");
Borderaddjuice6.classList.toggle("borderaddnew11");
}


var Borderfruit1= document.getElementById("borderfruitjs1");
var Borderfruit2= document.getElementById("borderfruitjs2");
var Borderfruit3= document.getElementById("borderfruitjs3");
var Borderfruit4= document.getElementById("borderfruitjs4");
var Borderfruit5= document.getElementById("borderfruitjs5");
var Borderfruit6= document.getElementById("borderfruitjs6");



var Borderaddfruit1= document.getElementById("borderaddfruit1");
var Borderaddfruit2= document.getElementById("borderaddfruit2");
var Borderaddfruit3= document.getElementById("borderaddfruit3");
var Borderaddfruit4= document.getElementById("borderaddfruit4");
var Borderaddfruit5= document.getElementById("borderaddfruit5");
var Borderaddfruit6= document.getElementById("borderaddfruit6");

function borderclickfrit1(){

Borderfruit1.classList.toggle("bordernew");
Borderaddfruit1.classList.toggle("borderaddnew11");
}
function borderclickfrit2(){

Borderfruit2.classList.toggle("bordernew");
Borderaddfruit2.classList.toggle("borderaddnew11");
}
function borderclickfrit3(){

Borderfruit3.classList.toggle("bordernew");
Borderaddfruit3.classList.toggle("borderaddnew11");
}
function borderclickfrit4(){

Borderfruit4.classList.toggle("bordernew");
Borderaddfruit4.classList.toggle("borderaddnew11");
}
function borderclickfrit5(){

Borderfruit5.classList.toggle("bordernew");
Borderaddfruit5.classList.toggle("borderaddnew11");
}
function borderclickfrit6(){

Borderfruit6.classList.toggle("bordernew");
Borderaddfruit6.classList.toggle("borderaddnew11");
}





function homeonline(){
	var Navonline= document.getElementById("navonline");
	Navonline.style.display="block";

	
}

function backprohome11(){
	var Navonline= document.getElementById("navonline");
	Navonline.style.display="none";

	
}



var tablecart= document.getElementById("nn").textContent;
	var Product1= document.getElementById("nameproduct1").textContent;
	var z =tablecart.textContent="Productkkkk1";


function ADDcart(){
	
	/*var tablecart= document.getElementById("Cart");
	var Product1= document.getElementById("nameproduct1").textContent;
	
	
	var creatTR = createElement("tr");
	  tablecart.appendChild(creatTR);
	  
	  
	var creatTD = createElement("td");
	 creatTR.appendChild(creatTD);
	 
	 var texttd = document.createTextNode("Product1jnknkn");
	 creatTD.appendChild(texttd);
	 
	 */
	 
	 
	 
	 
	
	alert(Product1)
	
	
	
	
}



function chicnoe(){
	
	/*var tablecart= document.getElementById("Cart");
	var Product1= document.getElementById("nameproduct1").textContent;
	
	
	var creatTR = createElement("tr");
	  tablecart.appendChild(creatTR);
	  
	  
	var creatTD = createElement("td");
	 creatTR.appendChild(creatTD);
	 
	 var texttd = document.createTextNode("Product1jnknkn");
	 creatTD.appendChild(texttd);
	 
	 */
	 
	 
	 
	 
	
	alert(tablecart)
	
	
	
	
}














