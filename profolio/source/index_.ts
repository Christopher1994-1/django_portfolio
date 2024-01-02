window.addEventListener('load', () => {
    const on_page:any = document.querySelector('.input_page');
    const on_pageValue:any = on_page.value;

    let returnValue:string = `${on_pageValue} `
    let returnValue2:string = `${on_pageValue} closed`

    userLeftSite(returnValue)

    
    window.addEventListener('beforeunload', () => {
        userLeftSite1(returnValue2)

    })


    function userLeftSite1(action:string) {
        const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
        const csrfValue = csrfToken.value;

        let items:any = action;
        const formData = new FormData();
        formData.append('popup_username', items);
        
        fetch('/userleft/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfValue  // Use csrfValue here, not csrfToken
            },
            body: formData
        });
    }


    function userLeftSite(action:string) {
        const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
        const csrfValue = csrfToken.value;
        let items:any = action;
        const formData = new FormData();
        formData.append('popup_username', items);
        
        fetch('/userArrival/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfValue  // Use csrfValue here, not csrfToken
            },
            body: formData
        });
    }
})

