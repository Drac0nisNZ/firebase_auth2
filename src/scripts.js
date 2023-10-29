const headerRef = document.getElementById('header')
const navRef = document.getElementById('mainNav')

const headerEl = '<h1 class="site-heading text-center text-faded d-none d-lg-block"><span class="site-heading-upper text-primary mb-3">A World Class Restaurant</span><span class="site-heading-lower"><b>ABC</b> Restaurant</span></h1>'

const navEl = () => <div class="container"><a class="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html"><b>ABC</b> Restaurant</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mx-auto"><li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li><li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>${el}</ul></div></div>

headerRef && headerRef.insertAdjacentHTML('beforebegin', headerEl)
navRef && navRef.auth().onAuthStateChanged(user => {
    if(user) {
        navRef.insertAdjacentHTML('beforeend', navEl(<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="orders.html">Orders</a></li><li class="nav-item px-lg-4"><a class="nav-link text-uppercase" onclick="signout()">Logout</a></li>))
    } else {
        navRef.insertAdjacentHTML('beforeend', navEl('<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="login.html">Login</a></li>'))
    }
})

firebaseApp.auth()onAuthStateChanged(user => {
    if(user) {
        console.log('Logged in :', user)
    } else {
        console.log('Logged out')
    }
})