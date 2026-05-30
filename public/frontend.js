
const uploadBtn = document.getElementById("uploadBtn")

const imageInputimg = document.getElementById("imageInput")

const preview = document.getElementById("preview")

const submitBtn = document.getElementById("submitBtn")

const textarea = document.getElementById("comment")




const LOGOUT = document.querySelectorAll(".LOGOUT")

LOGOUT.forEach((LOG)=>{
    LOG.addEventListener("click",()=>{
        window.location.href="/login.html"
    })
})


const underConstructionBtns =
document.querySelectorAll(".underConstruction");

underConstructionBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        showToast(
            "🚧 This feature is under construction"
        );

    });

});



// fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] 

const mobilePostBtn =
document.getElementById("mobilePostBtn")

const mobilePostPage =
document.getElementById("mobilePostPage")

const closeMobilePost =
document.getElementById("closeMobilePost")


mobilePostBtn.addEventListener("click",()=>{

    mobilePostPage.classList.remove("hidden")

    mobilePostPage.classList.add("flex")

})





closeMobilePost.addEventListener("click",()=>{

    mobilePostPage.classList.add("hidden")

    mobilePostPage.classList.remove("flex")

})


const mobileUploadBtn =
document.getElementById("mobileUploadBtn")

const mobileImageInput =
document.getElementById("mobileImageInput")

const mobilePreview =
document.getElementById("mobilePreview")


mobileUploadBtn.addEventListener("click",()=>{

    mobileImageInput.click()

})


mobileImageInput.addEventListener("change",(e)=>{

    const file = e.target.files[0]

    if(file){

        mobilePreview.src =
        URL.createObjectURL(file)

        mobilePreview.classList.remove("hidden")

    }

})




const mobileSubmitBtn =
document.getElementById("mobileSubmitBtn")

const mobilePostInput =
document.getElementById("mobilePostInput")




mobileSubmitBtn.addEventListener("click",(e)=>{

    e.preventDefault()

    const formData = new FormData()

    const caption =
    mobilePostInput.value.trimStart()

    const file =
    mobileImageInput.files[0]


    formData.append("image", file)

    formData.append("caption", caption)

    formData.append("userid", currentUser._id)



    // EMPTY CHECK
    if(caption === "" && !file){

        return

    }


    fetch(
    "https://twitter-backend-eeb7.onrender.com/create-post",

    {

        method:"POST",

        body:formData

    })

    .then((res)=>res.text())

    .then((data)=>{

        console.log(data)

        // RELOAD POSTS
        loadPosts()

        // CLEAR INPUTS
        mobilePostInput.value = ""

        mobilePreview.src = ""

        mobilePreview.classList.add("hidden")

        mobileImageInput.value = ""



        // CLOSE PAGE
        mobilePostPage.classList.add("hidden")

        mobilePostPage.classList.remove("flex")



        // OPTIONAL TOAST
        showToast("Post Created 🚀")

    })

})
function showToast(message){

    const toast =
    document.getElementById("toast");

    toast.innerText = message;

    toast.classList.remove(
        "hidden",
        "opacity-0",
        "-translate-y-5"
    );

    toast.classList.add(
        "opacity-100",
        "translate-y-0"
    );

    setTimeout(()=>{

        toast.classList.add(
            "opacity-0",
            "-translate-y-5"
        );

        setTimeout(()=>{

            toast.classList.add("hidden");

        },300);

    },2000);

}



const postbtn = document.getElementById("postbtn")


