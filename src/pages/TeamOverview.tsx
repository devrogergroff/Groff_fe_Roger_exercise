import Search from 'components/Search';
import  React, {useEffect,useState}  from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, UserData} from 'types';
import {getTeamOverview, getUserData} from '../api';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import List from '../components/List';

function mapArray(users: UserData[]) {
    return users.map(u => {
        const columns = [
            {
                key: 'Name',
                value: `${u.firstName} ${u.lastName}`,
            },
            {
                key: 'Display Name',
                value: u.displayName,
            },
            {
                key: 'Location',
                value: u.location,
            },
        ];
        return {
            id: u.id,
            url: `/user/${u.id}`,
            columns,
            name: `${u.firstName} ${u.lastName}`,
            navigationProps: u,
        };
    }) as ListItem[];
}

function mapTLead (tlead)  {
    const columns = [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${tlead.firstName} ${tlead.lastName}`,
        },
        {
            key: 'Display Name',
            value: tlead.displayName,
        },
        {
            key: 'Location',
            value: tlead.location,
        },
    ];
    return <Card columns={columns} url={`/user/${tlead.id}`} navigationProps={tlead} />;
}

function TeamOverview () {
    const location = useLocation();
    const {teamId} = useParams();
    const [teamLead, setTeamLead] = useState<UserData>();
    const [teamMembers, setTeamMembers] = useState<UserData[]>([]);
    const [teamMembersFiltered, setTeamMembersFiltered] = React.useState<UserData[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
        async function getTeamUsers() {
            const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
            setTeamLead(await getUserData(teamLeadId));
            const teamMembersAux = [];
            for(const teamMemberId of teamMemberIds) {
                const data = await getUserData(teamMemberId);
                data.name = `${data.firstName} ${data.lastName}`;
                teamMembersAux.push(data);
            }
            setTeamMembers(teamMembersAux);
            setIsLoading(false);
        }
        getTeamUsers();
    }, [teamId]);

    return (
        <>
         <Header title={`Team ${location.state.name}`} />
         <Container>
           
           {!isLoading && mapTLead(teamLead)}
           <Search items={teamMembers} filterItems={setTeamMembersFiltered} />
           <List items={teamMembersFiltered?mapArray(teamMembersFiltered): mapArray(teamMembers)} isLoading={isLoading} />
       </Container>
        </>
      
    );
}

export default TeamOverview;
