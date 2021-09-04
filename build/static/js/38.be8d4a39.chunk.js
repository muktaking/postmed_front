(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[38],{625:function(e,t,a){"use strict";a.r(t);var r=a(52),n=a(43),o=a(44),s=a(46),l=a(45),c=a(47),i=a(27),m=a.n(i),d=a(0),p=a.n(d),u=a(334),g=a(275),h=a(274),f=a(193),E=a(164),C=a(175),y=a(160),v=a(23),b=a(170),I=a.n(b),O=a(152),S=a(142),k=a(51),N=a(61),j=a(72),R=a(234),w=function(e){var t=e.submitHandler,a=e.handleChange,r=e.formErrors,n=e.categories,o=e.name,s=e.selectOptionValueRef,l=e.category,c=e.showEditCategoryAccordionStateHandler;return p.a.createElement(h.a,{className:"mt-3",defaultActiveKey:o&&"0"},p.a.createElement(h.a.Toggle,{as:C.a.Header,eventKey:"0"},p.a.createElement("h3",null," ",o?"Edit "+o:"Create A New"," Category")),p.a.createElement(h.a.Collapse,{eventKey:"0"},p.a.createElement(R.a,{className:"mt-2",onSubmit:t,enctype:"multipart/form-data"},p.a.createElement(R.a.Group,{controlId:"formGroupCategoryName"},p.a.createElement(R.a.Label,null,"Category Name"),p.a.createElement(R.a.Control,{type:"text",placeholder:"Category Name",name:"name",value:l?l.name:null,onChange:a}),r.name.length>0&&p.a.createElement("span",{className:"errorMessage"},r.name)),p.a.createElement(R.a.Group,{controlId:"formGridParent"},p.a.createElement(R.a.Label,null,"Parent Category"),p.a.createElement(R.a.Control,{as:"select",name:"parentId",onChange:a,ref:s},p.a.createElement("option",{value:"Top"},"Top"),n.map((function(e){var t=e.slug.replace(/_/g," / ");return p.a.createElement("option",{value:e.id,selected:l&&e.id===l.parentId},t)}))),r.parentId.length>0&&p.a.createElement("span",{className:"errorMessage"},r.parentId)),p.a.createElement(R.a.Group,{controlId:"formGroupCategoryOrder"},p.a.createElement(R.a.Label,null,"Category Order"),p.a.createElement(R.a.Control,{type:"text",name:"order",value:l&&l.order,placeholder:"e.g. 5 <..Order makes priority. Lower value higher order..>",onChange:a}),r.order.length>0&&p.a.createElement("span",{className:"errorMessage"},r.order)),p.a.createElement(R.a.Group,{controlId:"formGroupCategoryDes"},p.a.createElement(R.a.Label,null,"Description"),p.a.createElement(R.a.Control,{type:"textarea",placeholder:"Enter short description",name:"description",value:l&&l.description,onChange:a}),r.description.length>0&&p.a.createElement("span",{className:"errorMessage"},r.description)),p.a.createElement(R.a.Group,null,p.a.createElement(R.a.Label,null,"Upload Image"),p.a.createElement("input",{type:"file",name:"image",className:"form-control-file",onChange:a}),r.image.length>0&&p.a.createElement("span",{className:"errorMessage"},r.image)),p.a.createElement(E.a,{type:"submit",className:"btn-submit"},"Submit"),o&&p.a.createElement(E.a,{variant:"success",className:"ml-3",onClick:c},"Cancel"))))},T=function(e){var t=e.formErrors,a=e.rest,r=!0,n="";return Object.values(t).forEach((function(e){e.length>0&&(r=!1)&&(n=e),e.length>0&&(n=e)})),Object.values(a).forEach((function(e){null===e&&(r=!1)})),{valid:r,error:n}},L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).resetState=function(){a.setState({id:null,name:null,slug:null,parentId:"Top",description:null,order:null,image:null,isEditCategory:!1})},a.popover=function(e){return p.a.createElement(u.a,{id:"popover-basic"},p.a.createElement(u.a.Title,{as:"h3",className:"bg-warning text-white"},"Warning Message"),p.a.createElement(u.a.Content,null,"Are you sure You want to delete category.",p.a.createElement(E.a,{variant:"danger ml-3",onClick:function(){a.deleteCategory(e)}},"Yes")))},a.hideResponse=function(){a.setState({response:null})},a.submitHandler=function(e){e.preventDefault();var t=a.state,r=t.formErrors,n=t.name,o=t.order,s=t.description,l=t.image,c={name:n,parentId:a.state.parentId||a.selectOptionValueRef.current.value,order:o,description:s,image:l},i=T({rest:c,formErrors:r}),d=i.valid,p=i.error;if(d){var u=new FormData;Object.keys(c).forEach((function(e){c[e]&&u.append(e,c[e])})),Object(j.a)(a.props.auth.token),a.setState({loading:!0}),m.a.request({baseURL:"https://postmed.v1.backend.rajdoctors.com",url:"/categories",method:"post",data:u}).then((function(e){a.setState({loading:!1,response:"Successfully created Category",responseClass:"success"}),a.props.onFetchCategoryLoader(),setTimeout(a.hideResponse,2e3)})).catch((function(e){var t=Object(N.a)(e);a.setState({loading:!1,response:t,responseClass:"danger"}),setTimeout(a.hideResponse,2e3)}))}else a.setState({response:"Please fill form corectly"+(p?" __ "+p.toUpperCase()+" __":""),responseClass:"danger"}),setTimeout(a.hideResponse,2e3)},a.editCategorysubmitHandler=function(e){e.preventDefault();var t=a.state,r=t.formErrors,n=t.id,o=t.name,s=t.order,l=t.description,c=t.image,i=t.slug,d=a.state.parentId||a.selectOptionValueRef.current.value,p=c?{id:n,name:o,slug:i,parentId:d,order:s,description:l,image:c}:{id:n,name:o,slug:i,parentId:d,order:s,description:l},u=T({rest:p,formErrors:r}),g=u.valid,h=u.error;if(g){a.resetState();var f=new FormData;Object.keys(p).forEach((function(e){p[e]&&f.append(e,p[e])})),Object(j.a)(a.props.auth.token),a.setState({loading:!0}),m.a.request({baseURL:"https://postmed.v1.backend.rajdoctors.com",url:"/categories",method:"patch",data:f}).then((function(e){a.setState({loading:!1,response:"Successfully Updated Category",responseClass:"success"}),a.props.onFetchCategoryLoader(),setTimeout(a.hideResponse,2e3)})).catch((function(e){var t=Object(N.a)(e);a.setState({loading:!1,response:t,responseClass:"danger"}),setTimeout(a.hideResponse,2e3)})),a.resetState()}else a.setState({response:"Please fill form corectly"+(h?" __ "+h.toUpperCase()+" __":""),responseClass:"danger"}),setTimeout(a.hideResponse,2e3)},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value,s=t.files,l=a.state.formErrors;switch(n){case"name":l.name=!I.a.isLength(o,{min:1,max:25})||I.a.contains(o,"_")||I.a.contains(o,"/")?"Category Name should not be emty, more than 25 charecter and contain '_,/'":"";break;case"description":l.description=I.a.isLength(o,{min:30,max:300})?"":"Description should be minimum 30 or maximum 300 characters";break;case"parentId":l.parentId="Top"===o||I.a.isInt(o)||I.a.isMongoId(o)?"":"ParentId is not valid";break;case"order":l.order=I.a.isNumeric(o)?"":"Order should be only number";break;case"image":l.image=I.a.isEmpty(o)?"Choose a valid image":""}a.setState(Object(r.a)({formErrors:l},n,s?s[0]:o))},a.state={loading:!1,id:null,name:null,slug:null,parentId:"Top",description:null,order:null,image:null,response:null,responseClass:"success",showEditCategoryComponent:!1,formErrors:{name:"",parentId:"",description:"",order:"",image:""}},a.selectOptionValueRef=p.a.createRef(),a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"deleteCategory",value:function(e){var t=this;Object(j.a)(this.props.auth.token),this.setState({loading:!0}),m.a.delete("https://postmed.v1.backend.rajdoctors.com/categories",{data:{id:e.id}}).then((function(a){t.setState({loading:!1,response:e.name+" deleted successfully",responseClass:"success"}),t.props.onFetchCategoryLoader(),setTimeout(t.hideResponse,2e3)})).catch((function(e){var a=Object(N.a)(e);t.setState({loading:!1,response:a,responseClass:"danger"}),setTimeout(t.hideResponse,2e3)}))}},{key:"componentDidMount",value:function(){this.props.onFetchCategoryLoader()}},{key:"render",value:function(){var e=this,t=this.props.category.categories;return p.a.createElement(p.a.Fragment,null,p.a.createElement(O.a,S.a.Category.metaInfo),this.state.loading&&p.a.createElement(y.a,{animation:"border",role:"status",variant:"dark",className:"content-center"}),this.state.response&&p.a.createElement(f.a,{variant:this.state.responseClass,className:"text-center content-center"},this.state.response),p.a.createElement(w,{submitHandler:this.submitHandler,handleChange:this.handleChange,formErrors:this.state.formErrors,categories:t,category:{name:this.state.name,parentId:this.state.parentId,order:this.state.order,description:this.state.description}}),p.a.createElement("div",{className:"mt-3"},p.a.createElement(h.a,null,p.a.createElement(h.a.Toggle,{as:C.a.Header,eventKey:"1"},p.a.createElement("h3",null,"Edit Category")),p.a.createElement(h.a.Collapse,{eventKey:"1"},p.a.createElement("div",{className:"mt-2 p-2"},t.map((function(a){return p.a.createElement(f.a,{variant:"primary"},a.slug,p.a.createElement(E.a,{className:"ml-2",onClick:function(){e.setState({id:a.id,slug:a.slug,name:a.name,parentId:a.parentId,order:a.order,description:a.description,showEditCategoryComponent:a.slug})}},"Edit"),p.a.createElement(g.a,{trigger:["click"],placement:"right",rootClose:!0,overlay:e.popover(a)},p.a.createElement(E.a,{className:"ml-2",variant:"danger",disabled:e.state.showEditCategoryComponent},"Delete")),p.a.createElement("div",null,e.state.showEditCategoryComponent===a.slug&&p.a.createElement(w,{submitHandler:e.editCategorysubmitHandler,handleChange:e.handleChange,loading:e.state.loading,formErrors:e.state.formErrors,categories:t,name:a.name,selectOptionValueRef:e.selectOptionValueRef,category:{name:e.state.name,parentId:e.state.parentId,order:e.state.order,description:e.state.description},showEditCategoryAccordionStateHandler:function(){e.setState({showEditCategoryComponent:!1})}})))})))))))}}]),t}(d.Component);t.default=Object(v.b)((function(e){return{auth:e.auth,category:e.category}}),(function(e){return{onFetchCategoryLoader:function(){return e(Object(k.c)())},onCreateCategoryloader:function(t){return e(Object(k.a)(t))}}}))(L)}}]);
//# sourceMappingURL=38.be8d4a39.chunk.js.map