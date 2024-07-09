// ==UserScript==
// @name         Adblock f-er
// @namespace    none
// @version      0.9
// @description  A basic anti-adblock workaround that can remove or click elements on a website
// @author       many
// @match        https://*/*
// @icon         https://getadblock.com/favicon.ico
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    (() => {
        let oldPushState = history.pushState;
        history.pushState = function pushState() {
            let ret = oldPushState.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };

        let oldReplaceState = history.replaceState;
        history.replaceState = function replaceState() {
            let ret = oldReplaceState.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };

        window.addEventListener('popstate', () => {
            window.dispatchEvent(new Event('locationchange'));
        });
    })();
    let sites = {
        /*
        'example.com': { // website domain, can be regex.
            remove: ['.some-class','#some-element'], // Hide these elements (used for ads) - (DOES NOT REMOVE THEM, JUST HIDES THEM)
            click: ['.class','#element'], // Click these elements (used for cookie consent)
            interaction: true, // Move mouse cursor to trigger `onmousemove` ads
            timeout: 2000, // In MS, how long to wait before doing anything
            interval: 0, // In MS, how long to wait before redoing everything (Ignored if 0 or missing) (used if ads are added onscroll or timeout)
            onChange: true, // Redo everything once page changes, but no refresh/reload occurs (IE: Discourse)
            antiVignette: true, // Auto fix google vignette based issues
            trueRemove: true // Actually remove elements instead of hiding them (WARNING: Might trigger adblock detection!)
            background: '#ffffff' // Set a background-color, overflow:scroll, and position (used for custom fullpage ads)
        },
        */
        '.*\.?fandom\.com': {
            remove: ['.top-ads-container','.bottom-ads-container','#WikiaBar','.notifications-placeholder','.gpt-ad'],
            interaction: true,
            timeout: 2000,
            trueRemove: true
        },
    }

    let interval = null;

    let hostname = document.location.hostname;

    let loaded = false;

    function cleanup() {
        console.log("Running cleanup...");
        if(sites[hostname].interaction) {
            document.body.dispatchEvent(new MouseEvent('mousemove'));
        }

        if(sites[hostname].remove) {
            let selectors = sites[hostname].remove;

            selectors.forEach(function(selector) {
                let elements = document.querySelectorAll(selector);

                console.log(selector, elements);

                elements.forEach(function(elem) {
                    if (!sites[hostname].trueRemove) {
                        elem.style.visibility = 'hidden';
                        elem.style.width = '1px';
                        elem.style.height = '1px';
                        elem.style.overflow = 'hidden';
                        elem.style.opacity = 0;
                    } else {
                        elem.remove();
                    }
                });
            });
        }

        if(sites[hostname].background) {
            document.body.style.background = sites[hostname].background;
            document.body.style.overflow = 'scroll';
            document.body.style.position = 'static';
        }

        if(sites[hostname].click) {
            let selectors = sites[hostname].click;

            selectors.forEach(function(selector) {
                let element = document.querySelector(selector);

                if(!!element) {
                    element.click();
                }
            });
        }

        if(sites[hostname].antiVignette && window.location.hash && window.location.hash == "#google_vignette") {
            window.location.href = window.location.href.split("#")[0]
        }
    }

    if (!Object.keys(sites).indexOf(hostname) >= 0) {
        for (const site in sites) {
            const regex = new RegExp(site, "i");
            if(regex.test(hostname)) {
                hostname = site;
            }
        }
    }

    if(Object.keys(sites).indexOf(hostname) >= 0) {

        let timeout = 0;
        if(sites[hostname].timeout) {
            timeout = sites[hostname].timeout;
        }

        window.setTimeout(function(){
            cleanup();
        }, timeout);

        if(sites[hostname].interval && !interval) {
            interval = window.setInterval(function(){
                cleanup();
            }, sites[hostname].interval);
        }

        if(sites[hostname].onChange && !loaded) {
            loaded = true;
            window.addEventListener('locationchange', function () {
                window.setTimeout(function(){
                    cleanup();
                }, timeout);
            });
        }
    }
})();
(function() {
 
    var enable_debug = false;
 
    // Anti-AdBlocker Pattern to Search
    var adblock_pattern = /ad-block|adblock|ad block|bloqueur|bloqueador|Werbeblocker|&#1570;&#1583;&#1576;&#1604;&#1608;&#1603; &#1576;&#1604;&#1587;|блокировщиком/i;
    var disable_pattern = /kapat|disabl|désactiv|desactiv|desativ|deaktiv|detect|enabled|turned off|turn off|&#945;&#960;&#949;&#957;&#949;&#961;&#947;&#959;&#960;&#959;&#943;&#951;&#963;&#951;|&#1079;&#1072;&#1087;&#1088;&#1077;&#1097;&#1072;&#1090;&#1100;|állítsd le|publicités|рекламе|verhindert|advert|kapatınız/i;
 
    var tagNames_pattern = /div|section|iframe/i;
 
    var is_core_protected = false;
 
    var classes = [];
 
    // HELPER Functions
    //-----------------
    function debug( msg, val ) {
        if ( !enable_debug ) return;
        console.log( '%c ANTI-ADBLOCKER ','color: white; background-color: red', msg );
        if ( val === undefined ) return;
        if ( val.nodeType === Node.ELEMENT_NODE )
        {
            console.log ( 'TagName: ' + val.nodeName + ' | Id: ' + val.id + ' | Class: ' + val.classList );
            console.log ( val );
        } else {
            console.log ( val );
        }
    }
 
    function addStyle(str) {
        var style = document.createElement('style');
        style.innerHTML = str;
        document.body.appendChild( style );
    }
 
    function randomInt( min, max )
    {
        // min and max included
        if ( max === undefined ) {
            max = min;
            min = 0;
        }
        return Math.floor(min + Math.random() * (max - min + 1));
    }
 
    function getRandomName( size )
    {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var i;
        var name = '';
        for (i = 0; i < (size||randomInt(10,20)); i++)
        {
            name += chars.charAt( randomInt(0,chars.length) );
        }
        return name;
    }
 
    function addRandomClass( el ) {
        let name = getRandomName();
        el.classList.add( name );
        return name;
    }
 
    /* Thanks to RuiGuilherme  */
    const enableContextMenu = () => {
        window.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
        }, true);
    }
 
    function protectCore() {
        if ( is_core_protected ) return;
        is_core_protected = true;
        // Protect RemoveChild
        // Blocks the possibility of being able to remove the BODY or the HEAD
 
        var $_removeChild = unsafeWindow.Node.prototype.removeChild;
        unsafeWindow.Node.prototype.removeChild = function( node ) {
            if ( node.nodeName == 'HEAD' || node.parentNode.nodeName == 'HEAD'){
                return debug( 'An attempt to DELETE the element ' + node.nodeName + ' was blocked', node );
            }
            else if ( node.nodeName == 'BODY' ){
                if ( node.parentNode == document.body.firstElementChild ) {
                    return debug( 'An attempt to DELETE the element ' + node.nodeName + ' from ' + node.parentNode.nodeName + ' was blocked', node );
                }
                return debug( 'An attempt to DELETE the element ' + node.nodeName + ' was blocked', node );
            }
            $_removeChild.apply( this, arguments );
        };
 
        // Protect innerHTML
 
        var $_innerHTML = unsafeWindow.Node.prototype.innerHTML;
        unsafeWindow.Node.prototype.innerHTML = function( node ) {
            if ( node.nodeName == 'BODY' ) {
                return debug( 'An attempt to CHANGE the content of the element ' + node.nodeName + ' was blocked\n"' + node.textContent+'"' );
            }
            $_innerHTML.apply( this, arguments );
        };
 
        var $_innerHTML_set = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').set;
 
        Object.defineProperty(Element.prototype, 'innerHTML', {
            set: function (value) {
                if ( this.nodeName == 'BODY' ){
                    return debug( 'An attempt to CHANGE the content of the element ' + this.nodeName + ' was blocked\n"' + this.textContent+'"\n"' + value + '"' );
                }
                //Call the original setter
                return $_innerHTML_set.call(this, value);
            }
        });
 
        debug( 'Core Protected');
    }
 
    function isElementBlur( el )
    {
        var style = window.getComputedStyle( el );
        var filter = style.getPropertyValue( 'filter' );
        return ( (/blur/i).test( filter ) );
    }
 
    function isElementFixed( el )
    {
        var style = window.getComputedStyle( el );
        return ( style.getPropertyValue( 'position' ) == 'fixed' );
    }
 
    function isOverflowHidden( el )
    {
        var style = window.getComputedStyle( el );
        return ( style.getPropertyValue( 'overflow' ) == 'hidden' );
    }
    function isNotHidden( el )
    {
        var style = window.getComputedStyle( el );
        return ( style.getPropertyValue( 'display' ) != 'none' );
    }
 
    function isBlackoutModal( el )
    {
        var style = window.getComputedStyle( el );
        var position = style.getPropertyValue( 'position' );
        var top = parseInt( style.getPropertyValue( 'top' ) );
        var left = parseInt( style.getPropertyValue( 'left' ) );
        var right = parseInt( style.getPropertyValue( 'right' ) );
        var bottom = parseInt( style.getPropertyValue( 'bottom' ) );
        var zindex = style.getPropertyValue( 'z-index' );
        if ( isNaN( zindex ) ) zindex = 0;
        return parseInt( zindex ) > 1 && position == 'fixed' && ( ( el.offsetHeight > window.innerHeight - 50 && el.offsetWidth > window.innerWidth - 20 ) || (top == 0 && left == 0 && right == 0 && bottom == 0) );
    }
 
    function isModalWindows( el )
    {
        return isElementFixed ( el ) && ( (adblock_pattern.test( el.textContent ) && disable_pattern.test( el.textContent )) || el.tagName == 'IFRAME' );
    }
 
    function unblockScroll()
    {
        if ( isOverflowHidden( document.body ) )
        {
            document.body.setAttribute('style', (document.body.getAttribute('style')||'').replace('overflow: visible !important;','') + 'overflow: visible !important;');
            document.body.classList.add( 'scroll_on' );
            debug( 'Scroll Unblocked from BODY tag');
        }
        if ( isOverflowHidden( document.htmllTag ) )
        {
            document.html.setAttribute('style', (document.html.getAttribute('style')||'').replace('overflow: visible !important;','') + 'overflow: visible !important;');
            document.html.classList.add( 'scroll_on' );
            debug( 'Scroll Unblocked from HTML tag ');
        }
    }
 
    // Main Functions
    function removeBackStuff()
    {
        document.querySelectorAll( 'div,section' ).forEach( ( el ) => {
            if ( isBlackoutModal( el ) )
            {
                debug( 'Blackout Modal Detected & Removed: ', el);
                el.setAttribute('style', (el.getAttribute('style')||'') + ';display: none !important;');
                el.classList.add( 'hide_modal' );
            }
            else if ( isElementBlur( el ) )
            {
                debug( 'Blur Element Detected & Deblurred: ', el);
                el.classList.add( 'un_blur' );
            }
        });
        setTimeout( unblockScroll, 500);
    }
 
    function checkModals()
    {
        debug( 'Checking Modals' );
        var modalFound = false;
        // Only check common used html tag names
        document.querySelectorAll( 'div,section,iframe' ).forEach( ( el ) => {
            if ( isModalWindows( el ) && isNotHidden( el ) )
            {
                modalFound = true;
                removeModal( el );
            }
        });
 
        if ( modalFound )
        {
            setTimeout( removeBackStuff, 150);
        }
    }
 
    function removeModal( el, isNew )
    {
        // Skip the already processed elements
        if ( (new RegExp(classes.join('|'))).test( el.classList ) ) {
            //debug( 'Modal already added : ', el );
            return;
        }
 
        // Definde a random class name to hide the element
        // ( so that it is not so easy to detect the class name )
        var class_name = '';
        class_name = addRandomClass( el );
        classes.push( class_name );
 
        // Hide the element through a high priority incorporating the sentence in the style parameter
        el.setAttribute('style', (el.getAttribute('style')||'') + ';display: none !important;');
 
        // Also, add the random class name to the element
        // (in case there is a script that eliminates the previous statement)
        addStyle( '.' + class_name + '{ display: none !important; }' );
 
        debug( 'Modal Detected & Removed: ', el);
 
        if ( isNew )
        {
            setTimeout( removeBackStuff, 150);
        }
    }
 
    window.addEventListener('DOMContentLoaded', (event) => {
 
        classes.push( getRandomName() );
 
        document.html = document.getElementsByTagName('html')[0];
 
        // Mutation Observer
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
 
        // Create an observer instance
        var observer = new MutationObserver( (mutations) => {
            mutations.forEach( (mutation) => {
                if ( mutation.addedNodes.length ) {
                    Array.prototype.forEach.call( mutation.addedNodes, ( el ) => {
                        // skip unusual html tag names
                        if ( !tagNames_pattern.test ( el.tagName ) ) return;
 
                        // Check if element is an Anti-Adblock Modal Windows
                        if ( isModalWindows( el ) && isNotHidden( el ) )
                        {
                            debug( 'OnMutationObserver: ', el );
                            removeModal( el, true );
                        }
                    });
                }
            });
        });
        // Observer
        observer.observe(document, {
            childList : true,
            subtree : true
        });
 
        // enable context menu again
        enableContextMenu();
 
        // First check with a little delay
        setTimeout( function() {
            checkModals();
        }, 50 );
 
        addStyle( 'body.scroll_on, html.scroll_on { overflow: visible !important; } .hide_modal { display: none !important; } .un_blur { -webkit-filter: blur(0px) !important; filter: blur(0px) !important; }' );
 
    });
 
    window.addEventListener('load', (event) => {
        // Second check, when page is complete loaded ( just in case )
        checkModals();
    });
 
    // Protect Core Functions
    protectCore();
 
})();

 
(function(window) {
    var debug = false;
 
    var fuzzAdBlock = function(options) {
        if(options !== undefined)
            this.setOption(options);
 
        var self = this;
        window.addEventListener('load', function() {
            setTimeout(function() {
                if(self._options.checkOnLoad === true)
                    self.check(false);
            }, 1);
        }, false);
 
        // hotfix
        var self = this;
        this.debug = {
            set: function(x){ debug = !!x; return self;},
            get: function(){ return debug; }
        }
    }
 
    fuzzAdBlock.prototype = {
        setOption : function(options, value) {
            if(value !== undefined) {
                var key = options;
                options = {};
                options[key] = value;
            }
 
            for(option in options)
                this._options[option] = options[option];
 
            return this;
        },
 
        _options : {
            checkOnLoad:    true,
            resetOnEnd:     true,
        },
 
        _var : {
            triggers: []
        },
 
        check : function(ignore) {
            this.emitEvent(false);
            return true;
        },
 
        clearEvent : function() {
            this._var.triggers = [];
        },
 
        emitEvent : function(detected) {
            if(detected === false) {
                var fns = this._var.triggers;
                for (var i = 0; i < fns.length; i += 1) {
                    if (fns[i] instanceof Function) { fns[i](); }
                }
                if(this._options.resetOnEnd === true)
                    this.clearEvent();
            }
            return this;
        },
 
        on : function(detected, fn) {
            if(detected === false)
                this._var.triggers.push(fn);
            return this;
        },
 
        onDetected : function(fn) {
            return this;
        },
 
        onNotDetected : function(fn) {
            return this.on(false, fn);
        }
    };
 
    var fuzz = new fuzzAdBlock();
    for (var field in fuzz) {
        Object.defineProperty(fuzz, field, {value: fuzz[field], configurable: false});
    }
    Object.defineProperties(window, {fuzzAdBlock : { value: fuzz, enumerable: true, writable: false }});
    Object.defineProperties(window, {blockAdBlock : { value: fuzz, enumerable: true, writable: false }});
})(window);
