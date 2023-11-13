let overlyy = document.getElementById('overlay');


function end_opens() {
    if (num == 1) {
        var div1 = document.getElementById('isID');
        var div2 = document.getElementById('isID2');
        var div3 = document.getElementById('isID3');

        if (div2.style.display === 'block' || div3.style.display === 'block' || div1.style.display === 'block') {
            div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none';
        }
    }
    else if (num == 2) {
        var div4 = document.getElementById('isID4');
        var div5 = document.getElementById('isID5');
        var div6 = document.getElementById('isID6');

        if (div5.style.display === 'block' || div6.style.display === 'block' || div4.style.display === 'block') {
            div4.style.display = 'none';
            div5.style.display = 'none';
            div6.style.display = 'none';
        }
    }

    else if (num == 3) {
        var div7 = document.getElementById('isID7');
        var div8 = document.getElementById('isID8');
        var div9 = document.getElementById('isID9');

        if (div8.style.display === 'block' || div9.style.display === 'block' || div7.style.display === 'block') {
            div7.style.display = 'none';
            div8.style.display = 'none';
            div9.style.display = 'none';
        }
    }
}


function end_opens2() {
    if (num == 1) {
        var div1 = document.getElementById('isID');
        var div2 = document.getElementById('isID2');
        var div3 = document.getElementById('isID3');

        if (div2.style.display === 'block' || div3.style.display === 'block' || div1.style.display === 'block') {
            div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none';
        }
    }

    else if (num == 2) {
        var div4 = document.getElementById('isID4');
        var div5 = document.getElementById('isID5');
        var div6 = document.getElementById('isID6');

        if (div5.style.display === 'block' || div6.style.display === 'block' || div4.style.display === 'block') {
            div4.style.display = 'none';
            div5.style.display = 'none';
            div6.style.display = 'none';
        }
    }

    else if (num == 3) {
        var div7 = document.getElementById('isID7');
        var div8 = document.getElementById('isID8');
        var div9 = document.getElementById('isID9');

        if (div8.style.display === 'block' || div9.style.display === 'block' || div7.style.display === 'block') {
            div7.style.display = 'none';
            div8.style.display = 'none';
            div9.style.display = 'none';
        }
    }
}










// first three
function open_techies(box) {
    var div1 = document.getElementById('isID');
    var div2 = document.getElementById('isID2');
    var div3 = document.getElementById('isID3');

    // Close div2 if it is open
    if (div2.style.display === 'block' || div3.style.display === 'block') {
        div2.style.display = 'none';
        div3.style.display = 'none';
    }

    // Toggle div1
    div1.style.display = (div1.style.display === 'none' || div1.style.display === '') ? 'block' : 'none';
}

function open_techies2(box) {
    var div1 = document.getElementById('isID');
    var div2 = document.getElementById('isID2');
    var div3 = document.getElementById('isID3');

    // Close div1 if it is open
    if (div1.style.display === 'block' || div3.style.display === 'block') {
        div1.style.display = 'none';
        div3.style.display = 'none';
    }

    // Toggle div2
    div2.style.display = (div2.style.display === 'none' || div2.style.display === '') ? 'block' : 'none';
}

function open_techies3(box) {
    var div1 = document.getElementById('isID');
    var div2 = document.getElementById('isID2');
    var div3 = document.getElementById('isID3');

    // Close div1 if it is open
    if (div1.style.display === 'block' || div2.style.display === 'block') {
        div1.style.display = 'none';
        div2.style.display = 'none';
    }

    // Toggle div2
    div3.style.display = (div3.style.display === 'none' || div3.style.display === '') ? 'block' : 'none';
}





// second 3
// first three
function open_techies4(box) {
    var div4 = document.getElementById('isID4');
    var div5 = document.getElementById('isID5');
    var div6 = document.getElementById('isID6');

    // Close div5 if it is open
    if (div5.style.display === 'block' || div6.style.display === 'block') {
        div5.style.display = 'none';
        div6.style.display = 'none';
    }

    // Toggle div4
    div4.style.display = (div4.style.display === 'none' || div4.style.display === '') ? 'block' : 'none';
}

function open_techies5(box) {
    var div4 = document.getElementById('isID4');
    var div5 = document.getElementById('isID5');
    var div6 = document.getElementById('isID6');

    // Close div4 if it is open
    if (div4.style.display === 'block' || div6.style.display === 'block') {
        div4.style.display = 'none';
        div6.style.display = 'none';
    }

    // Toggle div5
    div5.style.display = (div5.style.display === 'none' || div5.style.display === '') ? 'block' : 'none';
}

function open_techies6(box) {
    var div1 = document.getElementById('isID4');
    var div2 = document.getElementById('isID5');
    var div3 = document.getElementById('isID6');

    // Close div1 if it is open
    if (div1.style.display === 'block' || div2.style.display === 'block') {
        div1.style.display = 'none';
        div2.style.display = 'none';
    }

    // Toggle div2
    div3.style.display = (div3.style.display === 'none' || div3.style.display === '') ? 'block' : 'none';
}






// final 3
function open_techies7(box) {
    var div7 = document.getElementById('isID7');
    var div8 = document.getElementById('isID8');
    var div9 = document.getElementById('isID9');

    // Close div8 if it is open
    if (div8.style.display === 'block' || div9.style.display === 'block') {
        div8.style.display = 'none';
        div9.style.display = 'none';
    }

    // Toggle div7
    div7.style.display = (div7.style.display === 'none' || div7.style.display === '') ? 'block' : 'none';
}

function open_techies8(box) {
    var div7 = document.getElementById('isID7');
    var div8 = document.getElementById('isID8');
    var div9 = document.getElementById('isID9');

    // Close div7 if it is open
    if (div7.style.display === 'block' || div9.style.display === 'block') {
        div7.style.display = 'none';
        div9.style.display = 'none';
    }

    // Toggle div8
    div8.style.display = (div8.style.display === 'none' || div8.style.display === '') ? 'block' : 'none';
}

function open_techies9(box) {
    var div7 = document.getElementById('isID7');
    var div8 = document.getElementById('isID8');
    var div9 = document.getElementById('isID9');

    // Close div7 if it is open
    if (div7.style.display === 'block' || div8.style.display === 'block') {
        div7.style.display = 'none';
        div8.style.display = 'none';
    }

    // Toggle div8
    div9.style.display = (div9.style.display === 'none' || div9.style.display === '') ? 'block' : 'none';
}




document.addEventListener('DOMContentLoaded', function () {
    var div1 = document.getElementById('isID');
    var div2 = document.getElementById('isID2');
    var div3 = document.getElementById('isID3');

    var div4 = document.getElementById('isID4');
    var div5 = document.getElementById('isID5');
    var div6 = document.getElementById('isID6');


    // Close div1 if mouse leaves it
    div1.addEventListener('mouseleave', function () {
        div1.style.display = 'none';
    });

    // Close div2 if mouse leaves it
    div2.addEventListener('mouseleave', function () {
        div2.style.display = 'none';
    });

    // Close div3 if mouse leaves it
    div3.addEventListener('mouseleave', function () {
        div3.style.display = 'none';
    });

    div4.addEventListener('mouseleave', function () {
        div4.style.display = 'none';
    });

    div5.addEventListener('mouseleave', function () {
        div5.style.display = 'none';
    });

    div6.addEventListener('mouseleave', function () {
        div6.style.display = 'none';
    });

});






