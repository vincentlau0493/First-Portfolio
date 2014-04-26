
var numberOfProjects = 6;
var projectsArray = new Array(6);


function click_scroll(e) {  // this is for nav
    window.removeEventListener("scroll",scrollToSwitchActive); //temp
    var navName = e.id.split("_")[0];
    //alert(navName);
    var scroll_offset = $("#"+navName+"Panel").offset();
    //var nav = $(".top-bar").css("height");
    //alert(nav);
    //alert(scroll_offset.top);
    //var des = scroll_offset.top-45;
    $("body,html").animate({
        scrollTop:scroll_offset.top+1 
    },{
        duration: 700,
        specialEasing: "easeOutExpo",
    
        complete: function() {
            switchNavActive(e.id) ;
            window.addEventListener("scroll",scrollToSwitchActive);
            
        }
    });  
}



function scrollToPosition(panelName) { //about home ... this is for footer and some button
    window.removeEventListener("scroll",scrollToSwitchActive); //temp
    var scroll_offset = $("#"+panelName+"Panel").offset();
    $("body,html").animate({
        scrollTop:scroll_offset.top 
    },{
        duration: 700,
        specialEasing: "easeOutExpo",
    
        complete: function() {
            switchNavActive(panelName+"_Nav");
            window.addEventListener("scroll",scrollToSwitchActive);
        }
    });  

}


function switchNavActive(id) {
    $(".active:first").removeClass("active");
    $("#"+id).addClass("active");
}

 function scrollToSwitchActive() {
    scrollChangeOpacity();
    //alert("here");
    var scrollPosition = document.body.scrollTop;
    //the first child of body is nav, the last is footer, so I will filter them
    targetDivNum = $("body>div").length; //actually should substract 2
    //alert(targetDivNum);
    for (var i=2;i<targetDivNum-1;i++) {
        //alert("here");
        if (scrollPosition < $("body>div").eq(i).offset().top) {
            //alert("here");
            var rawId = $("body>div").eq(i-1).attr("id");
            var id = rawId.replace("Panel","_Nav");
            //alert(id);
            switchNavActive(id);
            return;
        }
        
        if (scrollPosition >= $("body>div").eq(i).offset().top && scrollPosition < $("body>div").eq(i+1).offset().top) {
            var rawId = $("body>div").eq(i).attr("id");
            var id = rawId.replace("Panel","_Nav");
            //alert(id);
            switchNavActive(id);
            return;
        }
        
    }
    
}

function scrollChangeOpacity() {
    var scrollPosition = document.body.scrollTop;
    var homeTop = $("#homePanel").offset().top;
    var resumeTop = $("#resumePanel").offset().top;
    var difference = resumeTop-homeTop;
    if (scrollPosition <=difference) {
        //alert(scrollPosition);
        //var digit = scrollPosition*0.01;
        var digit = scrollPosition/(difference-150);
        var num = new Number(digit);
        num = num.toFixed(3);
        //alert(num);
        $("#greenShadow").css({"opacity":num});
    }
    return;

    //alert(resumeTop);

    
}

function fadeOutPage(e,page) {
    
    if (e !=null) {
        $("html").animate({opacity: 0}, 200,function(){
            window.location.href = "project/"+e.dataset.myLocation+".html";
        });
    } else {
        $("html").animate({opacity: 0}, 200,function(){
            window.location.href = page+".html";
        });
    }

}

function removeNextIcon() {
    var i = document.getElementById("body");
    var current = i.dataset.myProject;
    if (current == numberOfProjects) {
        $(".myThirdButton").eq(1).parent().hide();
    }
}

