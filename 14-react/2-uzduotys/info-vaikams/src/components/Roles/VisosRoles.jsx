import Role from './Role';

const VisosRoles = () => {
    return (
        <div>
            <Role pavadinimas="programuotojas" vartotojuSk={12}/>
            <Role pavadinimas="dykaduonis" vartotojuSk={122}/>
            <Role pavadinimas="moketojas" vartotojuSk={1}/>
        </div>
    );
};

export default VisosRoles;