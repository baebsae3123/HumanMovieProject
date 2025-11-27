# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

산출물 : https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5

산출물 모바일형 2 : https://elude-yearn-55574295.figma.site/

데이터베이스: mongodb 사용

# 🎬 미루어보자 (Mirueoboja)

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**AI 기반 개인 맞춤형 영화 추천 플랫폼**

취향을 분석해서 당신만을 위한 영화를 찾아드립니다 🎥

[데모 보기](https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5) · [모바일 버전](https://elude-yearn-55574295.figma.site/) · [이슈 제보](https://github.com/your-username/mirueoboja/issues)

</div>

---

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🎯 프로젝트 개요](#-프로젝트-개요)
- [🏗️ 기술 스택](#️-기술-스택)
- [🚀 빠른 시작](#-빠른-시작)
- [📦 설치 방법](#-설치-방법)
- [⚙️ 환경 설정](#️-환경-설정)
- [🎮 사용 방법](#-사용-방법)
- [📁 프로젝트 구조](#-프로젝트-구조)
- [🔌 API 문서](#-api-문서)
- [🤝 기여하기](#-기여하기)
- [📄 라이선스](#-라이선스)

---

## ✨ 주요 기능

<table>
<tr>
<td width="50%">

### 🎭 AI 취향 분석
- Claude AI 기반 개인화된 취향 분석
- 사용자 선호도 학습 및 저장
- 실시간 영화 추천 알고리즘

</td>
<td width="50%">

### 🎬 스마트 추천
- 장르, 감독, 배우 기반 추천
- 평점 및 리뷰 데이터 활용
- 최신 트렌드 반영

</td>
</tr>
<tr>
<td width="50%">

### 👤 사용자 관리
- JWT 기반 보안 인증
- 개인 프로필 및 취향 관리
- 시청 기록 추적

</td>
<td width="50%">

### 📱 반응형 디자인
- 모바일 최적화 UI
- 크로스 플랫폼 지원
- 직관적인 사용자 경험

</td>
</tr>
</table>

---

## 🎯 프로젝트 개요

**미루어보자**는 AI를 활용하여 사용자의 영화 취향을 분석하고, 개인화된 영화를 추천하는 플랫폼입니다. 
무엇을 볼지 고민하는 시간을 줄이고, 당신이 진짜 좋아할 영화를 찾아드립니다.

### 💡 탄생 배경
- 넷플릭스 같은 OTT 서비스의 영화가 너무 많아서 선택이 어려움
- 단순 평점이 아닌 개인 취향 기반 추천의 필요성
- AI 기술을 활용한 더 정확한 추천 시스템 구현

---

## 🏗️ 기술 스택

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### AI/ML
![Claude AI](https://img.shields.io/badge/Claude_AI-8A63D2?style=for-the-badge&logo=anthropic&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-191919?style=for-the-badge&logo=anthropic&logoColor=white)

### DevOps & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 빠른 시작

### 전제 조건

```bash
# Node.js 18.0 이상
node --version

# Python 3.11 이상
python --version

# MongoDB 설치 또는 MongoDB Atlas 계정
```

### ⚡ 5분 안에 실행하기

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/mirueoboja.git
cd mirueoboja

# 2. 백엔드 설정
cd backend
npm install
cp .env.example .env
# .env 파일에 API 키 입력

# 3. 서버 실행
cd backend
node server.js


# 5. 브라우저에서 열기
# http://localhost:3000
```

---

## 📦 설치 방법

### 1️⃣ Node.js 백엔드 설치

```bash
# 프로젝트 폴더 생성
mkdir mirueoboja-backend
cd mirueoboja-backend

# 의존성 설치
npm install express mongoose cors jsonwebtoken bcryptjs dotenv

# 또는
npm install
```

#### 📄 package.json
```json
{
  "name": "mirueoboja-backend",
  "version": "1.0.0",
  "description": "AI 기반 영화 추천 백엔드",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1"
  }
}
```

### 2️⃣ Python AI 엔진 설치

```bash
# 가상환경 생성
python -m venv venv

# 가상환경 활성화
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# 의존성 설치
pip install -r requirements.txt
```

#### 📄 requirements.txt
```txt
fastapi==0.104.1
uvicorn==0.24.0
anthropic==0.7.0
pydantic==2.5.0
python-dotenv==1.0.0
pymongo==4.6.0
```

---

## ⚙️ 환경 설정

### 🔑 환경 변수 설정

#### Node.js Backend (.env)
```env
# MongoDB 연결
MONGODB_URI=mongodb://localhost:27017/mirueoboja
# 또는 MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mirueoboja

# JWT 설정
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# 서버 설정
PORT=3000
NODE_ENV=development

# Python AI 서버
PYTHON_API_URL=http://localhost:8000
```

#### Python Backend (.env)
```env
# Anthropic API
ANTHROPIC_API_KEY=your-anthropic-api-key-here

# MongoDB
MONGODB_URI=mongodb://localhost:27017/mirueoboja

# 서버 설정
PORT=8000
HOST=0.0.0.0
```

### 🗄️ MongoDB 설정

#### 로컬 MongoDB
```bash
# MongoDB 설치 후
mongod

# 데이터베이스 생성
mongo
> use mirueoboja
```

#### MongoDB Atlas (클라우드)
1. https://www.mongodb.com/cloud/atlas 접속
2. 무료 클러스터 생성
3. 데이터베이스 사용자 생성
4. IP 화이트리스트 설정 (0.0.0.0/0)
5. 연결 문자열 복사

---

## 🎮 사용 방법

### 개발 서버 실행

```bash
# 터미널 1: Node.js 백엔드
npm run dev

# 터미널 2: Python AI 서버
python main.py

# 터미널 3: MongoDB (로컬 사용시)
mongod
```

### API 테스트

```bash
# 헬스 체크
curl http://localhost:3000/api/health

# 회원가입
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "홍길동"
  }'

# 영화 추천 받기
curl -X POST http://localhost:8000/api/recommend \
  -H "Content-Type: application/json" \
  -d '{
    "preferences": {
      "genres": ["액션", "SF"],
      "mood": "스릴있는"
    }
  }'
```

---

## 📁 프로젝트 구조

```
mirueoboja/
├── 📂 backend/                 # Node.js 백엔드
│   ├── server.js              # 메인 서버
│   ├── package.json           # 의존성
│   ├── .env                   # 환경 변수
│   └── models/                # MongoDB 스키마
│       ├── User.js
│       ├── Movie.js
│       └── Recommendation.js
│
├── 📂 python-backend/         # Python AI 엔진
│   ├── main.py                # FastAPI 서버
│   ├── requirements.txt       # Python 의존성
│   ├── .env                   # 환경 변수
│   └── services/
│       ├── ai_service.py      # Claude AI 연동
│       └── recommendation.py  # 추천 알고리즘
│
├── 📂 frontend/               # 프론트엔드 (선택사항)
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── 📂 docs/                   # 문서
│   ├── API.md                 # API 문서
│   └── ARCHITECTURE.md        # 아키텍처 설명
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🔌 API 문서

### 🔐 인증 API

#### 회원가입
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "홍길동"
}
```

**응답**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "홍길동"
  }
}
```

#### 로그인
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 🎬 영화 API

#### 영화 목록 조회
```http
GET /api/movies?category=액션&page=1&limit=20
```

#### 영화 상세 정보
```http
GET /api/movies/:id
```

### 🤖 AI 추천 API

#### 개인화 추천
```http
POST /api/recommend
Authorization: Bearer {token}
Content-Type: application/json

{
  "preferences": {
    "genres": ["액션", "SF"],
    "mood": "긴장감 있는",
    "actors": ["톰 크루즈"]
  }
}
```

**응답**
```json
{
  "recommendations": [
    {
      "id": "movie_123",
      "title": "미션 임파서블",
      "score": 0.95,
      "reason": "액션과 SF 요소가 결합된 긴장감 넘치는 영화입니다"
    }
  ]
}
```

더 자세한 API 문서는 [API.md](docs/API.md)를 참고하세요.

---

## 🚢 배포

### Vercel (Node.js)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 환경 변수 설정
vercel env add MONGODB_URI
vercel env add JWT_SECRET
```

### Railway (Python)

```bash
# Railway CLI 설치
npm i -g @railway/cli

# 로그인 및 배포
railway login
railway up
```

### Docker

```bash
# 이미지 빌드
docker build -t mirueoboja-backend .

# 컨테이너 실행
docker run -p 3000:3000 -p 8000:8000 mirueoboja-backend
```

---

## 🧪 테스트

```bash
# 백엔드 테스트
npm test

# Python 테스트
pytest

# 통합 테스트
npm run test:integration
```

---

## 🤝 기여하기

기여는 언제나 환영합니다! 🎉

### 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 코딩 컨벤션

- JavaScript: [Airbnb Style Guide](https://github.com/airbnb/javascript)
- Python: [PEP 8](https://peps.python.org/pep-0008/)
- Commit: [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📞 문의 및 지원

- 📧 Email: support@mirueoboja.com
- 💬 Discord: [Join our community](https://discord.gg/mirueoboja)
- 🐛 Issue: [GitHub Issues](https://github.com/your-username/mirueoboja/issues)

---

## 👥 팀

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/baebsae3123">
        <img src="https://github.com/username1.png" width="100px;" alt=""/>
        <br />
        <sub><b>황인성</b></sub>
      </a>
      <br />
      <sub>Backend Lead</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Godfather-Chan">
        <img src="https://github.com/username2.png" width="100px;" alt=""/>
        <br />
        <sub><b>김철수</b></sub>
      </a>
      <br />
      <sub>AI Engineer</sub>
    </td>
  </tr>
</table>

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 🙏 감사의 말

- [Anthropic](https://www.anthropic.com/) - Claude AI 제공
- [MongoDB](https://www.mongodb.com/) - 데이터베이스
- [FastAPI](https://fastapi.tiangolo.com/) - Python 웹 프레임워크
- [Express.js](https://expressjs.com/) - Node.js 웹 프레임워크

---

<div align="center">

**⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요! ⭐**

Made with ❤️ by Mirueoboja Team

[🔝 맨 위로 가기](#-미루어보자-mirueoboja)

</div>
