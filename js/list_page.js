var data={

}
/**
根据数据循环出说有的分类 分别放入到3个ul里面 隐藏二级 三级行业

*/

sendGetRequest(platformUrl.allQuery,function(cData){
    data = cData
})
var d_list = data.data[$("[data-industry-name]").attr("data-industry-name")];
var one_li = ''
var two_ul = ''
var three_ul = ''
for(var i=0; i<d_list.length; i++){
	if(i == 0){
		one_li +='<li data-val="'+d_list[i].id +'" class="industry_li_on one_'+i+' industry_'+i+'" industry="1" data_name="name_'+i+'" data_i="'+i+'" >'+d_list[i].name+'</li>';
	}else{
		one_li +='<li data-val="'+d_list[i].id +'" class="one_'+i+' industry_'+i+'" industry="1" data_name="name_'+i+'" data_i="'+i+'" >'+d_list[i].name+'</li>';
	}
	
	var child_two = d_list[i].children;
	
    if(child_two){
    	//所有的二级行业
    	for(var j=0; j<child_two.length; j++){
    		if(j == 0){
    			two_ul +='<li data-val="'+child_two[j].id +'" class="two_'+i+' name_'+i+' none industry_'+i+j+'" data_name="name_'+i+j+'" industry="2" data_i="'+i+'" data_j="'+j+'" style="display: block;">'+child_two[j].name+'</li>';
    		}else{
    			two_ul +='<li data-val="'+child_two[j].id +'" class="two_'+i+' name_'+i+' none industry_'+i+j+'" data_name="name_'+i+j+'" industry="2" data_i="'+i+'" data_j="'+j+'">'+child_two[j].name+'</li>';
    		}
    		
    /*		var child_three = child_two[j].child;

    		//所有的三级行业
    		for(var k=0; k<child_three.length; k++){
    			three_ul +='<li class="three_'+i+' self_'+i+j+k+' name_'+i+j+' none industry_'+i+j+'" data_name="name_'+i+j+'" industry="3" data_i="'+i+'" data_j="'+j+'" data_k="'+k+'">'+child_three[k].title+'</li>';
    		}*/
    	}

    }

}
$('#one_industry').html(one_li);
$('#two_industry').html(two_ul);
$('#three_industry').html(three_ul);
//给一级行业绑定鼠标移入事件
$('body').delegate('#one_industry li','mouseover',function(){
	var data_name = $(this).attr('data_name');
	//console.log(class_a)
	$('#one_industry li').removeClass('industry_li_on');
	$(this).addClass('industry_li_on');
	$('#two_industry li').hide();
	$('#three_industry li').hide();
	$('#two_industry .'+data_name+'').show();
});
//给二级行业绑定鼠标移入事件
$('body').delegate('#two_industry li','mouseover',function(){
	var data_name = $(this).attr('data_name');
	//console.log(class_a)
	//$('#two_industry li').hide();
	$('#three_industry li').hide();
	$('#three_industry .'+data_name+'').show();
});
//给行业绑点击事件显示选中的行业
$('body').delegate('.industry_list ul li','click',function(){
	var data_name = $(this).attr('data_name');
	var i = $(this).attr('data_i');
	var j = $(this).attr('data_j');
	var k = $(this).attr('data_k');
	var id =$(this).attr('data-val');
	var click_name = $(this).text();
	
	/***
		判断选择的是第几行业   根据行业取消和选中   
		*/
	if($("#click_list li").length == '10'){
//		alert('最多选择10个')
	    layer.msg('最多选择10个',{time:1000})
		return;
	}
	var industry = $(this).attr('industry');
	if(industry == 1){
		$('#click_list .one_'+i+'').remove()
		$('#click_list .two_'+i+'').remove()
		$('#click_list .three_'+i+'').remove()
		if($(this).hasClass('click_class')){			
			$(this).removeClass('click_class');
		}else{
			$('.two_'+i+'').removeClass('click_class');
			$('.three_'+i+'').removeClass('click_class');
			$(this).addClass('click_class');
			$('#click_list').append('<li class="pick_on one_'+i+'" data-id="'+id+'" industry="1" clock_name = "one_'+i+'">'+click_name+'<span class="brain_ico brain_ico_close"></span></li>');
		}
		
	}else if(industry == 2){
		$('#click_list .one_'+i+'').remove()
		$('#click_list .industry_'+i+j+'').remove()
		if($(this).hasClass('click_class')){
			$(this).removeClass('click_class');
		}else{
			$('#one_industry .industry_'+i+'').removeClass('click_class');
			$('#three_industry .industry_'+i+j+'').removeClass('click_class');
			$(this).addClass('click_class');
			$('#click_list').append('<li class="pick_on industry_'+i+j+' two_'+i+'" data-id="'+id+'" industry="2" clock_name = "industry_'+i+j+'">'+click_name+'<span class="brain_ico brain_ico_close"></span></li>');
		}
	}else{
		$('#click_list .one_'+i+'').remove()
		$('#click_list .two_'+i+'').remove()
		if($(this).hasClass('click_class')){
			$(this).removeClass('click_class');
			$('#click_list .self_'+i+j+k+'').remove()
		}else{
			$('#one_industry .industry_'+i+'').removeClass('click_class');
			$('#two_industry .industry_'+i+j+'').removeClass('click_class');
			$(this).addClass('click_class');
			$('#click_list').append('<li class="pick_on industry_'+i+j+' data-id="'+id+'" self_'+i+j+k+' three_'+i+'" industry="3" clock_name = "self_'+i+j+k+'">'+click_name+'<span class="brain_ico brain_ico_close"></span></li>');
		}
	}
	$('#industry_one').removeClass('pick_on');
	_cleanTitle()
	_query();
	
});

