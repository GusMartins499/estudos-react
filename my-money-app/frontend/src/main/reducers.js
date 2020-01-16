import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    //dashboard: () => ({ summary: { credit: 100, debt: 50 } })
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer