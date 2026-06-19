const getuser = new Promise((resolve) => {
    resolve({username: "aditi_desai", email: "aditi_desai@example.com"});
});

getuser
.then((user) => {
    console.log("Got user:", user.username);
    return { userId: user.id, course: "AI Internship Prep" };
})
.then((profile) => {
    console.log("Got profile:", profile.course);
    return{post: "Day1 done. shipped my first node script!"};       
}
).then((post) => {
    console.log("Got post:", post.post);
}
).catch((error) => {
    console.log("Error:", error);
});
