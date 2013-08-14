function Controller ($scope) {
  $scope.load = function () {
    var F = document.getElementById("widget");
    if ($('#url').val() !== '') {
      F.contentWindow.loadImage($('#url').val(), imageLoadedCallback);
    }
  };

  function imageLoadedCallback () {
    var F = document.getElementById("widget");
    F.height = F.contentDocument.documentElement.scrollHeight;
    F.width = F.contentDocument.documentElement.scrollWidth;
  }

  $('#widget').load(function () {
    $('#url').val('http://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Turkish_Van_Cat.jpg/700px-Turkish_Van_Cat.jpg');
    $scope.load();
  });
  $('#widget').attr('src','bower_components/imagecroptest/cropper.html');
}
