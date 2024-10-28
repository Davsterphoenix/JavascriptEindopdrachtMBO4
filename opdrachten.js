function changeColor() {
    // Opdracht 1
    // Haalt de kleurwaarden op en converteert ze naar gehele getallen
    // parseInt converteert een string naar een geheel getal, dit moest ik opzoeken
    const divCB = document.getElementById("colorBox");
    const Red = document.getElementById("red");
    const Green = document.getElementById("green");
    const Blue = document.getElementById("blue");
    const redValue = parseInt(Red.value) || 0;
    const greenValue = parseInt(Green.value) || 0;
    const blueValue = parseInt(Blue.value) || 0;
    //de || zorgt ervoor dat als er geen waarde is, er 0 wordt ingevuld
    //omdat ik anders alle vakjes in moet vullen want er staat anders NULL
    divCB.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';

}
function suggestSomethingToWatch() {
    var selectedFiction = document.getElementById("genre").value;
    var action = document.getElementById("action").checked;
    var animation = document.getElementById("animation").checked;
    var series = document.getElementById("series").checked;
    var movie = document.getElementById("movie").checked;

    if (selectedFiction === "scifi") {
        if (action && series) {
            document.getElementById("suggestion").value = "Altered Carbon";
        } else if (action && !series) {
            document.getElementById("suggestion").value = "Men in Black";
        } else {
            document.getElementById("suggestion").value = "Excuses, geen suggestie gevonden.";
        }
    } else if (selectedFiction === "fantasy" && movie && !animation) {
        document.getElementById("suggestion").value = "The lord of the rings";
    } else {
        document.getElementById("suggestion").value = "Excuses, geen suggestie gevonden.";
    }
}




    // Opdracht 2

function shootPaintballGun() {
    // Opdracht 3
    const BX_SHBG_Text = document.getElementById("paintballs");
    let paintballs = parseInt(BX_SHBG_Text.value) || 0;
    let raakschiet = 0;
    console.log(paintballs);
    while (paintballs > 0) {
        console.log("Pew pew pew!");
        alert(`Pang! Nog ${paintballs} te gaan.`);
        raakschiet++;
        paintballs--;
        if (raakschiet === 5) {
            alert("Auw!");
            raakschiet = 0;
        }
        if (paintballs === 0) {
            //BX_SHBG_Text.value = "Geen verfballen meer over.";
            return;
        }  
    }
}
function outputVehicleColorCombinations() {
    const colorSelect = document.getElementById("color");
    const vehicleSelect = document.getElementById("vehicle");

    const selectedColor = colorSelect.value;
    const selectedVehicle = vehicleSelect.value;

    for (let i = 0; i < colorSelect.options.length; i++) {
        const color = colorSelect.options[i].value;

        for (let j = 0; j < vehicleSelect.options.length; j++) {
            const vehicle = vehicleSelect.options[j].value;

            if (color === selectedColor && vehicle === selectedVehicle) {
                alert(`${color} ${vehicle}`);
                //Dus hij loopt zegmaar alle mogelijkheden af en stopt bij de juiste combinatie
                return;
            }
        }
    }
}



function executeMarioAction() {
    // Opdracht 5
    const action = document.getElementById("actions").value;
    switch (action) {
        case "jump":
            jump();
            break;
        case "fireball":
            fireBall();
            break;
        case "gameover":
            gameOver();
            break;
        default:
            marioDefault();
    }
}

// ----- Deze functies krijg je cadeau om te gebruiken bij opdracht 5 ----- 
function jump() {
    document.getElementById("mario").src = "images/jumpingmario.png";
}

function fireBall() {
    document.getElementById("mario").src = "images/mariofireball.png";
}

function gameOver() {
    document.getElementById("mario").src = "images/gameover.jpg";
}

function marioDefault() {
    document.getElementById("mario").src = "images/mario.png";
}
 ``