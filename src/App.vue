<template>
    <div id="app">
        <AppHeader />
        <Landing />
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import Landing from '@/views/Landing';

export default {
  components: {
    AppHeader, AppFooter,
    Landing
  }
};
</script>
