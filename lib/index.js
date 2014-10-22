var Utils = {

    drawGrid: function( ctx, color, stepx, stepy ){

        var x;
        var y;

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;

        // 先画垂直方向的线
        for( x = stepx + 0.5; x <= ctx.canvas.width; x+= stepx ){

            ctx.beginPath();
            ctx.moveTo( x, 0 );
            ctx.lineTo( x, canvas.height );
            ctx.stroke();
        }

        for( y = stepy + 0.5; y <= ctx.canvas.height; y+= stepy ){
            ctx.beginPath();
            ctx.moveTo( 0, y );
            ctx.lineTo( canvas.width, y );
            ctx.stroke();
        }

        ctx.restore();
    },

    fillRing: function( ctx, x, y, innerRadius, outerRadius, fillStyle ){

        ctx.save();
        ctx.beginPath();
        ctx.arc( x, y, outerRadius, 0, Math.PI * 2, false );
        ctx.arc( x, y, innerRadius, 0, Math.PI * 2, true );
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.restore();
    },

    strokeRing: function( ctx, x, y, innerRadius, outerRadius, strokeStyle ){
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.arc( x, y, outerRadius, 0, Math.PI * 2, false );
        ctx.stroke();
        ctx.beginPath();
        ctx.arc( x, y, innerRadius, 0, Math.PI * 2, true );
        ctx.stroke();
        ctx.restore();
    },

    counterClockWiseRect: function( x, y, width, height ){
        ctx.beginPath();
        ctx.moveTo( x,y );
        ctx.lineTo( x, y + height );
        ctx.lineTo( x + width, y + height );
        ctx.lineTo( x + width, y );
        ctx.lineTo( x, y );
        ctx.closePath();
    },

    windowToCanvas: function(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }
};