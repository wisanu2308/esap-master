<template>
  <section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span>Section Title</span>
      <h2>Contact</h2>
      <p>
        The company is pleased to hear from you and our team will get back to
        you as soon as possible.
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-5">
          <div class="info-wrap">
            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>
                  62/317 Soi Seri-Thai72,Reri-Thai Rd.,Meanburi,Bangkok,10510.
                </p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call TH</h3>
                <p>662 02-124-5611, //CS: 662 97-236-8624</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email TH</h3>
                <p>support@esap.co.th</p>
              </div>
            </div>
            <!-- End Info Item -->

            <iframe
              src="https://www.google.com/maps/place/309+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B5%E0%B9%84%E0%B8%97%E0%B8%A2+72+%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%A1%E0%B8%B5%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10510/@13.8071784,100.7196711,3a,16.2y,26.37h,82.22t/data=!3m7!1e1!3m5!1sETS9h5CC7cXZqpElRDi0nw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.782742111158598%26panoid%3DETS9h5CC7cXZqpElRDi0nw%26yaw%3D26.373327319234544!7i16384!8i8192!4m6!3m5!1s0x311d647a961ed131:0x71953fb5612e15fc!8m2!3d13.8074677!4d100.7196298!16s%2Fg%2F11lj013wr9?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
              frameborder="0"
              style="border: 0; width: 100%; height: 270px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>

        <div class="col-lg-7">
          <form
            action="forms/contact.php"
            method="post"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <label for="name-field" class="pb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  class="form-control"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <label for="email-field" class="pb-2">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="subject-field" class="pb-2">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="message-field" class="pb-2">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  id="message-field"
                  required=""
                ></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>

                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
</template>
