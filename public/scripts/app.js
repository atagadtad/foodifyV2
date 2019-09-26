import {
  appendMap,
  appendSearch,
  checkMapCollections
} from "./helpers.js";

$(function ($) {
  $("#homepage header nav .login").click(function () {
    if ($("#login-form").css("display") == "none") {
      $("#login-form").slideDown();
    } else {
      $("#login-form").slideUp();
    }
  });
  $("#homepage header nav .signup").click(function () {
    // alert("hiiii");
    if ($("#singup").css("display") == "none") {
      $("#singup").slideDown();
    } else {
      $("#singup").slideUp();
    }
  });

<<<<<<< HEAD


  //check checkBox to show map collection sections
  checkMapCollections("favorite");
  checkMapCollections("foody");
  checkMapCollections("camping");

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done(users => {
  //   console.log("getting users");
  //   for (user of users) {
  //     $("<div>")
  //       .text(user.name)
  //       .appendTo($("body"));
  //   }
  // });
=======
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
>>>>>>> 8deb5d4b78164f4220196d10880fe2f7c6e9aef2


  // $.ajax({
  //   method: "GET",
  //   url: "/map"
  // }).done(() => {
  //   $("#right").append(appendMap());

  //   $("#searchPlace").click(function () {
  //     appendSearch();

  //   });
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

  $(".item").click(function () {
    let url = $(this).attr("href");
    alert(url);
    $("#right").load(url);
    return false;
  });
});
