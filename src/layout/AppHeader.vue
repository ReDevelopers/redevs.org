<template>
    <headroom>
        <header class="header-global">
            <base-nav class="navbar-main" transparent type="" expand>
                <a slot="brand" class="navbar-brand mr-lg-5" to="/">
                    <img src="img/brand/white.png" alt="logo">
                </a>

                <div class="row" slot="content-header" slot-scope="{closeMenu}">
                    <div class="col-6 collapse-brand">
                        <a href="/">
                            <img src="img/brand/red.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <close-button @click="closeMenu"></close-button>
                    </div>
                </div>

                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#branches" v-scroll-to="'#branches'">
                            <span class="nav-link-inner--text">Branches</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team" v-scroll-to="'#team'">
                            <span class="nav-link-inner--text">Team</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faq" v-scroll-to="'#faq'">
                            <span class="nav-link-inner--text">FAQ</span>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="/discord" target="_blank" rel="noopener" data-toggle="tooltip">
                            <i class="fab fa-discord"></i>
                            <span class="nav-link-inner--text d-lg-none">Discord</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="/github" target="_blank" rel="noopener" data-toggle="tooltip">
                            <i class="fab fa-github"></i>
                            <span class="nav-link-inner--text d-lg-none">Github</span>
                        </a>
                    </li>
                    <li class="nav-item d-none d-lg-block ml-lg-4">
                        <a href="/donate" target="_blank" rel="noopener" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                                <i class="fas fa-dollar-sign mr-2"></i>
                            </span>
                            <span class="nav-link-inner--text">Donate</span>
                        </a>
                    </li>
                </ul>
            </base-nav>
        </header>
    </headroom>
</template>
<script>
import { headroom } from 'vue-headroom'

import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
        headroom,

        BaseNav,
        CloseButton,
        BaseDropdown
  }
};
</script>
<style>
</style>
