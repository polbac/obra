<?php
$content = file_get_contents("http://obra.neptuno.digital/api/?content=configuration");
$content = json_decode($content);

$title = "Obra";
$description = str_replace('"', "'", $content->confinguration->extended->description);
$image = $content->confinguration->extended->facebook_image_share;
$favicon = $content->confinguration->extended->favicon;
?>
<!DOCTYPE html>
<html>
<head>
	
	<title><?php print $title;?></title>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	
	<META name="robots" content="INDEX">

	<link rel="icon" type="image/png" href="<?php print $favicon; ?>" />

	<link rel="stylesheet" href="/static/css/main.css">
	
	<meta charset="utf-8">



	<meta property="og:title" content="<?php print $title;?>" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="" />
	<meta property="og:image" content="<?php print $image;?>" />
	<meta property="og:description" content="<?php print $description;?>" />
</head>
<body >

	<div id="all-viewport"></div>

	<main></main>
	
	<script src='/static/js/bundle.js'></script>
	
	
	

</body>
</html>