postbtn.addEventListener("click",()=>{
    console.log("huhaha")
    const form = document.getElementById("postModal")
  form.classList.add(
        "fixed",
        "inset-0",
        "z-50",
        "bg-black/50",
        "backdrop-blur-[1px]",
        "w-[100%]"
    );


    const inbox = document.getElementById("inbox")
    const crossinbox = document.getElementById("crossinbox")
inbox.classList.add(
  "w-1/2",
  "ml-auto",
  "mr-auto",
  "bg-[#16181c]"
);  




crossinbox.addEventListener("click",()=>{
 
    inbox.classList.remove(
  "w-1/2",
  "ml-auto",
  "mr-auto",
  "bg-[#16181c]"
); 




form.classList.remove(
        "fixed",
        "inset-0",
        "z-50",
        "bg-black/50",
        "backdrop-blur-[1px]",
        "w-[100%]"
    );


    crossinbox.innerHTML= ""

    



})





crossinbox.innerHTML = `<svg width="22px" height="22px"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" /> <g> <path d="M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"/> </g> </g>

</svg>`




    

    
})



const con = document.querySelector(".postsArea")

let currentUser = JSON.parse(
    localStorage.getItem("user")
)


if (!currentUser) {

    window.location.href = "/login.html"


}


fetch("https://twitter-backend-eeb7.onrender.com/finduser",{

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({

        userid:currentUser._id

    })

})

.then((res)=>res.json())

.then((data)=>{

    currentUser = data



})


const ppf = document.querySelectorAll("#PPFs");
for (let i = 0; i < ppf.length; i++) {
ppf[i].src = currentUser.PPF}


textarea.addEventListener("input", () => {

    textarea.style.height = "auto"

    textarea.style.height = textarea.scrollHeight + "px"

})


// OPEN FILE PICKER
uploadBtn.addEventListener("click", () => {

    textarea.style.height = "100px"


    imageInputimg.click()

})




// IMAGE PREVIEW
imageInputimg.addEventListener("change", () => {

    let file = imageInputimg.files[0]

    if (file) {

        preview.src = URL.createObjectURL(file)

    }

})





let postnum = 0

// CREATE POST FUNCTION
function createPost(postData) {

    const post = document.createElement("div")
    




    post.className = `
    border-b border-[#2f3336]
    text-[#rgb(231, 233, 234);]
    
    
    `


    post.innerHTML = `

<div data-id="${postData._id}" class=" flex gap-3 hover:bg-[#0f0f0f] transition duration-200 px-4 py-3">

        <!-- PROFILE -->
        <img src="${postData.userid.PPF}"
            class="w-12 h-12 rounded-full object-cover shrink-0 mt-1">


        <!-- RIGHT -->
        <div class="w-full">

            <!-- USER INFO -->
            <div class="flex gap-2 items-center m-4">

                <span class="font-bold text-[15px] text-white hover:underline cursor-pointer">
                    Beniwal
                </span>

                <span class="text-[#71767b] text-[14px]">
                    @beniwal
                </span>

                <span class="text-[#71767b]  text-[14px]">
                    ·
                </span>

                <span class="text-[#71767b] text-[14px]">
                    ${new Date(postData.createdAt).toLocaleDateString("en-US", {

    month:"short",

    day:"numeric"

})}
                </span>

            </div>
    
    <div class=" mt-1 text-[15px] leading-6 text-[#e7e9ea] whitespace-pre-wrap break-words">${postData.caption}</div>
    
    ${
        postData.image
        ?
        `
        <img
        src="${postData.image}"
        class="mt-3 rounded-2xl
        max-h-[300px]
        w-full object-cover"
        >
        `
        :
        ""
    }
    
    
    <div class="flex justify-between mt-4 max-w-[420px] text-[#71767b] text-sm">

                <div class=" hover:text-[#1d9bf0] cursor-pointer transition flex" id="${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="r-4qtqp9 fill-white w-5 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class=" hover:text-[#00ba7c] cursor-pointer transition flex" id= ${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="r-4qtqp9 fill-white w-5 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class="likebtn cursor-pointer transition flex ${postData.likelist.includes(currentUser._id)?"fill-[#f91880]":"fill-[#ffffff]" } "   data-id="${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="  w-5
                    r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                            </path>
                        </g>
                    </svg>
                    ${postData.like}
                </div>

                <div class="hover:text-[#1d9bf0] cursor-pointer transition flex" ${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class="hover:text-[#1d9bf0] cursor-pointer flex transition " ${postData._id}">

                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                            </path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            </div>


        

    
    </div>
    
    `


    con.prepend(post)

}





