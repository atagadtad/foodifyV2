import { appendMap, appendSearch, addMarker } from './helpers.js';
// const userItemView = user => {
//   const $item = $(`<div class='user'>${user.email}</div>`);
//   $item.on("click", () => alert("hello" + user.email));
//   return $item;
// };

// const userPageView = users => {
//   const $page = $(`<div class='page'></div>`);
//   for (user of users) {
//     $page.append(userItemView(user));
//   }
//   return $page;
// };

// const loadUserPage = () => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done(response => {
//     $("main").html(userPageView(response.users));
//   });
// };

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done(users => {
//     for (user of users) {
//       $("<div>")
//         .text(user.name)
//         .appendTo($("body"));
//     }
//   });
// });

$(function() {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => {
    for (user of users) {
      $("<div>")
        .text(user.name)
        .appendTo($("body"));
    }
  });
  $("body").append(appendMap());
  $("#searchPlace").click(function() {
    appendSearch();

  })

 // $("body").append(appendSearch());
google.maps.event.addListener(map, "rightclick", function(event) {
  var lat = event.latLng.lat();
  var lng = event.latLng.lng();
  // populate yor box/field with lat, lng
  alert("Lat=" + lat + "; Lng=" + lng);
});

  // $.ajax({
  //   method: "GET",
  //   url: "/"
  // }).done(() => {

  // });
});

$(document).ready(function() {
  addMarker();
})
$(".ui.search").search({
  source: content
});
