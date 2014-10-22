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

    drawDashLine: function( ctx, x1, y1, x2, y2, dashLength ){
        ctx.beginPath();
        var deltaX = x2 - x1;
        var deltaY = y2 - y1;
        var dashNum = Math.floor( Math.sqrt( deltaX * deltaX + deltaY * deltaY ) ) / dashLength;
        var segX = deltaX / dashNum;
        var segY = deltaY / dashNum;

        for( var i = 0; i < dashNum; i++ ){
            if( i % 2 == 0 ){
                ctx.moveTo( x1 + segX * i, y1 + segY * i );
            }
            else {
                ctx.lineTo( x1 + segX * i, y1 + segY * i );
            }
        }

        ctx.stroke();
    },

    roundedRect: function( ctx, x, y, width, height, radius ){
        ctx.beginPath();
        ctx.moveTo( x + ( width > 0 ? radius : -1 * radius ), y );
        ctx.arcTo( x + width, y, x + width, y + height, radius );
        ctx.arcTo( x + width, y + height, x, y + height, radius );
        ctx.arcTo( x, y + height, x, y, radius );
        ctx.arcTo( x, y, x + width, y, radius );
    },

    windowToCanvas: function(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }
};