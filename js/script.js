
//Active Navbar Menu
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + ']').classList.add('active');
            })
        }
    })
}

//Konversi
function convert() {
    var input = document.getElementById("input").value.trim();
    if (input === "" || isNaN(input)) {
        alert("WARNING : Input Tidak Boleh Kosong Dan Harus Berupa Angka atau Nilai");
        return;
    }

    var celcius = parseFloat(document.getElementById("input").value);
    var farenheit = (celcius * (9/5)) + 32;
    document.getElementById("hasil").value = farenheit;
    document.getElementById("cara").value = `${celcius} °C x (9/5) + 32 = ${farenheit} °F`;
}

//reset
function reset() {
    document.getElementById("input").value = "";
    document.getElementById("hasil").value = "";
    document.getElementById("cara").value = "";
}

//Reverse
function reverse() {

    var farenheit = parseFloat(document.getElementById("hasil").value);
    var celcius = (farenheit - 32) / (9/5) ;
    document.getElementById("input").value = celcius;
    document.getElementById("cara").value = `(${farenheit} °F - 32) / (9/5) = ${celcius} °C`;
}

