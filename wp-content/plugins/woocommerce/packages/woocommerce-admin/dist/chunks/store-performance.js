(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[50],{551:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return u}));var a=r(11),n=r.n(a),o=r(5),c=r(21),s=r(12),i=r(13),l=r(122),m=r(15);const d=e=>{let{indicator:t,primaryData:r,secondaryData:a,currency:n,formatAmount:c,persistedQuery:s}=e;const d=Object(o.find)(r.data,e=>e.stat===t.stat),u=Object(o.find)(a.data,e=>e.stat===t.stat);if(!d||!u)return{};const p=d._links&&d._links.report[0]&&d._links.report[0].href||"",b=function(e,t,r){return e?"/jetpack"===e?Object(m.getAdminLink)("admin.php?page=jetpack#/dashboard"):Object(i.getNewPath)(t,e,{chart:r.chart}):""}(p,s,d),y="/jetpack"===p?"wp-admin":"wc-admin",f="currency"===d.format,j=Object(l.calculateDelta)(d.value,u.value);return{primaryValue:f?c(d.value):Object(l.formatValue)(n,d.format,d.value),secondaryValue:f?c(u.value):Object(l.formatValue)(n,u.format,u.value),delta:j,reportUrl:b,reportUrlType:y}},u=(e,t,r,a)=>{const{getReportItems:o,getReportItemsError:i,isResolving:l}=e(s.REPORTS_STORE_NAME),{woocommerce_default_date_range:m}=e(s.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),d=Object(c.getCurrentDates)(r,m),u=d.primary.before,p=d.secondary.before,b=t.map(e=>e.stat).join(","),y=Object(s.getFilterQuery)({filters:a,query:r}),f={...y,after:Object(c.appendTimestamp)(d.primary.after,"start"),before:Object(c.appendTimestamp)(u,u.isSame(n()(),"day")?"now":"end"),stats:b},j={...y,after:Object(c.appendTimestamp)(d.secondary.after,"start"),before:Object(c.appendTimestamp)(p,p.isSame(n()(),"day")?"now":"end"),stats:b};return{primaryData:o("performance-indicators",f),primaryError:i("performance-indicators",f)||null,primaryRequesting:l("getReportItems",["performance-indicators",f]),secondaryData:o("performance-indicators",j),secondaryError:i("performance-indicators",j)||null,secondaryRequesting:l("getReportItems",["performance-indicators",j]),defaultDateRange:m}}},640:function(e,t,r){},649:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),o=r(14),c=r(13),s=r(8),i=r(22),l=r(21),m=r(17),d=(r(640),r(527)),u=r(551),p=r(23);const{performanceIndicators:b}=Object(p.d)("dataEndpoints",{performanceIndicators:[]});class y extends a.Component{renderMenu(){const{hiddenBlocks:e,isFirst:t,isLast:r,onMove:o,onRemove:c,onTitleBlur:s,onTitleChange:l,onToggleHiddenBlock:d,titleInput:u,controls:p}=this.props;return Object(a.createElement)(i.EllipsisMenu,{label:Object(n.__)("Choose which analytics to display and the section name",'woocommerce'),renderContent:y=>{let{onToggle:f}=y;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.MenuTitle,null,Object(n.__)("Display stats:",'woocommerce')),b.map((t,r)=>{const n=!e.includes(t.stat);return Object(a.createElement)(i.MenuItem,{checked:n,isCheckbox:!0,isClickable:!0,key:r,onInvoke:()=>{d(t.stat)(),Object(m.recordEvent)("dash_indicators_toggle",{status:n?"off":"on",key:t.stat})}},t.label)}),Object(a.createElement)(p,{onToggle:f,onMove:o,onRemove:c,isFirst:t,isLast:r,onTitleBlur:s,onTitleChange:l,titleInput:u}))}})}renderList(){const{query:e,primaryRequesting:t,secondaryRequesting:r,primaryError:o,secondaryError:s,primaryData:d,secondaryData:p,userIndicators:b,defaultDateRange:y}=this.props;if(t||r)return Object(a.createElement)(i.SummaryListPlaceholder,{numberOfItems:b.length});if(o||s)return null;const f=Object(c.getPersistedQuery)(e),{compare:j}=Object(l.getDateParamsFromQuery)(e,y),O="previous_period"===j?Object(n.__)("Previous period:",'woocommerce'):Object(n.__)("Previous year:",'woocommerce'),{formatAmount:g,getCurrencyConfig:h}=this.context,_=h();return Object(a.createElement)(i.SummaryList,null,()=>b.map((e,t)=>{const{primaryValue:r,secondaryValue:n,delta:o,reportUrl:c,reportUrlType:s}=Object(u.b)({indicator:e,primaryData:d,secondaryData:p,currency:_,formatAmount:g,persistedQuery:f});return Object(a.createElement)(i.SummaryNumber,{key:t,href:c,hrefType:s,label:e.label,value:r,prevLabel:O,prevValue:n,delta:o,onLinkClickCallback:()=>{Object(m.recordEvent)("dash_indicators_click",{key:e.stat})}})}))}render(){const{userIndicators:e,title:t}=this.props;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.SectionHeader,{title:t||Object(n.__)("Store Performance",'woocommerce'),menu:this.renderMenu()}),e.length>0&&Object(a.createElement)("div",{className:"woocommerce-dashboard__store-performance"},this.renderList()))}}y.contextType=d.a,t.default=Object(o.compose)(Object(s.withSelect)((e,t)=>{const{hiddenBlocks:r,query:a,filters:n}=t,o=b.filter(e=>!r.includes(e.stat)),c={hiddenBlocks:r,userIndicators:o,indicators:b};if(0===o.length)return c;const s=Object(u.a)(e,o,a,n);return{...c,...s}}))(y)}}]);