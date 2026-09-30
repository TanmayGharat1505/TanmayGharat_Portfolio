/* 
    ========================================================================
    INTERACTION LOGIC - TANMAY GHARAT PORTFOLIO
    Pixel-perfect Case Study Modal, Side Rail Tracking & Mobile Nav
    ========================================================================
*/

const caseStudiesData = {
    'meals-budget': {
        tag: 'ZOMATO · 2025',
        title: 'Meals under your budget',
        image: 'assets/ui_meals_budget.jpg',
        desc: 'Built a way for budget-conscious users to browse meals that are guaranteed to land within a set price point. Implemented dynamic price anchoring, bulk item bundling, and personalized restaurant discovery algorithms to maximize checkout conversion while guaranteeing meal affordability.',
        metrics: [
            'Engineered dynamic meal-under-price filter reducing discovery friction by 40%.',
            'Implemented instant client-side discount calculations factoring in platform coupons and delivery charges.',
            'Designed high-contrast, mouth-watering dish cards with rapid reorder buttons.'
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'Dynamic Pricing APIs', 'Design Systems']
    },
    'dark-mode': {
        tag: 'ZOMATO · 2024',
        title: 'Dark mode',
        image: 'assets/ui_food_dark.jpg',
        desc: 'Designed and shipped dark mode across the Zomato app, rethinking the system foundations. Crafted deep pitch-black token surfaces, refined elevation models, and balanced food photography contrast ratios for comfortable night-time browsing.',
        metrics: [
            'Architected 100+ semantic tokens ensuring consistent contrast across iOS, Android, and Web.',
            'Eliminated eye strain during evening peak order hours, boosting average session length by 18%.',
            'Preserved vibrant dish vibrancy with specialized contrast masks for food assets.'
        ],
        stack: ['Design Tokens', 'React Native', 'CSS Variables', 'Theming Architecture']
    },
    'rethinking-menu': {
        tag: 'ZOMATO · 2024',
        title: 'Rethinking the menu',
        image: 'assets/ui_mcdonalds_menu.jpg',
        desc: 'Decluttered the restaurant menu so dishes lead, while letting restaurants stand out. Redesigned category hierarchies, allergen badges, customizable combos, and quick-add trays to make choosing meals intuitive and effortless.',
        metrics: [
            'Streamlined restaurant pages with high-impact hero photography and immediate ratings visibility.',
            'Created sticky category filters for seamless vertical jumping across large menus.',
            'Boosted item customization completion rates with transparent add-on selectors.'
        ],
        stack: ['UI/UX Architecture', 'React', 'Mobile Web', 'Conversion Optimization']
    },
    'sushi-design-system': {
        tag: 'ZOMATO · 2025',
        title: 'Sushi design system',
        image: 'assets/ui_food_dark.jpg',
        desc: 'Rebuilt Zomato\'s design system, also powering theming across platforms. Created a scalable library of atomic components, motion guidelines, accessible color palettes, and typographic hierarchies used across all consumer applications.',
        metrics: [
            'Unified web and mobile development cycles, reducing engineering handoff time by 35%.',
            'Enforced strict WCAG AAA accessibility across color contrasts and focus states.',
            'Shipped responsive token architecture supporting dark mode and high-contrast accessibility.'
        ],
        stack: ['Figma Tokens', 'Design Systems', 'Component Libraries', 'React & React Native']
    },
    'kitchen-supply': {
        tag: 'HYPERPURE BY ZOMATO · 2023',
        title: 'Easier kitchen supply',
        image: 'assets/ui_groceries.jpg',
        desc: 'Redesigned browsing and bulk pricing to help restaurants stock up, boosting order value. Built specialized B2B quick-commerce flows featuring real-time wholesale inventory, tiered pricing discounts, and recurring reorder schedules for commercial kitchens.',
        metrics: [
            'Introduced tiered volume pricing badges resulting in a 24% increase in average basket size.',
            'Streamlined vegetable and pantry item categorization with instant quantity multipliers.',
            'Engineered sub-second search and filtering across thousands of wholesale SKUs.'
        ],
        stack: ['B2B Quick Commerce', 'Flutter', 'Data Modeling', 'Inventory APIs']
    },
    'astittva': {
        tag: 'ASTITTVA · 2025',
        title: 'Multilingual AI platform',
        image: 'assets/ui_astittva.jpg',
        desc: 'Architected high-throughput backend services and bilingual horoscope prediction models targeting 15+ Indian languages for Astittva. Serving as Co-Founder and CTO, I lead the core engineering architecture, cloud deployments, and AI inference pipelines.',
        metrics: [
            'Designed scalable microservices using Node.js, Express, and MongoDB.',
            'Implemented bilingual NLP tokenization pipelines for seamless English & Hindi predictions.',
            'Achieved sub-100ms API response latency for real-time horoscope generation.'
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'Python', 'AI Pipelines', 'Flutter']
    },
    'cosmicverse': {
        tag: 'FLUTTER & AI · 2024',
        title: 'COSMICVERSE comic generator',
        image: 'assets/ui_cosmic.jpg',
        desc: 'Built an innovative comic-generation mobile application that turns user-written storylines into short, personalized graphic novels complete with dynamic multi-panel layouts, speech bubbles, and character art.',
        metrics: [
            'Engineered custom canvas panel layout engine with draggable speech bubbles.',
            'Integrated Firebase real-time database for community sharing and story exports.',
            'Designed vibrant dark neon mobile UI optimized for creative expression.'
        ],
        stack: ['Flutter', 'Firebase', 'Dart', 'AI Prompt Pipelines', 'Mobile UX']
    }
};

