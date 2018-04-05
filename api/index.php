<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
error_reporting(0);
ini_set('display_errors', 0);

$cache_file = "tmp/".normalizeString($_SERVER["QUERY_STRING"]);

if ($_GET["content"]=="clear-cache"){
	deleteDir("../api/tmp/"); 
	print 1;
	die;
}

function deleteDir($path) {
    return is_file($path) ?
            @unlink($path) :
            array_map(__FUNCTION__, glob($path.'/*')) == @rmdir($path);
}

function normalizeString ($str = '')
{
    $str = strip_tags($str); 
    $str = preg_replace('/[\r\n\t ]+/', ' ', $str);
    $str = preg_replace('/[\"\*\/\:\<\>\?\'\|]+/', ' ', $str);
    $str = strtolower($str);
    $str = html_entity_decode( $str, ENT_QUOTES, "utf-8" );
    $str = htmlentities($str, ENT_QUOTES, "utf-8");
    $str = preg_replace("/(&)([a-z])([a-z]+;)/i", '$2', $str);
    $str = str_replace(' ', '-', $str);
    $str = rawurlencode($str);
    $str = str_replace('%', '-', $str);
    return $str;
}

//if (file_exists($cache_file)) {
if (2==1){
	include($cache_file);

}else{

	ob_start();

	if (!file_exists('tmp')) {
	    mkdir('tmp', 0777, true);
	}
	$fp = fopen($cache_file, 'w'); 

	require_once("../wp-load.php");

	$data = array();

	switch ($_GET["content"]) {
		
		case 'configuration':	
			$data["confinguration"] = get_post( 122, ARRAY_A );
			$data["confinguration"]["extended"] = CFS()->get( FALSE, 122, array( 'format' => 'raw' ) );

			$data["confinguration"]["extended"]["favicon"] = wp_get_attachment_url($data["confinguration"]["extended"]["favicon"]);
			$data["confinguration"]["extended"]["facebook_image_share"] = wp_get_attachment_url($data["confinguration"]["extended"]["facebook_image_share"]);
		break;

		case 'project-detail':		
			
			$data["detail"] = get_post( $_GET["id"], ARRAY_A );
			$data["detail"]["extended"] = CFS()->get( FALSE, $_GET["id"], array( 'format' => 'raw' ) );
			$data["detail"]["extended"]["images_final"] = array();
			
			
			$x = 0;
			
			foreach ($data["detail"]["extended"]["images"] as $value) {
				$data["detail"]["extended"]["images_final"][$x] = array();
				$data["detail"]["extended"]["images_final"][$x] = $value;
				$data["detail"]["extended"]["images_final"][$x]["image"] = getMediaObject($value["image"]); 

				$x++;
			}

			$data["detail"]["extended"]["images"] = $data["detail"]["extended"]["images_final"];
			
			/*for ($i=0; $i < count($data["detail"]["extended"]["images"]); $i++) { 	
				$data["detail"]["extended"]["images_final"][$x] = getMediaObject($data["detail"]["extended"]["images"][$i]["image"]);
				$x++;
			}*/

			//$data["detail"]["extended"]["images"] = $data["detail"]["extended"]["images_final"];

		break;

		case 'projects':

			$data["projects"] = new stdClass;
			//$data["landing"]->push = CFS()->get( "push", 9, array( 'format' => 'raw' ) );
			

			

			$work_list = wp_parse_args( null, array(
				'post_type' => 'projects',
				'posts_per_page'            => 100,
    			'limit'                     => 100,
    			'orderby'=> 'title', 
    			'order' => 'ASC'

			) );

			

			$get_posts = new WP_Query;

			$data["projects"] = $get_posts->query($work_list);

		break;

		case 'cv':
			$data["cv"] = new stdClass;
			$data["cv"]->cv = wp_get_attachment_url(CFS()->get( "cv", 7, array( 'format' => 'raw' )));
		break;

		case 'about':
			$data["about"] = new stdClass;
			$data["about"]->body = CFS()->get( "about_description", 7, array( 'format' => 'raw' ) );
			$data["about"]->cv = wp_get_attachment_url(CFS()->get( "cv", 7, array( 'format' => 'raw' )));
		break;

		case 'lectures':
			$data["lectures"] = new stdClass;
			$data["lectures"]->list = CFS()->get( "lectures_list", 7, array( 'format' => 'raw' ) );
			
		break;

		case 'publications':
			$data["publications"] = new stdClass;
			$data["publications"]->list = CFS()->get( "publication_list", 7, array( 'format' => 'raw' ) );
			for ($i=0; $i < count($data["publications"]->list); $i++) { 
				$data["publications"]->list[$i]["publication_image"] = getMediaObject($data["publications"]->list[$i]["publication_image"]);
			}
		break;
		
		case 'awards':
			$data["awards"] = new stdClass;
			$data["awards"]->list = CFS()->get( "awards_list", 7, array( 'format' => 'raw' ) );
			for ($i=0; $i < count($data["awards"]->list); $i++) { 
				$data["awards"]->list[$i]["award_image"] = getMediaObject($data["awards"]->list[$i]["award_image"]);
			}
		break;

		case 'contact':
			$data["contact"] = new stdClass;
			$data["contact"]->body = CFS()->get( "contact_description", 7, array( 'format' => 'raw' ) );
		break;

		case 'events':

			$data["events"] = new stdClass;
			

			$events_list = wp_parse_args( null, array(
				'post_type' => 'events',
				'posts_per_page'            => 100,
    			'limit'                     => 100

			) );

			

			$get_posts = new WP_Query;

			$data["events"] = $get_posts->query($events_list);

			for ($i=0; $i < count($data["events"]); $i++) { 
				
				$data["events"][$i]->image = getMediaObject(CFS()->get( "image", $data["events"][$i]->ID, array( 'format' => 'raw' ) ) ); 

				$data["events"][$i]->link = CFS()->get( "link", $data["events"][$i]->ID, array( 'format' => 'raw' ) );

				$data["events"][$i]->date = CFS()->get( "date", $data["events"][$i]->ID, array( 'format' => 'raw' ) );

				$data["events"][$i]->video_embebed = CFS()->get( "video_embebed", $data["events"][$i]->ID, array( 'format' => 'raw' ) );

				if ($data["events"][$i]->date!=""){
					$myDateTime = DateTime::createFromFormat('Y-m-d', $data["events"][$i]->date);
					$newDateString = $myDateTime->format('M j—o');
					$data["events"][$i]->date = $newDateString;
				}

			}

		break;
		
		
	}

	

	print json_encode($data);

	fwrite($fp, ob_get_contents()); 
	fclose($fp); 
	ob_end_flush(); 


}



function proccesVideoLink($link){
		$return_data = array();
		$paths = explode("/", $link);
		$video_id = $paths[count($paths)-1];
		$return_data["id"] = $video_id;
		$return_data["type"] = strpos($link, "vimeo") !== FALSE ? "vimeo" : "youtube";
		if ($return_data["type"] == "vimeo"){
			$return_data["iframe"] = '<iframe src="https://player.vimeo.com/video/' . $return_data["id"] . '?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			$hash = unserialize(file_get_contents("http://vimeo.com/api/v2/video/".$return_data["id"].".php"));
			$return_data["image"] = $hash[0]["thumbnail_large"];

		}
		return $return_data;
	}

	function getMediaObject($_id){

		return wp_get_attachment_metadata( $_id );

	}
	 
	function getMediaListObject($_list){
		
		$list = array();
		if ($_list !== NULL){
			foreach ($_list as &$valor) {
			    
			    array_push($list, wp_get_attachment_metadata( $valor["media"] ));
			}
		}

		


		return $list;


	}

?>