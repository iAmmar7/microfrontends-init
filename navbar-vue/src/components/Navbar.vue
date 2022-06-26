<template>
  <div>
    <nav
      class="h-14 flex items-center justify-between px-6 bg-primary text-white font-medium"
    >
      <div>
        <ul class="flex items-center justify-between gap-x-4">
          <li>
            <router-link
              to="/home"
              class="hover:text-danger transition duration-300"
              active-class="text-danger"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/auth"
              class="hover:text-danger transition duration-300"
              active-class="text-danger"
              >Auth</router-link
            >
          </li>
          <li>
            <router-link
              to="/attendance"
              class="hover:text-danger transition duration-300"
              active-class="text-danger"
              >Attendance</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <ul
          class="flex items-center justify-between hover:text-warning transition duration-300"
        >
          <li>
            <a href="https://github.com/iAmmar7/microfrontends-task-app"
              >Github project</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
