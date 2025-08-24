<template>
  <div>
    <Core-HeadBarEx
      :fixedwidth="false"
      :menus="menus"
      action="Invoice Detail"
      title="Invoice Control /"
      name="INVOICE DETAIL"
    ></Core-HeadBarEx>

    <div class="hx-48 esap-bg-ex"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12 h-auto" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-ex h-screen rounded-8" style="">
            <div
              class="
                btn-bar
                cursor-pointer
                font-14-300
                flex
                rounded-t-lg
                bg-white
                h-10
                items-center
              "
            >
              Reference No
              <v-spacer></v-spacer>
              <span class="font-semibold">ASDF123456800</span>
            </div>
            <div
              class="
                btn-bar-x
                cursor-pointer
                font-14-300
                flex
                rounded-b-lg
                bg-white
                h-10
                items-center
                mt-06
              "
            >
              <div
                class="
                  w-1/2
                  h-full
                  uppercase
                  flex flex-col
                  justify-center
                  items-center
                  bar-txt2
                "
              >
                P
              </div>
              <div
                class="
                  rbgx
                  bar-txt3
                  w-1/2
                  h-full
                  uppercase
                  flex flex-col
                  justify-center
                  rounded-br-lg
                  items-center
                  text-white
                "
                style="background-color: #ff7640"
              >
                READY
              </div>
            </div>

            <div
              @click="$router.push('/export/')"
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-6
                btn-bar
                text-white
              "
              style="background-color: #2f80ed"
            >
              Go to Declaration List
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-1
                btn-bar
                text-white
              "
              style="background-color: #2f80ed"
            >
              Go to Declaration Control
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-1
                btn-bar
                text-white
              "
              style="background-color: #2f80ed"
            >
              Blank Menu
              <v-spacer></v-spacer>
              <span class="font-semibold mr-0.5">
                <i style="font-size: 20px" class="fa-solid fa-circle-plus"></i>
              </span>
            </div>
            <div
              class="
                btn-bar3
                rounded-8
                cursor-pointer
                flex
                bg-white
                items-center
              "
              style="margin-top: 24px"
            >
              <img src="@/assets/images/svg/folder.svg" alt="" />
              <span class="mlx-15">Item (s)</span>
              <v-spacer></v-spacer>
              <span class="text-val">1</span>
            </div>
            <Core-Expansion
              bgcolor="#BB6BD9"
              bgminibox="#F7D716"
            ></Core-Expansion>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-padding">
              <div
                class="flex flex-col md:flex-row"
                style="margin-button: 19px"
              >
                <button class="head1txt">Short Declaration Control</button>
              </div>
              <div class="mt-5">
                <ExportShort-Declaration></ExportShort-Declaration>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data: () => {
    return {
      activeTab: 0,
      tabs: ["Invoice Control", "Invoice Detail"],

      menus: [
        {
          name: "Validate",
          icon: "fa-solid fa-list-check",
          path: "",
          color: "#6F9CDF",
          save: false,
        },
        {
          name: "Send",
          icon: "fa-solid fa-paper-plane",
          path: "",
          color: "#34C38F",
          save: false,
        },
        {
          name: "Print",
          icon: "fa-solid fa-print",
          path: "",
          color: "#FF7640",
          save: false,
        },
        {
          name: "Short Message",
          icon: "fa-solid fa-message",
          path: "",
          color: "#74788D",
          save: false,
        },
        {
          name: "Save",
          icon: "fa-solid fa-square-check",
          path: "",
          bgcolor: "#2F80ED",
          color: "#FFFFFF",
          save: true,
        },
      ],
    };
  },
};
</script>
  
<style>
</style>
  