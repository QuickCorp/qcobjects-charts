!function(e) {
    "object" == typeof module && "undefined" != typeof module.exports ? module.exports = e : e()
}((function() {
    (window.webpackJsonpFusionCharts = window.webpackJsonpFusionCharts || []).push([[14], {
        1193: function(e, t, o) {
            "use strict";
            var r = o(187);
            t.__esModule = !0,
            t["default"] = void 0;
            var a = r(o(1194));
            t.Maps = a["default"];
            var n = {
                name: "maps",
                type: "package",
                requiresFusionCharts: !0,
                extension: function(e) {
                    return e.addDep(a["default"])
                }
            };
            t["default"] = n
        },
        1194: function(e, t, o) {
            "use strict";
            var r = o(191)
              , a = o(187);
            t.__esModule = !0,
            t["default"] = void 0;
            var n = a(o(207))
              , l = a(o(519))
              , i = o(208)
              , s = r(o(431))
              , c = a(o(195))
              , h = o(200)
              , d = o(193)
              , u = a(o(1195))
              , p = a(o(420))
              , g = a(o(1006))
              , f = a(o(1010))
              , m = (0,
            d.extend2)({
                foregroundcolor: "333333",
                foregroundalpha: "100",
                foregrounddarkcolor: "111111",
                foregrounddarkalpha: "100",
                foregroundlightcolor: "666666",
                foregroundlightalpha: "100",
                backgroundlightcolor: "FFFFFF",
                backgroundlightalpha: "100",
                backgroundlightangle: 90,
                backgroundlightratio: "",
                backgroundcolor: "FFFFCC",
                backgroundalpha: "100",
                backgrounddarkcolor: "ffcc66",
                backgrounddarkalpha: "100",
                backgrounddarkangle: 270,
                backgrounddarkratio: "",
                shadow: 1
            }, s)
              , b = {
                basefontcolor: "foregroundcolor",
                bordercolor: "foregrounddarkcolor",
                borderalpha: "foregrounddarkalpha",
                bgcolor: "backgroundlightcolor",
                bgalpha: "backgroundlightalpha",
                bgangle: "backgroundlightangle",
                bgratio: "backgroundlightratio",
                canvasbordercolor: "foregrounddarkcolor",
                canvasborderalpha: "foregrounddarkalpha",
                canvasbgcolor: "backgroundlightcolor",
                canvasbgalpha: "backgroundlightalpha",
                canvasbgangle: "backgroundlightangle",
                canvasbgratio: "backgroundlightratio",
                tooltipbordercolor: "foregrounddarkcolor",
                tooltipborderalpha: "foregrounddarkalpha",
                tooltipbgcolor: "backgroundlightcolor",
                tooltipbgalpha: "backgroundlightalpha",
                tooltipfontcolor: "foregroundcolor",
                legendbordercolor: "foregrounddarkcolor",
                legendborderalpha: "foregrounddarkalpha",
                markerbordercolor: "foregroundlightcolor",
                markerborderalpha: "foregroundlightalpha",
                markerfillcolor: "backgrounddarkcolor",
                markerfillalpha: "backgrounddarkalpha",
                markerfillangle: "backgrounddarkangle",
                markerfillratio: "backgrounddarkratio",
                plotfillcolor: "backgroundcolor",
                plotfillalpha: "backgroundalpha",
                plotfillangle: "backgroundangle",
                plotfillratio: "backgroundratio",
                plothoverfillcolor: "backgrounddarkcolor",
                plothoverfillalpha: "backgrounddarkalpha",
                plothoverfillangle: "backgrounddarkangle",
                plothoverfillratio: "backgrounddarkratio",
                plotbordercolor: "foregroundcolor",
                plotborderalpha: "foregroundalpha",
                shadow: "shadow"
            }
              , k = {
                getMapName: function() {
                    return this.jsVars.instanceAPI.getName().toLowerCase()
                },
                getEntityList: function() {
                    var e, t, o, r, a, n = this.jsVars.instanceAPI.getDatasets() || [], l = n.length, i = [];
                    for (e = 0; e < l; e++)
                        if ("entities" === (o = n[e] || []).getName()) {
                            t = o;
                            break
                        }
                    for (e in l = (r = t.components.data).length,
                    r)
                        r.hasOwnProperty(e) && (a = (r[e] || {}).config || {},
                        i.push({
                            id: a.id,
                            originalId: a.originalId || a.id,
                            label: a.label,
                            shortlabel: a.shortLabel,
                            value: a.value,
                            formattedValue: a.formattedValue,
                            toolText: a.toolText
                        }));
                    return i
                },
                getMapAttribute: function() {
                    var e = this;
                    return (0,
                    h.raiseWarning)(this, "12061210581", "run", "JavaScriptRenderer~getMapAttribute()", 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".'),
                    e.getChartAttribute.apply(e, arguments)
                },
                exportMap: function() {
                    var e = this;
                    return (0,
                    h.raiseWarning)(this, "12061210581", "run", "JavaScriptRenderer~exportMap()", 'Use of deprecated "exportMap()". Replace with "exportChart()".'),
                    e.exportChart && e.exportChart.apply(e, arguments)
                },
                addMarker: function(e) {
                    var t, o, r, a = this.jsVars.instanceAPI.getDatasets() || [], n = a.length;
                    for (t = 0; t < n; t++)
                        if ("markers" === (o = a[t] || []).getName()) {
                            r = o;
                            break
                        }
                    r && !r.addMarkerItem(e) && (0,
                    h.raiseWarning)(this, "1309264086", "run", "MapsRenderer~addMarker()", "Failed to add marker. Check the options and try again.")
                },
                updateMarker: function(e, t) {
                    var o, r, a, n, l = this.jsVars.instanceAPI.getDatasets() || [], i = l.length;
                    for (r = 0; r < i; r++)
                        if ("markers" === (a = l[r] || []).getName()) {
                            n = a;
                            break
                        }
                    n && e && (o = (e + v).toLowerCase(),
                    n.updateMarkerItem(o, t))
                },
                removeMarker: function(e) {
                    var t, o, r, a, n = this.jsVars.instanceAPI.getDatasets() || [], l = n.length;
                    for (o = 0; o < l; o++)
                        if ("markers" === (r = n[o] || []).getName()) {
                            a = r;
                            break
                        }
                    e && (t = (e + v).toLowerCase(),
                    a._removeMarkerItem(t))
                }
            }
              , v = ""
              , C = window.Math
              , y = C.min
              , F = C.max
              , w = function(e) {
                function t(t, o) {
                    var r, a;
                    for (a in (r = e.call(this) || this).subpalette = d.BLANKSTRING,
                    r.key = d.BLANKSTRING,
                    r.index = o,
                    t)
                        r.subpalette = m[t[a]],
                        r[a] = r.subpalette instanceof Array ? r.subpalette[o] : r.subpalette,
                        r.key = a;
                    return r
                }
                return (0,
                n["default"])(t, e),
                t
            }(i.ComponentInterface)
              , A = function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).friendlyName = "Map",
                    t.revision = 1,
                    t.hasCanvas = !0,
                    t.standaloneInit = !1,
                    t.defaultDatasetType = "maps",
                    t.defaultSeriesType = "geo",
                    t.fireGroupEvent = !0,
                    t.legendposition = "right",
                    t.hasGradientLegend = !0,
                    t.isMap = !0,
                    t.defaultPaletteOptions = {
                        paletteColors: [["A6A6A6", "CCCCCC", "E1E1E1", "F0F0F0"], ["A7AA95", "C4C6B7", "DEDFD7", "F2F2EE"], ["04C2E3", "66E7FD", "9CEFFE", "CEF8FF"], ["FA9101", "FEB654", "FED7A0", "FFEDD5"], ["FF2B60", "FF6C92", "FFB9CB", "FFE8EE"]],
                        bgColor: ["FFFFFF", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
                        bgAngle: [270, 270, 270, 270, 270],
                        bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
                        bgAlpha: ["100", "60,50", "40,20", "20,10", "30,30"],
                        toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
                        toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
                        baseFontColor: ["555555", "60634E", "025B6A", "A15E01", "68001B"],
                        tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
                        trendColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
                        plotFillColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
                        borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
                        borderAlpha: [50, 50, 50, 50, 50]
                    },
                    t.colorPaletteMap = b,
                    t.eiMethods = k,
                    t.registerFactory("legend", f["default"], ["canvas"]),
                    t.registerFactory("axis", d.stubFN, ["canvas"]),
                    t.registerFactory("colormanager-decider", g["default"], ["legend"]),
                    t.registerFactory("dataset", u["default"], ["colormanager-decider"]),
                    t.registerFactory("canvas", p["default"]),
                    t
                }
                (0,
                n["default"])(t, e);
                var o = t.prototype;
                return o._checkInvalidSpecificData = function() {
                    return this.config.invalid = !1,
                    !1
                }
                ,
                o.__setDefaultConfig = function() {
                    e.prototype.__setDefaultConfig.call(this);
                    var t = this.config;
                    !t.baseWidth && (t.baseWidth = 400),
                    !t.baseHeight && (t.baseHeight = 300),
                    !t.baseScaleFactor && (t.baseScaleFactor = 1)
                }
                ,
                t.getName = function() {
                    return "maps"
                }
                ,
                t.getType = function() {
                    return "chartAPI"
                }
                ,
                o.getName = function() {
                    return this.config.name || "GEO"
                }
                ,
                o.getType = function() {
                    return "chartAPI"
                }
                ,
                o.configureAttributes = function(t) {
                    var o, r = this.getChildren("colorPalette") && this.getChildren("colorPalette")[0];
                    o = t.chart = t.chart || t.graph || t.map || {},
                    this.jsonData = t,
                    r || (r = new w(this.colorPaletteMap,(o.palette > 0 && o.palette < 6 ? o.palette : (0,
                    d.pluckNumber)(this.paletteIndex, 1)) - 1),
                    this.attachChild(r, "colorPalette")),
                    this.config.skipCanvasDrawing = !0,
                    e.prototype.configureAttributes.call(this, t),
                    this._parseBackgroundCosmetics()
                }
                ,
                o.parseChartAttr = function(t) {
                    var o, r, a, n, l, i = this.jsonData, s = i.chart || i.map, c = i.markers, h = new w(this.colorPaletteMap,(s.palette > 0 && s.palette < 6 ? s.palette : (0,
                    d.pluckNumber)(this.paletteIndex, 1)) - 1), u = (0,
                    d.pluck)(s.entitybordercolor, s.bordercolor, h.plotbordercolor), p = (0,
                    d.pluck)(s.entityfillcolor, s.fillcolor, h.plotfillcolor), g = (0,
                    d.pluck)(s.entityfillalpha, s.fillalpha, h.plotfillalpha), f = (0,
                    d.pluck)(s.entityfillratio, s.fillratio, h.plotfillratio), m = (0,
                    d.pluck)(s.entityfillangle, s.fillangle, h.plotfillangle), b = (0,
                    d.pluck)(s.nullentityfillcolor, s.nullentitycolor, p), k = (0,
                    d.pluckNumber)(s.usevaluesformarkers, i.markers && i.markers.items && i.markers.items.length, !(i.markers && i.markers.application && i.markers.application.length && i.markers.definition && i.markers.definition.length));
                    e.prototype.parseChartAttr.call(this, t),
                    (o = this.config).origMarginTop = (0,
                    d.pluckNumber)(s.charttopmargin, s.maptopmargin, 11),
                    o.origMarginLeft = (0,
                    d.pluckNumber)(s.chartleftmargin, s.mapleftmargin, 11),
                    o.origMarginBottom = (0,
                    d.pluckNumber)(s.chartbottommargin, s.mapbottommargin, 11),
                    o.origMarginRight = (0,
                    d.pluckNumber)(s.chartrightmargin, s.maprightmargin, 11),
                    o.labelsOnTop = (0,
                    d.pluckNumber)(s.entitylabelsontop, 1),
                    r = (l = o.style).inCancolor,
                    a = l.inCanfontFamily,
                    n = l.inCanfontSize,
                    o.entityOpts = {
                        baseScaleFactor: o.baseScaleFactor,
                        dataLabels: {
                            style: {
                                fontFamily: a,
                                fontSize: n,
                                lineHeight: l.inCanLineHeight,
                                color: (0,
                                d.pluck)(s.entitylabelcolor, l.inCancolor),
                                bgColor: (0,
                                d.pluck)(s.entitylabelbgcolor) || v,
                                borderColor: (0,
                                d.pluck)(s.entitylabelbordercolor) || v
                            }
                        },
                        fillColor: p,
                        fillAlpha: g,
                        fillRatio: f,
                        fillAngle: m,
                        borderColor: u,
                        borderAlpha: (0,
                        d.pluck)(s.entityborderalpha, s.borderalpha, this.borderAlpha, "100"),
                        borderThickness: (0,
                        d.pluckNumber)(s.showentityborder, s.showborder, 1) ? (0,
                        d.pluckNumber)(s.entityborderthickness, s.borderthickness, 1) : 0,
                        scaleBorder: (0,
                        d.pluckNumber)(s.scaleentityborder, s.scaleborder, 0),
                        hoverFillColor: (0,
                        d.pluck)(s.entityfillhovercolor, s.hoverfillcolor, s.hovercolor, h.plothoverfillcolor),
                        hoverFillAlpha: (0,
                        d.pluck)(s.entityfillhoveralpha, s.hoverfillalpha, s.hoveralpha, h.plothoverfillalpha),
                        hoverFillRatio: (0,
                        d.pluck)(s.entityfillhoverratio, s.hoverfillratio, s.hoverratio, h.plothoverfillratio),
                        hoverFillAngle: (0,
                        d.pluck)(s.entityfillhoverangle, s.hoverfillangle, s.hoverangle, h.plothoverfillangle),
                        hoverBorderThickness: (0,
                        d.pluck)(s.entityborderhoverthickness, s.hoverborderthickness),
                        hoverBorderColor: (0,
                        d.pluck)(s.entityborderhovercolor, u, h.plotbordercolor),
                        hoverBorderAlpha: (0,
                        d.pluck)(s.entityborderhoveralpha, h.plotborderalpha),
                        nullEntityColor: b,
                        nullEntityAlpha: (0,
                        d.pluck)(s.nullentityfillalpha, s.nullentityalpha, g),
                        nullEntityRatio: (0,
                        d.pluck)(s.nullentityfillratio, s.nullentityratio, f),
                        nullEntityAngle: (0,
                        d.pluck)(s.nullentityfillangle, s.nullentityangle, m),
                        connectorColor: (0,
                        d.pluck)(s.labelconnectorcolor, s.connectorcolor, r),
                        connectorAlpha: (0,
                        d.pluck)(s.labelconnectoralpha, s.connectoralpha, "100"),
                        connectorThickness: (0,
                        d.pluckNumber)(s.labelconnectorthickness, s.borderthickness, 1),
                        showHoverEffect: (0,
                        d.pluckNumber)(s.showentityhovereffect, s.usehovercolor, s.showhovereffect, 1),
                        hoverOnNull: (0,
                        d.pluckNumber)(s.hoveronnull, s.entityhoveronnull, 1),
                        labelPadding: (0,
                        d.pluckNumber)(s.labelpadding, 5),
                        showLabels: (0,
                        d.pluckNumber)(s.showlabels, 1),
                        labelsOnTop: (0,
                        d.pluckNumber)(s.entitylabelsontop, 1),
                        includeNameInLabels: (0,
                        d.pluckNumber)(s.includenameinlabels, 1),
                        includeValueInLabels: (0,
                        d.pluckNumber)(s.includevalueinlabels, 0),
                        useSNameInTooltip: (0,
                        d.pluckNumber)(s.usesnameintooltip, 0),
                        useShortName: (0,
                        d.pluckNumber)(s.usesnameinlabels, 1),
                        labelSepChar: (0,
                        d.pluck)(s.labelsepchar, ", "),
                        showTooltip: (0,
                        d.pluckNumber)(s.showentitytooltip, s.showtooltip, 1),
                        tooltipSepChar: (0,
                        d.pluck)(s.tooltipsepchar, ", "),
                        tooltext: s.entitytooltext,
                        hideNullEntities: (0,
                        d.pluckNumber)(s.hidenullentities, 0),
                        showHiddenEntityBorder: (0,
                        d.pluckNumber)(s.showhiddenentityborder, 1),
                        showNullEntityBorder: (0,
                        d.pluckNumber)(s.shownullentityborder, 1),
                        hiddenEntityColor: (0,
                        d.pluck)(s.hiddenentitycolor, s.hiddenentityfillcolor, s.hiddenentityalpha || s.hiddenentityfillalpha ? b : "ffffff"),
                        hiddenEntityAlpha: (0,
                        d.pluck)(s.hiddenentityalpha, s.hiddenentityfillalpha, .001),
                        shadow: (0,
                        d.pluckNumber)(s.showshadow, this.defaultPlotShadow, h.shadow)
                    },
                    o.markerOpts = {
                        dataLabels: {
                            style: {
                                fontFamily: (0,
                                d.pluck)(s.markerfont, a),
                                fontSize: (0,
                                d.pluckNumber)(s.markerfontsize, parseInt(n, 10)),
                                fontColor: (0,
                                d.pluck)(s.markerlabelcolor, s.markerfontcolor, r),
                                labelBgColor: (0,
                                d.pluck)(s.markerlabelbgcolor) || v,
                                labelBorderColor: (0,
                                d.pluck)(s.markerlabelbordercolor) || v
                            }
                        },
                        showTooltip: (0,
                        d.pluckNumber)(s.showmarkertooltip, s.showtooltip, 1),
                        showLabels: (0,
                        d.pluckNumber)(s.showmarkerlabels, s.showlabels, 1),
                        showHoverEffect: (0,
                        d.pluckNumber)(s.showmarkerhovereffect, 1),
                        labelPadding: (0,
                        d.pluck)(s.markerlabelpadding, "5"),
                        labelWrapWidth: (0,
                        d.pluckNumber)(s.markerlabelwrapwidth, 0),
                        labelWrapHeight: (0,
                        d.pluckNumber)(s.markerlabelwrapheight, 0),
                        fillColor: (0,
                        d.pluck)(s.markerfillcolor, s.markerbgcolor, h.markerfillcolor),
                        fillAlpha: (0,
                        d.pluck)(s.markerfillalpha, h.markerfillalpha),
                        fillAngle: (0,
                        d.pluck)(s.markerfillangle, h.markerfillangle),
                        fillRatio: (0,
                        d.pluck)(s.markerfillratio, h.markerfillratio),
                        fillPattern: (0,
                        d.pluck)(s.markerfillpattern, h.markerbgpattern),
                        hoverFillColor: s.markerfillhovercolor,
                        hoverFillAlpha: s.markerfillhoveralpha,
                        hoverFillRatio: s.markerfillhoverratio,
                        hoverFillAngle: s.markerfillhoverangle,
                        borderThickness: (0,
                        d.pluck)(s.markerborderthickness, 1),
                        borderColor: (0,
                        d.pluck)(s.markerbordercolor, h.markerbordercolor),
                        borderAlpha: (0,
                        d.pluckNumber)(s.markerborderalpha, h.markerborderalpha),
                        hoverBorderThickness: s.markerborderhoverthickness,
                        hoverBorderColor: s.markerborderhovercolor,
                        hoverBorderAlpha: s.markerborderhoveralpha,
                        radius: (0,
                        d.pluckNumber)(s.markerradius && (0,
                        d.trimString)(s.markerradius), 7),
                        shapeId: (0,
                        d.pluck)(s.defaultmarkershape, "circle"),
                        labelSepChar: (0,
                        d.pluck)(s.labelsepchar, ", "),
                        tooltipSepChar: (0,
                        d.pluck)(s.tooltipsepchar, ", "),
                        autoScale: (0,
                        d.pluckNumber)(s.autoscalemarkers, 0),
                        tooltext: (0,
                        d.pluck)(c && c.tooltext, s.markertooltext),
                        dataEnabled: k,
                        valueToRadius: (0,
                        d.pluckNumber)(s.markerradiusfromvalue, 1),
                        valueMarkerAlpha: (0,
                        d.pluck)(s.valuemarkeralpha, "75"),
                        hideNull: (0,
                        d.pluckNumber)(s.hidenullmarkers, 0),
                        nullRadius: (0,
                        d.pluckNumber)(s.nullmarkerradius, s.markerradius, 7),
                        adjustViewPort: (0,
                        d.pluckNumber)(s.adjustviewportformarkers, 0),
                        startAngle: (0,
                        d.pluckNumber)(s.markerstartangle, 90),
                        maxRadius: (0,
                        d.pluckNumber)(s.maxmarkerradius, 0),
                        minRadius: (0,
                        d.pluckNumber)(s.minmarkerradius, 0),
                        applyAll: (0,
                        d.pluckNumber)(s.applyallmarkers, 0),
                        shadow: (0,
                        d.pluckNumber)(s.showmarkershadow, s.showshadow, 0)
                    },
                    o.connectorOpts = {
                        showHoverEffect: (0,
                        d.pluckNumber)(s.showconnectorhovereffect, 1),
                        thickness: (0,
                        d.pluckNumber)(s.connectorthickness, s.markerconnthickness, "2"),
                        color: (0,
                        d.pluck)(s.connectorcolor, s.markerconncolor, h.markerbordercolor),
                        alpha: (0,
                        d.pluck)(s.connectoralpha, s.markerconnalpha, "100"),
                        hoverThickness: (0,
                        d.pluckNumber)(s.connectorhoverthickness, s.connectorthickness, s.markerconnthickness, "2"),
                        hoverColor: (0,
                        d.pluck)(s.connectorhovercolor, s.connectorcolor, s.markerconncolor, h.markerbordercolor),
                        hoverAlpha: (0,
                        d.pluck)(s.connectorhoveralpha, s.connectoralpha, s.markerconnalpha, "100"),
                        dashed: (0,
                        d.pluckNumber)(s.connectordashed, s.markerconndashed, 0),
                        dashLen: (0,
                        d.pluckNumber)(s.connectordashlen, s.markerconndashlen, 3),
                        dashGap: (0,
                        d.pluckNumber)(s.connectordashgap, s.markerconndashgap, 2),
                        font: (0,
                        d.pluck)(s.connectorfont, s.markerconnfont, a),
                        fontColor: (0,
                        d.pluck)(s.connectorlabelcolor, s.connectorfontcolor, s.markerconnfontcolor, r),
                        fontSize: (0,
                        d.pluckNumber)(s.connectorfontsize, s.markerconnfontsize, parseInt(n, 10)),
                        showLabels: (0,
                        d.pluckNumber)(s.showconnectorlabels, s.showmarkerlabels, s.showlabels, 1),
                        labelBgColor: (0,
                        d.pluck)(s.connectorlabelbgcolor, s.markerconnlabelbgcolor, h.plotfillcolor),
                        labelBorderColor: (0,
                        d.pluck)(s.connectorlabelbordercolor, s.markerconnlabelbordercolor, h.markerbordercolor),
                        shadow: (0,
                        d.pluckNumber)(s.showconnectorshadow, s.showmarkershadow, s.showshadow, 0),
                        showTooltip: (0,
                        d.pluckNumber)(s.showconnectortooltip, s.showmarkertooltip, s.showtooltip, 1),
                        tooltext: (0,
                        d.pluck)(c && c.connectortooltext, s.connectortooltext),
                        hideOpen: (0,
                        d.pluckNumber)(s.hideopenconnectors, 1)
                    },
                    o.adjustViewPortForMarkers = (0,
                    d.pluckNumber)(s.adjustviewportformarkers, k)
                }
                ,
                o._attachMouseEvents = function() {
                    var e = this.getFromEnv("eventListeners")
                      , o = this.getFromEnv("chart-container");
                    e.push(c["default"].listen(o, d.hasTouch ? "touchstart" : "click", t.searchMouseMove, this)),
                    e.push(c["default"].listen(window.document, d.hasTouch ? "touchstart" : "mousemove", t.searchMouseMove, this))
                }
                ,
                o._dispose = function() {
                    var o = this.getFromEnv("chart-container");
                    d.hasTouch && (c["default"].unlisten(o, "touchstart", t.searchMouseMove),
                    c["default"].unlisten(window.document, "touchstart", t.searchMouseMove)),
                    c["default"].unlisten(o, "click", t.searchMouseMove),
                    c["default"].unlisten(window.document, "mousemove", t.searchMouseMove),
                    e.prototype._dispose.call(this)
                }
                ,
                t.searchMouseMove = function(e) {
                    var t, o = e.data, r = o.config, a = o.getDatasets()[1], n = a && a.getFromEnv("toolTipController"), l = a && a.config.currentToolTip, i = o.config.lastHoveredPoint, s = {};
                    o.getFromEnv("chart-container") && o.config.lastInteractionEvent !== e.originalEvent && (o.config.lastInteractionEvent = e.originalEvent,
                    (t = function(e, t) {
                        var o = (0,
                        d.getMouseCoordinate)(t.getFromEnv("chart-container"), e, t)
                          , r = o.chartX
                          , a = o.chartY
                          , n = t.config
                          , l = n.canvasLeft
                          , i = n.canvasTop
                          , s = n.canvasLeft + n.canvasWidth
                          , c = n.canvasHeight + n.canvasTop;
                        return o.insideCanvas = !1,
                        o.originalEvent = e,
                        r > l && r < s && a > i && a < c && (o.insideCanvas = !0),
                        o
                    }(e, o)) && t.insideCanvas ? (r.lastMouseEvent = e,
                    s = {
                        x: t.chartX,
                        y: t.chartY
                    },
                    o._searchNearestNeighbour(s, e)) : (i && a && a.hoverOutFn(i.element),
                    o.config.lastHoveredPoint = null,
                    n && n.hide(l)))
                }
                ,
                o._searchNearestNeighbour = function(e, t) {
                    var o, r = this.getDatasets()[1];
                    if (r) {
                        if (!r.components.kDTree)
                            return;
                        (o = r.getElement(e)) ? r.highlightPoint(o, t) : r.highlightPoint(!1, t)
                    }
                }
                ,
                o._createLayers = function() {
                    e.prototype._createLayers.call(this),
                    this._attachMouseEvents()
                }
                ,
                o._parseBackgroundCosmetics = function() {
                    var e, t = this.getChildren("background")[0].config, o = this.getChildren("colorPalette")[0], r = this.getFromEnv("chart-attrib");
                    e = t.showBorder = (0,
                    d.pluckNumber)(r.showcanvasborder, 1),
                    t.borderWidth = e ? (0,
                    d.pluckNumber)(r.canvasborderthickness, 1) : 0,
                    t.borderRadius = t.borderRadius = (0,
                    d.pluckNumber)(r.canvasborderradius, 0),
                    t.borderDashStyle = t.borderDashStyle = (0,
                    d.pluckNumber)(r.borderdashed, 0) ? (0,
                    d.getDashStyle)((0,
                    d.pluckNumber)(r.borderdashlen, 4), (0,
                    d.pluckNumber)(r.borderdashgap, 2)) : "none",
                    t.borderAlpha = (0,
                    d.pluck)(r.canvasborderalpha, o.borderAlpha),
                    t.borderColor = t.borderColor = (0,
                    d.convertColor)((0,
                    d.pluck)(r.canvasbordercolor, o && o.borderColor), t.borderAlpha)
                }
                ,
                o._getBackgroundCosmetics = function() {
                    var e = this.getFromEnv("chart-attrib") || this.jsonData.map
                      , t = this.getChildren("colorPalette")[0];
                    return {
                        FCcolor: {
                            color: (0,
                            d.pluck)(e.bgcolor, e.canvasbgcolor, t.bgcolor),
                            alpha: (0,
                            d.pluck)(e.bgalpha, e.canvasbgalpha, t.bgalpha),
                            angle: (0,
                            d.pluck)(e.bgangle, e.canvasbgangle, t.bgangle),
                            ratio: (0,
                            d.pluck)(e.bgratio, e.canvasbgratio, t.bgratio)
                        }
                    }
                }
                ,
                o._parseCanvasCosmetics = function() {
                    e.prototype._parseCanvasCosmetics.call(this);
                    var t = this.config
                      , o = this.getFromEnv("chart-attrib") || this.jsonData.map
                      , r = this.getChildren("canvas")[0].config;
                    t.origMarginTop = (0,
                    d.pluckNumber)(o.maptopmargin, 11),
                    t.origMarginLeft = (0,
                    d.pluckNumber)(o.mapleftmargin, 11),
                    t.origMarginBottom = (0,
                    d.pluckNumber)(o.mapbottommargin, 11),
                    t.origMarginRight = (0,
                    d.pluckNumber)(o.maprightmargin, 11),
                    t.origCanvasLeftMargin = (0,
                    d.pluckNumber)(o.canvasleftmargin, 0),
                    t.origCanvasRightMargin = (0,
                    d.pluckNumber)(o.canvasrightmargin, 0),
                    t.origCanvasTopMargin = (0,
                    d.pluckNumber)(o.canvastopmargin, 0),
                    t.origCanvasBottomMargin = (0,
                    d.pluckNumber)(o.canvasbottommargin, 0),
                    r.canvasBorderRadius = (0,
                    d.pluckNumber)(o.canvasborderradius, 0),
                    r.origCanvasTopPad = (0,
                    d.pluckNumber)(o.canvastoppadding, 0),
                    r.origCanvasBottomPad = (0,
                    d.pluckNumber)(o.canvasbottompadding, 0),
                    r.origCanvasLeftPad = (0,
                    d.pluckNumber)(o.canvasleftpadding, 0),
                    r.origCanvasRightPad = (0,
                    d.pluckNumber)(o.canvasrightpadding, 0)
                }
                ,
                o.preliminaryScaling = function() {
                    for (var e, t, o, r = this.jsonData, a = r.markers && r.markers.items || [], n = a && a.length || 0, l = Infinity, i = Infinity, s = -Infinity, c = -Infinity; n--; )
                        o = a[n],
                        e = Number(o.x),
                        t = Number(o.y),
                        l = y(l, e),
                        i = y(i, t),
                        s = F(s, e),
                        c = F(c, t);
                    return {
                        x: l,
                        y: i,
                        x1: s,
                        y1: c
                    }
                }
                ,
                o.getScalingParameters = function(e, t, o, r) {
                    var a, n, l = e / t, i = o / (e * this.config.baseScaleFactor), s = r / (t * this.config.baseScaleFactor), c = 0, h = 0;
                    return i > s ? (c += (o - r * l) / 2,
                    n = 200 / (t * (a = s))) : (h += (r - o / l) / 2,
                    n = 200 / (e * (a = i))),
                    {
                        scaleFactor: a,
                        strokeWidth: n,
                        translateX: c,
                        translateY: h
                    }
                }
                ,
                o.calculateMarkerBounds = function(e, t, o) {
                    var r, a, n, l, i, s, c, h, d, u, p, g, f = this.config, m = f.markerOpts, b = this.getDatasets(), k = this.getDataLimits(), v = k.dataMin, C = k.dataMax, w = m.hideNull, A = m.nullRadius, E = m.valueToRadius, L = Infinity, x = Infinity, N = -Infinity, S = -Infinity;
                    for (s = 0,
                    h = b.length; s < h; s++)
                        "markers" === (c = b[s]).getName() && (r = c);
                    if (r)
                        for (s in r.calculateMarkerRadiusLimits(),
                        n = (a = r.config || {}).minRadius,
                        l = a.maxRadius,
                        i = r.components && r.components.markerObjs || {})
                            g = (f = i[s].config).definition || {},
                            null !== f.cleanValue ? (E && void 0 === g.radius && (f.radius = n + (l - n) * (f.cleanValue - v) / (C - v)),
                            p = Number(f.radius),
                            d = (Number(g.x) + t) * e,
                            u = (Number(g.y) + o) * e,
                            L = y(L, d - p),
                            x = y(x, u - p),
                            N = F(N, d + p),
                            S = F(S, u + p)) : w ? f.__hideMarker = !0 : null === f.radius && (f.radius = A);
                    return {
                        x: L,
                        y: x,
                        x1: N,
                        y1: S
                    }
                }
                ,
                o._spaceManager = function() {
                    var e, t, o, r, a, n, l, i, s, c, h = this.config, u = this.getChildren("legend") && this.getChildren("legend")[0], p = this.getChildren("gLegend") && this.getChildren("gLegend")[0], g = u && u.config.legendPos ? u.config.legendPos.split("-") : p && p.conf.legendPosition ? p.conf.legendPosition.split("-") : [], f = this.getFromEnv("chart-attrib"), m = h.showBorder, b = h.origMarginLeft, k = h.origMarginTop, v = this.config.baseWidth, C = this.config.baseHeight, y = {}, F = 0, w = 0, A = h.markerOpts, E = h.borderWidth = m ? (0,
                    d.pluckNumber)(f.borderthickness, 1) : 0;
                    this._allocateSpace({
                        top: E,
                        bottom: E,
                        left: E,
                        right: E
                    }),
                    this._allocateSpace(this._manageActionBarSpace && this._manageActionBarSpace(.225 * h.availableHeight) || {}),
                    s = "right" === g[0] || "left" === g[0] ? .3 * h.canvasWidth : .3 * h.canvasHeight,
                    t = g[0] === d.POSITION_TOP || "bottom" === g[0] ? h.canvasHeight : h.canvasWidth,
                    h.showLegend && this._manageLegendSpace(s),
                    e = "bottom" === g[0] || g[0] === d.POSITION_TOP ? .225 * h.canvasHeight : .225 * h.canvasWidth,
                    "top" === g[0] && (k += t - h.canvasHeight),
                    c = this._manageChartMenuBar(e),
                    "left" === g[0] && (b += t - h.canvasWidth),
                    r = h.canvasWidth,
                    a = h.canvasHeight,
                    A.dataEnabled ? (h.adjustViewPortForMarkers ? ((y = this.preliminaryScaling()).x1 > v && (v = y.x1),
                    y.x < 0 && (v += -y.x,
                    F = -y.x),
                    y.y1 > C && (C = y.y1),
                    y.y < 0 && (C += -y.y,
                    w = -y.y),
                    o = this.getScalingParameters(v, C, r, a),
                    l = a,
                    i = r,
                    (y = this.calculateMarkerBounds(o.scaleFactor * this.config.baseScaleFactor, F, w)).x < 0 && (b += -y.x,
                    r += y.x),
                    y.y < 0 && (k += -y.y,
                    a += y.y),
                    y.x1 > i && (r -= y.x1 - i),
                    y.y1 > l && (a -= y.y1 - l)) : (o = this.getScalingParameters(v, C, r, a),
                    this.calculateMarkerBounds(o.scaleFactor * this.config.baseScaleFactor, F, w)),
                    b += F * (o = this.getScalingParameters(v, C, r, a)).scaleFactor * this.config.baseScaleFactor,
                    k += w * o.scaleFactor * this.config.baseScaleFactor) : o = this.getScalingParameters(v, C, r, a),
                    this.config.scalingParams = o,
                    n = o.scaleFactor,
                    o.translateX = o.translateX + b,
                    o.translateY = o.translateY + k + c.top || 0,
                    o.sFactor = n * this.config.baseScaleFactor * 100 / 100,
                    o.transformStr = ["t", o.translateX, ",", o.translateY, "s", n, ",", n, ",0,0"].join(""),
                    this.config.annotationConfig = {
                        id: "Geo",
                        showbelow: 0,
                        autoscale: 0,
                        grpxshift: o.translateX ? o.translateX : 0,
                        grpyshift: o.translateY ? o.translateY : 0,
                        xscale: 100 * (n ? n * this.config.baseScaleFactor : 1),
                        yscale: 100 * (n ? n * this.config.baseScaleFactor : 1),
                        scaletext: 1,
                        options: {
                            useTracker: !0
                        }
                    }
                }
                ,
                o.getDataLimits = function() {
                    var e, t, o = this.getDatasets(), r = o.length, a = +Infinity, n = -Infinity;
                    for (t = 0; t < r; t++)
                        e = o[t].getDataLimits(),
                        a = y(a, e.min),
                        n = F(n, e.max);
                    return {
                        dataMin: a,
                        dataMax: n
                    }
                }
                ,
                o.getEntityPaths = function(e) {
                    var t, o = {}, r = this.config.entities;
                    if (e) {
                        for (t in r)
                            o[t] = r[t];
                        return o
                    }
                    return r
                }
                ,
                o.checkComplete = function() {
                    this.config.entityFlag && this.config.entitiesReady && (this.config.entityFlag = !1,
                    this.config.markersDrawn = !0,
                    this.fireChartInstanceEvent("internal.mapdrawingcomplete", {
                        renderer: this
                    }))
                }
                ,
                t
            }(l["default"]);
            t["default"] = A
        },
        1195: function(e, t, o) {
            "use strict";
            var r = o(187);
            t.__esModule = !0,
            t["default"] = function(e) {
                var t, o = e.getFromEnv("dataSource"), r = o.data || {}, s = o.markers;
                (0,
                a.componentFactory)(e, i["default"], "mapGroup"),
                t = e.getChildren("mapGroup")[0],
                (0,
                a.datasetFactory)(t, n["default"], "entities", 1, [r]),
                s ? (0,
                a.datasetFactory)(t, l["default"], "markers", 1, [s]) : e.getDatasets()[1] && e.getDatasets()[1].remove()
            }
            ;
            var a = o(193)
              , n = r(o(1196))
              , l = r(o(1198))
              , i = r(o(1199))
        },
        1196: function(e, t, o) {
            "use strict";
            var r = o(187);
            t.__esModule = !0,
            t["default"] = void 0;
            var a, n = r(o(207)), l = o(208), i = r(o(269)), s = o(201), c = r(o(1197)), h = o(193), d = o(205), u = r(o(552)), p = (0,
            s.getDep)("redraphael", "plugin"), g = window.navigator.userAgent, f = /msie/i.test(g) && !window.opera, m = window.Math, b = m.min, k = m.max, v = /stroke/gi, C = /AppleWebKit/.test(g), y = m.ceil, F = function(e, t) {
                var o = t ? (0,
                h.extend2)(e.FCcolor, t, !1, !0) : {
                    FCcolor: e
                };
                return o.toString = h.toRaphaelColor,
                o
            }, w = function(e, t) {
                var o, r, a = {};
                if (r = t || 1,
                !e || "object" != typeof e)
                    return a;
                for (o in e)
                    v.test(o) || ("stroke-width" === o ? (a[o] = Number(e[o]) / r,
                    C && (a[o] = a[o] && y(a[o]) || 0)) : a[o] = e[o]);
                return a
            }, A = {
                right: function() {
                    return arguments[1]
                },
                left: function(e, t) {
                    return e - t
                },
                center: function(e, t) {
                    return 2 * b(t, e - t)
                }
            }, E = {
                top: function() {
                    return arguments[1]
                },
                middle: function(e, t) {
                    return 2 * b(t, e - t)
                },
                bottom: function(e, t) {
                    return e - t
                }
            }, L = function(e, t) {
                e && e.graphics.outlines.attr(t)
            };
            (0,
            s.addDep)({
                name: "mapsAnimation",
                type: "animationRule",
                extension: c["default"]
            }),
            (0,
            u["default"])(p);
            var x = function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).components = {},
                    t
                }
                (0,
                n["default"])(t, e);
                var o = t.prototype;
                return o.getName = function() {
                    return "entities"
                }
                ,
                o.getType = function() {
                    return "dataset"
                }
                ,
                o.configureAttributes = function(e) {
                    if (e) {
                        this.JSONData = {
                            data: e
                        };
                        var o, r, n, l, i, s, c, d, u = this, p = u.getFromEnv("chart").jsonData, g = u.config, f = p.map || p.chart, m = [], b = u.getFromEnv("colorManager"), k = p.entitydef || [];
                        for (i in !g.attachEvent && b && (u.addExtEventListener("legendUpdate", (function() {
                            if ("legend" === (d = arguments[1]).component)
                                u.legendInteractivity(d.legendItem, d.colorObj);
                            else
                                for (m = d.maxMinArray,
                                s = m.length,
                                c = 0; c < s; c++)
                                    u.updateEntityColors(m[c].min, m[c].max)
                        }
                        ), b),
                        g.attachEvent = !0),
                        o = p.data && p.data[0] && p.data[0].data ? u.JSONData = p.data[0].data || [] : u.JSONData = p.data || [],
                        g.useSNameAsId = (0,
                        h.pluckNumber)(f.usesnameasid, 0),
                        this._redefineEntities(k),
                        r = u.components.data,
                        g.showTooltip = (0,
                        h.pluckNumber)(f.showtooltip, 1),
                        g.showHoverEffect = (0,
                        h.pluckNumber)(f.showhovereffect, 0),
                        o = function(e) {
                            for (var t, o = e && e.length || 0, r = {}; o--; )
                                (t = e[o]).id !== a && (r[t.id.toLowerCase()] = t);
                            return r
                        }(o),
                        u.calculateDataLimits(),
                        !p.colorrange && u._detachChild(u.getChildren("colorRange") && u.getChildren("colorRange")[0]),
                        r)
                            n = o[i],
                            l = r[i],
                            n ? this._configureEntity(i, l, (0,
                            h.imprint)(t._sanitizeEntityOptions((0,
                            h.extend2)({}, n)), l.config)) : this._configureEntity(i, l, l.config)
                    }
                }
                ,
                o.updateEntityColors = function(e, t) {
                    var o, r, a, n, l, i = this.components.data, s = this.getFromEnv("chart").config.entityOpts, c = s.nullEntityAlpha, h = s.nullEntityColor, d = F({
                        fill: h,
                        alpha: c
                    }), u = {
                        "fill-opacity": 0
                    };
                    for (n in i)
                        i.hasOwnProperty(n) && (a = (r = (o = i[n]).config).cleanValue,
                        l = {
                            "fill-opacity": (r.alphaArr || [])[0] / 100 || 1
                        },
                        null == a ? (L(o, d),
                        o.hidden = !1) : a < e || a > t ? (L(o, u),
                        o.hidden = !0) : (L(o, l),
                        o.hidden = !1))
                }
                ,
                o.legendInteractivity = function(e, t) {
                    var o, r, a, n, l, i, s = this.getFromEnv("chart"), c = this.components.data, h = e.config, d = e.hasState("hidden"), u = this.getFromEnv("colorManager"), p = {}, g = {
                        "fill-opacity": 0
                    };
                    for (o in s.getFromEnv("animationManager").setAnimationState("legendInteraction"),
                    c)
                        c.hasOwnProperty(o) && (a = (h = (r = c[o]).config).cleanValue,
                        i = u.getColorObj(a),
                        n = h.visibleEntityAttr,
                        p["fill-opacity"] = n["fill-opacity"],
                        l = d ? p : g,
                        t.code === (!i.outOfRange && i.code) && (r.hidden = !d,
                        L(r, l),
                        d ? e && e.removeLegendState("hidden") : e.setLegendState("hidden")))
                }
                ,
                o.calculateDataLimits = function() {
                    var e, t, o, r, a = this.getFromEnv("chart"), n = this.config, l = a.jsonData.data || [], i = this.getFromEnv("number-formatter"), s = +Infinity, c = -Infinity;
                    for (r = 0,
                    o = l.length; r < o; r++)
                        t = l[r].value,
                        e = i.getCleanValue(t),
                        s = b(s, e),
                        c = k(c, e);
                    n.max = c,
                    n.min = s
                }
                ,
                o._configureEntity = function(e, t, o) {
                    var r, n, l, i, s, c, d, u, p, g, f, m, b, k, v, C, y, w, A, E, L, x, N = this.getFromEnv("chart"), S = this.config, _ = this.getFromEnv("number-formatter"), T = N.config.entityOpts, I = t.config, M = t.labelConfig, O = o.value, B = I.cleanValue = _.getCleanValue(O), P = I.formattedValue = B !== a ? _.dataLabels(B) : a, D = (0,
                    h.pluckNumber)(o.showtooltip, T.showTooltip), R = this._getDefaultTooltip(t, o, this), j = {
                        formattedValue: P,
                        sName: o.shortLabel,
                        lName: o.label
                    }, V = T.dataLabels.style, G = I.toolText = D ? (0,
                    h.parseUnsafeString)((0,
                    h.pluck)((0,
                    h.parseTooltext)((0,
                    h.pluck)(o.tooltext, T.tooltext, R), [1, 2, 7, 38, 39], j, o)), !1) : "", H = I.borderColor = (0,
                    h.pluck)(o.bordercolor, T.borderColor), W = I.borderAlpha = (0,
                    h.pluck)(o.borderalpha, T.borderAlpha), z = I.borderThickness = (0,
                    h.pluckNumber)(o.borderthickness, T.borderThickness), X = T.hoverOnNull, Y = I.useHoverColor = (0,
                    h.pluckNumber)(o.showhovereffect, o.usehovercolor, X ? T.showHoverEffect : isNaN(O) ? 0 : T.showHoverEffect), K = I.labelAlignment, J = this.getFromEnv("colorManager");
                    if (t.hidden = !1,
                    I.showLabel = (0,
                    h.pluckNumber)(o.showlabel, T.showLabels),
                    I.labelPadding = (0,
                    h.pluckNumber)(o.labelpadding, T.labelPadding),
                    I.fontFamily = (0,
                    h.pluck)(o.font, V.fontFamily),
                    I.fontSize = (0,
                    h.pluckNumber)(parseInt(o.fontsize, 10), parseInt(V.fontSize, 10)),
                    I.fontBold = (0,
                    h.pluckNumber)(o.fontbold, 0),
                    I.fontColor = (0,
                    h.pluck)(o.labelcolor, o.fontcolor, V.color),
                    I.labelBgColor = (0,
                    h.pluck)(o.labelbgcolor, V.bgColor) || "",
                    I.labelBorderColor = (0,
                    h.pluck)(o.labelbordercolor, V.borderColor) || "",
                    I.connectorColor = (0,
                    h.pluck)(o.labelconnectorcolor, T.connectorColor),
                    I.connectorAlpha = (0,
                    h.pluck)(o.labelconnectoralpha, T.connectorAlpha),
                    I.hoverBorderThickness = (0,
                    h.pluckNumber)(o.borderhoverthickness, o.hoverborderthickness, T.hoverBorderThickness),
                    I.hoverBorderColor = (0,
                    h.pluck)(o.borderhovercolor, o.hoverbordercolor, T.hoverBorderColor, I.borderColor),
                    I.hoverBorderAlpha = (0,
                    h.pluck)(o.borderhoveralpha, o.hoverborderalpha, T.hoverBorderAlpha, I.borderAlpha),
                    I.connectorThickness = (0,
                    h.pluckNumber)(o.labelconnectorthickness, T.connectorThickness),
                    I.origConnectorThickness = I.connectorThickness,
                    I.borderThickness = z,
                    I.link = o.link,
                    I.isVisible = !0,
                    I.id = e,
                    I.originalId = o.origId,
                    null !== B && (r = J && J.getColor(B)) && !r.outOfRange && (C = r.code,
                    r.oriAlpha !== a && (y = r.oriAlpha + "")),
                    (0,
                    h.pluck)(o.color, o.alpha, o.angle, o.ratio) !== a ? (s = (0,
                    h.pluck)(o.color, C, T.fillColor),
                    c = (0,
                    h.pluck)(o.alpha, y, T.fillAlpha),
                    d = (0,
                    h.pluck)(o.angle, T.fillAngle),
                    u = (0,
                    h.pluck)(o.ratio, T.fillRatio),
                    p = F({
                        color: s,
                        alpha: c,
                        angle: d,
                        ratio: u
                    })) : (k = F({
                        color: (0,
                        h.pluck)(C, T.fillColor),
                        alpha: (0,
                        h.pluck)(y, T.fillAlpha),
                        angle: (0,
                        h.pluck)(T.fillAngle),
                        ratio: (0,
                        h.pluck)(T.fillRatio)
                    }),
                    b = F({
                        color: (0,
                        h.pluck)(T.nullEntityColor),
                        alpha: (0,
                        h.pluck)(T.nullEntityAlpha),
                        angle: (0,
                        h.pluck)(T.nullEntityAngle),
                        ratio: (0,
                        h.pluck)(T.nullEntityRatio)
                    }),
                    s = (p = null === B ? b : k).FCcolor.color,
                    c = p.FCcolor.alpha,
                    d = p.FCcolor.angle,
                    u = p.FCcolor.ratio),
                    "" === G && (S.showTooltip = 0),
                    I.visibleEntityAttr = {
                        stroke: (0,
                        h.convertColor)(H, W),
                        fill: (I.fillColor = p).toString(),
                        "fill-opacity": c / 100
                    },
                    x = c.split(","),
                    I.alphaArr = x,
                    Y && ((0,
                    h.pluck)(o.fillhovercolor, o.fillhoveralpha, o.fillhoverangle, o.fillhoverratio, o.hoverfillcolor, o.hoverfillalpha, o.hoverfillratio, o.hoverfillangle) !== a ? (s = (0,
                    h.pluck)(o.fillhovercolor, o.hoverfillcolor, T.hoverFillColor),
                    c = (0,
                    h.pluck)(o.fillhoveralpha, o.hoverfillalpha, T.hoverFillAlpha),
                    d = (0,
                    h.pluck)(o.fillhoverangle, o.hoverfillangle, T.hoverFillAngle),
                    u = (0,
                    h.pluck)(o.fillhoverratio, o.hoverfillratio, T.hoverFillRatio),
                    v = F({
                        color: s,
                        alpha: c,
                        angle: d,
                        ratio: u
                    })) : (T.hoverColorObject || (T.hoverColorObject = F({
                        color: T.hoverFillColor,
                        alpha: T.hoverFillAlpha,
                        angle: T.hoverFillAngle,
                        ratio: T.hoverFillRatio
                    })),
                    v = T.hoverColorObject),
                    I.hoverColor = v),
                    !M && (M = t.labelConfig = {}),
                    g = I.fontColor,
                    f = I.fontFamily,
                    m = I.fontBold,
                    G = I.toolText,
                    n = I.link,
                    K ? (l = K[0],
                    i = K[1]) : (l = "center",
                    i = "middle"),
                    M.align = l,
                    M.vAlign = i,
                    M.fontColor = g,
                    M.bgColor = I.labelBgColor,
                    M.borderColor = I.labelBorderColor,
                    M.fontFamily = f,
                    M.fontBold = m,
                    M.toolText = G,
                    M.link = n,
                    "object" == typeof I.options)
                        for (w = I.entityLabels = I.entityLabels || [],
                        L = (E = I.labels || []).length; L--; )
                            w[L] || (w[L] = {
                                config: {}
                            }),
                            M = w[L].config,
                            (K = E[L].labelAlignment) ? (l = K[0],
                            i = K[1]) : (l = "center",
                            i = "middle"),
                            M.align = l,
                            M.vAlign = i,
                            M.displayValue = this.getDisplayValue(t, E[L], I.options.isDataEnabled, !L, o),
                            M.toolText = G,
                            M.align = l,
                            M.vAlign = i,
                            M.bgColor = I.labelBgColor,
                            M.borderColor = I.labelBorderColor,
                            M.fontColor = g,
                            M.fontFamily = f,
                            M.fontBold = m,
                            M.toolText = G;
                    else
                        A = {
                            shortText: I.shortLabel,
                            text: I.label
                        },
                        M.displayValue = this.getDisplayValue(t, A, !0, !0, o)
                }
                ,
                o.getDisplayValue = function(e, t, o, r, n) {
                    var l, i = this.getFromEnv("chart").config.entityOpts, s = e.config, c = s.cleanValue, d = s.formattedValue, u = i.labelSepChar;
                    return o ? r && "undefined" != typeof n.displayvalue ? l = n.displayvalue : (l = (0,
                    h.pluck)(i.includeNameInLabels ? i.useShortName ? t.shortText : t.text : ""),
                    i.includeValueInLabels && null !== c && (l = l === a ? d : l + u + d)) : l = s.label,
                    l
                }
                ,
                t._sanitizeEntityOptions = function(e) {
                    return delete e.outlines,
                    delete e.label,
                    delete e.shortlabel,
                    delete e.labelposition,
                    delete e.labelalignment,
                    delete e.labelconnectors,
                    e
                }
                ,
                o._redefineEntities = function(e) {
                    var t, o, r, a, n, l, i, s, c, d, u, p, g = this.config, f = {}, m = {}, b = this.getFromEnv("chart").config.entities, k = g.useSNameAsId, v = 0;
                    for (t = e.length; t--; )
                        if (r = (o = e[t]).internalid,
                        a = o.newid ? o.newid : r,
                        n = o.sname,
                        l = o.lname,
                        p = b[r],
                        r = (0,
                        h.trimString)(r),
                        a = (a = (0,
                        h.trimString)(a)) && a.toLowerCase(),
                        p) {
                            for (u in f[a] = s = {
                                origId: r
                            },
                            m[r] = !0,
                            p)
                                s[u] = p[u];
                            s.shortLabel = n || p.shortLabel,
                            s.label = l || p.label,
                            s.showhovereffect = o.showhovereffect,
                            s.fillhovercolor = o.fillhovercolor,
                            s.fillhoveralpha = o.fillhoveralpha,
                            s.fillhoverangle = o.fillhoverangle,
                            s.fillhoverratio = o.fillhoverratio,
                            s.borderhoverthickness = o.borderhoverthickness
                        }
                    for (i in (d = this.components.data) || (d = this.components.data = {}),
                    f)
                        d[i = i.toLowerCase()] || (d[i] = {
                            config: {}
                        }),
                        d[i].config = f[i],
                        v += 1;
                    for (i in c = d,
                    b)
                        if (s = b[i],
                        !m[i = (0,
                        h.trimString)(i)]) {
                            for (u in k ? ((p = c[s.shortLabel.toLowerCase()]) || (p = c[s.shortLabel.toLowerCase()] = {}),
                            p.config = {},
                            p.origId = s.shortLabel) : ((p = c[i.toLowerCase()]) || (p = c[i.toLowerCase()] = {}),
                            p.config = {},
                            p.config.origId = i),
                            s)
                                p.config[u] = s[u];
                            v += 1
                        }
                    g.entityCount = v
                }
                ,
                o.draw = function() {
                    var e = this.config
                      , t = this.getFromEnv("chart")
                      , o = h.hasSVG ? 200 : 10;
                    this.createContainer(),
                    this.config.ready = !1,
                    e.BATCH_SIZE = o,
                    e.labelBatchSize = h.hasSVG ? 200 : 20,
                    this._batchRender()(0),
                    t.config.entityFlag = !0,
                    t.checkComplete()
                }
                ,
                o._batchRender = function() {
                    var e, t, o, r, n, l = this, i = l.config, s = l.getFromEnv("chart").config.entities.firstEntity, c = l.components.data, h = i.BATCH_SIZE, u = i.entityKeys = s ? l._getKeys(s, c) : Object.keys(c), p = i.entityLength = u.length;
                    return function g(i) {
                        for (e = i,
                        o = 0; u[e] !== a; )
                            if (t = c[u[e]],
                            n = l.drawEntity(t, h),
                            o += n,
                            t.config.drawn && ((r = e === p - 1 ? t : c[u[e - 1]]) && (r.config.drawn = !1,
                            r.config.outlineStartIndex = a),
                            e++),
                            o >= h) {
                                l.addJob("entityDraw", g.bind(l, e), d.priorityList.entitydraw);
                                break
                            }
                        e === p && (l._addEventListenersToEntities(0),
                        l.initComplete())
                    }
                }
                ,
                o._addEventListenersToEntities = function(e) {
                    var t, o, r, a = this.components.data, n = this.config, l = n.BATCH_SIZE, i = n.entityKeys, s = n.entityLength, c = 0;
                    for (t = e; t < s; t++)
                        if ((r = (o = a[i[t]]).config.options) && !1 === r.isDataEnabled || this.addMouseGestures(o),
                        ++c === l) {
                            this.addJob("_addEventListenersToEntities", this._addEventListenersToEntities.bind(this, t), d.priorityList.entitydraw);
                            break
                        }
                }
                ,
                t._getKeys = function(e, t) {
                    for (var o = [e], r = e; t[r]; )
                        r = t[r].nextId,
                        o.push(r);
                    return o
                }
                ,
                o._getDefaultTooltip = function(e, t) {
                    var o, r, n = e.config.cleanValue, l = e.config.formattedValue, i = this.getFromEnv("chart").config.entityOpts;
                    if ("object" == typeof e.config.options) {
                        if (!(r = t.labels && t.labels[0]))
                            return a;
                        o = (i.useSNameInTooltip ? r.shortText : r.text) + (null === n ? "" : i.tooltipSepChar + l)
                    } else
                        o = (i.useSNameInTooltip ? t.shortLabel : t.label) + (null === n ? "" : i.tooltipSepChar + l);
                    return o
                }
                ,
                o.drawEntity = function(e, t) {
                    var o, r, n, l, i, s, c, d, u = this.getFromEnv("chart"), p = u.getFromEnv("animationManager"), g = e.config, m = h.hasSVG || !f ? "litepath" : "path", b = u.config.entityOpts, k = g.outlines, v = this.getFromEnv("toolTipController"), C = this.getLinkedParent().getChildContainer("plot"), y = this.getLinkedParent().getChildContainer("plotShadow"), F = g.toolText, A = b.shadow, E = [], L = {};
                    if (this._configureEntityDrawingParams(e),
                    r = (g = e.config).visibleEntityAttr,
                    d = g.shadowOptions,
                    o = g.outlineStartIndex === a ? k.length : g.outlineStartIndex,
                    e.graphics || (e.graphics = {}),
                    s = 0,
                    E = g.outlinePath || (g.outlinePath = []),
                    c = g.customStrokeWidthModifier,
                    "object" == typeof g.options) {
                        for (; o--; )
                            if (E = k[o].outline,
                            n = !0 === g.options.isDataEnabled ? r : (0,
                            h.extend2)((0,
                            h.extend2)({}, r), w(k[o].style, c)),
                            (l = e.graphics.outlines) || (l = e.graphics.outlines = []),
                            !l[o] && (l[o] = {}),
                            i = l[o].outline,
                            n[m] = E,
                            (i = l[o].outline = p.setAnimation({
                                el: m,
                                container: C,
                                attr: n,
                                component: this,
                                label: "path"
                            })).shadow(!!A && d, y),
                            v.enableToolTip(i, F),
                            s++,
                            g.outlineStartIndex = o,
                            s === t)
                                return s;
                        return g.drawn = !0,
                        s
                    }
                    for (; o--; )
                        if (E = k[o].concat(E),
                        s++,
                        g.outlineStartIndex = o,
                        s === t)
                            return g.outlinePath = E,
                            s;
                    return !e.graphics.outlines && (r[m] = E),
                    Object.assign(L, r, e.hidden && {
                        "fill-opacity": 0
                    } || {}),
                    e.graphics.outlines = p.setAnimation({
                        el: e.graphics.outlines || m,
                        container: C,
                        attr: L,
                        component: this,
                        label: "path"
                    }),
                    g.drawn = !0,
                    g.outlineStartIndex = 0,
                    g.outlinePath = [],
                    e.graphics.outlines.shadow(!!A && d, y),
                    v.enableToolTip(e.graphics.outlines, F),
                    s
                }
                ,
                o._configureEntityDrawingParams = function(e) {
                    var t, o = this.getFromEnv("chart"), r = e.config, a = o.config.entityOpts, n = o.config.scalingParams, l = !f || h.hasSVG, i = n.scaleFactor, s = n.strokeWidth, c = (l ? o.baseScaleFactor : 1) * s, d = 1 === a.scaleBorder, u = r.borderThickness, p = r.alphaArr, g = r.origConnectorThickness, b = r.hoverBorderThickness, v = r.visibleEntityAttr, C = v["fill-opacity"];
                    r.shadowOptions = {
                        scalefactor: [i, i * o.config.baseScaleFactor],
                        opacity: k.apply(m, p) / 100,
                        useFilter: 0
                    },
                    r.fillOpacity = e.hidden ? 0 : C,
                    l ? (u = r.entityBorderThickness = d ? u * c : u / i,
                    g /= i,
                    t = d ? i : n.sFactor,
                    b && (b = r.hoverBorderThickness = d ? b * c : b / i)) : (u = d ? u * s : u,
                    t = d ? n.scaleFactor : o.baseScaleFactor),
                    r.entityBorderThickness = u,
                    r.connectorThickness = g,
                    r.customStrokeWidthModifier = t,
                    v["stroke-width"] = u,
                    v.transform = h.hasSVG || !f ? "" : n.transformStr
                }
                ,
                o.drawLabels = function(e) {
                    var t, o, r, a, n = e, l = this.getFromEnv("chart"), s = this.config, c = s.labelBatchSize, h = s.entityLength, d = [], u = l.getChildContainer("upperAnnotationGroup"), p = 0, g = this.getChildren("mapLabelAnnotations") && this.getChildren("mapLabelAnnotations")[p], f = 0, m = 0, b = l.config.annotationConfig;
                    for (t in g || (a = new i["default"],
                    this.attachChild(a, "mapLabelAnnotations"),
                    (g = this.getChildren("mapLabelAnnotations")[p]).addCustomGroup(u)),
                    g.destroy(),
                    g._renderer && (g._renderer = null),
                    b.showbelow = 0,
                    n) {
                        if (this.drawLabel(n[t], d),
                        ++f === c) {
                            for (o = 0; o < d.length; o++)
                                d[o].animationLabel = "entityLabel";
                            for (r = g.addGroup(Object.assign(b, {
                                id: "entityLabels" + p,
                                items: d,
                                animationLabel: "entityLabelGroup"
                            }), this),
                            o = 0; o < r.items.length; o++)
                                r.items[o].addEventListener("fc-mouseover", d[o].onmouseover),
                                r.items[o].addEventListener("fc-mouseout", d[o].onmouseout),
                                r.items[o].addEventListener("fc-click", d[o].onclick);
                            p++,
                            (g = this.getChildren("mapLabelAnnotations") && this.getChildren("mapLabelAnnotations")[p]) || (a = new i["default"],
                            this.attachChild(a, "mapLabelAnnotations"),
                            (g = this.getChildren("mapLabelAnnotations")[p]).addCustomGroup(u)),
                            g.destroy(),
                            g._renderer && (g._renderer = null),
                            f = 0,
                            d = []
                        } else if (m === h - 1) {
                            for (o = 0; o < d.length; o++)
                                d[o].animationLabel = "entityLabel";
                            for (r = g.addGroup(Object.assign(b, {
                                id: "entityLabels" + p,
                                items: d,
                                animationLabel: "entityLabelGroup"
                            }), this),
                            o = 0; o < r.items.length; o++)
                                r.items[o].addEventListener("fc-mouseover", d[o].onmouseover),
                                r.items[o].addEventListener("fc-mouseout", d[o].onmouseout),
                                r.items[o].addEventListener("fc-click", d[o].onclick)
                        }
                        m++
                    }
                    this.drawLabelConnFn(0)
                }
                ,
                o.drawLabelConnFn = function(e) {
                    var t, o, r, a, n, l = this.config, i = this.components.data, s = l.BATCH_SIZE, c = l.entityKeys, h = c.length, u = 0;
                    for (o = e; o < h; o++) {
                        if ("object" == typeof (a = (n = i[c[o]]).config).options)
                            for (t = (r = a.labels) && r.length || 0; t--; )
                                r[t].labelConnectors && (this.drawLabelConnectors(n, r[t].labelConnectors, this),
                                u++);
                        else
                            a.labelConnectors && (this.drawLabelConnectors(n, a.labelConnectors, this),
                            u++);
                        if (u === s) {
                            this.addJob("drawLabelConnectors", this.drawLabelConnFn.bind(this, o), d.priorityList.entitydraw);
                            break
                        }
                    }
                }
                ,
                o._getLabelObject = function(e, t, o) {
                    var r, n, l, i, s, c, d, u, p, g, f, m = this, b = m.getFromEnv("chart"), k = m.getFromEnv("chart-attrib"), v = e.config, C = b.config.scalingParams, y = e.graphics && e.graphics.outlines, F = v.fontSize, w = v.labelPadding, L = v.labels || [], x = v.entityLabels || [];
                    return t !== a ? (f = L[t],
                    i = (r = x[t].config).style = f.style,
                    n = f.labelPosition,
                    l = f.labelAlignment) : (r = e.labelConfig,
                    n = v.labelPosition,
                    l = v.labelAlignment),
                    n ? (s = n[0],
                    c = n[1]) : (s = (d = y.getBBox()).x + d.width / 2,
                    c = d.y + d.height / 2),
                    l ? ("right" === (u = l[0]) ? s -= w : "left" === u && (s += w),
                    "top" === (p = l[1]) ? c -= w : "bottom" === p && (c += w)) : (u = "center",
                    p = "middle"),
                    g = parseFloat(F) / C.sFactor,
                    !o && i && (i.color && (r.fontColor = i.color),
                    i["font-size"] && (g = parseFloat(i["font-size"]) / C.sFactor),
                    i["font-family"] && (r.fontFamily = i["font-family"]),
                    i["font-weight"] !== a && (r.fontBold = "bold" === i["font-weight"])),
                    r.x = s.toString(),
                    r.y = c.toString(),
                    r.wrap = 1,
                    r.type = "text",
                    r.fontSize = g,
                    {
                        x: s.toString(),
                        y: c.toString(),
                        wrapwidth: A[u](void 0, s + void 0) - w,
                        wrapheight: E[p](void 0, c + void 0) - w,
                        wrap: 1,
                        type: "text",
                        align: r.align,
                        valign: r.vAlign,
                        text: r.displayValue,
                        tooltext: r.toolText,
                        outlineText: (0,
                        h.pluckNumber)(k.textoutline, 0),
                        css: r.link !== a && {
                            cursor: "pointer",
                            _cursor: "hand"
                        },
                        bgcolor: r.bgColor,
                        bordercolor: r.borderColor,
                        fillcolor: r.fontColor,
                        fontsize: r.fontSize,
                        font: r.fontFamily,
                        bold: r.fontBold,
                        onclick: function(t) {
                            var o, r, a = e.graphics.outlines;
                            if (a instanceof Array)
                                for (o = 0,
                                r = a.length; o < r; o++)
                                    m.entityClick(a[o].outline, t);
                            else
                                m.entityClick(a, t)
                        },
                        onmouseover: function(t) {
                            var o, r, a = e.graphics.outlines;
                            if (a instanceof Array)
                                for (o = 0,
                                r = a.length; o < r; o++)
                                    m.entityRollOver(a[o].outline, t);
                            else
                                m.entityRollOver(a, t)
                        },
                        onmouseout: function(t) {
                            var o, r, a = e.graphics.outlines;
                            if (a instanceof Array)
                                for (o = 0,
                                r = a.length; o < r; o++)
                                    m.entityRollOut(a[o].outline, t);
                            else
                                m.entityRollOut(a, t)
                        },
                        ontouchstart: function(t) {
                            var o, r, a = e.graphics.outlines;
                            if (a instanceof Array)
                                for (o = 0,
                                r = a.length; o < r; o++)
                                    m.entityRollOver(a[o].outline, t);
                            else
                                m.entityRollOver(a, t);
                            m.entityRollOver(a, t)
                        }
                    }
                }
                ,
                o.drawLabel = function(e, t) {
                    var o, r, n, l = e.config;
                    if (l.showLabel)
                        if ("object" == typeof l.options)
                            for (r = (n = l.labels) && n.length || 0,
                            o = l.options.isDataEnabled; r--; )
                                t.push(this._getLabelObject(e, r, o, !r));
                        else
                            t.push(this._getLabelObject(e, a, !0, !0))
                }
                ,
                o.drawLabelConnectors = function(e, t, o) {
                    for (var r, a, n = e.config, l = this.getFromEnv("chart"), i = l.getFromEnv("animationManager"), s = l.config.scalingParams, c = o.getLinkedParent().getChildContainer("plot"), d = t && t.length || 0, u = n.showLabel; d--; )
                        a = t[d],
                        r = e.graphics.connectorElem,
                        u ? e.graphics.connectorElem = r = i.setAnimation({
                            el: e.graphics.connectorElem || "path",
                            attr: {
                                path: a,
                                opacity: 1,
                                transform: h.hasSVG || !f ? "" : s.transformStr,
                                stroke: (0,
                                h.convertColor)(n.connectorColor, n.connectorAlpha),
                                "shape-rendering": "crisp",
                                "stroke-width": n.connectorThickness
                            },
                            container: c,
                            component: this,
                            label: "labelConnectors"
                        }) : r && r.hide()
                }
                ,
                o.entityClick = function(e, t) {
                    var o = e.node.__entity
                      , r = this.getFromEnv("chart")
                      , n = r.config.scalingParams
                      , l = e.getBBox()
                      , i = r.getFromEnv("linkClickFN")
                      , s = o.config
                      , c = s.link;
                    l.width = l.width * n.scaleFactor,
                    l.height = l.height * n.scaleFactor,
                    l.x = l.x * n.scaleFactor + n.translateX,
                    l.y = l.y * n.scaleFactor + n.translateY,
                    l.x2 = l.x + l.width,
                    l.y2 = l.y + l.height,
                    r.fireChartInstanceEvent("entityclick", s.eventArgs, t),
                    c !== a && i.call({
                        link: c,
                        entity: o,
                        entityBox: l
                    }, !0)
                }
                ,
                o.entityRollOver = function(e, t) {
                    var o = e.node.__entity
                      , r = o.config
                      , a = this.getFromEnv("chart")
                      , n = a.getFromEnv("animationManager")
                      , l = r.hoverAttr;
                    a.plotEventHandler(e, t, "entityRollOver"),
                    e.data("hovered") ? clearTimeout(o.config.timer) : r.useHoverColor && r.isVisible && !o.hidden && l && (a.config.hoverEntity = e,
                    n.setAnimation({
                        el: e,
                        attr: l,
                        component: this,
                        state: "updating",
                        label: "path"
                    }),
                    e.data("hovered", !0))
                }
                ,
                o.entityRollOut = function(e, t) {
                    var o = e.node.__entity
                      , r = this
                      , a = r.getFromEnv("chart")
                      , n = a.getFromEnv("animationManager")
                      , l = o.config.revertAttr;
                    a.plotEventHandler(e, t, "entityRollOut"),
                    o.config.timer = setTimeout((function() {
                        !0 !== o.hidden && l && (n.setAnimation({
                            el: e,
                            attr: l,
                            component: r,
                            state: "updating",
                            label: "path"
                        }),
                        e.data("hovered", !1))
                    }
                    ), 100)
                }
                ,
                o.addMouseGestures = function(e) {
                    var t, o, r, n, l = e.config, i = l.originalId, s = this, c = e.graphics, d = l.useHoverColor, u = l.hoverBorderThickness, p = l.hoverBorderColor, g = l.hoverBorderAlpha, f = l.entityBorderThickness, m = l.borderColor, b = l.borderAlpha, k = l.link, v = l.visibleEntityAttr, C = "groupId" + i, y = function(t) {
                        k !== a && t.css({
                            cursor: "pointer",
                            _cursor: "hand"
                        }),
                        t.data("eventArgs", l.eventArgs),
                        t.data("groupId", C),
                        t.node.__entity = e,
                        e._listenersBinded || t.on("fc-click", s.entityClick.bind(s, t)).hover(s.entityRollOver.bind(s, t), s.entityRollOut.bind(s, t))
                    };
                    for (t in l.eventArgs = {
                        value: l.cleanValue,
                        label: l.label,
                        shortLabel: l.shortLabel,
                        originalId: l.origId,
                        id: l.id || l.origId
                    },
                    l.legacyEventArgs = {
                        value: l.value,
                        lName: l.label,
                        sName: l.shortLabel,
                        id: l.originalId || l.id
                    },
                    d && (l.hoverAttr = {
                        fill: (0,
                        h.toRaphaelColor)(l.hoverColor)
                    },
                    l.revertAttr = {
                        fill: (0,
                        h.toRaphaelColor)(l.fillColor),
                        stroke: (0,
                        h.toRaphaelColor)(l.borderColor, l.borderAlpha)
                    },
                    l.revertAttr["fill-opacity"] = v["fill-opacity"],
                    u !== f && (l.hoverAttr["stroke-width"] = (0,
                    h.pluckNumber)(u, f),
                    l.revertAttr["stroke-width"] = f),
                    p === m && g === b || (l.hoverAttr.stroke = (0,
                    h.convertColor)(p, g),
                    l.revertAttr.stroke = (0,
                    h.convertColor)(m, b))),
                    c)
                        if (c.hasOwnProperty(t))
                            if (c[t]instanceof Array) {
                                for (o = 0,
                                r = (n = c[t]).length; o < r; o++)
                                    y(n[o].outline);
                                e._listenersBinded = !0
                            } else
                                y(c[t]),
                                e._listenersBinded = !0
                }
                ,
                o.getDataLimits = function() {
                    var e = this.config;
                    return {
                        max: e.max,
                        min: e.min
                    }
                }
                ,
                o.createContainer = function() {
                    var e = this.getLinkedParent()
                      , t = this.getFromEnv("animationManager")
                      , o = e.getChildContainer("layer0");
                    !this.getChildContainer("abovePlotGroup") && this.addChildContainer("abovePlotGroup", t.setAnimation({
                        el: "group",
                        attr: {
                            name: "abovePlotGroup",
                            opacity: 1
                        },
                        container: o,
                        component: this,
                        label: "group"
                    })),
                    !this.getChildContainer("belowPlotGroup") && this.addChildContainer("belowPlotGroup", t.setAnimation({
                        el: "group",
                        attr: {
                            name: "belowPlotGroup",
                            opacity: 1
                        },
                        container: o,
                        component: this,
                        label: "group"
                    }))
                }
                ,
                o.initComplete = function() {
                    var e = this.getFromEnv("chart")
                      , t = this.components.data;
                    this.drawLabels(t),
                    e.config.entitiesReady = !0,
                    e.checkComplete()
                }
                ,
                t
            }(l.ComponentInterface);
            t["default"] = x
        },
        1197: function(e, t, o) {
            "use strict";
            t.__esModule = !0,
            t["default"] = void 0;
            var r = [{
                initialAttr: function() {
                    return {
                        opacity: 0
                    }
                },
                finalAttr: function() {
                    return {
                        opacity: 1
                    }
                }
            }]
              , a = function() {
                return r[0].slot = "plot",
                r
            }
              , n = function(e) {
                return [{
                    finalAttr: function() {
                        return e.finalAttr
                    }
                }]
            }
              , l = function() {
                return r[0].slot = "final",
                r
            }
              , i = function() {
                return [{
                    initialAttr: {
                        opacity: 0
                    },
                    finalAttr: {
                        opacity: 1
                    },
                    slot: "final"
                }]
            }
              , s = function() {
                return r[0].slot = "final",
                r
            }
              , c = function(e) {
                return [{
                    finalAttr: function() {
                        return e.finalAttr
                    }
                }]
            }
              , h = function(e) {
                return [{
                    initialAttr: function() {
                        return Object.assign({
                            opacity: 0
                        }, e.attr)
                    },
                    finalAttr: function() {
                        return e.attr
                    },
                    slot: "plot"
                }]
            }
              , d = function(e) {
                return [{
                    initialAttr: function() {
                        return Object.assign({
                            opacity: 0
                        }, e.attr)
                    },
                    finalAttr: function() {
                        return e.attr
                    },
                    slot: "plot"
                }]
            }
              , u = {
                "initial.dataset.entities": function() {
                    return {
                        "path.appearing": a,
                        "path.updating": n,
                        "labelConnectors.appearing": l,
                        "labelConnectors.updating": null,
                        "entityLabel.appearing": i,
                        "*": null
                    }
                },
                "initial.dataset.markers": function() {
                    return {
                        markers: null,
                        "markerItem.appearing": s,
                        "markerItem.updating": c
                    }
                },
                "initial.group.mapGroup": function() {
                    return {
                        "group.appearing": h,
                        "group.updating": d,
                        "*": null
                    }
                }
            };
            t["default"] = u
        },
        1198: function(e, t, o) {
            "use strict";
            var r = o(187);
            t.__esModule = !0,
            t["default"] = void 0;
            var a, n = r(o(207)), l = r(o(1196)), i = r(o(617)), s = r(o(269)), c = o(201), h = r(o(1197)), d = o(193), u = o(200), p = o(205), g = window.Math, f = g.min, m = g.max, b = function(e) {
                var t, o = this.getFromEnv("chart"), r = this.getChildren("mapAnnotations")[0], n = e.markerShape, l = n.groupConfig, i = n.data("unfilteredConfig"), s = i._markerEventArgs, c = e.config;
                i.hovereffect && ("circle" === n.config.type && (t = (0,
                d.extend2)({
                    fillcolor: i.hoverfillcolor,
                    fillalpha: i.hoverfillalpha,
                    fillangle: i.hoverfillangle,
                    fillratio: i.hoverfillratio,
                    gradientUnits: "objectBoundingBox",
                    radialGradient: 1
                }, i._hoverattrs)),
                t = (0,
                d.extend2)({}, i._hoverattrs),
                r.update(n.getId(), t)),
                s || (s = i._markerEventArgs = {
                    x: +i.x,
                    y: +i.y,
                    scaledX: i.x * l.scaleX,
                    scaledY: i.y * l.scaleY,
                    chartX: i.x * l.scaleX + l.grpXShift,
                    chartY: i.y * l.scaleY + l.grpYShift,
                    id: i.id,
                    label: i.label
                }),
                (0,
                u.raiseEventGroup)(c.options.id, "markerRollOver", s, o.getFromEnv("chartInstance"), c, a, a, a)
            }, k = function(e) {
                var t, o = this.getFromEnv("chart"), r = this.getChildren("mapAnnotations")[0], n = e.markerShape, l = n.getElement(), i = e.config, s = n.data("unfilteredConfig");
                l && s.hovereffect && ("circle" === n.config.type && (t = (0,
                d.extend2)({
                    fillcolor: n.config.rawColor,
                    fillalpha: n.config.rawAlpha,
                    fillangle: n.config.rawAngle,
                    fillratio: n.config.rawRatio,
                    gradientUnits: "objectBoundingBox",
                    radialGradient: "radial" === n.config.rawFillPattern
                }, s._defaultattrs)),
                t = (0,
                d.extend2)({}, s._defaultattrs),
                r.update(n.getId(), t)),
                (0,
                u.raiseEventGroup)(i.id, "markerRollOut", s._markerEventArgs, o.getFromEnv("chartInstance"), a, a, a)
            }, v = function(e, t) {
                var o = t.config.options
                  , r = this.getFromEnv("chart")
                  , a = t.markerShape
                  , n = a.config
                  , l = a.groupConfig
                  , i = this.getFromEnv("linkClickFN")
                  , s = a.config.link
                  , c = n._markerEventArgs;
                s && i && i.call({
                    link: s
                }, !0),
                c || (c = n._markerEventArgs = {
                    x: +n.x,
                    y: +n.y,
                    scaledX: n.x * l.scaleX,
                    scaledY: n.y * l.scaleY,
                    chartX: n.x * l.scaleX + l.grpXShift,
                    chartY: n.y * l.scaleY + l.grpYShift,
                    id: o.id,
                    label: o.label
                }),
                r.fireChartInstanceEvent("markerClick", c, e)
            }, C = function(e, t) {
                var o, r = e && e.length || !1, n = t || "id", l = {};
                if (!e)
                    return e;
                for (; r--; )
                    (o = e[r])[n] !== a && (l[o[n].toLowerCase()] = o);
                return l
            }, y = function(e, t, o) {
                return {
                    x: e.toString(),
                    y: (t - o).toString(),
                    align: "center",
                    valign: "top"
                }
            }, F = function(e, t, o) {
                return {
                    x: (e - o).toString(),
                    y: t.toString(),
                    align: "right",
                    valign: "middle"
                }
            }, w = function(e, t, o) {
                return {
                    x: (e + o).toString(),
                    y: t.toString(),
                    align: "left",
                    valign: "middle"
                }
            }, A = function(e, t, o) {
                return {
                    x: e.toString(),
                    y: (t + o).toString(),
                    align: "center",
                    valign: "bottom"
                }
            }, E = function(e, t) {
                return {
                    x: e.toString(),
                    y: t.toString(),
                    align: "center",
                    valign: "middle"
                }
            }, L = function() {
                return arguments[1]
            }, x = function(e, t) {
                return e - t
            }, N = function(e, t) {
                return 2 * f(t, e - t)
            }, S = function() {
                return arguments[1]
            }, _ = function(e, t) {
                return 2 * f(t, e - t)
            }, T = function(e, t) {
                return e - t
            };
            (0,
            c.addDep)({
                name: "mapsAnimation",
                type: "animationRule",
                extension: h["default"]
            });
            var I = function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).components = {},
                    t.getLabelAlignment = {
                        top: y,
                        left: F,
                        right: w,
                        bottom: A,
                        center: E
                    },
                    t.getWrapWidth = {
                        right: L,
                        left: x,
                        center: N
                    },
                    t.getWrapHeight = {
                        top: S,
                        middle: _,
                        bottom: T
                    },
                    t.hoverFn = b,
                    t.hoverOutFn = k,
                    t.clickFn = v,
                    t
                }
                (0,
                n["default"])(t, e);
                var o = t.prototype;
                return o.getName = function() {
                    return "markers"
                }
                ,
                o.getType = function() {
                    return "dataset"
                }
                ,
                o.configureAttributes = function(e) {
                    if (e) {
                        this.JSONData = e;
                        var t, o = this.getChildren("mapAnnotations") && this.getChildren("mapAnnotations")[0], r = this.getFromEnv("chart").config.markerOpts;
                        o || (t = new s["default"],
                        this.attachChild(t, "mapAnnotations"),
                        o = this.getChildren("mapAnnotations")[0]),
                        o.destroy(),
                        this.calculateDataLimits(),
                        r.dataEnabled ? this._parseMarkers() : this.defineMarkersNShapes(),
                        this.configureConnectors()
                    }
                }
                ,
                o.calculateMarkerRadiusLimits = function() {
                    if (this.JSONData) {
                        var e = this.JSONData
                          , o = this.config
                          , r = this.getFromEnv("chart")
                          , a = r.config.width
                          , n = r.config.height
                          , l = e.markermaxradius
                          , i = e.markerminradius
                          , s = t.getMarkerRadiusLimits(a, n, l, i);
                        o.minRadius = s.min,
                        o.maxRadius = s.max
                    }
                }
                ,
                o.calculateDataLimits = function() {
                    var e, t, o, r, a = this.getFromEnv("chart"), n = this.config, l = (a.jsonData.markers || {}).items || [], i = this.getFromEnv("number-formatter"), s = +Infinity, c = -Infinity;
                    for (r = 0,
                    t = l.length; r < t; r++)
                        o = l[r].value,
                        null !== (e = i.getCleanValue(o)) && (s = f(e, s),
                        c = m(e, c));
                    n.min = s,
                    n.max = c
                }
                ,
                o._parseMarkers = function() {
                    var e, o, r, n, l, i, s, c, h = this.getFromEnv("chart"), u = h.jsonData.markers, p = u.items, g = u.shapes, f = h.config.markerOpts, m = f.dataLabels.style, b = this.getFromEnv("number-formatter"), k = this.components.shapeObjs = {}, v = this.components.markerObjs = {};
                    if (p && p.length) {
                        if (g && g.length)
                            for (o = g.length; o; o -= 1)
                                (c = (n = g[o - 1]).id.toLowerCase()) && (k[c] = n);
                        for (o = p.length; o--; )
                            (c = (n = p[o]).id && n.id.toLowerCase()) && ((e = n.value) !== a && "" !== e && (e = parseFloat(e)),
                            (l = (r = t._initializeMarkerItem(c, n, null, h)).config.options.shapeid) && "string" == typeof l && (l = l.toLowerCase()),
                            s = (i = r.config).options,
                            i.cleanValue = b.getCleanValue(e),
                            null !== i.cleanValue ? i.formattedValue = b.dataLabels(e) : i.formattedValue = a,
                            i.fillColor = (0,
                            d.pluck)(s.fillcolor, s.color, f.fillColor),
                            i.fillAlpha = (0,
                            d.pluck)(s.fillalpha, s.alpha, f.fillAlpha),
                            i.fillRatio = (0,
                            d.pluck)(s.fillratio, f.fillRatio),
                            i.fillAngle = (0,
                            d.pluck)(s.fillangle, f.fillAngle),
                            i.borderThickness = (0,
                            d.pluckNumber)(s.borderthickness, f.borderThickness),
                            i.borderColor = (0,
                            d.pluck)(s.bordercolor, f.borderColor),
                            i.borderAlpha = (0,
                            d.pluck)(s.borderalpha, f.borderAlpha),
                            i.labelPadding = s.labelpadding || f.labelPadding,
                            i.fontColor = (0,
                            d.pluck)(s.labelcolor, m.fontColor),
                            i.labelBgColor = (0,
                            d.pluck)(s.labelbgcolor, m.labelBgColor) || "",
                            i.labelBorderColor = (0,
                            d.pluck)(s.labelbordercolor, m.labelBorderColor) || "",
                            n.__hideMarker && (r._isHidden = !0),
                            l && (r.shapeObj = k[l]),
                            v[c] = r)
                    }
                }
                ,
                o.defineMarkersNShapes = function() {
                    var e, o, r, n, l, i, s, c, h = this.getFromEnv("chart"), u = h.jsonData.markers, p = u.definition, g = this.getFromEnv("number-formatter"), f = h.config.markerOpts, m = f.dataLabels.style, b = C(p) || {}, k = C(u.application) || {}, v = u.shapes, y = this.components.shapeObjs = this.components.shapeObjs || (this.components.shapeObjs = {}), F = this.components.markerObjs = this.components.markerObjs || (this.components.markerObjs = {}), w = {}, A = {};
                    if (p && p.length) {
                        for (n in y)
                            w[n] = !1;
                        for (n in F)
                            A[n] = !1;
                        if (v && v.length)
                            for (n = v.length; n; n -= 1)
                                (c = (i = v[n - 1]).id.toLowerCase()) && (y[c] = i,
                                w[c] = !0);
                        for (c in b)
                            i = b[c],
                            l = F[c] = t._initializeMarkerItem(c, i, k[c], h),
                            A[c] = !0,
                            s = l.config.options.shapeid,
                            o = l.config,
                            r = i.value,
                            o.cleanValue = g.getCleanValue(r),
                            e = o.options,
                            null !== o.cleanValue ? o.formattedValue = g.dataLabels(r) : o.formattedValue = a,
                            o.fillColor = (0,
                            d.pluck)(e.fillcolor, e.color, f.fillColor),
                            o.fontColor = (0,
                            d.pluck)(e.labelcolor, m.fontColor),
                            o.fillAlpha = (0,
                            d.pluck)(e.fillalpha, e.alpha, f.fillAlpha),
                            o.fillRatio = (0,
                            d.pluck)(e.fillratio, f.fillRatio),
                            o.fillAngle = (0,
                            d.pluck)(e.fillangle, f.fillAngle),
                            o.borderThickness = (0,
                            d.pluckNumber)(e.borderthickness, f.borderThickness),
                            o.borderColor = (0,
                            d.pluck)(e.bordercolor, f.borderColor),
                            o.borderAlpha = (0,
                            d.pluck)(e.borderalpha, f.borderAlpha),
                            o.labelPadding = e.labelpadding || f.labelPadding,
                            o.options.tooltext = (0,
                            d.pluck)(e.tooltext, f.tooltext),
                            o.link = e.link,
                            s && (l.shapeObj = y[s.toLowerCase()]);
                        for (n in w)
                            w[n] || delete y[n];
                        for (n in F)
                            A[n] || delete F[n]
                    }
                }
                ,
                t.getMarkerRadiusLimits = function(e, t, o, r) {
                    var a, n, l = f(e, t), i = .02 * l, s = .07 * l;
                    return a = parseFloat(r),
                    n = parseFloat(o),
                    isNaN(a) || isNaN(n) ? isNaN(a) ? isNaN(n) ? {
                        min: i,
                        max: s
                    } : {
                        min: parseInt(n / 10, 10),
                        max: n
                    } : {
                        min: a,
                        max: 10 * a
                    } : a < n ? {
                        min: a,
                        max: n
                    } : {
                        min: n,
                        max: a
                    }
                }
                ,
                o.getDataLimits = function() {
                    var e = this.config;
                    return {
                        min: e.min,
                        max: e.max
                    }
                }
                ,
                t._initializeMarkerItem = function(e, t, o) {
                    var r, a = {}, n = a.config;
                    return n || (n = a.config = {}),
                    n.id = e,
                    n.definition = t,
                    n.application = o,
                    n.hasValue = null,
                    n.value = null,
                    n.options = null,
                    n.label = null,
                    n.markerShape = null,
                    n.markerLabel = null,
                    n.drawOptions = {
                        shape: null,
                        label: null
                    },
                    n.drawComplete = !1,
                    r = a.config.options = (0,
                    d.extend2)({}, n.definition),
                    n.dataEnabled ? isNaN(r.value) || "" === r.value || (a.value = parseFloat(r.value),
                    a.hasValue = !0) : n.applyAll ? n.options = (0,
                    d.extend2)(r, n.application) : o && (n.options = (0,
                    d.extend2)(r, n.application)),
                    a
                }
                ,
                o.configureConnectors = function() {
                    var e, t, o, r, a, n, l, i, s, c, h, u, p, g, f = this.getFromEnv("chart"), m = this.getChildren("mapAnnotations")[0], b = f.jsonData, k = this.components, v = b.markers || {}, C = v.connector || v.connectors || [], y = k.markerObjs, F = C.length, w = this.components.connectors, A = function(e) {
                        return function(t) {
                            var o = this.data("unfilteredConfig");
                            o.hoverEffect && m.update(this.getId(), o._hoverAttrs),
                            f.fireChartInstanceEvent("connectorrollover", e, t)
                        }
                    }, E = function(e) {
                        return function(t) {
                            var o = this.data("unfilteredConfig");
                            o.hoverEffect && m.update(this.getId(), o._defaultAttrs),
                            f.fireChartInstanceEvent("connectorrollout", e, t)
                        }
                    }, L = function(e) {
                        return function(t) {
                            f.fireChartInstanceEvent("connectorClick", e, t)
                        }
                    }, x = f.config.connectorOpts, N = {};
                    for (w = this.components.connectors = [],
                    g = 0; g < F; g++)
                        ((p = C[g]).from || p.to) && (t = y[p.from.toLowerCase()],
                        o = y[p.to.toLowerCase()],
                        t && o && (r = C[g].label,
                        !(N = w[g]) && (N = w[g] = {}),
                        !N.config && (e = N.config = {}),
                        !N.graphics && (N.graphics = {}),
                        (e = N.config = (0,
                        d.extend2)({}, p)).fromMarker = t,
                        e.toMarker = o,
                        e.link = p.link,
                        e.showTooltip = (0,
                        d.pluckNumber)(p.showtooltip, x.showTooltip),
                        a = e.tooltext = e.showTooltip ? (0,
                        d.pluck)(p.tooltext, x.tooltext) : "",
                        n = e.thickness = (0,
                        d.pluck)(p.thickness, x.thickness),
                        l = e.color = (0,
                        d.pluck)(p.color, x.color),
                        i = e.alpha = (0,
                        d.pluck)(p.alpha, x.alpha),
                        e.hoverEffect = (0,
                        d.pluckNumber)(p.showhovereffect, x.showHoverEffect),
                        s = (0,
                        d.pluck)(p.hovercolor, x.hoverColor, l),
                        c = (0,
                        d.pluck)(p.hoveralpha, x.hoverAlpha, i),
                        h = (0,
                        d.pluck)(p.hoverthickness, x.hoverThickness, n),
                        e.dashed = (0,
                        d.pluck)(p.dashed, x.dashed),
                        e.dashLen = (0,
                        d.pluckNumber)(p.dashlen, x.dashlen),
                        e.dashGap = (0,
                        d.pluckNumber)(p.dashgap, x.dashgap),
                        a && (e.tooltext = a = (0,
                        d.parseUnsafeString)((0,
                        d.parseTooltext)(a, [3, 40, 41, 42, 43], {
                            label: r,
                            fromId: t.config.definition.id,
                            toId: o.config.definition.id,
                            fromLabel: t.config.definition.label,
                            toLabel: o.config.definition.label
                        }, void 0), !1)),
                        e.eventArgs = {
                            fromMarkerId: t.config.id,
                            toMarkerId: o.config.id,
                            label: r
                        },
                        e._hoverAttrs = {
                            color: s,
                            alpha: c,
                            thickness: h
                        },
                        e._defaultAttrs = {
                            color: l,
                            alpha: i,
                            thickness: n
                        },
                        e.type = "line",
                        e.onclick = L(e.eventArgs),
                        e.onmouseover = A(e.eventArgs),
                        e.onmouseout = E(e.eventArgs),
                        r && (!(u = N.labelConfig) && (u = N.labelConfig = {}),
                        u.type = "text",
                        u.text = r,
                        u.align = "center",
                        u.valign = "middle",
                        u.font = x.font,
                        u.fillcolor = (0,
                        d.pluck)(p.labelcolor, x.fontColor),
                        u.bgcolor = (0,
                        d.pluck)(p.labelbgcolor, x.labelBgColor),
                        u.bordercolor = (0,
                        d.pluck)(p.labelbordercolor, x.labelBorderColor),
                        u.tooltext = e.tooltext)))
                }
                ,
                o.draw = function() {
                    var e, t, o, r, a, n, l, i, s = this.getFromEnv("chart"), c = this.config, h = this.getChildren("mapAnnotations")[0], d = this.components.markerObjs, u = s.config, g = u.markerOpts, f = u.scalingParams, m = s.config.annotationConfig, b = [], k = [], v = {}, C = {};
                    for (a in h.destroy(),
                    this.createContainer(),
                    this._drawConnectors(),
                    this.imageLoadCount = 0,
                    this.imageCount = 0,
                    c.autoScale = g.autoScale ? f.sFactor : 1,
                    d)
                        e = null,
                        (r = (t = d[a]).config).conIsHidden || (e = this._drawMarkerItem(t)),
                        e && (C[a] = e,
                        r._annotationIndex = b.length,
                        v[a] = t,
                        e.markerShape && (o = Object.assign({
                            align: "center",
                            valign: "middle",
                            animationLabel: "markerItem",
                            autoscale: "image" === e.markerShape.type ? 0 : 1
                        }, e.markerShape),
                        b.push(o)),
                        e.markerLabel && (o = Object.assign({
                            animationLabel: "markerItem",
                            id: e.markerShape.id
                        }, e.markerLabel),
                        k.push(o)));
                    for (a in i = h.addGroup(Object.assign(m, {
                        id: "markers",
                        fillalpha: "100",
                        items: b,
                        scaleimages: 1
                    }), this),
                    l = h.addGroup(Object.assign(m, {
                        id: "markerLabels",
                        items: k,
                        scaleimages: 1
                    }), this),
                    this.components.markerGroup = i,
                    this.components.markerLabelGroup = l,
                    n = 0,
                    d)
                        C[a] && ((t = d[a]).markerShape = i.retrieveItem(b[n].id),
                        t.markerShape.data("unfilteredConfig", b[n]),
                        C[a].markerLabel && (t.markerLabel = l.retrieveItem(b[n].id),
                        t.markerLabel.data("unfilteredConfig", k[n])),
                        n++);
                    this.addJob("buildKdtree", this._buildKdTree.bind(this), p.priorityList.kdTree)
                }
                ,
                o._buildKdTree = function() {
                    var e, t, o = this.components.kdArrayMap, r = this.components.markerGroup, a = [], n = r && r.items, l = n && n.length || 0;
                    for (t = 0; t < l; t++)
                        o[e = n[t].config.id] && a.push(o[e]);
                    this.components.kDTree || (this.components.kDTree = new i["default"](!0)),
                    this.components.kDTree._setSearchLimit(Infinity, Infinity),
                    this.components.kDTree.buildKdTree(a)
                }
                ,
                o._drawMarkerItem = function(e) {
                    var t, o, r, n, l, i, s, c, h, u, p, g, f, m, b, k, v, C, y = this, F = y.getFromEnv("chart"), w = F.config, A = y.config, E = w.scalingParams, L = e.config, x = L.options, N = L.definition, S = w.markerOpts, _ = S.dataLabels.style, T = x.shapeid, I = x.scale || 1, M = x.label || "", O = F.config.scalingParams.scaleFactor * F.config.baseScaleFactor, B = (x.labelpos || "top").toLowerCase(), P = L.formattedValue === a ? a : L.formattedValue, D = x.tooltext || S.tooltext, R = (0,
                    d.pluckNumber)(N.radius, L.radius, S.radius) * I * A.autoScale || 1e-4, j = L.fillColor, V = L.fillAlpha, G = L.fillRatio, H = L.fillAngle, W = L.borderThickness, z = L.borderColor, X = L.borderAlpha, Y = y.getChildren("mapAnnotations")[0], K = y.components.kdArrayMap || (y.components.kdArrayMap = {}), J = e.config.id;
                    if (L.autoScale = S.autoScale ? O : 1,
                    T)
                        return D = D ? (0,
                        d.parseUnsafeString)((0,
                        d.parseTooltext)(D, [1, 2, 3], {
                            formattedValue: P,
                            label: M
                        }, x), !1) : P ? M + S.tooltipSepChar + P : M,
                        P !== a && null !== P ? M = M + S.labelSepChar + P : isNaN(I) ? I = 1 : I < 0 ? I = 0 : I > 5 && (I = 5),
                        (0,
                        d.extend2)(x, {
                            x: x.x && x.x.toString(),
                            y: x.y && x.y.toString(),
                            fillcolor: j,
                            fillalpha: V,
                            fillratio: G,
                            fillangle: H,
                            borderthickness: W,
                            bordercolor: z,
                            borderalpha: X,
                            hovereffect: (0,
                            d.pluck)(S.showHoverEffect),
                            radius: R && R.toString(),
                            link: x.link,
                            showshadow: (0,
                            d.pluckNumber)(x.showshadow, L.shadow),
                            _markerLabel: M,
                            _markerId: x.id,
                            id: (x.id + "").toLowerCase()
                        }),
                        delete x.tooltext,
                        L.tooltext = !!S.showTooltip && D,
                        f = Number(x.x) * E.sFactor + E.translateX,
                        m = Number(x.y) * E.sFactor + E.translateY,
                        R = x.radius,
                        "triangle" === T ? ((0,
                        d.extend2)(x, {
                            type: "polygon",
                            sides: 3,
                            startangle: S.startAngle
                        }),
                        C = "polygon",
                        v = 3) : "diamond" === T ? ((0,
                        d.extend2)(x, {
                            type: "polygon",
                            sides: 4,
                            startangle: S.startAngle
                        }),
                        C = "polygon",
                        v = 4) : "arc" === T ? (k = .6 * R,
                        (0,
                        d.extend2)(x, {
                            type: "arc",
                            startangle: 0,
                            endangle: 360,
                            innerradius: k
                        }),
                        C = "arc") : "circle" === T ? (x.type = "circle",
                        C = "circle") : (p = y.getShapeArgs.call(e),
                        S.dataEnabled && S.valueToRadius && x.radius !== a ? delete p.radius : (!p.radius && (p.radius = S.radius),
                        p.radius *= I * L.autoScale),
                        (0,
                        d.extend2)(x, p),
                        x.id = x._markerId && x._markerId.toLowerCase(),
                        k = p.innerradius,
                        p.radius && (R = p.radius),
                        C = p.type && p.type.toLowerCase(),
                        v = p.sides,
                        (R = Number(R)) && k && R < k && (g = R,
                        x.radius = R = k,
                        x.innerradius = k = g)),
                        x.type = x.type && x.type.toLowerCase(),
                        (0,
                        d.extend2)(x, {
                            hoverfillcolor: (0,
                            d.pluck)(x.fillhovercolor, S.hoverFillColor, x.fillcolor),
                            hoverfillalpha: (0,
                            d.pluck)(x.fillhoveralpha, S.hoverFillAlpha, x.fillalpha),
                            hoverfillratio: (0,
                            d.pluck)(x.fillhoverratio, S.hoverFillRatio, x.fillratio),
                            hoverfillangle: (0,
                            d.pluck)(x.fillhoverangle, S.hoverFillAngle, x.fillangle),
                            hoverborderthickness: (0,
                            d.pluckNumber)(x.borderhoverthickness, S.hoverBorderThickness, x.borderthickness),
                            hoverbordercolor: (0,
                            d.pluck)(x.borderhovercolor, S.hoverBorderColor, x.bordercolor),
                            hoverborderalpha: (0,
                            d.pluck)(x.borderhoveralpha, S.hoverBorderAlpha, x.borderalpha)
                        }),
                        x._hoverattrs = {
                            fillalpha: x.hoverfillalpha,
                            fillcolor: x.hoverfillcolor,
                            fillangle: x.hoverfillangle,
                            fillratio: x.hoverfillratio,
                            borderThickness: "0" !== x.showborder ? x.hoverborderthickness : 0,
                            borderColor: x.hoverbordercolor,
                            borderAlpha: x.hoverborderalpha
                        },
                        x._defaultattrs = {
                            fillalpha: x.fillalpha,
                            fillcolor: x.fillcolor,
                            fillangle: x.fillangle,
                            fillratio: x.fillratio,
                            borderThickness: "0" !== x.showborder ? x.borderthickness : 0,
                            borderColor: x.bordercolor,
                            borderAlpha: x.borderalpha
                        },
                        "image" === x.type ? (x.borderthickness = x.borderthickness || 0,
                        x.onload = function(t) {
                            var o = t.width
                              , r = t.height;
                            b = {},
                            x = this.config,
                            f = (Number(x.derivedX) - o / (2 * E.sFactor)) * E.sFactor,
                            m = (Number(x.derivedY) - r / (2 * E.sFactor)) * E.sFactor,
                            (b = K[J] || (K[J] = {})).x = f + E.translateX,
                            b.y = m + E.translateY,
                            b.element = e,
                            b.shapeInfo = {
                                type: "rect",
                                width: o,
                                height: r
                            },
                            o && r && Y.update(this.getId(), {
                                x: f,
                                y: m,
                                width: o,
                                height: r,
                                autoscale: 0
                            }),
                            y.imageLoadCount++,
                            y.imageLoadCount === y.imageCount && y._buildKdTree()
                        }
                        ,
                        x.onerror = function() {
                            y.imageLoadCount++,
                            y.imageLoadCount === y.imageCount && y._buildKdTree()
                        }
                        ,
                        y.imageCount++) : ((b = K[J] || (K[J] = {})).x = f,
                        b.y = m,
                        b.element = e,
                        b.shapeInfo = {
                            type: C,
                            sides: v,
                            radius: Number(R) + x.borderthickness / 2,
                            innerradius: k
                        }),
                        L.drawOptions.shape = x,
                        S.showLabels ? (u = x.labelpadding || S.labelPadding,
                        o = (t = y._getLabelOptions(B, u, x)).align,
                        r = t.valign,
                        n = L._labelBaseWidth,
                        l = L._labelBaseHeight,
                        i = L._labelXOffset,
                        s = L._labelYOffset,
                        (c = S.labelWrapWidth ? S.labelWrapWidth : y.getWrapWidth[o](n, Number(t.x) + i)) > u && (c -= u),
                        (h = S.labelWrapHeight ? S.labelWrapHeight : y.getWrapHeight[r](l, Number(t.y) + s)) > u && (h -= u),
                        L.drawOptions.label = (0,
                        d.extend2)({
                            type: "text"
                        }, {
                            text: M,
                            tooltext: x.tooltext,
                            x: t.x,
                            y: t.y,
                            align: o,
                            valign: t.valign,
                            wrap: 1,
                            wrapwidth: c,
                            wrapheight: h,
                            fontsize: _.fontSize / E.sFactor,
                            font: _.fontFamily,
                            color: L.fontColor,
                            bgcolor: L.labelBgColor || "",
                            bordercolor: L.labelBorderColor || ""
                        }),
                        {
                            markerShape: x,
                            markerLabel: L.drawOptions.label
                        }) : {
                            markerShape: x
                        }
                }
                ,
                o.highlightPoint = function(e, t) {
                    var o = e.element
                      , r = t.originalEvent
                      , a = this.getFromEnv("chart")
                      , n = this.getFromEnv("toolTipController")
                      , l = this.config.currentToolTip
                      , i = a.config.lastHoveredPoint;
                    i && i !== e && (i && this.hoverOutFn(i.element),
                    a.config.lastHoveredPoint = null,
                    n.hide(l)),
                    !1 !== e && ("click" === t.type || "touchstart" === t.type ? (a.config.lastHoveredPoint !== e && this.hoverFn(o),
                    this.clickFn(t, o)) : "mousemove" === t.type && a.config.lastHoveredPoint !== e && this.hoverFn(o),
                    o.config.tooltext && (l ? n.draw(r, o.config.tooltext, l) : l = this.config.currentToolTip = n.draw(r, o.config.tooltext)),
                    a.config.lastHoveredPoint = e)
                }
                ,
                o._drawConnectors = function() {
                    var e, t, o, r, a, n, l, i, s, c, h, d, u, p = this.getFromEnv("chart"), g = p.config.annotationConfig, f = this.components.connectors || (this.components.connectors = []), m = f.length, b = p.config.scalingParams, k = p.config.connectorOpts, v = k.showLabels, C = this.getChildren("mapAnnotations")[0], y = [], F = [], w = [], A = {};
                    for (w.push({
                        id: "connectorLabels",
                        fillalpha: "100",
                        items: F
                    }),
                    w.push({
                        id: "connectors",
                        fillalpha: "100",
                        items: y
                    }),
                    o = 0; o < m; o++)
                        f[o] && (A[o] = !0,
                        s = f[o].config.fromMarker.config,
                        c = f[o].config.toMarker.config,
                        a = s.options.x,
                        n = s.options.y,
                        l = c.options.x,
                        i = c.options.y,
                        f[o].config.x = a,
                        f[o].config.y = n,
                        f[o].config.tox = l,
                        f[o].config.toy = i,
                        u = Object.assign({
                            animationLabel: "markerItem"
                        }, f[o].config),
                        y.push(u),
                        f[o].labelConfig && v && (f[o].labelConfig.x = ((Number(a) + Number(l)) / 2).toString(),
                        f[o].labelConfig.y = ((Number(n) + Number(i)) / 2).toString(),
                        f[o].labelConfig.fontsize = k.fontSize / (b.scaleFactor * p.config.baseScaleFactor),
                        u = Object.assign({
                            animationLabel: "markerItem"
                        }, f[o].labelConfig),
                        F.push(u)));
                    for (h = C.addGroup(Object.assign(g, w[1]), this),
                    d = C.addGroup(Object.assign(g, w[0]), this),
                    o = 0,
                    r = 0; o < m; o++)
                        A[o] && ((e = h.items[r]) && (e.data("unfilteredConfig", y[r]),
                        e.addEventListener("fc-mouseover", f[o].config.onmouseover),
                        e.addEventListener("fc-mouseout", f[o].config.onmouseout),
                        e.addEventListener("fc-click", f[o].config.onclick)),
                        f[o].labelConfig && v && (t = d.items[r]) && t.data("unfilteredConfig"),
                        r++)
                }
                ,
                o.getShapeArgs = function() {
                    var e, t = this.config, o = (0,
                    d.extend2)({}, this.shapeObj);
                    return t.autoScale = 1,
                    o ? ("polygon" === o.type ? o.sides < 3 ? o.type = "circle" : o.startangle = t.startAngle : "arc" === o.type && (e = (o.radius || t.markerRadius) * t.autoScale,
                    o.radius = e,
                    o.innerradius = o.innerradius && o.innerradius * t.autoScale || .6 * e),
                    o) : null
                }
                ,
                o._getLabelOptions = function(e, t, o, r, n) {
                    var l, i, s, c = e && e.toLowerCase();
                    return this.getLabelAlignment[c] || (c = "center"),
                    i = Number(o.x),
                    s = Number(o.y),
                    l = r === a || n === a ? o.radius || 0 : /^(top|bottom)$/gi.test(c) && .5 * n || /^(left|right)$/gi.test(c) && .5 * r || 0,
                    l = Number(l) + Number(t),
                    this.getLabelAlignment[c](i, s, l)
                }
                ,
                o.addMarkerItem = function(e) {
                    var o, r, n, l, i, s, c, h, u = this.getFromEnv("chart"), p = e, g = this.components.markerObjs, f = this.components.shapeObjs, m = this.components.markerGroup, b = this.components.markerLabelGroup, k = this.getChildren("mapAnnotations")[0], v = this.getFromEnv("number-formatter"), C = u.config.markerOpts;
                    if (h = p.id.toLowerCase()) {
                        if (g[h])
                            return;
                        delete p.value,
                        this.imageLoadCount = 0,
                        (o = t._initializeMarkerItem(h, p, null)).dataset = this,
                        c = o.config.options.shapeid,
                        l = o.config,
                        s = p.value,
                        l.cleanValue = v.getCleanValue(s),
                        r = l.options,
                        null !== l.cleanValue ? l.formattedValue = v.dataLabels(s) : l.formattedValue = a,
                        l.fillColor = (0,
                        d.pluck)(r.fillcolor, r.color, C.fillColor),
                        l.fillAlpha = (0,
                        d.pluck)(r.fillalpha, r.alpha, C.fillAlpha),
                        l.fillRatio = (0,
                        d.pluck)(r.fillratio, C.fillRatio),
                        l.fillAngle = (0,
                        d.pluck)(r.fillangle, C.fillAngle),
                        l.borderThickness = (0,
                        d.pluckNumber)(r.borderthickness, C.borderThickness),
                        l.borderColor = (0,
                        d.pluck)(r.bordercolor, C.borderColor),
                        l.borderAlpha = (0,
                        d.pluck)(r.borderalpha, C.borderAlpha),
                        l.labelPadding = r.labelpadding || C.labelPadding,
                        l.options.tooltext = (0,
                        d.pluck)(r.tooltext, C.tooltext),
                        l.link = r.link,
                        c && (o.shapeObj = f[c && c.toLowerCase()]),
                        g[h] = o,
                        n = this._drawMarkerItem(o),
                        m && b && (n.markerShape && (i = Object.assign({
                            align: "center",
                            valign: "middle",
                            animationLabel: "markerItem",
                            autoscale: "image" === n.markerShape.type ? 0 : 1
                        }, n.markerShape),
                        o.markerShape = k.addItem(m.getId(), i, this),
                        o.markerShape.data("unfilteredConfig", i)),
                        n.markerLabel && (i = Object.assign({
                            animationLabel: "markerItem"
                        }, n.markerLabel),
                        o.markerLabel = k.addItem(b.getId(), i, this),
                        o.markerLabel.data("unfilteredConfig", i))),
                        this._buildKdTree()
                    }
                }
                ,
                o.updateMarkerItem = function(e, t) {
                    var o, r, a, n, l = this.getFromEnv("chart"), i = this.getChildren("mapAnnotations")[0], s = this.components.markerObjs, c = l.config.markerOpts, h = {}, u = s[e];
                    if (u) {
                        for (r in o = u.config.options,
                        (0,
                        d.extend2)(o, t),
                        this.imageLoadCount = 0,
                        a = u.config,
                        t)
                            h[r.toLowerCase()] = t[r] && t[r].toString();
                        a.fillColor = (0,
                        d.pluck)(h.fillcolor, h.color, c.fillColor),
                        a.fillAlpha = (0,
                        d.pluck)(h.fillalpha, h.alpha, c.fillAlpha),
                        a.fillRatio = (0,
                        d.pluck)(h.fillratio, c.fillRatio),
                        a.fillAngle = (0,
                        d.pluck)(h.fillangle, c.fillAngle),
                        a.borderThickness = (0,
                        d.pluckNumber)(h.borderthickness, c.borderThickness),
                        a.borderColor = (0,
                        d.pluck)(h.bordercolor, c.borderColor),
                        a.borderAlpha = (0,
                        d.pluck)(h.borderalpha, c.borderAlpha),
                        a.labelPadding = h.labelpadding || c.labelPadding,
                        a.options.tooltext = (0,
                        d.pluck)(h.tooltext, c.tooltext),
                        a.link = h.link,
                        n = this._drawMarkerItem(u).markerShape,
                        this._buildKdTree(),
                        i.update(e, n)
                    }
                }
                ,
                o.createContainer = function() {
                    var e = this.getLinkedParent()
                      , t = this.getFromEnv("animationManager")
                      , o = e.getChildContainer("layer1");
                    !this.getChildContainer("abovePlotGroup") && this.addChildContainer("abovePlotGroup", t.setAnimation({
                        el: "group",
                        attr: {
                            name: "abovePlotGroup",
                            opacity: 1
                        },
                        container: o,
                        component: this,
                        label: "group"
                    })),
                    !this.getChildContainer("belowPlotGroup") && this.addChildContainer("belowPlotGroup", t.setAnimation({
                        el: "group",
                        attr: {
                            name: "belowPlotGroup",
                            opacity: 1
                        },
                        container: o,
                        component: this,
                        label: "group"
                    }))
                }
                ,
                o._removeMarkerItem = function(e) {
                    var t, o, r = this.components, a = r.markerObjs, n = a[e], l = r.kdArrayMap, i = this.getChildren("mapAnnotations")[0];
                    n && (t = n.markerShape,
                    o = n.markerLabel,
                    t && i.destroy(t.getId()),
                    o && i.destroy(o.getId()),
                    delete l[e],
                    this._buildKdTree()),
                    delete a[e]
                }
                ,
                o.getElement = function(e) {
                    if (this.components.kDTree)
                        return this.components.kDTree.getNeighbour(e)
                }
                ,
                t
            }(l["default"]);
            t["default"] = I
        },
        1199: function(e, t, o) {
            "use strict";
            var r = o(187);
            t.__esModule = !0,
            t["default"] = void 0;
            var a = r(o(207))
              , n = o(208)
              , l = o(193)
              , i = o(201)
              , s = r(o(1197))
              , c = function(e) {
                e.configure && e.configure()
            };
            (0,
            i.addDep)({
                name: "mapsAnimation",
                type: "animationRule",
                extension: s["default"]
            });
            var h = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                (0,
                a["default"])(t, e);
                var o = t.prototype;
                return o.getType = function() {
                    return "group"
                }
                ,
                o.getName = function() {
                    return "mapGroup"
                }
                ,
                o.configure = function() {
                    this._mapChildren(c)
                }
                ,
                o.createContainer = function() {
                    var e, t = this.getLinkedParent(), o = this.getFromEnv("animationManager"), r = t.getChildContainer();
                    e = r.plotGroup,
                    !this.getChildContainer("plotShadow") && this.addChildContainer("plotShadow", o.setAnimation({
                        el: "group",
                        attr: {
                            name: "manager-plot-shadow",
                            opacity: 1
                        },
                        container: e,
                        component: this,
                        label: "group"
                    })),
                    !this.getChildContainer("plot") && this.addChildContainer("plot", o.setAnimation({
                        el: "group",
                        attr: {
                            name: "manager-plot",
                            opacity: 1
                        },
                        container: e,
                        component: this,
                        label: "group"
                    })),
                    !this.getChildContainer("layer0") && this.addChildContainer("layer0", o.setAnimation({
                        el: "group",
                        attr: {
                            name: "ann-layer0",
                            opacity: 1
                        },
                        container: r.abovePlotGroup,
                        component: this,
                        label: "group"
                    })),
                    !this.getChildContainer("layer1") && this.addChildContainer("layer1", o.setAnimation({
                        el: "group",
                        attr: {
                            name: "ann-layer1",
                            opacity: 1
                        },
                        container: r.abovePlotGroup,
                        component: this,
                        label: "group"
                    })),
                    t.config.labelsOnTop ? this.getChildContainer("layer0").toFront() : this.getChildContainer("layer0").toBack()
                }
                ,
                o._transformGroup = function() {
                    var e = this
                      , t = this.getFromEnv("chart")
                      , o = t.getFromEnv("chartInstance")
                      , r = e.getFromEnv("animationManager")
                      , a = t.jsonData
                      , n = e.getChildContainer("plot")
                      , i = e.getChildContainer("plotShadow")
                      , s = t.config.scalingParams;
                    n.hide(),
                    i.hide(),
                    t.config.entitiesReady = !1,
                    o.addEventListener("internal.mapdrawingcomplete", (function(t) {
                        t.detachHandler(),
                        l.hasSVG && (o.args.link && o.args.clickedEntityBox && a.chart.linkedcharttransition,
                        n && r.setAnimation({
                            el: n,
                            attr: {
                                transform: s.transformStr
                            },
                            component: e,
                            label: "group"
                        }),
                        i && r.setAnimation({
                            el: i,
                            attr: {
                                transform: s.transformStr
                            },
                            component: e,
                            label: "group"
                        })),
                        n.show(),
                        i.show()
                    }
                    )),
                    t.checkComplete()
                }
                ,
                o.draw = function() {
                    this.createContainer(),
                    this._transformGroup()
                }
                ,
                o.getDataLimits = function(e) {
                    var t, o = +Infinity, r = -Infinity, a = 0, n = function(e) {
                        r = Math.max(r, e.max),
                        o = Math.min(o, e.min)
                    };
                    return this._mapChildren((function(o) {
                        o.getState("removed") || !1 === o.getState("visible") ? e && (t = o.getDataLimits(e),
                        n(t)) : (a++,
                        t = o.getDataLimits(e),
                        n(t))
                    }
                    )),
                    a ? this.setState("visible", !0) : this.setState("visible", !1),
                    this.config.range || (this.config.range = {},
                    this.config.range.min = this.config.dataMin,
                    this.config.range.max = this.config.dataMax),
                    {
                        max: r,
                        min: o
                    }
                }
                ,
                t
            }(n.ComponentInterface);
            t["default"] = h
        }
    }])
}
));
