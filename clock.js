window.onload = function() {
    var timeelement = document.getElementById('time');
    var dateelement = document.getElementById('date');

    function updateClock() {
        var now = new Date();

        var timeoptions = {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        var formattedTime = new Intl.DateTimeFormat('en-US', timeoptions).format(now);

        var dateoptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        var formattedDate = new Intl.DateTimeFormat('en-US', dateoptions).format(now);

        timeelement.textContent = formattedTime;
        dateelement.textContent = formattedDate;
    }

    updateClock();
    setInterval(updateClock, 1000);
};