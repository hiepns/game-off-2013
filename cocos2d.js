/*jshint globalstrict: true*/
"use strict";

/*global cc*/

/** Created by Sebastián R. Vansteenkiste. See "Readme.md" for more information **/

(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        //CLASS_RELEASE_MODE:true, //se supone que levanta la performance
        box2d:false,
        chipmunk:false,
        showFPS:false,
        frameRate:60,
        loadExtension:false,
        renderMode:1,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        tag:'gameCanvas', //the dom element to run cocos2d on
        //engineDir:'../Cocos2d-html5/cocos2d/',
        SingleEngineFile:'Cocos2d-html5-v2.2.1.min.js',
        appFiles:[
            'src/resource.js',
            'txt/en.js',
            'txt/es.js',
            /*'src/SceFin.js',*/
            'src/SceJuego.js',
            'src/SceInicial.js'
        ]
    };

    if(!d.createElement('canvas').getContext){
        var s = d.createElement('div');
        s.innerHTML = '<h2>Your browser does not support HTML5 canvas!</h2>' +
            '<p>Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.Click the logo to download.</p>' +
            '<a href="http://www.google.com/chrome" target="_blank"><img src="http://www.google.com/intl/zh-CN/chrome/assets/common/images/chrome_logo_2x.png" border="0"/></a>';
        var p = d.getElementById(c.tag).parentNode;
        p.style.background = 'none';
        p.style.border = 'none';
        p.insertBefore(s);

        d.body.style.background = '#ffffff';
        return;
    }
    
    var lienzo = d.getElementById('canvas');
    
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        /*********Delete this section if you have packed all files into one*******/
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
            s
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'platform/jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/

            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        d.ccConfig = c;
        s.id = 'cocos2d-html5';
        d.body.appendChild(s);
        //else if single file specified, load singlefile
    });
})();
