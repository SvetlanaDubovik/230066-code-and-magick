'use strict';

window.renderStatistics = function (ctx, names, times) {
    //тень от облака
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(150, 50);
    //верхняя часть
    ctx.bezierCurveTo(180, 10, 350, 10, 370, 50);
    ctx.bezierCurveTo(390, 10, 560, 10, 560, 60);
    //правая часть
    ctx.bezierCurveTo(590, 55, 620, 130, 590, 170);
    ctx.bezierCurveTo(610, 180, 620, 270, 560, 290);
    //нижняя часть
    ctx.bezierCurveTo(550, 320, 370, 320, 370, 290);
    ctx.bezierCurveTo(350, 320, 180, 320, 160, 290);
    //левая часть
    ctx.bezierCurveTo(100, 280, 100, 190, 130, 170);
    ctx.bezierCurveTo(100, 140, 120, 55, 160, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //облако
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(150, 40);
    //верхняя часть
    ctx.bezierCurveTo(170, 0, 340, 0, 360, 40);
    ctx.bezierCurveTo(380, 0, 550, 0, 550, 50);
    //правая часть
    ctx.bezierCurveTo(580, 45, 610, 120, 580, 160);
    ctx.bezierCurveTo(600, 170, 610, 260, 550, 280);
    //нижняя часть
    ctx.bezierCurveTo(540, 310, 360, 310, 360, 280);
    ctx.bezierCurveTo(340, 310, 170, 310, 150, 280);
    //левая часть
    ctx.bezierCurveTo(90, 270, 90, 180, 120, 160);
    ctx.bezierCurveTo(90, 130, 110, 45, 150, 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 170, 40);
    ctx.fillText('Список результатов:', 170, 60);

    var max = -1;
    var colWidth = 40;
    var colDistanse = 50;
    var playerColor = 'rgba(255, 0, 0, 1)';
    var colHeight = 0;
    var initialX = 190;
    var initialY = 250;
    var histogramHeight = 150;

    for (i = 0; i < times.length; i++) {
        if (times[i] > max) {
            max = times[i];
        }
    }

    for (var i = 0; i < times.length; i++) {
        if (names[i].indexOf('Вы') != -1) {
            ctx.fillStyle = playerColor;
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255,' + (Math.random() * 0.9 + 0.1) + ')';
        }
        colHeight = -(histogramHeight * times[i] / max);
        ctx.fillRect(initialX + colWidth * i + colDistanse * i, initialY, colWidth, colHeight);
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], initialX + colWidth * i + colDistanse * i, initialY + 20);
        ctx.fillText(Math.round(times[i]), initialX + (colWidth + colDistanse) * i, initialY - 10 + colHeight);

    }
};