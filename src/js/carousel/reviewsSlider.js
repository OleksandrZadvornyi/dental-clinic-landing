import { updateContent } from '../i18n/contentUpdater';

export function initializeReviewsSlider() {
  const reviews = [
    {
      author: 'Samantha Payne',
      image: './images/review-image-1.png',
      content:
        "I've seen a lot of Dentists over my lifetime because I've had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staff. I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed, there was no discomfort whatsoever.",
    },
    {
      author: 'Michael Rodriguez',
      image: './images/review-image-2.jpg',
      content:
        "The team at Digital Implant is exceptional! Dr. Doe's expertise in dental implants is remarkable. The whole process was smooth, and the results exceeded my expectations. Their modern approach to dentistry really makes a difference.",
    },
    {
      author: 'David Graham',
      image: './images/review-image-3.jpg',
      content:
        "I couldn't be happier with my experience at Digital Implant. The staff is incredibly professional and caring. They took the time to explain every step of my treatment, and the follow-up care has been outstanding. Highly recommend!",
    },
  ];

  // Get all necessary elements
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const reviewPhoto = document.querySelector('.review-photo');
  const reviewAuthor = document.querySelector('.review-author');
  const reviewContent = document.querySelector('.review-content');

  // Add click event listeners to radio buttons
  radioButtons.forEach((radio, index) => {
    radio.addEventListener('click', () => {
      updateReview(index);
    });
  });

  // Function to update review content
  function updateReview(index) {
    const review = reviews[index];

    // Create fade out effect
    reviewPhoto.style.opacity = '0';
    reviewAuthor.style.opacity = '0';
    reviewContent.style.opacity = '0';

    // Update content after brief delay for animation
    setTimeout(() => {
      reviewPhoto.src = review.image;
      reviewAuthor.textContent = review.author;
      reviewAuthor.setAttribute(
        'data-i18n',
        `reviewsSection.author_${index + 1}`
      );
      reviewContent.textContent = review.content;
      reviewContent.setAttribute(
        'data-i18n',
        `reviewsSection.review_${index + 1}`
      );
      updateContent();

      // Fade in new content
      reviewPhoto.style.opacity = '1';
      reviewAuthor.style.opacity = '1';
      reviewContent.style.opacity = '1';
    }, 300);
  }
}
