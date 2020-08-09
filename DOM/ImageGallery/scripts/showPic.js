function showPic(whichPic) {
    if (!document.getElementById("HirokazuKoreeda")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("HirokazuKoreeda");
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        var title = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        description.firstChild.nodeValue = title;
    }
    return true;
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function countBodyChildren() {
    var body_Element = document.getElementsByTagName("body")[0];
    alert(body_Element.childNodes.length);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload;
            func();
        }
    }
}

// window.onload = countBodyChildren;
addLoadEvent(prepareGallery);