const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 이메일 전송 설정
const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail 사용 (다른 SMTP 서비스도 가능)
    auth: {
        user: "ysal4505@gmail.com", // 본인의 이메일
        pass: "lbea mskq yvyf mcpo"  // 본인의 앱 비밀번호 (보안상 앱 비밀번호 발급 필요)
    }
});
app.post("/send-email", async (req, res) => {
    const { comp, phone, message } = req.body;

    const mailOptions = {
        from: comp,
        to: "ysal77@gmail.com", // 수신자 이메일
        subject: '문의 사항 도착!',
        text: '보낸 사람:  ${comp} (${phone})\n\n메시지:\n${message}'
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "이메일이 성공적으로 전송되었습니다!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "이메일 전송에 실패했습니다." });
    }
});

app.listen(8000, () => {
    console.log("서버 실행 중: http://localhost:8000");
});