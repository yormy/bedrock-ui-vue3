<template>
    <div class="y-content">
        <div id="y-page-loader" class="y-page-loader">
            <!-- flex container -->
            <div class="header flex-row">
                <!--                        <div class="brand&#45;&#45;name">Bedrock</div>-->
                <img
                    class="brand--logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
                    alt="logo"
                />
                <div class="section--title">Login</div>
                <div class="spin"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.y-page-loader {
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    align-items: center; /* align items horizontally, in this case */
    height: 100%;

    background-color: white;

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);

    .brand--name {
        font-size: 2rem;
        text-align: center;
    }

    .section--title {
        margin-top: 10px;
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }

    .section--subtitle {
        margin-top: 10px;
        font-size: 1rem;
        text-align: center;
    }

    img.brand--logo {
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        vertical-align: middle;
    }

    .spin {
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid blue;
        border-bottom: 8px solid blue;
        width: 60px;
        height: 60px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
