"use strict";(self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[]).push([[8952],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(7294),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r().createContext({}),c=function(e){var n=r().useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r().createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r().createElement(r().Fragment,{},n)}},m=r().forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return t?r().createElement(f,l(l({ref:n},p),{},{components:t})):r().createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r().createElement.apply(null,o)}return r().createElement.apply(null,t)}m.displayName="MDXCreateElement"},2464:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=t(5773),r=t(808),a=(t(7294),t(3905)),o=["components"],l={id:"expressions",title:"Expression Columns"},s=void 0,p={unversionedId:"expressions",id:"expressions",title:"Expression Columns",description:"Perspective supports expression columns, which are virtual columns calculated",source:"@site/docs/expressions.md",sourceDirName:".",slug:"/expressions",permalink:"/docs/expressions",draft:!1,tags:[],version:"current",frontMatter:{id:"expressions",title:"Expression Columns"}},c={},u=[{value:"UI",id:"ui",level:2},{value:"Perspective Extensions to ExprTK",id:"perspective-extensions-to-exprtk",level:2},{value:"Static Typing",id:"static-typing",level:4},{value:"Expression Column Name",id:"expression-column-name",level:4},{value:"Referencing <code>Table()</code> Columns",id:"referencing-table-columns",level:4},{value:"String Literals",id:"string-literals",level:4},{value:"Extended Library",id:"extended-library",level:4},{value:"Examples",id:"examples",level:2},{value:"Casting",id:"casting",level:4},{value:"Variables",id:"variables",level:4},{value:"Conditionals",id:"conditionals",level:4}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("script",{src:"../../../../js/index.js"}),(0,a.kt)("link",{rel:"stylesheet",href:"../../../../css/concepts/index.css"}),(0,a.kt)("p",null,"Perspective supports ",(0,a.kt)("em",{parentName:"p"},"expression columns"),", which are virtual columns calculated\nas part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", optionally using values from its underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"Table"),"'s\ncolumns. Such expression columns are defined in Perspective's expression\nlanguage, an extended version of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ArashPartow/exprtk"},"ExprTK"),", which is itself quite similar\n(in design and features) to expressions in Excel."),(0,a.kt)("h2",{id:"ui"},"UI"),(0,a.kt)("p",null,"Expression columns can be created in ",(0,a.kt)("inlineCode",{parentName:"p"},"<perspective-viewer>"),' by clicking the\n"New Column" button at the bottom of the column list (in'),(0,a.kt)("span",null,"red")," below), or via the API by adding the expression to the `expressions` config key when calling `restore()`.",(0,a.kt)("div",{id:"new_column_highlight"},(0,a.kt)("perspective-viewer",null)),(0,a.kt)("br",null),(0,a.kt)("p",null,'By default, such expression columns are not "used", and will appear above the\n',(0,a.kt)("inlineCode",{parentName:"p"},"Table"),"'s other deselected columns in the column list, with an additional set of\nbuttons for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Editing")," the column's expression. Doing so will update the definitions of\n",(0,a.kt)("em",{parentName:"li"},"all")," usage of the expression column."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Deleting")," the column. Clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Reset")," (or calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"reset()")," method)\nwill not delete expressions unless the ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," key is held (or ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\nparameter supplied, respectively). This button only appears if the expression\ncolumn i unused.")),(0,a.kt)("p",null,'To use the column, just drag/select the column as you would a normal column,\ne.g. as a "Filter", "Group By", etc. Expression columns cannot be edited or\nupdated (as they exist on the ',(0,a.kt)("inlineCode",{parentName:"p"},"View()")," and are generated from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Table()"),"'s\n",(0,a.kt)("em",{parentName:"p"},"real")," columns). However, they will automatically update whenever their\ndependent columns update."),(0,a.kt)("h2",{id:"perspective-extensions-to-exprtk"},"Perspective Extensions to ExprTK"),(0,a.kt)("p",null,"ExprTK has its own\n",(0,a.kt)("a",{parentName:"p",href:"http://www.partow.net/programming/exprtk/"},"excellent documentation")," which\ncovers the core langauge in depth, which is an excellent place to start in\nlearning the basics. In addition to these features, Perspective adds a few of\nits own custom extensions and syntax."),(0,a.kt)("h4",{id:"static-typing"},"Static Typing"),(0,a.kt)("p",null,"In addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," values which ExprTK supports natively, Perspective's\nexpression language also supports Perspective's other types ",(0,a.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"; as well as rudimentary type-checking, which will report\nan ",(0,a.kt)("span",null,"error")," when the values/columns supplied as\narguments cannot be resolved to the expected type, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"length(x)")," expects an\nargument ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and is not a valid expression for an ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," of\nanother type. Perspective supplies a set of ",(0,a.kt)("em",{parentName:"p"},"cast")," functions for converting\nbetween types where possible e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"string(x)")," to cast a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," to a\n",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("h4",{id:"expression-column-name"},"Expression Column Name"),(0,a.kt)("p",null,"Expressions can be ",(0,a.kt)("em",{parentName:"p"},"named")," by providing a comment as the first line of the\nexpression. This name will be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<perspective-viewer>")," UI when\nreferring to the column, but will also be used in the API when specifying e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"group_by")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"order_by")," fields. When creating a new column via\n",(0,a.kt)("inlineCode",{parentName:"p"},"<oerspective-viewer>"),"'s expression editor, new columns will get a default name\n(which you may delete or change):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"// New Column 1\n")),(0,a.kt)("p",null,"Without such a comment, an expression will show up in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<perspective-viewer>"),"\nAPI and UI as itself (clipped to a reasonable length for the latter)."),(0,a.kt)("h4",{id:"referencing-table-columns"},"Referencing ",(0,a.kt)("inlineCode",{parentName:"h4"},"Table()")," Columns"),(0,a.kt)("p",null,"Columns from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Table()")," can be referenced in an expression with\n",(0,a.kt)("em",{parentName:"p"},"double quotes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Expected Sales\n("Sales" * 10) + "Profit"\n')),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["Sales", "Profit", "Expected Sales"]',expressions:'["// Expected Sales\\n(\\"Sales\\" * 10) + \\"Profit\\""]'})),(0,a.kt)("h4",{id:"string-literals"},"String Literals"),(0,a.kt)("p",null,"In contrast to standard ExprTK, string literals are declared with\n",(0,a.kt)("em",{parentName:"p"},"single quotes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Profitable\nif (\"Profit\" > 0) {\n  'Stonks'\n} else {\n  'Not Stonks'\n}\n")),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["Profit","Profitable"]',expressions:"[\"//Profitable\\nif (\\\"Profit\\\" > 0) { 'Stonks' } else { 'Not Stonks' }\"]"})),(0,a.kt)("h4",{id:"extended-library"},"Extended Library"),(0,a.kt)("p",null,"Perspective adds many of its own functions in addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"ExprTK"),"'s standard\nones, including common functions for ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," types such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"substring()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bucket()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"day_of_week()"),", etc. A full list of available\nfunctions is available in the\n",(0,a.kt)("a",{parentName:"p",href:"obj/perspective-viewer-exprtk"},"Expression Columns API"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"casting"},"Casting"),(0,a.kt)("p",null,"Just ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", as an ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," (numeric literals currently default to ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," unless\ncast)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"integer(2)\n")),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["integer(2)"]',expressions:'["integer(2)"]'})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"variables"},"Variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// My Column Name\nvar incrementedBy200 := "Sales" + 200;\nvar half := incrementedBy200 / 2;\nhalf\n')),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["Sales", "My Column Name"]',expressions:'["// My Column Name\\nvar incrementedBy200 := \\"Sales\\" + 200;\\nvar half := incrementedBy200 / 2;\\nhalf"]'})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Complex Expression\nvar upperCustomer := upper("Customer Name");\nvar separator := concat(upperCustomer, \' | \');\nvar profitRatio := floor(percent_of("Profit", "Sales")); // Remove trailing decimal.\nvar combined := concat(separator, string(profitRatio));\nvar percentDisplay := concat(combined, \'%\');\npercentDisplay\n')),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["Complex Expression", "Customer Name", "Sales", "Profit"]',expressions:'["// Complex Expression\\nvar upperCustomer := upper(\\"Customer Name\\");\\nvar separator := concat(upperCustomer, \' | \');\\nvar profitRatio := floor(percent_of(\\"Profit\\", \\"Sales\\")); // Remove trailing decimal.\\nvar combined := concat(separator, string(profitRatio));\\nvar percentDisplay := concat(combined, \'%\');\\npercentDisplay"]'})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"conditionals"},"Conditionals"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Conditional\nvar priceAdjustmentDate := date(2016, 6, 18);\nvar finalPrice := "Sales" - "Discount";\nvar additionalModifier := 0;\n\nif("Order Date" > priceAdjustmentDate) {\n  finalPrice -= 5;\n  additionalModifier -= 2;\n}\nelse\n  finalPrice += 5;\n\nfinalPrice + additionalModifier\n')),(0,a.kt)("div",null,(0,a.kt)("perspective-viewer",{columns:'["Conditional"]',expressions:'["// Conditional\\nvar priceAdjustmentDate := date(2016, 6, 18);\\nvar finalPrice := \\"Sales\\" - \\"Discount\\";\\nvar additionalModifier := 0;\\n\\nif(\\"Order Date\\" > priceAdjustmentDate) {\\n  finalPrice -= 5;\\n  additionalModifier -= 2;\\n}\\nelse\\n  finalPrice += 5;\\n\\nfinalPrice + additionalModifier"]'})))}m.isMDXComponent=!0}}]);