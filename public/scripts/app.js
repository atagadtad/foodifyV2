import { appendMap, appendSearch, addMarker, checkMapCollections } from "./helpers.js";

$(function ($) {
  //check checkBox to show map collection sections
  checkMapCollections("favorite");
  checkMapCollections("foody");
  checkMapCollections("camping");

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => {
    console.log("getting users");
    for (user of users) {
      $("<div>")
        .text(user.name)
        .appendTo($("body"));
    }
  });

  let $map = document.getElementById("map");
  let map = document.getElementById("map").gMap;
  //showing user page
  $.ajax({
    method: "GET",
    url: "/login"
  }).done(() => {
    // $("#right").append(appendMap());
    // $("#searchPlace").click(function() {
    //   appendSearch();
  });
});



$.ajax({
  method: "GET",
  url: "/map"
}).done(() => {
  $("#right").append(appendMap());

  $("#searchPlace").click(function () {
    appendSearch();
    // $("#map").append(appendMap());
    // $("#searchPlace").click(function() {
    //   appendSearch();
    // });
  });
  // $("#map").append(appendMap());
  // $("#searchPlace").click(function() {
  //   appendSearch();
  // });
  $.ajax({
    method: "GET",
    url: "/"
  }).done(() => {
    $("#map").append(appendMap());
    $("#searchPlace").click(function () {
      appendSearch();
    });
  });
});

// $.ajax({
//   method: "GET",
//   url: "/"
// }).done(() => {
// });

// $(".buttons .login").click(function () {
//   $("#login-form").css("display", "block");
// });

// $.ajax({
//   method: "GET",
//   url: "/"
// }).done(() => {

// });

$("#buttons .login").click(function () {
  $("#login-form").css("display", "block");
});

$(".item").click(function () {
  let url = $(this).attr("href");
  alert(url);
  $("#right").load(url + " #right >*");
  return false;
});
// });
$(".item").click(function () {
  let url = $(this).attr("href");
  alert(url);
  $("#right").load(url);
  return false;
});

// jQuery(document).ready(function() {
//   $("#map").click(function() {
//     // $("body").append(appendSearch());
//     let map = document.getElementById("map").gMap;
//     console.log(map);
//     google.maps.event.addListener(map, "rightclick", function(event) {
//       console.log(map);
//       var lat = event.latLng.lat();
//       var lng = event.latLng.lng();
//       // populate yor box/field with lat, lng
//       alert("Lat=" + lat + "; Lng=" + lng);
//     });
//   });
// });
