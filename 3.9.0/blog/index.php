<!DOCTYPE html>
<html>
	<head>

		<!-- Basic -->
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title>Rich It Solution</title>

		<meta name="keywords" content="cloud, data science, big data, richit, storate" />
		<meta name="description" content="Rich IT Solution S.A. de C.V.">


		<!-- Favicon -->
		<link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon" />
		<link rel="apple-touch-icon" href="../img/apple-touch-icon.png">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Web Fonts  -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="../vendor/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="../vendor/fontawesome/css/font-awesome.css">
		<link rel="stylesheet" href="../vendor/owlcarousel/owl.carousel.min.css" media="screen">
		<link rel="stylesheet" href="../vendor/owlcarousel/owl.theme.default.min.css" media="screen">
		<link rel="stylesheet" href="../vendor/magnific-popup/magnific-popup.css" media="screen">

		<!-- Theme CSS -->
		<link rel="stylesheet" href="../css/theme.css">
		<link rel="stylesheet" href="../css/theme-elements.css">
		<link rel="stylesheet" href="../css/theme-blog.css">
		<link rel="stylesheet" href="../css/theme-shop.css">
		<link rel="stylesheet" href="../css/theme-animate.css">

		<!-- Skin CSS -->
		<link rel="stylesheet" href="../css/skins/default.css">

		<!-- Theme Custom CSS -->
		<link rel="stylesheet" href="../css/custom.css">

		<!-- Head Libs -->
		<script src="../vendor/modernizr/modernizr.js"></script>

		<!--[if IE]>
			<link rel="stylesheet" href="css/ie.css">
		<![endif]-->

		<!--[if lte IE 8]>
			<script src="vendor/respond/respond.js"></script>
			<script src="vendor/excanvas/excanvas.js"></script>
		<![endif]-->

	</head>
	<body>

		<div class="body">
			<header id="header">
				<div class="container">
					<div class="logo">
						<a href="../index.html">
							<img alt="Porto" width="222" height="108" data-sticky-width="164" data-sticky-height="80" src="../img/logo.png">
						</a>
					</div>
					<!--div class="search">
						<form id="searchForm" action="http://preview.oklerthemes.com/porto/3.9.0/page-search-results.html" method="get">
							<div class="input-group">
								<input type="text" class="form-control search" name="q" id="q" placeholder="Search..." required>
								<span class="input-group-btn">
									<button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
								</span>
							</div>
						</form>
					</div-->
					<nav class="nav-top">
						<ul class="nav nav-pills nav-top">
                            <li>
								<a href="#"><i class="fa fa-angle-right"></i>Español</a>
							</li>
                            <!--
							<li class="phone">
								<span><i class="fa"></i>Inglés</span>
							</li> -->
						</ul>
					</nav>
					<button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
						<i class="fa fa-bars"></i>
					</button>
				</div>
				<div class="navbar-collapse nav-main-collapse collapse">
					<div class="container">
						<ul class="social-icons">
							<li class="facebook"><a href="http://www.facebook.com/richitsolution" target="_blank" title="Facebook">Facebook</a></li>
							<li class="twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter">Twitter</a></li>
							<li class="linkedin"><a href="https://www.linkedin.com/company/rich-it-solution-sa-de-cv" target="_blank" title="Linkedin">Linkedin</a></li>
						</ul>
						<nav class="nav-main mega-menu">
							<ul class="nav nav-pills nav-main" id="mainMenu">
								<li class="dropdown">
									<a href="../index.html">
										Home
									</a>

								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" href="../nosotros/index.html">
										Nosotros
									</a>

									<ul class="dropdown-menu">
										<li class="dropdown-submenu">
											<a href="/pdf/Brochure_Richit.pdf" target="_blank">Brochure</a>
                                        </li>
                                        <li class="dropdown-submenu">
											<a href="../nosotros/certificaciones/index.html">Certificaciones</a>
										</li>
                                        <li class="dropdown-submenu">
											<a href="../nosotros/desarrollo/index.html">Desarrollo</a>
										</li>
									</ul>
								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" href="../servicios/index.html">
										Servicios
									</a>

									<ul class="dropdown-menu">
										<li class="dropdown-submenu">
											<a href="../servicios/data-science/index.html">Data Science as a Service</a>

										</li>
										<li class="dropdown-submenu">
											<a href="../servicios/data-governance/index.html">Data Governance</a>

										</li>
										<li class="dropdown-submenu">
											<a href="../servicios/managed-services/index.html">Managed Services</a>

										</li>
									</ul>
								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" href="/contacto/index.html">
										Contacto
									</a>
									<ul class="dropdown-menu">
										<li><a href="/contacto/careers/index.html">Careers</a></li>

									</ul>
								</li>
								<li class="dropdown active">
									<a href="/blog/index.php">
										Blog
									</a>

								</li>



							</ul>
						</nav>
					</div>
				</div>
			</header>

			<div role="main" class="main">

				<section class="page-header">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<ul class="breadcrumb">
									<li><a href="/index.html">Home</a></li>
									<li class="active">Blog</li>
								</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<h1>Blog</h1>
							</div>
						</div>
					</div>
				</section>

				<div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">                            
                            <?php
                                setlocale(LC_TIME,"es_MX.UTF-8");
                                $doc = new DOMDocument();
                                $doc->load('https://richitsolution.wordpress.com/feed/');
                                $items = $doc->getElementsByTagName('item');
                                $num_articulos = 1;
                                $max_articulos = 10;

                                $pre = '<div class="row">
                                            <div class="col-md-3">
                                                <span class="img-thumbnail">';
                                $mid =         '</span>
                                            </div>
                                            <div class="col-md-9">';
                                $post = '    </div>
                                        </div>';


                                foreach($items as $item) {

                                    $title = $item->getElementsByTagName('title')->item(0)->nodeValue;
                                    $description = $item->getElementsByTagName('description')->item(0)->nodeValue;
                                    $link = $item->getElementsByTagName('link')->item(0)->nodeValue;
                                    $category = $item->getElementsByTagName('category')->item(0)->nodeValue;
                                    $image = $item->getElementsByTagName('encoded')->item(0)->nodeValue;
                                    $date = $item->getElementsByTagName('pubDate')->item(0)->nodeValue;

                                    echo $pre;
                                    echo '<img class="img-responsive" '.findImageUrl(findImageTag($image)).'>';
                                    echo $mid;
                                    echo '<h2 class="mb-none">'.$title.'</h2>';
                                    echo '<h4 class="heading-primary">'.$category.'</h4>';
                                    echo '<hr class="solid">';
                                    echo '<p>'.$description.'<br><a href="'.$link.'">Continuar leyendo</a>';
                                    echo '<br>'.strftime('%A %d de %B del %Y', strtotime($date)).'</p><br>';
                                    echo $post;
                                    $num_articulos++;
                                    if($num_articulos > $max_articulos) break;
                                }

                                function findImageTag($text, $offset=0) {
                                    $pattern = '/<img(.*?)(src=(")(.*?).(bmp|gif|jpeg|jpg|png)(.*?)("))(.*?)>/i';
                                    if(preg_match_all($pattern, $text, $matches_out)){
                                        return $matches_out[0][0];
                                    }                                   
                                    return 0;
                                }

                                function findImageUrl($text) {
                                    $pattern = '/(src=(")(.*?).(bmp|gif|jpeg|jpg|png)(.*?)("))/i';
                                    if(preg_match_all($pattern, $text, $matches_out)){
                                        return $matches_out[0][0];
                                    }
                                    return 0;
                                }
                            ?>
                        </div>                        
                    </div>                    
                </div>

			<footer class="short" id="footer">
				<div class="container">
					<div class="row">
                            
						<div class="col-md-6  col-lg-6  col-sm-6">
                            <h4 class="mb-sm mt-sm"><strong>Trabaja</strong> con nosotros</h4>
                            <a href="contacto/careers/index.html">Más información</a>
                            
                            <br />
                            <br />
							<!-- <h5 class="mb-sm">Contactanos</h5> -->
                            <h4 class="mb-sm mt-sm"><strong>Contáctanos</strong></h4>
							<!-- <span class="phone">01 (55) 6718-1818</span> -->


							<ul class="list list-icons mt-xl">
								<!-- <li>
                                    <i class="fa fa-map-marker"></i>
                                    Cerro San Francisco 357, Col. Campestre Churubusco, Del. Coyoacán, México D.F.
                                </li>  -->
								<li><i class="fa fa-envelope"></i> <strong>E-mail:</strong> <a href="mailto:mail@example.com">contacto@richit.com.mx</a></li>
							</ul>
							<div class="social-icons mt-xl">
								<ul class="social-icons">
									<li class="facebook"><a href="http://www.facebook.com/richitsolution" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</a></li>
									<li class="twitter"><a href="http://www.twitter.com/" target="_blank" data-placement="bottom" data-tooltip title="Twitter">Twitter</a></li>
									<li class="linkedin"><a href="https://www.linkedin.com/company/rich-it-solution-sa-de-cv" target="_blank" data-placement="bottom" data-tooltip title="Linkedin">Linkedin</a></li>
								</ul>
							</div>
						</div>
                        
                        
						<div style="margin-bottom:0px;" class="col-md-6 col-lg-6 col-sm-6">
							<!-- <h4 class="heading-primary">Latest Tweets</h4> -->
							<div class="alert alert-success hidden" id="contactSuccess">
								<strong>Gracias!</strong> Tu mensaje ha sido enviado.
							</div>

							<div class="alert alert-danger hidden" id="contactError">
								<strong>Error!</strong> Ocurrió un error al enviar tu mensaje.
							</div>

							<h4 class="mb-sm mt-sm"><strong>Envíanos</strong> un mensaje</h4>
							<form id="contactForm" action="/php/contact-form.php" method="POST">
								<div class="row">
									<div class="form-group">
										<div class="col-md-6">
											<input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" id="name" placeholder="*Nombre"  required>
										</div>
										<div class="col-md-6">
											<input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Introduzca una dirección de correo válida" maxlength="100" class="form-control" name="email" id="email" placeholder="*Email" required>
			</div>
									</div>
								</div>
								<div class="row">
									<div class="form-group">
										<div class="col-md-12">
											<input type="text" value="" data-msg-required="Introduzca un asunto." maxlength="100" class="form-control" name="subject" id="subject"  placeholder="Asunto" required>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="form-group">
										<div class="col-md-12">
											<textarea maxlength="5000" data-msg-required="Escriba su mensaje." rows="5" class="form-control" name="message" id="message" placeholder="*Mensaje" required></textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div style="margin-bottom:0px;" class="col-md-12 text-center">
										<input type="submit" value="Enviar" class="btn btn-primary btn-lg" data-loading-text="Cargando...">
									</div>
								</div>
							</form>
                            
						</div>
					</div>
				</div>
			<div class="footer-copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-1">
								<a href="/index.html" class="logo">
									<img alt="Porto Website Template" class="img-responsive" src="/img/logo-footer-small.png">
								</a>
							</div>
							<div class="col-md-11">
								<p>© Copyright 2015. Todos los Derechos Reservados. Rich IT. </p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<!-- Vendor -->
		<!--[if lt IE 9]>
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
		<![endif]-->
		<!--[if gte IE 9]><!-->
		<script src="../vendor/jquery/jquery.js"></script>
		<!--<![endif]-->
		<script src="../vendor/jquery.appear/jquery.appear.js"></script>
		<script src="../vendor/jquery.easing/jquery.easing.js"></script>
		<script src="../vendor/jquery-cookie/jquery-cookie.js"></script>
		<script src="../master/style-switcher/style.switcher.js"></script>
		<script src="../vendor/bootstrap/bootstrap.js"></script>
		<script src="../vendor/common/common.js"></script>
		<script src="../vendor/jquery.stellar/jquery.stellar.js"></script>
		<script src="../vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.js"></script>
		<script src="../vendor/jquery.gmap/jquery.gmap.js"></script>
		<script src="../vendor/isotope/jquery.isotope.js"></script>
		<script src="../vendor/owlcarousel/owl.carousel.js"></script>
		<script src="../vendor/jflickrfeed/jflickrfeed.js"></script>
		<script src="../vendor/magnific-popup/jquery.magnific-popup.js"></script>
		<script src="../vendor/vide/vide.js"></script>

		<!-- Theme Base, Components and Settings -->
		<script src="../js/theme.js"></script>

		<!-- Theme Custom -->
		<script src="../js/custom.js"></script>

		<!-- Theme Initialization Files -->
		<script src="../js/theme.init.js"></script>

		<script type="text/javascript">

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-42715764-5']);
			_gaq.push(['_trackPageview']);

			(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();

		</script>

	</body>
</html>