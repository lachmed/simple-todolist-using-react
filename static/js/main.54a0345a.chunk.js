(this["webpackJsonpsimple-todolist-with-react"]=this["webpackJsonpsimple-todolist-with-react"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),c=n.n(i),s=(n(14),n(4)),r=n(5),d=n(1),u=n(8),l=n(7),m=(n(15),function(t){return o.a.createElement("div",{className:"todoitem"},o.a.createElement("input",{type:"checkbox",checked:t.item.completed,onChange:function(e){t.taskDone(t.item.id)}})," ",o.a.createElement("span",{className:t.item.completed?"Completed":""},"  ",t.item.task,"  "))}),h=n(6),k=(n(16),function(t){var e=Object(a.useState)(""),n=Object(h.a)(e,2),i=n[0],c=n[1];return o.a.createElement("div",{className:"addtask"},o.a.createElement("h1",null,"Add a task to your TodoList"),o.a.createElement("input",{type:"text",placeholder:"Your task here",onChange:function(t){return c(t.target.value)}}),o.a.createElement("button",{className:"btn",onClick:function(e){return t.addtask(i)}},"ADD"))}),p=[],f=(n(17),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={todos:p,isLoggedin:!1},t.taskDone=t.taskDone.bind(Object(d.a)(t)),t.addtask=t.addtask.bind(Object(d.a)(t)),t}return Object(r.a)(n,[{key:"taskDone",value:function(t){this.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}}))}},{key:"addtask",value:function(t){this.setState((function(e){return e.todos.push({id:e.todos.length+1,task:t,completed:!1}),{todos:e.todos,isLoggedin:e.isLoggedin}}))}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return o.a.createElement(m,{key:e.id,item:e,taskDone:t.taskDone})}));return o.a.createElement("div",null,o.a.createElement(k,{addtask:this.addtask}),e)}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.54a0345a.chunk.js.map