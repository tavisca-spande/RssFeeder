var e = document.getElementById("options");


var showFeed = function(){
	
var url = e.options[e.selectedIndex].value;
var dropdownind = e.selectedIndex;
var xmlhttp;
xmlhttp=new XMLHttpRequest();
var parent = document.getElementById("containerdiv");
while(parent.firstChild){
parent.removeChild(parent.firstChild);
}

xmlhttp.onreadystatechange=function()
{

	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		var result =JSON.parse(xmlhttp.responseText);
		var len =result.deals.length;
		switch(dropdownind)
		{
		case 1:
			for (var i =0; i<len;i++)
			{
					var res = result.deals[i];
					var hoteldiv = document.createElement("div");
					hoteldiv.className += "row dealcontainer";
					hoteldiv.id = "hoteldivno"+i;
				
					var hoteldesdiv = document.createElement("DIV");
					hoteldesdiv.className += "col description";
					hoteldiv.appendChild(hoteldesdiv);
				
					var hotelname = document.createElement("H2");
					var hotelNameText = document.createTextNode(res.hotelName); 
				
					hotelname.appendChild(hotelNameText);
					hoteldesdiv.appendChild(hotelname);

					var hoteldescription = document.createTextNode(res.description);
					hoteldesdiv.appendChild(hoteldescription);

					var hotelimgdiv = document.createElement("DIV");
					hotelimgdiv.className = "col";
					hoteldiv.appendChild(hotelimgdiv);
					var hotelimg = document.createElement("IMG");
					hotelimg.className = "customthumbnail";
					hotelimg.src = res.imageUrl;
					hotelimgdiv.appendChild(hotelimg);
					document.getElementById("containerdiv").appendChild(hoteldiv);
			 }
			break;
			case 2 :
					for (var i =0; i<len;i++)
					{
						var res = result.deals[i];
						var carDealsdiv = document.createElement("div");
						carDealsdiv.className ="row dealcontainer";
						carDealsdiv.id = "cardealno"+i;

						var dealcontent = document.createElement("DIV");
						dealcontent.className += " col description"; 

						var rentalcmpnyname = document.createElement("h2");
						var rentalcmpnynametext = document.createTextNode(result.deals[i].rentalCompanyName);					
						rentalcmpnyname.appendChild(rentalcmpnynametext);
						dealcontent.appendChild(rentalcmpnyname);

						var bookingperiod = document.createElement("h5");
						var bookingperiodText = document.createTextNode("Booking Period:");
						bookingperiod.appendChild(bookingperiodText);
						dealcontent.appendChild(bookingperiod);

						var bookingperiodstartdate = document.createElement("span");
						var bookingperiodstartdatetext = document.createTextNode("Date : "+ result.deals[i].bookingPeriod.start.date);
						//   Total Amount:" + obj.deals[i].fare.totalAmount
						bookingperiodstartdate.appendChild(bookingperiodstartdatetext);
						dealcontent.appendChild(bookingperiodstartdate);

						var totalamount = document.createElement("p");
						var totalamounttext = document.createTextNode("Amount :" +result.deals[i].fare.totalAmount); 
						totalamount.appendChild(totalamounttext);

						dealcontent.appendChild(totalamount);
						carDealsdiv.appendChild(dealcontent);


						var validitydiv = document.createElement("div");
						validitydiv.className += " col description";

						var validityheader = document.createElement("h2");
						var validityheadertext = document.createTextNode("Validity Period :");
						validityheader.appendChild(validityheadertext);
						validitydiv.appendChild(validityheader);

						var validityperiodcontent = document.createElement("p");
						validityperiodcontenttext = document.createTextNode("Start Date :"+result.deals[i].validityPeriod.start.date);
						validityperiodcontent.appendChild(validityperiodcontenttext);                                          
						validitydiv.appendChild(validityperiodcontent);

						var validityperiodcontent = document.createElement("p");
						validityperiodcontenttext = document.createTextNode("End Date :"+result.deals[i].validityPeriod.end.date);
						validityperiodcontent.appendChild(validityperiodcontenttext);                                          
						validitydiv.appendChild(validityperiodcontent);

						carDealsdiv.appendChild(validitydiv);
						document.getElementById("containerdiv").appendChild(carDealsdiv);
					}
			break;

		}
	}
}
xmlhttp.open("GET",url,true);
xmlhttp.send();
}

e.onchange = showFeed;