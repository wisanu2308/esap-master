<template>
  <div class="min-h-screen py-32">
    <div class="container mx-auto px-4 pb-4">
      <!-- Section Title -->
      <PageTitle
        title="Contact"
        description="The company is pleased to hear from you and our team will get back to
        you as soon as possible."
      />
      <!-- End Section Title -->

      <div class="flex flex-col lg:flex-row justify-center items-start gap-5">
        <div class="w-full lg:w-1/2 p-5 shadow-md flex flex-col gap-5">
          <ContactItem
            v-for="item in contactItems"
            :key="item.id"
            :iconClass="item.iconClass"
            :title="item.title"
            :value="item.value"
          />

          <div class="w-full">
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
        <div class="w-full lg:w-1/2 p-5 shadow-md flex flex-col gap-5">
          <form action="forms/contact.php" method="post">
            <div class="w-full flex flex-col items-start gap-6">
              <div class="w-full flex flex-row gap-5">
                <div class="w-full flex flex-col justify-start items-start">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input
                    v-model="name"
                    type="text"
                    class="w-full p-2 border border-solid border-gray-300"
                    required=""
                  />
                </div>

                <div class="w-full flex flex-col justify-start items-start">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="w-full p-2 border border-solid border-gray-300"
                    required=""
                  />
                </div>
              </div>

              <div class="w-full flex flex-col justify-start items-start">
                <label for="subject-field" class="pb-2">Subject</label>
                <input
                  v-model="subject"
                  type="text"
                  class="w-full p-2 border border-solid border-gray-300"
                  required=""
                />
              </div>

              <div class="w-full flex flex-col justify-start items-start">
                <label for="message-field" class="pb-2">Message</label>
                <textarea v-model="message" class="w-full p-2 border border-solid border-gray-300" required="" />
              </div>

              <button
                type="submit"
                class="mx-auto bg-cyan-300 text-white py-2 px-10 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  layout: "portal",

  data() {
    return {
      contactItems: [
        {
          iconClass: "bi bi-geo-alt",
          title: "Address",
          value: "62/317 Soi Seri-Thai72,Reri-Thai Rd.,Meanburi,Bangkok,10510.",
        },
        {
          iconClass: "bi bi-telephone",
          title: "Phone",
          value: "+66 2 123 4567",
        },
        {
          iconClass: "bi bi-envelope",
          title: "Email",
          value: "info@example.com",
        },
      ],
    };
  },
};
</script>
