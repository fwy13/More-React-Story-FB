chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        if (tab.url) {
            if (tab.url.startsWith("https://www.facebook.com/stories/")) {
                chrome.scripting
                    .executeScript({
                        target: { tabId: tabId },
                        files: ["addEmoji.js"],
                    })
                    .then(() => console.log("File ran!"));
            }
        }
    }
});

//     function getTabID() {
//         return new Promise((resolve, reject) => {
//             try {
//                 chrome.tabs.query(
//                     {
//                         active: true,
//                     },
//                     function (tabs) {
//                         resolve(tabs[0]);
//                     }
//                 );
//             } catch (e) {
//                 reject(e);
//             }
//         });
//     }
//     const { url, id } = await getTabID();
//     setTimeout(async () => {
//         console.log("Running");
//         if (url.startsWith("https://www.facebook.com/stories/")) {
//             if (changeInfo.status === "complete") {
//                 chrome.scripting
//                     .executeScript({
//                         target: { tabId: id },
//                         files: ["addEmoji.js"],
//                     })
//                     .then(() => console.log("File ran!"));
//             }
//         }
//     }, 500);

// const getFbdtsg = () => {
//     const regex = /"DTSGInitialData",\[],{"token":"(.+?)"/gm;
//     const respone = regex.exec(document.documentElement.innerHTML);
//     return respone[1];
// };

// const getUserId = () => {
//     const regex = /c_user=(\d+);/gm;
//     const respone = regex.exec(document.cookie);
//     return respone[1];
// };

// const getStoryId = () => {
//     const htmlStory = document.getElementsByClassName(
//         "xh8yej3 x1n2onr6 xl56j7k x5yr21d x78zum5 x6s0dn4"
//     );
//     return htmlStory[htmlStory.length - 1].getAttribute("data-id");
// };

// const LoadEmojis = () => {
//     console.log("Load Emoji");
//     // const ButtonEmojiMore = document.createElement("button");
//     // ButtonEmojiMore.setAttribute(
//     //     "style",
//     //     `height: 45px;
//     //         width: 45px;
//     //         display: flex;
//     //         justify-content: center;
//     //         align-items: center;
//     //         border-radius: 50%;
//     //         font-weight: bold;
//     //         cursor: pointer;
//     //         background: #05d427;
//     //         transition: 0.2s;`
//     // );
//     // ButtonEmojiMore.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>`;
//     // const storyController = document.getElementsByClassName(
//     //     "x11lhmoz x78zum5 x1q0g3np xsdox4t x10l6tqk xtzzx4i xwa60dl xl56j7k xtuxyv6"
//     // );
//     // if (storyController[storyController.length - 1]) {
//     //     // clearInterval(setTimeCheckStoryController);
//     //     storyController[storyController.length - 1].appendChild(
//     //         ButtonEmojiMore
//     //     );
//     // }
// };

// LoadEmojis();

/**
 * av: 100020625430658
__user: 100020625430658
__a: 1
fb_dtsg: NAcMWeNT4FYGccBBldILnKY79LNDPxN2K56_eciKKpjDc5TcrBJK5eQ:9:1716268713
fb_api_caller_class: RelayModern
fb_api_req_friendly_name: useStoriesSendReplyMutation
variables: {"input":{"lightweight_reaction_actions":{"offsets":[0],"reaction":"😊"},"story_id":"UzpfSVNDOjExODc0ODMyMTYwMjIyNDg=","story_reply_type":"LIGHT_WEIGHT","actor_id":"100020625430658","client_mutation_id":7}}
server_timestamps: true
doc_id: 3769885849805751
 */
