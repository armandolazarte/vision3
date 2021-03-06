import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/polizas",
    //   // component: () => import('@/views/polizas/Automotor'),
    //   children: []
    // },
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      children: [
        // Dashboard
        {
          name: "Automotor",
          path: "polizas/automotor",
          component: () => import("@/views/pages/polizas/Automotor")
        },
        {
          name: "Usuarios",
          path: "/configuracion/usuarios",
          component: () => import("@/views/pages/Configuracion/Usuarios")
        },
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/dashboard/pages/UserProfile")
        },
        {
          name: "Timeline",
          path: "pages/timeline",
          component: () => import("@/views/dashboard/pages/Timeline")
        },
        // Components
        {
          name: "Buttons",
          path: "components/buttons",
          component: () => import("@/views/dashboard/component/Buttons")
        },
        {
          name: "Grid System",
          path: "components/grid-system",
          component: () => import("@/views/dashboard/component/Grid")
        },
        {
          name: "Tabs",
          path: "components/tabs",
          component: () => import("@/views/dashboard/component/Tabs")
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () => import("@/views/dashboard/component/Notifications")
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/dashboard/component/Icons")
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/dashboard/component/Typography")
        },
        // Forms
        {
          name: "Regular Forms",
          path: "forms/regular",
          component: () => import("@/views/dashboard/forms/RegularForms")
        },
        {
          name: "Extended Forms",
          path: "forms/extended",
          component: () => import("@/views/dashboard/forms/ExtendedForms")
        },
        {
          name: "Validation Forms",
          path: "forms/validation",
          component: () => import("@/views/dashboard/forms/ValidationForms")
        },
        {
          name: "Wizard",
          path: "forms/wizard",
          component: () => import("@/views/dashboard/forms/Wizard")
        },
        // Tables
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/dashboard/tables/RegularTables")
        },
        {
          name: "Extended Tables",
          path: "tables/extended-tables",
          component: () => import("@/views/dashboard/tables/ExtendedTables")
        },
        {
          name: "Data Tabels",
          path: "tables/data-tables",
          component: () => import("@/views/dashboard/tables/DataTables")
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/dashboard/maps/GoogleMaps")
        }
      ]
    },
    {
      path: "/administracion",
      component: () => import("@/views/dashboard/Index"),
      name: "Administracion",
      redirect: "/administracion/companias",
      children: [
        {
          name: "Organizadores",
          path: "organizadores",
          component: () =>
            import(
              "@/views/pages/Administracion/Organizadores/Organizadores.vue"
            )
        },
        {
          name: "Productores",
          path: "productores",
          component: () =>
            import("@/views/pages/Administracion/Productores/Productores.vue")
        }
      ]
    }
  ]
});
