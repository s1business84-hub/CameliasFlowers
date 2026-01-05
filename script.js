// Product Data
const products = [
    {
        id: 1,
        name: "Red Roses Bouquet",
        description: "Classic red roses, perfect for any occasion",
        longDescription: "Our signature red roses are handpicked from premium farms and arranged by expert florists. Each bouquet contains 12-24 long-stemmed roses, perfectly complemented with baby's breath and lush greenery. The deep crimson petals symbolize love, respect, and admiration, making them ideal for romantic gestures, anniversaries, or expressing heartfelt emotions.",
        price: 150,
        category: "Roses",
        tags: ["romantic", "anniversary"],
        image: "assets/images/products/roses.jpg",
        fallbackImage: "assets/images/products/roses.jpg",
        careInstructions: "Trim stems at 45° angle, change water daily, keep away from direct sunlight. Roses will last 5-7 days with proper care.",
        features: ["12-24 Premium Long-Stemmed Roses", "Hand-Tied by Expert Florists", "Includes Baby's Breath & Greenery", "Same-Day Delivery Available", "Perfect for Romance & Celebrations"]
    },
    {
        id: 2,
        name: "Sunflower Delight",
        description: "Bright sunflowers to light up your day",
        longDescription: "Radiate joy with our stunning sunflower arrangements! These cheerful blooms are sourced from the finest growers and arranged to capture the warmth of summer sunshine year-round. Each sunflower is carefully selected for its vibrant yellow petals and strong stems, creating a bouquet that brings instant happiness to any space.",
        price: 120,
        category: "Sunflowers",
        tags: ["cheerful", "birthday"],
        image: "assets/images/products/sunflower.jpg",
        fallbackImage: "assets/images/products/sunflower.jpg",
        careInstructions: "Cut stems underwater, use flower food, change water every 2-3 days. Sunflowers last 7-10 days.",
        features: ["8-12 Premium Sunflowers", "Mixed with Complementary Fillers", "Bright & Cheerful Design", "Delivered Fresh Daily", "Ideal for Birthdays & Get Well Soon"]
    },
    {
        id: 3,
        name: "Tulip Collection",
        description: "Elegant tulips in vibrant colors",
        longDescription: "Experience the timeless elegance of Dutch tulips with our carefully curated collection. Available in stunning color combinations - from classic reds and yellows to romantic pinks and whites - each tulip is imported fresh and arranged to showcase their graceful curves and vibrant hues. Perfect for adding a touch of spring sophistication to any occasion.",
        price: 135,
        category: "Tulips",
        tags: ["spring", "thank you"],
        image: "assets/images/products/tulips.jpg",
        fallbackImage: "assets/images/products/tulips.jpg",
        careInstructions: "Keep water level low (2-3 inches), re-cut stems every few days, tulips continue to grow in vase.",
        features: ["15-20 Premium Dutch Tulips", "Choice of Color Combinations", "Elegant Hand-Wrapped Presentation", "Fresh Import Guarantee", "Perfect for Thank You & Appreciation"]
    },
    {
        id: 4,
        name: "Orchid Elegance",
        description: "Exotic orchids for special moments",
        longDescription: "Elevate any space with our exquisite orchid arrangements. These exotic blooms represent luxury, beauty, and strength. Our Phalaenopsis orchids are carefully selected for their pristine petals and long-lasting quality. Available in elegant whites, passionate purples, and vibrant pinks, they're perfect for corporate gifts, upscale events, or making a sophisticated statement.",
        price: 200,
        category: "Orchids",
        tags: ["luxury", "gifting"],
        image: "assets/images/products/orchids.jpg",
        fallbackImage: "assets/images/products/orchids.jpg",
        careInstructions: "Water once weekly, provide indirect sunlight, mist occasionally. Orchids can bloom for 2-3 months.",
        features: ["Premium Phalaenopsis Orchids", "Long-Lasting Blooms (2-3 Months)", "Elegant Ceramic Pot Included", "Multiple Color Options", "Ideal for Luxury Gifts & Corporate Events"]
    },
    {
        id: 5,
        name: "Mixed Bouquet",
        description: "Beautiful mix of seasonal flowers",
        longDescription: "Let our expert florists create magic with our signature mixed bouquet! This stunning arrangement combines the best seasonal blooms in harmonious colors and textures. Each bouquet is uniquely crafted featuring roses, lilies, gerberas, and premium fillers, ensuring a one-of-a-kind gift that celebrates life's special moments with style and grace.",
        price: 160,
        category: "Mixed",
        tags: ["seasonal", "versatile"],
        image: "assets/images/products/mixed.jpg",
        fallbackImage: "assets/images/products/mixed.jpg",
        careInstructions: "Mix flower food with water, remove wilted blooms, re-cut stems every 2-3 days. Lasts 5-7 days.",
        features: ["Designer's Choice Premium Flowers", "Seasonal Best Selection", "Harmonious Color Palette", "Unique Every Time", "Versatile for Any Occasion"]
    },
    {
        id: 6,
        name: "Lily Paradise",
        description: "Fresh white lilies for purity and elegance",
        longDescription: "Immerse yourself in the serene beauty of our lily paradise arrangements. These stunning oriental lilies feature large, fragrant blooms that symbolize purity, commitment, and rebirth. Each stem is carefully selected for its pristine white petals and intoxicating fragrance, making them perfect for weddings, sympathy arrangements, or creating an atmosphere of peaceful elegance.",
        price: 145,
        category: "Lilies",
        tags: ["pure", "elegant"],
        image: "assets/images/products/lilies.jpg",
        fallbackImage: "assets/images/products/lilies.jpg",
        careInstructions: "Remove pollen stamens to prevent staining, change water frequently, lilies last 7-14 days.",
        features: ["6-10 Oriental Lily Stems", "Large Fragrant Blooms", "Pristine White Petals", "Long-Lasting Quality", "Perfect for Weddings & Sympathy"]
    }
];

