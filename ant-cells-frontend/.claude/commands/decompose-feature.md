# Command: /decompose-feature

## 목적

사용자가 Feature 설명을 입력하면  
Feature를 Behavior Backlog와 UI Backlog로 분해한다.

이 Command는 다음 Skill을 사용한다.

.claude/skills/BEHAVIOR_DRIVEN_BACKLOG_GENERATOR.md

---

## 사용 방법

/decompose-feature <Feature 설명>

예

/decompose-feature 사용자 인증 시스템

/decompose-feature 게시물 관리 기능

/decompose-feature 관리자 대시보드 기능

---

## 중요 규칙 (Strict)

반드시 **Behavior Driven Backlog Generator Skill**을 사용한다.

이 Command는 **Feature를 Backlog로 분해하는 명령이다.**

다음 입력은 허용되지 않는다.

- 단일 Backlog Title
- 단일 사용자 행동
- 단일 UI 동작

예 (잘못된 입력)

사용자가 로그인 버튼을 클릭한다  
게시물 리스트 페이지가 게시물을 표시한다  
사용자가 게시물을 생성한다

이러한 입력은 이미 **Backlog 수준 작업**이다.

이 경우 Skill의 **입력 검증 규칙을 따른다.**

---

## 동작 규칙

1. 사용자가 입력한 Feature 설명을 읽는다
2. Feature가 Domain Feature 수준인지 확인한다
3. Behavior Driven Backlog Generator Skill을 실행한다
4. Skill이 Feature를 Behavior Backlog와 UI Backlog로 분해한다

---

## 출력 형식

출력 형식은 Skill 규칙을 따른다.

Behavior Backlog

Backlog Title  
Success Criteria
- ...
- ...
- ...

Todo
- ...
- ...
- ...

---

UI Backlog

Backlog Title  
Success Criteria
- ...
- ...
- ...

Todo
- ...
- ...
- ...

---

## 출력 규칙

- Behavior Backlog와 UI Backlog를 생성한다
- 모든 Backlog는 Title / Success Criteria / Todo 구조를 가진다
- Success Criteria는 3~4개 작성한다
- Todo는 최대 5개 작성한다
- Given / When / Then 형식은 사용하지 않는다

출력이 규칙을 따르지 않으면 다시 생성한다.

---

## 실행 지시

Use the **Behavior Driven Backlog Generator** skill.

Strictly follow the skill rules.

Generate:

1. Behavior Backlog
2. UI Backlog