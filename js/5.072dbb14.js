(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"text-h5 absolute-center"},[t._v(t._s(t.showQue))]),e("q-separator"),e("div",[e("q-btn",{staticClass:"q-ma-xl absolute-bottom-right",staticStyle:{"font-size":"30px"},attrs:{round:"",color:"primary",icon:t.isIcon?"far fa-comments":"fas fa-ellipsis-h"},on:{click:t.conGen},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-gears")]},proxy:!0}])})],1)],1)},o=[],a={name:"PageIndex",data:function(){return{isIcon:!1,questionList:[],showQue:""}},mounted:function(){this.questionList=["이 세상 누구와도 저녁을 함께 먹을 수 있다면, 누구를 택할 생각인가요?","유명해지고 싶나요? 어떤 방법으로요?","전화를 걸기 전에 뭐라고 말할지 연습해본 적이 있나요? 왜죠?","당신에게 “완벽한” 날은 어떤 날 인가요?","마지막으로 자신을 위해 노래를 부른 것이 언제인가요? 다른 사람을 위해서는요?","90살까지 살 수 있고 마지막 60년을 서른 살의 마음, 혹은 서른 살의 몸으로 살 수 있다고 해 봅시다. 몸과 마음 중 어느 쪽을 택할 건가요?","자신이 어떻게 죽을 것 같다는 직감이 있나요?","당신과 상대방의 공통점 세 가지를 말해봅시다.","당신의 인생에서 가장 감사하는 일은 무엇인가요?","어린 시절에서 하나를 바꾼다면 어떤 걸 바꾸고 싶나요?","4분 동안 생각한 다음, 당신 인생을 가능한 한 자세히 상대방에게 이야기해주세요.","내일 침대에서 일어났을 때 새로운 능력을 갖추게 된다면 어떤 능력을 가지고 싶나요?","당신의 인생이나 미래에 대해 무엇이든 말해주는 수정구가 있다면, 무엇을 물을까요?","오랫동안 하고 싶었던 일이 있나요? 왜 그 일을 하지 않았나요?","지금까지 당신 인생에서 가장 잘한 일이 어떤 건가요?","친구 사이에 가장 중요하게 생각하는 건 어떤 것이죠?","가장 소중한 기억이 뭔가요?","가장 끔찍한 기억은요?","1년 뒤 갑자기 죽을 것이라는 사실을 알게 된다면 지금 당신의 삶을 바꿀 건가요? 왜 그렇죠?","친구는 당신에게 어떤 의미인가요?","사랑과 애정은 당신의 삶에서 어떤 의미인가요?","상대방의 장점 5가지를 서로 말해보세요.","당신의 가족은 얼마나 화기애애한가요? 당신은 어린 시절을 다른 이들보다 더 행복하게 보냈다고 생각하나요?","어머니와의 사이가 어떤가요?","“우리”로 시작하는 문장 세 가지를 말해보세요. 예를 들어, “우리는 둘 다 어떠어떠한 느낌을 가지고 있습니다.” 같은 문장 말이죠.","이 문장을 완성해보세요. “나는 ~ 을 함께 나눌 누군가가 있었으면 좋겠다.”","상대방이 나와 가까운 친구가 되기위해 나에 대해 알아야 하는 것을 말해보세요.","상대방에 대해 마음에 드는 점을 말해보세요. 아주 솔직해야 합니다. 처음 만난 사람에게는 하지 않을 이야기라도 말해야 한다는 뜻이죠.","당신의 삶에서 당황스러웠던 순간을 이야기해봅시다.","가장 최근에 다른 사람 앞에서 울었던 것이 언제인가요? 혼자 운 적은요?","상대방에 대해 이미 좋아하게 된 것들을 말해보세요.","혹시 농담으로라도 말해서는 안 되는 것이 있다면 어떤 것들이 있을까요?","오늘 밤 누구와도 연락하지 못한 상태에서 죽게 된다면, 그 말을 하지 못한 것을 가장 후회할 사람이 있나요? 왜 아직까지 그 말을 하지 못했나요?","당신의 모든 것이 있는 집이 불에 타고 있습니다. 가족들을 다 구한 후 마지막 한 가지를 가지고 올 수 있습니다. 어떤 것을 가지고 나올 건가요?","당신 가족 중에 누구의 죽음을 당신은 가장 슬퍼할 것 같나요? 그 이유는 뭔가요?","당신의 문제를 털어놓고 상대방에게 조언을 구해보세요. 그리고 상대방에게, 내가 그 문제를 어떻게 느끼고 있을지를 생각해보라고 말하세요."]},methods:{conGen:function(t,n){this.isIcon=!this.isIcon,n=this.questionList.length-1,t=0;var e=Math.floor(Math.random()*(n-t+1))+t,s=this.questionList[e];this.showQue=s}}},i=a,c=e("2877"),r=e("eebe"),u=e.n(r),l=e("9989"),f=e("eb85"),h=e("9c40"),p=e("cf57"),d=Object(c["a"])(i,s,o,!1,null,null,null);n["default"]=d.exports;u()(d,"components",{QPage:l["a"],QSeparator:f["a"],QBtn:h["a"],QSpinnerGears:p["a"]})}}]);