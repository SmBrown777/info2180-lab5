window.onload = function() {
    const button = document.getElementById('lookup');
    const citiesButton = document.getElementById('lookup-cities');

    function search(lookupType) {
        const country = document.getElementById('country').value;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'world.php?country=' + encodeURIComponent(country) + '&lookup=' + lookupType, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }

    button.addEventListener('click', function() {
        search('countries');
    });

    citiesButton.addEventListener('click', function(){
        search('cities');
    })
};