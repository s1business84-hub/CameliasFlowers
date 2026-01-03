// Login/Register Page JavaScript

const USER_KEY = 'camelias_user';
const USER_PROFILE_KEY = 'camelias_user_profile';
const REMEMBER_KEY = 'camelias_remember';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupFormValidation();
    setupFormSubmissions();
    setupAccountActions();
    syncAuthViews();
});

// Toggle between login and register forms
function toggleAuthForm() {
    const loginWrapper = document.getElementById('login-wrapper');
    const registerWrapper = document.getElementById('register-wrapper');
    const accountWrapper = document.getElementById('account-wrapper');
    
    if (!loginWrapper || !registerWrapper) return;

    // If an account is active, show account card instead of toggling forms
    const user = getStoredUser();
    if (user && accountWrapper) {
        loginWrapper.classList.add('hidden');
        registerWrapper.classList.add('hidden');
        accountWrapper.classList.remove('hidden');
        updateAccountDetails(user);
        return;
    }

    loginWrapper.classList.toggle('hidden');
    registerWrapper.classList.toggle('hidden');
    
    // Clear forms when switching
    document.getElementById('login-form').reset();
    document.getElementById('register-form').reset();
}

// Setup form validation
function setupFormValidation() {
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPhone = document.getElementById('register-phone');
    const registerPassword = document.getElementById('register-password');
    const registerConfirmPassword = document.getElementById('register-confirm-password');

    // Email validation
    [loginEmail, registerEmail].forEach(input => {
        input.addEventListener('blur', function() {
            if (!isValidEmail(this.value)) {
                this.classList.add('input-error');
            } else {
                this.classList.remove('input-error');
            }
        });
    });

    // Password validation
    registerPassword.addEventListener('input', function() {
        validatePasswordStrength(this.value);
    });

    // Confirm password validation
    registerConfirmPassword.addEventListener('blur', function() {
        if (this.value !== registerPassword.value) {
            this.classList.add('input-error');
            showValidationError(this, 'Passwords do not match');
        } else {
            this.classList.remove('input-error');
        }
    });

    // Phone number validation
    registerPhone.addEventListener('blur', function() {
        if (!isValidPhone(this.value)) {
            this.classList.add('input-error');
            showValidationError(this, 'Please enter a valid phone number');
        } else {
            this.classList.remove('input-error');
        }
    });
}

// Setup form submissions
function setupFormSubmissions() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', handleLoginSubmit);
    registerForm.addEventListener('submit', handleRegisterSubmit);
}

// Handle login submission
function handleLoginSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Validate
    if (!isValidEmail(email)) {
        showAuthError('Please enter a valid email address');
        return;
    }

    if (password.length < 6) {
        showAuthError('Password must be at least 6 characters');
        return;
    }

    // Simulate login
    showAuthLoading('Signing in...');
    
    setTimeout(() => {
        // Store user session
        const user = {
            email: email,
            loginTime: new Date().toISOString()
        };

        setUserSession(user);
        if (rememberMe) localStorage.setItem(REMEMBER_KEY, 'true');
        updateAccountDetails(user);

        showAuthSuccess('Welcome back! Redirecting...');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 1500);
}

// Handle register submission
function handleRegisterSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const terms = document.getElementById('terms').checked;

    // Validate
    if (!name.trim()) {
        showAuthError('Please enter your full name');
        return;
    }

    if (!isValidEmail(email)) {
        showAuthError('Please enter a valid email address');
        return;
    }

    if (!isValidPhone(phone)) {
        showAuthError('Please enter a valid phone number');
        return;
    }

    if (password.length < 6) {
        showAuthError('Password must be at least 6 characters');
        return;
    }

    if (password !== confirmPassword) {
        showAuthError('Passwords do not match');
        return;
    }

    if (!terms) {
        showAuthError('Please accept the terms and conditions');
        return;
    }

    // Simulate registration
    showAuthLoading('Creating your account...');
    
    setTimeout(() => {
        // Store new user
        const newUser = {
            name: name,
            email: email,
            phone: phone,
            registrationDate: new Date().toISOString()
        };

        setUserSession(newUser);
        localStorage.setItem(USER_PROFILE_KEY, JSON.stringify({
            ...newUser,
            preferences: {
                notifications: true,
                newsletter: true
            }
        }));

        updateAccountDetails(newUser);

        showAuthSuccess('Account created successfully! Redirecting...');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 1500);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (UAE format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+971|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Password strength validation
function validatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const strengthBar = document.querySelector('.password-strength');
    if (strengthBar) {
        strengthBar.style.width = (strength * 20) + '%';
        if (strength < 2) strengthBar.style.background = '#ff4757';
        else if (strength < 4) strengthBar.style.background = '#ffa502';
        else strengthBar.style.background = '#2ed573';
    }
}

// Show validation error
function showValidationError(input, message) {
    input.classList.add('input-error');
    const errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;
    
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    input.parentElement.appendChild(errorMsg);
}

// Show error message
function showAuthError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'auth-message error-message-toast';
    errorDiv.textContent = '❌ ' + message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff4757, #ff6348);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(255, 71, 87, 0.4);
        z-index: 10001;
        animation: slideInDown 0.5s ease, fadeOut 0.5s ease 3.5s forwards;
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 4000);
}

