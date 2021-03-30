class LightBox{
    constructor(){
        this.imagesArr = []
        this.imgSrc
        this.imageNumb
        this.index
        
        this.images = [...document.querySelectorAll('.image img')]
        this.lightboxDiv = document.querySelector('div.lightbox')
        this.lightboxImg = document.querySelector('div.lightboxWrapper img')
        this.lightboxSpan = document.querySelector('div.lightboxWrapper span')
        this.exit = document.querySelector('.fa-times-circle-o')
        this.rightArrow = document.querySelector('.fa-arrow-right')
        this.leftArrow = document.querySelector('.fa-arrow-left')
    }
    addImagesToLightbox(){
        this.images.forEach((image)=>{
            this.imagesArr.push({
                src:image.src,
            })
            image.addEventListener("click", ()=>{
               
           
                this.imageNumb = image.dataset.number
                this.index=this.imageNumb
                this.imgSrc = image.src
                this.lightboxImg.src=this.imgSrc
                this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.images.length}`
                this.lightboxDiv.style.display = "block"
                
            })
            this.exit.addEventListener("click", ()=>{
                this.lightboxDiv.style.display = "none"})
            })
    
        }
    nextAndprevImage(){
        this.rightArrow.addEventListener("click", ()=>{
                    ++this.imageNumb
                    if(this.imageNumb>this.imagesArr.length-1)
                    this.imageNumb=0
  
                this.lightboxImg.src = this.imagesArr[this.imageNumb].src
                this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.imagesArr.length}`
                })

                this.leftArrow.addEventListener("click", ()=>{
                this.imageNumb--
                if(this.imageNumb<0)
                    this.imageNumb=this.imagesArr.length-1

                this.lightboxImg.src = this.imagesArr[this.imageNumb].src
                this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.imagesArr.length}`
   
                })
            }
}

const lightbox = new LightBox
lightbox.addImagesToLightbox()
lightbox.nextAndprevImage()
