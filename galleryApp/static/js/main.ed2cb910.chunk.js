(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),r=n(4),s=n.n(r),u=n(5),c=n(7),l=n(6),m=n(8),h=(n(13),n(0)),g=function(t){var e=t.imageDetails,n=t.updateImage,a=t.isActive,i=e.id,r=e.thumbnailUrl,s=e.thumbnailAltText,u=a?"active":"";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",onClick:function(){n(i)},children:Object(h.jsx)("img",{className:u,src:r,alt:s})})})},o=(n(15),[{id:0,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",imageAltText:"nature mountain with pond",thumbnailAltText:"nature mountain with pond thumbnail"},{id:1,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",imageAltText:"nature sunset",thumbnailAltText:"nature sunset thumbnail"},{id:2,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",imageAltText:"nature mountain with ocean",thumbnailAltText:"nature mountain with ocean thumbnail"},{id:3,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",imageAltText:"nature mountain with forest",thumbnailAltText:"nature mountain with forest thumbnail"},{id:4,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",imageAltText:"nature leaves",thumbnailAltText:"nature leaves thumbnail"},{id:5,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",imageAltText:"nature tree",thumbnailAltText:"nature tree thumbnail"},{id:6,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",imageAltText:"nature waterfall",thumbnailAltText:"nature waterfall thumbnail"},{id:7,imageUrl:"https://assets.ccbp.in/frontend/react-js/nature-river-img.png",thumbnailUrl:"https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",imageAltText:"nature river",thumbnailAltText:"nature river thumbnail"}]),p=function(t){function e(){var t;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(l.a)(this,e,[].concat(a))).state={activeImageId:o[0].id},t.getActiveImageId=function(){var e=t.state.activeImageId;return o.filter((function(t){return e===t.id}))[0]},t.updateImage=function(e){t.setState({activeImageId:e})},t}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.getActiveImageId(),n=e.imageUrl,a=e.imageAltText;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{className:"img",src:n,alt:a}),Object(h.jsx)("h1",{className:"heading",children:"Nature Photography"}),Object(h.jsx)("p",{className:"para",children:"Nature Photography by Rahul"}),Object(h.jsx)("ul",{children:o.map((function(n){return Object(h.jsx)(g,{imageDetails:n,updateImage:t.updateImage,isActive:n.id===e.id},n.id)}))})]})}}])}(a.Component),b=p,d=(n(16),function(){return Object(h.jsx)(b,{})});s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ed2cb910.chunk.js.map