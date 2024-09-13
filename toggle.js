function toggle() {
    var original = document.getElementById("1");
    var secondstyle = document.getElementById("2");
    if (original.disabled) {
        original.disabled = undefined;
        secondstyle.disabled = "disabled";
    } else {
        original.disabled = "disabled";
        secondstyle.disabled = undefined;
    }
}