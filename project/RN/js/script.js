//global variable


var baseURL = "http://67.165.86.206:8080/RNexus/";

var userId; //will be assigned after login





function loginCheck() {
	var username = $("input[name='username']").val();
	var password = $("input[name='password']").val();
	var role = $("input[name='role']:checked").val();
	//var url = "http://67.165.86.206:8080/RNexus/login.php?username="+username+"&password="+password+"&role="+role;
	
  var dataToSend = {
    "username" : username,
    "password" : password,
    "role" : role
  };
  var url = baseURL+"login.php";

  $.post(url, JSON.stringify(dataToSend), function(data) {
    console.log(data);
    userId = data.UID;
    $("#responseName").text(userId);
    location.hash="home";

  },"json");    
}



//keyArray = [key1,key2,...]
function parseJsonToString(keyArray, jsonParam) {
  var json = "{";
  var quote = "\"";
  for(var i=0;i<keyArray.length;i++) {
    //alert(keyArray[i]);
    //alert(jsonParam[keyArray[i]]);
    var s = quote+keyArray[i]+quote;
    s += ":"+quote+jsonParam[keyArray[i]]+quote;
    s +=",";
    json +=s;
  }
  json = json.substring(0,json.length-1); //remove ","
  json += "}";
  return json;
}

//
function parseJsonToString(jsonParam) {
  var json = "{";
  var quote = "\"";
  for(var key in jsonParam) {
    var s = quote+key+quote;
    s += ":"+quote+jsonParam[key]+quote;
    s +=",";
    json +=s;    
  }
  json = json.substring(0,json.length-1); //remove ","
  json += "}";
  return json;
}


function loadProfile() {
  var dataToSend = {
    "UID":userId
  };
  var url = baseURL+"viewprofile.php";

  $.post(url, JSON.stringify(dataToSend), function(data) {
    console.log(data);
    console.log(data.p_addCity);
    $("#profile").find("article").html(data.p_addCity);
  },"json"); 

}

function loadAppointment() {
  var dataToSend = {
    "UID":userId
  };
  var url = baseURL+"viewappointment.php";

  $.post(url, JSON.stringify(dataToSend), function(data) {
    console.log(data);
    //$("#profile").find("article").html(data.p_addCity);
  },"json"); 

}








//ajax
// $(function() { 
//     $('#submit').bind('click', function() { 
 
//         var formData = $('#ajaxForm').serialize(); 
//         //.serialize() 方法创建以标准 URL 编码表示的文本字符串 
//    var username = $("input[name='username']").val();
//      var password = $("input[name='password']").val();
//    //var role = $("[name='role']:checked").val();
//    var role="patient";

//    var jsonString = "{\"username\":'"+username+"',\"password\":'"+password+"',\"role\":'"+role+"'}"

//        alert(jsonString);
//         $.ajax({ 
//             type : "GET", 
//             url  : "http://67.165.86.206:8080/RNexus/login.php", 
//             contentType: 'text/plain', 
//             cache : false, 
//             data : formData, 
//             //dataType: 'json',
//             success : onSuccess, 
//             error : onError 
//         }); 
//         return false; 
//     }); 
// });  
// function onSuccess(data,status){
//    //console.log(status);
    
//     if(data =="success") {
//      //$("#responseName").text(data);
//      //location.hash="home";
//      console.log(data);
//     }

//     if(data == "fail") {
//      console.log("fail");
//     }
// } 
 
// function onError(data,status){ 

// }
