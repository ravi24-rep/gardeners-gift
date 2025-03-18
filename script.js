document.addEventListener('DOMContentLoaded', () => {
    // Story parts collection
    const storyTexts = [
        "I HOPE YOU REMEMBER THIS BOY WHO PENNED ALL THIS LINES          FOR YEWWWWWW  💙CELENIA!!✨.",
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
    const storyBox = document.getElementById("story-box");
    const storyText = document.getElementById("story-text");
    const nextButton = document.getElementById("next-btn");
    const prevButton = document.getElementById("prev-btn");
    const currentPartSpan = document.getElementById("current-part");
    const totalPartsSpan = document.getElementById("total-parts");
    const birthdayMessage = document.getElementById("birthday-message");
    const container = document.querySelector(".container");
    
    // Check if elements exist before using them
    if (!storyBox || !storyText || !nextButton || !prevButton || !currentPartSpan || !totalPartsSpan || !birthdayMessage || !container) {
        console.error("One or more required elements not found in the DOM");
        return;
    }
    
    // Create containers if they don't exist
    let petalsContainer = document.querySelector('.petals');
    if (!petalsContainer) {
        petalsContainer = document.createElement('div');
        petalsContainer.className = 'petals';
        container.appendChild(petalsContainer);
    }
    
    let butterfliesContainer = document.querySelector('.butterflies');
    if (!butterfliesContainer) {
        butterfliesContainer = document.createElement('div');
        butterfliesContainer.className = 'butterflies';
        container.appendChild(butterfliesContainer);
    }
    
    // Initialize variables
    let currentIndex = 0;
    totalPartsSpan.textContent = storyTexts.length;
    currentPartSpan.textContent = currentIndex + 1;
    
    // Set initial story text
    storyText.textContent = storyTexts[currentIndex];
    storyBox.classList.add("show");

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
                
                .butterfly-wing {
                    animation: flap 0.3s infinite alternate;
                }
                
                @keyframes flap {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(70deg); }
                }
                
                .left-wing {
                    transform-origin: right center;
                }
                
                .right-wing {
                    transform-origin: left center;
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
                
                #prev-btn, #next-btn {
                    margin-top: 20px;
                    padding: 12px 30px;
                    font-size: 1.1em;
                    background: linear-gradient(to right, #00f2fe, #4facfe);
                    color: #fff;
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
                    transition: all 0.3s ease, box-shadow 0.5s ease;
                    font-family: 'Cinzel', serif;
                    letter-spacing: 1px;
                    width: auto;
                    min-width: 160px;
                    position: relative;
                    overflow: hidden;
                }
                
                #prev-btn::before, #next-btn::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
                    transform: rotate(45deg);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                #prev-btn:hover, #next-btn:hover {
                    box-shadow: 0 0 30px rgba(79, 172, 254, 1), 0 0 20px rgba(0, 242, 254, 0.5);
                    transform: scale(1.05);
                }
                
                #prev-btn:hover::before, #next-btn:hover::before {
                    opacity: 1;
                    animation: shine 1.5s forwards;
                }
                
                #prev-btn:active, #next-btn:active {
                    transform: scale(0.98);
                }
                
                #prev-btn:disabled, #next-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
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
        
        const hue = Math.random() * 60 + 180;
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
        console.log("Next button clicked, currentIndex:", currentIndex); // Debug
        
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
                console.log("Moved to part", currentIndex); // Debug
            }, 500);
        } else if (currentIndex === storyTexts.length - 1) {
            console.log("Attempting to show birthday message"); // Debug
            storyBox.classList.add("fade");
            createPageTurnEffect('next');
            
            setTimeout(() => {
                console.log("Hiding story box and showing birthday message"); // Debug
                storyBox.style.display = 'none'; // Hide story box
                nextButton.classList.add('hidden');
                birthdayMessage.classList.remove("hidden");
                birthdayMessage.classList.add("show");
                createCelebrationEffect();
                currentIndex++; // Move past the last story part
                updateButtonState();
                console.log("Birthday message should be visible, currentIndex:", currentIndex); // Debug
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
                    storyBox.style.display = 'block'; // Show story box again
                }
                console.log("Moved back to part", currentIndex); // Debug
            }, 500);
        }
    }
    
    function createCelebrationEffect() {
        console.log("Creating celebration effect"); // Debug
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

    function createButterfly() {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        butterfly.style.left = Math.random() * 20 - 10 + 'vw';
        butterfly.style.top = Math.random() * 80 + 10 + 'vh';
        butterfly.style.position = 'absolute';
        butterfly.style.zIndex = '4';
        
        const body = document.createElement('div');
        body.className = 'butterfly-body';
        body.style.width = '6px';
        body.style.height = '15px';
        body.style.backgroundColor = '#000';
        body.style.position = 'absolute';
        body.style.left = '50%';
        body.style.top = '50%';
        body.style.transform = 'translate(-50%, -50%)';
        body.style.borderRadius = '50% 50% 0 0';
        butterfly.appendChild(body);

        const leftWing = document.createElement('div');
        leftWing.className = 'butterfly-wing left-wing';
        leftWing.style.width = '15px';
        leftWing.style.height = '20px';
        leftWing.style.position = 'absolute';
        leftWing.style.right = '50%';
        leftWing.style.top = '50%';
        leftWing.style.transform = 'translateY(-50%)';
        leftWing.style.borderRadius = '50% 0 50% 50%';
        butterfly.appendChild(leftWing);

        const rightWing = document.createElement('div');
        rightWing.className = 'butterfly-wing right-wing';
        rightWing.style.width = '15px';
        rightWing.style.height = '20px';
        rightWing.style.position = 'absolute';
        rightWing.style.left = '50%';
        rightWing.style.top = '50%';
        rightWing.style.transform = 'translateY(-50%)';
        rightWing.style.borderRadius = '0 50% 50% 50%';
        butterfly.appendChild(rightWing);

        const size = Math.random() * 0.5 + 0.7;
        butterfly.style.transform = `scale(${size})`;
        
        const wingHue = Math.random() * 40 + 180;
        const saturation = Math.random() * 30 + 70;
        const lightness = Math.random() * 20 + 60;
        
        leftWing.style.background = `linear-gradient(135deg, hsl(${wingHue}, ${saturation}%, ${lightness+10}%), hsl(${wingHue-10}, ${saturation}%, ${lightness-10}%))`;
        rightWing.style.background = `linear-gradient(135deg, hsl(${wingHue}, ${saturation}%, ${lightness+10}%), hsl(${wingHue-10}, ${saturation}%, ${lightness-10}%))`;
        
        const flapSpeed = (Math.random() * 0.1 + 0.25) + 's';
        leftWing.style.animationDuration = flapSpeed;
        rightWing.style.animationDuration = flapSpeed;

        const keyframeId = `butterfly${Math.floor(Math.random() * 10000)}`;
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${keyframeId} {
                0% { transform: translate(0, 0) rotate(0deg) scale(${size}); opacity: 0; }
                10% { transform: translate(10vw, ${Math.random() * 10 - 5}vh) rotate(${Math.random() * 20 - 10}deg) scale(${size}); opacity: 1; }
                30% { transform: translate(30vw, ${Math.random() * 10 - 5}vh) rotate(${Math.random() * 20 - 10}deg) scale(${size}); }
                50% { transform: translate(50vw, ${Math.random() * 10 - 5}vh) rotate(${Math.random() * 20 - 10}deg) scale(${size}); }
                70% { transform: translate(70vw, ${Math.random() * 10 - 5}vh) rotate(${Math.random() * 20 - 10}deg) scale(${size}); }
                90% { transform: translate(90vw, ${Math.random() * 10 - 5}vh) rotate(${Math.random() * 20 - 10}deg) scale(${size}); opacity: 1; }
                100% { transform: translate(110vw, ${Math.random() * 10 - 5}vh) rotate(0deg) scale(${size}); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        const duration = Math.random() * 10 + 15;
        butterfly.style.animation = `${keyframeId} ${duration}s linear forwards`;

        butterfliesContainer.appendChild(butterfly);
        
        setTimeout(() => {
            butterfly.remove();
            style.remove();
        }, duration * 1000 + 1000);
    }

    let petalFrequency = 300;
    let butterflyFrequency = 2000;
    
    if (window.innerWidth <= 768) {
        petalFrequency = 500;
        butterflyFrequency = 3000;
    }
    
    if (window.innerWidth <= 380) {
        petalFrequency = 800;
        butterflyFrequency = 4000;
    }
    
    let lastPetalTime = 0;
    let lastButterflyTime = 0;
    
    function animateElements(timestamp) {
        if (!lastPetalTime || timestamp - lastPetalTime > petalFrequency) {
            createPetal();
            lastPetalTime = timestamp;
        }
        
        if (!lastButterflyTime || timestamp - lastButterflyTime > butterflyFrequency) {
            createButterfly();
            lastButterflyTime = timestamp;
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
            showNextStory();
        } else if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            showPreviousStory();
        }
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    storyBox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
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
            butterflyFrequency = 4000;
        } else if (window.innerWidth <= 768) {
            petalFrequency = 500;
            butterflyFrequency = 3000;
        } else {
            petalFrequency = 300;
            butterflyFrequency = 2000;
        }
    });
    
    requestAnimationFrame(animateElements);
    addRequiredStyles();
});
