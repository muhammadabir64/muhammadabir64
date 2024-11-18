<script>
import { onMount } from "svelte";
import SkillCarouselHeader from "$lib/components/SkillCarouselHeader.svelte";
import SkillCarouselRight from "$lib/components/SkillCarouselRight.svelte";
import SkillCarouselLeft from "$lib/components/SkillCarouselLeft.svelte";
import ProjectSlider from "$lib/components/ProjectSlider.svelte";
import ContactForm from "$lib/components/ContactForm.svelte";
import { activeSection } from "../stores";

let resume_url = "";
let projects = [];

onMount(async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      resume_url = data.resume;
      projects = data.showcases.slice(0, 5);
    } catch (error) {
      console.error("Error loading data:", error);
    }
    activeSection.set("about_me");
    
});
</script>

<svelte:head>
    <title>Muhammad ABir</title>
</svelte:head>

<section id="about_me" class="section-hero-2 position-relative pt-130 pb-3">
    <div class="container hero-2">
        <div class="border border-1 rounded-3">
            <div class="box-linear-animation position-relative z-1">
                <div class="row py-60">
                    <div class="col-lg-4 mx-lg-auto ps-lg-5 d-flex justify-content-center align-items-center">
                        <div class="position-relative mb-lg-0 mb-5">
                            <img src="/img/my_pic.png" alt="my pic" />
                        </div>
                    </div>
                    <div class="col-lg-6 mx-lg-auto col-md-12">
                        <div class="p-lg-0 p-md-8 p-3">
                            <div class="text-secondary-2 d-flex align-items-center">
                                &lt;span&gt;
                                <div class="text-dark">
                                    <div class="typewriter"><h1 class="fs-6 fw-medium">Hi, I’m Muhammad ABir</h1></div>
                                </div>
                                &lt;/span&gt;
                            </div>
                            <h1 class="fs-50 my-3">Passionate <span class="text-linear-4">&#123;Web Developer&#125;</span> & Digital Craftsman<span class="flicker">_</span></h1>
                            <p class="mb-6 text-secondary-2">
                                <span class="text-dark">I am a passionate, self-taught developer based in Bangladesh. With over 5 years of experience as a freelance web developer, I've had the privilege of working with individuals, agencies, and startups, crafting tailored digital solutions for both business and consumer needs. I'm naturally curious, confident in my skills, and continuously focused on improving my workflow and staying ahead in the ever-evolving field of web development.</span>
                            </p>                            
                            <div class="row">
                                <div class="col-md-8">
                                    <SkillCarouselHeader />
                                </div>
                            </div>
                            <a href={resume_url} class="btn me-2 text-300 ps-0 mt-4" target="_blank">
                                <i class="ri-download-line text-primary-2"></i>
                                [ Download my CV ]
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="background position-absolute top-0 start-0 w-100 h-100">
        <img class="bg-w" src="/img/bg.png" alt="bg" />
        <img class="bg-d" src="/img/bg-dark.png" alt="bg" />
    </div>
</section>

