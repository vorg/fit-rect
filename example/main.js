var Window          = require('pex-sys/Window');
var PerspCamera     = require('pex-cam/PerspCamera');
var Arcball         = require('pex-cam/Arcball');
var createCube      = require('primitive-cube');
var glslify         = require('glslify-promise');
var isBrowser       = require('is-browser');
var fitRect    = require('../');

Window.create({
    settings: {
        width:  1280,
        height: 720,
        type: '2d'
    },
    init: function() {
    },
    draw: function() {
        var ctx = this.getContext();

        var W = this.getWidth();
        var H = this.getHeight();
        var R = W * 0.4;

        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = 2;

        ctx.fillRect(0, 0, W, H);

        var rect = [0, 0, 16, 9];
        var target = [300, 100, 1280-300*2, 720-100*2]

        ctx.fillStyle = '#DDDDDD';
        ctx.fillRect(target[0], target[1], target[2], target[3])

        var contained = fitRect(rect, target);

        ctx.strokeStyle = '#FF0000';
        ctx.strokeRect(contained[0], contained[1], contained[2], contained[3])

        var covered = fitRect(rect, target, 'cover');

        ctx.strokeStyle = '#00DDAA';
        ctx.strokeRect(covered[0], covered[1], covered[2], covered[3])
    }
})
