(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),i=(n(17),n(1)),s=n(2),l=n(9),u=n(5),d=n(6),m=n(10),f=n(7),v=n(11),h=n(8),p=n.n(h),g=function(e){var t=e.item,n=t.edit,o=t.name,r=t.status,c=t.id,i=e.updateToDo;return a.a.createElement(a.a.Fragment,null,n?a.a.createElement("input",{value:o,onChange:function(e){var t=e.target.value;return i({id:c,name:t})},onBlur:function(){return i({id:c,name:o,edit:!n})},onKeyPress:function(e){return"Enter"===e.key?i({id:c,edit:!n}):""},autoFocus:!0}):a.a.createElement("span",{style:{textDecorationLine:r?"line-through":"none"},className:"".concat(n?"d-none":"d-block"),onDoubleClick:function(){return i({id:c,edit:!n})}},o))},E=function(e){var t=e.item,n=t.status,o=t.id,r=e.updateToDo;return a.a.createElement("i",{className:"material-icons",onClick:function(){return r({id:o,status:!n})}},n?"check_box":"check_box_outline_blank")},D=function(e){var t=e.item,n=e.deleteToDo,o=e.updateToDo;return a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(E,{updateToDo:o,item:t}),a.a.createElement(g,{item:t,updateToDo:o}),a.a.createElement("i",{className:"material-icons",onClick:function(){return n({id:t.id})}},"delete"))},b=function(e){var t=e.item,n=e.updateToDo,o=e.deleteToDo;return a.a.createElement(D,{item:t,updateToDo:n,deleteToDo:o})},k=function(e){var t=e.todos,n=e.updateToDo,o=e.deleteToDo;return t.map(function(e){return a.a.createElement(b,{key:e.id,item:e,updateToDo:n,deleteToDo:o})})},T=function(e){var t=e.todos;return a.a.createElement("div",{className:"d-flex justify-content-between mb-2"},a.a.createElement("span",null,"complete :")," ",t.filter(function(e){return!0===e.status}).length,a.a.createElement("span",null,"active :")," ",t.filter(function(e){return!0!==e.status}).length)},y=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={todo:"",todos:[],status:!1},n.storage=function(){var e=localStorage.getItem("todo");return e?n.setState({todos:JSON.parse(e)}):""},n.saveStorage=function(e){localStorage.setItem("todo",JSON.stringify(e))},n.handleAddToDo=function(e){"Enter"===e.key&&n.state.todo&&n.setState(function(e){var t=Object(l.a)(e.todos).concat([{id:p()(),name:e.todo,status:!1,edit:!1}]);return n.saveStorage(t),{todos:t,todo:""}})},n.updateToDo=function(e){n.setState(function(t){var o=t.todos.map(function(t){return t.id===e.id?Object(s.a)({},t,e):t});return n.saveStorage(o),{todos:o}})},n.deleteToDo=function(e){var t=e.id;n.setState(function(e){var o=e.todos.filter(function(e){return e.id!==t});return n.saveStorage(o),{todos:o}})},n.checkAll=function(){n.setState(function(e){var t=e.todos.map(function(t){return Object(s.a)({},t,{status:!e.status})});return n.saveStorage(t),{status:!e.status,todos:t}})},n.deleteAll=function(){n.setState(function(e){var t=e.todos.filter(function(e){return!0!==e.status});return n.saveStorage(t),{todos:t,status:!1}})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.storage()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row"}},a.a.createElement("div",{className:"mt-5 col-md-4 col-lg-4 col-sm-12"},a.a.createElement(T,{todos:this.state.todos}),a.a.createElement("input",{type:"text",name:"todo",value:this.state.todo,onChange:function(t){var n=t.target,o=n.name,a=n.value;return e.setState(Object(i.a)({},o,a))},onKeyPress:this.handleAddToDo,className:"form-control mb-3"}),a.a.createElement("div",{className:"".concat(this.state.todos.length>0?"d-flex":"d-none"," justify-content-between mb-3")},a.a.createElement("div",{className:"d-flex align-items-center flex-column"},a.a.createElement("i",{className:"material-icons",onClick:this.checkAll},this.state.status?"check_box":"check_box_outline_blank"),"checkAll"),a.a.createElement("h3",null," Todo "),a.a.createElement("div",{className:"d-flex align-items-center flex-column"},a.a.createElement("i",{className:"material-icons ",onClick:function(){return e.deleteAll()}},"delete"),a.a.createElement("span",null,"deleteAll"))),a.a.createElement(k,{todos:this.state.todos,updateToDo:this.updateToDo,deleteToDo:this.deleteToDo})))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.37fcf91c.chunk.js.map