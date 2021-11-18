import React from 'react'
import pdf from '../../assets/Mohammad.pdf'

function resume() {

  return (
    <div id="doc2" class="yui-t7">
	<div id="inner">
	
		<div id="hd">
			<div class="yui-gc">
				<div class="yui-u first">
					<h1>Mohamamd Javid Moradi</h1>
					<h2>Full Stack Web Developer</h2>
				</div>

				<div class="yui-u">
					<div class="contact-info">
						<h3><a id="pdf" href={pdf}>Download PDF</a></h3>
						<h3><a href="mailto:name@yourdomain.com">moradi.javid@gmail.com</a></h3>
						<h3>(916)-280-4794</h3>
					</div>
				</div>
			</div>
		</div>

		<div id="bd">
			<div id="yui-main">
				<div class="yui-b">

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>Profile</h2>
						</div>
						<div class="yui-u">
							<p class="enlarge">
							Full Stack Web Developer graduate from US Berkeley Extension Bootcamp. After the years of working Correction System Support as a contractor with US embassy in Afghanistan, I have started a new journey to my childhood passion. I was always fascinated and wanted to create web sites. I returned to school and started self-learning and boot camp.
							</p>
						</div>
					</div>

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>Skills</h2>
						</div>
						<div class="yui-u">

								<div class="talent">
									<h2>Front-End Developer</h2>
								</div>

								<div class="talent">
									<h2>Back-End Developer</h2>
								</div>
						</div>
					</div>

					<div class="yui-gf">
	
						<div class="yui-u first">
							<h2>Experience</h2>
						</div>

						<div class="yui-u">

							<div class="job">
								<h2>Maximus</h2>
								<h3>Customer Serivces Rep</h3>
								<h4>2017-2020</h4>
								<p>Responds to inbound calls and completes outbound support calls, provides responses to questions, and in specific instances, refers callers to the appropriate supervisor, county or state agency representatives for service and/or when problems or concerns occur. Assists beneficiaries in enrolling/disenrolling in managed care plans. Assists beneficiaries with medical exemptions and waiver inquiries. Provides beneficiaries with status of enrollment/disenrollment, medical exemptions, and waivers. Meets Production and Quality Assurance goals as defined for this position.</p>
							</div>

							<div class="job">
								<h2>PAE</h2>
								<h3>Senior Project Advisor</h3>
								<h4>2015-2017</h4>
								<p>responsible for the overall management, control, coordination and execution of the CSSP PMST Team,
responsible to ensure compliant operations in conformance with regulations and policies, implementation of US Embassy Kabul Narcotics Affairs Section (NAS) operational strategies, and establishment of management targets and monitoring achievement of results. Assists in developing and implementing reform, support, and capacity building programs that reflect the needs of the GDPDC operations and administration. Frequently required to attend corrections and justice sector-related meetings. Provides advice on strategies, policies and plans affecting project operations, delivery of training, mentoring, and advisory services. The Senior Advisor works with local staff personnel to obtain and provide feedback to enhance their individual growth and professionalism. Provides education and sound corrections practices while acting as a role model for all Pol-i-Charkhi GDPDC staff. Provides individual mentoring and coaching to Pol-i-Charkhi GDPDC Staff. Coordinates with internal and external agencies as necessary. </p>
							</div>
							
					</div>
					</div>



				</div>
			</div>
		</div>

		

	</div>


</div>

    
  )
}; 

export default resume