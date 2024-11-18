<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (window.$ && window.$.fn.carouselTicker) {
            const leftCarousel = document.querySelector(".carouselTicker-right");
            if (leftCarousel) {
                window.$(leftCarousel).carouselTicker({
                    direction: 'next',
                    speed: 1,
                    delay: 30,
                });
            }
        }
    });
</script>

<div class="carouselTicker carouselTicker-right position-relative z-1">
    <ul class="carouselTicker__list m-0">
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/reactjs.png" alt="brand" />
            </a>
            <span class="tool-tip">React</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/svelte.png" alt="brand" />
            </a>
            <span class="tool-tip">Svelte</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/firebase.png" alt="brand" />
            </a>
            <span class="tool-tip">firebase</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/tailwindcss.png" alt="brand" />
            </a>
            <span class="tool-tip">Tailwind CSS</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/bootstrap.png" alt="brand" />
            </a>
            <span class="tool-tip">Bootstrap</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/materializecss.png" alt="brand" />
            </a>
            <span class="tool-tip">Materialize CSS</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/javascript.png" alt="brand" />
            </a>
            <span class="tool-tip">JavaScript</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/websocket.png" alt="brand" />
            </a>
            <span class="tool-tip">WebSockets</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/git.png" alt="brand" />
            </a>
            <span class="tool-tip">Git</span>
        </li>
        <li class="carouselTicker__item mt-6">
            <a href={"javascript:void(0)"} class="brand-logo icon_80 icon-shape rounded-3">
                <img src="/skills/figma.png" alt="brand" />
            </a>
            <span class="tool-tip">figma</span>
        </li>
    </ul>
</div>