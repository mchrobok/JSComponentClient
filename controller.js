function Controller ($scope) {
  $scope.load = function () {
    var widget = document.getElementById("widget");
    if ($('#url').val() !== '') {
      widget.contentWindow.loadImage($('#url').val(), imageLoadedCallback);
    }
  };

  function imageLoadedCallback () {
    var widget = document.getElementById("widget");
    widget.height = widget.contentDocument.documentElement.scrollHeight;
    widget.width = widget.contentDocument.documentElement.scrollWidth;

  }

  $('#widget').load(function () {
    $('#url').val('http://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Turkish_Van_Cat.jpg/700px-Turkish_Van_Cat.jpg');
    $scope.load();
  });
  $('#widget').attr('src','bower_components/imagecroptest/cropper.html');
}
