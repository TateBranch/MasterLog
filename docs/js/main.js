let sliderOpen = true;

function toggleSlider(){
	let slider = d3.select("#bottomSlide");
	
	if(sliderOpen){
		slider.transition(200).style("bottom","-178px");
		sliderOpen = false;
		d3.select("#bottomSlideBar").html("▲");
	}else{
		slider.transition(200).style("bottom",null);
		sliderOpen = true;
		d3.select("#bottomSlideBar").html("▼");
	}
}