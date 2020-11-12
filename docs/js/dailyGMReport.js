let sheets = null;

function init(){
    $.getJSON("./json/dailyGMReport.json", function(sheets){

        // set the title
        d3.select("#currentTitle").html("Daily GM Report");

        // set the current sheet
        d3.select("#currentSpreadsheet").attr("src",sheets.currentSheetURL)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
		
		d3.select("#errorText").style("top",(parseInt($(window).height())-185)/2);
		d3.select("#errorText").style("left",(parseInt($(window).width())-550)/2);

		
		////////////////////////////////////////////
		// Artesia
		let artesiaDropDown = d3.select("#artesiaDropDown")
			.append("select")
			.attr("id","artesiaDropDownList")
			.on("change",artesiaChangeSheet)
			.attr("class","select-css");
		artesiaDropDown.append("option").attr("value","0").html("Not Selected");
		// Loop through artesia
		for(let option of sheets.artesia){
			addOption(artesiaDropDown,option.title,option);
		}
		
		////////////////////////////////////////////
		// Artesia
		let carlsbadDropDown = d3.select("#carlsbadDropDown")
			.append("select")
			.attr("id","carlsbadDropDownList")
			.on("change",carlsbadChangeSheet)
			.attr("class","select-css");
		carlsbadDropDown.append("option").attr("value","0").html("Not Selected");
		// Loop through artesia
		for(let option of sheets.carlsbad){
			addOption(carlsbadDropDown,option.title,option);
		}
		
		////////////////////////////////////////////
		// Artesia
		let hobbsDropDown = d3.select("#hobbsDropDown")
			.append("select")
			.attr("id","hobbsDropDownList")
			.on("change",hobbsChangeSheet)
			.attr("class","select-css");
		hobbsDropDown.append("option").attr("value","0").html("Not Selected");
		// Loop through artesia
		for(let option of sheets.hobbs){
			addOption(hobbsDropDown,option.title,option);
		}
		
		
    });


    function addOption(selectList,title,value){
        selectList.append("option").attr("value",JSON.stringify(value)).html(title);
    }
}

function artesiaChangeSheet(){
	d3.select("#carlsbadDropDownList").property('value', "0");
	d3.select("#hobbsDropDownList").property('value', "0");
	d3.select("#errorText").style("display","none");
	
    let value = JSON.parse($("#artesiaDropDownList :selected").val());

	if(value == "0"){
		d3.select("#currentTitle").html("Finance & Insurance");
		d3.select("#currentSpreadsheet").attr("src",null)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
		d3.select("#errorText").style("display",null);
		return;
	}
    // Change the title
    d3.select("#currentTitle").html(value.title);

    // Change the url
    d3.select("#currentSpreadsheet").attr("src",value.url)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
	
	
}

function carlsbadChangeSheet(){
	d3.select("#artesiaDropDownList").property('value', "0");
	d3.select("#hobbsDropDownList").property('value', "0");
	d3.select("#errorText").style("display","none");
	
    let value = JSON.parse($("#carlsbadDropDown :selected").val());

	if(value == "0"){
		d3.select("#currentTitle").html("Finance & Insurance");
		d3.select("#currentSpreadsheet").attr("src",null)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
		d3.select("#errorText").style("display",null);
		return;
	}
	
    // Change the title
    d3.select("#currentTitle").html(value.title);

    // Change the url
    d3.select("#currentSpreadsheet").attr("src",value.url)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
}

function hobbsChangeSheet(){
	d3.select("#artesiaDropDownList").property('value', "0");
	d3.select("#carlsbadDropDownList").property('value', "0");
	d3.select("#errorText").style("display","none");
	
    let value = JSON.parse($("#hobbsDropDown :selected").val());

	if(value == "0"){
		d3.select("#currentTitle").html("Finance & Insurance");
		d3.select("#currentSpreadsheet").attr("src",null)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
		d3.select("#errorText").style("display",null);
		return;
	}
    // Change the title
    d3.select("#currentTitle").html(value.title);

    // Change the url
    d3.select("#currentSpreadsheet").attr("src",value.url)
            .attr("width",parseInt($(window).width())-2)
            .attr("height",parseInt($(window).height())-28);
}