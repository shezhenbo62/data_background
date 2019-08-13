$(function(){
    $("ul.sidebar-menu li:lt(5)").click(function(){
        var sId = $(this).data("id");
        window.location.hash = sId;
        $("#page-wrapper").remove();
        loadInner(sId);
    });
    function loadInner(sId){
        var sId = window.location.hash;
        var pathn;
        switch(sId){
            case "#top":
                pathn = "top.html";
                break;
        };
        switch(sId){
            case "#position":
                pathn = "position.html";
                break;
        };
        switch(sId){
            case "#usertime":
                pathn = "usertime.html";
                break;
        };
        switch(sId){
            case "#intersection":
                pathn = "intersection.html";
                break;
        };
        $("#content").load(pathn);
    }
})

var hashStr;
function watchHash(){
    var hash = window.location.hash.slice(1);
    hashStr = hash;
    // $("#page-wrapper").remove();
    console.log(hashStr);
    if(hashStr){
        $("#page-wrapper").hide();
        $('#content').load(hashStr+'.html');
    }
    else{
        $("#page-wrapper").show();
    }
}
watchHash();
window.addEventListener("hashchange",watchHash);