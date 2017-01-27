define("@redux-store",["require","exports","redux","redux-thunk","module"],function(e,t,n,r,o){"use strict";var i=function(e,t){switch(void 0===e&&(e={}),console.log("userReducer was called with state",e,"and action",t),t.type){case"GET_REACTJS_REDDIT":return{items:t.result};default:return e}},l=n.createStore(i,n.compose(n.applyMiddleware(r.default)));return console.log(" => store state after initialization:",l.getState()),console.log(o.id),l});var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)};define("/home/oleg/WebstormProjects/oresoftware/hr4r2/public/js/views/home/home.js",["require","exports","react","@redux-store","uuid"],function(e,t,n,r,o){"use strict";var i=function(){return function(e){fetch("https://www.reddit.com/subreddits/search.json?q=reactjs",{method:"get"}).then(function(t){console.log("response => ",t),t.json().then(function(t){console.log("json => ",t),e({type:"GET_REACTJS_REDDIT",result:t.data.children.map(function(e){return{title:e.data.title,description:e.data.public_description,image:e.data.header_img}})})})}).catch(function(e){console.error(e.stack||e)})}},l=0;return function(e){function t(t){var n=e.call(this,t)||this;return n.onClickRetrieve=n.onClickRetrieve.bind(n),n.state={clicked:!1,items:[]},n}return __extends(t,e),t.prototype.componentDidMount=function(){var e=this;r.getState();this.unsubscribe=r.subscribe(function(){console.log("home is subscribed => "+l++,"items =>",r.getState().items),e.setState({items:r.getState().items})})},t.prototype.componentWillUnmount=function(){console.log("component will unsubscribe"),this.unsubscribe()},t.prototype.collateRedditResuls=function(){return this.state.items.map(function(e,t){var r={backgroundColor:t%2===0?"#ffa500":"#0000CD"};return n.createElement("tr",{style:r,key:o()},n.createElement("td",null,e.title),n.createElement("td",null," ",e.description),n.createElement("td",null,n.createElement("img",{src:e.image})))})},t.prototype.onClickRetrieve=function(){this.state.clicked=!0,r.dispatch(i())},t.prototype.getTableHeader=function(){return n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null," Title"),n.createElement("th",null," Description"),n.createElement("th",null," Image ")))},t.prototype.getTableBody=function(){return n.createElement("tbody",null,this.collateRedditResuls())},t.prototype.render=function(){return n.createElement("div",null,n.createElement("button",{onClick:this.onClickRetrieve}," Click to retrieve SubReddits on ReactJS"),n.createElement("div",null,n.createElement("div",null,"______________________________"),n.createElement("b",null," Reddit Search Results:"),n.createElement("div",null,"______________________________"),this.state.clicked?n.createElement("table",null,this.getTableHeader(),this.getTableBody()):null))},t}(n.Component)}),define("undefined",function(){});