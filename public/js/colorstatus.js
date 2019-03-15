var status = document.getElementById("status").innerHTML;
var statusColor = document.getElementById("statusColor");

    if(status === "up") {
        statusColor.style.color = "green";
    } else {
        statusColor.style.color = "red";
    }