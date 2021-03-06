const HexLoader = ()=>{
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
    </defs>
</svg>
<div class="blob blob-0"></div>
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
<div class="blob blob-3"></div>
<div class="blob blob-4"></div>
<div class="blob blob-5"></div>`;
}

export default HexLoader;