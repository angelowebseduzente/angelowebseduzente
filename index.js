<script>
if (document.addEventListener) {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
    });
} else { //Versões antigas do IE
    document.attachEvent("oncontextmenu", function(e) {
        e = e || window.event;
        e.returnValue = false;
        return false;
    });
}
</script>

<script>
if (document.addEventListener) {
    document.addEventListener("keydown", bloquearSource);
} else { //Versões antigas do IE
    document.attachEvent("onkeydown", bloquearSource);
}

function bloquearSource(e) {
    e = e || window.event;

    var code = e.which || e.keyCode;

    if (
        e.ctrlKey &&
        (code == 83 || code == 85) //83 = S, 85 = U
    ) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        return false;
    }
}
</script>
