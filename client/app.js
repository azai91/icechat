var localVideo = $('#localVideo').get(0);

var comm = new IceComm('test');

comm.on('room', function(options) {
  createRemoteVideo(options.stream);
});

comm.local(function(options) {
  localVideo.src = options.stream;
});

comm.ready(function(data) {

  for (var key in data.remoteStreams) {
    createRemoteVideo(URL.createObjectURL(data.remoteStreams[key]));
  }

});

function createRemoteVideo(stream) {
  var remoteVideo = document.createElement('video');
  remoteVideo.src = stream;
  remoteVideo.autoplay = true;
  document.body.appendChild(remoteVideo);
}