//选择行业删除
$('body').delegate('#click_list li .brain_ico_close','click',function(){
	var industry = $(this).parent().attr('industry');
	var clock_name = $(this).parent().attr('clock_name');
	var pick_on_length = $('#click_list li').length;
	$(this).parent().remove();
	if(pick_on_length == 1){
		if(industry == 1){
			$('#one_industry .'+clock_name+'').removeClass('click_class');
		}else if(industry == 2){
			$('#two_industry .'+clock_name+'').removeClass('click_class');
		
		}else{
			$('.'+clock_name+'').removeClass('click_class');
		}
		$('#industry_one').addClass('pick_on');
	}else{
		if(industry == 1){
			$('#one_industry .'+clock_name+'').removeClass('click_class');
		}else if(industry == 2){
			$('#two_industry .'+clock_name+'').removeClass('click_class');
		
		}else{
			$('.'+clock_name+'').removeClass('click_class');
		}
	}
	_cleanTitle()
	_query();
	
})
//所属行业  选择全部
$('body').delegate('#industry_one','click', function(event){
	event.stopPropagation();
	$('#click_list').html('');
	$(this).addClass('pick_on');
	$('#one_industry li').removeClass('click_class');
	$('#two_industry li').removeClass('click_class');
	$('#three_industry li').removeClass('click_class');
	_cleanTitle()
	_query();
})
//点击选择行业
/*$('.click_industry_show').delegate('.click_industry_show','mouseenter',function(){
	$('.industry_list').show();
}).mouseleave(function(){
    $('.industry_list').hide();
});
$('.industry_list').delegate('.industry_list','mouseenter',function(){
	$('.industry_list').show();
}).mouseleave(function(){
    $('.industry_list').hide();
});*/
$(".click_industry_show").mouseenter(function(){
	$('.industry_list').show();
});
$(".click_industry_show").mouseleave(function(){
	$('.industry_list').hide();
});
//普通展示
$("ul[data-query]").each(function(i,e){
    var o  = $(e)
    var arr = o.attr("data-query")
    var name = arr.split(":")[0]
    var type = arr.split(":")[1]
    if (type == "normal"){
        $(data["data"][name]).each(function(i,e){
            o.append('<li  data-id="'+e.id+'">'+e.name+'<span class="brain_ico brain_ico_bj"></span></li>')

        })
    }
});


//公用选择事件、不包含所属行业
$('body').delegate('.block .condition_all_ul li','click', function(event){
	event.stopPropagation();	
	var click_this =$(this).index();
	if(click_this == 0){
		$(this).parent().children('li').removeClass('pick_on');
		$(this).parent().children('li').first().addClass('pick_on');
	}else{
		$(this).parent().children('li').first().removeClass('pick_on');
		$(this).addClass('pick_on');
	}
	_cleanTitle()
	_query()
})
//公用点击删除
$('body').delegate('.block .condition_all_ul li .brain_ico_bj','click', function(event){	
	event.stopPropagation(); 
	$(this).parent().removeClass('pick_on');
	var pick_on_length = $(this).parent().parent().children('.pick_on').length;
	if(pick_on_length == 0){
		$(this).parent().parent().children('li').first().addClass('pick_on');
	}
	_cleanTitle()
	_query();
})

