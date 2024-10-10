const stories = [
    {
        text: "I've started using Peaceful Path during my finals, and it helped me manage my stress. The guided meditations are super calming!",
        name: "Emily",
        age: 17
    },
    {
        text: "Joining this platform has really helped me connect with people who understand mental health. The wellness tips are great too!",
        name: "Aiden",
        age: 19
    },
    {
        text: "The community feature is awesome! I’ve met so many supportive people, and I feel less alone on my wellness journey.",
        name: "Lily",
        age: 16
    },
    {
        text: "I love the simple meditation exercises. They’ve helped me stay focused and less anxious about school.",
        name: "Mason",
        age: 15
    },
    {
        text: "Peaceful Path has been a life-changer. I started when I was going through a tough time, and it's helped me stay positive.",
        name: "Olivia",
        age: 18
    },
    {
        text: "The daily wellness tips are super helpful! They're easy to follow and have made a big difference in my mental health.",
        name: "Michael",
        age: 29 // Now an adult
    },
    {
        text: "Since joining Peaceful Path, I feel much more balanced. The resources are fantastic, and I’ve started using meditation daily.",
        name: "Sophie",
        age: 35 // Now an adult
    },
    {
        text: "I've been meditating for a few months now, and it has been great for calming my anxiety, especially during exams.",
        name: "Ryan",
        age: 22 // Now an adult
    },
    {
        text: "As a working professional, Peaceful Path has become my go-to for stress relief after long days. Highly recommend!",
        name: "Sarah",
        age: 30 // New adult story
    },
    {
        text: "I discovered Peaceful Path while searching for resources on mental wellness. It's made a significant impact on my life.",
        name: "James",
        age: 24 // New adult story
    }
];

// Function to load stories into the HTML
function loadStories() {
    const storyContainer = document.getElementById('story-container');
    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story');
        storyDiv.innerHTML = `
            <p>"${story.text}"</p>
            <div class="story-info">
                <h4>${story.name}</h4>
                <span>, ${story.age}</span>
            </div>
        `;
        storyContainer.appendChild(storyDiv);
    });
}

// Call the function when the page loads
window.onload = loadStories;
