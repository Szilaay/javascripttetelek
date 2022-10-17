var list = new Array(13, 25, 23, 75, 34, 23, 194, 32, -39);
var list_kivalogatas = new Array();
var tulajdonsag = 23;
console.log(list)


//Osszegzes tétel
var osszeg = 0;

function osszegzes_tetel(x, osszeg){
    for(let i = 0; i < x.length; i++){
        osszeg += x[i]
    }
    console.log("A lista összértéke: " + osszeg + ".")
}
osszegzes_tetel(list, osszeg);

//Maximum tétel

var maximum_ertek = 0;

function maximum_tetel(x, max){
    for(let i = 0; i < x.length; i++){
        if(x[i] > maximum_ertek){
            maximum_ertek = x[i]
        }
    }
    console.log("A lista maximális értéke: " + maximum_ertek + ".")
}
maximum_tetel(list, maximum_ertek)

//Eldöntés tétele
var van = false;

function eldontes_tetel(x,t,van)
{
    i = 0;
    while(i <= x.length && x[i] != t)
    {
        i++; 
    }
    if(i <= x.length)
    {
        van = true;
    }
    console.log("A listában van e a feltételnek megfelelő érték: " + van + ".")
}
eldontes_tetel(list,tulajdonsag,van);

//Megszámlálás tétel
var db = 0;

function megszamlalas_tetel(x, db){
    for(let i = 0; i < x.length; i++){
        db++;
    }
    console.log("A listában található értékek darabja: " + db + ".")
}
megszamlalas_tetel(list, db)

//Minimum tétel

var minimum_ertek = 0;

function minimum_tetel(x, min){
    for(let i = 0; i < x.length; i++){
        if(x[i] < maximum_ertek){
            minimum_ertek = x[i]
        }
    }
    console.log("A lista minimum értéke: " + minimum_ertek + ".")
}
minimum_tetel(list, minimum_ertek)

//Keresés tétel
kereses_index = 0;

function kereses_tetel(x,t,sorszam)
{
    i = 0;
    while (i <= x.length && x[i] != t){
        i += 1;
    }
    if (i <= x.length){
        sorszam = i;
    }
    console.log("A listában lévő indexe: " + sorszam + " illetve értéke: " + x[i] + ".");
}
kereses_tetel(list,tulajdonsag,kereses_index);

//Kiválasztás tétel

var kivalasztas_index = 0;

function kivalasztas_tetel(x,t,index)
{
    i = 0;
    while(i <= x.length && x[i] != t)
    {
        i+=1;
        index = i;
    }
    
    console.log("A listában lévő indexe: " + index + " illetve értéke: " + x[i] + ".");
}
kivalasztas_tetel(list, tulajdonsag, kivalasztas_index)

//Kiválogatás tétel
function kivalogatas_tetel(x,t,x2)
{
    szamlalo = 0;
    for(i <= 0; i < x.length; i++)
    {
        if(x[i] == t)
        {
            x2[szamlalo] = x[i];
            szamlalo = szamlalo + 1;
        }
    }
    console.log("A kiválasztott számból: " + t + " ennyi található " + szamlalo + ".");
}
kivalogatas_tetel(list,tulajdonsag,list_kivalogatas);
