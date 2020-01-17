export function selectedTab(tabId) {
    //console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}