// Show success message
function showAuthSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'auth-message success-message-toast';
    successDiv.textContent = '✅ ' + message;
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #2ed573, #26de81);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(46, 213, 115, 0.4);
        z-index: 10001;
        animation: slideInDown 0.5s ease, fadeOut 0.5s ease 4s forwards;
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 4500);
}

// Show loading message
function showAuthLoading(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'auth-message loading-message-toast';
    loadingDiv.id = 'auth-loading';
    loadingDiv.textContent = '⏳ ' + message;
    loadingDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        z-index: 10001;
        animation: slideInDown 0.5s ease;
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(loadingDiv);
}

// Scroll to home
function scrollToHome() {
    window.location.href = 'index.html';
}

// Social login handlers
document.addEventListener('DOMContentLoaded', function() {
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    const appleBtn = document.querySelector('.apple-btn');

    googleBtn?.addEventListener('click', () => handleSocialLogin('Google'));
    facebookBtn?.addEventListener('click', () => handleSocialLogin('Facebook'));
    appleBtn?.addEventListener('click', () => handleSocialLogin('Apple'));
});

function handleSocialLogin(provider) {
    showAuthLoading(`Signing in with ${provider}...`);
    
    setTimeout(() => {
        const user = {
            email: `user@${provider.toLowerCase()}.com`,
            provider: provider,
            loginTime: new Date().toISOString()
        };

        setUserSession(user);
        updateAccountDetails(user);
        
        showAuthSuccess(`Welcome! Redirecting...`);
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

// Add error styling
const style = document.createElement('style');
style.textContent = `
    .input-error {
        border-color: #ff4757 !important;
        background: rgba(255, 71, 87, 0.1) !important;
    }

    .error-message {
        color: #ff4757;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        animation: slideInRight 0.3s ease;
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ----- Account helpers -----

function getStoredUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function setUserSession(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function clearUserSession() {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_PROFILE_KEY);
    localStorage.removeItem(REMEMBER_KEY);
}

function setupAccountActions() {
    const logoutBtn = document.getElementById('logout-btn');
    const deleteBtn = document.getElementById('delete-btn');

    logoutBtn?.addEventListener('click', () => {
        clearUserSession();
        showAuthSuccess('Signed out successfully');
        syncAuthViews();
    });

    deleteBtn?.addEventListener('click', () => {
        clearUserSession();
        showAuthSuccess('Account deleted from this device');
        syncAuthViews();
    });
}

function syncAuthViews() {
    const user = getStoredUser();
    const loginWrapper = document.getElementById('login-wrapper');
    const registerWrapper = document.getElementById('register-wrapper');
    const accountWrapper = document.getElementById('account-wrapper');

    if (user) {
        loginWrapper?.classList.add('hidden');
        registerWrapper?.classList.add('hidden');
        accountWrapper?.classList.remove('hidden');
        updateAccountDetails(user);
    } else {
        accountWrapper?.classList.add('hidden');
        loginWrapper?.classList.remove('hidden');
        registerWrapper?.classList.add('hidden');
    }
}

function updateAccountDetails(user) {
    if (!user) return;
    const nameEl = document.getElementById('account-name');
    const emailEl = document.getElementById('account-email');
    const statusEl = document.getElementById('account-status');
    const createdEl = document.getElementById('account-created');

    nameEl && (nameEl.textContent = user.name || 'Guest user');
    emailEl && (emailEl.textContent = user.email || 'Not set');

    const provider = user.provider ? `Signed in with ${user.provider}` : 'Email/password login';
    statusEl && (statusEl.textContent = provider);

    const created = user.registrationDate || user.loginTime;
    if (createdEl) {
        createdEl.textContent = created ? new Date(created).toLocaleDateString('en-GB') : '—';
    }
}
