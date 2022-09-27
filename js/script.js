// let cds = ['davidguetta-onelove', 'haze-cronicasdelbarrio', 'highschoolmusical3', 'thebeatles-abbeyroad']

// console.log(cds[Math.floor(Math.random() * cds.length)])

function elige(){
    let cds = [
        'davidguetta-onelove', 
        'haze-cronicasdelbarrio', 
        'highschoolmusical3', 
        'thebeatles-abbeyroad',
        'davidguetta-guettablaster',
        'davidguetta-poplife',
        'rbd-nuestroamor',
        'rbd-celestial',
        'captainjack-themission',
        'rosalia-elmalquerer',
        'enigma-thescreenbehindthemirror',
        'sonicyouth-goo',
        'alaska-deliriosdegrandeza',
        'abba-greatesthits',
        'radiofutura-venenoenlapiel',
        'marilynmonroe-diamondsareagirlsbestfriend',
        'daftpunk-homework',
        'eels-electroshockblues',
        'fisicaoquimica',
        'pinkfloyd-thedarksideofthemoon',
        'pinkfloyd-thewall',
        'pinkfloyd-animals',
        'pinkfloyd-wishyouwerehere',
        'morrissey-yourarsenal',
        'thesmiths-strangewaysherewecome',
        'thesmiths-thequeenisdead',
        'thesmiths-meatismurder',
        'thesmiths-thesmiths',
        'radiohead-inrainbows',
        'radiohead-hailtothethief',
        'radiohead-amnesiac',
        'radiohead-kida',
        'radiohead-okcomputer',
        'radiohead-thebends',
        'radiohead-pablohoney',
        'minibussongs',
        'thebeatles-greatesthits',
        'thebeatles-love',
        'thebeatles-rubbersoul',
        'thebeatles-aharddaysnight',
        'nirvana-nevermind',
        'supertramp-indeliblystamped',
        'petshopboys-nightlife',
        'five-five',
        'coldplay-myloxyloto',
        'coldplay-arushofbloodtothehead',
        'coldplay-parachutes',
        'crystalcastles-iii',
        'mybloodyvalentine-loveless',
        'simongarfunkel-theessential',
        'oasis-definitelymaybe',
        'oasis-whatsthestorymorningglory',
        'oasis-standingontheshoulderofgiants',
        'pixies-surferrosa',
        'pixies-doolittle',
        'themoodyblues-daysofthefuturepassed',
        'joydivisionneworder-total',
        'joydivision-recopilatorio',
        'joydivision-unknownpleasures',
        'piratas-relax',
        'camprock',
        'highschoolmusical1',
        'ladygaga-thefame',
        'ladygaga-thefamemonster',
        'tameimpala-lonerism',
        'thecure-kissmekissmekissme',
        'thebestofdavidbowie',
        'blur-13',
        'mikeoldfield-fivemilesout',
        'thevelvetunderground-thevelvetunderground',
        'arcticmonkeys-whateverpeoplesayiamthatswhatimnot',
        'animalcrossing-wildworldost'
    ]
    let elegido = parseInt(Math.random() * (cds.length - 1))
    console.log(elegido)
    console.log(cds[elegido])
    document.getElementById(cds[elegido]).style.visibility = "visible";
    
    
}


function reinicia(){
    location.reload();
}