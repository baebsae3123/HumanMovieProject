# 제목: 미루어보자 

취향을 분석해서 영화를 만든다

산출물 : https://claude.ai/public/artifacts/9adf270e-a069-4939-a8b7-b686de9da0d5

산출물 모바일형 2 : https://elude-yearn-55574295.figma.site/

<img width="462" height="1033" alt="image" src="https://github.com/user-attachments/assets/4d27ef6d-6dad-42d8-8cd7-b3bde04750d7" />

2. 🛠️ 기술 스택 (Tech Stack)
프로젝트는 프론트엔드(React)와 백엔드(FastAPI)를 분리한 마이크로서비스 아키텍처를 사용합니다.
구분기술/도구상세 역할프론트엔드React 18사용자 인터페이스 및 인터랙션UI 라이브러리Tailwind CSS유틸리티 기반 스타일링 및 반응형 디자인아이콘Lucide React일관된 아이콘 시스템백엔드FastAPIRESTful API 서버 및 비즈니스 로직AI 엔진Anthropic Claude API취향 분석 및 맞춤 추천 생성언어Python 3.11+백엔드 개발 언어배포Vercel (Frontend) + Render (Backend)무료 호스팅 및 CI/CD

3. ✨ 주요 기능 구현 현황
3.1. 🎭 취향 테스트 시스템
기능구현 위치구현 내용상태인트로 페이지step === 'intro'서비스 소개 및 핵심 가치 제안✅ 완성질문 플로우step === 'test'8개 질문, 진행률 표시, 애니메이션✅ 완성답변 수집answers state사용자 선택 데이터 저장 및 관리✅ 완성AI 분석 요청analyzeWithAI()Claude API 호출 및 프롬프트 생성✅ 완성결과 표시step === 'result'성향 타입, 영화 추천, 음악 플레이리스트✅ 완성
3.2. 🤖 AI 분석 엔진 (FastAPI)
기능엔드포인트구현 내용상태취향 분석 APIPOST /api/analyzeClaude에게 답변 전송 및 결과 파싱✅ 완성프롬프트 생성create_analysis_prompt()구조화된 분석 지시사항 생성✅ 완성에러 처리전역 예외 처리API 실패 시 폴백 로직✅ 완성데이터 검증Pydantic 모델입력 데이터 자동 검증✅ 완성상태 확인GET /api/health서버 및 AI 연결 상태 체크✅ 완성

movie-taste-test.tsx은 웹형
나머지는 모바일형 파일
