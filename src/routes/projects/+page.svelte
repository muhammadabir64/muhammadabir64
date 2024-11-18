<script>
import { onMount } from "svelte";
import { activeSection } from "../../stores";

let projects = [];

function createSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

onMount(async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      projects = data.showcases;
    } catch (error) {
      console.error("Error loading data:", error);
    }
    activeSection.set("projects");
});
</script>

<svelte:head>
    <title>My Projects</title>
</svelte:head>

<section class="section-work pt-120 pb-150">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-lg-auto">
                <div class="text-center">
                    <h3 class="text-dark ds-3 mt-3 mb-4">Explore <span class="text-300">My Latest Work </span> and <span class="text-300">the Craft</span> Behind</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="card-scroll mt-8">
                <div class="cards">
                    {#each projects as project}
                    <div class="card-custom" data-index="0">
                        <div class="card__inner bg-6 p-lg-6 p-md-4 p-3">
                            <div class="card__image-container zoom-img position-relative">
                                <img src={project.thumbnail} class="card__image" alt="thumbnail" />
                                <a href={`/projects/${createSlug(project.title)}_${project.id}`} class="card-image-overlay position-absolute start-0 end-0 w-100 h-100" aria-label="btn"></a>
                            </div>
                            <div class="card__content px-md-4 px-3">
                                <div class="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                    <a href={`/projects/${createSlug(project.title)}_${project.id}`} class="card_title_link">
                                        <h3 class="fw-semibold">{project.title}</h3>
                                    </a>
                                    <a href={`/projects/${createSlug(project.title)}_${project.id}`} class="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle" aria-label="btn">
                                        <i class="ri-arrow-right-up-line"></i>
                                    </a>
                                </div>
                                <p class="text-300 mb-lg-auto mb-md-4 mb-3">{project.description.length > 400 ? project.description.slice(0, 400) + '...' : project.description}</p>
                                <div class="d-md-flex content">
                                    <p class="mb-0 fs-7 text-dark text-uppercase w-40">Duration</p>
                                    <p class="mb-0 card__description text-300 fs-6 mb-0">{project.duration}</p>
                                </div>
                                <div class="d-md-flex content">
                                    <p class="mb-0 fs-7 text-dark text-uppercase w-40">Built With</p>
                                    <p class="mb-0 card__description text-300 fs-6 mb-0">{project.built_with}</p>
                                </div>
                                <div class="d-md-flex content">
                                    <a href={`/projects/${createSlug(project.title)}_${project.id}`} class="text-300 px-2 link-hover">View Details<i class="ri-arrow-right-up-line"></i></a>
                                    {#if project.url !== ""}
                                    <a href="{project.url}" class="text-300 px-2 link-hover" target="_blank">Live Demo <i class="ri-link"></i></a>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
a.link-hover:hover{
  color: #62a92b !important;
  transition: all 0.2s ease;
}
</style>