!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}({6:function(e,t,o){e.exports=o(9)},9:function(e,t,o){"use strict";let r,i,n,a;function c(e){e.data&&e.data.size>0&&a.push(e.data)}function s(e=""){chrome.browserAction.setIcon({path:{16:chrome.extension.getURL("assets/images/get_started16"+e+".png"),32:chrome.extension.getURL("assets/images/get_started32"+e+".png"),48:chrome.extension.getURL("assets/images/get_started48"+e+".png"),128:chrome.extension.getURL("assets/images/get_started128"+e+".png")}})}function d(e){i=!0;let t={audio:!0,video:!0,audioConstraints:{mandatory:{chromeMediaSource:"tab"}},videoConstraints:{mandatory:{chromeMediaSource:"tab",minWidth:e.width,maxWidth:e.width,minHeight:e.height,maxHeight:e.height,minFrameRate:30,maxFrameRate:60}}};chrome.tabCapture.capture(t,u)}function u(e){e?r=e:alert("Stream creation failed: "+chrome.runtime.lastError.message),a=[],chrome.storage.local.get(["json"],p)}function p(e){let t="vp8",o="opus",i=8,a=128;if(e.json){let r=JSON.parse(e.json);r.settings&&(t=r.settings.videoCodec||t,o=r.settings.audioCodec||o,a=r.settings.audioBitsPerSecond||a,i=r.settings.videoBitsPerSecond||i)}let s={mimeType:"video/webm;codecs="+t+","+o};MediaRecorder.isTypeSupported(s.mimeType)||(s={mimeType:"video/webm;codecs=vp9"},MediaRecorder.isTypeSupported(s.mimeType)||(s={mimeType:"video/webm;codecs=vp8"},MediaRecorder.isTypeSupported(s.mimeType)||(s={mimeType:"video/webm"},MediaRecorder.isTypeSupported(s.mimeType)||(s={mimeType:""})))),s.audioBitsPerSecond=1e3*a,s.videoBitsPerSecond=1e6*i;try{n=new MediaRecorder(r,s)}catch(e){return console.error("Exception while creating MediaRecorder:",e),void console.log("Exception while creating MediaRecorder: "+JSON.stringify(e))}n.ondataavailable=c,n.start(10)}function l(){s(),n&&n.stop();let e=new Blob(a,{type:"video/webm"});if(window.videoURL=window.URL.createObjectURL(e),r){let e=r.getTracks();for(var t=0;t<e.length;++t)e[t].stop()}n=null,r=null,i=!1}o.r(t),chrome.runtime.onMessage.addListener((e,t,o)=>{switch(e.txt){case"scrollCaptureStartRecording":e.tabId,s("_red"),chrome.tabs.get(window.tabId,d);break;case"scrollCaptureStopRecording":l();break;case"scrollCaptureResizeWindow":!function(e,t){let o={width:e+window.chromeSize.width,height:t+window.chromeSize.height};chrome.windows.getCurrent({populate:!1},e=>{chrome.windows.update(e.id,o)})}(e.width,e.height);break;case"scrollCaptureTrackEvent":!function(e,t,o=""){let r=["_trackEvent",e,t];o&&r.push(o),window._gaq.push(r)}(e.category,e.action,e.label);break;case"scrollCaptureTrackPage":r=e.path,window._gaq.push(["_set","page",r]),window._gaq.push(["_trackPageview"])}var r}),function(e){window._gaq=window._gaq||[],window._gaq.push(["_setAccount",e]),window._gaq.push(["_trackPageview"]);let t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://ssl.google-analytics.com/ga.js";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}("UA-161404627-1"),chrome.browserAction.onClicked.addListener(e=>{i&&l(),chrome.tabs.executeScript({file:"content.js"}),window.tabId=e.id,chrome.windows.getCurrent({populate:!1},t=>{window.chromeSize={width:t.width-e.width,height:t.height-e.height}})})}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwibWVkaWFTdHJlYW0iLCJpc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJyZWNvcmRlZEJsb2JzIiwiaGFuZGxlRGF0YUF2YWlsYWJsZSIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwiY2hhbmdlSWNvbiIsImNvbG9yIiwiY2hyb21lIiwiYnJvd3NlckFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZXh0ZW5zaW9uIiwiZ2V0VVJMIiwiX3N0YXJ0VGFiQ2FwdHVyZSIsInRhYiIsImNhcHR1cmVPcHRpb25zIiwiYXVkaW8iLCJ2aWRlbyIsImF1ZGlvQ29uc3RyYWludHMiLCJtYW5kYXRvcnkiLCJjaHJvbWVNZWRpYVNvdXJjZSIsInZpZGVvQ29uc3RyYWludHMiLCJtaW5XaWR0aCIsIndpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJ0YWJDYXB0dXJlIiwiY2FwdHVyZSIsIl9zZXRTdHJlYW0iLCJzdHJlYW0iLCJhbGVydCIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJtZXNzYWdlIiwic3RvcmFnZSIsImxvY2FsIiwiX2NyZWF0ZU1lZGlhUmVjb3JkZXIiLCJyZXN1bHQiLCJ2aWRlb0NvZGVjIiwiYXVkaW9Db2RlYyIsInZpZGVvQml0c1BlclNlY29uZCIsImF1ZGlvQml0c1BlclNlY29uZCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsIm9wdGlvbnMiLCJtaW1lVHlwZSIsIk1lZGlhUmVjb3JkZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwic3RyaW5naWZ5Iiwib25kYXRhYXZhaWxhYmxlIiwic3RhcnQiLCJzdG9wUmVjb3JkaW5nIiwic3RvcCIsInZpZGVvQmxvYiIsIkJsb2IiLCJ0eXBlIiwid2luZG93IiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJsZW5ndGgiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInR4dCIsInRhYklkIiwidGFicyIsImNocm9tZVNpemUiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwidXBkYXRlIiwiaWQiLCJyZXNpemVXaW5kb3ciLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiX2dhcSIsInRyYWNrRXZlbnQiLCJhbmFseXRpY3NJRCIsImdhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzcmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJpbml0QW5hbHl0aWNzIiwib25DbGlja2VkIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVB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LENBQUMsT0FBUSxPQUFRTSxJQUNsQ3dELE9BQU8wQixLQUFLeEYsS0FBSyxDQUFDLG1CQUZmLElBQW1CTSxJQXhCbkIsU0FBdUJvRixHQUMxQjVCLE9BQU8wQixLQUFPMUIsT0FBTzBCLE1BQVEsR0FDN0IxQixPQUFPMEIsS0FBS3hGLEtBQUssQ0FBQyxjQUFlMEYsSUFDakM1QixPQUFPMEIsS0FBS3hGLEtBQUssQ0FBQyxtQkFFbEIsSUFBSTJGLEVBQUtDLFNBQVNDLGNBQWMsVUFDaENGLEVBQUc5QixLQUFPLGtCQUNWOEIsRUFBR0csT0FBUSxFQUNYSCxFQUFHSSxJQUFNLHlDQUNULElBQUl4RyxFQUFJcUcsU0FBU0kscUJBQXFCLFVBQVUsR0FDaER6RyxFQUFFMEcsV0FBV0MsYUFBYVAsRUFBSXBHLEdDbkJsQzRHLENBQWMsa0JGNEJWaEcsT0FBT0MsY0FBY2dHLFVBQVU5QixZQUFhNUQsSUFFcENqQixHQUFhZ0UsSUFFakJ0RCxPQUFPeUUsS0FBS3lCLGNBQWMsQ0FDdEJDLEtBQU0sZUFHVnhDLE9BQU9hLE1BQVFqRSxFQUFJeUUsR0FFbkJoRixPQUFPMkUsUUFBUUMsV0FBVyxDQUFFQyxVQUFVLEdBQVVDLElBQzVDbkIsT0FBT2UsV0FBYSxDQUNoQjFELE1BQU84RCxFQUFJOUQsTUFBUVQsRUFBSVMsTUFDdkJHLE9BQVEyRCxFQUFJM0QsT0FBU1osRUFBSVkiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIlxuLy8gbGV0IHBhZ2UgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG5cbmltcG9ydCB7IHRyYWNrRXZlbnQsIHRyYWNrUGFnZSB9IGZyb20gXCIuL21vZGVsL0dBXCI7XG5cbmxldCBtZWRpYVN0cmVhbTtcbmxldCBpc1JlY29yZGluZztcbmxldCBtZWRpYVJlY29yZGVyO1xubGV0IHJlY29yZGVkQmxvYnM7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR4dCkge1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nXCI6XG4gICAgICAgICAgICBzdGFydFJlY29yZGluZyhtc2cudGFiSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZ1wiOlxuICAgICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93XCI6XG4gICAgICAgICAgICByZXNpemVXaW5kb3cobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIjpcbiAgICAgICAgICAgIHRyYWNrRXZlbnQobXNnLmNhdGVnb3J5LCBtc2cuYWN0aW9uLCBtc2cubGFiZWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVHJhY2tQYWdlXCI6XG4gICAgICAgICAgICB0cmFja1BhZ2UobXNnLnBhdGgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcblxuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHN0b3BSZWNvcmRpbmcoKTtcblxuICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIGZpbGU6ICdjb250ZW50LmpzJ1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cudGFiSWQgPSB0YWIuaWQ7XG5cbiAgICAgICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY2hyb21lU2l6ZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luLndpZHRoIC0gdGFiLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luLmhlaWdodCAtIHRhYi5oZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlQnJvd3NlckFjdGlvblwiLCB0YWJJZDogdGFiLmlkfTtcbiAgICAgICAgLy8gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCkge1xuICAgIGxldCBvcHRpb25zID0geyB3aWR0aDogd2lkdGggKyB3aW5kb3cuY2hyb21lU2l6ZS53aWR0aCwgaGVpZ2h0OiBoZWlnaHQgKyB3aW5kb3cuY2hyb21lU2l6ZS5oZWlnaHQgfTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICAgICAgY2hyb21lLndpbmRvd3MudXBkYXRlKHdpbi5pZCwgb3B0aW9ucyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURhdGFBdmFpbGFibGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnNpemUgPiAwKSB7XG4gICAgICAgIHJlY29yZGVkQmxvYnMucHVzaChldmVudC5kYXRhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSBcIlwiKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICcxNic6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICczMic6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDMyXCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICc0OCc6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICcxMjgnOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjhcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgY2hhbmdlSWNvbihcIl9yZWRcIik7XG4gICAgY2hyb21lLnRhYnMuZ2V0KHdpbmRvdy50YWJJZCwgX3N0YXJ0VGFiQ2FwdHVyZSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSwgX3N0YXJ0VGFiQ2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIF9zdGFydFRhYkNhcHR1cmUodGFiKSB7XG4gICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xuXG4gICAgLy8gTm90ZTogdGhpcyBtZXRob2QgbXVzdCBiZSBpbnZva2VkIGJ5IHRoZSB1c2VyIGFzIGRlZmluZWRcbiAgICAvLyBpbiBodHRwczovL2NyYnVnLmNvbS80ODkyNTgsIGUuZy4gY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLlxuXG4gICAgLy8gY29uc29sZS5sb2coXCJnZXRTdXBwb3J0ZWRDb25zdHJhaW50c1wiLCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzKCkpO1xuXG4gICAgbGV0IGNhcHR1cmVPcHRpb25zID0ge1xuICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgIGF1ZGlvQ29uc3RyYWludHM6IHtcbiAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZpZGVvQ29uc3RyYWludHM6IHtcbiAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGFiLndpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0YWIud2lkdGgsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0YWIuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdGFiLmhlaWdodCxcbiAgICAgICAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICAgICAgICAgIG1heEZyYW1lUmF0ZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjaHJvbWUudGFiQ2FwdHVyZS5jYXB0dXJlKGNhcHR1cmVPcHRpb25zLCBfc2V0U3RyZWFtKTtcbn1cblxuZnVuY3Rpb24gX3NldFN0cmVhbShzdHJlYW0pIHtcbiAgICBpZihzdHJlYW0pIHtcbiAgICAgICAgbWVkaWFTdHJlYW0gPSBzdHJlYW07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1N0cmVhbSBjcmVhdGlvbiBmYWlsZWQ6ICcgKyBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IHRyYWNrcyA9IG1lZGlhU3RyZWFtLmdldFRyYWNrcygpO1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tIHRyYWNrXCIsIHRyYWNrKTtcbiAgICAvLyAgICAgZm9yIChsZXQgaiBpbiB0cmFjaykgY29uc29sZS5sb2coaiwgXCI9XCIsIHRyYWNrW2pdKTtcbiAgICAvLyAgICAgbGV0IHNldHRpbmdzID0gdHJhY2suZ2V0U2V0dGluZ3MoKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tLSBzZXR0aW5nc1wiKTtcbiAgICAvLyAgICAgZm9yIChsZXQgayBpbiBzZXR0aW5ncykgY29uc29sZS5sb2coaywgXCI9XCIsIHNldHRpbmdzW2tdKTtcbiAgICAvLyB9XG4gICAgXG4gICAgcmVjb3JkZWRCbG9icyA9IFtdO1xuXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIF9jcmVhdGVNZWRpYVJlY29yZGVyKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZU1lZGlhUmVjb3JkZXIocmVzdWx0KSB7XG4gICBcbiAgICBsZXQgdmlkZW9Db2RlYyA9IFwidnA4XCI7XG4gICAgbGV0IGF1ZGlvQ29kZWMgPSBcIm9wdXNcIjtcbiAgICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gODtcbiAgICBsZXQgYXVkaW9CaXRzUGVyU2Vjb25kID0gMTI4O1xuXG4gICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4gICAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgICAgICB2aWRlb0NvZGVjID0gZGF0YS5zZXR0aW5ncy52aWRlb0NvZGVjIHx8IHZpZGVvQ29kZWM7XG4gICAgICAgICAgICBhdWRpb0NvZGVjID0gZGF0YS5zZXR0aW5ncy5hdWRpb0NvZGVjIHx8IGF1ZGlvQ29kZWM7XG4gICAgICAgICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZCB8fCBhdWRpb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZCB8fCB2aWRlb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxldCBvcHRpb25zID0geyBtaW1lVHlwZTogXCJ2aWRlby93ZWJtO2NvZGVjcz1oMjY0XCIgfTtcbiAgICBsZXQgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz0nICsgdmlkZW9Db2RlYyArIFwiLFwiICsgYXVkaW9Db2RlY307XG5cbiAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9dnA5JyB9O1xuICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOCcgfTtcbiAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nIH07XG4gICAgICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJycgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLmF1ZGlvQml0c1BlclNlY29uZCA9IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDA7IC8vIDEyOCBLYml0L3NlY1xuICAgIG9wdGlvbnMudmlkZW9CaXRzUGVyU2Vjb25kID0gdmlkZW9CaXRzUGVyU2Vjb25kICogMTAwMDAwMDsgLy8gOCBNYml0L3NlY1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V4Y2VwdGlvbiB3aGlsZSBjcmVhdGluZyBNZWRpYVJlY29yZGVyOicsIGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgRXhjZXB0aW9uIHdoaWxlIGNyZWF0aW5nIE1lZGlhUmVjb3JkZXI6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnQ3JlYXRlZCBNZWRpYVJlY29yZGVyJywgbWVkaWFSZWNvcmRlciwgJ3dpdGggb3B0aW9ucycsIG9wdGlvbnMpO1xuICAgIC8vIG1lZGlhUmVjb3JkZXIub25zdG9wID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdG9wcGVkOiAnLCBldmVudCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlZCBCbG9iczogJywgcmVjb3JkZWRCbG9icyk7XG4gICAgLy8gfTtcbiAgICBtZWRpYVJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IGhhbmRsZURhdGFBdmFpbGFibGU7XG4gICAgbWVkaWFSZWNvcmRlci5zdGFydCgxMCk7IC8vIGNvbGxlY3QgMTBtcyBvZiBkYXRhXG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKSB7XG4gICAgY2hhbmdlSWNvbigpO1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICBsZXQgdmlkZW9CbG9iID0gbmV3IEJsb2IocmVjb3JkZWRCbG9icywgeyB0eXBlOiAndmlkZW8vd2VibScgfSk7XG4gICAgd2luZG93LnZpZGVvVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodmlkZW9CbG9iKTtcblxuICAgIGlmIChtZWRpYVN0cmVhbSkge1xuICAgICAgICBsZXQgdHJhY2tzID0gbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0cmFja3NbaV0uc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xuICAgIG1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDEyIFRoZSBDaHJvbWl1bSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuIC8qKlxuICogQmVsb3cgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIHRoZSBHb29nbGUgQW5hbHl0aWNzIGFzeW5jaHJvbm91cyB0cmFja2luZ1xuICogY29kZSBzbmlwcGV0LiAgSXQgaGFzIGJlZW4gbW9kaWZpZWQgdG8gcHVsbCB0aGUgSFRUUFMgdmVyc2lvbiBvZiBnYS5qc1xuICogaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBIVFRQIHZlcnNpb24uICBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgdGhpc1xuICogc25pcHBldCBpbnN0ZWFkIG9mIHRoZSBzdGFuZGFyZCB0cmFja2luZyBzbmlwcGV0IHByb3ZpZGVkIHdoZW4gc2V0dGluZyB1cFxuICogYSBHb29nbGUgQW5hbHl0aWNzIGFjY291bnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoYW5hbHl0aWNzSUQpIHtcbiAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsIGFuYWx5dGljc0lEXSk7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xuXG4gICAgbGV0IGdhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGdhLmFzeW5jID0gdHJ1ZTtcbiAgICBnYS5zcmMgPSAnaHR0cHM6Ly9zc2wuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xuICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xuIH1cblxuLyoqXG4gKiBUcmFjayBhIGNsaWNrIG9uIGEgYnV0dG9uIHVzaW5nIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICogU2VlIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vYXBpcy9hbmFseXRpY3MvZG9jcy90cmFja2luZy9hc3luY1RyYWNraW5nLmh0bWxcbiAqIGZvciBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBsZXQgZXZlbnQgPSBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbl07XG4gICAgaWYgKGxhYmVsKSBldmVudC5wdXNoKGxhYmVsKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrUGFnZShwYXRoKSB7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXQnLCAncGFnZScsIHBhdGhdKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG59XG4iLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSBcIi4vbW9kZWwvR0FcIjtcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gXCIuL2JhY2tncm91bmRcIjtcblxuaW5pdEFuYWx5dGljcyhcIlVBLTE2MTQwNDYyNy0xXCIpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==