//本地

//var Constants = {
//	platformContentURL: "http://127.0.0.1:8081/api/",
//	userContentURL: "http://ctdndev.gi.com/user/",
//	searchContentURL: "http://127.0.0.1:8089/search/",
//	dataContentURL: "http://ctdndev.gi.com/data/",
//	logoPath: "http:///10.10.0.147/"
//}



//线上
var Constants = {
	platformContentURL: "http://ctdndev.gi.com/api/",
	userContentURL: "http://ctdndev.gi.com/user/",
	searchContentURL: "http://ctdndev.gi.com/search/",
	dataContentURL: "http://ctdndev.gi.com/data/",
    logoPath: "http://static.galaxyinternet.com/"
}
var home = {
	    index : "http://ctdndev.gi.com"
	}
var docUrl = {

      /**
        * 文档
      */

       shareDocList:Constants.docContentURL+"share/query",

       getShareDoc:Constants.docContentURL+"share/get/"


}
var searchUrl = {
    com:Constants.searchContentURL+"project",
    investEvent:Constants.searchContentURL+"investEvent",
    org:Constants.searchContentURL+"investfirms",
    quitEvent:Constants.searchContentURL+"quitEvent",
    mergeEvent:Constants.searchContentURL+"mergeEvent",
    launchEvent:Constants.searchContentURL+"launchEvent",
    investOrg:Constants.searchContentURL+"investfirms",
}
var dataUrl = {
    products:Constants.dataContentURL+"op/is/",
    pvuv:Constants.dataContentURL+"op/pvuv/",
    weixin:Constants.dataContentURL+"op/weixinindice/",
    weibo:Constants.dataContentURL+"op/weiboIndice/",
    android:Constants.dataContentURL+"op/android/",
    ios:Constants.dataContentURL+"op/ios/",
}
var ctdnUrl = {

}
var platformUrl = {
	me:Constants.userContentURL+"userlogin/me",
	allQuery:Constants.platformContentURL+"common/allQuery",
}
var table ={
   empty: "-"
}
var detail = {
    queryProject:Constants.platformContentURL+"/projectList/queryProjectByCode/",
    queryRelativeListByCode:Constants.platformContentURL+"/projectList/queryRelativeListByCode/",
    queryProjectInvestEvent:Constants.platformContentURL+"/eventInfo/getListBySourceCode/",
    queryMergeEventInfo:Constants.platformContentURL+"/eventMergerInfo/getListByEventId/",
    queryEventInfo:Constants.platformContentURL+"/eventInfo/getById/",
    queryInvestOrgInfo:Constants.platformContentURL+"/orgInfo/getListByOrgId/",
    queryListedInfo:Constants.platformContentURL+"/eventListedInfo/getListByEventId/",
    queryEventByName:Constants.platformContentURL+"/eventInfo/getListByName/",
    queryCompetationlist:Constants.platformContentURL+"/projectList/queryCompetationlist/"
}
/**
 * how to use? location.href = platformUrl.login
 */