const box2 = document.querySelector(".box2")

async function loadProfile(userid){

    

    box2.innerHTML = `

    <div>
<div class="w-full min-h-screen bg-black text-white">

    <!-- TOP BAR -->
    <div class="sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-[#2f3336]">

        <div class="flex items-center gap-8 px-4 py-3">

            <svg viewBox="0 0 24 24" aria-hidden="true"
               id="profileback" class=" w-5 fill-white cursor-pointer">
                <g>
                    <path
                        d="M7.293 4.293L1.586 10l5.707 5.707 1.414-1.414L5.414 11H22V9H5.414l3.293-3.293z">
                    </path>
                </g>
            </svg>

            <div>

                <h1 class="text-[20px] font-bold">
                    ${currentUser.username}
                </h1>

                <p class="text-[#71767b] text-[13px]">
                    12 posts
                </p>

            </div>

        </div>

    </div>



    <!-- COVER PHOTO -->
    <div class="w-full h-[220px] bg-[#333639]">

        <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            class="w-full h-full object-cover"
        >

    </div>



    <!-- PROFILE INFO -->
    <div class="px-4">

        <!-- DP + BUTTON -->
        <div class="flex justify-between items-start">

            <img
                src="${currentUser.PPF}"
                class="w-34 h-34 rounded-full border-4 border-black -mt-16 object-cover"
            >

            <button
                class="border border-[#536471] px-5 py-2 rounded-full font-bold mt-3 hover:bg-[#181818] transition">

                Edit profile

            </button>

        </div>



        <!-- USER DETAILS -->
        <div class="mt-3">

            <h1 class="text-[30px] font-bold leading-none">
                ${currentUser.username}
            </h1>

            <p class="text-[#71767b] text-[17px] mt-1">
                @${currentUser.username}
            </p>

        </div>



        <!-- BIO -->
        <p class="mt-4 text-[16px] leading-6">
            ${currentUser.BIO}

        </p>



        <!-- EXTRA INFO -->
        <div class="flex gap-5 mt-4 text-[#71767b] text-[15px]">

            <div class="flex items-center gap-2">

                <svg viewBox="0 0 24 24" aria-hidden="true"
                    class="w-5 fill-[#71767b]">
                    <g>
                        <path
                            d="M7 4V2H5v2H2v18h20V4H7zm13 16H4V9h16v11z">
                        </path>
                    </g>
                </svg>

                Joined May 2026

            </div>

        </div>



        <!-- FOLLOWERS -->
        <div class="flex gap-5 mt-4 text-[15px]">

            <div>

                <span class="font-bold">
                    120
                </span>

                <span class="text-[#71767b]">
                    Following
                </span>

            </div>

            <div>

                <span class="font-bold">
                    12
                </span>

                <span class="text-[#71767b]">
                    Followers
                </span>

            </div>

        </div>

    </div>



    <!-- TABS -->
    <div class="flex justify-around mt-6 border-b border-[#2f3336] text-[#71767b] text-[15px] font-medium">

        <div class="py-4 border-b-4 border-[#1d9bf0] text-white cursor-pointer">

            Posts

        </div>

        <div class="py-4 hover:bg-[#111] w-full text-center cursor-pointer">

            Replies

        </div>

        <div class="py-4 hover:bg-[#111] w-full text-center cursor-pointer">

            Media

        </div>

        <div class="py-4 hover:bg-[#111] w-full text-center cursor-pointer">

            Likes

        </div>

    </div>



    <!-- POSTS AREA -->
    <div class="postsArea">

        <!-- POSTS YAHAN AAYENGE -->

    </div>

</div>
    `


}

