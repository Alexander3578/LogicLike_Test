import axios from 'axios';
import {Course} from '@/services/types';

export const fetchCourses = async (): Promise<Course[]> => {
    try {
        const response = await axios.get(`https://logiclike.com/docs/courses.json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};