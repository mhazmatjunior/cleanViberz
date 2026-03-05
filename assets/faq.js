// FAQ smooth open/close animation (client-side only)
document.addEventListener('DOMContentLoaded', function () {
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach((faq) => {
    faq.addEventListener('toggle', function () {
      const answer = faq.querySelector('.faq-answer');
      if (faq.open) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = 1;
      } else {
        answer.style.maxHeight = '0px';
        answer.style.opacity = 0;
      }
    });
    // Set initial state
    if (faq.open) {
      const answer = faq.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = 1;
    }
  });
});

// FAQ expand/collapse smooth animation
// This script should be included in the browser (not server)
document.addEventListener('DOMContentLoaded', function () {
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach((faq) => {
    const answer = faq.querySelector('.faq-answer');
    // Set initial state
    if (faq.open) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = 1;
    } else {
      answer.style.maxHeight = '0px';
      answer.style.opacity = 0;
    }
    faq.addEventListener('toggle', function () {
      if (faq.open) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = 1;
      } else {
        answer.style.maxHeight = '0px';
        answer.style.opacity = 0;
      }
    });
  });
});
