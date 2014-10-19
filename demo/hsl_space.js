var canvas = document.getElementById( 'canvas' );
var ctx = canvas.getContext( '2d' );

var HUE_SEG_NUM = 360;
var HUE_GAP = 360 / HUE_SEG_NUM;
var SAT_SEG_NUM = 100;
var SAT_GAP = 100 / SAT_SEG_NUM;
var RADIUS = 100;
var CIRCLE_CENTER = { x: 110, y: 110};
var CIRCLE_CENTER2 = { x: 320, y: 110};
var LIGHTNESS = '50%';

/**
 * 画点
 */
function drawPoint( x, y, width, style ){
    ctx.save();
    ctx.fillStyle = style;
    ctx.fillRect( x + 0.5, y + 0.5, width, width );
    ctx.restore();
}

var hue;
var sat;
var radius;
var radian;
var x;
var y;
var hsl;
var count = 0;

for( hue = 0; hue <= 359; hue += HUE_GAP ){

    for( sat = 0; sat <= 100; sat += SAT_GAP ){
        radian = Math.PI / 180 * hue;
        radius = RADIUS * sat / 100;
        x = radius * Math.cos( radian );
        y = radius * Math.sin( radian );
        hsl = 'hsl( ' + hue + ', ' + sat + '%, ' + LIGHTNESS + ' )';

        (function( x, y, width, hsl ){

            count++;
            setTimeout(function(){
                drawPoint( x, y, width, hsl );
            }, count * 0.2 );

        })( x + CIRCLE_CENTER.x, y + CIRCLE_CENTER.y, 1, hsl );
    }
}

count = 0;

for( y = CIRCLE_CENTER2.y - RADIUS; y <= CIRCLE_CENTER2.y + RADIUS; y++ ){

    for( x = CIRCLE_CENTER2.x - RADIUS; x <= CIRCLE_CENTER2.x + RADIUS; x++ ){


        // 计算和圆心的距离
        sat = Math.sqrt( Math.pow( x - CIRCLE_CENTER2.x, 2 ) + Math.pow( y - CIRCLE_CENTER2.y, 2 ) );

        if( sat <= RADIUS ){

            sat = ( sat / RADIUS * 100 ) + '%';
            hue = Math.atan2( ( y - CIRCLE_CENTER2.y ), ( x - CIRCLE_CENTER2.x ) ) * 180 / Math.PI;
            hsl = 'hsl( ' + hue + ', ' + sat + ', ' + LIGHTNESS + ')';

            (function( x, y, width, hsl ){

                count++;
                setTimeout(function(){
                    drawPoint( x, y, width, hsl );
                }, count * 0.2 );

            })( x, y, 1, hsl );
        }
    }
}

ctx.fillStyle = 'red';
ctx.fillRect( CIRCLE_CENTER2.x, CIRCLE_CENTER2.y, 1, 1 );