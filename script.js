document.addEventListener('DOMContentLoaded', () => {
    // Left logo functionality
    const leftLogo = document.querySelector('.left-logo a');
    leftLogo.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to Izzy Boutique details page');
        window.location.href = 'https://www.instagram.com/izzy_boutique__/'; // Replace with the actual URL of the Izzy Boutique details page
    });

    // Right logo functionality
    const rightLogo = document.querySelector('.right-logo a');
    rightLogo.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to DHL details page');
        window.location.href = 'https://www.dhl.com/us-en/home.html'; // Replace with the actual URL of the DHL details page
    });

    // Search button functionality
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        console.log(`Searching for: ${query}`);
        // Implement search functionality here
        // For example, redirect to a search results page with the query as a parameter
        window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
    });

    // My Account button functionality
    const accountButton = document.querySelector('.account a');
    accountButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to My Account page');
        // Implement redirection to My Account page with sign-in and sign-up options
        window.location.href = '/account.html'; // Replace with the actual URL of the My Account page
    });

    // Wishlist button functionality
    const wishlistButton = document.querySelector('.wishlist a');
    wishlistButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to Wishlist page');
        // Implement redirection to Wishlist page
        window.location.href = '/wishlist.html'; // Replace with the actual URL of the Wishlist page
    });

    // Cart button functionality
    const cartButton = document.querySelector('.cart a');
    cartButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to Cart page');
        // Implement redirection to Cart page
        window.location.href = '/cart.html'; // Replace with the actual URL of the Cart page
    });

    // Hero section buttons functionality
    const shopWomenButton = document.querySelector('.hero-content .button:first-child');
    const shopMenButton = document.querySelector('.hero-content .button:last-child');
    shopWomenButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to Women\'s Shoes section');
        // Implement redirection to Women's Shoes section
        window.location.href = '/women.html'; // Replace with the actual URL of the Women's Shoes section
    });
    shopMenButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Redirecting to Men\'s Shoes section');
        // Implement redirection to Men's Shoes section
        window.location.href = '/men.html'; // Replace with the actual URL of the Men's Shoes section
    });

    // Order tracking form functionality
    const orderTrackingForm = document.getElementById('order-tracking-form');
    orderTrackingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const trackingNumber = document.getElementById('tracking-number').value;
        console.log(`Tracking number: ${trackingNumber}`);
        // Implement order tracking functionality here
        // For example, redirect to a tracking results page with the tracking number as a parameter
        window.location.href = `/track.html?trackingNumber=${encodeURIComponent(trackingNumber)}`;
    });

    // Scan barcode button functionality
    const scanBarcodeButton = document.getElementById('scan-barcode-button');
    const cameraContainer = document.getElementById('camera-container');
    const cameraStream = document.getElementById('camera-stream');
    const cameraCanvas = document.getElementById('camera-canvas');
    const captureButton = document.getElementById('capture-button');
    const cancelScanButton = document.getElementById('cancel-scan-button');

    scanBarcodeButton.addEventListener('click', () => {
        cameraContainer.style.display = 'block';
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                cameraStream.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
            });
    });

    captureButton.addEventListener('click', () => {
        const context = cameraCanvas.getContext('2d');
        context.drawImage(cameraStream, 0, 0, cameraCanvas.width, cameraCanvas.height);
        const imageData = cameraCanvas.toDataURL('image/png');
        console.log('Barcode captured');
        // Implement barcode scanning functionality here
    });

    cancelScanButton.addEventListener('click', () => {
        cameraContainer.style.display = 'none';
        const stream = cameraStream.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        cameraStream.srcObject = null;
    });

    // Upload document button functionality
    const uploadDocumentButton = document.getElementById('upload-document-button');
    uploadDocumentButton.addEventListener('click', () => {
        console.log('Upload document functionality not implemented yet');
        // Implement document upload functionality here
    });

    // Add to Cart button functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            };
            addToCart(product);
        });
    });

    // Function to add product to cart
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Function to update cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemCount = document.getElementById('cart-item-count');
        if (cartItemCount) {
            cartItemCount.textContent = cart.length;
        }
    }

    // Update cart count on page load
    updateCartCount();
});