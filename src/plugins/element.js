import Vue from 'vue'
import {
  Button, Container, Header,
  Aside, Main, Input,
  Col, Row, MenuItem,
  Menu, MenuItemGroup,
  Submenu, Dialog, FormItem,
  Form, MessageBox, Message,
  Tooltip, TabPane, Tabs,
  Tag, Pagination, Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Input)
Vue.use(Col)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Row)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
