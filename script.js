// Product Data
const products = [
    {
        id: 1,
        name: "Red Roses Bouquet",
        description: "Classic red roses, perfect for any occasion",
        price: 150,
        category: "Roses",
        tags: ["romantic", "anniversary"],
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500"
    },
    {
        id: 2,
        name: "Sunflower Delight",
        description: "Bright sunflowers to light up your day",
        price: 120,
        category: "Sunflowers",
        tags: ["cheerful", "birthday"],
        image: "https://images.unsplash.com/photo-1597848212624-e530265c9a74?w=500"
    },
    {
        id: 3,
        name: "Tulip Collection",
        description: "Elegant tulips in vibrant colors",
        price: 135,
        category: "Tulips",
        tags: ["spring", "thank you"],
        image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500"
    },
    {
        id: 4,
        name: "Orchid Elegance",
        description: "Exotic orchids for special moments",
        price: 200,
        category: "Orchids",
        tags: ["luxury", "gifting"],
        image: "https://images.unsplash.com/photo-1558519225-f630c469be5c?w=500"
    },
    {
        id: 5,
        name: "Mixed Bouquet",
        description: "Beautiful mix of seasonal flowers",
        price: 160,
        category: "Mixed",
        tags: ["seasonal", "versatile"],
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500"
    },
    {
        id: 6,
        name: "Lily Paradise",
        description: "Fresh white lilies for purity and elegance",
        price: 145,
        category: "Lilies",
        tags: ["pure", "elegant"],
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
    }
];

const seasonalDeals = [
    {
        id: 'winter-romance',
        title: 'Winter Romance',
        description: 'Snowy whites with blush roses and eucalyptus.',
        discount: 15,
        price: 199,
        code: 'WINTER15',
        validThrough: 'Jan 31'
    },
    {
        id: 'lunar-blooms',
        title: 'Lunar New Year Blooms',
        description: 'Lucky reds and gold accents for celebration.',
        discount: 18,
        price: 220,
        code: 'LUNAR18',
        validThrough: 'Feb 15'
    },
    {
        id: 'valentine-lux',
        title: 'Valentine Luxe Box',
        description: 'Signature roses with artisan chocolates.',
        discount: 20,
        price: 260,
        code: 'LOVE20',
        validThrough: 'Feb 14'
    },
    {
        id: 'spring-awakening',
        title: 'Spring Awakening',
        description: 'Tulips, peonies, and hyacinth in pastel palette.',
        discount: 12,
        price: 185,
        code: 'SPRING12',
        validThrough: 'Mar 30'
    }
];

let cart = [];

const filters = {
    search: '',
    category: 'all',
    sort: 'featured'
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    renderOffers();
    setupProductTools();
    setupScrollAnimations();
    setupSmoothScroll();
    setupParallaxEffect();
    setupResponsiveElements();
});

// Load products with animation
function loadProducts() {
    renderProducts(products);
}

function renderOffers() {
    const container = document.getElementById('offers-grid');
    if (!container) return;

    container.innerHTML = seasonalDeals.map(deal => `
        <div class="offer-card animate-on-scroll">
            <div class="offer-chip">Seasonal</div>
            <div class="offer-badge">${deal.discount}% OFF</div>
            <div class="offer-body">
                <h3>${deal.title}</h3>
                <p>${deal.description}</p>
                <div class="offer-meta">
                    <span class="offer-price">AED ${deal.price}</span>
                    <span class="offer-code">Code: ${deal.code}</span>
                </div>
                <div class="offer-footer">
                    <span class="offer-valid">Valid until ${deal.validThrough}</span>
                    <div class="offer-actions">
                        <button class="copy-code" onclick="copyPromo('${deal.code}')">Copy code</button>
                        <button class="offer-cta" onclick="scrollToProducts()">Shop this</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Copy promo code helper
function copyPromo(code) {
    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    } else {
        navigator.clipboard.writeText(code).catch(() => {});
    }
    showNotification(`Promo code ${code} copied!`);
}

function renderProducts(list) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    list.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-badge">${product.category}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">AED ${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Add to cart with animation
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
    updateCartModal();
    
    // Trigger cart bounce animation
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'cartBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }, 10);
    
    // Show notification
    showNotification('Added to cart!');
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        updateCartModal();
    }
}

// Render cart modal content
function updateCartModal() {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;

    if (cart.length === 0) {
        modal.innerHTML = `<div class="cart-empty">Your cart is empty.</div>`;
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    modal.innerHTML = `
        <div class="cart-header">
            <h3>My Cart</h3>
            <span class="cart-total">AED ${total.toFixed(2)}</span>
        </div>
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div>
                        <p class="cart-item-name">${item.name}</p>
                        <p class="cart-item-meta">${item.category} • AED ${item.price}</p>
                        <div class="cart-qty">
                            <button onclick="changeQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="changeQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <p class="cart-item-line">AED ${(item.price * item.qty).toFixed(2)}</p>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-footer">
            <button class="checkout-btn">Checkout</button>
        </div>
    `;
}

// Change quantity helper
function changeQty(productId, delta) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== productId);
    }
    updateCartCount();
    updateCartModal();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll setup
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff7bb7, #ff9ad5);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}


// Setup parallax effect
function setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, { passive: true });
}

// Setup responsive elements
function setupResponsiveElements() {
    const heroContent = document.querySelector('.hero-content');
    
    // Add parallax attribute to hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.setAttribute('data-parallax', '0.5');
    }
    
    // Adjust scroll indicator on scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroHeight = window.innerHeight;
            
            if (scrolled > heroHeight * 0.3) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.9';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }, { passive: true });
    }
}

// Build product filters/sorting toolbar
function setupProductTools() {
    const productsSection = document.querySelector('.products');
    const grid = document.getElementById('product-grid');
    if (!productsSection || !grid) return;

    const tools = document.createElement('div');
    tools.className = 'product-tools';
    tools.innerHTML = `
        <input id="search-input" type="text" placeholder="Search flowers..." aria-label="Search products">
        <select id="category-select" aria-label="Filter by category">
            <option value="all">All categories</option>
            ${[...new Set(products.map(p => p.category))].map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
        <select id="sort-select" aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
        </select>
    `;

    productsSection.insertBefore(tools, grid);

    document.getElementById('search-input').addEventListener('input', (e) => {
        filters.search = e.target.value.toLowerCase();
        applyFilters();
    });

    document.getElementById('category-select').addEventListener('change', (e) => {
        filters.category = e.target.value;
        applyFilters();
    });

    document.getElementById('sort-select').addEventListener('change', (e) => {
        filters.sort = e.target.value;
        applyFilters();
    });
}

// Apply search/filter/sort
function applyFilters() {
    let filtered = [...products];

    if (filters.search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(filters.search) ||
            p.description.toLowerCase().includes(filters.search) ||
            (p.tags && p.tags.some(tag => tag.toLowerCase().includes(filters.search)))
        );
    }

    if (filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === filters.category);
    }

    switch (filters.sort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // featured = original order
            filtered = products.filter(p => filtered.includes(p));
    }

    renderProducts(filtered);
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    form.reset();
}

// Newsletter Form Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate newsletter subscription
    alert(`Thank you for subscribing with ${email}! Check your inbox for exclusive offers.`);
    form.reset();
}

// Scroll animations for new sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .testimonial-card, .about-feature-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});
