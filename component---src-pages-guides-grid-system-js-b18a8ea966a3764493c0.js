(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ANig:function(e,a,t){"use strict";var n=t("vOnD"),s=t("IMLY"),c=n.default.div.withConfig({displayName:"GuideStyle",componentId:"sc-19ox4j6-0"})(["","{padding:2rem;& > *:last-child{margin-bottom:0;& *:last-child{margin-bottom:0;}}}ul{margin-bottom:1.5rem;ul{padding-left:2.5rem;list-style-type:none;& > li{text-indent:-5px;position:relative;margin-bottom:0;&::before{content:'-';position:absolute;left:-1.25rem;}}}li{font-size:0.9375rem;line-height:1.5;margin-bottom:1.5rem;}}"],s.CardBody);a.a=c},q9oP:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),s=t.n(n),c=t("IMLY"),m=(t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("6qfE")),l=(t("WDxw"),t("QwKz"));var o={},r=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return s.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},o,t),components:a},s.a.createElement(m.MDXTag,{name:"h2",components:a},"Grid System"),s.a.createElement(m.MDXTag,{name:"p",components:a},"OAH UI Grid like bootstrap grid the different in use here we use javaScript functions and React Component"),s.a.createElement(m.MDXTag,{name:"p",components:a},"Grid system use this variables."),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token comment"},"// this default grid system"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"const")," gridSize ",s.a.createElement("span",{className:"token operator"},"=")," ",s.a.createElement("span",{className:"token number"},"12"),s.a.createElement("span",{className:"token punctuation"},";")," ",s.a.createElement("span",{className:"token comment"},"// grid column number"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," gridGutter ",s.a.createElement("span",{className:"token operator"},"=")," ",s.a.createElement("span",{className:"token number"},"24"),s.a.createElement("span",{className:"token punctuation"},";")," ",s.a.createElement("span",{className:"token comment"},"//paddind 24 (12px on each side of a column)"),"\n",s.a.createElement("span",{className:"token comment"},"// default breakpoints"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," breakpoints ",s.a.createElement("span",{className:"token operator"},"=")," ",s.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","xs",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"0"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","is",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"400"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","sm",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"576"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","md",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"768"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","lg",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"992"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1200"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xxl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1400"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xxxl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1600"),"\n",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"const")," maxContainer ",s.a.createElement("span",{className:"token operator"},"=")," ",s.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","is",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"380"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","sm",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"540"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","md",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"720"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","lg",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"960"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1140"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xxl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1320"),s.a.createElement("span",{className:"token punctuation"},","),"\n","  ","xxxl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1500"),"\n",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(m.MDXTag,{name:"h3",components:a},"Customize"),s.a.createElement(m.MDXTag,{name:"p",components:a},"To customize this variables you need to send your values with theme settings\nsorry for now you can't customize breakpoints but will work on it"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"jsx"},s.a.createElement("pre",{className:"language-jsx"},s.a.createElement("code",{className:"language-jsx"},s.a.createElement("span",{className:"token comment"},"// here you can pass variables"),"\n",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"ThemeProvider"))," ",s.a.createElement("span",{className:"token attr-name"},"theme"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("span",{className:"token function"},"themes"),s.a.createElement("span",{className:"token punctuation"},"("),"theme",s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token punctuation"},"{")," dir",s.a.createElement("span",{className:"token punctuation"},",")," gridSize",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"10"),s.a.createElement("span",{className:"token punctuation"},",")," gridGutter",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"30")," ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},"}")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","  "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Layout"))," ",s.a.createElement("span",{className:"token attr-name"},"dir"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"dir",s.a.createElement("span",{className:"token punctuation"},"}"))," ",s.a.createElement("span",{className:"token punctuation"},"/>")),s.a.createElement("span",{className:"token plain-text"},"\n"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"ThemeProvider")),s.a.createElement("span",{className:"token punctuation"},">"))))),s.a.createElement(m.MDXTag,{name:"h2",components:a},"Breakpoint functions"),s.a.createElement(m.MDXTag,{name:"p",components:a},"OAH themes have 4 breakpoint functions to use simply in styled components"),s.a.createElement(m.MDXTag,{name:"h4",components:a},"breakpointUp"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token keyword"},"import")," styled ",s.a.createElement("span",{className:"token punctuation"},"{")," css ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'styled-components'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," breakpointUp ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui/theme'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token comment"},"// Example: Hide starting at `min-width: 0`, and then show at the `md` breakpoint"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," Component ",s.a.createElement("span",{className:"token operator"},"=")," styled",s.a.createElement("span",{className:"token punctuation"},"."),"div",s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","  ","display: none;","\n","  "),s.a.createElement("span",{className:"token interpolation"},s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"$","{"),s.a.createElement("span",{className:"token function"},"breakpointUp"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token string"},"'md'"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","    ","display: block;","\n","  "),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"}")),s.a.createElement("span",{className:"token string"},"\n"),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(m.MDXTag,{name:"h4",components:a},"breakpointDown"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token keyword"},"import")," styled ",s.a.createElement("span",{className:"token punctuation"},"{")," css ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'styled-components'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," breakpointDown ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui/theme'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token comment"},"// Example: Hide from `xxxl`, and then show at the `md` breakpoint to `min-width: 0;`"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," Component ",s.a.createElement("span",{className:"token operator"},"=")," styled",s.a.createElement("span",{className:"token punctuation"},"."),"div",s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","  ","display: none;","\n","  "),s.a.createElement("span",{className:"token interpolation"},s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"$","{"),s.a.createElement("span",{className:"token function"},"breakpointDown"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token string"},"'md'"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","    ","display: block;","\n","  "),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"}")),s.a.createElement("span",{className:"token string"},"\n"),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(m.MDXTag,{name:"h4",components:a},"breakpointBetween"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token keyword"},"import")," styled ",s.a.createElement("span",{className:"token punctuation"},"{")," css ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'styled-components'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," breakpointBetween ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui/theme'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token comment"},"// Example: show in width between 768 and 1200 this take lower breakpoint, upper breakpoint"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," Component ",s.a.createElement("span",{className:"token operator"},"=")," styled",s.a.createElement("span",{className:"token punctuation"},"."),"div",s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","  ","display: none;","\n","  "),s.a.createElement("span",{className:"token interpolation"},s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"$","{"),s.a.createElement("span",{className:"token function"},"breakpointBetween"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token string"},"'md'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'xl'"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","    ","display: block;","\n","  "),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"}")),s.a.createElement("span",{className:"token string"},"\n"),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(m.MDXTag,{name:"h4",components:a},"breakpointOnly"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token keyword"},"import")," styled ",s.a.createElement("span",{className:"token punctuation"},"{")," css ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'styled-components'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," breakpointOnly ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui/theme'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token comment"},"// Example: show in width between 768 and 991 from md to under lg"),"\n",s.a.createElement("span",{className:"token keyword"},"const")," Component ",s.a.createElement("span",{className:"token operator"},"=")," styled",s.a.createElement("span",{className:"token punctuation"},"."),"div",s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","  ","display: none;","\n","  "),s.a.createElement("span",{className:"token interpolation"},s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"$","{"),s.a.createElement("span",{className:"token function"},"breakpointOnly"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token string"},"'md'"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token template-string"},s.a.createElement("span",{className:"token template-punctuation string"},"`"),s.a.createElement("span",{className:"token string"},"\n","    ","display: block;","\n","  "),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token interpolation-punctuation punctuation"},"}")),s.a.createElement("span",{className:"token string"},"\n"),s.a.createElement("span",{className:"token template-punctuation string"},"`")),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(m.MDXTag,{name:"h2",components:a},"Related Articles"),s.a.createElement(m.MDXTag,{name:"ul",components:a},s.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/components/grid"}},"Grid Components"),".")))},n}(s.a.Component),p=t("EYWl"),i=t("ANig");a.default=function(){return s.a.createElement(c.Row,null,s.a.createElement(p.a,{title:"Grid System",keywords:["OAH","application","react"]}),s.a.createElement(c.Col,{xs:12},s.a.createElement(i.a,null,s.a.createElement(r,null))))}}}]);
//# sourceMappingURL=component---src-pages-guides-grid-system-js-b18a8ea966a3764493c0.js.map