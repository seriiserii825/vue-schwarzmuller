<template>
  <div id="app">
    <div>
      <the-header></the-header>
      <badge-list></badge-list>
      <user-info
          :full-name="activeUser.name"
          :info-text="activeUser.description"
          :role="activeUser.role"
      ></user-info>
      <course-goals>
        <template #default="slotProps">
          <h2>{{ slotProps.item }}</h2>
          <p>{{ slotProps['another-prop'] }}</p>
        </template>
      </course-goals>

      <button @click="selectComponent('active-goals')">Active Goals</button>
      <button @click="selectComponent('manage-goals')">Manage Goals</button>

      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BadgeList from "@/components/BadgeList"
import TheHeader from "@/components/TheHeader"
import UserInfo from "@/components/UserInfo";
import CourseGoals from "@/components/CourseGoals";
import ActiveGoals from "@/components/ActiveGoals";
import ManageGoals from "@/components/ManageGoals";

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-goals'
    }
  },
  methods: {
    selectComponent(cmp) {
      this.selectedComponent = cmp
    }
  },
  components: {
    badgeList: BadgeList,
    theHeader: TheHeader,
    userInfo: UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  }
}
</script>

<style>
#app {
  min-height: 900px;
  margin: 0 auto;
  max-width: 600px;
}
* {
  box-sizing: border-box;
}
body {
  color: #333;
  height: 100vh;
  background: #f1f1f1;
}
img {
  max-width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
