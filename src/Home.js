import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>

            <div className="home__row"> 
                <Product id="12345678"
                title='The lean startup: How Constant Innovation Creates Radically Succesful
                Business Paperback' price={29.99} 
                image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'} 
                rating={5}/>
                <Product id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen
                Mixer with K-beater, dough hook and whisk, 5 Litre Glass Bowl"
                price="239.00"
                rating={4}
                
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgVFBQZGRgYGhgbGBgYGBgYGRg
                YGxgaGhgbGhkbIS0kGx0tIRgZJjclKi4zNDQ0GiQ6PzoyPi0zNDEBCwsLDw8PEQ8PETEcGBw+Mz4zMT4xMT4+MTExMzExMTEx
                MTExMzExMTExMTExMTEzMTExMTExMTExMTExMTExMf/AABEIANoA5wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAB
                gMFAQQHAgj/xABTEAACAQIDAwUKCQgHBQkAAAABAgMAEQQSIQUGMSJBUWFxEzJSU4GRkqHR0gcUFyNCcpOxwRYzYnOCorLCFS
                RDVIOz4SU0Y6PwNURFVWR0w9Px/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwE
                AAhEDEQA/AOzUUUUBRRRQFFFaG19oR4aF55DZEUk21J5goHOSbADpNBr7e3gw2Ci7riZAi8FHFnPQqjUn7ue1ci2/8MWJclcH
                EsK8zyAPIevL3q9nKql3z2w7SO2IAfFOtit7x4KNtVijH0pbHlNzE9NzSSRQPMMW3McBIcTJlcXUmfIhB6EjNh5qnHwebWbUz
                pr0zS3/AIaXtg714jBoyRhGUm658xyH6WWxGh6Ks/lK2h0xj9g+9Qb3ycbV8en20vu0fJxtXx6fbS+7Wj8pe0fCj9A+9WflL2
                j4UfoH3qDd+Tjavj0+2l92j5N9rePT7aX3a0vlL2j4UfoH3qx8pe0fCj9A+9Qb3yb7W8en20vu0fJvtbx6fbS+7Wj8pe0fCj9A
                +9R8pe0fCj9A+9Qb3ycbV8en20vu1j5ONrePT7aX3a0vlL2j4UfoH3qx8pW0fCj9A+9Qb3ycbW8en20vu1n5ONq+PT7aX3a0f
                lL2j4UfoH3qPlL2j4UfoH3qDe+Tnavj0+2l92sfJztXxyfbS+7Wj8pW0fCj9A+9R8pW0PCj9A+9Qbvyc7V8cn2svu1n5PtrLqJ1BHRNKD
                /DWj8pW0PCj9A+9WD8JO0Ocx+gfeoJsU+2tngyHFSBFsCe7d0UEmw5Eh18i1f7u/DHMhC42JZE55IgEcdZQnK3ky0ibwbyz4wIsoVQhJs
                gYBmP0jmJ1A0qlAoPrLYu2YMXEJcPIHU844g9DKdVPUasq+etyt4XEweIBcSq8tF0THxjVkK8FxAF2Vh31iO3vOzcdHiIkmiN0kVWU8NC
                L6jmPSKDcooooCiiigKKKKApF+EbHZAl7FIFfEyKfpMgy4ZSOcGQ3/YFPVce+FuRh8aa+hXAwfvzzN/LQcikZnJZzdmJZmPEsTck+U1gJ
                Xu1ZAoI8tGSpbVm1BFlo7nUwFFqCDJWctS2rNqCHLWMlT2oy0EGSjJU2WjLQQ5KMlTZaLUEOStz+h8R/dpvspPdqbY4/rOH/XQ/5i13rG
                44557YwIImcMpWzKREJbIpBMxVDnsL6G3NQfP/APQ+I/u032Unu1g7IxAFzh5gBqSYn0Ho13CLbyuVKbQRs8LTBVQjKijV2OUlbMT82bE
                5AOk1cYCSQyWbFRuCrDIrozXTkyGwF9GK38G4XroPmwJRlr1CvJHZXoigxBI8brJGcrowZSOZlNwa+hvg5x4dZYxop7niY1HBUxKlnUdQ
                mWbTmuK+eSK7H8Ec2uH6Xws6HshxV1HmnNB1miiigKKKKAooooCuM/C1J83iB04zDr6OELfzV2auG/Ctf52/PjVt5MJGD61++g5sK914W
                vdAUCigUGaKKzUGKKzRQYorNFBiis0UGKKzWKDb2R/vMH66H/MWu9YrdeFsRNPnkDziRHsVKmN4kiZQCOT3isGGtxqSNK4Fs2TLNEx4LL
                Gx4DQOpOpIA4c5tXbdvb4yQK8seCM8Sd+6SlZIri9poimZNNb6qRrfWitubdDCsuVQU+ZlhdkCBnEqIjO5tq4ES25rk6a1u4HYscWIlxCs5ecASg5crZRZLWF1KgW0Ot7m51pab4Q1EkifFTyMKuJv3XvgyI+QcjTv7X6uFbuxd7JZ7lsEY7LmyvMM4Ug5XkBQCKM2PKcgmxyhqDg0Q0r0aF4f9eqs1URmusfBHJysL9XaC/v4R65Oa6h8EjcrDdU+NX0sPA38tB2yiiigKKKKAooooCuB/CVNm7tf/wAxlA7EwsA/Gu+VzDezctJQ7STPriJZlCKFIMixplYtfNYINbDiaDia17p3h3LhJ1Mx7CPwWto7l4cfQmPa5/BRQc+oWn87n4fxUnpvWPySw/iZPSk9tAh0U+fknh/FSenJ7ax+SmH8U/pye2oESinsbqYfxT+nJ7az+SeH8VJ6cntqhDop+G6MHiZfSk9tZ/I+DxEvpS+2oECiugHc+DxEvpS+2o23Wwo4xuO15B+NUIdFPQ3YwngN9o/trP5L4Txb/aP7agRkaxBsDYg2YXU2N7MOcHgR0U0YbfjERZO5w4VMl8mWOYFA3fKpz6IbC696SNRVj+S+E8W/2j+2j8l8J4tvtH9tUUEW9GIXFvjAIO6OmQrkcRhAqqMqg3UgIOBraxG+szx9yeDCNHctk7lKFLHizKJBmYnXM1zfnq1/JfCeLf7R/bWPyWwni2+0k9tAh0U+jdTCeA/2j+2ht0cJ0SDsc/iDQc/NdJ+Cl7Nh/wD3k49LBX/krQbc/DE9/KP2k/Fadtz91I4GhaKVyqTtKQ6qxLGB4soZbWFnvwPCg6XRRRQFFFFAUUUUBSxtFG+OrGZHMb4eeTud1VVeOSBQQygNYiU3BJpnpd2qD8ewx6cPjVvzXLYUgX5jyT5jQaE+x4Tqyuf8ab7g9q1zsbDj+z87yH72q6mQgXayjpZlUes1ptInjI/tE9tSqrzs+IcEA8re2o3gUcB6z7a3nZD/AGkf2ie9UT4cngUPY6e2oqtmFuFx5TVBj9oSp3sjCmWfDsbgFCRxs6afvUvY/ZUznkJm+q6H+aoFXaW8OMjZcsz5WF+Pn5qc9g7TbGQQRx548S7urOXJDLGiyFjpYXzAAW5jSpjt3MYxUfF2a3gMj8/6LG1OW4Gy3imw/dEYNfFtoLhDkgRVcjRSRnIB1rSLz8msZYWxTg89nNqki3cxo441z+2/4U50VUL0Gx5h308jf4j+2ppMDKBpIx6nCuPWDV3RQIO08JHe0sYjY8JYwcn7adHWOFUOJw7RuUfiOcahgdQynnBFdP2hglkU3ApJ3i2b3JU8EE5OofSTs1BH7VBRUVh2CgsxCqOLMQFA6ydBUS4gHvVd7i4Ko5QjqkICfvUE1FR90bxb+lF79eTiVHfB0sLkujhAOt7ZP3qCcV66gLk6ADiSeAAryhBAYEEHUMDcEdII0Ipq3L2erM0zC+Q5U6mtdm7bEDymgr8LuxI1mlYpzhFUu57RwXy01bIwmSy9zkULrmcx6+RSTVyqgcK9UBRRRQQyyqilmIVVBLEmwUAXJJPAAVq4ba0Uqh42Z1OoZY3ZWHSrBbMOsGtqeFZEZHAZGBVlIuGVhZgRzggmkfcjZcSYnGoFOWGUJGpdysaEMcqqTYCgdlxF+CN5QB95FZE1/oN+77a8fE4yNUU9qg1hMDEvexIOxFH3Cgn7p1Hzr7ahmlXgy3vcC+XXQ34nXS9ejhk6LdmlRtg0Nr5tNRym42tzHroOY7yYKFZXjiCKjKrKQWfJzMgQKyCPThcEE+Sk19hxZWu6BmNrRiRVKW45gmhNyMmW3Wa6pvLsSXOrYeHOlrMidzzX6eWw++lSdDJMsMWFbOqKroFhDM8a/OG5fS556ikk7sJrlnS/NmEumvPaOxq62Ds+SJrPiY3TKVylp7qdSrC8VtDxB4g9VMi7t406/FnF+bNDp1fnK2MPuxjT9Ap1uYyPUxoNGBAVNsRCovYgtIgv094LjrqYbOLaDEYY3/4rD+S9Nmx9gsJJjPBGY3e8KkIxjTXRrc5JGgJ4VeDYWF/u6eiKqFDZe7uGFmmxaHnyRyhQe1rhj2WFOGHfDRAKvc0uAQAUBYDQHjdu2vP9B4Xj3CO/TlFeZdg4Vzd4I2IFgWQMQL3tc82tBuDGxng6nsZfbWTih0E9hU/jVUNh4LNlbDRKx4chQG+r09nEVFtDZGzoUzyQRKOYZQCx6AOegthtBL2yvcdCM3rW9Ry7YgTv3KfXR0HnYAUt7v7DikaR5IUChsqIg5KW0IzjVzpcnmvatffDYUCR3jjymzcGbmtbidKB2w86SKHRgyngykEHm4il7fBkMFmDclxygBYMQwA1IvxJNujrq9wOCSGNY41yovAC54m51OpNyTc0rb4Ywsix8xkJ9FXoFFIlBDWzMODvymH1dLJ+yB13qRiSbk3NYtRQFqyptw0rFZoI3gFyyko54sgHK+uveyeUX6CKdN0Fk+KrxDZ3zdzy5WNxY2cXXTm1t0njShT3uSf6uR0SN9wNBYkTcxa9xo3c7WuL3sL8L8KsaKKAooooCk7dZGTGbRJRgrSoVbI2VrK2bKbWJFxTDiHzl0vZVFnYGxJK3yhvogAgk9Y665xtbA7Q2fERCEaJ5rCVXdnijkkyouW2pswGbmPTxoG7erfCLAIDJHIxYcmyNlJuAQXAIU63sda9btb2xYwILBHdSyAMGVgvfBWsCGGt1IB0PQbV3wgNE+z5xMjLksIwxXMzAAqyFSeIZhrrxuKRvgrwEvd4yAwVWd3vrlUplAJ5rkHT9PtsHb61mxkQ4yIO119tbBqsm2BhHPLgRjpxW/AWHqoPWP2tFHE7iWPkqxHKW2YAkA2PVXM8NthY8auK7vEWkVXZC/IUyFFdQL3uoW/tpw3o2fDhcM8mHijRwVFwo5yAfVSltOQDIAiXaF5GYxpcuBJre3e3Qae2orp0G04XUMs0ZB5w6kX5xxqZcXGbWdTfQWZdT1a60vYLYWFaESHDRZ2IF8gFszBebm1rcwmzYQO5RxqgUk6aC6tySF4MbgE81VF2KzUWHfMiseJAJ6L89uqpaAooooIcTh0kUpIqsptdWUMpsbi4OnEUuY/cyCZ87u+U6GMdzVbXBC2VRcC2l7nWmiigiwmGSNAiKFVRYAUu74G6qvSPxpoFK285u6D6vrega6QN6O/Ttc+r/Wn+kDeY/OJ9WQ/w+2goaxQTULyWoJSwrINSYHaSJDPGwJaQIEIAIGViTc83GtOKa9BuKtO25X5lx+mf4VpLipz3LPzcg6JP5F9lAy0UUUBRRRQUs8efuMZ4OzSOPCVeXl7M7Jcc4BHPSlgJcRJtrEwNK5wy5JO5scyh0SFly3F1Gc5rAgaU3YWTNJB1JOp7UZEPrWljY7f7dxXWg9UcPtoHeSJXUq6Bla4KkAgg8bg1jCYOOJckaKi+CqhR5hUiMeg9ulSCgK8ml/bW9uHw91Dd1kGmRCDY9DtwXs49VKm0do4jFLeWTucZteNDlBuQAoHGQ9unUKC53y2tFJhnjjbPlZMzrqoOcAAN9I3vwva2tKu2Byoh/wCml/8Anpm2fsU4mJQvzeGOVlBs0kjL3pe2iqGGi3++pZt0ZHCqWQCxV2XNmKsCGC3By6Mdb310tUVs7C3gwrj4uz5W4DPyVe4BGRuBPVxq/wDip4FhYX1CANrx5V7a85ApG21umFXkKGCgKSmpIAsM6G+unEadQrQ2ftzF4Ky37rGPouSbfUfUr2ajqFEdQRbAACwGgHUK91R7E3mw+KFlYo/PG4s1/wBE8H/ZJq8qjFFZrFAVmsUUGaVN4TeeMfpwjzyKPxprPClLbZvio/1sH8aUDca5/vKfnE/VyfxR0/OdD2UgbxD51f1b/wAcdAvzvYEk2A1JPADrra2DsySe0lgqeE63J6QiHTN0lu94Wve1fiYTJJFCP7WRUPYLsQekckA9RNdPTCqgCILKoCr2D8euoKmDZkaABQ1hw5TC1+NspFvJVftPdtZOXG5RxwuA0bfWHfeW/kNM/c6O50Vz6KN0YpIpV1NmXjboIPODxB5705bl97KP0lP7v+la28OEBRZLcpSFJ6VPDzH762NzP7Udafc1A0UUUVUFFFFAp7vSH4xJEeMU2LH7MhhnX1S28lVWyR/t7FfUH+XDTHhcMExecf2qM57QsCH1IKX9j/8AbuL+ov8AlxUDfjMfHCuaRsoLADpZjwVQOJpC21tzE4khEYxxuDdFBV+JFncG50sSFsBcg3tVxvYrPisNFpyg2UtewJYZjw42FX2A2JDFqFu2nKOvlA5v+rWqBP2Rui7AGyqthy2F+b6C8/aa3d6dkxwYZMgJYzRguxux76/UB1Cnalvfsf1dOqaP8R+NBubom+ChPSn4mrmqTcw/1KH6rep2H4VXbb3pyqVw2VjcqZTqisOIUf2jDtsOc81UWO3NqQ4VM8jsSb5UUKzMeJAFvvpKgOJx8zERIg4GxdSq8QZXUgF+q2bsGtWuxt3ZJj3WcuM1jmdgzvpxtlGRefTXspxw2F7moRMiqOACH3uNAk7V3VkRbxqrjjyS4INu+AzVpbL3oxWFISYGaMaWY/OL2Me+7G84rpGV/CX0D71aO0diRTA3UBjzgUEuytqR4mMSRk25wRZlNr2IreNJ25Ufc5sTGDohUdpBYfhTiaDFFFZoA8KUNpa4yP8AXR+pgfwpvPCk9+VjU/Wn1Bz+FA3y96ew/dSFvAPnF+o38aeynybvW7D91I23l+cH6v8AmHsoFyRxFNh5m72KZGc9CNdCT1DMD5K6m6a1zieFXBVgCrAgg6ggixB8lWu7u3/i6LBi2Pc0Fo8SbkBBwSfwSB/ad6QNSDxinHLWMlSQurqGRlZTwZSGBHURWrjtpRRd+4zeApDOf2Rw7TpQaG8jhYcvO7KB2LyifUPPUW5/fS9ifzVS47GtM+dtANFXmVe3nPSfZVxuj+ckH6K+on20Q10UUVQUUUUFUw/rMX6qUeXNF+ANKOEk7ntycng+RfPHGB+9lprx75WjfmSUK31JQUHkDuhJ5shpU3phMe0EkGndEXKf01Nlv1BhGTQWW+69zbCzD6EhBPRex/lNNqsCARwIvVHt/CjFYNsosSA634hhqQeg8Qal3V2gJsMhJ5Schxzhl0sfJaguKW9/P92X9bH95pkpd34W+GUf8WP8aBEwC4vEKMKM5w6s9oYyUaZWdmJmlGqR3a1gRcdtPuyd3EjyPKFZkACKoyxRKOCxpwsOk9vGkhMDiBGuMiYxswPziXykIzLaZfB0JBsQL8Rwpp3c3xSUiLE5YpxYceQ/QUJ4XqBleBib6ec17QOAByfOa8uj3NuH1v8ASvalrAZQf2v9KoyM/wCj669SuFBY8FBJ7AL15DP4I9L/AEql302kIMI5B5T2jQdJbvvMuY+Sg09x4rrNMeMjnX9FeSPWrHy01VUbq4Ux4SNWFiVBPl/6v5at6AoorIoPErWFzza+alXZsZbFRno7pIezLkHremHaBuuUcW5Pk5/V99aGx4LzSSW5KhY067cpyOq+UdqmguZu9bsP3Um7wL84v1P5qccR3rdhpP3gN5F+oP4moKYigV7IrBFQa3xSO5buaXPE5Fue021qVECiwAA6ALCpLUAUHtBV7ur+dcfofcw9tUiLV5ux+eb9Wf41qhrooooCiiigrdpwgqS2qMCkg58hvyh0FSb35gWPRS5vNh2nw5DazYfV7fTjYWLqPBYAN1FGHNTrVPi9m6qVJGW+RlF2jBtdCPpxG2qHhYW4LlCq3H2x3aN4W0eEi/PnRtUcX68wPWt+eljbO3HwGKeOBcl+XI7xPkc3NgxzajLazoNOe5BvZRYCTB4tcQsZ7iFcTFCWVFIBOVQCxUFQ2UgFbEaixrY3i3mwUsWR0WRWUkBiQ1iOKheUPODQX+7+3o8Wpy8l1tmW99DwZTzqemtbfcf1YHokQ+S5rl+wtonDTKInzFAXQGxYx8ZIntxIHK8hrqO2sbFPgpHjZXXLewI0Nr5WHMaCfc9f6lEOpvW7H8a09r7nwYgnTKDc2UDktzMh+geFxqp6ATet3dNgcHFY8xHlDEH1g1dA1AjYbaE+zwExDmSAEKJNSy8O/AByDtNtdCOFNeDx6SoHjuyngQV9txUGMgEh5StxtmCuGt0XA5Q6jpSpiNi4jCP3TBSZATrEwYQvz9635ptD3vJ6hxqh5M3ShA5yctgOk8rhSGwfauMDLf4phyQG5pGHfFem+g7AempcXjMVtAJFkMEDLeTK6NJMfpIhUkKnS507eFOGysEsESRIqqFFsq3sOoE6ntOp41BuAdFFZrFUZArDNb8a18bjI4kLyOqKOLMQo9fE9Vc83h34WUmKC4j+m5Fi47D3qdupoGfHbVBuyconkRL4bMbDzn1CrzZ+G7lGiE3KjlN4TcWPlJJpb3R2Y7BcTMpGnzKHiqkayEczMNB0Dt0b6CHFGyN2Uk7Ve8tuhE+96a9qTWXLzmk1nzu78xay9ii34E+WgjIryVqbLWCtBFagLUmWgLQekFW+7n5//Db+JarEFWWwjadetWHqv+FA20UUUBRRRQFFFFBr4nCxyKVkRWU8QwBpK3q3BglHdYIEMg79czIZAOhwbq/QToecjjT7VZi9t4eIlXlXMOKi7MO0Lcjy0HIcFseISBY3eKaMqckwawcEEqSLtbiM1teNjV3iMImHzkXysLM+lihtyWBIAAtYG+aw4UwbbxuCxWjQyu4BySRqEdfqsSDbqII6qW8FDiMMksUaLPDIwc92KpMLADKchyONB4PP00G/sLeUxxJDC0bBbhTYsSSSx0LJY6k8TVzFtzFvbIYjfhaO5PZaX8a5hKj4iV5I2KtcXHIIVgAABkAA0HHjpxJrfgXEoQXVbIoUEOyEC19SAb+oa1B0bEbRxmWweNGJ75kFwP0UV3uesm1U2I2UzEvIzTv0yABTbjlRr2HQtrG1xSwmJxDmyrfX+8Sfdday8Mim7RDNzEzt+LUU1ptXFwiyRxa2ucrlmNtMzM12P/5WvJvZjxwSHTiLG47Rm0pTllmU2UBP8Un7r37LV77lOWV4ypYcSSSA3OLCwt5dePUAscfvztJToYlHSEBFukEsQRpVPiN9NoyAk4l1XgSiIgF+HKC6eetPamBxAJzk3Oqhbi5vooGvOeFYw2AlnQGSTKjAEas7EXvwY6WNVGliMRJK4Lu8jsbLmLO5J5kBubnoFdG3J3EZSs+MXUWKQGxseZpLaE/o8Bz66Dxu5NhsJbuOHVntbujvmkPTY2so6ltTCd638Wo7ST7KBurSxmPSMXJ16OulWfeR25/NoP8AWtVFkl+cdsqeGw0PUi8XbqHnFBt4/HNJcDi2l/BB08/G3n5q1kjCgKOAr2AOYWA4A6nrLHnY+YcBRag8ZaxlqS1FqCPLWcte7UWoMKK2cLL3N0fwTc9nBvUTUSipAKByVgRcag17pZ2ftIoMjHk/Ra18vUw516xqPu3pds9z1kRsp4SIC6kdOmo9dBcUVDhp1kUOjBlYXBHOKKCaiiigjkNlJ6AfupdOzcMSX7llYklshNiTqTY6Uw4g8hvqn7qpSptQak7YcaGJ2t0BCfvFarLhSReOQAc2Q2PblJr1ONawKDUxqAa4RkQ637qjm4PNfIdKrxBiRwGB7VeSI/uoKu6wRQU0UOIW/Jwdz0Ypx57pc17IxWlkwIt04hmP8FWpWvNqCpePGHQ/ESOju7/glYXC4vxmDUDhy5HItw1ZLeqrgCshaChfY+Jke82LgZegB726iEFqkG7UYN1mQfszN+FqustZtQVCbBQa/GUHZDJ7K2E2REO+ndupIivrc1v2r1loIYoIU7yLMfCmbP8AuLZa9SMzHM7FjwueYdCgaKOyvVqCKCMisWqQii1BHai1e7UWoPFqxapLUWoMKKkAryoqQCgjkGlS7KmZNAxAvwBNvNUcg0rzg+NAzbKcsrEm/KPHsFFeNj3CvfwtPMPZWKC0ooooI5VuLUkbV3dxKMWweNlhuScjKsqei/CnqsGg5XMNtoe9wsw/SV0Y+YgA14O1tqr32yw3Wkwt5BYmuqMo6KjtVHLjvPil7/ZUw+q9/VkoO+BHfYDFjsRT+Irp9qDEvgjzCg5jFvgjMFODxSXvyniGUaX1IavEG+KNm/qmKXKpblRd8Rbkryu+19RrpLwrfvR5hUXcV8EeYUHP13tB4YLF/Zj3q9DedraYHFHtRR+Jp97kvgjzCvXclt3o8wqjn/5Sz82zZz2sF/lNZbeDGfR2XIe2VR/JXQkjHQPNUgjHQPNUHNht7aJ4bKPlxCj+WvSbV2of/DFHbiUrowQdA81e8g6B5qo5+mK2mf8AuUS9s1/uqdG2ieOHgH7be2nsIOgeas5B0CopCl/pP6EGGPa7/g1Q/wC1vEYT0pD/AD10QoOgeasZR0UHPAu1vFYT/m//AGVnLtXxWE/5vv10MKOivSqOig53k2r4rC/83369CLa3icKftPfrowUdFeqI5u0O2Spy4bC5rixZpMttb3Ge5PDnqbD7P20yjOmERrm5Bci1hlsDex76/aK6JRUCGu7u1G7/ABcCfUjzfxLW3h9z5T+ex0jjojVYvuJpwrNBpbO2ckCCOMHKLnlEsbnjqazW5RQf/9k=" />
            </div>
            <div className="home__row"> 
                <Product id="4903850"
                title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
                price={199.99}
                rating={3}
                image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"} />
                <Product id="24556690"
                title={"Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"}
                price={98.99}
                rating={5}
                image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"} />
                <Product id="325345790" 
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"} />
            </div>
            <div className="home__row"> 
                <Product id="9028572583"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Monitor
                - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
            </div>
        </div>
    </div>
  )
}

export default Home