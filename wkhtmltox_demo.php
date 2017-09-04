<?php
/*
需下载wkhtmltox工具: https://github.com/wkhtmltopdf/wkhtmltopdf
docker中运行需要安装依赖: https://github.com/openlabs/docker-wkhtmltopdf/blob/master/Dockerfile#L9-L11
linux中文乱码: windows c:\Windows\fonts\simsun.ttc拷贝到linux服务器/usr/share/fonts/
*/
$wkhtmltoimage = '/wkhtmltox/bin/wkhtmltoimage';
$filename = '/temp/' . uniqid('html2img_', false) . '.png';
$htmlfilename = '/temp/' . uniqid('html2img_', false) . '.html';
$htmlfilename = '/temp/111.html';
$html = '<html><head><title>export</title><body>content</body></html>';
// $reult = file_put_contents($htmlfilename, $html);
$command =  $wkhtmltoimage . ' --width 640 --height 950 --quality 100' . escapeshellarg($htmlfilename) . ' ' . escapeshellarg($filename) . ' 2>&1' ;
exec($command, $output, $return_val);
// unlink($htmlfilename);
print_r([$output, $return_val, $wkhtmltoimage, $htmlfilename, $filename]);die;
