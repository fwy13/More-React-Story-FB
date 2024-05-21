// const LoadEmoji = async () => {
//     try {
//         const emojiJson = await fetch(chrome.runtime.getURL("/DB/Emojis.json"));
//         const EMOJI_LIST = await emojiJson.json();
//         console.log(EMOJI_LIST);
//     } catch (e) {
//         console.error(e);
//     }
// };
// // LoadEmoji();
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
//     const fb_dtsg = getFbdtsg();
//     const user_id = getUserId();
//     // const setMoreEmoji = setInterval(() => {
//     //     console.log('Hello world')
//     // })
//     console.log("Running");
//     const setTimeCheckStoryController = setInterval(() => {
//         const ButtonEmojiMore = document.createElement("button");
//         ButtonEmojiMore.setAttribute("class", "button-more-emoji");
//         ButtonEmojiMore.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>`;
//         const storyController = document.getElementsByClassName(
//             "x11lhmoz x78zum5 x1q0g3np xsdox4t x10l6tqk xtzzx4i xwa60dl xl56j7k xtuxyv6"
//         );
//         if (storyController) {
//             clearInterval(setTimeCheckStoryController);
//             storyController[storyController.length - 1].appendChild(
//                 ButtonEmojiMore
//             );
//         }
//         console.log("Running");
//     }, 100);
// };

// LoadEmojis();

// /**
//  * av: 100020625430658
// __user: 100020625430658
// __a: 1
// fb_dtsg: NAcMWeNT4FYGccBBldILnKY79LNDPxN2K56_eciKKpjDc5TcrBJK5eQ:9:1716268713
// fb_api_caller_class: RelayModern
// fb_api_req_friendly_name: useStoriesSendReplyMutation
// variables: {"input":{"lightweight_reaction_actions":{"offsets":[0],"reaction":"😊"},"story_id":"UzpfSVNDOjExODc0ODMyMTYwMjIyNDg=","story_reply_type":"LIGHT_WEIGHT","actor_id":"100020625430658","client_mutation_id":7}}
// server_timestamps: true
// doc_id: 3769885849805751
//  */


console.log('Running Content')