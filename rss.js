var showFeed = function(){
var e = document.getElementById("options");
var url = e.options[e.selectedIndex].value;
var dropdownind = e.selectedIndex;
var xmlhttp;
xmlhttp=new XMLHttpRequest();
var parent = document.getElementById("container");
while(parent.firstChild){
parent.removeChild(parent.firstChild);
}

xmlhttp.onreadystatechange=function()
{

	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		//document.getElementById("blogContent").innerHTML=xmlhttp.responseText;
		var result =JSON.parse(xmlhttp.responseText);
		var len =result.deals.length;
		switch(dropdownind)
		{
		case 1:
			for (var i =0; i<len;i++)
			{
					var res = result.deals[i];
					var hoteldiv = document.createElement("DIV");
					hoteldiv.id = "hoteldivno"+i;
					hoteldiv.style.border = "1px solid";
					hoteldiv.style.background ="#E6E6E6";
					var hoteldesdiv = document.createElement("DIV");
					hoteldesdiv.style.float = "left";
					hoteldesdiv.style.width = "50%";
					
					hoteldiv.appendChild(hoteldesdiv);
				
					var hotelnametext = document.createElement("H1");
					hotelnametext.innerHTML=res.hotelName;
					hoteldesdiv.appendChild(hotelnametext);

					var hoteldescription = document.createTextNode(res.description);
					hoteldesdiv.appendChild(hoteldescription);

					var hotelimgdiv = document.createElement("DIV");
					//hotelimgdiv.style.width = "50%";
					hoteldiv.appendChild(hotelimgdiv);
					var hotelimg = document.createElement("IMG");
					hotelimg.src = res.imageUrl;
					hotelimg.style.width= "300px";
					hotelimg.style.height = "200px";
					hotelimg.style.padding = "10px";
					hotelimg.style.border = "2 px grey";
				
					hotelimgdiv.appendChild(hotelimg);
					document.getElementById("container").appendChild(hoteldiv);
			 }
			break;
			case 2 :
					for (var i =0; i<len;i++)
					{
						var res = result.deals[i];
						var carDealsdiv = document.createElement("DIV");
						carDealsdiv.id = "cardealno"+i;
						carDealsdiv.style.border= "1px solid";
						carDealsdiv.style.background ="#E6E6E6";
						carDealsdiv.style.borderRadius = "20px";

						var dealno = document.createElement("H2");
						dealno.style.color = "#FF0000";
						dealno.innerHTML = "#Deal No"+(i+1);
						carDealsdiv.appendChild(dealno);

						var dealcontent = document.createElement("DIV");
						dealcontent.style.float = "left";
						dealcontent.style.width = "50%";
						var rentalcmpnyname = document.createElement("h1");
						rentalcmpnyname.style.color = "#6699FF";
						rentalcmpnyname.innerHTML="Rental Company Name :"+result.deals[i].rentalCompanyName;						
						
						var title = document.createElement("h4");
						title.innerHTML="Title :"+result.deals[i].title;
						dealcontent.appendChild(rentalcmpnyname);
						dealcontent.appendChild(title);

						var dropLocation = document.createElement("p");
						//dropLocation.style.font = "20px";
						dropLocation.innerHTML = "DropLocation:<br>City :"+result.deals[i].dropOffLocation.city+"<br>State :"+ result.deals[i].dropOffLocation.state +"<br>Country :"+result.deals[i].dropOffLocation.country;
						dealcontent.appendChild(dropLocation);
						carDealsdiv.appendChild(dealcontent);

						var carimgdiv = document.createElement("DIV");
					//hotelimgdiv.style.width = "50%";
						carDealsdiv.appendChild(carimgdiv);
						var carimg = document.createElement("IMG");
						carimg.src = res.imageUrl;
						carimg.style.width= "300px";
						carimg.style.height = "200px";
						carimg.style.padding = "10px";
						carimg.style.border = "2 px grey";
						carimgdiv.appendChild(carimg);
						document.getElementById("container").appendChild(carDealsdiv);
					}
			break;

		}
	}
}
xmlhttp.open("GET",url,true);
xmlhttp.send();
}