const seasonalDeals = [
    {
        id: 'winter-romance',
        title: 'Winter Romance',
        description: 'Snowy whites with blush roses and eucalyptus.',
        longDescription: 'Embrace the magic of winter with our exclusive Winter Romance collection. This exquisite arrangement features pristine white roses delicately accented with soft blush pink tones, complemented by aromatic eucalyptus leaves that evoke the crisp freshness of a winter morning. Each element is carefully selected to create a harmonious blend of elegance and seasonal charm.',
        discount: 15,
        price: 199,
        originalPrice: 234,
        code: 'WINTER15',
        validThrough: 'Jan 31',
        image: 'assets/images/offers/winter.jpg',
        fallbackImage: 'assets/images/offers/winter.jpg',
        includes: ['15-20 White & Blush Roses', 'Premium Eucalyptus Branches', 'Seasonal Winter Greenery', 'Elegant Gift Wrapping', 'Complimentary Care Instructions Card'],
        occasions: ['Winter Celebrations', 'Elegant Dinner Parties', 'Anniversary', 'Romantic Gestures']
    },
    {
        id: 'lunar-blooms',
        title: 'Lunar New Year Blooms',
        description: 'Lucky reds and gold accents for celebration.',
        longDescription: 'Welcome prosperity and good fortune with our spectacular Lunar New Year collection. This vibrant arrangement showcases brilliant red blooms symbolizing luck and happiness, adorned with luxurious gold accents and traditional elements. Created to honor Asian traditions while celebrating new beginnings, this arrangement brings blessings and joy to your celebrations.',
        discount: 18,
        price: 220,
        originalPrice: 268,
        code: 'LUNAR18',
        validThrough: 'Feb 15',
        image: 'assets/images/offers/lunar.jpg',
        fallbackImage: 'assets/images/offers/lunar.jpg',
        includes: ['Premium Red Roses & Carnations', 'Gold-Accented Decorations', 'Lucky Bamboo Elements', 'Traditional Red & Gold Wrapping', 'Prosperity Blessing Card'],
        occasions: ['Lunar New Year', 'Chinese New Year', 'Family Gatherings', 'Business Openings', 'Prosperity Wishes']
    },
    {
        id: 'valentine-lux',
        title: 'Valentine Luxe Box',
        description: 'Signature roses with artisan chocolates.',
        longDescription: 'Indulge your loved one with our ultra-premium Valentine\'s Luxe Box - a sophisticated combination of our finest long-stemmed roses paired with artisan Belgian chocolates. Each rose is selected for its perfect form and deep crimson color, elegantly arranged in a luxury presentation box. The accompanying chocolates are handcrafted with premium ingredients, creating an unforgettable expression of love.',
        discount: 20,
        price: 260,
        originalPrice: 325,
        code: 'LOVE20',
        validThrough: 'Feb 14',
        image: 'assets/images/offers/valentine.jpg',
        fallbackImage: 'assets/images/offers/valentine.jpg',
        includes: ['24 Premium Long-Stemmed Red Roses', 'Artisan Belgian Chocolate Selection', 'Luxury Presentation Box', 'Personalized Love Note', 'Silk Ribbon & Gold Accents'],
        occasions: ['Valentine\'s Day', 'Marriage Proposals', 'Anniversaries', 'Ultimate Romantic Gestures']
    },
    {
        id: 'spring-awakening',
        title: 'Spring Awakening',
        description: 'Tulips, peonies, and hyacinth in pastel palette.',
        longDescription: 'Celebrate the renewal of spring with our breathtaking Spring Awakening collection. This enchanting arrangement features a dreamy combination of Dutch tulips, lush peonies, and fragrant hyacinths in a soft pastel color palette. Each bloom represents new beginnings, growth, and the joy of warmer days ahead. Perfect for bringing the beauty of spring gardens into your home.',
        discount: 12,
        price: 185,
        originalPrice: 210,
        code: 'SPRING12',
        validThrough: 'Mar 30',
        image: 'assets/images/offers/spring.jpg',
        fallbackImage: 'assets/images/offers/spring.jpg',
        includes: ['Fresh Dutch Tulips', 'Seasonal Peonies', 'Fragrant Hyacinths', 'Spring Garden Fillers', 'Rustic Kraft Wrapping'],
        occasions: ['Spring Celebrations', 'Easter', 'Mother\'s Day', 'New Beginnings', 'Garden Parties']
    }
];

