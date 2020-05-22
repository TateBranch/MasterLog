let sheets = null;

function init(){
    $.getJSON("./json/bestEver.json", function(result){
        sheets = result;

        // set the title
        d3.select("#currentTitle").html(sheets.currentSheetTitle);

        // set the current sheet
        d3.select("#currentSpreadsheet").attr("src",sheets.currentSheetURL)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);


        // create the dropdown list
        let select = d3.select("#dropDownListDiv").append("select").attr("id","dropDownList").on("change",changeSheet).attr("class","select-css");

        addOption(select,sheets.currentSheetTitle,{url:sheets.currentSheetURL,title:sheets.currentSheetTitle});

        for(let option of sheets.otherSheets){
            addOption(select,option.title,option);
        }
    });


    function addOption(selectList,title,value){
        selectList.append("option").attr("value",JSON.stringify(value)).html(title);
    }
}

function changeSheet(){
    let value = JSON.parse($("#dropDownList :selected").val());

    // Change the title
    d3.select("#currentTitle").html(value.title);

    // Change the url
    d3.select("#currentSpreadsheet").attr("src",value.url)
		.attr("width",parseInt($(window).width())-2)
		.attr("height",parseInt($(window).height())-28);
}