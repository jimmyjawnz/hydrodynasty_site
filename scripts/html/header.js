$(document).ready(function() {

    $('header').html(`
      <nav class="horizontal">
            <a href="./index.html" class="item-logo"><img id="logo" src="./images/HydroDynasty-logo-wide.png" alt="HydroDynasty Logo" ></a>
            <ul>
                <a href="./index.html"><li id="home" class="item-normal">Home</li></a>
                <a href="./index.html"><li id="products" class="item-normal">Products</li></a>
                <a href="./about-us.html"><li id="about-us" class="item-normal">About Us</li></a>
            </ul>
            <ul class="right">
                <a href="./index.html" class="item-button"><li id="register">Register</li></a>
                <a href="./index.html" class="item-button"><li id="login">Login</li></a>
            </ul>
        </nav>
        <nav class="horizontal mobile">
            <a href="./index.html" class="item-logo"><img id="logo" src="./images/HydroDynasty-logo-wide.png" alt="HydroDynasty Logo" ></a>
            <ul id="dropdown">
                <a href="./index.html"><li id="home" class="item-normal">Home</li></a>
                <a href="./index.html"><li id="products" class="item-normal">Products</li></a>
                <a href="./about-us.html"><li id="about-us" class="item-normal">About Us</li></a>
            </ul>
            <ul>
                <a href="./index.html" class="item-button"><li id="register">Register</li></a>
                <a href="./index.html" class="item-button"><li id="login">Login</li></a>
            </ul>
            <ul class="right">
                <a class="item-button burger"><li id="burger-menu"><h1>☰</h1></li></a>
            </ul>
        </nav>
      `);


});