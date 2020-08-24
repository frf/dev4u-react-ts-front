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
            <PageHeader title="How amazing that you are a developer."
            description="The first step is to fill out this registration form."
            />

            <main>
                <form onSubmit={handleCreateClasse}>
                    <fieldset>
                        <legend>Your data</legend>

                        <Input name="name" label="Full name" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <Input name="email" label="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <Textarea name="bio" label="Biograpy"  value={bio} onChange={(e) => {setBio(e.target.value)}} />
                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Alert"/>
                            Important! <br />
                            Fill in all the details
                        </p>
                        <button type="submit">Save</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;