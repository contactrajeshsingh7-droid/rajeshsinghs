<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar Example</title>
    <link rel="stylesheet" href="Accounting.css">
    <script src="Accounting javascript.js"></script>

<style>
  body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #ffffff;
  color: #333;
}


:root {
            --navbar-bg-start: #D7E6FF;
            --navbar-bg-end: #D7E6FF;
            --primary-color: #007bff;
            --button-bg-start: #007bff;
            --button-bg-end: #0056b3;
            --text-color: #333;
        }

        body {
          
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f0f0;
        }

        .navbar-container {
            width: 99%;
            background: linear-gradient(to right, var(--navbar-bg-start), var(--navbar-bg-end));
            box-shadow: 0 5px 15px rgba(0, 123, 255, 0.1);
            border-radius: 30px;
            position: center;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center; 
            z-index: 1000;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1200px; 
            height: 110px; 
        }

        .logo-container .logo {
            max-height: 75x; 
            width: auto;
            display: block;
        }

        .nav-links {
            list-style: none;
            display: flex;
            justify-content: center;
        }

        .nav-links li a {
            text-decoration: none;
            color: var(--text-color);
            margin: 0 25px;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links li a:hover {
            color: var(--primary-color);
        }

        .schedule-btn {
            background: linear-gradient(to right, var(--button-bg-start), var(--button-bg-end));
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
        }

        .schedule-btn:hover {
            transform: translateY(-2px);
        }

        .content-padding {
            padding-top: 30px;
            text-align: center;
        }
        body {
    font-family: 'Poppins', sans-serif;
    margin: 0px;
    padding: 0px;
    background-color: #ffffff;
    color: #333;
    line-height: 1.6;
}

.welcome-text {
    display: block;
    margin-bottom: 0px;
    font-size: 0.9rem;
    color: #666;
    
}

.firm-name {
    font-weight: 700;
    color: #ffffff; 
    background-color:#007bff;
}

.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%; 
    max-width: 1400px;
    margin: auto;
}

.hero-left {
    flex: 2;
    max-width: 600px;
}

.hero-left h1 {
    font-family: 'Lora', serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 5px;
}

.hero-left p {
    margin-bottom: 20px;
    color: #555;
    font-size: 1rem;
}

.video-preview {
    position: relative;
    width: 500px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 20px;
}

.video-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Play button center me */
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    transition: 0.3s ease;
}

/* Hover effect */
.video-preview:hover .play-button {
    background-color: #007bff;
    transform: translate(-50%, -50%) scale(1.1);
}


.blue-box {
  position: absolute;
  bottom: 0px;
  left: px;
  background-color: #1e6bff;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
}

.hero-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    position: relative;
}

.main-image-card img {
    max-width: 750px;
    border-radius: 15px;
    height: auto;
    display: block;
}

.sidebar-card {
    background-color: #e3f2fd;
    border-radius: 15px;
    padding: 20px;
    width: 250px;
    position: absolute;
    right: -20px;
    top: -20px;
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.1);
}



.add-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-left: 20px;
}

.cta-box h4 {
    margin: 0 0 10px 0;
    font-size: 1rem;
}

.cta-box a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
}

/* मोबाइल रिस्पॉन्सिवनेस के लिए */
@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
    }

    .hero-left, .hero-right {
        max-width: 100%;
    }
    
    .hero-right {
        margin-top: 40px;
        flex-direction: column;
        align-items: center;
    }

    .main-image-card img {
        max-width: 100%;
    }

    .sidebar-card {
        position: static;
        width: 100%;
        margin-top: 20px;
    }
}


                                                                        /*  */
* {
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #dbe9ff;
  padding: 30px;
}

.logo-bar {
  background: #dbe9ff;
  padding: 18px 0;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  
}

/* Moving container */
.logo-track {
  display: flex;
  align-items: center;
  gap: 50px;
  width: max-content;
  animation: marquee 20s linear infinite;
}

