# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

산출물 : https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5

산출물 모바일형 2 : https://elude-yearn-55574295.figma.site/

데이터베이스: mongodb 사용

# 🎬 미루어보자 (Mirueoboja)



## 실행방법

| 단계                    | 설명                                | 명령어                                                                                                                                        |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. Git 클론 및 폴더 이동** | GitHub에서 백엔드 프로젝트 클론 후 폴더 이동      | `bash git clone https://github.com/your-username/mirueoboja-backend.git cd mirueoboja-backend `                                            |
| **2. 가상환경 생성 및 활성화**  | Python 가상환경 생성 및 활성화              | **Windows**: `bash python -m venv venv venv\Scripts\activate ` <br> **macOS/Linux**: `bash python3 -m venv venv source venv/bin/activate ` |
| **3. 의존성 설치**         | `requirements.txt` 파일을 이용해 의존성 설치 | `bash pip install -r requirements.txt `                                                                                                    |
| **4. 환경 변수 설정**       | `.env` 파일에 Anthropic API 키 설정     | `.env` 파일에 다음 내용 추가: `env ANTHROPIC_API_KEY=your_api_key_here `                                                                            |
| **5. 개발 서버 실행**       | 개발 서버 실행 (FastAPI)                | `bash python main.py ` <br> 또는 <br> `bash uvicorn main:app --reload --host 0.0.0.0 --port 8000 `                                           |

2️⃣ 실제 서비스를 위한 배포 (클라우드)
백엔드를 인터넷에서 접근 가능하게 하려면 클라우드 서버에 배포해야 합니다:
추천 배포 플랫폼:
A. Vercel (가장 쉬움, 무료)
bash# 1. Vercel CLI 설치
npm i -g vercel

# 2. 프로젝트 폴더에서 배포
vercel

# 3. MongoDB Atlas 사용 (무료)
# https://www.mongodb.com/cloud/atlas 에서 클러스터 생성
B. Heroku (무료 → 유료 전환)
bash# 1. Heroku CLI 설치 후
heroku login
heroku create my-backend

# 2. Git으로 배포
git init
git add .
git commit -m "Initial commit"
git push heroku main
C. Railway (무료 $5 크레딧)

https://railway.app 접속
GitHub 저장소 연결
자동 배포 완료

D. AWS / Google Cloud / Azure (전문가용)

EC2, App Runner, Cloud Run 등 사용
더 많은 설정 필요


3️⃣ 전체 프로세스 요약백엔드 배포 가이드문서 # 백엔드 배포 완벽 가이드

## 📁 1단계: 로컬에서 코드 작성

```bash
# 프로젝트 폴더 구조
figma-backend/
├── server.js          # 메인 서버 코드
├── package.json       # 의존성 정보
├── .env              # 환경 변수 (절대 Git에 올리지 말것!)
├── .env.example      # 환경 변수 예시
├── .gitignore        # Git간단 요약:
📍 저장 위치

코드 저장: GitHub (버전 관리)
데이터 저장: MongoDB Atlas (클라우드 데이터베이스)
서버 실행: Vercel/Railway/Render (클라우드 서버)

🎯 가장 쉬운 방법
bash# 1. Railway 사이트 접속
# 2. GitHub 연결
# 3. 클릭 몇 번
# 4. 완료! ✅
핵심: 내 컴퓨터에서 개발 → GitHub에 코드 올리기 → 클라우드 서비스에서 자동 배포

## 5. ⚙️ 설치 및 실행 방법

### 📦 전체 시스템 요구사항

- Node.js 18.0+
- Python 3.11+
- Anthropic API 키

---
