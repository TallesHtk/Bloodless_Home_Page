document.addEventListener("DOMContentLoaded", function() {
    const discordButton = document.querySelector(".discord-button a");
    const videos = document.querySelectorAll(".video-list-centered iframe");

    // Animação para o botão Discord
    discordButton.addEventListener("mouseover", function() {
        discordButton.style.backgroundColor = "#D60000";
    });

    discordButton.addEventListener("mouseout", function() {
        discordButton.style.backgroundColor = "#FF0000";
    });

    // Animação para os vídeos
    videos.forEach(video => {
        video.addEventListener("mouseover", function() {
            video.style.transform = "scale(1.1)";
        });

        video.addEventListener("mouseout", function() {
            video.style.transform = "scale(1)";
        });
    });
});
