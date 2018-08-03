var lang = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};


function welcome(language) {
    switch (language) {
        case 'english':
            return lang.english;
            break;
        case 'czech':
            return lang.czech;
            break;
        case 'danish':
            return lang.danish;
            break;
        case 'dutch':
            return lang.dutch;
            break;
        case 'estonian':
            return lang.estonian;
            break;
        case 'finnish':
            return lang.finnish;
            break;
        case 'flemish':
            return lang.flemish;
            break;
        case 'french':
            return lang.french;
            break;
        case 'german':
            return lang.german;
            break;
        case 'irish':
            return lang.irish;
            break;
        case 'italian':
            return lang.italian;
            break;
        case 'latvian':
            return lang.latvian;
            break;
        case 'lithuanian':
            return lang.lithuanian;
            break;
        case 'polish':
            return lang.polish;
            break;
        case 'spanish':
            return lang.spanish;
            break;
        case 'swedish':
            return lang.swedish;
            break;
        case 'welsh':
            return lang.welsh;
            break;
        default:
            return lang.english;
            break;
    }
};