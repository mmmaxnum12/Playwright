interface UserI {
	userId: string;
	username: string;
	
}

interface ConstantDataI {
	user: UserI;
}
const constants: Partial<Record<EnvT, ConstantDataI>> = {
	
		user: {
			userId: 'ae0ccec0-a841-4418-b38e-15b5ca04cb1c',
			username: 'Mmmaxnum123',
	
		},
	

export const getConstantValue = () => {
	return constants[Env.env]!;
};
