<template>
	<li> 
		<router-link :to='href.link'>
			{{href.title}}
		</router-link>
	</li>	
</template>

<script>
	export default{
	  props: {
	    href: {
	      type: Object,
	      required: true
	    }
	  }
	}
</script>
<style scoped>
a{
	color:#fff;
	height:44px;
	font-size:14px;
	font-weight: bold;
	line-height:44px;
	text-align:center;
	display: block;
	text-decoration: none;
}
a:hover{
	color:#ccc;
	text-decoration: none;
}	
</style>
