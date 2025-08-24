<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <h1 class="welcome-title">WELCOME TO FDA RESTRICTED GOODS </h1>
      
      <div class="button-group">
        <NuxtLink to="/fdapermit" class="action-button primary">
          START PROGRAM
        </NuxtLink>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  head() {
    return {
      title: 'ยินดีต้อนรับสู่แพลตฟอร์ม',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'หน้าต้อนรับสำหรับแพลตฟอร์มที่ทันสมัยและใช้งานง่าย',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* พื้นหลังและโครงสร้างหลักของหน้า */
.welcome-container {
  display: flex;
  justify-content: center; /* จัดกึ่งกลางแนวนอน */
  align-items: center; /* จัดกึ่งกลางแนวตั้ง */
  min-height: 100vh; /* ความสูงเต็มหน้าจอ */
  background: linear-gradient(135deg, #50E3C2 0%, #016b5d 100%); /* พื้นหลังไล่เฉดสี */
  color: #fff; /* สีข้อความ */
  text-align: center;
  padding: 20px;
  box-sizing: border-box; /* รวม padding ในขนาดรวม */
  overflow: hidden; /* ซ่อนสิ่งที่เกินขอบ */
  position: relative;
}

/* เอฟเฟกต์พื้นหลังเป็นวงกลมเรืองแสง (Optional) */
.welcome-container::before,
.welcome-container::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1); /* วงกลมสีขาวโปร่งแสง */
  filter: blur(50px); /* ทำให้เบลอและดูเรืองแสง */
  z-index: 0;
}

.welcome-container::before {
  width: 250px;
  height: 250px;
  top: 10%;
  left: 15%;
  animation: float1 10s infinite ease-in-out alternate;
}

.welcome-container::after {
  width: 350px;
  height: 350px;
  bottom: 10%;
  right: 15%;
  animation: float2 12s infinite ease-in-out alternate-reverse;
}

@keyframes float1 {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, 30px); }
  100% { transform: translate(0, 0); }
}

@keyframes float2 {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-30px, -20px); }
  100% { transform: translate(0, 0); }
}


/* กล่องเนื้อหาหลัก */
.welcome-content {
  background-color: rgba(255, 255, 255, 0.1); /* พื้นหลังโปร่งแสงสำหรับเนื้อหา */
  padding: 40px 60px;
  border-radius: 15px;
  backdrop-filter: blur(10px); /* เอฟเฟกต์เบลอพื้นหลังที่อยู่ด้านหลัง */
  border: 1px solid rgba(255, 255, 255, 0.2); /* ขอบโปร่งแสง */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
  z-index: 1; /* ให้อยู่เหนือเอฟเฟกต์พื้นหลัง */
  animation: fadeInScale 0.8s ease-out forwards; /* Animation ตอนโหลดหน้า */
  transform: scale(0.9); /* ซ่อนเริ่มต้น */
  opacity: 0;
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* หัวข้อต้อนรับ */
.welcome-title {
  font-size: 3.5em;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* เงาข้อความ */
  line-height: 1.2;

  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
  @media (max-width: 480px) {
    font-size: 1.8em;
  }
}

/* ข้อความรอง */
.welcome-subtitle {
  font-size: 1.3em;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.5;

  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
  @media (max-width: 480px) {
    font-size: 1em;
  }
}

/* กลุ่มปุ่ม */
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px; /* ระยะห่างระหว่างปุ่ม */
  flex-wrap: wrap; /* ให้ปุ่มขึ้นบรรทัดใหม่ได้ */
}

/* สไตล์ปุ่มทั่วไป */
.action-button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 50px; /* ทำให้ปุ่มโค้งมนมาก */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  min-width: 180px; /* กำหนดความกว้างขั้นต่ำ */
}

/* สไตล์ปุ่มหลัก (Primary Button) */
.action-button.primary {
  background-color: #ffffff; /* สีขาว */
  color: #363834; /* สีข้อความตามสีพื้นหลัง */
}

.action-button.primary:hover {
  background-color: #f0f0f0;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* สไตล์ปุ่มรอง (Secondary Button) */
.action-button.secondary {
  background-color: transparent; /* โปร่งแสง */
  color: #ffffff; /* สีข้อความขาว */
  border: 2px solid #ffffff; /* มีขอบสีขาว */
}

.action-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.2); /* พื้นหลังโปร่งแสงเล็กน้อยเมื่อ Hover */
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments for button group */
@media (max-width: 600px) {
  .button-group {
    flex-direction: column; /* ปุ่มเรียงจากบนลงล่างเมื่อหน้าจอเล็ก */
    align-items: center;
  }
  .action-button {
    width: 80%; /* ปุ่มขยายเต็มความกว้างในแนวตั้ง */
    margin-bottom: 15px;
  }
}
</style>