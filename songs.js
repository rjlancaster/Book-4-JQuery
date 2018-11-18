$(document).ready(function () {

  // Use jQuery to get a reference to `load-songs`
  const loadSongs = $("#load-songs");
  loadSongs.css("width", "100px");
  loadSongs.css("height", "50px");

  // Use jQuery to get a reference to `song-list`
  const songList = $("#song-list");

  songList.hover(function () {
    $(this).toggleClass("bg");
  });

  // Add a delete button for fun
  const deleteSongs = $("#delete-songs");
  deleteSongs.css("width", "100px");
  deleteSongs.css("height", "50px");

  deleteSongs.click(function (e) {
    songList.empty();
  });

  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system

      Chain a `.then()` method to the ajax call, and when
      it is complete build a DOM component for each song with
      the following structure. Use the jQuery append() method
      to put an HTML representation of each song the DOM as a
      child component of the soglist.

          <section class="song">
              <h1 class="song__title">{Title of song}</h1>
              <section class="song__description">
                  Performed by {artist} on the album {album}
              </section>
          </section>
  */

  function builder(obj) {
    return `
  <section class="song">
    <h1 class="song__title">${obj.title}</h1>
    <section class="song__description">
      Performed by ${obj.artist} on the album ${obj.album}
    </section>
  </section>`
  }

  loadSongs.click(function (e) {
    $.ajax("http://localhost:3000/songs")
      .then(data => data.forEach(obj => {
        songList.append(builder(obj));
      }))
  });

})