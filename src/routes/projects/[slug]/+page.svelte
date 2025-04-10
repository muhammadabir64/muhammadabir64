<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { activeSection } from "../../../stores";

  let projectId = parseInt($page.params.slug.split("_").pop());
  let project = null;
  let images = [];
  let selectedThumbnail = "";

  onMount(async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();

      if (isNaN(projectId)) {
        goto("/projects");
        return;
      }

      project = data.showcases.find(p => p.id === projectId);

      if (!project) {
        goto("/projects");
        return;
      }
      selectedThumbnail = project.thumbnail;
      images = [selectedThumbnail, ...(project.preview_img || [])];
    } catch (error) {
      console.error("Error loading project data:", error);
      goto("/projects");
    }
    activeSection.set("projects");
  });
  function updateThumbnail(image) {
    selectedThumbnail = image;
  }
</script>
<svelte:head>
  <title>My Projects - {project ? project.title : "Loading..."}</title>
</svelte:head>
{#if project}
<section class="section-work-single section-padding pb-8">
    <div class="container">
        <div class="row">
            <div class="col-12 mx-lg-auto mb-lg-0">
                <div class="text-center">
                    <a href="/projects" class="btn btn-dark"><i class="ri-arrow-left-line"></i> Go back</a>
                    <h3 class="ds-3 mt-3 mb-4 text-dark">{project.title}</h3>
                </div>
            </div>
            <div class="col-12 text-center">
                <img src={selectedThumbnail} class="img-fluid rounded thumbnail_img" alt="thumbnail" />
                <div class="mt-3">
                    {#each images as image}
                    <a 
                        href={"javascript:void(0)"}
                        class="p-0 border-0 bg-transparent"
                        on:click={() => updateThumbnail(image)}
                        on:keydown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') { 
                            updateThumbnail(image);
                        }
                        }}
                        aria-label="Click to view image"
                    >
                        <img src={image} class="img-fluid rounded snapshot_img" alt="snapshot" />
                    </a>
                    {/each}
                </div>
            </div>
            <div class="col-lg-8 mx-lg-auto mt-8">
                <h5 class="fs-5 fw-medium text-linear-4">About this project...</h5>
                <p class="text-300 mb-5">{project.description}</p>
                <div class="d-md-flex mb-3">
                    <p class="mb-0 fs-7 text-dark text-uppercase w-40">Duration</p>
                    <p class="mb-0 card__description text-dark text-300 fs-6 mb-0">{project.duration}</p>
                </div>
                <div class="d-md-flex mb-3">
                    <p class="mb-0 fs-7 text-dark text-uppercase w-40">Built With</p>
                    <p class="mb-0 card__description text-dark text-300 fs-6 mb-0">{project.built_with}</p>
                </div>
                {#if project.url !== ""}
                <div class="d-md-flex">
                  <p class="mb-0 fs-7 text-dark text-uppercase w-40">Live Demo/Url</p>
                  <p class="mb-0 card__description text-dark text-300 fs-6 mb-0"><a href={project.url} target="_blank">{project.url}</a></p>
                </div>
                {/if}
            </div>
        </div>
    </div>
</section>
{:else}
  <p>Loading project data...</p>
{/if}

<style>
img.thumbnail_img{
    width: 1000px;
}
img.snapshot_img{
    width: 125px;
    margin: 8px 8px 0px 8px;
}
</style>
