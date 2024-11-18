<script>
import { onMount, afterUpdate } from "svelte";
import { activeSection } from "../stores";

let logo_name = "";
let social_url = [];
let sticky = false;
const sections = [
    { id: "about_me", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
];
let activeSectionValue;
$: $activeSection, activeSectionValue = $activeSection;

let handleScroll;
let observer;

const setupScrollAndObserver = () => {
    handleScroll = () => {
        sticky = window.scrollY > 50;
    };
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSectionValue = entry.target.id;
            }
        });
    }, observerOptions);

    sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
};

// Cleanup function to remove event listeners and observer
const cleanupScrollAndObserver = () => {
    window.removeEventListener("scroll", handleScroll);
    if (observer) {
        observer.disconnect();
    }
};

onMount(async () => {
    setupScrollAndObserver();

    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      logo_name = data.logo_name;
      social_url = data.social_url;
    } catch (error) {
      console.error("Error loading data:", error);
    }

    return cleanupScrollAndObserver;
});

afterUpdate(() => {
    setupScrollAndObserver();
});
</script>

<!--Preloader-->
<div id="preloader">
    <div class="loader-cover">
        <div class="loader-container">
            <div class="loader-icon-2"></div>
        </div>
    </div>
</div>
<!--Preloader-end -->

<!-- Navbar -->
<header class={sticky ? 'sticky' : ''}>
   <div class="container position-relative">
      <div class="position-relative">
         <nav class="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
            <a href={"javascript:void(0)"} class="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" aria-label="nav">
            <i class="ri-menu-2-line"></i>
            </a>
            <div class="container py-3 px-4">
               <a href="/" class="navbar-brand d-flex main-logo align-items-center">
               <img src="/img/logo.svg" alt="logo" />
               <span class="fs-4 ms-2">{logo_name}</span>
               </a>
               <div class="d-none d-lg-flex">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {#each sections as { id, label }}
                        <li class="nav-item">
                            <a href={`/#${id}`} class="nav-link {id === activeSectionValue ? 'active' : ''}">{label}</a>
                        </li>
                        {/each}
                     </ul>
                  </div>
               </div>
               <div class="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                  <div class="d-md-flex d-none gap-3">
                    {#each social_url as id}
                    <a href={id.url} target="_blank" aria-label="icon">
                        <i class="ri-{id.platform} fs-18"></i>
                    </a>
                    {/each}
                  </div>
                  <div class="burger-icon burger-icon-white border rounded-3">
                     <span class="burger-icon-top"></span>
                     <span class="burger-icon-mid"></span>
                     <span class="burger-icon-bottom"></span>
                  </div>
               </div>
            </div>
         </nav>
      </div>
      <!-- offCanvas-menu -->
        <div class="offCanvas__info style-2">
            <div class="offCanvas__close-icon menu-close">
                <button aria-label="btn"><i class="ri-close-line"></i></button>
            </div>
            <div class="offCanvas__logo mb-5">
                <h3 class="mb-0">Let’s Collaborate!</h3>
            </div>
            <div class="offCanvas__side-info mb-30">
                <div class="contact-list mb-30">
                <p class="fs-6 fw-medium text-200 mb-5">Have a project in mind?<br>I'd love to hear from you.</p>
                <div class="mb-3">
                    <span class="text-400 text-secondary-2 fs-5">[Telegram]</span>
                    <p class="mb-0"><a href="https://t.me/muhammadabir64" target="_blank">@muhammadabir64</a></p>
                </div>
                <div class="mb-3">
                    <span class="text-400 text-secondary-2 fs-5">[Email]</span>
                    <p class="mb-0"><a href="mailto:muhammadabir404@gmail.com" target="_blank">muhammadabir404@gmail.com</a></p>
                </div>
                </div>
                <div class="contact-list">
                <p class="text-400 fs-5 mb-2">Social</p>
                <div class="d-md-flex d-none gap-3">
                    {#each social_url as id}
                    <a href={id.url} target="_blank" aria-label="icon">
                        <i class="ri-{id.platform} fs-18"></i>
                    </a>
                    {/each}
                </div>
                </div>
            </div>
        </div>
        <div class="offCanvas__overly"></div>
        <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
            <div class="mobile-header-wrapper-inner">
                <div class="mobile-header-logo">
                <a href="/" class="d-flex main-logo align-items-center d-inline-flex">
                    <img src="/img/logo.svg" alt="logo" />
                    <span class="fs-4 ms-2">{logo_name}</span>
                </a>
                <div class="burger-icon burger-icon-white border rounded-3">
                    <span class="burger-icon-top"></span>
                    <span class="burger-icon-mid"></span>
                    <span class="burger-icon-bottom"></span>
                </div>
                </div>
                <div class="mobile-header-content-area">
                <div class="perfect-scroll">
                    <div class="mobile-menu-wrap mobile-header-border mb-4">
                        <nav>
                            <ul class="mobile-menu font-heading ps-0">
                                {#each sections as { id, label }}
                                <li class="nav-item">
                                    <a href={`/#${id}`} class="nav-link {id === activeSection ? 'active' : ''}">{label}</a>
                                </li>
                                {/each}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div class="contact-list mb-30">
                            <div class="mb-3">
                                <span class="text-400 text-secondary-2 fs-5">[Telegram]</span>
                                <p class="mb-0"><a href="https://t.me/muhammadabir64" target="_blank">@muhammadabir64</a></p>
                            </div>
                            <div class="mb-3">
                                <span class="text-400 text-secondary-2 fs-5">[Email]</span>
                                <p class="mb-0"><a href="mailto:muhammadabir404@gmail.com" target="_blank">muhammadabir404@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center gap-3">
                        {#each social_url as id}
                        <a href={id.url} target="_blank" aria-label="icon">
                            <i class="ri-{id.platform} fs-18"></i>
                        </a>
                        {/each}
                    </div>
                </div>
                </div>
            </div>
        </div>
   </div>
</header>
<main>
<slot />
</main>
<!-- Footer -->
<footer>
    <div class="section-footer-2 position-relative">
        <div class="container position-relative z-1 border-top border-1 pb-2 pt-4">
            <div class="text-center">
                <a href="{'#'}" class="d-flex main-logo align-items-center justify-content-center mb-3">
                    <img src="/img/logo.svg" alt="logo" />
                    <span class="fs-4 ms-2">{logo_name}</span>
                </a>
                <div class="d-flex justify-content-center gap-3">
                    {#each social_url as id}
                    <a href={id.url} target="_blank" aria-label="icon">
                        <i class="ri-{id.platform} fs-18"></i>
                    </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="btn-scroll-top style-btn-2">
    <svg class="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
        <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" />
    </svg>
</div>

<style>
header {
  position: relative;
  width: 100%;
  transition: padding 0.3s ease;
}
header.sticky {
  position: fixed;
  top: -23px !important;
  z-index: 9999;
  animation: bounce 0.5s ease-out;
}
@keyframes bounce {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>