//地区选择
var global_all = '<li class="pick_on">全部</li>';
var global_list = '';
if($("#global_all").attr('data-query') =="listingTypeIds:normal"){
	var list = data.data.listingType;
	for(var i = 0; i< list.length; i++){
		global_all +='<li global-id="'+list[i].id+'" data-id="'+list[i].id+'" class="global_mousemove ">'+list[i].name+'<span class="brain_ico brain_ico_bj"></span></li>';
		for(var j= 0; j<list[i].children.length; j++){
			global_list +='<div class="block_list type_name_all" global-list="'+list[i].id+'">';	
			global_list +='<div class="type_name" global-list="'+list[i].id+'">'+list[i].children[j].name+'</div>';
		    global_list +='<ul class="condition_all_ul" data-query="'+list[i].children[j].typeName+':normal">';
		    global_list +='<li class="pick_on aa_'+list[i].id+'" global-list="'+list[i].id+'" global-id="'+list[i].id+'">全部</li>';
		    for(var k= 0; k<list[i].children[j].children.length; k++){
		    	global_list +='<li global-id="'+list[i].id+'" data-id="'+list[i].children[j].id+'">'+list[i].children[j].children[k].name+'<span class="brain_ico brain_ico_bj"></span></li>';
		    	
		    }
		    global_list +='</ul>';
		    global_list +='</div>';
		}

	}
}else if($("#global_all").attr('data-query') =="districtIds:district"){
	var list = data.data.district;
	for(var i = 0; i< list.length; i++){
	    global_all +='<li global-id="'+list[i].id+'" data-id="'+list[i].id+'" class="global_mousemove ">'+list[i].name+'</li>';
	    global_list +='<div class="block_list" global-list="'+list[i].id+'">';
	    global_list +='<ul class="condition_all_ul">';
	    global_list +='<li p global-id="'+list[i].id+'">全部<span class="brain_ico brain_ico_bj"></span></li>';
	    for(var j = 0; j< list[i].children.length; j++){
	    	global_list +='<li global-id="'+list[i].id+'" data-id="'+list[i].children[j].id+'">'+list[i].children[j].name+'<span class="brain_ico brain_ico_bj"></span></li>';
	    }
	    global_list +='</ul>';
	    global_list +='</div>';
	}
}

$('#global_all').html(global_all);
$('#global_list').html(global_list)

//类型事件点击事件
$('body').delegate('[data-query="listingTypeIds:normal"] li','click', function(event){
	event.stopPropagation(); 
	var click_this =$(this).index();
	var click_id = $(this).attr('global-id')
	$("[global-id='"+click_id+"']").removeClass('pick_on');
	$("[global-list='"+click_id+"'] li").first().addClass('pick_on');
	if(click_this == 0){
		$('#global_all li').removeClass('pick_on');
		$(".block_list .condition_all_ul li").removeClass('pick_on');
		$(".block_list .condition_all_ul").each(function(i){
			$(this).children('li').first().addClass('pick_on');
		});
		$(this).addClass('pick_on');
		$(".block_list").hide();
	}else{
		$('[data-query="listingTypeIds:normal"] li').removeClass('pick_on');
		//$(".aa_"+click_id).addClass('pick_on');
		$('[data-query="listingTypeSubIds:nor"] li').removeClass('pick_on');
		$(this).addClass('pick_on');
		$(".block_list .condition_all_ul").each(function(i){
			$(this).children('li').first().addClass('pick_on');
		});
	}
	_cleanTitle()
	_query();
})
//类型list事件
$('body').delegate('[data-query="listingTypeSubIds:nor"] .condition_all_ul li','click', function(event){
	event.stopPropagation();	
	var click_this =$(this).index();
	var global_id = $(this).attr('global-id');
	if(click_this == 0){
		$(this).parent().children('li').removeClass('pick_on');
		$(this).addClass('pick_on');
	}else{
		$('[data-query="listingTypeIds:normal"] li').removeClass('pick_on');
		$(this).addClass('pick_on');
		$(this).parent().children('li').first().removeClass('pick_on');
		$('[data-query="listingTypeSubIds:nor"] .type_name_all').each(function(i){
			var display =$(this).css('display');
			if(display =='none'){
				$(this).children().children('li').removeClass('pick_on');
				$(this).children().children('li').first().addClass('pick_on');
			}
		})
		
	}
	_cleanTitle()
	_query();
})

