// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
});

// Copy code function
function copyCode(id) {
    const code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Code has been copied to clipboard.',
            timer: 1500,
            showConfirmButton: false
        });
    });
}

// SweetAlert Examples
function showBasicAlert() {
    Swal.fire(
        'Hello!',
        'This is a basic SweetAlert dialog.',
        'success'
    );
}

function showConfirmationAlert() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        }
    });
}

function showLoginForm() {
    Swal.fire({
        title: 'Login',
        html: `
                <div class="mb-3">
                    <label for="swal-email" class="form-label">Email</label>
                    <input type="email" id="swal-email" class="swal2-input" placeholder="Enter your email">
                </div>
                <div class="mb-3">
                    <label for="swal-password" class="form-label">Password</label>
                    <input type="password" id="swal-password" class="swal2-input" placeholder="Enter your password">
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="swal-remember">
                    <label class="form-check-label" for="swal-remember">
                        Remember me
                    </label>
                </div>
            `,
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        focusConfirm: false,
        preConfirm: () => {
            const email = document.getElementById('swal-email').value;
            const password = document.getElementById('swal-password').value;
            const remember = document.getElementById('swal-remember').checked;

            if (!email || !password) {
                Swal.showValidationMessage('Please enter email and password');
                return false;
            }

            return { email, password, remember };
        }
    }).then(result => {
        if (result.isConfirmed) {
            const { email, remember } = result.value;
            Swal.fire(
                'Login Successful!',
                `Welcome back, ${email}!${remember ? ' We will remember you.' : ''}`,
                'success'
            );
        }
    });
}

function showDemoAlert() {
    Swal.fire({
        title: 'Welcome!',
        text: 'This is a demo of Josiah\'s Ultimate Starter Kit.',
        icon: 'info',
        confirmButtonText: 'Cool!'
    });
}

function showModalExample() {
    // Example modal implementation
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

function showFormExample() {
    // Example form implementation
    Swal.fire({
        title: 'Form Example',
        html: `
                <form id="exampleForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                </form>
            `,
        showCancelButton: false,
        focusConfirm: false,
        preConfirm: () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                Swal.showValidationMessage('Please fill out all fields');
                return false;
            }

            return { name, email };
        }
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire(
                'Form Submitted!',
                `Thank you, ${result.value.name}!`,
                'success'
            );
        }
    });
}