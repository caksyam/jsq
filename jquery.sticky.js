// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},i=t(window),n=t(document),s=[],o=i.height(),a=function(){for(var e=i.scrollTop(),a=n.height(),r=a-o,c=e>r?r-e:0,p=0;p<s.length;p++){var l=s[p],d=l.stickyWrapper.offset().top,h=d-l.topSpacing-c;if(h>=e)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.parent().removeClass(l.className),l.currentTop=null);else{var u=a-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;0>u?u+=l.topSpacing:u=l.topSpacing,l.currentTop!=u&&(l.stickyElement.css("position","fixed").css("top",u),"undefined"!=typeof l.getWidthFrom&&l.stickyElement.css("width",t(l.getWidthFrom).width()),l.stickyElement.parent().addClass(l.className),l.currentTop=u)}}},r=function(){o=i.height()},c={init:function(i){var n=t.extend(e,i);return this.each(function(){var e=t(this),i=e.attr("id"),o=t("<div></div>").attr("id",i+"-sticky-wrapper").addClass(n.wrapperClassName);e.wrapAll(o),n.center&&e.parent().css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({"float":"none"}).parent().css({"float":"right"});var a=e.parent();a.css("height",e.outerHeight()),s.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:e,currentTop:null,stickyWrapper:a,className:n.className,getWidthFrom:n.getWidthFrom})})},update:a};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",r,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",r)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t(function(){setTimeout(a,0)})}(jQuery);
