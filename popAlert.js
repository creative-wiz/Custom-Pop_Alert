/* 
Created by: Creativewiz 😈
Youtube: Creativewiz Coding 
Please Subscribe 😊
*/
function pop_alert(o = "", e = "alert", t = "ok", a = false, n = "null") {
    loadcss();
    var r = document.createElement("div");
    r.classList.add("pop-wrapper");
    var i = document.createElement("div");
    i.classList.add("pop-card");
    r.appendChild(i);
    var d = document.createElement("h1");
    d.classList.add("pop-heading");
    d.innerHTML = e;
    i.appendChild(d);
    i.innerHTML += o;
    var p = document.createElement("button");
    document.body.style.overflowY = "hidden";
    p.classList.add("pop-btn");
    p.innerHTML += t;
    p.addEventListener("click", s);
    i.appendChild(p);
    document.body.appendChild(r);

    function s() {
        i.style.animation = "popAnimationOut 0.5s forwards";
        r.style.animation = "popFade 0.5s forwards";
        document.body.style.overflowY = "scroll";
        !1;
        setTimeout(() => {
            r.remove()
        }, 500)
    }

    window.addEventListener("click", function(o) {
        o.target == r && s()
    });
    1 == a && (p.style.background = "#1b60a6", i.style.background = "rgb(35,35,35)", i.style.color = "white");
    "null" !== n && (p.style.background = n)
}

function loadcss() {
    if (0 == cssloaded) {
        var o = document.createElement("style");
        o.innerHTML = "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap);.pop-wrapper{width:100%;height:100%;background:rgba(0,0,0,.75);font-family:Roboto,sans-serif;position:fixed;left:0;top:0;z-index:400;display:grid;place-item:center;overflow-y:scroll;backdrop-filter:blur(10px)}.pop-card{width:77%;margin:auto;background:#fff;padding:1rem 2rem;overflow:hidden;border-radius:7px;animation:popAnimationIn .5s}.pop-btn{padding:.7rem .4rem;background:#1e90ff;border:none;outline:0;border-radius:7px;color:#fff;min-width:70px;margin:.1rem;margin-top:2.72rem;float:right;font-weight:500}.pop-btn:active{opacity:.4}.pop-heading{font-weight:500;font-size:2.25rem}@keyframes popAnimationIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes popAnimationOut{to{transform:scale(0);opacity:0}from{transform:scale(1);opacity:1}}@keyframes popFade{from{opacity:1}to{opacity:0}}";
        document.body.appendChild(o);
        cssloaded = !0
    }
}
var cssloaded = !1;
