import "./Home.css"

export default function Home () {
    return(
        <div class="container-fluid row">
            <div class='col-1'></div>
            <div class="container-sm col-5" >
                <p class="h1" style={{fontWeight: 900, fontSize: '40px'}}>All about Enthusiasm and Dedication</p> 
                <p class="badparagraph">
                    Badminton for all people at all levels.
                </p>
                <p class="badparagraph">
                    Friendly Competition. Play Either/or Both Wednesday & Thursday Nights. Start 7:30
                </p>
                <p class="badparagraph">
                    Annual Membership Fee $20, Daily $7.50. <br></br>Email: <a display="inline-block" href="mailto:wangaratta.bmt.club@hotmail.com" > wangaratta.bmt.club@hotmail.com</a>
                </p>
                <p class="badparagraph">
                    Mobile: <a display='inline-block' href="tel:+61493436434">0493436434</a>                We Play at Cathedral College, Wangaratta Stadium
                </p>
            </div>
            <div class="col-6"></div>


        </div>
    )
}