export interface experience {
	companyName: string;
	jobType: string;
	jobPosition: string;
	startDate: Date;
	endDate: Date;
	companyLogo?: string;
}

export const firstName: string = "Sri Harsha";
export const lastName: string = "Datla";
export const email: string = "harshadatla@gmail.com";
export const phone: string = "313-502-7683";
export const profileImageUrl: string =
	"https://media-exp1.licdn.com/dms/image/C4D03AQHCHjCj8HfH4Q/profile-displayphoto-shrink_400_400/0/1546611232579?e=1674691200&v=beta&t=ycLnRN2M32RQHl7o2NQewXgiAJSis_SLMc3Q03zqQxo";
export const linkedInUrl: string = "https://linkedin.com/in/harsha-datla";
export const experience: experience[] = [
	{
		companyName: "Sabre Corporation",
		jobType: "Full-Time",
		jobPosition: "Lead Software Engineering",
		startDate: new Date("2017-12-15"),
		endDate: new Date(),
		companyLogo:
			"https://media-exp1.licdn.com/dms/image/C4E0BAQGSuDVTo6jhHQ/company-logo_100_100/0/1519856020361?e=1677110400&v=beta&t=9Vme8EFMXgTM4cf_4k9EavxfHxthxsBRmnlUHIS7Gxw"
	},
	{
		companyName: "The OmniTrust Technologies LLC",
		jobType: "Full-Time",
		jobPosition: "Software Developer",
		startDate: new Date("2016-07"),
		endDate: new Date("2017-12"),
		companyLogo:
			"https://media-exp1.licdn.com/dms/image/C560BAQH_VUrGGYrIfw/company-logo_100_100/0/1519871585923?e=1677110400&v=beta&t=G4me22yXEnUHfFoThNck7o4Ycm9qc9UrBGxuN304kik"
	},
	{
		companyName: "Wayne State University",
		jobType: "Part-Time",
		jobPosition: "Student Assistant",
		startDate: new Date("2015-11"),
		endDate: new Date("2016-06"),
		companyLogo:
			"https://media-exp1.licdn.com/dms/image/C4D0BAQFVWmT5IsrY_Q/company-logo_100_100/0/1591178690810?e=1677110400&v=beta&t=53XsCj7r4QBotM8dINMvxxr3HoSVlNk0vD0wlB-78RE"
	}
];
