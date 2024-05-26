import {useEffect, useState} from 'react';
import {customStore} from '@/services/store';
import {fetchCourses} from '@/services/api';
import {Tags} from '@/services/types';

type UseFetchCoursesProps = {
    tagsTheme: Tags
}

export const useFetchCourses = ({tagsTheme}: UseFetchCoursesProps) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect( () => {
        setLoading(true)

        customStore.fetchFilteredCourses(tagsTheme).then(() => {
            setLoading(false)
        })
    }, [tagsTheme])

    useEffect(() => {
        setLoading(true);

        fetchCourses()
            .then(() => {
                    setLoading(false);
            })
            .catch(err => {
                    setError(err);
                    setLoading(false);
            });
    }, []);

    return { loading, error };
};