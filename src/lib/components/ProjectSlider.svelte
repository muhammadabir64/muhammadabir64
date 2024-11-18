<script>
    import { onMount } from "svelte";
    export let projects = [];

    function createSlug(title) {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    onMount(() => {
        if (projects.length > 0) {
            const swiper = new Swiper(".slider-two", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: false,
                loop: true,
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    });
</script>

<div class="swiper slider-two pb-3 position-relative">
  <div class="swiper-wrapper">
      {#each projects as project}
      <div class="swiper-slide">
          <div class="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
              <div class="row">
                  <div class="col-lg-5">
                    <a href={`/projects/${createSlug(project.title)}_${project.id}`}><img class="rounded w-100" src={project.thumbnail} alt="thumbnail" /></a>
                  </div>
                  <div class="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                      <h4 class="text-linear-4"><a href={`/projects/${createSlug(project.title)}_${project.id}`}>{project.title}</a></h4>
                      <p>{project.description.length > 125 ? project.description.slice(0, 125) + '...' : project.description}</p>
                      <ul class="mt-4 list-unstyled">
                          <li class="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
                          <li class="text-dark mb-3 border-bottom pb-3">
                              <div class="d-flex justify-content-between">
                                  <p class="text-dark mb-0 text-end">Duration</p>
                                  <p class="text-300 mb-0 text-end">{project.duration}</p>
                              </div>
                          </li>
                          <li class="text-dark mb-3 border-bottom pb-3">
                              <div class="d-flex justify-content-between">
                                  <p class="text-dark mb-0 text-end">Built With</p>
                                  <p class="text-300 mb-0 text-end">{project.built_with}</p>
                              </div>
                          </li>
                      </ul>
                      <div class="d-flex flex-wrap align-items-center gap-3 mt-7">
                            <a href={`/projects/${createSlug(project.title)}_${project.id}`} class="text-300 border-bottom border-1 px-2 pb-2 link-hover">View Details<i class="ri-arrow-right-up-line"></i></a>
                            {#if project.url !== ""}
                            <a href="{project.url}" class="text-300 border-bottom border-1 px-2 pb-2 link-hover" target="_blank">Live Demo <i class="ri-link"></i></a>
                            {/if}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/each}
  </div>
</div>