if(window.innerWidth < 800){

    const menuBtn = document.getElementById("menuBtn");

    const mobileSidebar = document.getElementById("mobileSidebar");

    const maincontainer = document.getElementById("maincontainer");


    // OPEN SIDEBAR
    menuBtn.addEventListener("click", (e) => {

        e.stopPropagation();

mobileSidebar.classList.remove("-translate-x-full");

mobileSidebar.style.transform = "translateX(0)";
    });


    // PREVENT CLOSE INSIDE SIDEBAR
    mobileSidebar.addEventListener("click",(e)=>{
        e.stopPropagation()

        
    })


    // OUTSIDE CLICK CLOSE
    maincontainer.addEventListener("click", () => {

        mobileSidebar.classList.add("-translate-x-full");

    });


    // =========================
    // SWIPE CLOSE
    // =========================

  let startX = 0;
let currentTranslate = 0;
let isDragging = false;

mobileSidebar.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

    isDragging = true;

    // REMOVE SMOOTH TRANSITION
    mobileSidebar.style.transition = "none";

});


mobileSidebar.addEventListener("touchmove", (e) => {

    if(!isDragging) return;

    let currentX = e.touches[0].clientX;

    let diff = currentX - startX;

    // ONLY LEFT SWIPE
    if(diff < 0){

        currentTranslate = diff;

        mobileSidebar.style.transform =
        `translateX(${diff}px)`;

    }

});


mobileSidebar.addEventListener("touchend", () => {

    isDragging = false;

    // RESTORE TRANSITION
    mobileSidebar.style.transition =
    "transform 0.3s ease";

    // CLOSE IF DRAGGED ENOUGH
    if(currentTranslate < -100){

        mobileSidebar.style.transform =
        "translateX(-100%)";

    }

    // OTHERWISE OPEN AGAIN
    else{

        mobileSidebar.style.transform =
        "translateX(0)";

    }

});


}


const homebtn = document.querySelectorAll(".homebtn")

homebtn.forEach((LOG)=>{
    LOG.addEventListener("click",()=>{
        window.location.href="/index.html"
    })
})



async function  profileposttemp(postData) {
    const profilepostArea = document.querySelector(".postsArea")
    console.log(postData)

    profilepostArea.innerHTML +=`


    
<div post-id="" class=" flex gap-3 hover:bg-[#0f0f0f] transition duration-200 px-4 py-3">

        <!-- PROFILE -->
        <img src="${postData.userid.PPF}"
            class="w-12 h-12 rounded-full object-cover shrink-0 mt-1">


        <!-- RIGHT -->
        <div class="w-full">

            <!-- USER INFO -->
            <div class="flex gap-2 items-center m-4">

                <span class="font-bold text-[15px] text-white hover:underline cursor-pointer">
                    Beniwal
                </span>

                <span class="text-[#71767b] text-[14px]">
                    @beniwal
                </span>

                <span class="text-[#71767b]  text-[14px]">
                    ·
                </span>

                <span class="text-[#71767b] text-[14px]">
                    ${new Date(postData.createdAt).toLocaleDateString("en-US", {

    month:"short",

    day:"numeric"

})}
                </span>

            </div>
    
    <div class=" mt-1 text-[15px] leading-6 text-[#e7e9ea] whitespace-pre-wrap break-words">${postData.caption}</div>
    
    ${
        postData.image
        ?
        `
        <img
        src="${postData.image}"
        class="mt-3 rounded-2xl w-full max-h-[500px] object-cover border border-[#2f3336]"
        >
        `
        :
        ""
    }
    
    
    <div class="flex justify-between mt-4 max-w-[420px] text-[#71767b] text-sm">

                <div class=" hover:text-[#1d9bf0] cursor-pointer transition flex" id="${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="r-4qtqp9 fill-white w-5 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class=" hover:text-[#00ba7c] cursor-pointer transition flex" id= ${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="r-4qtqp9 fill-white w-5 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class="likebtn cursor-pointer transition flex ${postData.likelist.includes(currentUser._id)?"fill-[#f91880]":"fill-[#ffffff]" } "   data-id="${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="  w-5
                    r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                            </path>
                        </g>
                    </svg>
                      <div class="likecount">${postData.like}</div>
                    
                </div>

                <div class="hover:text-[#1d9bf0] cursor-pointer transition flex" ${postData._id}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                            </path>
                        </g>
                    </svg>
                </div>

                <div class="hover:text-[#1d9bf0] cursor-pointer flex transition " ${postData._id}">

                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                            </path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class=" fill-white w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                        <g>
                            <path
                                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            </div>


        

    
    </div>


    
    `

    

    
}




