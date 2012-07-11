<?php
$timeID = time(); 
file_put_contents('storage/'.$timeID.'.txt',$_POST['stringJSON']); 
echo json_encode(array('id'=>$timeID));
?>