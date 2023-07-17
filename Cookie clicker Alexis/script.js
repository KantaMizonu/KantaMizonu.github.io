let bambou = 0;
let bebepandanourie = 0;
let grospandanourie = 0;
let kungfupandanourie = 0;
let ninjapandanourie = 0;
let secateurAchete = false;
let machetteAchetee = false;
let tronconneuseAchetee = false;
let pandatravail = false;
let secateurs = 0;
let machette = 0;

const buy_bbpanda =  () => acheterPanda('bebepanda', 10)
document.getElementById('bbpanda').addEventListener('click',buy_bbpanda);
const buy_grospanda =  () => acheterPanda('grospanda', 20)
document.getElementById('grospanda').addEventListener('click',buy_grospanda);
const buy_kungfupanda =  () => acheterPanda('kungfupanda', 30)
document.getElementById('kungfupanda').addEventListener('click',buy_kungfupanda);
const buy_ninjapanda =  () => acheterPanda('ninjapanda', 40)
document.getElementById('ninjapanda').addEventListener('click',buy_ninjapanda);


const buy_secateur =  () => acheterPanda('secateurs', 20)
document.getElementById('secateurs').addEventListener('click',buy_secateur);
const buy_machette =  () => acheterPanda('machette', 30)
document.getElementById('machette').addEventListener('click',buy_machette);
const buy_tronconneuse =  () => acheterPanda('tronconneuse', 40)
document.getElementById('tronconneuse').addEventListener('click',buy_tronconneuse);
const buy_pandatravail =  () => acheterPanda('pandatravail', 40)
document.getElementById('pandatravail').addEventListener('click',buy_pandatravail);



function bamboustack() {
    var clics = 1;

    if (secateurAchete) {
        clics = 2;
    } 
    if (machetteAchetee) {
        clics = 3;
    } 
    if (tronconneuseAchetee) {
        clics = 4;
    }

    bambou += clics;
    document.getElementById("bambou").textContent = bambou;
    playSound("coupeSound");
}

let limites = {
    'secateurs': 1,
    'machette': 1,
    'tronconneuse': 1,
    'pandatravail': 1,
    'bebepanda': 20,
    'grospanda': 20,
    'kungfupanda': 20,
    'ninjapanda': 20
}

function acheterPanda(pandaType, bambouRequis) {
    
    if (bambou >= bambouRequis) {
        bambou -= bambouRequis;

        switch (pandaType) {
            case 'secateurs':
                secateurAchete = true;
                mettreAJourCurseur();
                playSound("epeeSound");
                break;

            case 'machette':
                machetteAchetee = true;
                mettreAJourCurseur();
                playSound("epeeSound");
                break;

            case 'tronconneuse':
                tronconneuseAchetee = true;
                mettreAJourCurseur();
                playSound("epeeSound");
                break;

            case 'pandatravail':
                pandatravail = true;
                setInterval(bambouAutoClique, 1000);
                playSound("pandaSound");
                break;


            case 'bebepanda':
                if(bebepandanourie <limites[pandaType] ) {
                    bebepandanourie += 1;
                    document.getElementById('bebepandanourie').textContent = bebepandanourie;
                    playSound("pandaSound");
                } else {
                    let n = document.getElementById('bbpanda');
                    n.removeEventListener('click', buy_bbpanda );
                    n.classList.add('disabled')
                }
                break;
                case 'grospanda':
                    if(grospandanourie <limites[pandaType] ) {
                        grospandanourie += 1;
                        document.getElementById('grospandanourie').textContent = grospandanourie;
                        playSound("pandaSound");
                    } else {
                        let b = document.getElementById('grospanda');
                        b.removeEventListener('click', buy_grospanda );
                        b.classList.add('disabled')
                    }
                    break;
                case 'kungfupanda':
                    if(kungfupandanourie <limites[pandaType] ) {
                        kungfupandanourie += 1;
                        document.getElementById('kungfupandanourie').textContent = kungfupandanourie;
                        playSound("pandaSound");
                    } else {
                        let v = document.getElementById('kungfupanda');
                        v.removeEventListener('click', buy_kungfupanda );
                        v.classList.add('disabled')
                    }
                    break;
                case 'ninjapanda':
                    if(ninjapandanourie <limites[pandaType] ) {
                        ninjapandanourie += 1;
                        document.getElementById('ninjapandanourie').textContent = ninjapandanourie;
                        playSound("pandaSound");
                    } else {
                        let c = document.getElementById('ninjapanda');
                        c.removeEventListener('click', buy_ninjapanda );
                        c.classList.add('disabled')
                    }
                    break;
            default:
                console.log('Panda inconnu');
                break;
        }
        document.getElementById('bambou').textContent = bambou;
    } else {
        console.log('Bambous insuffisants pour acheter ce panda');
    }
}

function mettreAJourCurseur() {
    let image = ""
    if (secateurAchete) {
        image = "secateur16.png";
    } else if (machetteAchetee) {
        image = "machette16.png";
    } else if (tronconneuseAchetee) {
        image = "tronconneuse16.png"; 
    }
    if(image == "") {
        document.body.style.cursor = "default";
    }
    else {  
        document.body.style.cursor = "url('"+image +"'), auto";
    }
}



function bambouAutoClique() {
    bambou += 2;
    document.getElementById("bambou").textContent = bambou;
}

function toggleSound() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var toggleSoundButton = document.getElementById('toggleSoundButton');
    
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleSoundButton.innerHTML = '<img src="sound-on.png" alt="Sound">';
    } else {
        backgroundMusic.pause();
        toggleSoundButton.innerHTML = '<img src="sound-off.png" alt="Sound">';
    }
}

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

