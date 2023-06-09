tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                "yellow": '#FBD784',
            },
            fontFamily: {
                "poppins": ['Poppins', "sans-serif"],
                "opensa": ['Open Sans', "sans-serif"],
            },
            maxWidth: {
                'container': '1320px',
                'mdcontainer': '576px',
            },
            backgroundImage: {
                'bannerImg': "url('./images/banner.png')",
                'steadyBg': "url('./images/staedy-img.jpg')",
            },
            fontSize: {
                'fs64': '64px',
                'fs45': '45px',
            },
            animation: {
                "upDown":"down 1s infinite alternate linear"
            },
            keyframes:{
                down:{
                    from:{
                        transform:"translateY(0)"
                    },
                    to:{
                        transform:"translateY(20px)"
                    }
                }
            }
        }
    }
}