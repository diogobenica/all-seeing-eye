<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>The All Seeing Eye #OpenHack</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="Arthur Barros" content="OpenHack Twitter Clipping"/>
		<meta http-equiv="Cache-Control" content="public"/>
		<meta http-equiv="content-language" content="pt-BR,en-US"/>
		<link href="style.css" rel="stylesheet" type="text/css" />
		<link href='http://fonts.googleapis.com/css?family=Quicksand:700' rel='stylesheet' type='text/css'/>
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script src="js/jquery.json-2.3.js" type="text/javascript"></script>
		<script src="js/core.js" type="text/javascript"></script>
		<script src="js/main.js" type="text/javascript"></script>
	</head>
	<body>
		<div class="wrapper">
			<div class="title bold fontQuicksand">The All Seeing Eye #OpenHack</div>
			<div class="fontQuicksand bold">Use the box bellow to search and save any kind of tweet</div>
			<div id="search">
		 		<input type="text" name="q" id="searchbox" class="left"/>
				<div id="submit" title="Click to Go" class="iconSize left vaSub"></div>
				<div id="loading" title="Click to Save" class="iconSize left vaSub"></div>
			</div>
			<div id="load" class="widthFull heightFull">
				<div class="left twitterIcon left">
					Found <span id="count" class="bold">0</span> tweets &amp; Showing <span id="countShow" class="bold">0</span> 
				</div>
				<div id="display"></div>
			</div>
		</div>
	</body>
</html>