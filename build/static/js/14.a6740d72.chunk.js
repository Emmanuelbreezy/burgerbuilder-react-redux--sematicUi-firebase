(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[14],{402:function(e,t,a){e.exports={Posts:"PostWrapper_Posts__1f4ia"}},503:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a(35),r=a(36),o=a(37),c=a(38),i=a(0),s=a.n(i),m=a(12),u=a(41),h=a(102),d=a(330),p=a(333),E=a(327),f=a(325),b=a(332),g=a(11),v=a(505),y=a(378),O=a(396),k=a(371),P=a(57),j=a(499),w=function(e){return s.a.createElement(i.Fragment,null,s.a.createElement(p.a,p.a.onlyMobile,s.a.createElement(k.a.Column,{style:{marginBottom:"0.5em"}},s.a.createElement(j.a,{link:!0,fluid:!0,raised:!0,header:e.title,meta:e.author,description:"",onClick:e.clicked}))),s.a.createElement(p.a,{minWidth:768},s.a.createElement(k.a.Column,{width:8,style:{marginBottom:"0.5em"}},s.a.createElement(j.a,{raised:!0,link:!0,header:e.title,meta:e.author,description:"",onClick:e.clicked}))))},C=a(397),I=a(500),S=a(370),D=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={loadedPost:null,loading:!1},a.deletePostHandler=function(){P.a.delete("/posts/"+a.props.match.params.id).then((function(e){console.log(e,"RESPONSE DATA")})).catch((function(e){alert("Network error",e)}))},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.loadData()}},{key:"componentDidUpdate",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=this.props.match.params.id;t&&(this.state.loadedPost&&this.state.loadedPost.id===+t||P.a.get("/posts/"+t).then((function(t){t&&e.setState({loadedPost:t.data})})).catch((function(t){e.setState({loading:!1}),alert("Network error",t)})))}},{key:"render",value:function(){var e=s.a.createElement(C.a,null,s.a.createElement(I.a,null,s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null),s.a.createElement(I.a.Line,null)));return this.props.loading||this.state.loadedPost&&(e=s.a.createElement(p.a,{as:k.a,style:{marginTop:"1em"}},s.a.createElement(k.a.Row,{textAlign:"center"},s.a.createElement(k.a.Column,null,s.a.createElement(j.a,{fluid:!0,centered:!0},s.a.createElement(j.a.Content,null,s.a.createElement(j.a.Header,null,this.state.loadedPost.title),s.a.createElement(j.a.Meta,null,"Emma"),s.a.createElement(j.a.Description,null,this.state.loadedPost.body)),s.a.createElement(j.a.Content,{extra:!0},s.a.createElement(S.a,{negative:!0,content:"Delete",onClick:this.deletePostHandler}))))))),e}}]),t}(i.Component),M=a(402),A=a.n(M);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={posts:[],SelectedPostId:null,error:!1,loading:!1},a.postSelectorHandler=function(e){a.props.history.push("/blog/posts/"+e)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),P.a.get("/posts").then((function(t){if(t){var a=t.data.slice(0,4).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{author:"Emma"})}));e.setState({loading:!1,posts:a})}})).catch((function(t){e.setState({error:!0,loading:!1}),alert("Network error",t)}))}},{key:"render",value:function(){var e=this,t=this.state.posts.map((function(t){return s.a.createElement(w,{identity:t.id,key:t.id,title:t.title,author:t.author,clicked:function(){return e.postSelectorHandler(t.id)}})})),a=null;return a=this.state.loading?s.a.createElement(v.a.Dimmable,{as:E.a,textAlign:"center",style:{paddingTop:"40%"}},s.a.createElement(v.a,{inverted:!0,active:!0},s.a.createElement(y.a,{size:"large",inverted:!0}))):this.state.error?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(O.a,{as:"h2"},"An Error occured"),s.a.createElement("p",null,"Content could't be loaded,check connection..")):t.length>0?t:null,s.a.createElement(i.Fragment,null,s.a.createElement("section",{className:A.a.Posts},s.a.createElement(k.a,null,s.a.createElement(k.a.Row,null,a))),s.a.createElement("section",null,s.a.createElement(u.b,{path:this.props.match.url+"/:id",exact:!0,component:D})))}}]),t}(i.Component),H=s.a.lazy((function(){return Promise.all([a.e(1),a.e(15)]).then(a.bind(null,493))})),R=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={visible:!1,activeItem:"home",auth:!1},a.activeMenuItem=function(e,t){var n=t.name;a.setState({activeItem:n,visible:!1})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.setState({auth:!0})}),2500),s.a.createElement(h.a,null,s.a.createElement("br",null),s.a.createElement(d.a,{fixed:"top",inverted:!0,color:"white"},s.a.createElement(p.a,{as:E.a,minWidth:768},s.a.createElement(d.a.Menu,{position:"left"},s.a.createElement(d.a.Item,{name:"home",as:"a",href:"/blog",style:{color:"#fff"},header:!0},"BlogApp")),s.a.createElement(d.a.Menu,{position:"left"},s.a.createElement(d.a.Item,{onClick:this.activeMenuItem,to:"/blog/posts/",as:m.b,name:"home",exact:!0,style:{color:"#fff"}},"Posts"),s.a.createElement(d.a.Item,{onClick:this.activeMenuItem,to:"/blog/newpost",as:m.b,name:"post",style:{color:"#fff"}},"Create Post"))),s.a.createElement(p.a,Object.assign({as:E.a},p.a.onlyMobile),s.a.createElement(d.a.Menu,{position:"left"},s.a.createElement(d.a.Item,{onClick:function(){return e.setState({visible:!0})},style:{color:"#fff"}},s.a.createElement(f.a,{name:"bars"})),s.a.createElement(d.a.Item,{as:"a",href:"/blog",header:!0,style:{color:"#fff"}},"BlogApp")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(b.a.Pushable,null,s.a.createElement(b.a,{as:d.a,animation:"overlay",direction:"left",vertical:!0,visible:this.state.visible,onHide:function(){return e.setState({visible:!1})}},s.a.createElement(d.a.Item,{header:!0,onClick:this.unauth}),s.a.createElement(d.a.Item,{onClick:this.activeMenuItem,as:"a",header:!0,href:"/blog"},"BlogApp"),s.a.createElement(d.a.Item,{onClick:this.activeMenuItem,as:m.b,name:"home",to:"/blog/posts/",exact:!0},"Posts"),s.a.createElement(d.a.Item,{onClick:this.activeMenuItem,as:m.b,name:"post",to:{pathname:"/blog/newpost",hash:"#submit",search:"?q=true"}},"Create Post")),s.a.createElement(b.a.Pusher,{dimmed:this.state.visible},s.a.createElement(p.a,{as:E.a,style:{height:"1000px",paddingTop:"1em"}},s.a.createElement(u.d,null,s.a.createElement(i.Suspense,{fallback:s.a.createElement("div",null,"loading...")},s.a.createElement(u.b,{path:"/blog/newpost",component:H}),s.a.createElement(u.b,{path:"/blog/posts",component:L})),s.a.createElement(u.b,{render:function(){return s.a.createElement("h1",null," 404 ERROR ")}}),s.a.createElement(u.b,{path:"/blog/user",exact:!0,render:function(){return s.a.createElement("h1",null," Invalid Path ")}}))))))}}]),t}(i.Component);t.default=R}}]);
//# sourceMappingURL=14.a6740d72.chunk.js.map