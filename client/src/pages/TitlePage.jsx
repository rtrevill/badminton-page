import './TitlePage.css'

export function TitlePage () {

    const backImage = './empty-gymnasium-with-courts.jpg'
    const playerImage = './cropped-badminton-players.jpg'


    return (
        <div style={{width: '100vw'}}>
            <header style={{display: "flex", justifyContent: "space-around", backgroundImage: `url(${backImage})`, height: '290px' }}>
                <img src="./badminton-gang-1.jpg" alt="group photo"/>
                <img src="./WANGARATTA-BADMINTON-LOGO.png" alt="logo" style={{width: 300}}/>
                <div>
                    <ul>
                        <li>
                            <a href="" class="textlink">Home</a>
                        </li>
                        <li>
                            <div style={{position: 'relative'}} class="headdrop">
                                <a href="" class="textlink">Game Location</a>
                                <select id="my-dropdown" class="mydrop" name="selectedOption" style={{}}>
                                    <option value="Learn">Learn Badminton</option>
                                    <option value="Gallery">Gallery</option>
                                    <option value="Maps">Maps</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <a href="" class="textlink">Contact Us</a>
                        </li>
                        <li>
                            <a href="" class="textlink">About Us</a>
                        </li>
                    </ul>

                </div>
                <div>
                    <p style={{fontSize: '34px', color: "#0DE6DD", width: 169}}>Welcome to Wangaratta Badminton Club</p>
                </div>
            </header>
                <div style={{width: '100%', height: '400px', overflow: 'clip', backgroundImage: `url(${playerImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} class="container-fluid" id='divforplayes'>
                </div>

        </div>
    )
}