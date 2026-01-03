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

let cart = [];

const filters = {
    search: '',
    category: 'all',
    sort: 'featured'
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
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

// Add fadeOut animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .product-tools {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .product-tools input,
    .product-tools select {
        padding: 0.75rem 1rem;
        border-radius: 14px;
        border: 1px solid rgba(255, 123, 183, 0.35);
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        min-width: 180px;
        font-size: 0.95rem;
    }

    .product-tools input:focus,
    .product-tools select:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 123, 183, 0.25);
    }

    .product-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        background: linear-gradient(135deg, #ff7bb7, #ff9ad5);
        color: white;
        padding: 0.35rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        box-shadow: 0 10px 25px rgba(255, 123, 183, 0.2);
        z-index: 3;
    }

    .cart-empty {
        padding: 2rem;
        text-align: center;
        color: #555;
    }

    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        position: sticky;
        top: 0;
        background: white;
        z-index: 2;
    }

    .cart-items {
        padding: 1rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(255, 123, 183, 0.15);
        border-radius: 16px;
        padding: 1rem;
        box-shadow: 0 8px 24px rgba(0,0,0,0.05);
    }

    .cart-item-name { font-weight: 700; margin-bottom: 0.2rem; }
    .cart-item-meta { color: #666; font-size: 0.9rem; margin-bottom: 0.4rem; }

    .cart-qty { display: flex; align-items: center; gap: 0.5rem; }
    .cart-qty button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(255, 123, 183, 0.4);
        background: white;
        cursor: pointer;
    }

    .cart-item-actions { text-align: right; display: flex; flex-direction: column; gap: 0.4rem; }
    .cart-item-line { font-weight: 700; color: #222; }
    .remove-btn {
        background: none;
        border: none;
        color: #ff4f9b;
        cursor: pointer;
    }

    .cart-footer {
        padding: 1.25rem;
        border-top: 1px solid rgba(0,0,0,0.05);
        position: sticky;
        bottom: 0;
        background: white;
    }

    .checkout-btn {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 14px;
        background: linear-gradient(135deg, #ff7bb7, #ff9ad5);
        color: white;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 12px 30px rgba(255, 123, 183, 0.3);
    }
`;
document.head.appendChild(style);

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
