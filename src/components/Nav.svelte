<script>
	let isOpen = false;
	export let segment;
	
	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<style>
	@media (min-width: 769px) {
		nav {
			border-bottom: solid gray 1px;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a rel="prefetch" class="navbar-item" href="/">
			<img src="logo.jpg" alt="virus"/>
		</a>

		<span 
			class="navbar-burger"
			aria-label="menu"
			class:is-active={isOpen}
			on:click={toggleNav}
			aria-expanded="false">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span>
	</div>

	<div class:is-active={isOpen} class="navbar-menu">
		<div class="navbar-start">
			<a 
				rel="prefetch"
				class="navbar-item" 
				href="/"
				class:is-active={segment === undefined}>
				Home
			</a>

			<a 
				rel="prefetch"
				class="navbar-item" 
				href="/about"
			   	class:is-active={segment === 'about'}>
				About
			</a>
		</div>
	</div>
</nav>
