import { useState } from "react"

export default function Form(props){
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    
    const link = 'https://api.whatsapp.com/send?phone=11950792741&text=Olá%20me%20chamo%20' + data.name + ',%0Ameu%20telefone%20%C3%A9:%20' + data.phone + '.%0Ameu%20e-mail%20%C3%A9:%20' + data.email + '.%0AQueria%20saber%20mais%20sobre%20o%20Instituto%20Defor'

    const handleForm = (e) => {
        e.preventDefault()
        window.open(link, '_blank');
    }

    return(
        <div className='form recoil'>
            <div className='title'>
                <h1>Solicite um atendimento</h1>
            </div>
            <div className='form-inputs'>
                <form onSubmit={handleForm}>
                    <input type='text' placeholder='Nome completo' onChange={(e) =>{
                        setData({
                            ...data,
                            name: e.target.value
                        })
                    }} required />
                    <input type='text' placeholder='E-mail' onChange={(e) =>{
                        setData({
                            ...data,
                            email: e.target.value
                        })
                    }} required />
                    <input type='text' placeholder='Telefone + DDD' onChange={(e) =>{
                        setData({
                            ...data,
                            phone: e.target.value
                        })
                    }} required />
                    <input type='submit' value='Saiba Mais'/>
                </form>
            </div>
        </div>
    )
}