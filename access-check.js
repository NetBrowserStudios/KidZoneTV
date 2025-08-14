<script>
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const kidMode = urlParams.get('kidmode');

    if (!kidMode) {
        // Redirect to same page with kidmode=true
        window.location.href = window.location.pathname + "?kidmode=true";
    } else if (kidMode !== "true") {
        // Block access if kidmode is wrong
        document.body.innerHTML = "<h1>🚫 Access Denied</h1><pThis site is only for kids using NetBrowser KidSafe Mode.</p>";
    }
};
</script>
