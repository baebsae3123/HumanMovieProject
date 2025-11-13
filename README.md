# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

산출물 : https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5

산출물 모바일형 2 : https://elude-yearn-55574295.figma.site/

# 🎬 미루어보자 (Mirueoboja)

## 1. 💡 프로젝트 개요 및 목표

**미루어보자**는 생성형 AI 기술을 활용하여 사용자의 영화 취향을 심층 분석하고, 개인 맞춤형 영화 및 음악 플레이리스트를 추천하는 웹 서비스입니다.

### 🎯 핵심 가치

* **개인화된 추천**: 단순 장르 선호가 아닌, 감정·분위기·서사 스타일 기반 깊이 있는 분석
* **AI 기반 큐레이션**: Claude AI를 활용한 실시간 취향 분석 및 맞춤 추천
* **통합 경험**: 영화 추천과 함께 분위기에 맞는 음악 플레이리스트 제공
* **직관적 UX**: 8개의 간단한 질문으로 완성되는 빠른 테스트

### 📌 해결하는 문제

1. **취향 인식 부족**: 사용자가 자신의 영화 취향을 명확히 파악하지 못함
2. **OTT 추천의 한계**: 시청 이력 기반 추천의 콜드 스타트 문제 및 패턴 고착화
3. **선택 피로**: 수많은 콘텐츠 속에서 "오늘 뭘 볼까" 결정의 어려움

---

## 2. 🛠️ 기술 스택 (Tech Stack)

프로젝트는 **프론트엔드(React)와 백엔드(FastAPI)를 분리**한 마이크로서비스 아키텍처를 사용합니다.

| 구분 | 기술/도구 | 상세 역할 |
|------|----------|----------|
| **프론트엔드** | React 18 | 사용자 인터페이스 및 인터랙션 |
| **UI 라이브러리** | Tailwind CSS | 유틸리티 기반 스타일링 및 반응형 디자인 |
| **아이콘** | Lucide React | 일관된 아이콘 시스템 |
| **백엔드** | FastAPI | RESTful API 서버 및 비즈니스 로직 |
| **AI 엔진** | Anthropic Claude API | 취향 분석 및 맞춤 추천 생성 |
| **언어** | Python 3.11+ | 백엔드 개발 언어 |
| **배포** | Vercel (Frontend) + Render (Backend) | 무료 호스팅 및 CI/CD |

---

## 3. ✨ 주요 기능 구현 현황

### 3.1. 🎭 취향 테스트 시스템

| 기능 | 구현 위치 | 구현 내용 | 상태 |
|------|----------|----------|------|
| **인트로 페이지** | `step === 'intro'` | 서비스 소개 및 핵심 가치 제안 | ✅ 완성 |
| **질문 플로우** | `step === 'test'` | 8개 질문, 진행률 표시, 애니메이션 | ✅ 완성 |
| **답변 수집** | `answers` state | 사용자 선택 데이터 저장 및 관리 | ✅ 완성 |
| **AI 분석 요청** | `analyzeWithAI()` | Claude API 호출 및 프롬프트 생성 | ✅ 완성 |
| **결과 표시** | `step === 'result'` | 성향 타입, 영화 추천, 음악 플레이리스트 | ✅ 완성 |

### 3.2. 🤖 AI 분석 엔진 (FastAPI)

| 기능 | 엔드포인트 | 구현 내용 | 상태 |
|------|-----------|----------|------|
| **취향 분석 API** | `POST /api/analyze` | Claude에게 답변 전송 및 결과 파싱 | ✅ 완성 |
| **프롬프트 생성** | `create_analysis_prompt()` | 구조화된 분석 지시사항 생성 | ✅ 완성 |
| **에러 처리** | 전역 예외 처리 | API 실패 시 폴백 로직 | ✅ 완성 |
| **데이터 검증** | Pydantic 모델 | 입력 데이터 자동 검증 | ✅ 완성 |
| **상태 확인** | `GET /api/health` | 서버 및 AI 연결 상태 체크 | ✅ 완성 |

### 3.3. 🎨 UX/UI 시스템

| 기능 | 파일/경로 | 구현 내용 |
|------|----------|----------|
| **테마 시스템** | Tailwind 그라데이션 | 6가지 성향별 맞춤 색상 팔레트 |
| **애니메이션** | CSS 트랜지션 | 부드러운 화면 전환 및 호버 효과 |
| **로딩 UX** | `loading` state | AI 분석 중 스피너 및 진행 메시지 |
| **공유 기능** | `shareResult()` | 모바일 Web Share API 통합 |
| **반응형** | Tailwind 브레이크포인트 | 모바일/태블릿/데스크톱 최적화 |

---

## 4. 📁 폴더 구조 및 역할 지도

### 프론트엔드 (React)

```
movie-taste-frontend/
├── src/
│   ├── components/
│   │   └── MovieTasteTest.jsx    # 메인 테스트 컴포넌트
│   ├── App.jsx                   # 루트 컴포넌트
│   └── index.css                 # Tailwind CSS 설정
├── public/
│   └── index.html
├── package.json
└── README.md
```

### 백엔드 (FastAPI)

```
movie-taste-backend/
├── main.py                       # FastAPI 앱 및 API 엔드포인트
├── models.py                     # Pydantic 데이터 모델
├── services/
│   └── ai_service.py             # Claude AI 통신 로직
├── utils/
│   └── prompt_builder.py         # 프롬프트 생성 유틸리티
├── requirements.txt              # Python 의존성
├── .env                          # 환경 변수 (로컬)
├── .gitignore
└── README.md
```

