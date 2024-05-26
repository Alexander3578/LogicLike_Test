import {CustomStore, Tags} from '@/services/types';
import {fetchCourses} from '@/services/api';

export const customStore: CustomStore = {
    state: null,

	fetchFilteredCourses: async (tag:Tags) => {
		try {
			const courses = await fetchCourses();

			if(tag === "Все темы") {
				customStore.state = [...courses]
			}
			else {
				customStore.state = courses.filter(course => course.tags.includes(tag))
			}
		} catch (error) {
			console.error('Error fetching courses:', error);
		}
	}
}
