let browsers;

if (isChrome()) browsers = chrome;
else if (isFirefox()) browsers = browser;


(async () => {
    if (document.getElementsByClassName("button-react").length > 0) {
        return;
    } else {
        try {
            const url = await browsers.runtime.getURL("/DB/Emojis.json");
            const emojiJson = await fetch(url);
            const EMOJI_LIST = await emojiJson.json();
            const Style = document.createElement("style");
            Style.innerHTML = `
            .Group-Emoji::-webkit-scrollbar {
                width: 10px;
            }
            
            .Group-Emoji::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            
            .Group-Emoji::-webkit-scrollbar-thumb {
                background: #888;
            }
            
            .Group-Emoji::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
            .liEmoji {
                font-size: 20px;
                height: 30px;
                width: 30px;
                cursor: pointer;
            }
            .liEmoji:hover {
                scale: 115%;
            }
            .liEmoji:active {
                scale: 90%;
            }
            .Group-Emoji {
                position: absolute;
                bottom: 60px;
                height: 200px;
                right: 0;
                width: 250px;
                padding: 15px;
                list-style: none;
                margin: 0;
                overflow-y: scroll;
                background-color: #fff;
                border-radius: 10px;
                display: none;
            }
            .Group-Emoji--show {
                display: flex;
                flex-direction: column;
                position: absolute;
                bottom: 60px;
                height: 200px;
                right: 0;
                width: 250px;
                padding: 15px;
                list-style: none;
                margin: 0;
                overflow-y: scroll;
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 0.95);
            }
            .Button {
                height: 45px;
                width: 45px;
                display: flex;
                color: #000000;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                background: #ffffff;
                transition: 0.2s;
            }
            .CloseList {
                height: 27px;
                width: 27px;
                color: #000000;
                cursor: pointer;
                transition: 0.2s;
            }
            .CloseList:active {
                scale: 90%;
            }
            .title {
                border-bottom: 1px solid #4d464647;
                margin-bottom: 4px;
            }
            `;
            document.querySelector("body").appendChild(Style);
            loadEmoji(EMOJI_LIST);
        } catch (err) {
            console.error(err);
        }
    }
})();

function loadEmoji(Emojis) {
    const fb_dtsg = getFbdtsg();
    const user_id = getUserId();
    const EmojisName = ["Food And Drink", "Activity"];
    const setTimeCheckStoryController = setInterval(() => {
        const ButtonEmojiMore = document.createElement("div");
        ButtonEmojiMore.setAttribute("class", "button-react");
        ButtonEmojiMore.setAttribute("class", "Button");
        ButtonEmojiMore.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>`;

        const GroupEmoji = document.createElement("div");

        GroupEmoji.setAttribute("class", "Group-Emoji");

        const Title = document.createElement("div");
        Title.setAttribute("class", "title");
        Title.innerHTML = `<h1 style="font-size: 1.8em;">More Emoji</h1>`;
        const CloseList = document.createElement("div");
        CloseList.setAttribute("class", "CloseList");
        CloseList.onclick = function () {
            GroupEmoji.setAttribute("class", "Group-Emoji");
        };
        CloseList.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`;
        Title.appendChild(CloseList);
        Title.setAttribute(
            "style",
            "display: flex; justify-content: space-between"
        );
        GroupEmoji.appendChild(Title);
        Emojis.forEach(async (el, index) => {
            const RowEmojiName = document.createElement("div");
            const EmojiGr = document.createElement("ul");
            EmojiGr.setAttribute("style", `display: flex; gap: 5px;`);
            await el[`${index}`].forEach((i) => {
                const Emoji = document.createElement("li");
                Emoji.setAttribute("class", "liEmoji");
                Emoji.textContent = i.value;
                Emoji.onclick = async function () {
                    const storyId = getStoryId();
                    try {
                        await reactingStory(user_id, fb_dtsg, storyId, i.value);
                    } catch (e) {
                        console.error(e);
                    }
                };
                EmojiGr.appendChild(Emoji);
            });
            RowEmojiName.innerHTML = `<h1 style="font-size: 1.75em;font-weight: 100;font-family: inherit;margin-bottom: 4px;">${EmojisName[index]}</h1>`;
            RowEmojiName.appendChild(EmojiGr);
            GroupEmoji.appendChild(RowEmojiName);
        });

        ButtonEmojiMore.onclick = function () {
            GroupEmoji.setAttribute("class", "Group-Emoji--show");
        };

        const Container = document.createElement("div");
        Container.setAttribute("style", "position: relative;");

        Container.appendChild(ButtonEmojiMore);
        Container.appendChild(GroupEmoji);

        const storyController = document.getElementsByClassName(
            "x11lhmoz x78zum5 x1q0g3np xsdox4t x10l6tqk xtzzx4i xwa60dl xl56j7k xtuxyv6"
        );
        if (storyController.length > 0) {
            clearInterval(setTimeCheckStoryController);
            storyController[storyController.length - 1].appendChild(Container);
        }
    }, 100);
}

function getStoryId() {
    const htmlStory = document.getElementsByClassName(
        "xh8yej3 x1n2onr6 xl56j7k x5yr21d x78zum5 x6s0dn4"
    );
    return htmlStory[htmlStory.length - 1].getAttribute("data-id");
}

function getFbdtsg() {
    const regex = /"DTSGInitialData",\[],{"token":"(.+?)"/gm;
    const resp = regex.exec(document.documentElement.innerHTML);
    return resp[1];
}

function getUserId() {
    const regex = /c_user=(\d+);/gm;
    const resp = regex.exec(document.cookie);
    return resp[1];
}

function reactingStory(user_id, fb_dtsg, story_id, message) {
    return new Promise(async (resolve, reject) => {
        const variables = {
            input: {
                lightweight_reaction_actions: {
                    offsets: [0],
                    reaction: message,
                },
                story_id,
                story_reply_type: "LIGHT_WEIGHT",
                actor_id: user_id,
                client_mutation_id: 7,
            },
        };

        const body = new URLSearchParams();
        body.append("av", user_id);
        body.append("__user", user_id);
        body.append("__a", 1);
        body.append("fb_dtsg", fb_dtsg);
        body.append("fb_api_caller_class", "RelayModern");
        body.append("fb_api_req_friendly_name", "useStoriesSendReplyMutation");
        body.append("variables", JSON.stringify(variables));
        body.append("server_timestamps", true);
        body.append("doc_id", "3769885849805751");
        try {
            const response = await fetch(
                "https://www.facebook.com/api/graphql/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body,
                }
            );
            const res = await response.json();
            if (res.errors) return reject(res);
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
}

function isChrome() {
    return (
        typeof chrome !== "undefined" && typeof chrome.runtime !== "undefined"
    );
}

function isFirefox() {
    return (
        typeof browser !== "undefined" && typeof browser.runtime !== "undefined"
    );
}
