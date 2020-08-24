import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import {useHistory} from 'react-router-dom';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import api from '../../services/api';


function TeacherForm() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const password  = '123456';

    function handleCreateClasse(e: FormEvent) {
        e.preventDefault();

        api.post('api/auth/register', {
            name,
            email,
            password,
        }).then(() => {
            history.push('/');
        }).catch(erro => {
            alert('ERR');
        })

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aula."
            description="O primeiro paso é prencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClasse}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <Input name="email" label="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <Textarea name="bio" label="Biografia"  value={bio} onChange={(e) => {setBio(e.target.value)}} />
                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;