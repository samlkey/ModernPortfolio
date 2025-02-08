<template>
    <div id="contactScroll">
        <div class="contactContent">
            <h1 class="conTitle" id="scale-in-bottom">Send me a message!</h1>
            <div class="contact">
                <p id="scale-in-bottom">
                For inquires please contact me below. I am looking forward to hearing from you!
                </p>

                <form @submit.prevent="submit" method="POST" target="_blank" action="https://formspree.io/samkey726@gmail.com">
                    <div class="inputTag">
                        <p>Your Email</p>
                        <p>Subject</p>
                    </div>

                    <div class="subjectFlex">
                        <input type="email" id="email" name="from_name" size="45" maxlength="35" placeholder="Enter your email"><br><br>
                        <input type="text" id="subject" name="subject" size="45" maxlength="40" placeholder="Enter a subject"><br><br>
                    </div>

                    <div class="inputTag">
                        <p>Your Message</p>
                    </div>
                    <textarea rows="10" cols="40" placeholder="Hi, we would like to consider you for a upcoming opportunity." maxlength="500" id="msg" name="message"></textarea><br><br>
                    <input type="submit" class="submit" value="Submit">
                </form> 
            </div>
        </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default{
    name: 'Contact',
    methods : {
        //todo:
        //CLEAR FORM ON SUBMIT
        //REPLACE ALERT() WITH HTML VISUALS
        submit() {
            var empty = false; 
            if (document.getElementById('email').value == "" || document.getElementById('subject').value == "" || document.getElementById('msg').value == "") empty = true
            if(empty == false){
                emailjs.sendForm('service_1x8gz0k', 'template_oy6tptt', this.$refs.form, 'v9uCAmwdCEkYwiDQc')
                    .then((result) => {
                        console.log("YES!", result.text);
                        alert("Thank you for contacting, I should be able to contact you back within the coming days")
                    }, (error) => {
                        console.log("NO!", error.text);
                })
            }else alert("Please fill out any empty fields");
        },
    }
}
</script>
<style src="../css/Contact.css" />