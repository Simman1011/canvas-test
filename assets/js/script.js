var primary1 = 'background: linear-gradient(0deg, rgba(0,196,255,1) 0%, rgba(216,250,250,1) 100%);'; //Blue Ball
var primary2 = 'background: linear-gradient(0deg, rgba(135,20,250,1) 0%, rgba(221,189,254,1) 100%);'; //Purple Ball
var primary3 = 'background: linear-gradient(0deg, rgba(181,23,158,1) 0%, rgba(249,169,238,1) 100%);'; //Rose Ball
var primary4 = 'background: linear-gradient(0deg, rgba(255,255,0,1) 0%, rgba(255,255,255,1) 100%);'; //Yellow Ball

var canvas = document.getElementById('canvas');

for (let line = 1; line < 11; line++) {
    var div = document.createElement('div');
    div.id = "line" + line;
    div.className = "line";
    canvas.appendChild(div);
}

for (var i = 0; i < 20; i++) {
    for (var x = 0; x < 3; x++) {
        $("#line1").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 1059 411 Q 981 421, 1076 400 T 1212 0');"></div>`);
        $("#line1").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `200ms; offset-path: path('M 1052 400 Q 995 415, 1095 426 T 1221 0');"></div>`);
        $("#line1").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 1041 422 Q 998 431, 1080 432 T 1231 0');"></div>`);

        $("#line2").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `200ms; offset-path: path('M 1012 714 Q 1005 410, 1110 215 T 1202 0');"></div>`);
        $("#line2").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 1024 728 Q 1025 429, 1125 230 T 1220 0');"></div>`);
        $("#line2").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 1001 700 Q 1019 420, 1118 225 T 1215 0');"></div>`);

        $("#line3").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 780 725 Q 999 351, 1093 185 T 1191 0');"></div>`);
        $("#line3").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 773 703 Q 983 344, 1088 170 T 1178 0');"></div>`);
        $("#line3").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 768 716 Q 976 337, 1079 167 T 1182 0');"></div>`);

        $("#line4").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 583 723 Q 1036 219, 1077 131 T 1178 0');"></div>`);
        $("#line4").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `200ms; offset-path: path('M 595 725 Q 1043 233, 1095 125 T 1195 0');"></div>`);
        $("#line4").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `500ms; offset-path: path('M 578 719 Q 1029 221, 1082 119 T 1182 0');"></div>`);

        $("#line5").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 289 331 Q 925 551, 969 320 T 1164 0');"></div>`);
        $("#line5").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 280 326 Q 905 545, 958 315 T 1158 0');"></div>`);
        $("#line5").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 275 318 Q 912 539, 951 310 T 1149 0');"></div>`);

        $("#line6").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 428 271 Q 951 429, 961 279 T 1132 0');"></div>`);
        $("#line6").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 439 266 Q 946 415, 965 285 T 1141 0');"></div>`);
        $("#line6").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 445 282 Q 959 431, 969 293 T 1149 0');"></div>`);

        $("#line7").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 10 411 Q 521 167, 719 218 T 1045 0');"></div>`);
        $("#line7").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 25 405 Q 516 171, 726 222 T 1031 0');"></div>`);
        $("#line7").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 33 420 Q 532 182, 731 239 T 1052 0');"></div>`);

        $("#line8").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 14 -121 Q 435 222, 729 124 T 1061 0');"></div>`);
        $("#line8").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 6 -106 Q 425 203, 716 108 T 1055 0');"></div>`);
        $("#line8").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 22 -110 Q 410 212, 701 115 T 1059 0');"></div>`);

        $("#line9").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 16 310 Q 29 102, 409 71 T 971 0');"></div>`);
        $("#line9").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 23 325 Q 35 116, 416 84 T 983 0');"></div>`);
        $("#line9").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 30 341 Q 41 129, 421 99 T 991 0');"></div>`);

        $("#line10").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 10 362 Q 131 132, 429 150 T 1012 0');"></div>`);
        $("#line10").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 26 357 Q 125 146, 420 165 T 1026 0');"></div>`);
        $("#line10").append(`<div class="ball" style="` + primary1 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 30 371 Q 141 159, 438 171 T 1029 0');"></div>`);

        // $("#line11").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `100ms; offset-path: path('M 0 -2000 Q 52 262, 422 131 T 1010 0');"></div>`);
        // $("#line11").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `400ms; offset-path: path('M 0 -2000 Q 56 258, 426 136 T 1015 0');"></div>`);
        // $("#line11").append(`<div class="ball" style="` + primary2 + `;animation-delay:` + i + `s; animation-duration: 2` + x + `300ms; offset-path: path('M 0 -2000 Q 59 252, 430 141 T 1021 0');"></div>`);
    }
}