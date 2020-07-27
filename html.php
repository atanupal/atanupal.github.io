<?php

$data = file_get_contents('https://www.flipkart.com/sony-xperia-x-dual-sim-graphite-black-64-gb/p/itmeuyd9mv5zzffd?pid=MOBEJB94ZZ8YNGNH&srno=s_1_1&otracker=search&lid=LSTMOBEJB94ZZ8YNGNHTLZ6IE&fm=SEARCH&iid=6ba93631-b388-466f-877e-5cc3b569744a.MOBEJB94ZZ8YNGNH.SEARCH&qH=33561003f44d374c');
echo htmlspecialchars($data);


$doc = new DOMDocument();
$doc->loadHTML($data);
$elements = $doc->getElementsByTagName('img');

foreach($elements as $element) {
 echo $element->getAttribute('src');
}
exit();
?>