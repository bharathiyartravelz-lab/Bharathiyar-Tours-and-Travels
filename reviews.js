document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.getElementById("reviewsSection");
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = `
    <section class="section-wrap reviews-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Customer Reviews</div>
          <h2>What Our Customers Say</h2>
          <p>Real feedback from our travellers.</p>
        </div>

        <div class="review-slider-wrap">
          <button class="review-nav prev" onclick="scrollReviews(-1)" aria-label="Previous review">
            <i class="bi bi-chevron-left"></i>
          </button>

          <div class="reviews-track" id="reviewsTrack">
            <div class="review-card compact"><div class="review-top"><h6>Pankaj Tyagi</h6><div class="stars">★★★★★</div></div><p>Well planned 6-day trip, clean car, Hindi-friendly driver, great coordination.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Arun Vikas</h6><div class="stars">★★★★★</div></div><p>Honest service, clean Etios, supportive team, smooth Ooty–Coonoor trip.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Prasuna Janjanam</h6><div class="stars">★★★★★</div></div><p>Patient support and quick help for last-minute trip changes.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Sanket Berde</h6><div class="stars">★★★★★</div></div><p>Best pricing, clean car, safe driving, professional booking support.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Harika Pulipaka</h6><div class="stars">★★★★★</div></div><p>Patient driver, comfortable road trip, useful place and hotel guidance.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Sachin Sharma</h6><div class="stars">★★★★★</div></div><p>Well-maintained Innova, polite driver, affordable and dependable service.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Kavitha Tamilarasu</h6><div class="stars">★★★★★</div></div><p>Safe, smooth and well-organized trip with on-time driver.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Manoj Kumar Mahto</h6><div class="stars">★★★★★</div></div><p>Punctual driver, good behavior, neat car for Coimbatore–Ooty travel.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Ramesh Kumar Srinivasan</h6><div class="stars">★★★★★</div></div><p>Clean Tempo Traveller, cooperative driver, very comfortable official trip.</p></div>
            <div class="review-card compact"><div class="review-top"><h6>Ajith Akula</h6><div class="stars">★★★★★</div></div><p>Reasonable pricing, wonderful Ooty trip, driver acted like a guide.</p></div>
          </div>

          <button class="review-nav next" onclick="scrollReviews(1)" aria-label="Next review">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  `;
});

function scrollReviews(direction) {
  const track = document.getElementById("reviewsTrack");
  const card = track.querySelector(".review-card");
  if (!card) return;

  const gap = 12;
  const scrollAmount = card.offsetWidth + gap;

  track.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
