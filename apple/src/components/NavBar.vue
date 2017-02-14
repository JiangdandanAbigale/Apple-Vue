<template>
	<nav id='appleNav'>
		<ul id='appleNavUl'>
			<slot name='navbarIcon'></slot>
			<v-link v-for='href in navHrefs' :href='href'></v-link>	
			<slot name='navbarSearch'></slot>
			<slot name='navbarBag'></slot>	
		</ul>
	</nav>
</template>
<script>
	import VLink from './VLink.vue'

	export default {
	  data () {
	    return {
	      navHrefs: [
	        {link: '/Mac', title: 'Mac'},
	        {link: '/ipad', title: 'iPad'},
	        {link: '/iPhone', title: 'iPhone'},
	        {link: '/Watch', title: 'Watch'},
	        {link: '/Music', title: 'Music'},
	        {link: '/Support', title: 'Support'}
	      ]
	    }
	  },
	  components: {
	    VLink
	  }
	}

</script>
<style scoped lang='scss'>
	$navHeight:44px;
	#appleNavUl{
		width:auto;
		background: #000;
		padding:4px;
		height: $navHeight;
    	text-align: justify;
		margin:0;
		>li{
			display:inline-block;
			width:10%;
		}

	}	
	 
	 
	
</style>