### 주요 파일 역할

| 파일 | 역할 |
|------|------|
| `MovieTasteTest.jsx` | 전체 UI 로직 및 상태 관리 |
| `main.py` | API 서버 진입점 및 라우팅 |
| `create_analysis_prompt()` | AI 프롬프트 엔지니어링 |
| `questions` 배열 | 8개 질문 데이터 정의 |
| `analyzeWithAI()` | 프론트엔드 → 백엔드 API 호출 |

---

## 5. ⚙️ 설치 및 실행 방법

### 📦 전체 시스템 요구사항

- Node.js 18.0+
- Python 3.11+
- Anthropic API 키

---

### 🎨 프론트엔드 설치 및 실행

#### 1. Git 클론 및 폴더 이동

```bash
git clone https://github.com/your-username/mirueoboja-frontend.git
cd mirueoboja-frontend
```

#### 2. 의존성 설치

```bash
npm install
```

#### 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
REACT_APP_API_URL=http://localhost:8000
```

#### 4. 개발 서버 실행

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속

#### 5. 빌드 (프로덕션)

```bash
npm run build
```

---

### 🔧 백엔드 설치 및 실행

#### 1. Git 클론 및 폴더 이동

```bash
git clone https://github.com/your-username/mirueoboja-backend.git
cd mirueoboja-backend
```

#### 2. 가상환경 생성 및 활성화

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### 3. 의존성 설치

```bash
pip install -r requirements.txt
```

#### 4. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

> 🔑 **API 키 받기**: https://console.anthropic.com → API Keys

#### 5. 개발 서버 실행

```bash
python main.py

# 또는
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

API 문서 확인: `http://localhost:8000/docs`

---

## 6. 🌐 배포 가이드

### 프론트엔드 배포 (Vercel)

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel

# 프로덕션
vercel --prod
```

**또는 Vercel 웹사이트에서:**
1. https://vercel.com 접속
2. GitHub 연결
3. 프로젝트 선택 → Deploy

### 백엔드 배포 (Render.com)

1. **requirements.txt** 확인
2. **Render.com** 회원가입
3. New Web Service → GitHub 연동
4. 환경 변수 설정:
   - `ANTHROPIC_API_KEY`: 발급받은 키
   - `PYTHON_VERSION`: 3.11.0
5. Build Command: `pip install -r requirements.txt`
6. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. Deploy 클릭!

---

## 7. 📊 API 명세

### POST /api/analyze

**요청:**
```json
{
  "answers": {
    "0": "dialogue",
    "1": "story",
    "2": "calm",
    "3": "slow",
    "4": "complex",
    "5": "feel",
    "6": "music-essential",
    "7": "drama"
  }
}
```

**응답:**
```json
{
  "personalityType": "감성 서사형",
  "description": "당신은 영화 속 깊은 감정과 서사에 몰입하는 타입입니다...",
  "traits": ["감정 공감력", "서사 몰입도", "대사 기억력"],
  "color": "bg-gradient-to-br from-purple-400 to-pink-400",
  "movies": [
    {
      "title": "기생충",
      "year": "2019",
      "director": "봉준호",
      "mood": "사회적 메시지",
      "ott": "넷플릭스",
      "reason": "치밀한 서사와 계급 갈등의 은유"
    }
  ],
  "playlist": [
    {
      "song": "시간을 달려서",
      "artist": "아이유",
      "mood": "감성적"
    }
  ],
  "directors": ["박찬욱", "이창동", "봉준호"]
}
```

---

## 8. 🔍 트러블슈팅

### 문제 1: CORS 에러

**증상:** 프론트엔드에서 API 호출 시 차단

**해결:**
```python
# main.py에서 CORS 설정 확인
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 또는 특정 도메인
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 문제 2: API 키 오류

**증상:** `401 Unauthorized` 에러

**해결:**
1. `.env` 파일에서 `ANTHROPIC_API_KEY` 확인
2. 키 앞뒤 공백 제거
3. https://console.anthropic.com 에서 키 유효성 확인

### 문제 3: Render 슬립 모드

**증상:** 첫 요청 시 10-15초 대기

**해결:**
- UptimeRobot으로 5분마다 핑 전송
- 또는 유료 플랜 업그레이드 ($7/월)

---

## 9. 🚀 향후 계획

### Phase 1 (완료)
- ✅ 8개 질문 기반 테스트
- ✅ Claude AI 통합
- ✅ 기본 영화 + 음악 추천

### Phase 2 (진행 중)
- 🔄 사용자 피드백 수집
- 🔄 추천 정확도 개선
- 🔄 OTT 직접 연동 (넷플릭스 API)

### Phase 3 (계획)
- 📋 결과 저장 및 재방문 기능
- 📋 소셜 공유 최적화
- 📋 커뮤니티 기능 (취향 비교)

---

## 10. 👥 팀 & 기여

- **기획**: 영화 취향 분석 로직 설계
- **프론트엔드**: React + Tailwind UI 구현
- **백엔드**: FastAPI + Claude AI 통합
- **디자인**: 6가지 성향별 색상 시스템

---

## 11. 📄 라이선스

MIT License

---

## 12. 📞 문의

- **이메일**: contact@mirueoboja.com
- **GitHub**: https://github.com/your-username/mirueoboja
- **피드백**: Issues 탭에서 의견 남겨주세요!

---

**Made with ❤️ and 🎬 by Mirueoboja Team**
movie-taste-test.tsx은 웹형
나머지는 모바일형 파일
