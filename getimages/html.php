<?php

$data = file_get_contents('http://atanupal.gearhostpreview.com');
echo htmlspecialchars($data);

foreach($data->find('img') as $element) {
    echo $element->src, "\n";
}

exit();
?>