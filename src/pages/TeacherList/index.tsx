import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, {Teacher} from '../../components/TeacheItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        console.log(subject,week_day,time);

        const response = await api.get('classes', {
            params: {
                subject,week_day,time
            }
        });

        setTeachers(response.data);
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject"
                        label="Matéria"
                        value={subject} 
                        onChange={(e) => {setSubject(e.target.value)}} 
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação física', label: 'Educação física'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'},
                        ]}
                    />
                    <Select 
                        name="week_day"
                        label="Dia da semana"
                        value={week_day} 
                        onChange={(e) => {setWeekday(e.target.value)}} 
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado-feira'},
                        ]}
                    />
                    <Input type="time" name="time" label="Horas" value={time} 
                        onChange={(e) => {
                            setTime(e.target.value)
                            }} />

                    <button type="submit">Buscar</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;