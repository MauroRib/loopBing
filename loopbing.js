
    var links = ["xbox", "halo", "forza", "gears+of+war", "killer+instinct", "fable", "mortal+kombat", "dead+space", "batman", "witcher", "dragon+age", "mass+effect", "castlevania", "street+fighter", "skyrim", "fallout", "ori", "wolfenstein", "doom", "diablo", "forza+horizon", "banjo", "conker", "dishonored", "evil+within", "flight+simulator", "perfect+dark", "pillars+of+eternity", "prey", "psychonauts", "quake", "quantum+break", "alan+wake", "shadowrun", "sea+of+thieves", "starfield", "state+of+decay", "elder+scrolls", "outer+worlds", "viva+pinata", "wasteland", "we+happy+few", "far+cry", "assassins+creed", "injustice", "battletoads", "darksiders", "destiny", "just+cause", "arkham+city", "metal+gear", "gta", "dirt+rally", "assetto+corsa", "battlefield", "call+of+duty", "bayonetta", "bioshock", "bloodstained", "borderlands", "code+vein", "crash+bandicoot", "deus+ex", "devil+may+cry", "dying+light", "fatal+frame", "ghost+recon", "grid", "hellblade", "fenyx+rising", "kingdom+come", "la+noire", "mega+man", "lara+croft", "tomb+raider", "life+is+strange", "little+nightmares", "mad+max", "marvel+vs+capcom", "metro+2033", "need+for+speed", "nier", "ninja+gaiden", "outriders", "dark+alliance", "rare+replay", "red+dead+redemption", "remnant", "resident+evil", "sekiro", "dark+souls", "sid+meier+civilization", "sombras+de+mordor", "sonic", "sunset+overdrive", "tekken", "fatal+fury", "kof", "tetris", "ascent", "titanfall", "watch+dogs", "wreckfest", "trek+to+yomi", "tmnt", "unsighted", "chorus", "sniper+elite", "tunic", "binary+domain", "overcooked", "dead+cells", "alien+isolation", "apex+legends", "hades", "streets+of+rage", "golden+axe", "rocksmith", "darkest+dungeon", "cyberpunk+2077", "valfaris", "untitled+goose+game", "oxenfree", "rayman", "day+of+the+tentacle", "blasphemous", "shovel+knight", "carrion", "splinter+cell", "soulcalibur", "vampyr", "plague+tale", "project+cars", "anthem", "slain", "hollow+knight", "guacamelee", "ashen", "unravel", "cuphead", "zombie+army", "vanquish", "final+fight", "double+dragon", "oddworld", "recore", "wolf+among+us", "gwent", "elite+dangerous", "king+quest"];
    var i = 0;


    function shuffle() {

            //exibir lista antes de misturar
            //var list = links.map(name => "<li>" + name + "</li>");
            //var listAsStr = "<ul>" + list.join("") + "<ul>";

            //document.getElementById("list").innerHTML = listAsStr;

            var m = links.length, t, ix;
                // While there remain elements to shuffle
            while (m) {

                    // Pick a remaining element
                    ix = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = links[m];
                links[m] = links[ix];
                links[ix] = t;
            };

            //exibir lista apos alterar
            //var list2 = links.map(name => "<li>" + name + "</li>");
            //var listAsStr2 = "<ul>" + list2.join("") + "<ul>";

            //document.getElementById("listOrdenada").innerHTML = listAsStr2;

            //return links;
        };


   function exibe() {
        var list2 = links.map(name => "<li>" + name + "</li>");
        var listAsStr2 = "<ul>" + list2.join("") + "<ul>";

        document.getElementById("listOrdenada").innerHTML = listAsStr2;
   };

   function myLoop(qtd,tempo) {         //  create a loop function
        setTimeout(function () {   //  call a 3s setTimeout when the loop is called
        if (qtd == 30) {
            comeco = 20;
        } else {
            comeco = 0
        };
        var clink = "https://www.bing.com/search?q=" + links[(comeco + i)];
        window.open(clink, "plasma");
        i++;                    //  increment the counter
        if (i < qtd) {           //  if the counter < 10, call the loop function
            myLoop(qtd, tempo);             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
        }, tempo)
        }

