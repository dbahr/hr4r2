/* globals console define require React async */


//https://github.com/volojs/create-template
//http://www.webdeveasy.com/optimize-requirejs-projects/
//TODO: http://stackoverflow.com/questions/19827912/package-html-templates-in-require-js-optimizer
//TODO: http://stackoverflow.com/questions/8780775/text-files-in-the-path-configuration-file
//TODO: https://github.com/philix/jsx-requirejs-plugin


if (!('onhashchange' in window)) {
    alert("The browser does *not* support the hashchange event!");
}


requirejs.config({

    enforceDefine: false,
    waitSeconds: 7,
    baseUrl: '.',  // . (dot) shoud mean cwd

    bundles: {
        'optimized/bundles/common':[]

        ,

        'optimized/bundles/home-view':[]

        ,

        'optimized/bundles/art-view':[]
    },

    paths: {
        'rxjs': '//cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx',
        'async': '//cdnjs.cloudflare.com/ajax/libs/async/2.1.4/async',
        'react-dom': '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom',
        'react': '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-with-addons',
        'socket.io': '//cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.2/socket.io',
        '@hot-reload-handler': 'js/hot-reload-handler',
        '@hot-reloader': 'js/hot-reloader',
        'tslib': 'vendor/tslib',
        'immutable': '//cdnjs.cloudflare.com/ajax/libs/immutable/3.8.1/immutable',
        'react-redux': '//cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux',
        'redux': '//cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux',
        'list-table': 'js/views/list-table',
        'firebase': '//www.gstatic.com/firebasejs/3.6.2/firebase',
        'redux-thunk': '//cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.2.0/redux-thunk',
        'uuid':'//cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.7/uuid',
        '@redux-store': 'js/data-stores/redux-store'
    },

    map: {
        '*': {
            'CSS_BASE': 'text!css'
        }
    },

    shim: {

        'rxjs': {
            deps: ['tslib']
        }

    }

});


const deps = [
    'react-dom',
    'react',
    'socket.io',
    'async',
    'rxjs',
    'immutable',
    'redux-thunk',
    'firebase',
    'rxjs'
];

require(deps, function () {

    require(['js/application'], function (Application) {
        Application.start();
    });

});




