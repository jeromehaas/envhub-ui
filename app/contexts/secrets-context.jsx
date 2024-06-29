'use client';

// IMPORTS
import { createContext, useMemo, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getProjectQuery, getProjectsQuery, deleteProjectQuery, createProjectQuery } from '#/queries/projects';

// CREATE CONTEXT
const SecretsContext = createContext();

// CREATE PROVIDER
const SecretsProvider = ({ children }) => {

	// BRING IN PARAMS
	const params = useParams();

	// BRING IN QUERY-CLIENT
	const queryClient = useQueryClient();

	// SETUP STATE
	const [ environment, setEnvironment ] = useState({ id: 'production', label: 'Production', index: 1 });

	// ENVIRONMENT OPTIONS
	const environmentOptions = [
		{ id: 'production', label: 'Production', index: 0 },
		{ id: 'development', label: 'Development', index: 1 },
		{ id: 'local', label: 'Local', index: 2 },
	];

	// SWITCH ENVIRONMENT
	const switchEnvironment = () => {
		if (environment.index + 1 >= environmentOptions.length) {
			setEnvironment(environmentOptions[0]);
		} else {
			setEnvironment(environmentOptions[environment.index + 1]);
		}
	};

	// GET PROJECTS
	const { data: projects, refetch: refetchProjects } = useQuery({
		queryKey: [ 'projects' ],
		queryFn: () => getProjectsQuery(),
		initialData: [],
	});

	// DELETE PROJECT
	const { mutate: deleteProject } = useMutation({
		mutationKey: [ 'project' ],
		mutationFn: deleteProjectQuery,
		onSuccess: () => { queryClient.invalidateQueries('projects'); },
	});

	// CREATE PROJECT
	const { mutate: createProject } = useMutation({
		mutationKey: [ 'project' ],
		mutationFn: createProjectQuery,
		onSuccess: () => { queryClient.invalidateQueries('projects'); },
	});

	// MEMOIZE VALUES
	const value = useMemo(() => ({
		environment,
		switchEnvironment,
		// project,
		projects,
		deleteProject,
		createProject,
		 }), [ environment, projects ]);

	// RENDER
	return (
		<SecretsContext.Provider value={ value }>
			{children}
		</SecretsContext.Provider>
	);

};

// EXPORTS
export { SecretsContext, SecretsProvider };
