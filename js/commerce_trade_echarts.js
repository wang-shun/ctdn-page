var myChart = echarts.init(document.getElementById('commerce_one'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: ''
    },
    color: [
        '#58082e', '#d40054', '#a95c76', '#f192b2', '#ff783d',
        '#ff1000', '#ba51cd','#663ab6', '#1a2a80', '#798eff', 
        '#00afff', '#92f2ff', '#46cbbe', '#0b8f82', '#2d771f', 
        '#65ff6b', '#95cc55', '#d0ff99', '#8b9b1b', '#e2d249',
        '#fff25e', '#be930e','#896e58', '#950951', '#ac5a40', 
        '#ff635b', '#cfbf97','#9d9d9d', '#b0ffd7', '#000000'
    ],
    tooltip: {
        trigger: 'axis',
        type:'solid'
    },
    legend: {
    	 x : 'right',
         y : 'bottom',
        data:['邮件营销','邮件营销1','邮件营销2','邮件营销3','邮件营销4','邮件营销5','联盟广告','联盟广告1','联盟广告2','联盟广告3','联盟广告4','联盟广告5','联盟广告6','联盟广告7','联盟广告8','联盟广告9','联盟广告10'],
        selected:{
        	"邮件营销":true,
        	"联盟广告":false
        },
        type:'scroll',
        bottom: 10,
    },
    grid: {
        left: '3%',
        top:'30',
        right: '3%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
           // saveAsImage: {}
        }
    },
    xAxis: [
	 {
		type : 'category',
		splitLine :{show:false},
		boundaryGap: false,
		data: ['2017/01','2017/02','2017/03','2017/04','2017/05','2017/06','2017/07'],
		scale:true,
		top:0,			
		
		scale: true,
		axisLine:{
		  show:true,
		  lineStyle:{
		  	color: '#e6e6e6',
		  	width: 1,
		  	type: 'solid'
		  }
		},
		axisTick:{
		  show:false
		 },
		  axisLabel: {
		      //formatter: '{value}',
		      textStyle: {
		      	color: '#333333',
		          fontSize:'12'
		      }
		  }
		     
		 }
	],
    yAxis:[
	    	 {
                 type : 'value',
                 splitLine :{
                	 show:true,
                	 lineStyle: {

                		 color: ['#e6e6e6'],

                		 width: 1,

                		 type: 'solid',
                		 },
                },
                 scale:true,
                 top:'0%',

                 nameTextStyle :{
                     color:'#333333',
                     //nameLocation:'top',
                     right:'20',
                 },
                 scale: true,
                 /* nameLocation:'middle',
                 nameGap:25, */
                 nameTextStyle: {
                     color: '#333',
                     fontSize: '12'
                 },
			      axisLine:{
			        show:false,
			        lineStyle:{
			        	color: '#e6e6e6',
			        	width: 1,
			        	type: 'solid'
			        }
			      },
			      axisTick:{
			        show:false
			       },
			        axisLabel: {
			            //formatter: '{value}',
			            textStyle: {
			            	color: '#333333',
			                fontSize:'12'
			            }
			        }
                 
             }
	    ],
    series: [
        {
            name:'邮件营销',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'邮件营销1',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'邮件营销2',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'邮件营销3',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'邮件营销4',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'邮件营销5',
            type:'line',
            symbol:'circle',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告1',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告2',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告3',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告4',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告5',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告6',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告7',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告8',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告9',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'联盟广告10',
            type:'line',
            symbol:'circle',
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
myChart.setOption(option,true);


//行业融资对比

var myChart_db = echarts.init(document.getElementById('commerce_two'));
var option_db = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color:['#3396c9','#6bcff2','#2ea7ef','#6ee8de','#b4fdbc','#96cbe2'],
    legend: {
    	 x : '630',
         y : '450',
        data:[ '种子/天使/PreA轮','A轮/A+轮','PreB轮/B轮/B+轮','C轮','D轮以上']
    },
    grid: {
    	 left: '3%',
         top:'30',
         right: '3%',
         bottom: '100',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['金融科技','互联网银行','电子商务','O2O','人工智能'],
            axisTick:{
  			  show:false
  			 },
            axisLabel: {
			    //formatter: '{value}',
			    interval:0,  
			    rotate:40 ,
			    textStyle: {
			    	color: '#333333',
			        fontSize:'12'
			    }
			},
			axisLine:{
			  show:false,
			  lineStyle:{
			  	color: '#e2e3e4',
			  	width: 1,
			  	type: 'solid'
			  }
			}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine :{
	           	 show:true,
	           	 lineStyle: {
	
	           		 color: ['#e6e6e6'],
	
	           		 width: 1,
	
	           		 type: 'solid',
           		 },
           },
            nameTextStyle: {
                color: '#333',
                fontSize: '12'
            },
            axisLabel: {
			    interval:0,  
			    textStyle: {
			    	color: '#333333',
			        fontSize:'12'
			    }
			},
			axisLine:{
			  show:false,
			  lineStyle:{
			  	color: '#e2e3e4',
			  	width: 1,
			  	type: 'solid'
			  }
			}

        }
    ],
    series : [
              
        {
            name:'种子/天使/PreA轮',
            type:'bar',
            stack: '总量',
            barWidth : 15,//柱图宽度 
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'A轮/A+轮',
            type:'bar',
            stack: '总量',
            barWidth : 15,//柱图宽度
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'PreB轮/B轮/B+轮',
            type:'bar',
            stack: '总量',
            barWidth : 15,//柱图宽度
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'C轮',
            type:'bar',
            stack: '总量',
            barWidth : 15,//柱图宽度
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'D轮以上',
            type:'bar',
            stack: '总量',
            barWidth : 15,//柱图宽度
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChart_db.setOption(option_db,true);

//融资版块
var myChart_three = echarts.init(document.getElementById('commerce_three'));
var option_three = {
	    title : {
	    },
	    color:['#c5d9f1','#95b3d7','#fee2e1','#b6ebd5','#f1ffd2','#fff1c3','#f8c4c4'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{b}: {c}"
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : false,
	    series : [
	        {
	            name:'融资版块',
	            type:'treemap',
	            top: 30,
	            left: 30,
	            right: 30,
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        formatter: "{b}"
	                    },
	                    borderWidth: 1
	                },
	                emphasis: {
	                    label: {
	                        show: true
	                    }
	                }
	            },
	            data:[
	                {
	                    name: '三星',
	                    value: 6
	                },
	                {
	                    name: '小米',
	                    value: 4
	                },
	                {
	                    name: '苹果',
	                    value: 4
	                },
	                {
	                    name: '华为',
	                    value: 2
	                },
	                {
	                    name: '联想',
	                    value: 2
	                },
	                {
	                    name: '魅族',
	                    value: 1
	                },
	                {
	                    name: '中兴',
	                    value: 1
	                }
	            ]
	        }
	    ]
	};

myChart_three.setOption(option_three,true); 

//持续获投分析
var myChart_four = echarts.init(document.getElementById('commerce_four'));
var option_four = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color:['#72bdff'],
    grid: {
    	 left: '3%',
         top:'30',
         right: '3%',
         bottom: '80',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['金融科技','互联网银行','电子商务','O2O','人工智能'],
            axisTick:{
  			  show:false
  			 },
            axisLabel: {
			    //formatter: '{value}',
			    interval:0,  
			    rotate:40 ,
			    textStyle: {
			    	color: '#333333',
			        fontSize:'12'
			    }
			},
			axisLine:{
			  show:false,
			  lineStyle:{
			  	color: '#e6e6e6',
			  	width: 1,
			  	type: 'solid'
			  }
			}
        }
    ],
    yAxis : [
             {
                 type : 'value',
                 splitLine :{
     	           	 show:true,
     	           	 lineStyle: {
     	
     	           		 color: ['#e6e6e6'],
     	
     	           		 width: 1,
     	
     	           		 type: 'solid',
                		 },
                },
                 nameTextStyle: {
                     color: '#333',
                     fontSize: '12'
                 },
                 axisLabel: {
     			    interval:0,  
     			    textStyle: {
     			    	color: '#333333',
     			        fontSize:'12'
     			    }
     			},
     			axisLine:{
     			  show:false,
     			  lineStyle:{
     			  	color: '#e6e6e6',
     			  	width: 1,
     			  	type: 'solid'
     			  }
     			}

             }
         ],
    
    series : [
              {
                  name:'直接访问',
                  type:'bar',
                  barWidth: '30',
                  itemStyle : { normal: {label : {show: true, position: 'top',color:'#333333'}}},
                  data:[10, 52, 20, 34, 90, 30, 22]
              }
    ]
};
myChart_four.setOption(option_four,true);



//各轮次融资规模分布
var myChart_five = echarts.init(document.getElementById('commerce_five'));
var hours = ['种子轮', '天使轮', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a'];
var days = ['100（含）及以下', '100-1000万（含）', '1000-5000万（含）',
        '5000万-1亿（含）', '1亿-10亿（含）', '10亿以上'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

var option_five = {
    title: {
    },
    legend: {
    },  
    color:['#67ddd9'],
    grid: {
   	 	left: '30',
        top:'20',
        right: '35',
        bottom: '10',
       containLabel: true
   },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
    },
    xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};
myChart_five.setOption(option_five,true);
