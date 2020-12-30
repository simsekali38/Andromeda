$(function() {
    var json = ["Messages", "Attachments", "People"];
    sessionStorage.setItem("history", json);
    $("#search").keyup(function(e) {
        val = $(this).val();
    });

    $("#search").keypress(function(e) {
        var val = $(this).val();
        var key = e.which;
        if (key == 13) {
            getHistory = sessionStorage.getItem("history");
            if (getHistory.indexOf(val) < 0) {
                json.push(val);
            }
            sessionStorage.setItem("history", json);
            //alert(sessionStorage.getItem("history"));

            getHistory = sessionStorage.getItem("history");
            var v = getHistory.split(",");
            $("#recent").empty();
            $(v).each(function(i, d) {

                $("#recent").append('<li><a href=""><i class="fas fa-history"></i><span>' + d + '</span> <span class="sil fas fa-times"></span></a></li>');
            });
        }
    });
});