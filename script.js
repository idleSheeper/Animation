var language = ['pl', 'eng', 'de', 'fr', 'it', 'es', 'cz', 'ru'];

function  changeTextVersion(){    
    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            document.getElementById(language[i]).style.zIndex = '10';   
            console.log(language[i]);
        }
        else document.getElementById(language[i]).style.zIndex = '-1';
    }
}