(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),s=n(8),r=n.n(s),i=(n(14),n(2)),o=n(3),c=n(6),u=n(4),m=n(5),d=n(1),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;var t=localStorage.getItem("history")||null;if(null!=t){t=JSON.parse(t);var n=l.a.createElement("div",{className:"previous"},l.a.createElement("h3",null,"Last winner:"),l.a.createElement("img",{src:t.pic}),l.a.createElement("p",null,t.name),l.a.createElement("p",null,"Score: ",(t.likes+t.followers+t.following).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))}else n=null;return l.a.createElement("section",null,l.a.createElement("div",{className:"background-img"}),l.a.createElement("div",{className:"rain-img"}),l.a.createElement("header",null,l.a.createElement("h1",null,"SOCIAL TATAKAI")),l.a.createElement("h2",null,"Choose your platform!"),l.a.createElement("div",{className:"social-options"},l.a.createElement("div",{onClick:function(){return e.props.clickHandler("twitter")},className:"social-options__icon"},l.a.createElement("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})))),n)}}]),t}(l.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.isLoading&&(document.getElementById("vs-js").style.animation="rotate .25s linear infinite");var e=this.props.isActive?l.a.createElement("section",{className:"cont shake-slow"},l.a.createElement("div",{className:"players"},l.a.createElement("div",{className:"player players__1"},l.a.createElement("input",{id:"user1-js",className:"players__input",type:"text",name:"",placeholder:"Enter username"})),l.a.createElement("div",{className:"player players__2"},l.a.createElement("input",{id:"user2-js",className:"players__input",type:"text",name:"",placeholder:"Enter username"}))),l.a.createElement("h1",{id:"vs-js"},"VS"),l.a.createElement("div",{className:"cont__button"},l.a.createElement("button",{onClick:this.props.clickHandler},"FIGHT"))):null;return l.a.createElement("div",null,e)}}]),t}(l.a.Component),f=function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).props.data;a=JSON.parse(a[0]);var l=n.props.data;function s(e){var t,n=e.slice(-1);if("K"===n)t="000";else{if("M"!==n)return parseInt(e.replace(",",""));t="000000"}return parseInt(e.slice(0,e.length-1)+t)}return l=JSON.parse(l[1]),console.log("User 1 data: ",a),n.user1={name:a[0].url.slice(20),pic:a[0].pageFunctionResult[0],tweetCount:s(a[0].pageFunctionResult[1].trim()),following:s(a[0].pageFunctionResult[2]),followers:s(a[0].pageFunctionResult[3]),likes:s(a[0].pageFunctionResult[4])},n.user2={name:l[0].url.slice(20),pic:l[0].pageFunctionResult[0],tweetCount:s(l[0].pageFunctionResult[1].trim()),following:s(l[0].pageFunctionResult[2]),followers:s(l[0].pageFunctionResult[3]),likes:s(l[0].pageFunctionResult[4])},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){function e(e){return+(e.followers/e.following).toFixed(2)}function t(e){return e.followers+e.following+e.likes}var n,a;n=this.user1,a=this.user2,n.followers>a.followers?document.getElementById("1-followers").classList.add("active-winner"):document.getElementById("2-followers").classList.add("active-winner"),n.following>a.following?document.getElementById("1-following").classList.add("active-winner"):document.getElementById("2-following").classList.add("active-winner"),n.likes>a.likes?document.getElementById("1-likes").classList.add("active-winner"):document.getElementById("2-likes").classList.add("active-winner"),t(n)>t(a)?document.getElementById("1-power").classList.add("active-winner"):document.getElementById("2-power").classList.add("active-winner"),e(n)>e(a)?document.getElementById("1-followersPer").classList.add("active-winner"):document.getElementById("2-followersPer").classList.add("active-winner"),n.followers-n.following>a.followers-a.following?document.getElementById("1-difference").classList.add("active-winner"):document.getElementById("2-difference").classList.add("active-winner")}},{key:"render",value:function(){var e;console.log("USER 1: ",this.user1),console.log("USER 2: ",this.user2),a(this.user1)>a(this.user2)?(console.log("User1 wins"),e=this.user1):(console.log("User 2 wins"),e=this.user2);var t=JSON.stringify(e);function n(e){return+(e.followers/e.following).toFixed(2)}function a(e){return e.followers+e.following+e.likes}function s(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return localStorage.setItem("history",t),l.a.createElement("section",{className:"results-section"},l.a.createElement("div",{className:"flash"}),l.a.createElement("div",{className:"winner"},l.a.createElement("img",{className:"winner__img",src:e.pic,alt:e.name}),l.a.createElement("h1",null,l.a.createElement("a",{className:"active-winner",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/"+e.name},"@",e.name)),l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/"+this.user1.name},"@",this.user1.name)),l.a.createElement("h2",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/"+this.user2.name},"@",this.user2.name))),l.a.createElement("div",{className:"results"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{id:"1-followers"},s(this.user1.followers)),l.a.createElement("p",{id:"1-following"},s(this.user1.following)),l.a.createElement("p",{id:"1-followersPer"},s(n(this.user1))),l.a.createElement("p",{id:"1-difference"},s(this.user1.followers-this.user1.following)),l.a.createElement("p",{id:"1-likes"},s(this.user1.likes)),l.a.createElement("p",{id:"1-power"},s(a(this.user1)))),l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"Followers"),l.a.createElement("h4",null,"Following"),l.a.createElement("h4",null,"Followers per following"),l.a.createElement("h4",null,"Difference"),l.a.createElement("h4",null,"Likes"),l.a.createElement("h4",null,"TOTAL")),l.a.createElement("div",{className:"col"},l.a.createElement("p",{id:"2-followers"},s(this.user2.followers)),l.a.createElement("p",{id:"2-following"},s(this.user2.following)),l.a.createElement("p",{id:"2-followersPer"},s(n(this.user2))),l.a.createElement("p",{id:"2-difference"},s(this.user2.followers-this.user2.following)),l.a.createElement("p",{id:"2-likes"},s(this.user2.likes)),l.a.createElement("p",{id:"2-power"},s(a(this.user2)))))))}}]),t}(l.a.Component),g=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:"",isEmpty:!0,isLoading:!1,nameEntered:!1,twitterData:[],socialStatus:"",isIntroActive:!0,isSetUsersActive:!1,isResultsActive:!1,whichSocial:"",payloads:[]},n.platformHandler=n.platformHandler.bind(Object(d.a)(Object(d.a)(n))),n.usernamesEntered=n.usernamesEntered.bind(Object(d.a)(Object(d.a)(n))),n.userHandler=n.userHandler.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"userHandler",value:function(){var e=document.getElementById("user1-js").value,t=document.getElementById("user2-js").value;this.usernamesEntered(e),this.usernamesEntered(t),this.setState({isLoading:!0})}},{key:"usernamesEntered",value:function(e){var t=this;e=e;console.log("Beginning parse of ".concat(e));var n=function(e){if(4===e.readyState){var t=JSON.parse(e.responseText),n=t.finishedAt,s=t.resultsUrl,r=t._id;return null==n?l(r):a(s)}},a=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),s(t.responseText)},l=function(e){console.log("Original poll still runnning, executing long poller"),setTimeout(function(){var t=new XMLHttpRequest;t.open("GET","https://api.apify.com/v1/execs/".concat(e)),t.onreadystatechange=function(){n(this)},t.send()},5e3)},s=function(n){console.log("Finished parsing ".concat(e));var a=t.state.payloads||[];a.push(n),t.setState({payloads:a}),a.length>=2&&(console.log("DONE!"),console.log(JSON.parse(a[0])),t.setState({isSetUsersActive:!1,isResultsActive:!0}))};if(e){var r="https://".concat(this.state.whichSocial,".com/").concat(e),i={_id:"yxCYAw3hon6qnebkN",startUrls:[{key:"START",value:r}]};console.log("Hitting ".concat(r));var o=new XMLHttpRequest;o.open("POST","https://api.apify.com/v1/F6zg3S4YnudDgw5xe/crawlers/yxCYAw3hon6qnebkN/execute?token=xSCGuWqoaXFFmfzrvNH9zW43L"),o.setRequestHeader("Content-Type","application/json"),o.onreadystatechange=function(){n(this)},o.send(JSON.stringify(i))}else console.log("Please enter a valid username")}},{key:"platformHandler",value:function(e){var t=this;console.log(e),Array(document.getElementsByClassName("social-options__icon")).forEach(function(e,t){e[t].style.animation=""}),this.setState({isSetUsersActive:!0,whichSocial:e}),setTimeout(function(){t.setState({isIntroActive:!1})},4e3)}},{key:"render",value:function(){var e=this.state.isIntroActive?l.a.createElement(p,{clickHandler:this.platformHandler}):null;console.log("Render isLoading: ".concat(this.state.isLoading));var t=this.state.isSetUsersActive?l.a.createElement(h,{isLoading:this.state.isLoading,clickHandler:this.userHandler,whichSocial:this.state.whichSocial,isActive:this.state.isSetUsersActive}):null,n=this.state.isResultsActive?l.a.createElement(f,{data:this.state.payloads}):null;return l.a.createElement("div",null,l.a.createElement("div",{className:"landscapeCheck"},l.a.createElement("h2",null,"Please rotate to portrait")),n,e,t)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.15f4f4ec.chunk.js.map