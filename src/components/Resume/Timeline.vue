<template>
	<v-card :dark="dark" class="ma-2 pt-2" :color="bg(dark)">
		<v-card-text>
			<content-section id="timeline" title="Software Experience" :dark="dark">
				<template slot="actions">
					<div>
						<v-switch v-model="detailed" :label="detailed ? 'Detailed' : 'Summary'" />
					</div>
				</template>

				<v-timeline dense :dark="!dark">
					
					<v-timeline-item v-for="(item, i) in orderedItems" 
													 :key="i" 
													 :icon="item.icon || ''" 
													 large 
													 :fill-dot="true">
						<template v-if="item.iconImage" v-slot:icon>
							<v-avatar>
								<img :src="publicPath(item.iconImage)" />
							</v-avatar>
						</template>

						<template v-slot:opposite />

						<v-layout>
							<v-flex v-if="$vuetify.breakpoint.smAndUp" md1 sm2 align-self-center>
								<span>{{ item.year }}</span>
							</v-flex>
							<v-flex md11 sm10 xs12>
								<v-card :light="dark" :dark="!dark" :color="bg((!dark))">
									<v-card-title class="pb-0">
										<div>
											<p v-if="$vuetify.breakpoint.xsOnly">{{ item.year }}</p>
											<h3>{{ item.title }}</h3>
										</div>
									</v-card-title>
									<v-card-text light>
										<v-layout wrap>
											<v-flex :md7="!!item.image" :md12="!item.image" xs12>
												<div class="mr-1">
													<span v-if="item.text" class="pre">{{ item.text }}</span>
													<!-- eslint-disable vue/no-v-html -->
													<div v-else-if="item.html" v-html="item.html" />
													<!-- eslint-enable vue/no-v-html -->
												</div>
											</v-flex>
											<v-flex v-if="item.image" md5 xs12>
												<div class="mt-2">
													<v-carousel v-if="Array.isArray(item.image)" :show-arrows="false" :height="325">
														<v-carousel-item v-for="(citem,ci) in item.image" :key="ci" :src="publicPath(citem)" />
													</v-carousel>
													<v-img
														v-else
														:max-height="item.imageHeight ? item.imageHeight : ''"
														:src="publicPath(item.image)"
													/>
												</div>
											</v-flex>
										</v-layout>
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
						
					</v-timeline-item>
				</v-timeline>
			</content-section>
		</v-card-text>
	</v-card>
</template>

<script>
import ContentSection from '@/components/Resume/content/Section'
import {
	mdiSchool,
	mdiMicrosoftExcel,
	mdiLanguageJavascript,
	mdiLanguagePython,
	mdiLanguageCsharp,
	mdiNodejs,
	mdiAngularjs,
	mdiVuejs,
	mdiSalesforce,
	mdiLogin,
	mdiPackageVariant,
	mdiWeb,
	mdiTransitConnectionVariant
	} from '@mdi/js'

