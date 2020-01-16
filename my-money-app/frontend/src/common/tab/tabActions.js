export function selectedTab(tabId) {
    //console.log(tabId)
    return {
        type: 'TAB_SELECT',
        payload: tabId
    }
}