/* Pause animation on hover */
.logo-bar:hover .logo-track {
  animation-play-state: paused;
}

/* Logo styling */
.logo-track img {
  height: 50px;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

/* Hover effect */
.logo-track img:hover {
  transform: scale(1.15);
}

/* Smooth infinite marquee */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
  transform: translateX(-50%);
  }
}

/* Main Layout */
.container {
  display: flex;
  gap: 30px;
    margin-top: 20px;

}

/* Left Card */
.left-card {
  background: #dbe9ff;
  border-radius: 20px;
  width: 45%;
  padding: 30px;
}
.left-card img {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
}

.card-content h3 {
  margin-bottom: 0px;
}

/* Right Content */
.right-content {
  width: 80%;
}

.badge {
  background: #1e6bff;
  color: #dbe9ff;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 12px;
}

.right-content h1 {
  margin: 120px 80;
  font-size: 36px;
}

.right-content p {
  color: #555;
  margin-bottom: 30px;
}

.info-box {
  background: #dbe9ff;
  padding: 24px;
  border-radius: 16px;

  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #2563eb; /* 🔵 BLUE */
  flex-shrink: 0;
}

.icon-box img {
  width: 50px;
  height: 45px;
  object-fit: contain;
  filter: brightness(0) invert(1); /* white icon */
}

.content h4 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #1f2937;
}

.content p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #374151;
}


/* Button */
.btn {
    margin-top: 50px;
  display: inline-block;
  background: #1e6bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
}

body {
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  padding: 40px;
}

.stats-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #dbe9ff;
  border-radius: 12px;
  padding: 30px 20px;
  max-width: 1400px;
  margin: auto;
  margin-top: 20px;
}

.stat-box {
  text-align: center;
  flex: 1;
  opacity: 0;
  transform: translateY(20px);
}

.stat-box h2 {
  font-size: 36px;
  margin: 0;
  color: #000;
}

.stat-box p {
  margin-top: 6px;
  font-size: 14px;
  color: #555;
}

.divider {
  width: 1px;
  height: 50px;
  background-color: #bbb;
}


                                                                       /* Real Accounting Services For You*/

 * {
    margin: 1px;
    padding: 5px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}


/* SECTION */
.services-section {
    padding: 50px 0px;
}

/* MAIN GRID */
.services-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0px;
    align-items: center;
}

/* LEFT CONTENT */
.services-left span {
    font-size: 14px;
    font-weight: 600;
}

.services-left span b {
    background: #2f6df6;
    color: #fff;
    padding: 4px 4px;
    border-radius: 4px;
}

.services-left h1 {
    font-size: 44px;
    margin: 0px 0;
    line-height: 1.2;
}

.services-left p {
    font-size: 15px;
    color: #555;
    max-width: 480px;
    line-height: 1.6;
}

.services-left a {
    display: inline-block;
    margin-top: 20px;
    background: #2f6df6;
    color: #fff;
    padding: 12px 28px;
    border-radius: 40px;
    text-decoration: none;
    font-size: 14px;
}









.service-card {
    background: #dbe9ff;
    border-radius: 16px;
    padding: 10px;
    display: flex;
    gap: 10px;
    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

/* Hover animation */
.service-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 30px rgba(47, 109, 246, 0.3);
    background: #cfe0ff;
}

/* Click animation */
.service-card.active {
    transform: scale(0.96);
    background: #bcd4ff;
}
body {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><circle cx='8' cy='8' r='6' fill='%232f6df6'/></svg>") 8 8, auto;
}

.service-card:hover {
    cursor: pointer;
}









/* RIGHT CARDS */
.services-right {
    display:grid;
    grid-template-columns: repeat(2, 420px);
    gap: 30px;
}

.service-card {
    background: #dbe9ff;
    border-radius: 16px;
    padding: 10px;
    display: flex;
    gap: 10px;
}

