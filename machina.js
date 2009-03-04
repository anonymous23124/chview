host = 'http://www.0chan.ru/';
board = 'b';
var pestures = new Array();
var cycle = 0;

function fap () {
	if(x = pestures.shift()) {
		document.getElementById('display').innerHTML 
		= 
		"<img alt=xxx align=middle height=150 src=" 
			+ host 
			+ x.replace(/\"/g,"").replace(/(http|https|ftp)\:\/\/\S*?\//, "") 
			+ ">";
	} else { 
		r() 
	} 
}

function r () {
	var get = new XMLHttpRequest ();
	get.onreadystatechange = function () {
		if ( this.readyState == 4 )
		{
			switch ( this.status )
			{
				case 200:
					clearInterval(cycle);
					pestures = this.responseText.match(/\"\S+s\.jpg\s*\"/ig);
					fap();cycle = setInterval("fap()", 9000);
					break;
				default:
		                // Error. Nobody cares
			}
		}
	}
	get.open( 'GET', host + board + '/', false );
	get.send();
}

window.addEventListener ('load', r, false);
