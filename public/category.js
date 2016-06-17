/* eslint-disable no-undef */
$(function () {

    "use strict";

    $("document").ready(function(){
        $("#todoModal").on("hidden.bs.modal", function() {
            $("#todoForm")[0].reset();
            document.getElementById("submit").disabled = false;
            document.getElementById("status").textContent = " ";
        });

        $("#submit").click(function() {
            document.getElementById("submit").disabled = true;
            var categoryName = document.getElementById("categoryName").value;
            if (categoryName) {
                var data = $("#todoForm").serialize();

                $.ajax({
                    method: "POST",
                    url: "/categories",
                    data: data
                })
                .done(function () {
                    $("#todoForm")[0].reset();
                    location.reload();
                });

                $("#todoModal").modal("hide");

            } else if (!categoryName) {
                document.getElementById("submit").disabled = false;
                document.getElementById("status").textContent = "Please enter a category name.";
            }
        });
    });

    $(".category-item").on("click", "[data-category]", function (e) {
        if (!confirm("Remove category?")) {
            return false;
        }
        var $target = $(e.currentTarget);
        $.ajax({
            method: "DELETE",
            url: "/categories/" + $target.data("category")
        })
        .done(function () {
            location.reload();
        });
    });
});
/* eslint-enable no-undef */

