(function() {
    let currentLang = 'ru';
    const translatableElements = document.querySelectorAll('[data-ru][data-en]');
    const switcher = document.getElementById('langSwitcher');
    const currentFlag = document.getElementById('currentFlag');
    const langText = document.getElementById('langText');

    function setLanguage(lang) {
        currentLang = lang;
        translatableElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text !== null) {
                if (el.tagName === 'A' && el.classList.contains('btn-card')) {
                    el.textContent = text;
                } else if (el.tagName === 'A' && el.classList.contains('btn-join')) {
                    const span = el.querySelector('.btn-join-text');
                    if (span) span.textContent = text;
                } else if (el.tagName === 'H4' || el.tagName === 'H2' || el.tagName === 'H3') {
                    el.textContent = text;
                } else if (el.tagName === 'P' || el.tagName === 'SPAN') {
                    el.textContent = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        if (lang === 'ru') {
            currentFlag.src = 'https://flagcdn.com/w40/ru.png';
            currentFlag.alt = 'Russian flag';
            langText.textContent = 'English';
            document.documentElement.lang = 'ru';
        } else {
            currentFlag.src = 'https://flagcdn.com/w40/gb.png';
            currentFlag.alt = 'UK flag';
            langText.textContent = 'Русский';
            document.documentElement.lang = 'en';
        }

        try {
            localStorage.setItem('onionlegion_lang', lang);
        } catch (e) {}
    }

    switcher.addEventListener('click', function(e) {
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    });

    switcher.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            switcher.click();
        }
    });

    try {
        const savedLang = localStorage.getItem('onionlegion_lang');
        if (savedLang === 'ru' || savedLang === 'en') {
            setLanguage(savedLang);
        }
    } catch (e) {}

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.15,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.3,
                    opacity_min: 0.05,
                    sync: false
                }
            },
            size: {
                value: 2.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#ffffff',
                opacity: 0.08,
                width: 0.8
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });
})();
