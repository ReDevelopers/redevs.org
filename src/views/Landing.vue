<template>
    <div>

        <div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3 text-white">Revolutionary Developers</h1>
                                <p class="lead  text-white">We are a group of developers who have a passion for Free Open-Source Software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fas fa-thumbs-up" type="primary" rounded class="mb-4" />

                                    <h6 class="text-primary text-uppercase">ReFlar Gamification</h6>
                                    <p class="description mt-3">Upvotes and downvotes for your Flarum community.</p>
                                    <div>
                                        <badge type="primary" rounded>reflar</badge>
                                        <badge type="primary" rounded>flarum</badge>
                                        <badge type="primary" rounded>gamification</badge>
                                    </div>
                                    <base-button tag="a" href="https://discuss.flarum.org/d/5588-gamification-by-reflar" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="far fa-smile" type="success" rounded class="mb-4" />

                                    <h6 class="text-success text-uppercase">ReFlar Reactions</h6>
                                    <p class="description mt-3">Reactions for Flarum.</p>
                                    <div>
                                        <badge type="success" rounded>reflar</badge>
                                        <badge type="success" rounded>flarum</badge>
                                        <badge type="success" rounded>reactions</badge>
                                    </div>
                                    <base-button tag="a" href="https://discuss.flarum.org/d/6542-reactions-by-reflar" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fas fa-signal" type="info" rounded class="mb-4" />

                                    <h6 class="text-info text-uppercase">ReFlar Polls</h6>
                                    <p class="description mt-3">A polls extension for your Flarum forum.</p>
                                    <div>
                                        <badge type="info" rounded>reflar</badge>
                                        <badge type="info" rounded>flarum</badge>
                                        <badge type="info" rounded>polls</badge>
                                    </div>
                                    <base-button tag="a" href="https://discuss.flarum.org/d/9762-poll" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <span id="branches"></span>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-md-6 order-md-2">
                        <img src="img/content/2.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-building" class="mb-5" size="lg" type="success" shadow rounded></icon>
                            <h3>Branches</h3>
                            <p>Not all developers are created equally. We develop on a variety of platforms.</p>
                            <ul class="list-unstyled mt-5">
                                <li>
                                    <card class="shadow-lg--hover mt-5">
                                        <div class="d-flex px-3">
                                            <div>
                                                <icon type="primary" shadow rounded>
                                                    <img v-lazy="'https://reflar.redevs.org/favicon.ico'" alt="ReFlar" style="width: 100%;">
                                                </icon>
                                            </div>
                                            <div class="pl-4">
                                                <h5 class="title text-primary">
                                                    <a href="https://reflar.redevs.org" target="_blank">
                                                        ReFlar
                                                    </a>
                                                </h5>
                                                <p>Creating Quality Flarum Extensions.</p>
                                            </div>
                                        </div>
                                    </card>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped overflow-hidden" id="team">
            <div class="shape shape-style-3 bg-gradient-info shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Meet the Squad</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" v-for="member in team" :key="member.name">
                        <card shadow>
                            <img v-lazy="`img/avatars/${member.avatar}`" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 150px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">{{ member.name }}</span>
                                    <small class="h6 text-muted">{{ member.role }}</small>
                                </h5>
                                <p class="description">{{ member.description }}</p>
                                <div class="mt-3">
                                    <base-button tag="a" :href="`https://github.com/${member.github}`" target="_blank" rel="noopener" type="warning" icon="fab fa-github" rounded icon-only></base-button>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section my-0 overflow-hidden" id="faq">
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3">Frequently Asked Questions</h2>
                        <p class="lead">You have questions, we have answers.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-6 py-2">
                        <h5 class="mt-3">Are You Recruiting?</h5>
                        <p class="mt-3">Yes we are! Please fill out 
                            <a href="/apply" target="_blank" rel="noopener">this form</a>
                            .
                        </p>
                    </div>
                    <div class="col-lg-6 py-2">
                        <h5 class="mt-3">I'd like something developed, how can I contact you?</h5>
                        <p class="mt-3">Please contact us on our
                            <a href="/discord">Discord server</a>
                            .
                        </p>
                    </div>
                    <div class="col-lg-6 py-2">
                        <h5 class="mt-3">You guys sound like cool people, can we chat?</h5>
                        <p class="mt-3">Of course! You can join our
                            <a href="/discord">public Discord server</a>.
                            We love talking to ethusiastic people like yourself!
                        </p>
                    </div>
                    <div class="col-lg-6 py-2">
                        <h5 class="mt-3">I don't know how to code. How can I contribute? </h5>
                        <p class="mt-3">
                            There are many ways you can help us improve our work. You can test our software and report bugs and request features to make it even better!
                            <br>
                            You can also donate if you feel like helping out financially :)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import team from '@/data/team.yml'

export default {
  name: "home",
  data: () => ({
      team
  }),
};
</script>
