<?php
class ImageFetcher
{
    protected $url;
    
    public function __construct()
    {
        libxml_use_internal_errors(true);
    }
    
    public function getUrl() {
        return $this->url;
    }

    public function setUrl($url) {
        $this->url = $url;
    }

    public function fetch()
    {
        if (!$this->url) {
            throw new InvalidArgumentException('Not set url');
        }
        return $this->extractImages(file_get_contents($this->url));
    }
    
    /**
     * 
     * @param string $html
     * @return array
     */
    public function extractImages($html)
    {
        $images = array();
        
        $dom = new DOMDocument();
        $dom->loadHTML($html);
        
        $imgs = $dom->getElementsByTagName('img');
        
        foreach ($imgs as $img) {
            $images[] = $img->getAttribute('src');
        }
        
        return $images;
    }
    
    public function getImageName($url)
    {
        $urlParts = explode('/', $url);
        return array_pop($urlParts);        
    }
    
    public function downloadImages($path)
    {
        $images = $this->fetch();
        
        foreach ($images as $image) {
            file_put_contents($path . '/'. $this->getImageName($image), file_get_contents($image));
        }
    }
}