(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{445:function(e,t){},446:function(e,t){},564:function(e,t,a){},587:function(e,t,a){"use strict";a.r(t);var n=a(584),i=a(436),r=a.n(i),o=a(437),s=a(103),c=a(104),l=a(106),m=a(105),h=a(107),p=a(108),d=a(6),u=a.n(d),f=a(468),g=a(441),b=a.n(g),v=a(502),y=a.n(v),k=a(506),j=a.n(k),E=a(583),w=a(465),S=(a(564),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).closeNotification=a.closeNotification.bind(Object(p.a)(Object(p.a)(a))),a.state={showNotification:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"closeNotification",value:function(){this.setState({showNotification:!1}),localStorage.setItem("notification","closed")}},{key:"showNotification",value:function(){return"closed"!==localStorage.getItem("notification")}},{key:"componentDidMount",value:function(){var e=this;!1!==this.showNotification()&&setTimeout(function(){e.setState({showNotification:!0})},15e3)}},{key:"render",value:function(){return!1===this.showNotification()?"":u.a.createElement("div",{className:(this.state.showNotification?"active":"")+" alert position-absolute notification"},u.a.createElement(w.a,{className:"close",onClick:this.closeNotification},u.a.createElement("span",{"aria-hidden":"true"},"\xd7")),"V\u0113lies sa\u0146emt pazi\u0146ojumu e-past\u0101 par jauniem datiem? ",u.a.createElement("a",{href:"http://eepurl.com/dpYH4r",target:"_blank",rel:"noopener noreferrer"},"Klik\u0161\u0137ini te"))}}]),t}(u.a.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggleMonthSlider=a.toggleMonthSlider.bind(Object(p.a)(Object(p.a)(a))),a.onSliderChange=a.onSliderChange.bind(Object(p.a)(Object(p.a)(a))),a.state={showMonthSlider:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleMonthSlider",value:function(){this.setState({showMonthSlider:!this.state.showMonthSlider})}},{key:"onSelectRegion",value:function(e){var t={region:e};"latvia"===e&&"land"===this.props.category&&(t.category="apartment"),this.props.onUpdate(t)}},{key:"onSelectCategory",value:function(e){this.props.onUpdate({category:e})}},{key:"onSelectType",value:function(e){this.props.onUpdate({type:e})}},{key:"onSliderChange",value:function(e){this.props.onUpdate({activeTimeframe:e})}},{key:"render",value:function(){var e,t=Object.keys(this.props.timeframes).length-1;switch(this.props.category){case"apartment":e="Dz\u012bvoklis";break;case"house":e="M\u0101ja";break;case"land":e="Zeme"}return u.a.createElement("footer",null,u.a.createElement(S,null),this.state.showMonthSlider&&u.a.createElement("div",{className:"slider"},u.a.createElement(E.a,{vertical:!0,dots:!0,min:0,max:t,marks:this.props.timeframes,step:1,onChange:this.onSliderChange,value:this.props.activeTimeframe,included:!1})),u.a.createElement(w.f,{className:"navbar-dark bg-dark fixed-bottom"},u.a.createElement(w.e,null,u.a.createElement(w.a,{color:"link",className:this.state.showMonthSlider?"active":"",onClick:this.toggleMonthSlider},u.a.createElement("i",{className:"far fa-calendar-alt"}),u.a.createElement("span",{className:"ml-2 d-none d-sm-inline-block"},this.props.timeframes[this.props.activeTimeframe])),u.a.createElement(w.g,null,u.a.createElement(w.d,{nav:!0},u.a.createElement("i",{className:"far fa-map"}),u.a.createElement("span",{className:"ml-2 d-none d-sm-inline-block"},"latvia"===this.props.region?"Latvija":"R\u012bga")),u.a.createElement(w.c,{right:!0},u.a.createElement(w.b,{header:!0},"Re\u0123ions"),u.a.createElement(w.b,{active:"riga"===this.props.region,onClick:this.onSelectRegion.bind(this,"riga")},"R\u012bga"),u.a.createElement(w.b,{active:"latvia"===this.props.region,onClick:this.onSelectRegion.bind(this,"latvia")},"Latvija"))),u.a.createElement(w.g,null,u.a.createElement(w.d,{nav:!0},u.a.createElement("i",{className:"far fa-building"}),u.a.createElement("span",{className:"ml-2 d-none d-sm-inline-block"},e)),u.a.createElement(w.c,null,u.a.createElement(w.b,{header:!0},"\u012apa\u0161uma veids"),u.a.createElement(w.b,{active:"apartment"===this.props.category,onClick:this.onSelectCategory.bind(this,"apartment")},"Dz\u012bvoklis"),u.a.createElement(w.b,{active:"house"===this.props.category,onClick:this.onSelectCategory.bind(this,"house")},"M\u0101ja"),"latvia"!==this.props.region&&u.a.createElement(w.b,{active:"land"===this.props.category,onClick:this.onSelectCategory.bind(this,"land")},"Zeme"))),u.a.createElement(w.g,null,u.a.createElement(w.d,{nav:!0},u.a.createElement("i",{className:"far fa-handshake"}),u.a.createElement("span",{className:"ml-2 d-none d-sm-inline-block"},"rent"===this.props.type?"\u012ar\u0113":"P\u0101rdod")),u.a.createElement(w.c,null,u.a.createElement(w.b,{header:!0},"Dar\u012bjumu tips"),u.a.createElement(w.b,{active:"sell"===this.props.type,onClick:this.onSelectType.bind(this,"sell")},"P\u0101rdod"),u.a.createElement(w.b,{active:"rent"===this.props.type,onClick:this.onSelectType.bind(this,"rent")},"\u012ar\u0113"))))))}}]),t}(u.a.Component),C=56.98,N=24.105078,M=[{featureType:"all",elementType:"all",stylers:[{invert_lightness:!0},{saturation:10},{lightness:30},{gamma:.5},{hue:"#435158"}]}],T={v:"3.exp",key:"AIzaSyDR3WZeo7IIIIPPb114g-kyl3zgdGotsL0"},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onMapCreated=a.onMapCreated.bind(Object(p.a)(Object(p.a)(a))),a.onToolbarUpdate=a.onToolbarUpdate.bind(Object(p.a)(Object(p.a)(a))),a.state={region:"riga",category:"apartment",type:"sell",timeframes:{},activeTimeframe:null},a.loadedRegions=[],a.priceData=[],j.a.configure({showSpinner:!1,speed:1e3,trickleSpeed:150}),j.a.start(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onMapCreated",value:function(e){this.loadRegion(e),this.map=e,this.infoWindow=new window.google.maps.InfoWindow,this.onMapChanged()}},{key:"loadRegion",value:function(e){var t=this.state.region;this.loadedRegions.indexOf(t)>=0||(this.loadedRegions.push(t),e.data.loadGeoJson("https://raw.githubusercontent.com/brokalys/sls-data-extraction/master/data/".concat(t,"-geojson.json")))}},{key:"onMapChanged",value:function(){var e=Object(o.a)(r.a.mark(function e(){var t,a,n=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return!1===j.a.isStarted()&&j.a.start(),(t=this.map).setOptions({disableDefaultUI:!0,zoomControl:!0,zoomControlOptions:{position:window.google.maps.ControlPosition.TOP_LEFT}}),e.prev=3,e.next=6,this.loadPriceData();case 6:this.priceData=e.sent,a=this.priceData.timeframes.map(function(e,t){return n.getMonthName(t)}),this.setState({timeframes:Object.assign({},a)}),null===this.state.activeTimeframe&&this.setState({activeTimeframe:a.length-1}),e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(3),console.error(e.t0),alert("Something really bad happened. Please try again later."),e.abrupt("return");case 17:this.changeActiveTimeframe(),t.data.addListener("click",function(e){var a=e.feature.getProperty("apkaime"),i=n.findRegionByName(a);if(i&&!(i.price<=0)){var r=i.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g,"$1'"),o=n.getMonthName(n.state.activeTimeframe);n.infoWindow.setContent("Medi\u0101n\u0101 cena:<br><strong>".concat(r," EUR</strong> (").concat(i.name,")<hr>").concat(o)),n.infoWindow.setPosition(e.latLng),n.infoWindow.open(t)}}),j.a.done();case 20:case"end":return e.stop()}},e,this,[[3,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"changeActiveTimeframe",value:function(){var e=this;this.infoWindow.close();var t=this.priceData,a=t.header,i=t.body[this.state.activeTimeframe],r=Object(n.a)(new Set(i)).length,o=y()({colormap:"autumn",nshades:r,format:"hex"}).reverse();this.regions=a.map(function(e,t){return{name:e,price:parseInt(i[t],10)}}).sort(function(e,t){return e.price-t.price}).map(function(e,t,a){var n=a[t-1]||{},i=n.price===e.price?n.colorIndex||0:n.colorIndex+1;return e.colorIndex=i,e.color=o[i],e}),this.map.data.setStyle(function(t){var a=t.getProperty("apkaime"),n=e.findRegionByName(a);return!n||n.price<=0||t.getProperty("Level")<2&&"R\u012bga"!==a?{visible:!1}:{strokeColor:n.color,strokeWeight:.1,fillColor:n.color,fillOpacity:.5,zIndex:t.getProperty("Level")||1}})}},{key:"onToolbarUpdate",value:function(e){var t=this;this.setState(e,function(){e.region&&t.loadRegion(t.map),void 0!==e.activeTimeframe&&t.changeActiveTimeframe(),(e.category||e.type||e.region)&&t.onMapChanged()})}},{key:"render",value:function(){return u.a.createElement("div",{className:"wrapper"},u.a.createElement(f.Gmaps,{width:"100%",height:"100%",lat:C,lng:N,zoom:11,params:T,styles:M,onMapCreated:this.onMapCreated}),u.a.createElement(O,{region:this.state.region,category:this.state.category,type:this.state.type,timeframes:this.state.timeframes,activeTimeframe:this.state.activeTimeframe,onUpdate:this.onToolbarUpdate}))}},{key:"loadPriceData",value:function(){var e=Object(o.a)(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/brokalys/data/master/data/".concat(this.state.category,"/").concat(this.state.type,"-monthly-").concat(this.state.region,".csv"));case 2:return t=e.sent,e.next=5,t.text();case 5:return a=e.sent,n=b()(a),e.abrupt("return",{header:n[0].slice(3),body:n.slice(1).map(function(e){return e.slice(3)}),timeframes:n.slice(1).map(function(e){return e.slice(0,2)})});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"findRegionByName",value:function(e){return this.regions.find(function(t){return t.name===e})}},{key:"getMonthName",value:function(e){var t,a=2018+Math.floor(e/12);switch(e%12){case 0:t="Janv\u0101ris";break;case 1:t="Febru\u0101ris";break;case 2:t="Marts";break;case 3:t="Apr\u012blis";break;case 4:t="Maijs";break;case 5:t="J\u016bnijs";break;case 6:t="J\u016blijs";break;case 7:t="Augusts";break;case 8:t="Septembris";break;case 9:t="Oktobris";break;case 10:t="Novembris";break;case 11:t="Decembris"}return[t,a].join(", ")}}]),t}(u.a.Component);t.default=x}}]);
//# sourceMappingURL=2.a430f0e9.chunk.js.map