// Highlight the active link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.clientHeight; 
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id'); 
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); 
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active'); 
        }
    });
});

// Dropdown menu animation
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('show');
        e.preventDefault();
    });
});

// Close dropdown menu when clicking outside
document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
var myCarousel = document.querySelector('#heroCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000,
            wrap: true
        });        
        document.addEventListener('DOMContentLoaded', function () {
        });
        
        let cartCount = 0; // Initialize cart count
        function changeImage(imageId, newImage) {
            const img = document.getElementById(imageId);
            img.src = newImage;
        }
        // Function to change the image
        function changeImage(imageId, imageUrl) {
            const img = document.getElementById(imageId);
            img.src = imageUrl;
        }
        
        // Increment Quantity
        function increaseQuantity(quantityId) {
            const quantityElement = document.getElementById(quantityId);
            let currentQuantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = currentQuantity + 1;
        }
        
        // Decrement Quantity
        function decreaseQuantity(quantityId) {
            const quantityElement = document.getElementById(quantityId);
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
            }
        }
        // Add to Cart
        function addToCart(productName, price, quantityId) {
            const quantityElement = document.getElementById(quantityId);
            const quantity = parseInt(quantityElement.textContent);
            const totalPrice = price * quantity;
        
            // Update cart count
            cartCount += quantity; // Increment the cart count
            document.getElementById('cart-count').textContent = cartCount; // Update the cart count display
        
            // Show notification
            showNotification(`${productName} added to cart. Quantity: ${quantity}, Total Price: $${totalPrice}`);
        }
        
        // Function to open the modal
        // Show notification
        showNotification(`${productName} added to cart. Quantity: ${quantity}, Total Price: $${totalPrice}`);
        
        // Function to toggle the product description visibility
        function toggleDescription(descId) {
            const descElement = document.getElementById(descId);
            if (descElement.style.display === "none") {
                descElement.style.display = "block";
            } else {
                descElement.style.display = "none";
            }
        }
        function openModal(title, description) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('myModal').style.display = "block";
        }
        
        // Function to close the modal
        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }
        // Function to show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.remove('hidden');
            notification.classList.add('show');
        
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                notification.classList.add('hidden');
            }, 6000);
        } 
        document.addEventListener("DOMContentLoaded", function() {
            var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            var createAccountModal = new bootstrap.Modal(document.getElementById('createAccountModal'));
            
            // Show the login modal initially
            loginModal.show();
    
            document.getElementById('createAccountLink').addEventListener('click', function(event) {
                event.preventDefault();
                console.log('Create Account link clicked');
                loginModal.hide();
                createAccountModal.show();
            });
    
            document.getElementById('loginLink').addEventListener('click', function(event) {
                event.preventDefault();
                console.log('Login link clicked');
                createAccountModal.hide();
                loginModal.show();
            });
        });
    
        function validateCreateAccountForm() {
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
    
            if (newUsername === "" || newPassword === "" || confirmPassword === "") {
                alert("Please fill in all fields.");
                return false; // Prevent form submission
            }
    
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match.");
                return false; // Prevent form submission
            }
            
            return true; // Allow form submission if everything is fine
        }
    
        function validateLoginForm() {
            // Add your login form validation logic here if needed
            return true; // Allow form submission by default
        }