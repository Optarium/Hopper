$.getJSON("https://api.myjson.com/bins/17fs7x", function (data) {
    document.getElementById("naam1").innerHTML = data.Duvel.name + "bier";
    document.getElementById("percentage1").innerHTML = data.Duvel.percentage;
    document.getElementById("info1").innerHTML = data.Duvel.info;

    document.getElementById("naam2").innerHTML = data.GentseStrop.name + "bier";
    document.getElementById("percentage2").innerHTML = data.GentseStrop.percentage;
    document.getElementById("info2").innerHTML = data.GentseStrop.info;

    document.getElementById("naam3").innerHTML = data.StellaArtois.naam + "bier";
    document.getElementById("percentage3").innerHTML = data.StellaArtois.percentage;
    document.getElementById("info3").innerHTML = data.StellaArtois.info;

});