.service-icon {
    min-width: 68px;
    height: 60px;
    background: #2f6df6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content:left ;
}

.service-icon img {
    width: 50px;
    filter: brightness(0) invert(1);
}

.service-card h3 {
    font-size: 16px;
    margin-bottom: 0px;
}

.service-card p {
    font-size: 13px;
    color: #555;
    line-height: 1.5;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .services-container {
        grid-template-columns: 1fr;
    }

    .services-right {
        grid-template-columns: 1fr;
    }
}                                                                      
                                                                       /* Check Out The Easy Way To Get Our Services*/

 body {
  font-family: Arial, sans-serif;
  background: #ffffff;
  padding: 40px;
}

.how-it-works {
  background: #dbe9ff;
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  max-width: 1400px;
  margin: auto;
}

.badge {
  display: inline-block;
  background: #1e88ff;
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 15px;
}

.how-it-works h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

.subtitle {
  max-width: 850px;
  margin: auto;
  font-size: 15px;
  color: #555;
}

.cards {
  display: flex;
  gap: 25px;
  margin-top: 50px;
}

.card {
  background: #ffffff;
  border-radius: 18px;
  padding: 30px;
  text-align: left;
  flex: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.card.active {
  background: #4a86e8;
  color: #fff;
}

.card.active p {
  color: #e6e6e6;
}

.icon {
  font-size: 30px;
  background: #ffffff;
  color: #4a86e8;
  width: 55px;
  height: 55px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card {
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}

.card.active {
  background: #4a86e8;
  color: #fff;
}

.card.active p {
  color: #e6e6e6;
}

.card.zoom {
  animation: zoomClick 0.35s ease;
}

@keyframes zoomClick {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}

                                                                       /* Contact*/


.xft-brand .xft-logo {
  width: 160px;        /* change as needed */
  height: auto;        /* ratio safe */
  padding: 16px 20px;  /* white box space */
  background-color: #ffffff;
  border-radius: 14px;
  display: inline-block;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
}
/* FOOTER */
.xantrip-footer {
  background: #4a86e8;
  padding: 60px 40px;
  border-radius: 40px 40px 0 0;
  margin: 0;              /* no bottom/left/right margin */
  width: 100%;

}

/* CONTAINER */
.xantrip-footer .xft-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;         /* center content only */
}

/* TEXT */
.xantrip-footer h4 {
  margin-bottom: 16px;
  font-size: 18px;
}

.xantrip-footer p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.6;
}

.xantrip-footer a {
  display: block;
  margin-bottom: 0px;
  color: #eaf1ff;
  text-decoration: none;
  font-size: 14px;
}

