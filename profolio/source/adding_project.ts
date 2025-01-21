//. VAR FOR THE FORM ID
const newProjectForm = document.getElementById('newProjectForm') as HTMLFormElement;



//. FUNCTION THAT EXECUTES BACKEND FUNCTION
function backendReach(data:any): void {
    const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
    let csrfToken_ = csrfToken.value;

    const formData = new FormData();
    formData.append('title', data[0]);

    fetch('/add_new_project/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken_
        },
        body: formData
    })

};



//. FUNCTION THAT SHOWS THANK YOU MESSAGE ON INDEX PAGE
function say_thank_you1(message:string): void {

    //. than make message pop up, fixed position and disappears in 3 seconds
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


    // Add content to the <div>
    thankYouDiv.textContent = message;

    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'thank-you-div';

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);

    setTimeout(function() {
        let thankYouDiv2: any = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);

};


//. FUNCTION TO CLEAR INPUTS
function clear_inputs(): void {
    let title: any = document.getElementById('title');
    let short_description: any = document.getElementById('short_description');
    let technologies_used: any = document.getElementById('technologies_used');
    let images: any = document.getElementById('images');
    let demo_url: any = document.getElementById('demo_url');
    let gitHub: any = document.getElementById('gitHub');
    let long_description: any = document.getElementById('long_description');

    let video_url: any = document.getElementById('video_url');
    let site_url: any = document.getElementById('site_url');
    let project_type: any = document.getElementById('project_type');
    let use_cases: any = document.getElementById('use_cases');

    let imageCover_large: any = document.getElementById('imageCover_large');
    let imageCover_small: any = document.getElementById('imageCover_small');

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
};



if (newProjectForm) {
    newProjectForm.addEventListener("submit", function(event: Event) {
        event.preventDefault();
        
        //. GETTING THE VALUES OF DATA
        let title: string = (document.getElementById('title') as HTMLInputElement)?.value ?? '';
        let short_description: string = (document.getElementById('short_description') as HTMLInputElement)?.value ?? '';
        let technologies_used: string = (document.getElementById('technologies_used') as HTMLInputElement)?.value ?? '';
        let images: string = (document.getElementById('images') as HTMLInputElement)?.value ?? '';
        let demo_url: string = (document.getElementById('demo_url') as HTMLInputElement)?.value ?? '';
        let gitHub: string = (document.getElementById('gitHub') as HTMLInputElement)?.value ?? '';
        let long_description: string = (document.getElementById('long_description') as HTMLInputElement)?.value ?? '';

        let has_video: string = (document.getElementById('has_video') as HTMLInputElement)?.value ?? '';
        let has_video2: number = 0
        if (has_video == "yes"){
            has_video2 = 1
        } 


        let video_url: string = (document.getElementById('video_url') as HTMLInputElement)?.value ?? '';
        let site_url: string = (document.getElementById('site_url') as HTMLInputElement)?.value ?? '';
        let project_type: string = (document.getElementById('project_type') as HTMLInputElement)?.value ?? '';
        let use_cases: string = (document.getElementById('use_cases') as HTMLInputElement)?.value ?? '';

        let imageCover_large: string = (document.getElementById('imageCover_large') as HTMLInputElement)?.value ?? '';
        let imageCover_small: string = (document.getElementById('imageCover_small') as HTMLInputElement)?.value ?? '';


        let data: any = [title, short_description, technologies_used, images, demo_url, gitHub, long_description, has_video2, video_url, site_url, project_type, use_cases, imageCover_large, imageCover_small];

        backendReach(data);

        clear_inputs();

        say_thank_you1("New Project Added!!");
    });
};
