    const judul = document.getElementById('judul');
    const H3 = document.querySelector('h3');
    const H3Text = document.querySelector('h3#text');
    const myBtn = document.getElementById('btn');
    const myBtn2 = document.getElementById('btn2');
    const myBtn3 = document.getElementById('btn3');
    const myBtn4 = document.getElementById('btn4');
    const myImg = document.querySelector('div', 'img');    

    function form(){
        let divElement = document.createElement('div');
        divElement.classList.add('container', 'center', 'form');
        divElement.innerHTML = '<h2>Hubungi Saya</h2>';
        let formElement = `
        <form method="get" class="form">
            Nama:
            <input type="text" name="nama" id="nama" placeholder="Ketik Nama Anda Disini"/>
            <p>Pilih Gender Anda</p>
            <input type="radio" name="pil" id="Pria" value="Pria" />
            <label for="Pria">
                Pria
            </label> &emsp;
            <input type="radio" name="pil" id="Wanita" value="Wanita" />
            <label for="Wanita">
                Wanita
            </label>
            <br> <br>
            <p>Menu Makan Anda Hari Ini Apa?</p>
            <input type="checkbox" name="pause" id="pause" value="pause" />
            <label for="pause"> Sayur </label>&emsp;

            <input type="checkbox" name="fullscreen" id="fullscreen" value="fullscreen"/>
            <label for="fullscreen"> Daging </label><br>

            <input type="checkbox" name="mute" id="mute" value="mute" />
            <label for="mute"> Ikan </label>&nbsp;&nbsp;&emsp;

            <input type="checkbox" name="download" id="download" value="download" />
            <label for="download"> Lainnya </label><br />

            <br>
            <textarea name="pesan" id="pesan" cols="30" rows="10" placeholder="Tinggalkan Pesan Anda Disini"></textarea>
            <input type="submit" value="kirim" />
            </form>`;
        divElement.insertAdjacentHTML("beforeend", formElement);
        let containerDiv = document.querySelector('.container');
        containerDiv.appendChild(divElement);
    }
    

    function ubah(){
        judul.innerHTML="Hai, Saya Ryan Ernanda";
        H3.innerHTML="Seorang Mahasiswa";
        H3Text.innerHTML="Teknik Informatika";
    }

    function photo(){
        myImg.innerHTML='<img src="photo.jpg" alt="Photo ganteng saya" title="ini saya">';
    }
    
    function gaya(){
        var styles = `html{margin: 0;padding: 0;}
        body{
            background-color: aliceblue;
        }
        img{
            width: 100px;
        }
        .center{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .container{
            flex-direction: column;
            padding: 10px;
        }
        .text{
            height: 100px;
            overflow: hidden;
            text-align: center;
            border-radius: 50px;
        }

        .text h3{
            font-size: 2em;
            line-height: 100px;
        }
        .text h3:nth-child(1){
            animation: text-gerak 10s infinite;
        }
        @keyframes text-gerak {
            0%{
                margin-top: 0;
            }
            25%{
                margin-top: -130px;
            }
            50%{
                margin-top: -280px;
            }
            75%{
                margin-top: -130px;
            }
            100%{
                margin-top: 0;
            }
        }
        .btn{
            margin: 10px;
            padding: 16px 32px;
            background-color: white;
            color: black;
            border: 2px solid #4CAF50;
            cursor: pointer;
            transition-duration: 0.5s;
        }
        .btn:hover{
            background-color: #4CAF50;
            color: white;
        }
        .form{
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
            margin: 20px auto;
        }
        input[type=text], textarea {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            resize: none;
        }
        input[type=submit] {
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        input[type=submit]:hover {
            background-color: #45a049;
        }`;
        var styleSheet = document.querySelector('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }

    myBtn.addEventListener("click", ubah);
    myBtn2.addEventListener("click", photo);
    myBtn3.addEventListener("click", form);
    myBtn4.addEventListener("click", gaya);