<script>
export default {
    watch: {
        reset() {
            this.resetBullets();
        },
    },

    mounted() {
        this.resetBullets();
        this.startAppearingBullets();
    },
};
</script>
