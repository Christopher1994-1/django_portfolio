"use strict";
window.addEventListener('load', () => {
    const on_page = document.querySelector('.input_page');
    const on_pageValue = on_page.value;
    let returnValue = `${on_pageValue} `;
    let returnValue2 = `${on_pageValue} closed`;
    userLeftSite(returnValue);
    window.addEventListener('beforeunload', () => {
        userLeftSite1(returnValue2);
    });
    function userLeftSite1(action) {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
        const csrfValue = csrfToken.value;
        let items = action;
        const formData = new FormData();
        formData.append('popup_username', items);
        fetch('/userleft/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfValue
            },
            body: formData
        });
    }
    function userLeftSite(action) {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
        const csrfValue = csrfToken.value;
        let items = action;
        const formData = new FormData();
        formData.append('popup_username', items);
        fetch('/userArrival/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfValue
            },
            body: formData
        });
    }
});
