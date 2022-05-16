<template>
    <b-container class="d-flex justify-content-center align-items-center bg-login" fluid>
        <div class="row">
            <div class="d-flex form-container justify-content-between repon-sm">
                <b-col class="d-flex justify-content-center align-items-center">
                    <div class="box-img">
                        <img src="../assets/img/monitor.png" alt="monitor">
                    </div>
                </b-col>
                <b-col class="d-flex align-items-center" >
                    <b-form class="form-submit">
                        <p class="title-form d-flex justify-content-center" v-if="mode == 'login'">
                            Admin Login
                        </p>
                        <p class="title-form d-flex justify-content-center" v-else>
                            Forgot Password
                        </p>
                        <b-form-group class="box-input m-0">
                            <input type="email" placeholder="Email" />
                            <span class="icon">
                                <b-icon icon="person"></b-icon>
                            </span>
                        </b-form-group>
                        <b-form-group class="box-input m-0" v-if="mode == 'login'">
                            <input type="password" placeholder="Password" />
                            <span class="icon">
                                <b-icon icon="lock"></b-icon>
                            </span>
                        </b-form-group>
                        <b-form-checkbox class="m-2 check-rmb" v-if="mode == 'login'">
                            Remember password
                        </b-form-checkbox>
                          <b-form-group class="m-2 card__subtitle " v-else>
                            Please enter email
                        </b-form-group>

                        <b-form-group class="m-0">
                            <button class="btn-submit" v-if="mode == 'login'">
                                login
                            </button>
                             <button class="btn-submit" v-else>
                                resend password
                            </button>
                        </b-form-group>

                        <b-form-group class="m-0">
                            <p v-if="mode == 'login'"  @click="switchToForgot()" class="d-flex justify-content-center forgot">Forgot password</p>
                            <p v-else @click="switchToLogin()" class="d-flex justify-content-center forgot">Login now</p>
                        </b-form-group>
                    </b-form>
                </b-col>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                mode: 'login',
            }
        },
        methods: {
            switchToForgot: function () {
                this.mode = 'forgot'
            },
            switchToLogin: function () {
                this.mode = 'login'
            }
        }
    }
</script>

<style lang="scss" scoped>
    $background-auth: linear-gradient(72.8deg, #22C1C3 0%, #FDBB2D 99.49%);

    .bg-login {
        background: $background-auth;
        height: 100vh;
        @include screen(991) {
            & .repon-sm {
                flex-direction: column;
                width: 350px;
            }
        }

        & .form-container {
            background: #FFFFFF;
            border-radius: 10px;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            @include screen(991) {
                & .box-img {
                    margin: 50px auto !important;
                }
            }

            & .box-img {
                margin: 121px 120px;
     
                @include screen(991) {
                    &::before {
                        width: 200px !important;
                        height: 200px !important;
                    }

                    & img {
                        width: 140px !important;
                        height: 140px !important;
                    }
                }
                &::before {
                content: '';
                border-radius: 50%;
                background: $bg-img;
                width: 250px;
                height: 250px;
                position: absolute;
                z-index: -1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                }

                & img {
                    width: 180px;
                    height: 180px;
                }
            }

            & .form-submit {
                margin: 69px 72px 109px 72px;
                & .title-form {
                    font-size: 18px;
                    color: $text;
                    line-height: 41px;
                    margin-bottom: 26px;
                    font-weight: bold;
                }

                & .box-input {
                    position: relative;


                    & input {
                        width: 300px;
                        height: 54px;
                        padding-left: 79px;
                        border-radius: 50px;
                        outline: none;
                        border: none;
                        color: $text;
                        background: $bg-input;
                        position: relative;
                        margin-bottom: 10px;
                    }

                    & .icon {
                        position: absolute;
                        left: 0;
                        top: 0;
                        font-size: 24px;
                        color: $text;
                        transform: translate(30px, 9px);
                    }
                }

                & .check-rmb {
                    font-size: 14px;
                    font-style: italic;
                    color: $text;
                }

                & .card__subtitle {
                    font-size: 14px;
                    font-style: italic;
                    color: red;
                }

                & .btn-submit {
                    width: 300px;
                    height: 54px;
                    background: $bg-button;
                    color: #FFFFFF;
                    border-radius: 50px;
                    outline: none;
                    border: none;
                    margin-top: 12px;
                    margin-bottom: 15px;
                    text-transform: uppercase; 
                    font-weight: bold;
                }

                & .forgot {
                    font-size: 14px;
                    color: $text;
                    font-style: italic;
                    cursor: pointer;
                    
                    &:hover {
                        color: red;
                    }
                }

            }

            @include screen(991) {
                & .form-submit {
                    margin: 0 auto;
                }
            }
        }
        


    }

</style>