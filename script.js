var webUrl = "index.html";
window.document.body.ownerDocument.clear();
var ifrmFlag = document.getElementById('ifrm');
if (ifrmFlag != null && ifrmFlag != "null" && ifrmFlag != "") {
    document.body.removeChild(ifrmFlag);
}
var iframe = document.createElement("iframe");
iframe.id = "ifrm";
iframe.src = webUrl;
iframe.width = "100%";
iframe.height = "100%";
iframe.frameBorder = "0";
iframe.scrolling = "no";
document.body.appendChild(iframe);