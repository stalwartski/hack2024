!function() {
    var e, t, o, n, m, r, c = document.querySelector("body"),
        s = document.head || document.getElementsByTagName("head")[0],
        l = !1,
        i = !1,
        d = !1;

    function onProcess() {
        if (i) {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            n && n.parentNode === s && s.removeChild(n);
            c.removeChild(document.querySelector(".web-select-ext1-overlay"));
            document.querySelectorAll(".web-select-ext1-elem").forEach(function(e) {
                e.classList.remove("web-select-ext1-elem");
            });
            i = !1;
            return;
        }
        
        i = !0;
        n = document.createElement("style");
        n.type = "text/css";
        n.appendChild(document.createTextNode(`
            body { user-select: none; }
            .web-select-ext1-elem {
                background-color: #fff !important;
                color: #000 !important;
                border: dashed 1px #000 !important;
                position: relative !important;
                z-index: 1000001 !important;
            }
            .web-select-ext1-exit {
                position: fixed;
                color: #000;
                bottom: 20px;
                right: 20px;
                background-color: lime;
                border: solid 2px green;
                padding: 10px;
                z-index: 1000003 !important;
                font-size: 27px;
            }
            .web-select-ext1-copyright {
                position: fixed;
                bottom: 20px;
                left: 20px;
                font-size: 10px;
                color: #fff;
                z-index: 1000002 !important;
            }
            .web-select-ext1-copyright a {
                font-weight: bold;
                color: lime;
            }
        `));
        s.appendChild(n);
        
        run();
    }

    function run() {
        o = document.createElement("div");
        o.className = "web-select-ext1-overlay";
        
        e = document.createElement("button");
        e.innerHTML = "Copy & Exit";
        e.className = "web-select-ext1-exit";
        e.onclick = CopyExit;
        
        t = document.createElement("div");
        t.className = "web-select-ext1-copyright";
        t.innerHTML = '&copy; <a title="Digital Marketing" href="https://example.com">EXAMPLE</a> 2023, ALL RIGHTS RESERVED';
        
        o.append(t);
        o.append(e);
        c.prepend(o);
        
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    function CopyExit() {
        copyElementsToClipboard();
        
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        n && n.parentNode === s && s.removeChild(n);
        c.removeChild(document.querySelector(".web-select-ext1-overlay"));
        document.querySelectorAll(".web-select-ext1-elem").forEach(function(e) {
            e.classList.remove("web-select-ext1-elem");
        });
        i = !1;
    }

    function copyElementsToClipboard() {
        var elements = document.querySelectorAll(".web-select-ext1-elem");
        var container = document.createElement("div");
        container.className = "web-select-ws-v1";
        elements.forEach(function(el) {
            var clone = el.cloneNode(true); // Cloning the element
            container.appendChild(clone);
        });
        document.body.appendChild(container);
        container.contentEditable = !0;
        container.unselectable = "off";
        container.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
        document.body.removeChild(container);
    }

    function onMouseDown(e) {
        if (e.button === 0) {
            m = e.clientX;
            r = e.clientY;
            l = !0;
            var element = document.elementsFromPoint(m, r)[0];
            if (d && element) {
                element.classList.remove("web-select-ext1-elem");
            }
        }
    }

    function onMouseMove(e) {
        if (l) {
            var elements = document.elementsFromPoint(e.clientX, e.clientY);
            m = e.clientX;
            r = e.clientY;
            if (elements.length > 0) {
                var element = elements[0];
                if (element === o) return;
                d ? element.classList.remove("web-select-ext1-elem") : element.classList.add("web-select-ext1-elem");
            }
        }
    }

    function onMouseUp() {
        l = !1;
    }

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            n && n.parentNode === s && s.removeChild(n);
            c.removeChild(document.querySelector(".web-select-ext1-overlay"));
            document.querySelectorAll(".web-select-ext1-elem").forEach(function(e) {
                e.classList.remove("web-select-ext1-elem");
            });
            i = !1;
            return;
        }
        if (e.shiftKey) {
            d = !0;
        }
    });

    document.addEventListener("keyup", function() {
        d = !1;
    });

    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === "X") {
            onProcess();
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey && e.key === "c") {
            CopyExit();
        }
    });
}();