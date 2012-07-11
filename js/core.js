jQuery.extend({
    listener: function () {
        var url = "http://search.twitter.com/search.json?callback=?";
        var query = $("#searchbox").val();
        var rpp = "100";
        var max_id = $.getMaxID(objeto);
        var stop = (typeof(stopLoop) != 'boolean' ? false : stopLoop );
        if(stop == false){
        	if(objeto.refresh_url == -1){
        		mapQuery = { 'q':query, 'rpp':rpp, 'since_id':max_id };
        		uri = url;
        	}else{
        		mapQuery = { 'q':query,'rpp':rpp };
        		uri = url+objeto.refresh_url;
        		console.log(uri);
        	}
	    	$.getJSON( url, mapQuery,
				function(data){
	    			objeto2 = data;
					if($.getMaxID(objeto) < $.getMaxID(data)){
						objeto.results = $.merge(objeto.results,data.results);
						objeto.query = data.query;
						$.countListener('#count',$(objeto.results).size());
						$.countListener('#countShow',parseInt($('#countShow').html())+1);
						$.showContentListener(data);
					}
					setTimeout(function(){
						$.listener();
					},TIME_OUT);
			});
        }
    },
	startListener: function (){
		stopLoop = false;
		$.listener();
	},
    stopListener: function (){
    	stopLoop = true;
    },
    getMaxID: function(objeto){
    	var value_id = 0;
    	$.each(objeto.results,function(i,value){
    		if(value.id > value_id){
    			value_id = value.id;
    		}
    	});
    	return value_id;
    },
    saveListener: function(){
    	$.stopListener();
    	$.post("save.php", { stringJSON: $.toJSON(objeto) },
    		function(data){
    			window.location.href="load.php?id="+data.id;
		}, "json");
    	objeto = {since_id:0,results:[],refresh_url:-1};
    },
    countListener: function(elemento,count){
		$(elemento).html(count);
    },
    showContentListener: function(data){
    	var res = data.results[0];
    	layoutContent = "<div class='js-stream-item stream-item'><div class='stream-item-content tweet js-actionable-tweet js-stream-tweet stream-tweet '><div class='tweet-image'><img width='48'height='48'src='"+res.profile_image_url.toString()+"'/></div><div class='tweet-content'><div class='tweet-row'><span class='tweet-user-name'><a class='tweet-screen-name user-profile-link js-action-profile-name' href='http:///twitter.com/"+res.from_user+"'>"+res.from_user+"</a><span class='tweet-full-name'> "+res.from_user_name+"</span></span></div><div class='tweet-row'><div class='tweet-text js-tweet-text'>"+res.text+"</div></div><div class='tweet-row'><a class='tweet-timestamp js-permalink'href='#'><span class='_timestamp js-tweet-timestamp'>"+H(res.created_at)+"</span></a></div></div></div></div>";
    	$(layoutContent).hide().prependTo("#display").fadeIn(TIME_OUT);
    }
});

var K = function () {
    var a = navigator.userAgent;
    return {ie: a.match(/MSIE\s([^;]*)/)};
}();
var H = function (a) {
    var b = new Date();
    var c = new Date(a);
    if (K.ie) {
        c = Date.parse(a.replace(/( \+)/, ' UTC$1'));
    }
    var d = b - c;
    var e = 1000,
        minute = e * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
    if (isNaN(d) || d < 0) {
        return "";
    }
    if (d < e * 7) {
        return "agora";
    }
    if (d < minute) {
        return Math.floor(d / e) + " segundos atr&aacute;s";
    }
    if (d < minute * 2) {
        return "about 1 minute ago";
    }
    if (d < hour) {
        return Math.floor(d / minute) + " minutos atr&aacute;s";
    }
    if (d < hour * 2) {
        return "about 1 hour ago";
    }
    if (d < day) {
        return Math.floor(d / hour) + " horas atr&aacute;s";
    }
    if (d > day && d < day * 2) {
        return "yesterday";
    }
    if (d < day * 365) {
        return Math.floor(d / day) + " dias atr&aacute;s";
    } else {
        return "mais de um ano atr&aacute;s";
    }
};