// Product Data
const products = [
    {
        id: 1,
        name: "Red Roses Bouquet",
        description: "Classic red roses, perfect for any occasion",
        price: 150,
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500"
    },
    {
        id: 2,
        name: "Sunflower Delight",
        description: "Bright sunflowers to light up your day",
        price: 120,
        image: "https://images.unsplash.com/photo-1597848212624-e530265c9a74?w=500"
    },
    {
        id: 3,
        name: "Tulip Collection",
        description: "Elegant tulips in vibrant colors",
        price: 135,
        image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500"
    },
    {
        id: 4,
        name: "Orchid Elegance",
        description: "Exotic orchids for special moments",
        price: 200,
        image: "https://images.unsplash.com/photo-1558519225-f630c469be5c?w=500"
    },
    {
        id: 5,
        name: "Mixed Bouquet",
        description: "Beautiful mix of seasonal flowers",
        price: 160,
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500"
    },
    {
        id: 6,
        name: "Lily Paradise",
        description: "Fresh white lilies for purity and elegance",
        price: 145,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
    }
];

let cart = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupScrollAnimations();
    setupSmoothScroll();
});

// Load products with animation
function loadProducts() {
    const grid = document.getElementById('product-grid');
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
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
    cart.push(product);
    updateCartCount();
    
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
    document.getElementById('cart-count').textContent = cart.length;
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
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
        background: linear-gradient(135deg, #667eea, #764ba2);
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
`;
document.head.appendChild(style);
