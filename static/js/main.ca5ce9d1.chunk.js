(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{52:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),i=(a(57),a(58),a(97)),m=a(100),c=a(102),s=a(104),u=a(105),p=a(103),h=a(37),g=a.n(h),x=Object(i.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function d(){var e=x();return o.a.createElement(m.a,{position:"static"},o.a.createElement(c.a,null,o.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(g.a,null)),o.a.createElement(s.a,{variant:"h6",className:e.title},"Meme Generator"),o.a.createElement(u.a,{color:"inherit"},"Anthony Gonzalez")))}var f=a(109),v=a(38),b=a(39),E=a(40),T=a(24),y=a(42),C=a(41),k=a(106),j=a(107),w=a(108),I=a(110),H=Object(i.a)({root:{marginTop:40,minWidth:275},title:{fontSize:14},memeText:{fontFamily:"impact",fontSize:"2.5em",textTransform:"uppercase",color:"white",letterSpacing:1,position:"absolute",left:0,right:0,margin:12,textShadow:"2px 2px 0 #000,  -2px -2px 0 #000, 2px -2px 0 #000,  -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000,  -2px 0px 0 #000, 2px 2px 5px #000"}});function O(e){var t=H();return o.a.createElement(k.a,{className:t.root},o.a.createElement(j.a,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{display:"flex",flexWrap:"wrap"}},o.a.createElement(I.a,{id:"topText",name:"topText",label:"Top Text",fullWidth:!0,style:{margin:12},value:e.topText,onChange:e.onChange}),o.a.createElement(I.a,{id:"bottomText",name:"bottomText",label:"Bottom Text",fullWidth:!0,style:{margin:12},value:e.bottomText,onChange:e.onChange})),o.a.createElement("div",{style:{margin:12,textAlign:"center",position:"relative"}},o.a.createElement("img",{src:e.randomImage,alt:"",style:{maxHeight:400}}),o.a.createElement("h3",{className:t.memeText,style:{top:0}},e.topText),o.a.createElement("h3",{className:t.memeText,style:{bottom:0}},e.bottomText))),o.a.createElement(w.a,null,o.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:e.onClick},"Get Random Image")))}var M=function(e){Object(y.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImages:[]},n.onChangeHandle=n.onChangeHandle.bind(Object(T.a)(n)),n.onCLickHandle=n.onCLickHandle.bind(Object(T.a)(n)),n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;console.log(a[0]),e.setState({allMemeImages:a})}))}},{key:"onChangeHandle",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"onCLickHandle",value:function(){var e=this.getRandomItem(this.state.allMemeImages).url;this.setState({randomImage:e})}},{key:"getRandomItem",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){return o.a.createElement(O,{topText:this.state.topText,bottomText:this.state.bottomText,randomImage:this.state.randomImage,onClick:this.onCLickHandle,onChange:this.onChangeHandle})}}]),a}(n.Component);function S(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(f.a,{maxWidth:"md"},o.a.createElement(M,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.ca5ce9d1.chunk.js.map