<script>
  import emailjs from "@emailjs/browser";

  let formData = {
    name: '',
    email: '',
    message: '',
  };

  let isSubmitting = false;
  let feedbackMessage = '';

  async function sendEmail(event) {
    event.preventDefault();

    isSubmitting = true;
    feedbackMessage = '';

    try {
      const response = await emailjs.send(
        'service_ng4dfp8',
        'template_iqi75iy',
        formData,
        'm7QOnWtN0pUDSaIeK'
      );

      if (response.status === 200) {
        feedbackMessage = 'Thank you for reaching out! Your message has been successfully sent. I’ll get back to you as soon as possible.';
        formData = { name: '', email: '', message: '' };
      } else {
        feedbackMessage = 'Failed to send message. Please try again.';
      }
    } catch (error) {
      console.error('Error sending email:', error);
      feedbackMessage = 'An error occurred. Please try again later.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<form on:submit={sendEmail}>
  <div class="row g-3">
    <div class="col-md-6">
      <input
        type="text"
        class="form-control bg-3 border border-1 rounded-3"
        id="name"
        name="name"
        placeholder="Your name"
        bind:value={formData.name}
        required
      />
    </div>
    <div class="col-md-6">
      <input
        type="email"
        class="form-control bg-3 border border-1 rounded-3"
        id="email"
        name="email"
        placeholder="Email address"
        bind:value={formData.email}
        required
      />
    </div>
    <div class="col-12">
      <textarea
        class="form-control bg-3 border border-1 rounded-3"
        id="message"
        name="message"
        placeholder="Write your message here..."
        bind:value={formData.message}
        required
      ></textarea>
    </div>
    <div class="col-12">
      <button
        type="submit"
        class="btn btn-primary-2 rounded-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <i class="ri-arrow-right-up-line"></i>
      </button>
    </div>
  </div>
  {#if feedbackMessage}
    <p class="mt-3">{feedbackMessage}</p>
  {/if}
</form>