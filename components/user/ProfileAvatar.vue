<template lang="pug">
  v-avatar(:color="color" :size="size")
    b.white--text.text-uppercase.disable-select(v-if="(alt && userImgError) || !image" :style="`font-size:${size <= 30 ? 13 : size / 3}px;font-weight:900`")
      //- acronym
      | {{ acronym }}
    img(v-else="" :width="size" :height="size" :src="getProfileImage(image)" :class="className" :alt="alt || 'profile'" @error="returnAcronym")
</template>

<script>
export default {
	name: "profile-image",
	props: {
		image: {
			type: String,
			default: "",
		},
		className: {
			type: String,
			default: "",
		},
		alt: {
			type: String,
			default: "",
		},
		size: {
			type: [Number, String],
			default: 50,
		},
    color: {
			type: String,
			default: "primary",
		},
	},
	data() {
		return {
			userImgError: false,
		};
	},
	methods: {
		getProfileImage(image) {
			return image;
		},
		returnAcronym() {
			this.userImgError = true;
		},
	},
	computed: {
		acronym() {
			let acronym = "";
			try {
				acronym = this.alt.match(/\b\w/g).join("").substring(0, 2);
			} catch (e) {
				acronym = "";
			}
			return acronym;
		},
	},
};
</script>
