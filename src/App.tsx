import {useCallback, useState} from 'react';
import {Tags} from '@/services/types';
import {MainContent} from '@/features/mainContetnt/mainContent';
import {useFetchCourses} from '@/hooks/useFetchCourses';

function App() {
    const [tagsTheme, setTagsTheme] = useState<Tags>('Все темы')

    const {loading, error} = useFetchCourses({tagsTheme})

    const changeTheme = useCallback((theme: Tags) => {
        setTagsTheme(theme);
    }, []);

    if(error) {
        return <div>Error loading courses.</div>
    }

    return loading ?
        <div>
            Loading...
        </div> :
       <MainContent onChangeCourses={changeTheme} tagsTheme={tagsTheme}/>
}

export default App
