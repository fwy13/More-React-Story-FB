chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        if (tab.url) {
            if (tab.url.startsWith("https://www.facebook.com/stories/")) {
                chrome.scripting
                    .executeScript({
                        target: { tabId: tabId },
                        files: ["addEmoji.js"],
                    })
                    .then(() => console.log("File running!"));
            }
        }
    }
});