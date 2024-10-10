const discussionContainer = document.getElementById("discussion-container");

function addPost() {
    const postContent = document.getElementById("new-post-content").value;
    if (postContent.trim()) {
        const postElement = createPostElement(postContent);
        discussionContainer.appendChild(postElement);
        document.getElementById("new-post-content").value = '';  // Clear textarea
    }
}

function createPostElement(content) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.textContent = content;

    const repliesContainer = document.createElement("div");
    repliesContainer.classList.add("post-replies");

    const replyButton = document.createElement("button");
    replyButton.textContent = "Balas";
    replyButton.onclick = function() {
        showReplyBox(postElement);
    };
    
    postElement.appendChild(postContent);
    postElement.appendChild(replyButton);
    postElement.appendChild(repliesContainer);

    return postElement;
}



function showReplyBox(postElement) {
    const replyBox = document.createElement("div");
    replyBox.classList.add("reply");

    const replyTextarea = document.createElement("textarea");
    replyTextarea.placeholder = "Tulis balasan...";

    const replyButton = document.createElement("button");
    replyButton.textContent = "Kirim Balasan";
    replyButton.onclick = function() {
        addReply(replyTextarea.value, postElement);
        replyBox.remove();
    };

    replyBox.appendChild(replyTextarea);
    replyBox.appendChild(replyButton);

    postElement.appendChild(replyBox);
}

function addReply(content, postElement) {
    if (content.trim()) {
        const repliesContainer = postElement.querySelector(".post-replies");
        const replyElement = document.createElement("div");
        replyElement.classList.add("reply");
        replyElement.textContent = content;

        repliesContainer.appendChild(replyElement);
    }
}