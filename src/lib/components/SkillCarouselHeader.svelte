<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (window.$ && window.$.fn.carouselTicker) {
            const leftCarousel = document.querySelector(".carouselTicker-header");
            if (leftCarousel) {
                window.$(leftCarousel).carouselTicker({
                    direction: 'prev',
                    speed: 1,
                    delay: 30,
                });
            }
        }
    });
</script>

<div class="carouselTicker carouselTicker-header position-relative z-1 mt-md-0 mt-4">
    <ul class="carouselTicker__list">
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/reactjs.png" alt="icon" />
            </a>
        </li>
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/svelte.png" alt="icon" />
            </a>
        </li>
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/nodejs.png" alt="icon" />
            </a>
        </li>
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/python.png" alt="icon" />
            </a>
        </li>
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/php.png" alt="icon" />
            </a>
        </li>
        <li class="carouselTicker__item">
            <a href={"javascript:void(0)"} class="brand-logo icon_60 icon-shape rounded-3">
                <img src="/skills/laravel.png" alt="icon" />
            </a>
        </li>
    </ul>
</div>