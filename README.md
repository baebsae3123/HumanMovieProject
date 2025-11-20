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


## 5. ⚙️ 설치 및 실행 방법

### 📦 전체 시스템 요구사항

- Node.js 18.0+
- Python 3.11+
- Anthropic API 키

---
