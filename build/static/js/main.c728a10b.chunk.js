(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),s=a.n(o),c=(a(17),a(2)),l=a(3),r=a(5),d=a(4),u=a(6),h=(a(18),a(8)),b=a(11),m=a(1),p=a(7),g=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={isEditing:!1,task:a.props.task},a.handleDelete=a.handleDelete.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleUpdate=a.handleUpdate.bind(Object(m.a)(Object(m.a)(a))),a.toggleEdit=a.toggleEdit.bind(Object(m.a)(Object(m.a)(a))),a.handleToggle=a.handleToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleDelete",value:function(){this.props.removeTask(this.props.id)}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(){this.props.toggleTodo(this.props.id)}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTask(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){return this.state.isEditing?i.a.createElement("div",{className:"Todo"},i.a.createElement("form",{className:"Todo-edit-form"},i.a.createElement("input",{type:"text",name:"task",value:this.state.task,onChange:this.handleChange}),i.a.createElement("button",{onClick:this.handleUpdate},"Update"))):i.a.createElement("div",{className:"Todo"},i.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.task),i.a.createElement("div",{className:"Todo-buttons"},i.a.createElement("button",{onClick:this.toggleEdit},i.a.createElement("i",{class:"fas fa-pen"})),i.a.createElement("button",{onClick:this.handleDelete},i.a.createElement("i",{class:"fas fa-trash"}))))}}]),t}(n.Component)),j=a(24),O=(a(20),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={task:""},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object(h.a)({},this.state,{id:Object(j.a)(),completed:!1});this.props.create(t),this.setState({task:""})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"task"},"Task"),i.a.createElement("input",{name:"task",id:"task",onChange:this.handleChange,value:this.state.task}),i.a.createElement("button",null,"Add")))}}]),t}(n.Component)),f=(a(21),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={todos:[]},a.create=a.create.bind(Object(m.a)(Object(m.a)(a))),a.remove=a.remove.bind(Object(m.a)(Object(m.a)(a))),a.update=a.update.bind(Object(m.a)(Object(m.a)(a))),a.toggleCompletion=a.toggleCompletion.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(b.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){var t=this.state.todos.filter(function(t){return t.id!==e});this.setState({todos:t})}},{key:"update",value:function(e,t){var a=this.state.todos.map(function(a){return a.id===e?Object(h.a)({},a,{task:t}):a});this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map(function(t){return t.id===e?Object(h.a)({},t,{completed:!t.completed}):t});this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t){return i.a.createElement(g,{id:t.id,key:t.id,task:t.task,completed:t.completed,removeTask:e.remove,updateTask:e.update,toggleTodo:e.toggleCompletion})});return i.a.createElement("div",{className:"TodoList"},i.a.createElement("h1",null,"Todo List",i.a.createElement("span",null,"A Simple React Todo List App")),i.a.createElement(O,{create:this.create}),i.a.createElement("ul",null,t))}}]),t}(n.Component)),k=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f,null)}}]),t}(n.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)})};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),v()}],[[12,1,2]]]);
//# sourceMappingURL=main.c728a10b.chunk.js.map