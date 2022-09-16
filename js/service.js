$(document).ready(function(){
    //실습7
    $("#srv p").hide();
    $("#srv .q_box").click(function(){
        //열린 파트를 제외한 모든 영역 중 하나를 클릭시 열어준다.
        // $("#ex_07 .q_box p").slideUp();
        // $(this).find("p").slideDown();

        //아코디언 기능도 포함되고 열린 영역도 다시 클릭시 닫는다.
        var $open = $(this).hasClass("open");
        if($open == false){
            $("#srv .q_box").removeClass("open");
            $(this).addClass("open");
            $("#srv .q_box p").slideUp();
            $(this).find("p").slideDown();
        }else{
            $(this).removeClass("open");
            $(this).find("p").slideUp();
        }
    });

});