<template>
    <div class="scrollBar">
        <div class="bar">        
            <div class="pointer"></div>
            <p>1</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ScrollBar',
    data() {
        return { 
            pageIndex: 0,
            pageTags: ["top", "aboutMe", "languageScroll", "projectScroll", "contactScroll", "footerScroll"],
            animations: ["slide-in-right", "scale-in-bottom", "scale-in-ver-bottom", "tracking-in-expand"],
            currentTab: null,
            shouldScroll: true
        }
    },
    mounted() {
        window.addEventListener("wheel", (e) => {
           this.Scroll(e)
        })
    },
    methods: {
        Scroll(e){
            if(!this.shouldScroll) return; 

            if(e.deltaY > 0 && this.pageIndex < this.pageTags.length - 1){
                //go down
                this.pageIndex++
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex])
                this.currentTab.scrollIntoView({
                    behavior: 'smooth'
                });

                //animations
                this.animations.forEach(e => {
                    let p = this.currentTab.querySelector("#" + e)

                    if (p != null){
                        if(!p.classList.contains(e)) this.HandleAnimation(e); 
                    }
                })
            }
            else if(e.deltaY < 0 && this.pageIndex != 0)
            {
                //go up
                this.pageIndex--
                this.currentTab = document.getElementById(this.pageTags[this.pageIndex])
                this.currentTab.scrollIntoView()
            }
            this.shouldScroll = false; 

            setTimeout(() => {
                this.shouldScroll = true;
            }, 400)
        },
        HandleAnimation(c){
            let target = this.currentTab.querySelectorAll("#" + c)
            let targetDelay = this.currentTab.querySelectorAll("#" + c + "-delay")

            if(target != null){
                target.forEach(e => {
                    e.style.visibility = "hidden";
                    setTimeout(() => {
                        e.style.visibility = "visible";
                        e.classList.add(c); 
                    }, 400)
                })
            }
     
            if(targetDelay == null) return;

            targetDelay.forEach(e => {
                e.style.visibility = "hidden"; 

                setTimeout(() => {
                    e.style.visibility = "visible";
                    e.classList.add("scale-in-ver-bottom");
                }, 800);
            })
        }
    }
}






// $("html").bind("click", function(){
//    $("This is a click Event").appendTo( "body" );
// });

</script>

<style src="../css/ScrollBar.css" />