// Open Case Study Modal
function openCaseStudyModal(studyId) {
    const data = caseStudiesData[studyId];
    if (!data) return;

    const modal = document.getElementById('case-study-modal');
    const container = document.getElementById('modal-body-container');
    if (!modal || !container) return;

    let metricsHtml = '';
    if (data.metrics && data.metrics.length) {
        metricsHtml = `
            <div style="font-family: var(--font-medium); font-size: 16px; color: #ffffff; margin: 24px 0 10px;">Key Highlights</div>
            <ul style="padding-left: 20px; color: var(--color-text-body); font-size: 15px; line-height: 1.7;">
                ${data.metrics.map(m => `<li style="margin-bottom: 6px;">${m}</li>`).join('')}
            </ul>
        `;
    }

    const pillsHtml = data.stack.map(s => `
        <span style="display: inline-block; padding: 6px 14px; background: rgba(255,255,255,0.06); border-radius: 9999px; font-size: 13px; color: var(--color-text-title); margin: 4px;">
            ${s}
        </span>
    `).join('');

    container.innerHTML = `
        <div style="font-size: 13px; color: var(--color-text-tag); text-transform: uppercase; margin-bottom: 10px;">${data.tag}</div>
        <h2 style="font-family: var(--font-heading); font-size: 34px; color: #ffffff; margin-bottom: 24px; letter-spacing: -0.2px;">${data.title}</h2>
        <div style="width: 100%; height: 360px; border-radius: 20px; overflow: hidden; margin-bottom: 24px; background: #000; border: 1px solid rgba(255,255,255,0.08);">
            <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="font-family: var(--font-medium); font-size: 16px; color: #ffffff; margin-bottom: 8px;">Overview</div>
        <p style="font-size: 15px; line-height: 1.7; color: var(--color-text-body);">${data.desc}</p>
        ${metricsHtml}
        <div style="font-family: var(--font-medium); font-size: 16px; color: #ffffff; margin: 24px 0 12px;">Tech Stack</div>
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 24px;">${pillsHtml}</div>
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; gap: 12px;">
            <a href="#contact" onclick="closeCaseStudyModal()" style="display: inline-flex; align-items: center; background: var(--color-crimson); color: #fff; padding: 10px 22px; border-radius: 9999px; font-size: 14px;">
                Get in touch →
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
    const modal = document.getElementById('case-study-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#10b981';
        setTimeout(() => {
            e.target.reset();
            btn.textContent = 'Send Message';
            btn.style.background = 'var(--color-crimson)';
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Modal Backdrop Click & ESC Key
    const modal = document.getElementById('case-study-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCaseStudyModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeCaseStudyModal();
        });
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navCapsule = document.getElementById('nav-capsule');
    if (mobileToggle && navCapsule) {
        mobileToggle.addEventListener('click', () => {
            navCapsule.classList.toggle('open');
        });
        document.querySelectorAll('.nav-link-btn').forEach(link => {
            link.addEventListener('click', () => navCapsule.classList.remove('open'));
        });
    }

    // Scroll Tracking for Floating Nav and Side Rail Dots
    const sections = document.querySelectorAll('section[id]');
    const railDots = document.querySelectorAll('.side-rail-dot');
    const navButtons = document.querySelectorAll('.nav-link-btn:not([target="_blank"])');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('href') === `#${id}`) {
                        btn.classList.add('active');
                    }
                });

                railDots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('href') === `#${id}`) {
                        dot.classList.add('active');
                    }
                });
            }
        });
    });
});
