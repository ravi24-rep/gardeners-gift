document.addEventListener('DOMContentLoaded', () => {
    // Story parts collection
    const storyTexts = [
        "I HOPE YOU REMEMBER THIS BOY WHO PENNED ALL THIS LINES FOR YEWWWWWW  💙CELENIA!!✨.",
        "Once upon a time, there was a beautiful garden. In that garden, there was a very special rose. It was the most beautiful flower, and the Gardener loved it more than anything.",
        "But one day, someone stepped on the rose and hurt it badly. Its petals were torn, and its stem bent. The rose was not dead, but deeply wounded and broken.",
        "The Gardener didn't notice right away. But when he finally saw the rose and its scars, his heart broke. With tears in his eyes, he said, 'I will bring back my dead rose to the garden!'",
        "But the Dead Rose whispered softly, 'No, it's impossible to revive a dead rose. Once it's gone, it's gone forever. You may plant new blooms, but they will never be the same, never in the same garden.'",
        "Still, the Gardener, holding onto hope, said, 'Even though it won't be the same, flowers can still flourish if the gardener tends them with care.'",
        "The Rose replied sadly, 'Even if you try to plant rose again, it will never carry the same essence. They won't carry the same color again.'",
        "'Believe in the gardener,' the Gardener urged, hopeful. 'You can't bring back the dead,' the Rose said, her voice laced with sorrow.",
        "The Gardener gently said, 'Maybe there's still a chance for something new petals to grow.' 'There's no chance. I'm gone, forever,' the Dead Rose sighed.",
        "The Gardener looked at the empty space where the rose once stood, 'Time will answer.' But the Dead Rose, with an air of finality, replied, 'Time will only confirm my absence.'",
        "The Gardener looked at the Rose with sadness and said, 'But... it feels like you don't care about — the one who's trying so hard to make this garden beautiful again.' but its okay!!",
        "The Rose replied softly, 'It's not that I'm just too broken. I can't be part of your garden anymore. I can only think about the one who stepped on me and hurt me badly.'",
        "As the Gardener continued tending to the garden, trying to fix the petals, he realized - 'The Rose sees herself as dead, and I must respect that.'",
        "Still, he whispered to the wind, 'I'm a gardener. I'm here to make flowers bloom. Even if you consider yourself as a dead rose, I can't stop being who I am.'",
        "The Dead Rose, touched by this devotion but bound by her fate, said, 'Though you respect me, your garden will bloom with other flowers. I won't be part of them. My beauty lives only in memory.'",
        "'True,' the Gardener agreed, 'but I will always remember you. Every flower I plant will carry a piece of you. You will live in the fragrance of the garden, even if unseen.'",
        "The Dead Rose said, 'Even if you try to plant me again, the petals won't be the same because the pain of mine will forever whisper beneath every bloom. I am no longer who I was..'",
        "Yet, the Gardener, holding onto hope, said, 'Maybe one day, that ache will give birth to a new kind of beauty, a tribute to what we had.'",
        "'And I will remain in your heart as a hue of memory,' whispered the Dead Rose.",
        "The Gardener smiled sadly, 'If staying away is what you want, I will respect that. But I will always think of you when I see flowers. My garden will still breathe in your memory - forever carrying your thought in every petal.'",
        "The Dead Rose whispered, 'A promise of being the only one.' The Gardener replied, 'I will carry you in every flower I plant, as like your thought.'",
        "But deep inside, both knew: 'Some fragrances never return.'",
        "Finally, the Gardener decided, 'I will leave this garden. Even though other roses may bloom, my special rose is not here anymore.'",
        "The Dead Rose watched quietly, as the Gardener walked away, knowing that none would ever bear her unique essence.",
        "A tale of a Gardener and his Dead Rose, A love that blooms eternally in memory, A garden forever touched by loss and beauty. Let it remain an Epic."
    ];

    // Get DOM elements
    const musicToggleButton = document.getElementById("music-toggle-btn");
    const storyBox = document.getElementById("story-box");
    const storyText = document.getElementById("story-text");
    const nextButton = document.getElementById("next-btn");
    const prevButton = document.getElementById("prev-btn");
    const currentPartSpan = document.getElementById("current-part");
    const totalPartsSpan = document.getElementById("total-parts");
    const birthdayMessage = document.getElementById("birthday-message");
    const container = document.querySelector(".container");
    const backgroundMusic = document.getElementById("background-music");

    // Check if elements exist before using them
    if (!storyBox || !storyText || !nextButton || !prevButton || !currentPartSpan || !totalPartsSpan || !birthdayMessage || !container || !backgroundMusic) {
        console.error("One or more required elements not found in the DOM");
        return;
    }

    // Create containers if they don't exist
    let petalsContainer = document.querySelector('.petals');
    if (!petalsContainer) {
        petalsContainer = document.createElement('div');
        petalsContainer.className = 'petals';
        document.body.appendChild(petalsContainer);
    }

    let butterfliesContainer = document.querySelector('.butterflies');
    if (!butterfliesContainer) {
        butterfliesContainer = document.createElement('div');
        butterfliesContainer.className = 'butterflies';
        document.body.appendChild(butterfliesContainer);
    }

    // Initialize variables
    let currentIndex = 0;
    let hasMusicStarted = false; // Flag to track if music has started
    totalPartsSpan.textContent = storyTexts.length;
    currentPartSpan.textContent = currentIndex + 1;

    // Set initial story text
    storyText.textContent = storyTexts[currentIndex];
    storyBox.classList.add("show");

    // Initialize background music
    function initBackgroundMusic() {
        backgroundMusic.volume = 0.3; // Set volume to 30%
    }

    // Function to play background music
    function playBackgroundMusic() {
        backgroundMusic.play().then(() => {
            console.log("Background music started playing");
            hasMusicStarted = true; // Set flag to true once music starts
        }).catch(error => {
            console.error("Error playing background music:", error);
        });
    }

    // Update button state based on current index
    function updateButtonState() {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= storyTexts.length;
        console.log("Button state updated, currentIndex:", currentIndex, "disabled:", nextButton.disabled);

        if (currentIndex >= storyTexts.length - 1) {
            nextButton.innerText = "The End";
        } else {
            nextButton.innerText = "Next Page";
        }
    }

    // Update button state initially
    updateButtonState();

    // Add required CSS
    function addRequiredStyles() {
        if (!document.querySelector('#requiredStyles')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'requiredStyles';
            styleElement.textContent = `
                @keyframes fireworkParticle {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                    60% { opacity: 1; }
                    100% { transform: translate(calc(cos(var(--angle)) * var(--distance)), calc(sin(var(--angle)) * var(--distance))) scale(1); opacity: 0; }
                }

                @keyframes pageTurn {
                    0% { transform: translateX(0); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateX(100%); opacity: 0; }
                }

                .fade {
                    opacity: 0.1;
                    transition: opacity 0.5s ease;
                }

                .show {
                    opacity: 1;
                    transition: opacity 1s ease;
                }

                .hidden {
                    opacity: 0;
                    display: none;
                }

                .magic-sparkle {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0;
                    animation: sparkleAnimation 2s ease-in-out forwards;
                    z-index: 3;
                }

                @keyframes sparkleAnimation {
                    0% { transform: scale(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }

                .petal {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    border-radius: 15px 0;
                    background-color: #4f9dfb;
                    opacity: 0.8;
                    transform: rotate(45deg);
                    animation: falling linear forwards;
                    z-index: 2;
                }

                @keyframes falling {
                    0% { top: -20px; transform: translateX(0) rotate(45deg) scale(0.8); opacity: 0.8; }
                    50% { transform: translateX(100px) rotate(90deg) scale(1); opacity: 0.9; }
                    100% { top: 100vh; transform: translateX(-100px) rotate(225deg) scale(0.7); opacity: 0.3; }
                }

                .button-container {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .button-container {
                        flex-direction: row;
                        gap: 10px;
                    }

                    #prev-btn, #next-btn {
                        padding: 10px 20px;
                        font-size: 1em;
                        min-width: 130px;
                    }
                }

                @media (max-width: 380px) {
                    .button-container {
                        flex-direction: row;
                        gap: 8px;
                    }

                    #prev-btn, #next-btn {
                        padding: 8px 15px;
                        font-size: 0.9em;
                        min-width: 110px;
                    }
                }

                .page-counter {
                    margin-top: 10px;
                    font-size: 1em;
                    color: #ff6680;
                }
            `;
            document.head.appendChild(styleElement);
        }
    }

    // Create magic sparkle effect
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('magic-sparkle');

        const size = Math.random() * 6 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;

        const hue = Math.random() * 360;
        const saturation = Math.random() * 50 + 50;
        const lightness = Math.random() * 30 + 70;
        sparkle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        sparkle.style.boxShadow = `0 0 ${size*2}px hsl(${hue}, ${saturation}%, ${lightness}%)`;

        sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }

    let sparkleInterval = setInterval(createSparkle, 400);

    for (let i = 0; i < 8; i++) {
        setTimeout(createSparkle, i * 120);
    }

    function createPageTurnEffect(direction = 'next') {
        const pageTurn = document.createElement('div');
        pageTurn.style.position = 'absolute';
        pageTurn.style.top = '0';
        pageTurn.style.left = direction === 'next' ? '0' : 'auto';
        pageTurn.style.right = direction === 'prev' ? '0' : 'auto';
        pageTurn.style.width = '100%';
        pageTurn.style.height = '100%';
        pageTurn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

        if (direction === 'next') {
            pageTurn.style.animation = 'pageTurn 1s forwards';
        } else {
            pageTurn.style.animation = 'pageTurn 1s reverse forwards';
        }

        pageTurn.style.pointerEvents = 'none';
        pageTurn.style.zIndex = '10';
        storyBox.appendChild(pageTurn);

        setTimeout(() => {
            pageTurn.remove();
        }, 1000);
    }

    function showNextStory() {
        console.log("Next button clicked, currentIndex:", currentIndex);

        // Play music on the first "Next" button click
        if (!hasMusicStarted) {
            playBackgroundMusic();
        }

        if (currentIndex < storyTexts.length - 1) {
            storyBox.classList.add("fade");
            createPageTurnEffect('next');

            setTimeout(() => {
                currentIndex++;
                storyText.textContent = storyTexts[currentIndex];
                currentPartSpan.textContent = currentIndex + 1;
                storyBox.classList.remove("fade");
                storyBox.classList.add("show");

                for (let i = 0; i < 6; i++) {
                    setTimeout(createSparkle, i * 120);
                }

                updateButtonState();
                console.log("Moved to part", currentIndex);
            }, 500);
        } else if (currentIndex === storyTexts.length - 1) {
            console.log("Attempting to show birthday message");
            storyBox.classList.add("fade");
            createPageTurnEffect('next');

            setTimeout(() => {
                console.log("Hiding story box and showing birthday message");
                storyBox.style.display = 'none';
                nextButton.classList.add('hidden');
                prevButton.classList.add('hidden');
                birthdayMessage.classList.remove("hidden");
                birthdayMessage.classList.add("show");
                createCelebrationEffect();
                currentIndex++;
                updateButtonState();
                console.log("Birthday message should be visible, currentIndex:", currentIndex);
            }, 500);
        }
    }

    function showPreviousStory() {
        if (currentIndex > 0) {
            storyBox.classList.add("fade");
            createPageTurnEffect('prev');

            setTimeout(() => {
                currentIndex--;
                storyText.textContent = storyTexts[currentIndex];
                currentPartSpan.textContent = currentIndex + 1;
                storyBox.classList.remove("fade");
                storyBox.classList.add("show");

                for (let i = 0; i < 6; i++) {
                    setTimeout(createSparkle, i * 120);
                }

                updateButtonState();
                if (birthdayMessage.classList.contains("show")) {
                    birthdayMessage.classList.remove("show");
                    birthdayMessage.classList.add("hidden");
                    storyBox.style.display = 'block';
                    nextButton.classList.remove('hidden');
                    prevButton.classList.remove('hidden');
                }
                console.log("Moved back to part", currentIndex);
            }, 500);
        }
    }

    function createCelebrationEffect() {
        console.log("Creating celebration effect");
        for (let i = 0; i < 40; i++) {
            setTimeout(createSparkle, i * 60);
        }

        birthdayMessage.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.8), 0 0 50px rgba(0, 242, 254, 0.5)';

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                createFirework();
            }, i * 800);
        }
    }

    function createFirework() {
        const fireworkContainer = document.createElement('div');
        fireworkContainer.style.position = 'absolute';
        fireworkContainer.style.left = `${Math.random() * 80 + 10}%`;
        fireworkContainer.style.top = `${Math.random() * 80 + 10}%`;
        fireworkContainer.style.zIndex = '5';
        container.appendChild(fireworkContainer);

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 4 + 2;
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;

            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
            particle.style.boxShadow = `0 0 ${size*2}px hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
            particle.style.transform = 'translate(-50%, -50%)';

            particle.style.animation = `fireworkParticle ${Math.random() * 1 + 1}s forwards`;
            particle.style.left = '0';
            particle.style.top = '0';

            particle.style.setProperty('--angle', angle);
            particle.style.setProperty('--distance', `${distance}px`);

            fireworkContainer.appendChild(particle);
        }

        setTimeout(() => {
            fireworkContainer.remove();
        }, 2000);
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 6 + 5 + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';

        const hue = Math.random() * 40 + 180;
        petal.style.background = `radial-gradient(circle at 40% 0, hsl(${hue}, 80%, 80%), hsl(${hue-10}, 90%, 50%) 70%)`;

        petalsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), 11000);
    }

    // Three.js Butterfly Animation
    class ConsoleSignature {
        constructor() {
            this.message = `created by yoichi kobayashi`;
            this.url = `http://www.tplh.net`;
            this.show();
        }
        show() {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                const args = [
                    `\n%c ${this.message} %c%c ${this.url} \n\n`,
                    'color: #fff; background: #222; padding:3px 0;',
                    'padding:3px 1px;',
                    'color: #fff; background: #47c; padding:3px 0;',
                ];
                console.log.apply(console, args);
            } else if (window.console) {
                console.log(`${this.message} ${this.url}`);
            }
        }
    }

    const debounce = (callback, duration) => {
        var timer;
        return function(event) {
            clearTimeout(timer);
            timer = setTimeout(function(){
                callback(event);
            }, duration);
        };
    };

    const SIZE = 280;

    class Butterfly {
        constructor(i, texture) {
            this.uniforms = {
                index: {
                    type: 'f',
                    value: i
                },
                time: {
                    type: 'f',
                    value: 0
                },
                size: {
                    type: 'f',
                    value: SIZE
                },
                texture: {
                    type: 't',
                    value: texture
                },
            };
            this.obj = this.createObj();
        }
        createObj() {
            const geometry = new THREE.PlaneBufferGeometry(SIZE, SIZE / 2, 24, 12);
            const mesh = new THREE.Mesh(
                geometry,
                new THREE.RawShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: `attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float index;
uniform float time;
uniform float size;

varying vec3 vPosition;
varying vec2 vUv;

void main() {
    float flapTime = radians(sin(time * 6.0 - length(position.xy) / size * 2.6 + index * 2.0) * 45.0 + 30.0);
    float hovering = cos(time * 2.0 + index * 3.0) * size / 16.0;
    vec3 updatePosition = vec3(
        cos(flapTime) * position.x,
        position.y + hovering,
        sin(flapTime) * abs(position.x) + hovering
    );

    vec4 mvPosition = modelViewMatrix * vec4(updatePosition, 1.0);

    vPosition = position;
    vUv = uv;

    gl_Position = projectionMatrix * mvPosition;
}`,
                    fragmentShader: `precision highp float;

uniform float index;
uniform float time;
uniform float size;
uniform sampler2D texture;

varying vec3 vPosition;
varying vec2 vUv;

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise3(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 convertHsvToRgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    vec4 texColor = texture2D(texture, vUv);

    float noise = snoise3(vPosition / vec3(size * 0.25) + vec3(0.0, 0.0, time));
    float hue = 0.611 + noise * 0.05;
    vec3 hsv = vec3(hue, 0.8, 0.9);
    vec3 rgb = convertHsvToRgb(hsv);

    gl_FragColor = vec4(rgb, 1.0) * texColor;
}`,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                    transparent: true
                })
            );
            mesh.rotation.set(-45 * Math.PI / 180, 0, 0);
            return mesh;
        }
        render(renderer, time) {
            this.uniforms.time.value += time;
            this.obj.position.z = (this.obj.position.z > -900) ? this.obj.position.z - 4 : 900;
        }
    }

    const resolution = {
        x: 0,
        y: 0
    };
    const canvas = document.getElementById('canvas-webgl');
    const renderer = new THREE.WebGLRenderer({
        antialias: false,
        canvas: canvas,
        alpha: true
    });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 10000);
    const clock = new THREE.Clock();
    const loader = new THREE.TextureLoader();

    const CAMERA_SIZE_X = 640;
    const CAMERA_SIZE_Y = 480;

    const BUTTERFLY_NUM = 7;
    const butterflies = [];

    const resizeCamera = () => {
        const x = Math.min((resolution.x / resolution.y) / (CAMERA_SIZE_X / CAMERA_SIZE_Y), 1.0) * CAMERA_SIZE_X;
        const y = Math.min((resolution.y / resolution.x) / (CAMERA_SIZE_Y / CAMERA_SIZE_X), 1.0) * CAMERA_SIZE_Y;
        camera.left   = x * -0.5;
        camera.right  = x *  0.5;
        camera.top    = y *  0.5;
        camera.bottom = y * -0.5;
        camera.updateProjectionMatrix();
    };

    const resizeWindow = () => {
        resolution.x = window.innerWidth;
        resolution.y = window.innerHeight;
        canvas.width = resolution.x;
        canvas.height = resolution.y;
        resizeCamera();
        renderer.setSize(resolution.x, resolution.y);
    };

    const renderThreeJS = () => {
        const time = clock.getDelta();
        for (var i = 0; i < butterflies.length; i++) {
            butterflies[i].render(renderer, time);
        }
        renderer.render(scene, camera);
    };

    const renderLoop = () => {
        renderThreeJS();
        requestAnimationFrame(renderLoop);
    };

    const on = () => {
        window.addEventListener('resize', debounce(resizeWindow), 1000);
    };

    const initThreeJS = () => {
        resizeWindow();
        on();

        renderer.setClearColor(0x000000, 0);
        camera.position.set(250, 500, 1000);
        camera.lookAt(new THREE.Vector3());

        loader.crossOrigin = 'anonymous';
        loader.load('https://ykob.github.io/sketch-threejs/img/sketch/butterfly/tex.png', (texture) => {
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;

            for (var i = 0; i < BUTTERFLY_NUM; i++) {
                butterflies[i] = new Butterfly(i, texture);
                butterflies[i].obj.position.set(((i + 1) % 3 - 1) * i * 50, 0, 1800 / BUTTERFLY_NUM * i);
                scene.add(butterflies[i].obj);
            }
            renderLoop();
        });
    };

    let petalFrequency = 300;

    if (window.innerWidth <= 768) {
        petalFrequency = 500;
    }

    if (window.innerWidth <= 380) {
        petalFrequency = 800;
    }

    let lastPetalTime = 0;

    function animateElements(timestamp) {
        if (!lastPetalTime || timestamp - lastPetalTime > petalFrequency) {
            createPetal();
            lastPetalTime = timestamp;
        }

        requestAnimationFrame(animateElements);
    }

    console.log("Setting up button click listeners");

    nextButton.addEventListener("click", function(e) {
        console.log("Next button clicked!");
        showNextStory();
        e.preventDefault();
    });

    prevButton.addEventListener("click", function(e) {
        console.log("Previous button clicked!");
        showPreviousStory();
        e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') && !nextButton.disabled) {
            // Play music on first interaction if not already playing
            if (!hasMusicStarted) {
                playBackgroundMusic();
            }
            showNextStory();
        } else if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            showPreviousStory();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    storyBox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        // Play music on first interaction if not already playing
        if (!hasMusicStarted) {
            playBackgroundMusic();
        }
    });

    storyBox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX < touchStartX - 50 && !nextButton.disabled) {
            showNextStory();
        } else if (touchEndX > touchStartX + 50 && !prevButton.disabled) {
            showPreviousStory();
        }

        e.preventDefault();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 380) {
            petalFrequency = 800;
        } else if (window.innerWidth <= 768) {
            petalFrequency = 500;
        } else {
            petalFrequency = 300;
        }
    });

    // Initialize everything
    requestAnimationFrame(animateElements);
    addRequiredStyles();
    initThreeJS();
    initBackgroundMusic();
    new ConsoleSignature();
});
