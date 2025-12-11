# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

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
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### AI/ML
![Claude AI](https://img.shields.io/badge/Claude_AI-8A63D2?style=for-the-badge&logo=anthropic&logoColor=white)

### DevOps & Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

---

## 🚀 빠른 시작

### 전제 조건

```bash
# Node.js 18.0 이상
node --version

# MongoDB 설치 또는 MongoDB Atlas 계정
---

## 📦 설치된 모든 확장
mhutchie.git-graph
ms-python.debugpy
ms-python.python
ms-python.vscode-pylance
ms-python.vscode-python-envs
ms-toolsai.jupyter
ms-toolsai.jupyter-keymap
ms-toolsai.jupyter-renderers
ms-toolsai.vscode-jupyter-cell-tags
ms-toolsai.vscode-jupyter-slideshow


## 실행방법

cd backend
1.node server.js 
2.ngrok [아이피] [포트]
따로

#### 📄 package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module", 
  "main": "server.js"

}
---


```

### API 테스트

```bash
# HumanMovieProject API 명세 ()

이 문서는 HumanMovieProject 서버에서 제공하는 주요 API 엔드포인트를 한눈에 확인할 수 있는 명세입니다.
API 테스트하는법 postman
---

## 1. 질문 목록 조회
- **URL**: `http://125.129.177.130:4000/questions`  
- **설명**: 사용자의 영화/음악 취향을 묻는 질문 목록 반환  

---

## 2. 인기 영화 추천
- **URL**: `http://125.129.177.130:4000/select1`  
- **설명**: 인기 영화 리스트 반환  

---

## 3. 최근 개봉작 추천
- **URL**: `http://125.129.177.130:4000/select2`  
- **설명**: 최근 개봉 영화 리스트 반환  

---

## 4. 장르별 추천
- **URL**: `http://125.129.177.130:4000/select3`  
- **설명**: 장르별 추천 영화 리스트 반환  

---

## 5. 추천 받기 (영화 + 음악)
- **URL**: `http://125.129.177.130:4000/recommend`  
- **설명**: 사용자가 선택한 항목 5개를 기반으로 영화 3개 + 음악 3개 추천  

---

## 6. 선택 기록 확인
- **URL**: `http://125.129.177.130:4000/selections`  
- **설명**: 지금까지 저장된 사용자의 선택 목록 조회  


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
        <sub><b>임찬혁</b></sub>
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
