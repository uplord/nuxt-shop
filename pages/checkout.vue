<template>
    <div class="">
        <section>
            <div class="container">
                <h2>Redirect example Test</h2>
                <ul style="margin-left: 0; padding-left: 15px;">
                <li>
                    <a href="exp://REPLACE_ME/">
                    Go back with no params
                    </a>
                </li>
                <li>
                    <a href="exp://REPLACE_ME/message=Hello%20World">
                    Pass back a message of "hello world"
                    </a>
                </li>
                <li>
                    <a href="exp://REPLACE_ME/authToken=23xbdbb21b3">
                    Pass back some fake auth token
                    </a>
                </li>
                </ul>

                <p>
                Redirecting automatically back to app in <span class="countdown">5</span> seconds
                </p>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'CheckoutPage',
    mounted () {
        document.addEventListener("DOMContentLoaded", function(event) {
        var links = document.querySelectorAll('a');
        var baseUri = 'exp://192.168.0.12:19000/';

        // Take the uri from the params
        var qs = decodeURIComponent(document.location.search);
        if (qs) {
            baseUri = qs.split('?linkingUri=')[1];
        }

        // Update the link urls
        for (var i = 0; i < links.length; ++i) {
            links[i].href = links[i].href.replace('exp://REPLACE_ME/', baseUri);
            console.log(links[i].href);
        }

        var redirectInterval = setInterval(function() {
            var countdown = document.querySelector('.countdown');
            var t = parseInt(countdown.innerText, 10);
            t -= 1;

            countdown.innerText = t;

            if (t === 0) {
            clearInterval(redirectInterval);
            window.location.href = baseUri + 'message=' + encodeURIComponent('Redirected automatically by timer');
            }
        }, 1000);
        });

    }
}
</script>
