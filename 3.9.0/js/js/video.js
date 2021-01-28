// VIDEO 2
$('.ytvideo[data-video]').one('click', function() {

var $this = $(this);
var width = $this.attr("width");
var height = $this.attr("height");

$this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
});
