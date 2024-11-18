<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (window.$ && window.$.fn.carouselTicker) {
            const leftCarousel = document.querySelector(".carouselTicker-left");
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

<div class="carouselTicker carouselTicker-left position-relative z-1">
    <ul class="carouselTicker__list m-0">
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/nodejs.png" alt="brand" />
            </a>
            <span class="tool-tip">NodeJS</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/python.png" alt="brand" />
            </a>
            <span class="tool-tip">Python</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/php.png" alt="brand" />
            </a>
            <span class="tool-tip">PHP</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/laravel.png" alt="brand" />
            </a>
            <span class="tool-tip">Laravel</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/mysql.png" alt="brand" />
            </a>
            <span class="tool-tip">MySQL</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/postgres.png" alt="brand" />
            </a>
            <span class="tool-tip">PostgreSQL</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/mongodb.png" alt="brand" />
            </a>
            <span class="tool-tip">MongoDB</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/redis.png" alt="brand" />
            </a>
            <span class="tool-tip">Redis</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/linux.png" alt="brand" />
            </a>
            <span class="tool-tip">Linux</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/docker.png" alt="brand" />
            </a>
            <span class="tool-tip">Docker</span>
        </li>
    </ul>
</div>