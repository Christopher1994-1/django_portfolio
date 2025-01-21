"use strict";
const newProjectForm = document.getElementById('newProjectForm');
function backendReach(data) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    let csrfToken_ = csrfToken.value;
    const formData = new FormData();
    formData.append('title', data[0]);
    fetch('/add_new_project/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken_
        },
        body: formData
    });
}
;
function say_thank_you1(message) {
    const thankYouDiv = document.createElement('div');
    thankYouDiv.style.position = 'fixed';
    thankYouDiv.style.top = '7%';
    thankYouDiv.style.left = '50%';
    thankYouDiv.style.transform = 'translate(-50%, -50%)';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.backgroundColor = '#f9f9f9';
    thankYouDiv.style.border = '1px solid #ccc';
    thankYouDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    thankYouDiv.style.zIndex = '1000';
    thankYouDiv.textContent = message;
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
    setTimeout(function () {
        let thankYouDiv2 = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);
}
;
function clear_inputs() {
    let title = document.getElementById('title');
    let short_description = document.getElementById('short_description');
    let technologies_used = document.getElementById('technologies_used');
    let images = document.getElementById('images');
    let demo_url = document.getElementById('demo_url');
    let gitHub = document.getElementById('gitHub');
    let long_description = document.getElementById('long_description');
    let video_url = document.getElementById('video_url');
    let site_url = document.getElementById('site_url');
    let project_type = document.getElementById('project_type');
    let use_cases = document.getElementById('use_cases');
    let imageCover_large = document.getElementById('imageCover_large');
    let imageCover_small = document.getElementById('imageCover_small');
    title.value = '';
    short_description.value = '';
    technologies_used.value = '';
    images.value = '';
    demo_url.value = '';
    gitHub.value = '';
    long_description.value = '';
    video_url.value = '';
    site_url.value = '';
    project_type.value = '';
    use_cases.value = '';
    imageCover_large.value = '';
    imageCover_small.value = '';
}
;
if (newProjectForm) {
    newProjectForm.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        event.preventDefault();
        let title = (_b = (_a = document.getElementById('title')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        let short_description = (_d = (_c = document.getElementById('short_description')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        let technologies_used = (_f = (_e = document.getElementById('technologies_used')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        let images = (_h = (_g = document.getElementById('images')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        let demo_url = (_k = (_j = document.getElementById('demo_url')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        let gitHub = (_m = (_l = document.getElementById('gitHub')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : '';
        let long_description = (_p = (_o = document.getElementById('long_description')) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : '';
        let has_video = (_r = (_q = document.getElementById('has_video')) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : '';
        let has_video2 = 0;
        if (has_video == "yes") {
            has_video2 = 1;
        }
        let video_url = (_t = (_s = document.getElementById('video_url')) === null || _s === void 0 ? void 0 : _s.value) !== null && _t !== void 0 ? _t : '';
        let site_url = (_v = (_u = document.getElementById('site_url')) === null || _u === void 0 ? void 0 : _u.value) !== null && _v !== void 0 ? _v : '';
        let project_type = (_x = (_w = document.getElementById('project_type')) === null || _w === void 0 ? void 0 : _w.value) !== null && _x !== void 0 ? _x : '';
        let use_cases = (_z = (_y = document.getElementById('use_cases')) === null || _y === void 0 ? void 0 : _y.value) !== null && _z !== void 0 ? _z : '';
        let imageCover_large = (_1 = (_0 = document.getElementById('imageCover_large')) === null || _0 === void 0 ? void 0 : _0.value) !== null && _1 !== void 0 ? _1 : '';
        let imageCover_small = (_3 = (_2 = document.getElementById('imageCover_small')) === null || _2 === void 0 ? void 0 : _2.value) !== null && _3 !== void 0 ? _3 : '';
        let data = [title, short_description, technologies_used, images, demo_url, gitHub, long_description, has_video2, video_url, site_url, project_type, use_cases, imageCover_large, imageCover_small];
        backendReach(data);
        clear_inputs();
        say_thank_you1("New Project Added!!");
    });
}
;
