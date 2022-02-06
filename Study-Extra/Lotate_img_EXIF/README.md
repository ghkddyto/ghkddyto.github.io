# 이미지 보정 프로젝트

#### 스마트폰으로 촬영할 때 기울임에 따라 
#### 이미지 보정을 하기 위한 EXIF 회전 값이 추가되는데
#### 브라우저, 프로그램 별로 보정 방식이 없거나 달라 
#### 사진 각도가 뒤죽박죽 되는 문제가 발생

#### 문제를 해결하기 위해 
#### [JavasSript Load Image](https://github.com/blueimp/JavaScript-Load-Image) 라이브러리 사용하여
#### 보정이 아닌 회전 값 자체를 초기화 하는 방식을 사용.
#### 사용자의 편의성을 위해 수동 회전 기능을 추가함.

[데모 홈페이지 이동](https://ghkddyto.github.io/Study-Extra/Lotate_img_EXIF/index.html)


#### EXIF값으로 적용되는 회전은 다음과 같음
![EXIF예시이미지](orientation.gif)


#### 그 외 사용된 라이브러리
#### [jquery](https://github.com/jquery/jquery), [html2canvas](https://github.com/niklasvh/html2canvas)