//国内切换点击事件
$('body').delegate('[data-query="districtIds:district"] li','click', function(event){
	event.stopPropagation(); 
	var click_this =$(this).index();
	var click_id = $(this).attr('global-id')
	
	//console.log(click_id)
	//$('[global-id="'+click_id+'"]').removeClass('pick_on');
	if(click_this == 0){
		$("[global-id='"+click_id+"']").removeClass('pick_on');
		$(this).addClass('pick_on');
		$("[global-list='"+click_id+"'] li").first().addClass('pick_on');
		$('#global_all li').removeClass('pick_on_color');
		$(".block_list .condition_all_ul li").removeClass('pick_on');
		/*$(".block_list .condition_all_ul").each(function(i){
			$(this).children('li').first().addClass('pick_on');
		});*/
		$(this).addClass('pick_on');
		$(".block_list").hide();
		_cleanTitle()
		_query();
	}else{
		//$("#global_all li").first().removeClass('pick_on');
	}
})
//地区选择list事件
$('body').delegate('[data-query="districtSubIds:district"] .condition_all_ul li','click', function(event){
	event.stopPropagation();	
	var click_this =$(this).index();
	var global_id = $(this).attr('global-id');
	$("#global_all [global-id='"+global_id+"']").removeClass('pick_on');
	var panter = $(this).attr('global-id');
	if(click_this == 0){		
		$(this).parent().children('li').removeClass('pick_on');
		$(this).parent().children('li').first().addClass('pick_on');		
		$('#global_all').children('li').first().removeClass('pick_on');
		
	}else{
		$(this).parent().children('li').first().removeClass('pick_on');
		$(this).addClass('pick_on');
		$('#global_all').children('li').first().removeClass('pick_on');
		
	}
	$('#global_all [global-id = "'+panter+'"]').addClass('pick_on_color');
	_cleanTitle()
	_query();
})
//地区选择list删除
$('body').delegate('.block_list .condition_all_ul li .brain_ico_bj','click', function(event){	
	event.stopPropagation(); 
	$(this).parent().removeClass('pick_on');
	var pick_on_length = $(this).parent().parent().children('.pick_on').length;
	var global_id = $(this).parent().attr('global-id')
	if(pick_on_length == 0){
		$('#global_all [global-id="'+global_id+'"] ').removeClass('pick_on_color');
		//$(this).parent().parent().children('li').first().addClass('pick_on');
		var pick_on_color = $('#global_all').children('.pick_on_color').length;
		if(pick_on_color == 0){
			$('#global_all').children('li').first().addClass('pick_on');
		}
	}
	_cleanTitle()
	_query();
})
//地区选择list删除
/*$('body').delegate('.block_list .condition_all_ul li .brain_ico_bj','click', function(event){	
	event.stopPropagation(); 
	$(this).parent().removeClass('pick_on');
	var pick_on_length = $(this).parent().parent().children('.pick_on').length;
	if(pick_on_length == 0){
		$(this).parent().parent().children('li').first().addClass('pick_on');
	}
	_query();
})*/
//global_all删除
$('body').delegate('#global_all li .brain_ico_bj','click', function(event){	
	event.stopPropagation(); 
	$(this).parent().removeClass('pick_on');
	var pick_on_length = $(this).parent().parent().children('.pick_on').length;
	if(pick_on_length == 0){
		$(this).parent().parent().children('li').first().addClass('pick_on');
	}
	_cleanTitle()
	_query();
})
//global_all选择事件
$('body').delegate('.global_mousemove','mousemove', function(event){	
	event.stopPropagation(); 
	var global_id = $(this).attr('global-id');
	$('#global_list .block_list').hide();
	$("[global-list='"+global_id+"']").show();
})
//条件折叠
$('body').delegate('.click_show','click', function(event){	
	event.stopPropagation();
	if($(this).hasClass('click_show_on')){
		$('.switch_condition').hide();
		$(this).html($(this).attr("original-text"))
		$(this).removeClass('click_show_on');
	}else{
		$('.switch_condition').show();
		$(this).attr("original-text",$(this).html())
		$(this).html('收起<span class="brain_ico brain_ico_arrowup"></span>')
		$(this).addClass('click_show_on')
	}
})
//日期显示
$("#begin_on").datetimepicker({
	minView: "month", //选择日期后，不会再跳转去选择时分秒
	format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
　　	language: 'zh-CN', //汉化
　　	todayBtn:  1,  
　　	autoclose:true //选择日期后自动关闭
}).on('changeDate', function (ev) {  
	var starttime=$("#begin").val();
	$("#begin_on span").html(starttime);
	$("#end_on").datetimepicker('setStartDate',starttime);
      _cleanTitle()
      _query();
});  

$("#end_on").datetimepicker({
	minView: "month", //选择日期后，不会再跳转去选择时分秒
	format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
　　	language: 'zh-CN', //汉化
　　	todayBtn:  1,  
　　	bootcssVer:3,
　　	autoclose:true //选择日期后自动关闭
}).on('changeDate', function (ev) {  
	var endtime=$("#end").val();
	$("#end_on span").html(endtime);
	$("#begin_on").datetimepicker('setEndDate',endtime);
    _cleanTitle()
    _query();
});
//名字事件
$('body').delegate('.nav_all_name','mouseenter', function(event){	
	event.stopPropagation(); 
	$('.nav_all_name .brain_ico_name').addClass("brain_ico_name_on");
	$('.list_click_ul').show();
	
})
$('body').delegate('.nav_all_name','mouseleave', function(event){
	$('.nav_all_name .brain_ico_name').removeClass("brain_ico_name_on");
	$('.list_click_ul').hide();
});