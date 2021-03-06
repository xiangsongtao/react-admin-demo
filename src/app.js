/**
 * Created by Hsiang on 2017/7/23.
 */

import React from 'react'
import { Provider } from 'mobx-react'
import AppStore from './stores/AppStore'
import RootStore from './stores/RootStore'
import { MainRoute } from './router/index'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
// import { addLocaleData, IntlProvider } from 'react-intl'
// import zhTW from 'antd/lib/locale-provider/zh_TW';

// 根状态, 比如当前应用的整体信息
const appStore = new AppStore()
const rootStore = new RootStore()

import config from './config'
console.debug('当前的配置信息(Mock于此同步):')
console.debug(config)

window.rootStore = rootStore
// const appLocale = window.appLocale

// addLocaleData(appLocale.data)

// 全局store前面加 '$' 标识符
class App extends React.Component {
  render () {
    return (
      <LocaleProvider locale={enUS}>
        <Provider $rootStore={rootStore} $appStore={appStore}>
          <MainRoute {...this.props} />
        </Provider>
      </LocaleProvider>
    )
  }
}

export default App
