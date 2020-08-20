function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "HirokazuKoreeda");
    placeholder.setAttribute("src", "images/koreeda.jpg");
    placeholder.setAttribute("alt", "Movies by Koreeda");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
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

function countBodyChildren() {
    var body_Element = document.getElementsByTagName("body")[0];
    alert(body_Element.childNodes.length);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);