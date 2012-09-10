<?php
$timeID = time(); 
if(!is_dir('storage')){
	mkdir('storage');
}
file_put_contents('storage/'.$timeID.'.txt',$_POST['stringJSON']); 
echo json_encode(array('id'=>$timeID));
?>