const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.users.token,
  currentOrg: state => state.users.currentOrg,
  currentRole: state => state.users.currentRole,
  userAdminOrgList: state => state.users.orgs,
  currentUser: state => state.users.profile,
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  publicSettings: state => state.settings.publicSettings,
  customSettings: state => state.settings.customSettings,
  currentOrgRoles: state => state.users.roles
}
export default getters
