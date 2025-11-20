# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

산출물 : https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5

산출물 모바일형 2 : https://elude-yearn-55574295.figma.site/

데이터베이스: mongodb 사용

# 🎬 미루어보자 (Mirueoboja)

취향을 분석해서 맞춤 영화 추천을 제공하는 웹 애플리케이션

## 실행 방법

### 1. 백엔드 설치 및 실행

| 단계                    | 설명                                | 명령어                                                                                                                                        |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. Git 클론 및 폴더 이동** | GitHub에서 백엔드 프로젝트 클론 후 폴더 이동      | `git clone https://github.com/your-username/mirueoboja-backend.git`<br>`cd mirueoboja-backend`                                             |
| **2. 가상환경 생성 및 활성화**  | Python 가상환경 생성 및 활성화              | **Windows**: `python -m venv venv`<br>`venv\Scripts\activate`<br>**macOS/Linux**: `python3 -m venv venv`<br>`source venv/bin/activate` |
| **3. 의존성 설치**         | `requirements.txt` 파일을 이용해 의존성 설치 | `pip install -r requirements.txt`                                                                                                    |
| **4. 환경 변수 설정**       | `.env` 파일에 Anthropic API 키 설정     | `.env` 파일에 다음 내용 추가: `ANTHROPIC_API_KEY=your_api_key_here`                                                                            |
| **5. 개발 서버 실행**       | 개발 서버 실행 (FastAPI)                | `python main.py` <br> 또는 <br> `uvicorn main:app --reload --host 0.0.0.0 --port 8000`                                           |

---

## 🗂️ 프로젝트 파일 구성

### 주요 구성 요소:

1. **server.js**: 메인 서버 파일
   - Express 기반 RESTful API
   - MongoDB와 Mongoose ORM
   - JWT 인증 시스템
   - 사용자, 제품, 주문 관리 기능

2. **package.json**: 의존성 관리
   - 필요한 패키지들:
     - express (웹 프레임워크)
     - mongoose (MongoDB ORM)
     - jsonwebtoken (JWT 인증)
     - bcryptjs (비밀번호 암호화)
     - cors (CORS 처리)

3. **.env.example**: 환경 변수 템플릿
   - MongoDB 연결 정보
   - JWT 비밀키
   - 서버 포트 설정

---

### 2. 프로젝트 실행 (로컬 환경)

1. 프로젝트 폴더 생성

```bash
mkdir figma-backend
cd figma-backend
파일 생성 (server.js, package.json, .env.example) 후, 코드 복사

.env 파일 생성

bash
코드 복사
cp .env.example .env
의존성 설치

bash
코드 복사
npm install
MongoDB 실행 (별도 터미널에서)

bash
코드 복사
mongod
개발 서버 실행

bash
코드 복사
npm run dev
서버 주소: http://localhost:3000

3. 백엔드 배포 (클라우드)
백엔드를 클라우드 서버에 배포하여 인터넷에서 접근 가능하게 설정할 수 있습니다.

추천 배포 플랫폼:
Vercel (가장 쉬운 방법, 무료)

Vercel CLI 설치:

bash
코드 복사
npm i -g vercel
프로젝트 폴더에서 배포:

bash
코드 복사
vercel
MongoDB Atlas 사용 (무료 클라우드 DB):

MongoDB Atlas에서 클러스터 생성

Heroku (무료 → 유료 전환 가능)

Heroku CLI 설치 후 로그인 및 앱 생성:

bash
코드 복사
heroku login
heroku create my-backend
Git으로 배포:

bash
코드 복사
git init
git add .
git commit -m "Initial commit"
git push heroku main
Railway (무료 $5 크레딧 제공)

Railway 사이트 접속

GitHub 저장소 연결 후 자동 배포

AWS / Google Cloud / Azure (전문가용)

EC2, App Runner, Cloud Run 등 사용

⚙️ 전체 프로세스 요약
로컬 개발: 내 컴퓨터에서 개발 → GitHub에 코드 올리기

클라우드 배포: 클라우드 서비스 (Vercel, Railway, Heroku 등)에서 자동 배포

MongoDB 저장소: MongoDB Atlas를 이용한 클라우드 데이터베이스 관리

📦 시스템 요구사항
Node.js 18.0+

Python 3.11+

Anthropic API 키 (AI 추천 시스템)

📁 프로젝트 파일 구조
bash
코드 복사
figma-backend/
├── server.js          # 메인 서버 코드
├── package.json       # 의존성 정보
├── .env              # 환경 변수 (절대 Git에 올리지 말것!)
├── .env.example      # 환경 변수 예시
├── .gitignore        # Git에서 제외할 파일들
└── README.md         # 프로젝트 설명 파일
🚀 배포 가이드
Railway에서 가장 쉽게 배포 가능

Heroku: Git 배포 및 환경 설정

MongoDB Atlas를 이용하여 데이터베이스 연결

배포 후 서버를 https://your-deployed-url로 확인할 수 있습니다.

💡 참고
API 문서: API Docs에서 상세한 API 엔드포인트를 확인할 수 있습니다.

MongoDB 연결: 클라우드에서 데이터베이스를 관리하려면 MongoDB Atlas 사용을 추천합니다.

🎯 가장 쉬운 방법:

Railway 사이트 접속

GitHub 연결

클릭 몇 번

배포 완료 ✅
