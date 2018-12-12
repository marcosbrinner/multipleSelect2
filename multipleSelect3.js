(function ($) {
    $.fn.multipleSelect2 = function (options) {
        var settings = $.extend({
            data: null,
            key: null,
            value: null,
            width: "half",
            resort: false,
            label1: "",
            label2: "",
            errorMessage :"",
            template :  null,
        }, options);
        var fistElement = null;
        var secondElement = null;

        var createBase = function(element){

            element.html(""
                +"<div class='multipleSelect2-half'>"
                    +"<div class='avalibleLable'>Avalibable</div>"
                    +"<ul class='firstColumn'></ul>"
                +"</div>"
                +"<div class='multipleSelect2-half'>"
                    +"<div class='selectedLable'>Selected</div>"
                    +"<ul class='secondColumn'></ul>"
                +"</div>");
        }
        var selectOne = function(){
            secondElement.prepend($(this).bind("click",deselectOne));
        }
        var deselectOne =  function(){
            fistElement.prepend($(this).bind("click",selectOne));
        }
        
    this.each(function(k,v){
        var element = $(this).addClass("multipleSelect2");
        createBase(element);
        fistElement = element.find(".firstColumn");
        secondElement = element.find(".secondColumn");
        if(settings.template != null){
            $.each(settings.data,function(dk,dv){
                fistElement.append("<li data-inc='"+dk+"'>"+settings.template(settings.data[dk])+"</li>");
            });
        }else{
            $.each(settings.data,function(dk,dv){
                console.log(settings.data[dk]);
                fistElement.append("<li data-inc='"+dk+"'>"+settings.template(settings.data[dk])+"</li>");
            });
        }
        fistElement.find('li[data-inc]').bind("click",selectOne);
    });

    //     var elemento = $(this);
    //     //Create de select Options
    //     var createSelectInput = function (Elements, classe, lable) {
    //         var count = 0;
    //         style = "";
    //         if (settings.width == "half") {
    //             style = "width:50%"
    //         } else {
    //             style = "width:100%"
    //         }
    //         var HtmlElement = "<div style='float:left;" + style +"'>" +
    //             "<span class='lb1' style='float:left;width:100%'>"+lable+"</span> <select style='float:left;width  :100%;height:100%;padding:0px;' class='form-control  " + classe + "' multiple>";
    //         if (Elements != null) {
    //             $.each(Elements, function (k, v) {
    //                 if (settings.key == null && settings.value == null) {
    //                     HtmlElement += "<option data-identify='" + count + "' value='" + k + "'>" + v + "</option>";
    //                 } else if (settings.key != null && settings.value != null) {
    //                     HtmlElement += "<option data-identify='" + count + "' value='" + Elements[k][settings.key] + "'>" + Elements[k][settings.value] + "</option>";
    //                 }else if (settings.key != null && settings.value == null) {
    //                     HtmlElement += "<option data-identify='" + count + "' value='" + Elements[k][settings.key] + "'>" + v + "</option>";
    //                 } else if (settings.key == null && settings.value != null) {
    //                     HtmlElement += "<option data-identify='" + count + "' value='" + k + "'>" + Elements[v][settings.value] + "</option>";
    //                 }
    //                 count++;
    //             });
    //         }
    //         HtmlElement += "</select></div>";
    //         return HtmlElement;
    //     }
    //     var DoMoving = function (_this, temp){
            
    //        _this.append(temp.bind("click", MoveElement).attr("selected",false));
    //         var $wrapper = _this;
    //         if (settings.resort == true) {
    //             $wrapper.find('option').sort(function (a, b) {
    //                 return +a.dataset.identify - +b.dataset.identify;
    //             }).appendTo($wrapper);
    //         }
    //     }
    //     var MoveElement = function () {
    //         var parent = $(this).parent();
    //         var temp = $(this);
    //         if (parent.hasClass("firstSelect")) {
    //             $(this).remove();
    //             DoMoving(elemento.find(".secondSelect"), temp)
    //         } else {
    //             $(this).remove();
    //             DoMoving(elemento.find(".firstSelect"), temp)
    //         }

    //     }
    //     //Create the Final Element
    //     var Create = function () {
    //         if (settings.data == null) {
    //             settings.data = [];
    //         }
    //         var FinalHtml = "";
               
    //         FinalHtml += createSelectInput(settings.data, "firstSelect", settings.label1);
    //         FinalHtml += createSelectInput(null, "secondSelect", settings.label2);
    //         FinalHtml += "<div id='SelectMultiplesError' style='float:left;width:100%;color:red'></div>"
    //         elemento.html(FinalHtml);
    //         elemento.find("select option").bind("click", MoveElement)
            
    //     }
    //     Create();

    //     return {
    //         anySelected: function () {
    //             elemento.find('#SelectMultiplesError').html("");
    //             if (elemento.find(".secondSelect option").length > 0) {
    //                 return true;
    //             }else{
    //                 return false;
    //             }
    //         },
    //         getSelected: function () {
    //             var elems = elemento.find(".secondSelect option");
    //             return elems;
    //         },
    //         showError: function () {
    //             elemento.find('#SelectMultiplesError').html(settings.errorMessage);
    //         }


    //     }
    // }
}
}(jQuery));

function removeItem(ItemToRemove, IndexPath, arr){
    var item = this;
    return arr.filter(function (ele) {
        return ele["" + IndexPath +""] != ItemToRemove;
    });
    return item;
}