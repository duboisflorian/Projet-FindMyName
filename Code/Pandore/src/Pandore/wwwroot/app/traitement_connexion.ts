function connexion() {

    $.getJSON('../fichier/connexion.json', function (data) {

        var login = document.getElementById("login").value;
        var mdp = document.getElementById("password").value;
        //alert(login);
        //alert(mdp);

        $.each(data, function (key, val) {
            if ((val.login == login) && (val.mdp == mdp)) {
                //alert("Vous êtes connecté !");
                document.location.href = "co.html";
                return false;                
            }
            else {
                var div = document.getElementById("msgco");
                div.innerHTML = "Erreur de connection !";
                //return false;
            }
            //$("div").append(" "+ val +"<br/>");
        });
    });
}