async function profilePost() {

   console.log("function started")

   const response = await fetch(
      `https://twitter-backend-eeb7.onrender.com/profile/${currentUser._id}`
   )

   const posts = await response.json()

//    console.log(posts)

   posts.forEach((post)=>{
      profileposttemp(post)
   })

}




const profilebtn = document.querySelectorAll(".profileBtn")


async function loadPosts() {
    
    const response = await fetch("https://twitter-backend-eeb7.onrender.com/posts")
    
    const posts = await response.json()
    
    posts.forEach(post => {
      
        createPost(post)
        
    })
}
    

    
const profileBtns = document.querySelectorAll(".profileBtn");

profileBtns.forEach((btn) => {

    btn.addEventListener("click", async () => {

        loadProfile(currentUser._id);

        await profilePost();

        const backtopp =
        document.getElementById("profileback");

        backtopp.addEventListener("click", () => {

            window.location.href = "./index.html";

        });

    });

});

document.addEventListener("click", (e) => {

    const postEl = e.target.closest('.likebtn')



    if (postEl) {


        fetch("https://twitter-backend-eeb7.onrender.com/findpost", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    postId: postEl.dataset.id,
                    userid: currentUser._id

                })

            })

            .then((res) => res.json())

            .then((data) => {

                if (data.likelist.includes(currentUser._id)) {
                    console.log("fhhaa")

                    fetch("https://twitter-backend-eeb7.onrender.com/removelike", {

                            method: "POST",

                            headers: {
                                "Content-Type": "application/json"
                            },

                            body: JSON.stringify({

                                postId: postEl.dataset.id,
                                userid: currentUser._id

                            })

                        }).then((res) => res.json())

                        .then((data) => {

                            console.log("removed")
                            const svg = postEl.querySelector("svg")
                            data.likelist.includes(currentUser._id)?

                            svg.classList.add("fill-[#f91880]")
                            :svg.classList.add("fill-[#ffffff]")


                        })

                        
                        
                    }
                    else{
                         console.log("huuuhahhaha")

                    fetch("https://twitter-backend-eeb7.onrender.com/addlike", {

                            method: "POST",

                            headers: {
                                "Content-Type": "application/json"
                            },

                            body: JSON.stringify({

                                postId: postEl.dataset.id,
                                userid: currentUser._id

                            })

                        }).then((res) => res.json())

                        .then((data) => {

                            console.log("removed")
                             const svg = postEl.querySelector("svg")
                            data.likelist.includes(currentUser._id)?

                            svg.classList.add("fill-[#f91880]")
                            :svg.classList.add("fill-[#ffffff]")


                        })


                    }

            })



    } 

})
submitBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const formData = new FormData()
    const caption = textarea.value.trimStart()
    const file = imageInputimg.files[0]

    formData.append("image", file)
    formData.append("caption", caption)
    formData.append("userid", currentUser._id)




    if (caption === "" && !file) {
        return
    }


    fetch("https://twitter-backend-eeb7.onrender.com/create-post", {

            method: "POST",
            body: formData

        })
        .then((res) => res.text())

        .then((data) => {
            loadPosts()
            // CLEAR INPUTS
            textarea.value = ""

            preview.src = ""

            imageInputimg.value = ""


            window.location.href ="/index.html"



        })


})




loadPosts()