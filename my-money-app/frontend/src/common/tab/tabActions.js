export function selectTab(tabId) {
    return {
        type: 'TAB_SELECT',
        payload: tabId
    }
}