document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8080/Partido") // URL de la API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("matches-container");

            data.forEach(match => {
                const matchCard = document.createElement("div");
                matchCard.classList.add("frame-data");

                matchCard.innerHTML = `
                    <div class="frame1">
                        <div class="competition">${match.competicion}</div>
                        <div class="date">${new Date(match.fecha).toLocaleDateString()}</div>
                    </div>
                    <div class="frame2">
                        <div class="score">
                            <div class="score-top">
                                <div class="local-team-img"><img src="images/${match.localTeam}.png" alt="${match.localTeam}" class="crest-1"></div>
                                <div class="livescore">${match.marcador}</div>
                                <div class="visit-team-img"><img src="images/${match.visitTeam}.png" alt="${match.visitTeam}" class="crest-2"></div>
                            </div>
                            <div class="score-bottom">
                                <div class="local-team">${match.localTeam}</div>
                                <div class="time">${match.tiempoJuego}</div>
                                <div class="visit-team">${match.visitTeam}</div>
                            </div>
                        </div>
                    </div>
                    <div class="frame3">
                        <div class="stat tj">TJ</div>
                        <div class="stat g">G</div>
                        <div class="stat a">A</div>
                        <div class="stat v">V</div>
                    </div>
                    <div class="frame4">
                        <div class="time">${match.minutos}’</div>
                        <div class="goals">${match.goals}</div>
                        <div class="assists">${match.assists}</div>
                        <div class="rating">${match.rating}</div>
                    </div>
                `;

                container.appendChild(matchCard);
            });
        })
        .catch(error => console.error('Error fetching matches:', error));
});




document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});
