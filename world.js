window.onload = function() {
    const button = document.getElementById('lookup');

    button.addEventListener('click', function() {

        const country = document.getElementById('country').value;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'world.php?country=' + encodeURIComponent(country), true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
};