<section id="skills" class="section-skills-2 pt-2">
    <div class="container">
        <div class="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
            <div class="box-linear-animation position-relative z-1 py-6">
                <div class="position-relative z-1">
                    <div class="text-center pt-md-0 pt-2">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg class="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                            </svg>
                            <span class="text-linear-4 d-flex align-items-center">Expertise & Technologies</span>
                        </div>
                        <h3>My Skills</h3>
                    </div>
                    <div class="container mt-md-8 mt-5">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-lg-10 col-md-9 mx-auto overflow-hidden">
                                        <SkillCarouselRight />
                                    </div>
                                    <div class="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
                                        <SkillCarouselLeft />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 border-start-md mt-lg-0 mt-5">
                                <div class="row">
                                    <div class="col-md-10 mx-auto">
                                        <div class="h-100 position-relative">
                                            <ul class="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
                                                <li class="mb-3">
                                                    <div class="d-flex flex-column flex-md-row gap-2">
                                                        <p class="text-dark text-nowrap mb-0">Front-End:</p>
                                                        <span class="text-300">React, Svelte, JavaScript, HTML, CSS, Bootstrap, Tailwind, Materialize</span>
                                                    </div>
                                                </li>
                                                <li class="mb-3">
                                                    <div class="d-flex flex-column flex-md-row gap-2">
                                                        <p class="text-dark text-nowrap mb-0">Back-End:</p>
                                                        <span class="text-300">Node.js, Express, Python (Django, Flask), PHP, Laravel</span>
                                                    </div>
                                                </li>
                                                <li class="mb-3">
                                                    <div class="d-flex flex-column flex-md-row gap-2">
                                                        <p class="text-dark text-nowrap mb-0">Databases:</p>
                                                        <span class="text-300">MySQL, PostgreSQL, SQLite, MongoDB, Redis</span>
                                                    </div>
                                                </li>
                                                <li class="mb-3">
                                                    <div class="d-flex flex-column flex-md-row gap-2">
                                                        <p class="text-dark text-nowrap mb-0">Tools & Platforms:</p>
                                                        <span class="text-300">Git, Docker, Firebase, Figma, AWS, Heroku, Linux</span>
                                                    </div>
                                                </li>
                                                <li class="mb-3">
                                                    <div class="d-flex flex-column flex-md-row gap-2">
                                                        <p class="text-dark text-nowrap mb-0">Others:</p>
                                                        <span class="text-300">RESTful APIs, WebSockets</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute d-none d-md-block decorate">
                <div class="rotateme">
                    <div class="circle-1-1"></div>
                    <div class="circle-1-2 position-absolute top-50 start-50 translate-middle">
                        <svg class="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                    </div>
                    <div class="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                        <svg class="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="services" class="section-service-2 pt-5">
    <div class="container">
        <div class="rounded-3 border border-1 position-relative overflow-hidden">
            <div class="box-linear-animation position-relative z-1">
                <div class="position-relative z-1">
                    <div class="text-center pt-5">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg class="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                            </svg>
                            <span class="text-linear-4 d-flex align-items-center">What I Do</span>
                        </div>
                        <h3>Code That Works,<br />
                            <span class="text-300">Solutions That</span> Impress
                        </h3>
                    </div>
                    <div class="container mt-5">
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" fill="#1F1F24" />
                                    </svg>
                                    <h6 class="my-3 fw-medium">Full-Stack Web Development</h6>
                                    <p class="fs-7 text-300 fw-regular">Building robust, scalable, and dynamic web applications using modern technologies like <span class="text-secondary-2">React</span>, <span class="text-secondary-2">Svelte</span>, <span class="text-secondary-2">Node.js</span>, <span class="text-secondary-2">Python</span>, <span class="text-secondary-2">PHP</span></p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM19 11V4H5V11H19ZM19 13H5V20H19V13ZM9 6H15V8H9V6ZM9 15H15V17H9V15Z" fill="#1F1F24" />
                                    </svg>
                                    <h6 class="my-3 fw-medium">Database Management</h6>
                                    <p class="fs-7 text-300 fw-regular">Designing and managing SQL and NoSQL databases using <span class="text-secondary-2">MySQL</span>, <span class="text-secondary-2">PostgreSQL</span> and <span class="text-secondary-2">MongoDB</span> to ensure data integrity, scalability, and performance.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z" fill="#1F1F24" />
                                    </svg>
                                    <h6 class="my-3 fw-medium">API Development</h6>
                                    <p class="fs-7 text-300 fw-regular">Designing and building robust <span class="text-secondary-2">RESTful APIs</span> to ensure seamless communication between front-end and back-end systems, enhancing functionality and user experience.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13 19.9C15.2822 19.4367 17 17.419 17 15V12C17 11.299 16.8564 10.6219 16.5846 10H7.41538C7.14358 10.6219 7 11.299 7 12V15C7 17.419 8.71776 19.4367 11 19.9V14H13V19.9ZM5.5358 17.6907C5.19061 16.8623 5 15.9534 5 15H2V13H5V12C5 11.3573 5.08661 10.7348 5.2488 10.1436L3.0359 8.86602L4.0359 7.13397L6.05636 8.30049C6.11995 8.19854 6.18609 8.09835 6.25469 8H17.7453C17.8139 8.09835 17.88 8.19854 17.9436 8.30049L19.9641 7.13397L20.9641 8.86602L18.7512 10.1436C18.9134 10.7348 19 11.3573 19 12V13H22V15H19C19 15.9534 18.8094 16.8623 18.4642 17.6907L20.9641 19.134L19.9641 20.866L17.4383 19.4077C16.1549 20.9893 14.1955 22 12 22C9.80453 22 7.84512 20.9893 6.56171 19.4077L4.0359 20.866L3.0359 19.134L5.5358 17.6907ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6H8Z"></path>
                                    </svg>
                                    <h6 class="my-3 fw-medium">Bug Fixing & Issue Resolution</h6>
                                    <p class="fs-7 text-300 fw-regular">Resolving issues in web applications for smooth functionality. Experienced with <span class="text-secondary-2">Node.js</span>, <span class="text-secondary-2">Python</span>, <span class="text-secondary-2">PHP</span>, and front-end technologies.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                                    </svg>
                                    <h6 class="my-3 fw-medium">Web Scraping & Automation</h6>
                                    <p class="fs-7 text-300 fw-regular">Web scraping with <span class="text-secondary-2">BeautifulSoup</span>, <span class="text-secondary-2">Puppeteer</span>, <span class="text-secondary-2">Selenium</span>, and scalable <span class="text-secondary-2">social bots</span> for data extraction and automation of tasks.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card-servies-2 rounded-2 h-100 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path>
                                    </svg>
                                    <h6 class="my-3 fw-medium">Integrating AI</h6>
                                    <p class="fs-7 text-300 fw-regular">Enhancing applications with AI integration to drive automation, optimize workflows, and deliver an improved user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-6 pb-2">
                            <p class="text-300">
                                Excited to take on <span class="text-dark">new projects</span> and collaborate. <br />
                                Let's discuss about your ideas. <a href="#contact" class="text-primary-2">Reach out!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-projects-2 pt-5" id="projects">
    <div class="container">
        <div class="rounded-3 border border-1 position-relative overflow-hidden">
            <div class="box-linear-animation position-relative z-1">
                <div class="position-relative z-1 py-5">
                    <div class="d-flex justify-content-center align-items-center">
                        <svg class="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                            <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                        </svg>
                        <span class="text-linear-4 d-flex align-items-center">Showcase</span>
                    </div>
                    <h3 class="text-center">Some Of My Works</h3>
                    <div class="position-relative">
                        {#if projects.length > 0}
                            <ProjectSlider {projects} />
                        {/if}
                        <div class="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-flex">
                            <div class="swiper-button-prev end-0 shadow position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
                                </svg>
                            </div>
                            <div class="swiper-button-next end-0 shadow position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="text-300 mb-0">
                            Want to see more? Check out my <a href="/projects" class="text-secondary-2">Project Inventory<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 12L10 18V6L16 12Z"></path></svg></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="section-contact-2 position-relative pb-60 overflow-hidden pt-10">
    <div class="container position-relative z-1">
        <div class="row align-items-center">
            <div class="col-lg-7 pb-5 pb-lg-0">
                <div class="position-relative">
                    <div class="position-relative z-2">
                        <h3 class="text-primary-2 mb-3">Let’s connect</h3>
                        <ContactForm />
                    </div>
                    <div class="z-0 bg-primary-dark rectangle-bg z-1 rounded-3"></div>
                </div>
            </div>
            <div class="col-lg-5 d-flex flex-column ps-lg-8">
                <div class="d-flex align-items-center mb-3 position-relative d-inline-flex">
                    <div class="d-inline-block">
                        <div class="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                            <i class="ri-telegram-2-fill text-primary-2 fs-26"></i>
                        </div>
                    </div>
                    <div class="ps-3 h-100">
                        <span class="text-400 fs-6">Telegram</span>
                        <h6 class="mb-0">@muhammadabir64</h6>
                    </div>
                    <a href="https://t.me/muhammadabir64" class="position-absolute top-0 start-0 w-100 h-100" target="_blank" aria-label="btn"></a>
                </div>
                <div class="d-flex align-items-center mb-3 position-relative d-inline-flex">
                    <div class="d-inline-block">
                        <div class="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                            <i class="ri-linkedin-fill text-primary-2 fs-26"></i>
                        </div>
                    </div>
                    <div class="ps-3 h-100">
                        <span class="text-400 fs-6">Linkedin</span>
                        <h6 class="mb-0">Muhammad ABir</h6>
                    </div>
                    <a href="https://www.linkedin.com/in/muhammadabir64" class="position-absolute top-0 start-0 w-100 h-100" target="_blank" aria-label="btn"></a>
                </div>
                <div class="d-flex align-items-center mb-3 position-relative d-inline-flex">
                    <div class="d-inline-block">
                        <div class="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                            <i class="ri-mail-fill text-primary-2 fs-26"></i>
                        </div>
                    </div>
                    <div class="ps-3 h-100">
                        <span class="text-400 fs-6">Email</span>
                        <h6 class="mb-0">muhammadabir404@gmail.com</h6>
                    </div>
                    <a href="mailto:muhammadabir404@gmail.com" class="position-absolute top-0 start-0 w-100 h-100" target="_blank" aria-label="btn"></a>
                </div>
                <div class="d-flex align-items-center mb-3 position-relative d-inline-flex">
                    <div class="d-inline-block">
                        <div class="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                            <i class="ri-map-pin-user-line text-primary-2 fs-26"></i>
                        </div>
                    </div>
                    <div class="ps-3 h-100">
                        <span class="text-400 fs-6">Address</span>
                        <h6 class="mb-0">mirpur 11, Dhaka</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
