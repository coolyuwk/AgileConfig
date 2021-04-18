export default {
  'submit': '正在提交',
  'saving': '正在保存',
  'loading': '正在加载',
  'save_success': '保存成功 !',
  'save_fail': '保存失败 !',
  'deleting': '正在删除',
  'delete_success': '删除成功！',
  'delete_fail': '删除失败！',
  'refreshing': '正在刷新',
  'refresh_success': '刷新成功！',
  'refresh_fail': '删除失败！',
  'enabled.0': '禁用',
  'enabled.1': '启用',
  'success': '成功',
  'failed': '失败',
  'disconnecting': '正在断开',
  'disconnect_success': '断开成功！',
  'disconnect_fail': '断开失败！',
  'publishing': '正在上线',
  'publish_success': '上线成功！',
  'publish_fail': '上线失败！',
  'offlining': '正在下线',
  'offline_success': '下线成功！',
  'offline_fail': '下线失败！',
  'rollbacking': '正在回滚',
  'rollback_success': '回滚成功！',
  'rollback_fail': '回滚失败！',

  'resetpassword.title': '修改密码',
  'resetpassword.oldpassword': '原密码',
  'resetpassword.newpassword': '新密码',
  'resetpassword.newpassword_ag': '重复新密码',
  'resetpassword.update_success': '修改密码成功,请使用新密码重新登录。',
  'resetpassword.update_fail': '修改密码失败。',
  
  'pages.layouts.userLayout.title': 'AgileConfig - 轻量级配置中心',
  'pages.login.accountLogin.tab': '使用管理员密码登录',
  'pages.login.accountLogin.errorMessage': '错误的密码，请重新再试',
  'pages.login.username.placeholder': '用户名: admin or user',
  'pages.login.username.required': '用户名是必填项！',
  'pages.login.password.placeholder': '密码',
  'pages.login.password.required': '密码是必填项！',
  'pages.login.phoneLogin.tab': '手机号登录',
  'pages.login.phoneLogin.errorMessage': '验证码错误',
  'pages.login.phoneNumber.placeholder': '请输入手机号！',
  'pages.login.phoneNumber.required': '手机号是必填项！',
  'pages.login.phoneNumber.invalid': '不合法的手机号！',
  'pages.login.captcha.placeholder': '请输入验证码！',
  'pages.login.captcha.required': '验证码是必填项！',
  'pages.login.phoneLogin.getVerificationCode': '获取验证码',
  'pages.getCaptchaSecondText': '秒后重新获取',
  'pages.login.rememberMe': '自动登录',
  'pages.login.forgotPassword': '忘记密码 ?',
  'pages.login.submit': '登录',
  'pages.login.loginWith': '其他登录方式 :',
  'pages.login.registerAccount': '注册账户',
  'pages.login.loginfail': '密码错误！ 😢😢😢 ',
  'pages.login.loginsuccess': '🎉 🎉 🎉  登录成功！ ',
  'pages.welcome.advancedComponent': '高级表格',
  'pages.welcome.link': '欢迎使用',
  'pages.welcome.advancedLayout': '高级布局',
  'pages.welcome.alertMessage': '更快更强的重型组件，已经发布。',
  'pages.admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'pages.admin.subPage.alertMessage': 'umi ui 现已发布，欢迎使用 npm run ui 启动体验。',

  'pages.initpassword.tab': '初始化管理员密码',
  'pages.initpassword.submit': '确定',
  'pages.initpassword.ag_password.placeholder' : '再次输入密码',
  'pages.initpassword.init_tip': "首次登录前请设置管理员密码",
  'pages.initpassword.init_success': "  初始化成功，请使用管理员密码重新登录",

  'pages.home.summary.node': '节点',
  'pages.home.summary.app': '应用',
  'pages.home.summary.config': '配置',
  'pages.home.summary.client': '客户端',

  'pages.node.action.add': '添加',
  'pages.node.action.delete': '删除',
  'pages.node.action.refresh': '刷新所有客户端的配置 ',

  'pages.node.table.cols.address': '节点地址',
  'pages.node.table.cols.remark': '备注',
  'pages.node.table.cols.lastEcho': '最后响应时间',
  'pages.node.table.cols.status': '状态',
  'pages.node.table.cols.status.1': '在线',
  'pages.node.table.cols.status.0': '离线',
  'pages.node.table.cols.action': '	操作',

  'pages.node.from.tips': '请输入节点的IP跟PORT，如 http://192.168.0.120:5000',
  'pages.node.action.delete.tips': '删除节点并不会让其真正的下线，只是脱离控制台的管理。所有连接至此节点的客户端都会继续正常工作。',
  'pages.node.delete_msg': '是否确定删除节点 ',

  'pages.app.table.cols.appname': '名称',
  'pages.app.table.cols.appid': '应用ID',
  'pages.app.table.cols.secret': '密钥',
  'pages.app.table.cols.create_time': '创建时间',
  'pages.app.table.cols.update_time': '修改时间',
  'pages.app.table.cols.public': '公共',
  'pages.app.table.cols.link': '关联',
  'pages.app.table.cols.enabled': '启用',
  'pages.app.table.cols.action': '操作',
  'pages.app.table.cols.action.configs': '配置项',
  'pages.app.table.cols.action.edit': '编辑',
  'pages.app.table.cols.action.delete': '删除',
  'pages.app.table.cols.action.add': '新建',

  'pages.app.form.title.add': '新建应用',
  'pages.app.form.title.edit': '编辑应用',
  'pages.app.form.name': '名称',
  'pages.app.form.id': '应用ID',
  'pages.app.form.secret': '密钥',
  'pages.app.form.public': '公共应用',
  'pages.app.form.public.tooltip': '公共应用可以被其他应用关联',
  'pages.app.form.connected': '关联公共应用',
  'pages.app.form.connected.tooltip': '关联后可以读取公共应用的配置项',
  'pages.app.form.enabled': '启用',
  'pages.app.delete_msg': '是否确定删除应用 ',

  'pages.app.inheritanced.true': '公共',
  'pages.app.inheritanced.false': '私有',

  'pages.client.table.cols.id': 'ID',
  'pages.client.table.cols.node': '节点',
  'pages.client.table.cols.appid': '应用ID',
  'pages.client.table.cols.name': '客户端名称',
  'pages.client.table.cols.tag': '标签',
  'pages.client.table.cols.ip': 'IP',
  'pages.client.table.cols.appname': '应用名称',
  'pages.client.table.cols.action': '操作',
  'pages.client.table.cols.action.refresh': '刷新配置',
  'pages.client.table.cols.action.disconnect': '强制断开',

  'pages.client.header.title': '连接的客户端',
  'pages.client.disconnect_message': `是否确定断开与客户端的连接?`,

  'pages.logs.table.appname': `应用`,
  'pages.logs.table.type': '类型',
  'pages.logs.table.type.0': '普通',
  'pages.logs.table.type.1': '警告',
  'pages.logs.table.time': `时间`,
  'pages.logs.table.content': `内容`,

  'pages.configs.breadcrumbName': '配置项',
  'pages.configs.table.cols.g': '组',
  'pages.configs.table.cols.k': '键',
  'pages.configs.table.cols.v': '值',
  'pages.configs.table.cols.desc': '描述',
  'pages.configs.table.cols.create_time': '创建时间',
  'pages.configs.table.cols.status': '状态',
  'pages.configs.table.cols.status.0': '待上线',
  'pages.configs.table.cols.status.1': '已上线',
  'pages.configs.table.cols.action': '操作',
  'pages.configs.table.cols.action.add': '新建',
  'pages.configs.table.cols.action.importfromjosnfile': '从JSON文件导入',
  'pages.configs.table.cols.action.edit': '编辑',
  'pages.configs.table.cols.action.delete': '删除',
  'pages.configs.table.cols.action.publish': '上线',
  'pages.configs.table.cols.action.offline': '下线',
  'pages.configs.table.cols.action.history': '历史',

  'pages.configs.from.add.title': '新建配置',
  'pages.configs.from.add.app': '应用',
  'pages.configs.from.importjson.selectfile': '选择文件',

  'pages.configs.table.cols.v.tip':'过长会自动收缩',

  'pages.config.history.title': '历史版本',
  'pages.config.history.rollback': '回滚',
  'pages.config.history.current': '当前版本',

  'pages.config.confirm_rollback':'确定回滚至版本',
  'pages.config.confirm_delete':'确定删除配置',
  'pages.config.confirm_publish':'确定上线配置',
  'pages.config.confirm_offline':'确定下线配置',

  'pages.config.confirm_publish_some':'确定上线选中的配置？',
  'pages.config.confirm_offline_some':'确定下线选中的配置？',

  'pages.config.waitpublish_at_least_one':'请至少选中一个待上线配置项',
  'pages.config.online_at_least_one':'请至少选中一个已上线配置项',

};
