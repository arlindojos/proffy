import React from 'react';
import boa from '../../assets/images/arlindo_boa.jpg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    const createNewConnection = () => {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>{teacher.cost}</strong>
                </p>
                <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://api.whatsapp.com/send?1=pt_BR&phone=${teacher.whatsapp}`}
                    >
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contacto
                </a>
            </footer>
        </article>
        );
    }

export default TeacherItem;