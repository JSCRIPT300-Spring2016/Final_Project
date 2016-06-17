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
            var taskName = document.getElementById("taskName").value;
            if (taskName) {
                var data = $("#todoForm").serialize();

                $.ajax({
                    method: "POST",
                    url: "/tasks",
                    data: data
                })
                .done(function () {
                    $("#todoForm")[0].reset();
                    location.reload();
                });

                $("#todoModal").modal("hide");

            } else if (!taskName) {
                document.getElementById("submit").disabled = false;
                document.getElementById("status").textContent = "Please enter a task name.";
            }
        });
    });

    $(".task-item").on("click", "[data-category]", function (e) {
        if (!confirm("Remove task?")) {
            return false;
        }
        var $target = $(e.currentTarget);
        $.ajax({
            method: "DELETE",
            url: "/tasks/" + $target.data("category")
        })
        .done(function () {
            location.reload();
        });
    });
});
/* eslint-enable no-undef */

