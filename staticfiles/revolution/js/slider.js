/*slider1*/
 
        var tpj = jQuery;

        var revapi1;

        if(window.RS_MODULES === undefined) window.RS_MODULES = {};
        if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
        RS_MODULES.modules["revslider11"] = {init:function() {
            window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
            if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
            window.revapi1 = jQuery(window.revapi1);
            if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
            revapi1.revolutionInit({
                    revapi:"revapi1",
                    DPR:"dpr",
                    sliderLayout:"fullwidth",
                    visibilityLevels:"1240,1240,778,480",
                    gridwidth:"1920,1920,778,480",
                    gridheight:"750,750,450,320",
                    lazyType:"smart",
                    perspective:600,
                    perspectiveType:"global",
                    editorheight:"750,768,450,320",
                    responsiveLevels:"1240,1240,778,480",
                    progressBar:{disableProgressBar:true},
                    navigation: {
                        wheelCallDelay:1000,
                        onHoverStop:false,
                        arrows: {
                            enable:true,
                            style:"hesperiden",
                            hide_onmobile:true,
                            hide_under:778,
                            hide_onleave:true,
                            left: {
                                h_offset:30
                            },
                            right: {
                                h_offset:30
                            }
                        }
                    },
                    viewPort: {
                        global:true,
                        globalDist:"-200px",
                        enable:false
                    },
                    fallbacks: {
                        allowHTML5AutoPlayOnAndroid:true
                    },
            });
            
        }} // End of RevInitScript

        if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};


/*slider2*/

        var tpj = jQuery;
        if(window.RS_MODULES === undefined) window.RS_MODULES = {};
        if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
        RS_MODULES.modules["revslider21"] = {init:function() {
            window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
            if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
            window.revapi2 = jQuery(window.revapi2);
            if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
            revapi2.revolutionInit({
                    revapi:"revapi2",
                    DPR:"dpr",
                    sliderLayout:"fullwidth",
                    visibilityLevels:"1240,1240,778,480",
                    gridwidth:"1240,1240,778,480",
                    gridheight:"750,750,450,350",
                    perspective:600,
                    perspectiveType:"global",
                    editorheight:"750,768,450,350",
                    responsiveLevels:"1240,1240,778,480",
                    progressBar:{disableProgressBar:true},
                    navigation: {
                        wheelCallDelay:1000,
                        onHoverStop:false,
                        arrows: {
                            enable:true,
                            style:"hesperiden",
                            hide_onmobile:true,
                            hide_under:778,
                            hide_onleave:true,
                            left: {
                                h_offset:30
                            },
                            right: {
                                h_offset:30
                            }
                        }
                    },
                    viewPort: {
                        global:false,
                        globalDist:"-200px",
                        enable:false
                    },
                    fallbacks: {
                        allowHTML5AutoPlayOnAndroid:true
                    },
            });
            
        }} // End of RevInitScript
        if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
