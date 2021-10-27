<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action"
        aria-current="true">
          Component A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action"
        aria-current="true">
          Component B
        </router-link>
        <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action"
        aria-current="true">
          NamedPage c2a
        </router-link>
        <router-link to="/newpage/namedView/c2b" class="list-group-item list-group-item-action"
        aria-current="true">
          NamedPage c2b
        </router-link>
        <router-link to="/newpage/DynamicRouter/a3a6d08cad3ba2a9"
        class="list-group-item list-group-item-action"
        aria-current="true">
          動態路由($route)
        </router-link>
        <router-link to="/newpage/DynamicRouterByProps/a3a6d08cad3ba2a9"
        class="list-group-item list-group-item-action"
        aria-current="true">
          動態路由($props)
        </router-link>
        <router-link to="/newpage/RouterNavigation"
        class="list-group-item list-group-item-action"
        aria-current="true">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
