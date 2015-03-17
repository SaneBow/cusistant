/*! The MIT License (MIT)
 *
 *Copyright (c) [2015] [WANG Xianbo]
 *
 *Permission is hereby granted, free of charge, to any person obtaining a copy
 *of this software and associated documentation files (the "Software"), to deal
 *in the Software without restriction, including without limitation the rights
 *to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *copies of the Software, and to permit persons to whom the Software is
 *furnished to do so, subject to the following conditions:
 *
 *The above copyright notice and this permission notice shall be included in all
 *copies or substantial portions of the Software.
 *
 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *SOFTWARE.
 * 
 */

 
/*Background script runs from here */
console.log("Background runs!");
 
/* Add listener to every tabs */ 
chrome.tabs.onUpdated.addListener(checkForValidPage);

/*Declare global variables here*/

/* Add an message listener to handle all the messages from both content script and popup */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	/* To do */
});





/*
 * Functions declaration field
 *
 */
 
function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidPage(tabId, changeInfo, tab) {
	var current_domain = getDomainFromUrl(tab.url).toLowerCase();
	if (current_domain == "cusis.cuhk.edu.hk" || 
		current_domain == "portal.cuhk.edu.hk") 
	{
		console.log("In CUSIS, show icon.");
		chrome.pageAction.show(tabId);
    }
}