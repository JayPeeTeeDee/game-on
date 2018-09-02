// define images
var images_play = [
    "../images/flow/play1.png",
    "../images/flow/play2.png",
    "../images/flow/play3.png",
    "../images/flow/play4.png"
];
var images_host = [
    "../images/flow/host1.png",
    "../images/flow/host2.png"
]

var obj = {curImg: 0};

// build tween
var tween = new TimelineMax()
.add(TweenMax.to(obj, 0.67, {
            curImg: images_play.length - 1,
            roundProps: "curImg",
            immediateRender: true,
            ease: Linear.easeNone,
            onUpdate: function () {
                $("#joining-tab").click();
                $("#joining-img").attr("src", images_play[obj.curImg]); // set image
            }
}))
.add(TweenMax.to(obj, 0.33, {
            curImg: images_host.length - 1,
            roundProps: "curImg",
            immediateRender: true,
            ease: Linear.easeNone,
            onUpdate: function () {
                $("#hosting-tab").click();
                $("#hosting-img").attr("src", images_host[obj.curImg]);
            }
}));

// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onLeave'}});

// build scene
var scene1 = new ScrollMagic.Scene({triggerElement: "#flow-trigger", duration: "100%"})
                .setPin("#features-flow")
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