// Specials section: curated ready-to-order bouquets
const specials = [
    {
        id: 'special-red-roses',
        title: 'Red Rose Signature',
        description: '12 premium red roses in a sculptural black vase. Includes wrap, vase, card, VAT, and Sharjah delivery.',
        price: 190,
        image: 'assets/images/specials/red-roses-special.jpg',
        fallbackImage: 'assets/images/products/roses.jpg',
        badge: 'All included'
    },
    {
        id: 'special-yellow-white',
        title: 'Sunshine Elegance Bouquet',
        description: 'Elegant white roses with golden solidago accents in a soft aqua Korean wrap, tied with satin ribbon. Includes card, VAT, and Sharjah delivery.',
        price: 160,
        image: 'assets/images/specials/yellow-white-special.jpg',
        fallbackImage: 'assets/images/specials/yellow-white-special.jpg',
        badge: 'Special price'
    },
    {
        id: 'special-orchid-elegance',
        title: 'Orchid Elegance',
        description: 'Stunning cream white roses with delicate golden solidago fillers, wrapped in elegant mint Korean paper with satin ribbon. Perfect for any occasion.',
        price: 150,
        image: 'assets/images/specials/orchid-elegance.jpg',
        fallbackImage: 'assets/images/specials/orchid-elegance.jpg',
        badge: 'New Arrival'
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
    renderSpecials();
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

function renderSpecials() {
    const container = document.getElementById('specials-grid');
    if (!container) return;

    container.innerHTML = specials.map(deal => `
        <div class="offer-card animate-on-scroll" onclick="orderViaWhatsApp('${deal.title}', ${deal.price})" style="cursor: pointer;">
            <div class="offer-image">
                <img src="${deal.image}" alt="${deal.title}" onerror="this.onerror=null; this.src='${deal.fallbackImage || deal.image}';">
                <div class="offer-badge">${deal.badge || 'Special'}</div>
            </div>
            <div class="offer-chip">Specials</div>
            <div class="offer-body">
                <h3>${deal.title}</h3>
                <p>${deal.description}</p>
                <div class="offer-meta">
                    <span class="offer-price">AED ${deal.price}</span>
                    <span class="offer-code">All-inclusive</span>
                </div>
                <div class="offer-footer">
                    <span class="offer-valid">Includes wrapping, VAT, and Sharjah delivery</span>
                    <div class="offer-actions">
                        <button class="offer-cta" onclick="event.stopPropagation(); orderViaWhatsApp('${deal.title}', ${deal.price})">Order Now</button>
                        <a href="https://wa.me/971507056500?text=Hi! I'm interested in ${encodeURIComponent(deal.title)}" target="_blank" class="offer-whatsapp" onclick="event.stopPropagation();"><i class="fab fa-whatsapp"></i> Chat</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderOffers() {
    const container = document.getElementById('offers-grid');
    if (!container) return;

    container.innerHTML = seasonalDeals.map(deal => `
        <div class="offer-card animate-on-scroll" onclick="showOfferDetail('${deal.id}')" style="cursor: pointer;">
            <div class="offer-image">
                <img src="${deal.image}" alt="${deal.title}" onerror="this.onerror=null; this.src='${deal.fallbackImage || deal.image}';">
                <div class="offer-badge">${deal.discount}% OFF</div>
            </div>
            <div class="offer-chip">Seasonal</div>
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
                        <button class="copy-code" onclick="event.stopPropagation(); copyPromo('${deal.code}')">Copy code</button>
                        <button class="offer-cta" onclick="event.stopPropagation(); showOfferDetail('${deal.id}')">View Details</button>
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
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="product-badge">${product.category}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">AED ${product.price}</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="add-to-cart" style="flex: 1; min-width: 120px;" onclick="event.stopPropagation(); orderViaWhatsApp('${product.name}', ${product.price})">💬 WhatsApp</button>
                    <button class="add-to-cart" style="flex: 1; min-width: 120px; background: #FF5A00;" onclick="event.stopPropagation(); orderViaTalabat('${product.name}')">🛵 Talabat</button>
                </div>
                <button class="view-details-btn" onclick="event.stopPropagation(); showProductDetail(${product.id})" style="width: 100%; margin-top: 0.5rem; background: linear-gradient(135deg, #8b008b, #ff1493); color: white; border: none; padding: 0.7rem; border-radius: 8px; cursor: pointer; font-weight: 600;">View Full Details</button>
            </div>
        `;
        card.onclick = () => showProductDetail(product.id);
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
    setTimeout(() => { cartIcon.style.animation = 'cartBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'; }, 10);
    
    // Show notification
    showNotification('Added to cart!');
}

// Order via WhatsApp
function orderViaWhatsApp(productName, price) {
    const whatsappNumber = '971507056500';
    const message = encodeURIComponent(
        `Hi! I would like to order:\n\n` +
        `🌸 ${productName}\n` +
        `💰 AED ${price}\n\n` +
        `📍 Delivery Location: Muwaileh, Sharjah\n\n` +
        `Please confirm availability and delivery time. Thank you!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Order via Talabat with tracking
function orderViaTalabat(productName = null) {
    const whatsappNumber = '971507056500';
    const talabatUrl = 'https://pzwv.adj.st/?s=s&v=627632&c=ae&adj_t=1nid2lpq_1no0at5h&adj_campaign=google_reserve_place_order_action_CH-SEO_&adj_deep_link=talabat%3A%2F%2F%3Fs%3Ds%26v%3D627632%26c%3Dae&adj_fallback=https://www.talabat.com/uae/restaurant/643937/camellia-flowers-muwaileh-commercial?s=s&v=627632&c=ae&adj_t=1nid2lpq_1no0at5h&adj_campaign=google_reserve_place_order_action_CH-SEO_&adj_deep_link=talabat%3A%2F%2F%3Fs%3Ds%26v%3D627632%26c%3Dae&adj_fallback=https://www.talabat.com/uae/restaurant/643937/camellia-flowers-muwaileh-commercial?utm_campaign=google_reserve_place_order_action_CH-SEO_&adj_redirect_macos=https://www.talabat.com/uae/restaurant/643937/camellia-flowers-muwaileh-commercial?utm_campaign=google_reserve_place_order_action_CH-SEO_&adjust_deeplink_js=1';
    
    // Get timestamp and generate tracking ID
    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });
    const trackingId = 'WEB-' + Date.now();
    
    // Store in localStorage for tracking
    localStorage.setItem('talabatRedirect', JSON.stringify({
        trackingId: trackingId,
        timestamp: timestamp,
        product: productName,
        source: 'website'
    }));
    
    // Notify via WhatsApp about customer coming from website
    const notificationMessage = encodeURIComponent(
        `🚨 TALABAT ORDER ALERT\n\n` +
        `📋 Tracking ID: ${trackingId}\n` +
        `🌐 Source: Website\n` +
        `⏰ Time: ${timestamp}\n` +
        `${productName ? `🌸 Product Interest: ${productName}\n` : ''}\n` +
        `Customer is being redirected to Talabat from our website.\n\n` +
        `Please track this order!`
    );
    
    // Send notification to WhatsApp (non-blocking)
    const notifyUrl = `https://wa.me/${whatsappNumber}?text=${notificationMessage}`;
    
    // Open notification in background (optional - can be removed if too intrusive)
    const notifyWindow = window.open(notifyUrl, '_blank', 'width=1,height=1');
    if (notifyWindow) {
        setTimeout(() => notifyWindow.close(), 2000);
    }
    
    // Show user notification
    showNotification('Redirecting to Talabat... Order will be tracked!');
    
    // Redirect to Talabat after short delay
    setTimeout(() => {
        window.open(talabatUrl, '_blank');
    }, 1000);
}

// Track returning customers from Talabat
function checkTalabatReturn() {
    const talabatData = localStorage.getItem('talabatRedirect');
    if (talabatData) {
        const data = JSON.parse(talabatData);
        const timeDiff = Date.now() - parseInt(data.trackingId.replace('WEB-', ''));
        
        // If returning within 1 hour, assume they might place order
        if (timeDiff < 3600000) {
            const whatsappNumber = '971507056500';
            const returnMessage = encodeURIComponent(
                `👤 CUSTOMER RETURNED FROM TALABAT\n\n` +
                `📋 Tracking ID: ${data.trackingId}\n` +
                `🔄 Return Time: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}\n` +
                `⏱️ Time Spent: ${Math.round(timeDiff / 60000)} minutes\n\n` +
                `Customer may have placed an order or needs assistance!`
            );
            
            // Optional: Send return notification
            // Commented out to avoid spam, but can be enabled
            // window.open(`https://wa.me/${whatsappNumber}?text=${returnMessage}`, '_blank', 'width=1,height=1');
        }
        
        // Clear after 24 hours
        if (timeDiff > 86400000) {
            localStorage.removeItem('talabatRedirect');
        }
    }
}

// Check on page load
document.addEventListener('DOMContentLoaded', () => {
    checkTalabatReturn();
});

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    } else {
        modal.style.display = '';
        modal.classList.add('active');
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

// ==============================================
// QUIZ FUNCTIONALITY
// ==============================================

const quizQuestions = [
    {
        id: 1,
        question: "What's the occasion?",
        questionAr: "ما هي المناسبة؟",
        options: [
            { id: 'romantic', icon: '💖', title: 'Romance & Love', description: 'Express your heartfelt emotions', value: 'roses' },
            { id: 'celebration', icon: '🎉', title: 'Celebration', description: 'Birthdays, achievements, milestones', value: 'mixed' },
            { id: 'sympathy', icon: '🤍', title: 'Sympathy & Support', description: 'Show care during difficult times', value: 'lilies' },
            { id: 'gratitude', icon: '🌻', title: 'Thank You', description: 'Show appreciation and gratitude', value: 'sunflowers' }
        ]
    },
    {
        id: 2,
        question: "When do you need it delivered?",
        questionAr: "متى تحتاج التوصيل؟",
        options: [
            { id: 'today', icon: '⚡', title: 'Today (Same-Day)', description: 'Available for Sharjah orders before 2 PM', value: 'express' },
            { id: 'tomorrow', icon: '📅', title: 'Tomorrow', description: 'Next-day delivery across UAE', value: 'standard' },
            { id: 'scheduled', icon: '🗓️', title: 'Specific Date', description: 'Plan ahead for special occasions', value: 'scheduled' },
            { id: 'flexible', icon: '🌸', title: 'Flexible', description: 'No rush, anytime this week', value: 'flexible' }
        ]
    },
    {
        id: 3,
        question: "What's your style preference?",
        questionAr: "ما هو تفضيلك للأسلوب؟",
        options: [
            { id: 'classic', icon: '🌹', title: 'Classic & Elegant', description: 'Timeless arrangements with traditional flowers', value: 'classic' },
            { id: 'modern', icon: '✨', title: 'Modern & Chic', description: 'Contemporary designs with unique textures', value: 'modern' },
            { id: 'vibrant', icon: '🌈', title: 'Bright & Colorful', description: 'Bold colors that make a statement', value: 'vibrant' },
            { id: 'soft', icon: '🌸', title: 'Soft & Delicate', description: 'Gentle pastels and romantic whites', value: 'soft' }
        ]
    }
];

const recommendationData = {
    roses: {
        name: 'Red Roses Bouquet',
        price: 150,
        image: 'assets/images/products/roses.jpg',
        fallbackImage: 'assets/images/products/roses.jpg',
        description: 'Classic red roses arranged with care, symbolizing deep love and passion. Perfect for romantic occasions.',
        tags: ['Romantic', 'Classic', 'Popular in Sharjah'],
        match: 'Ideal for expressing love and romance',
        badge: 'Most Romantic'
    },
    sunflowers: {
        name: 'Sunflower Delight',
        price: 120,
        image: 'assets/images/products/sunflower.jpg',
        fallbackImage: 'assets/images/products/sunflower.jpg',
        description: 'Bright sunflowers that radiate joy and positivity. Perfect for celebrations and showing gratitude.',
        tags: ['Cheerful', 'Vibrant', 'Best for Same-Day'],
        match: 'Perfect for celebrations and gratitude',
        badge: 'Most Cheerful'
    },
    lilies: {
        name: 'Lily Paradise',
        price: 145,
        image: 'assets/images/products/lilies.jpg',
        fallbackImage: 'assets/images/products/lilies.jpg',
        description: 'Fresh white lilies symbolizing purity, peace, and elegance. Ideal for sympathy and support.',
        tags: ['Elegant', 'Peaceful', 'Premium Quality'],
        match: 'Thoughtful choice for sympathy and support',
        badge: 'Most Elegant'
    },
    mixed: {
        name: 'Mixed Bouquet',
        price: 160,
        image: 'assets/images/products/mixed.jpg',
        fallbackImage: 'assets/images/products/mixed.jpg',
        description: 'Beautiful mix of seasonal flowers in harmonious colors. Versatile for any celebration or occasion.',
        tags: ['Versatile', 'Seasonal', 'Popular in Sharjah'],
        match: 'Versatile choice perfect for celebrations',
        badge: 'Most Popular'
    },
    orchids: {
        name: 'Orchid Elegance',
        price: 200,
        image: 'https://images.unsplash.com/photo-1594878072478-d80089fcbea2?w=800&q=80',
        description: 'Exotic orchids for those who appreciate luxury and sophistication. A stunning statement piece.',
        tags: ['Luxury', 'Modern', 'Premium Quality'],
        match: 'Sophisticated choice for modern aesthetics',
        badge: 'Most Luxurious'
    },
    tulips: {
        name: 'Tulip Collection',
        price: 135,
        image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=800&q=80',
        description: 'Elegant tulips in vibrant spring colors. Perfect for expressing cheerfulness and renewal.',
        tags: ['Spring', 'Colorful', 'Best for Same-Day'],
        match: 'Fresh and vibrant for bright occasions',
        badge: 'Spring Favorite'
    }
};

let quizAnswers = {};
let currentQuestion = 0;

function startQuiz() {
    quizAnswers = {};
    currentQuestion = 0;
    document.getElementById('quiz-start').classList.remove('active');
    document.getElementById('quiz-questions').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="quiz-question active">
            <h3>${question.question}</h3>
            <p class="quiz-subtitle-ar" style="font-size: 1.2rem; margin-bottom: 2rem;">${question.questionAr}</p>
            <div class="quiz-options">
                ${question.options.map(option => `
                    <div class="quiz-option" onclick="selectOption(${question.id}, '${option.id}', '${option.value}')">
                        <div class="quiz-option-icon">${option.icon}</div>
                        <div class="quiz-option-text">
                            <h4>${option.title}</h4>
                            <p>${option.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    updateProgress();
    updateNavigationButtons();
}

function selectOption(questionId, optionId, value) {
    quizAnswers[questionId] = { optionId, value };
    
    // Visual feedback
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Enable next button
    document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {
    if (!quizAnswers[quizQuestions[currentQuestion].id]) {
        showNotification('Please select an option');
        return;
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('current-step').textContent = currentQuestion + 1;
}

function updateNavigationButtons() {
    const backBtn = document.getElementById('btn-back');
    const nextBtn = document.getElementById('btn-next');
    
    if (currentQuestion === 0) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'inline-block';
    }
    
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.textContent = 'Show My Picks';
    } else {
        nextBtn.textContent = 'Next';
    }
    
    nextBtn.disabled = !quizAnswers[quizQuestions[currentQuestion].id];
}

function showResults() {
    document.getElementById('quiz-questions').classList.remove('active');
    document.getElementById('quiz-results').classList.add('active');
    
    // Determine recommendations based on answers
    const recommendations = getRecommendations();
    displayRecommendations(recommendations);
}

function getRecommendations() {
    const occasionAnswer = quizAnswers[1]?.value || 'mixed';
    const deliveryAnswer = quizAnswers[2]?.value || 'standard';
    const styleAnswer = quizAnswers[3]?.value || 'classic';
    
    // Primary recommendation based on occasion
    let primary = occasionAnswer;
    
    // Secondary recommendations
    let secondary = [];
    if (styleAnswer === 'vibrant') {
        secondary.push('sunflowers');
    }
    if (styleAnswer === 'modern') {
        secondary.push('orchids');
    }
    if (styleAnswer === 'classic') {
        secondary.push('roses');
    }
    if (deliveryAnswer === 'express') {
        secondary.push('tulips');
    }
    
    // Remove duplicates and primary from secondary
    secondary = [...new Set(secondary)].filter(item => item !== primary).slice(0, 2);
    
    return [primary, ...secondary];
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendations-container');
    const whatsappNumber = '971507056500';
    
    container.innerHTML = recommendations.map((rec, index) => {
        const product = recommendationData[rec];
        if (!product) return '';
        
        const whatsappMessage = encodeURIComponent(
            `Hi! I'm interested in the ${product.name} (AED ${product.price}). I found it through your flower quiz. Can you help me place an order?`
        );
        
        return `
            <div class="recommendation-card">
                <div class="recommendation-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';">
                    <div class="recommendation-badge">${product.badge}</div>
                </div>
                <div class="recommendation-content">
                    <h4>${product.name}</h4>
                    <div class="recommendation-price">AED ${product.price}</div>
                    <p class="recommendation-description">${product.description}</p>
                    
                    ${index === 0 ? `
                        <div class="recommendation-match">
                            <h5>Why This Matches You</h5>
                            <p>${product.match}</p>
                        </div>
                    ` : ''}
                    
                    <div class="recommendation-tags">
                        ${product.tags.map(tag => `<span class="recommendation-tag">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="recommendation-actions">
                        <a href="javascript:void(0)" onclick="orderViaTalabat('${product.name}')" class="btn-talabat" style="background: #FF5A00; color: white; border: none;">
                            <span>🛵</span> Talabat
                        </a>
                        <a href="https://wa.me/${whatsappNumber}?text=${whatsappMessage}" 
                           target="_blank" 
                           class="btn-whatsapp">
                            <span>💬</span> WhatsApp
                        </a>
                    </div>
                    
                    ${product.name.includes('Fish') ? `
                        <div class="care-disclaimer">
                            <p><strong>Care Note:</strong> Fresh flowers stay beautiful for 5-7 days with proper care. Change water daily and keep away from direct sunlight.</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function restartQuiz() {
    document.getElementById('quiz-results').classList.remove('active');
    document.getElementById('quiz-start').classList.add('active');
    quizAnswers = {};
    currentQuestion = 0;
}

// ============================================
// TRANSLATION SYSTEM
// ============================================

let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
    en: {
        // Navbar
        home: 'Home',
        shop: 'Shop',
        about: 'About',
        contact: 'Contact',
        quiz: 'Flower Quiz',
        offers: 'Deals',
        
        // Hero
        heroTitle: 'Camellia Flowers',
        heroSubtitle: 'Premium Flowers Delivered Fresh to Your Doorstep in Sharjah',
        shopNow: 'SHOP NOW',
        orderTalabat: 'Order on Talabat',
        customOrders: 'Custom Orders',
        
        // Different Section
        differentTitle: 'How We Are Different',
        differentSubtitle: 'What sets Camellia Flowers apart from other flower shops in UAE',
        experienceDifference: 'Experience the Camellia Difference Today',
        takeQuiz: 'Take Flower Quiz',
        
        // Features
        sameDay: 'Same-Day Delivery',
        freshGuarantee: 'Fresh Guarantee',
        customDesigns: 'Custom Designs',
        giftPackaging: 'Gift Packaging',
        
        // Common
        orderWhatsApp: '💬 Order via WhatsApp',
        orderOnTalabat: 'Order on Talabat',
        learnMore: 'Learn More',
    },
    ar: {
        // Navbar - Arabic
        home: 'الرئيسية',
        shop: 'المتجر',
        about: 'من نحن',
        contact: 'تواصل معنا',
        quiz: 'اختبار الزهور',
        offers: 'العروض',
        
        // Hero
        heroTitle: 'كاميليا فلاورز',
        heroSubtitle: 'زهور فاخرة يتم توصيلها طازجة إلى باب منزلك في الشارقة',
        shopNow: 'تسوق الآن',
        orderTalabat: 'اطلب على طلبات',
        customOrders: 'طلبات مخصصة',
        
        // Different Section
        differentTitle: 'كيف نحن مختلفون',
        differentSubtitle: 'ما الذي يميز كاميليا فلاورز عن محلات الزهور الأخرى في الإمارات',
        experienceDifference: 'جرب الفرق مع كاميليا اليوم',
        takeQuiz: 'ابدأ اختبار الزهور',
        
        // Features
        sameDay: 'توصيل في نفس اليوم',
        freshGuarantee: 'ضمان النضارة',
        customDesigns: 'تصاميم مخصصة',
        giftPackaging: 'تغليف الهدايا',
        
        // Common
        orderWhatsApp: '💬 اطلب عبر واتساب',
        orderOnTalabat: 'اطلب على طلبات',
        learnMore: 'اعرف المزيد',
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    // Update button text
    const translateBtn = document.getElementById('translate-btn');
    const langText = translateBtn.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    
    // Apply RTL/LTR
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Update all translatable elements
    document.querySelectorAll('.translatable').forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage}`);
        if (key) {
            element.textContent = key;
        }
    });
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    const navTranslations = [
        { en: 'Home', ar: 'الرئيسية' },
        { en: 'Shop', ar: 'المتجر' },
        { en: 'About', ar: 'من نحن' },
        { en: 'Contact', ar: 'تواصل معنا' },
        { en: 'Flower Quiz', ar: 'اختبار الزهور' },
        { en: 'Deals', ar: 'العروض' }
    ];
    
    navLinks.forEach((link, index) => {
        if (navTranslations[index]) {
            link.textContent = navTranslations[index][currentLanguage];
        }
    });
    
    // Show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4a90e2, #5aa5f0);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
    `;
    notification.textContent = currentLanguage === 'ar' 
        ? 'تم التبديل إلى العربية ✓' 
        : 'Switched to English ✓';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    if (currentLanguage === 'ar') {
        toggleLanguage();
    }
});

// ============================================
// DETAIL MODAL FUNCTIONS
// ============================================

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('detail-modal-body');
    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-image-section">
                <img src="${product.image}" alt="${product.name}" class="detail-main-image" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';">
                <div class="detail-badge-overlay">${product.category}</div>
            </div>
            
            <div class="detail-info-section">
                <div class="detail-header">
                    <h2 class="detail-title">${product.name}</h2>
                    <div class="detail-price-box">
                        <span class="detail-price">AED ${product.price}</span>
                        <span class="detail-price-label">Starting from</span>
                    </div>
                </div>
                
                <div class="detail-tags">
                    ${product.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="detail-description">
                    <h3>About This Arrangement</h3>
                    <p>${product.longDescription}</p>
                </div>
                
                <div class="detail-features">
                    <h3>What's Included</h3>
                    <ul class="detail-features-list">
                        ${product.features.map(feature => `<li><span class="feature-icon">✓</span> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-care">
                    <h3>Care Instructions</h3>
                    <p class="care-text">${product.careInstructions}</p>
                </div>
                
                <div class="detail-actions">
                    <button class="detail-btn detail-btn-whatsapp" onclick="orderViaWhatsApp('${product.name}', ${product.price})">
                        <span>💬</span>
                        <span>Order via WhatsApp</span>
                    </button>
                    <button class="detail-btn detail-btn-talabat" onclick="orderViaTalabat('${product.name}')">
                        <span>🛵</span>
                        <span>Order on Talabat</span>
                    </button>
                </div>
                
                <div class="detail-guarantee">
                    <div class="guarantee-item">
                        <span class="guarantee-icon">🚚</span>
                        <span>Same-Day Delivery Available</span>
                    </div>
                    <div class="guarantee-item">
                        <span class="guarantee-icon">🌺</span>
                        <span>100% Fresh Guarantee</span>
                    </div>
                    <div class="guarantee-item">
                        <span class="guarantee-icon">💝</span>
                        <span>Gift Wrapping Included</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modal = document.getElementById('detail-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showOfferDetail(offerId) {
    const offer = seasonalDeals.find(o => o.id === offerId);
    if (!offer) return;
    
    const modalBody = document.getElementById('detail-modal-body');
    modalBody.innerHTML = `
        <div class="detail-grid">
            <div class="detail-image-section">
                <img src="${offer.image}" alt="${offer.title}" class="detail-main-image" onerror="this.onerror=null; this.src='${offer.fallbackImage || offer.image}';">
                <div class="detail-badge-overlay seasonal-badge">${offer.discount}% OFF</div>
                <div class="detail-seasonal-chip">SEASONAL SPECIAL</div>
            </div>
            
            <div class="detail-info-section">
                <div class="detail-header">
                    <h2 class="detail-title">${offer.title}</h2>
                    <div class="detail-price-box">
                        <span class="detail-price">AED ${offer.price}</span>
                        <span class="detail-original-price">AED ${offer.originalPrice}</span>
                    </div>
                </div>
                
                <div class="detail-promo-code">
                    <div class="promo-code-label">Limited Time Promo Code</div>
                    <div class="promo-code-box">
                        <span class="promo-code-text">${offer.code}</span>
                        <button class="promo-copy-btn" onclick="copyPromo('${offer.code}')">Copy</button>
                    </div>
                    <div class="promo-valid">Valid until ${offer.validThrough}</div>
                </div>
                
                <div class="detail-description">
                    <h3>Collection Details</h3>
                    <p>${offer.longDescription}</p>
                </div>
                
                <div class="detail-features">
                    <h3>This Collection Includes</h3>
                    <ul class="detail-features-list">
                        ${offer.includes.map(item => `<li><span class="feature-icon">✓</span> ${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-occasions">
                    <h3>Perfect For</h3>
                    <div class="occasions-tags">
                        ${offer.occasions.map(occasion => `<span class="occasion-tag">${occasion}</span>`).join('')}
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="detail-btn detail-btn-whatsapp" onclick="orderViaWhatsApp('${offer.title}', ${offer.price})">
                        <span>💬</span>
                        <span>Order via WhatsApp</span>
                    </button>
                    <button class="detail-btn detail-btn-talabat" onclick="orderViaTalabat('${offer.title}')">
                        <span>🛵</span>
                        <span>Order on Talabat</span>
                    </button>
                </div>
                
                <div class="detail-guarantee">
                    <div class="guarantee-item">
                        <span class="guarantee-icon">⏰</span>
                        <span>Limited Time Offer - Order Now!</span>
                    </div>
                    <div class="guarantee-item">
                        <span class="guarantee-icon">🎁</span>
                        <span>Premium Gift Packaging</span>
                    </div>
                    <div class="guarantee-item">
                        <span class="guarantee-icon">💯</span>
                        <span>Save ${offer.discount}% Today</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modal = document.getElementById('detail-modal');
    modal.style.display = '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

// ============================================
// MOBILE MENU FUNCTIONS
// ============================================

function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    navLinks.classList.toggle('mobile-active');
    
    // Update icon
    const menuIcon = menuToggle.querySelector('.menu-icon');
    if (navLinks.classList.contains('mobile-active')) {
        menuIcon.textContent = '✕';
    } else {
        menuIcon.textContent = '☰';
    }
}

function closeMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    navLinks.classList.remove('mobile-active');
    
    // Reset icon
    const menuIcon = menuToggle.querySelector('.menu-icon');
    menuIcon.textContent = '☰';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    if (navLinks && menuToggle && navLinks.classList.contains('mobile-active')) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

