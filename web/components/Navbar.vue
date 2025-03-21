<template>
    <nav
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
            isScrolled
                ? 'bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-sm'
                : 'bg-transparent',
        ]"
    >
        <div class="container flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center space-x-2">
                <Icon
                    name="lucide:recycle"
                    class="text-waste2way-teal scale-150"
                />
                <span class="font-display font-bold text-xl">Waste2Way</span>
            </NuxtLink>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.name"
                    :to="item.path"
                    :class="[
                        'font-medium transition-colors hover:text-waste2way-teal relative',
                        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-waste2way-teal after:transition-all',
                        $route.path === item.path
                            ? 'text-waste2way-teal after:w-full'
                            : '',
                    ]"
                >
                    {{ item.name }}
                </NuxtLink>
                <NuxtLink to="/dashboard" class="btn-primary">
                    Get Started
                </NuxtLink>
            </div>

            <!-- Mobile Menu Button -->
            <button
                class="md:hidden text-2xl p-2"
                @click="mobileMenuOpen = !mobileMenuOpen"
            >
                <Icon v-if="mobileMenuOpen" name="lucide:x" />
                <Icon v-else name="lucide:menu" />
            </button>
        </div>

        <!-- Mobile Menu -->
        <Transition name="slide">
            <div
                v-if="mobileMenuOpen"
                class="fixed inset-0 z-40 bg-white/90 dark:bg-waste2way-dark/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden pt-20"
            >
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.name"
                    :to="item.path"
                    :class="[
                        'text-xl font-medium transition-colors hover:text-waste2way-teal',
                        $route.path === item.path ? 'text-waste2way-teal' : '',
                    ]"
                    @click="mobileMenuOpen = false"
                >
                    {{ item.name }}
                </NuxtLink>
                <NuxtLink
                    to="/dashboard"
                    class="btn-primary mt-4"
                    @click="mobileMenuOpen = false"
                >
                    Get Started
                </NuxtLink>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Community", path: "/community" },
];

// Handle scroll effect for navbar
onMounted(() => {
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 10;
    };

    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}
</style>
