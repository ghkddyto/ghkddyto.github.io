#리액트 네이티브 설치하기

##작성자 시스템 환경

CPU: Ryzen 5 5600X

OS:  Windows 10 64 bit 21H2

python: 3.10.1-amd64

Java JDK: 1.8.0_311

node.js: 14.18.0

npm: 6.14.15

React-native: 2.0.1

Android Studio: 2020.3.1.24

Android SDK: Android 11.0(R)

 

* 설치 과정은 포맷 직후 진행 함

 

##python

리액트 네이티브 빌드에 필요.

파이썬 공식 홈페이지( https://www.python.org/downloads/ )에서 

latest version 다운로드 시 cpu 사양에 맞게 자동으로 최신버전 다운로드

 

 

##Java JDK

[오라클 공식 홈페이지]( https://www.oracle.com/java/technologies/downloads/#java8-windows )에서 다운로드

설치 후 환경 변수 설정 필수

 

변수 명: JAVA_HOME

값: C:\Program Files\Java\jdk1.8.0_311   (본인 jdk 버전)

 

변수 명: CLASSPATH

값: %JAVA_HOME%\lib

 

변수 명: PATH (기존에 있으므로 편집에서 추가)

값: C:\Program Files\Java\jdk1.8.0_311\bin

 

*환경 변수 모두 설정한 후 명령 프롬프트(이하 cmd창)에서 java -version 입력 후 버전 정상 출력 꼭 확인

 

 

##Node.js

Node.js 일부 버전에서 리액트 네이티브와 호환성 문제 있음

작성자는 14.18.0 버전에서 호환 성공

[Node js 공식 홈페이지]( https://nodejs.org/ko/download/releases/ )에서 버전 선택해서 다운로드

설치 시 npm도 같이 설치 됨

 

*설치 후 cmd창에서 node --version과 npm --version 입력 해서 정상 출력 꼭 확인

 

##Android Studio

설치 전 가상화 기술을 활성화 해야 하는데

AMD CPU 기준 SVM mode와 Hyper-v 기술이 있음

Hyper-v는 윈도우 운영체제에 탑재되있는데 성능 문제나 오류를 많이 겪음

SVM mode는 asus 메인보드 기준 부팅 후 바이오스 진입해서 Advanced - CPU configuration - SVM mode Enabled

 

공식 홈페이지( https://developer.android.com/studio )에서 스튜디오 다운로드후 설치

스튜디오 우측 상단 AVD Manager에서 좌측 하단 Create Virtual Devices클릭 후 아무 기종 선택

다음 페이지에서 x86 Images 선택 후 원하는 버전, x86_64, 버전 (Google APIs) 선택 (* 10.0, 11.0, 12.0 모두 구동 확인 )

완성된 가상머신을 실행해보고 오류 시 다른 아키텍쳐나 버전 선택

 

가상머신 설치 후 스튜디오 좌측 상단 File - Settings - System Settings - Android SDK 에서 SDK 경로 확인 후 환경 변수 설정

 

변수 명: ANDROID_HOME

값: SDK 경로

 

변수 명: PATH

값: SDK 경로\platform-tools

 

*설정 후 cmd 창에서 adb version 입력해서 버전이 나오는지 꼭 확인

 

 

##React-native

cmd창에서 npm install -g react-native-cli 입력하면 설치

 

원하는 경로에서 react-native init 프로젝트명 입력 시 리액트 네이티브 프로젝트 생성

cmd창에서 *프로젝트 경로로 이동하고 react-native start 입력 (node js 실행)

마찬가지로 같은 경로에서 cmd창을 하나 더 실행한 후 react-native run-android 입력 (가상머신과 연결)

*위 안드로이드 스튜디오에서 만든 가상머신을 미리 켜놔야 함

 

가상머신 화면에서 Welcome to React Native 화면이 나온다면 성공

첫 설치에서는 시간이 걸리고 두번째 부터는 cmd창을 두개 켤 필요 없이 프로젝트 경로에서 react-native run-android만 입력하면

node js는 자동으로 같이 실행

 

 

##Visual Studio Code

리액트 네이티브 프로젝트의 코드 파일인 App.js 편집에 유용

공식 홈페이지( https://code.visualstudio.com/ )에서 최신 버전 설치

상단의 터미널탭에서 새 터미널을 누르면 PowerShell 기반의 터미널이 하단에 생성

PowerShell에선 기본적으로 스크립트 실행 권한이 비활성화 되어있음

터미널 창에서 get-ExecutionPolicy 입력 시 Restricted(기본)이 나오면 스크립트 실행 불가

Set-ExecutionPolicy RemoteSigned 입력 후 Y 입력 시 파워쉘에서 스크립트 실행 활성화

터미널에서 react-native run-android 작동 확인

이 때 node js는 cmd창이 따로 켜저서 실행 되는데 node js도 Visual Studio Code 내부에서 실행하고 싶다면

상단 터미널탭에서 분할 터미널 실행 후 각 터미널에서   react-native start와 react-native run-android 따로 실행