export default {
	name: 'Timeline',
	components: { ContentSection },
	data: () => ({
		detailed: true,
		items: [
			{
				detailed: true,
				year: 2007,
				month: 9,
				title: 'Graduate Teaching Assistant',
				html: `
					<p>
						While I was in graduate school I had my first real exposure to building websites. I 
						static HTML to make very basic websites for the classes I was teaching at the time.
						Looking back now, the pages I build were all very rudimentary and I didn't do anything
						with the servers. But it was a good introduction.
					</p>
				`,
				icon: mdiSchool
			},
			{
				detailed: true,
				year: 2012,
				month: 6,
				title: 'Finished with Graduate School',
				html: `
					<p>
						In 2012, it was time to move on and I sought employment outside of Academia. I took
						the Masters degree I had earned and went looking for a real job.
					</p>
					<p>
						M.S. Mathematics - University of Massachusetts, Amherst
					</p>
				`,
				icon: mdiSchool
			},
			{
				detailed: true,
				year: 2012,
				month: 11,
				title: 'Learning Microsoft VBA',
				html: `
					<p>
						I admit it. I learned to code with Microsoft Visual Basic for Applications. One of the first tasks
						I was assigned at <a href="https://www.bete.com/">BETE Spray Nozzles</a> was to make reviews of
						customer supplied engineering documents.
					<p>
					</p>
						As part of BETE's request for proposal process, the customers would supply the Engineering team with a
						set of technical specifications for the custom solution BETE would provide to them. My job was to read
						these documents and parse out special technical requirements the engineers needed to be aware of while
						designing the solution. Also important was to note any of the customer's requirements that BETE was unable
						or unwilling to provide. All of these technical notes were to be entered by hand into an elaborate
						spreadsheet, only to later be extracted - again by hand - into a collection of word documents which would
						be used to communicate with the customers.
					</p>
					<p>
						After tiring of the clerical nature of moving text back and forth between documents, I developed a
						collection of VBA macros to move the text for me. Eventually, the collection of macros turned into
						a large application which sorted and filtered engineering requirements from technical exceptions, 
						and generated professional PDF documents onto letterhead for customers to review. The company relies
						on the operation of this spreadsheet to keep track of engineering requirements until the present day.
					</p>
					<p>
						This was my first attempt at building really large application and I learned a lot of things. Most
						importantly, I learned that VBA isn't a good platform for applications of this type. But everyone
						has to start somewhere.
					</p>
				`,
				icon: mdiMicrosoftExcel
			},
			{
				detailed: true,
				year: 2013,
				month: 1,
				title: 'Python',
				// describe the 
				html: `
					<p>
						Eventually, I was tasked with generating some graphics to display spray testing data. And
						while the data was given to me in spreadsheet form. The graphics package provided by MS Excel
						was deemed to be insufficient for the task.
					</p>
					<p>
						As I became more interested in processing data sets for work, I began to dip my toe into python.
						In these days, the tools available to python developers weren't as good as they are not.
						ipython notebook, IDLE, python 2.7, python 3.x
					</p>
				`,
				icon: mdiLanguagePython
			},
			// 	{
			// 	detailed: true,
			// 	year: 2014,
			// 	month: 12,
			// 	title: 'Javascript',
			// 	html: `
			// 		<p>
			// 			This was my first real exposure to javascript. I started with a basic Udemy course 
			// 			just to learn the syntax, and moved up to
			// 		</p>
			// 	`,
			// 	icon: mdiLanguageJavascript
			// },
			{
				detailed: true,
				year: 2014,
				month: 10,
				title: 'C# MVC application + Javascript',
				// describe the first dashboarding application you built with PNEY
				html: `
					<p>
						First Attempt with C# .NET Model-View-Controller web application.
					</p>
				`,
				icon: mdiLanguageCsharp
			},
			{
				detailed: true,
				year: 2015,
				month: 2,
				title: 'REST API\'s with Node.js',
				html: `
					<p>
						Node.js, Express.js, D3.js, crossfilter, DC.js, TopoJSON
					</p>
				`,
				icon: mdiNodejs
			},
			{
				detailed: true,
				year: 2016,
				month: 2,
				title: 'Angular.js',
				html: `
					<p>
						Dashboard apps, services.bete.us built with Angular.js.
					</p>
				`,
				icon: mdiAngularjs
			},
			{
				detailed: true,
				year: 2017,
				month: 4,
				title: 'Vue.js',
				html: `
					<p>
						Re-factored the Angular dashboards, C# Web-API and old Node-Express REST API into a single application. 
						The back-end was a REST API built on Node.js and Express.js with a SQL connection to the legacy Progress ABL database.
						The new Front End application was built with the Vue.js framework. Most of the dashboards were just upgrades of the 
						old dashboards, but re-factored and ported into the Vue client.
					</p>
					<p>
						Notable new additions to this application include the Employee Timepunch, Shop Hours Dashboard, Active Shipments Dashboard.
					</p>
				`,
				icon: mdiVuejs
			},
			{
				detailed: true,
				year: 2017,
				month: 11,
				title: 'Salesforce Implementation',
				html: `
					<p>
					
					</p>
				`,
				icon: mdiSalesforce
			},
			{
				detailed: true,
				year: 2018,
				month: 3,
				title: 'Okta SSO implementation',
				html: `
					<p>
						As recommended by our Salesforce sales representative.
					</p>
				`,
				icon: mdiLogin
			},
			{
				detailed: true,
				year: 2018,
				month: 4,
				title: 'Box Cloud Document Management',
				html: `
					<p>
						As recommended by our Salesforce sales representative.
					</p>
				`,
				icon: mdiPackageVariant
			},
			{
				detailed: true,
				year: 2019,
				month: 7,
				title: 'NetSuite ERP',
				html: `
					<p>
							
					</p>  
        `,
				// image: "",
				imageHeight: 200,
				icon: mdiWeb
			},
			{
				detailed: true,
				year: 2020,
				month: 2,
				title: 'Integrating NetSuite with legacy ERP system.',
				html: `
					<p>
							Built <a target="_blank" href="https://github.com/grugknuckle/netsuite-integration">netsuiteintegration</a>
					</p>
          <p>
							This work is currently ongoing. Phase one of go-live is scheduled for the 5th October 2020.
					</p>    
        `,
				// image: "",
				imageHeight: 200,
				icon: mdiTransitConnectionVariant
			},
		]
	}),
	props: {
		dark: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		orderedItems() {
			const items = this.items.sort((a, b) => (b.year + b.month/12) - (a.year + a.month/12))
			if (this.detailed) {
				return items
			} else {
				return items.filter(item => {
					return !item.detailed
				})
			}
		}
	}
}
</script>

<style scoped>
/* .title {
	border-bottom: 2px #bfbfbf solid;
	line-height: 1.5 !important;
}
.pre {
	white-space: pre;
}
.transparent {
	opacity: 0.6;
} */
</style>