.xantrip-footer a:hover {
  text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .xantrip-footer .xft-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .xantrip-footer {
    padding: 0px 0px;
  }

  .xantrip-footer .xft-container {
    grid-template-columns: 1fr;
  }
}
.xantrip-footer {
  background: #4a86e8;
  padding: 60px 40px;
  border-radius: 40px 40px 0 0;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
/* COPYRIGHT BAR */
.xft-copyright {
  background-color: #3f78db;   /* footer se thoda dark */
  color: #eaf1ff;
  text-align: center;
  font-size: 14px;
  padding: 18px 12px;
  line-height: 1.6;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

/* SECOND LINE */
.xft-copyright span {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  opacity: 0.85;
}
body {
  margin: 0;
  padding-bottom: 0 !important;
}

/* */


</style>
</head>
<body>
                                                                  <!--- Header-->

    <header class="navbar-container">
        <nav class="navbar">
            <div class="logo-container">
                <img src="Modern X letter Logo.png" alt="Logo" class="logo">
            </div>
            
            <ul class="nav-links">
                <li><a href="Accounting Website.html">Home</a></li>
                <li><a href="Accounting About Page.html">About</a></li>
                <li><a href="Accounting Services.html">Services</a></li>
                <li><a href="Accounting Contact.html">Contact</a></li>
            </ul>

<a href="https://calendar.app.google/QCqNA3vGTCT48HdYA" target="_blank">
  <button class="schedule-btn">Schedule a Meeting</button>
</a>
        </nav>
    </header>

                                                                  <!--- Home Page-->
 

    <main class="hero-section">
        <div class="hero-left">
            <span class="welcome-text">Welcome To <span class="firm-name">Xantrip</span> Accounting Firm</span>
            <h1>We Specialize <br> Accounting & <br> Financial</h1>
            <p>
                We specialize in accounting and financial services, delivering accurate reporting, strategic insights, compliance support, and tailored solutions that help businesses grow confidently.
            </p>
      <div class="video-preview"
     onclick="window.open('Accounting Video.mp4', '_blank')">

    <img src="thumbnail.jpeg" >

    <div class="play-button">▶</div>

  <div class="blue-box">Accounting That<br>Empowers Growth</div>
        </div></div>


        <div class="hero-right">
            <div class="main-image-card">
                <img src="Home Page.png" alt="Professional Woman"> 
         
            </div>
    </main>
                                                                                <!-- Logos Bar -->

    <!-- Logos Bar -->
<div class="logo-bar">
  <div class="logo-track">
    <img src="Xero.png">
    <img src="QuickBooks.png">
    <img src="Sage.png">
    <img src="FreshBooks.png">
    <img src="zoho Books.png">
    <img src="Calendly.png">

    <!-- Duplicate logos for smooth loop -->
     <img src="Xero.png">
    <img src="QuickBooks.png">
    <img src="Sage.png">
    <img src="FreshBooks.png">
    <img src="zoho Books.png">
    <img src="Calendly.png">
    </div>
</div>

<!-- Main Section -->
<div class="container">

  <!-- Left Card -->
  <div class="left-card">
    <img src="Meeting image.jpg" alt="Meeting">
    <div class="card-content">
      <h3>Financial Planning</h3>
      <p>
       Financial planning services designed to secure your future through 
       smart strategies, risk management, and long-term wealth growth.
    </div>
  </div>

  <!-- Right Content -->
  <div class="right-content">
    <span class="badge">Who We Are?</span>
    <h1>Your Financial Partner For Success</h1>
    <p>
     As your trusted financial partner, we are committed to guiding you toward lasting success.
      From personalized investment strategies to risk management and retirement planning, we 
      provide expert advice tailored to your goals. Our approach focuses on growing and protecting
       your wealth while ensuring financial security. With us by your side, you can make confident 
       decisions, achieve your dreams, and build a prosperous future.
    </p>

    <div class="info-box">
  <div class="icon-box">
    <img src="Cost Effective.png" alt="Cost Effective">
  </div>

  <div class="content">
    <h4>Cost - Effective</h4>
    <p>
      Cost-effective solutions help you achieve more without overspending. 
      We focus on smart planning, efficient processes, and transparent pricing 
      to deliver maximum value. Our approach reduces unnecessary costs, improves
       accuracy, and supports sustainable growth. You get reliable results, expert 
       guidance, and measurable savings, all while maintaining quality, 
       compliance, and long-term financial stability for modern businesses 
       across industries and changing market conditions.

    </p>
  </div>
</div>

    <a href="#" class="btn">Learn More</a>
  </div>

</div>

<!-- Stats -->

  <div class="stats-container">
  <div class="stat-box">
    <h2 data-target="15">0</h2>
    <p>Years Of Experience</p>
  </div>

  <div class="divider"></div>

  <div class="stat-box">
    <h2 data-target="45">0</h2>
    <p>Team Member</p>
  </div>

  <div class="divider"></div>

  <div class="stat-box">
    <h2 data-target="500">0</h2>
    <p>Project Complete</p>
  </div>
</div>
                                                                       <!--Real Accounting Services For You---> 


   <section class="services-section">
    <div class="services-container">

        <!-- LEFT -->
        <div class="services-left">
            <span>We Have An Amazing <b>Services</b></span>

            <h1>Real Accounting<br>Services For You</h1>

            <p>
                Real accounting services for you, delivering accurate reporting,
                expert guidance, and dependable financial support tailored to
                your business needs.
            </p>

            <a href="#">Learn More</a>
        </div>

        <!-- RIGHT -->
        <div class="services-right">

           <div class="service-card">
    <div class="service-icon">
        <img src="Taxes.png" alt="">
    </div>
    <div>
        <h3>Tax Planning</h3>
        <p>
            Tax planning strategies designed to minimize liabilities,
            maximize savings, and ensure long-term financial compliance.
        </p>
    </div>
</div>

            <div class="service-card">
                <div class="service-icon">
                    <img src="Payroll.png" alt="">
                </div>
                <div>
                    <h3>Payroll Process</h3>
                    <p>
                        Payroll process solutions ensuring accurate, timely payments,
                        compliance, and seamless employee compensation management.
                    </p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <img src="audit.png" alt="">
                </div>
                <div>
                    <h3>Audit Services</h3>
                    <p>
                        Audit services delivering accuracy, transparency,
                        compliance, and trusted financial assurance for your business.
                    </p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <img src="Financial.png" alt="">
                </div>
                <div>
                    <h3>Finance Analysis</h3>
                    <p>
                        Financial analysis providing insights, performance evaluation,
                        informed decisions, and strategic growth opportunities.
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>    

                                                                       <!--Check Out The Easy Way To Get Our Services---> 


<section class="how-it-works">
  <span class="badge">How It Works?</span>

  <h2>Check Out The Easy Way To Get<br>Our Services</h2>

  <p class="subtitle">
    Discover the easiest way to access our services today. Simple steps, fast results,
    expert support, transparent pricing, and reliable solutions designed to save you time
    and deliver real value consistently.
  </p>

  <div class="cards">
    <div class="card">
      <div class="icon">💬</div>
      <h3>Consultation Section</h3>
      <p>
        Book a free consultation to discuss your goals, challenges, and receive expert
        guidance tailored to your specific needs.
      </p>
    </div>

    <div class="card active">
      <div class="icon">📦</div>
      <h3>Choose Your Package</h3>
      <p>
        Select the perfect package for you. Compare features, benefits, and pricing to find
        the solution that best fits your needs.
      </p>
    </div>

    <div class="card">
      <div class="icon">🚀</div>
      <h3>Get Your Services</h3>
      <p>
        Get your services quickly and easily. Enjoy professional support, customized
        solutions, and seamless delivery designed to meet your needs efficiently.
      </p>
    </div>
  </div>
</section>
<br>
<br>

                                                                       <!--contact---> 


 <footer class="xantrip-footer">
  <div class="xft-container">

    <div class="xft-brand">
  <img class="xft-logo" src="footer logo.png" alt="Xantrip Logo">
  <p>
    Find your destination and begin a journey worth remembering.
  </p>
</div>


    <div class="xft-links">
      <h4>Useful Links</h4>
      <a href="Accounting About Page.html">About Us</a>
      <a href="#">Careers</a>
      <a href="#">News & Articles</a>
      <a href="#">Legal Notice</a>
    </div>

    <div class="xft-support">
      <h4>Support</h4>
      <a href="#">Help Center</a>
      <a href="#">Contact Us</a>
      <a href="#">Payment Center</a>
      <a href="#">Parent Community</a>
    </div>

    <div class="xft-contact">
      <h4>Contact Information</h4>
      <p>Vivekananda Nagar, Bhilwara Rajasthan</p>
      <p>+91 222 465 4615, +91 562 356 6385</p>
      <p>info@rajesh.com</p>
    </div>

  </div>
</footer>

<div class="xft-copyright">
  © 2026 <strong>Xantrip</strong>. All Rights Reserved.
  <span>Designed & Developed by Rajesh Singh</span>
</div>




</body>
</html>
                                                    


