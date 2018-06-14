import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

class TermsOfService extends Component {
  constructor (props) {
    super(props)
    global.navigator
      ? this.elem = document.querySelector('#particles-js')
      : this.elem = {}
  }
  componentDidMount () {
    this.elem.hidden = true
    let $scrollbar = $('#scrollbar1')
    $scrollbar.tinyscrollbar()
  }
  componentWillUnmount () {
    this.elem.hidden = false
  }
  render () {
    let {url} = this.props.match
    return (
      <div className='static-page bg-2'>
        <Header />
        <main className='container main'>
          <div id='scrollbar1'>
            <div className='scrollbar'>
              <div className='track'>
                <div className='thumb'>
                  <div className='end' />
                </div>
              </div>
            </div>
            <div className='viewport'>
              <div className='overview'>
                <h1>Terms and conditions</h1>
                <h2>Terms and Conditions</h2>
                <p>Through this website, Mobile Web Solutions, Inc. ("MWS") d/b/a MobilizeToday.com offers a service that allows users who register with MWS (each, a "User") to use MWS's proprietary software platform to build and host mobile websites. The services offered (each, a "Service") include but not limited to self service online mobile website builder, our custom service to build your mobile website for you, host your mobile website at our infrastructure. By using the Service, you agree to comply with and be bound by the following terms and conditions (this "Agreement"), which we may change at any time by posting notice on MobilizeToday.com. PLEASE READ THIS AGREEMENT CAREFULLY. If you do not agree to these terms and conditions, please do not use the Service. Use of the Service is limited to those individuals who can form legally binding contracts under applicable law, and without limiting the foregoing, the Service is not to be accessed or used by minors.<br />In addition, when using any particular Service option you may be subject to additional guidelines or terms and conditions applicable to such service that may be posted on MobilizeToday.com from time to time, which are hereby incorporated into this Agreement.</p>
                <h2>Registration</h2>
                <p>If you wish to become a User, you are required to register by creating an account. If you register, you represent and warrant to MWS that: (i) you are of legal age to form a binding contract; (ii) you will provide MWS with accurate, current and complete registration information; (iii) your registration and your use of the Service is not prohibited by law; and (iv) you have all legal rights to publish and distribute mobile website versions of the User blogs and websites you input into the Service (the "User Authorized Sites"). MWS reserves the right to terminate or suspend your status as a User in the event that you breach any term of this Agreement.</p>
                <h2>Provision of Service</h2>
                <p>During the period that you are a User in good standing (the "Term"), you are entitled to use the Service to create mobile website versions of the User Authorized Sites (such mobile versions the "User Mobile Sites"). As part of the Service, MWS will host the User Mobile Sites on its servers. User acknowledges that User Mobile Sites are updated at regular intervals, so that the User Mobile Sites will not immediately reflect changes to the User Authorized Sites.<br />MWS's ability to provide the Service is subject to provision of the User Authorized Sites to MWS via (X)HTML, which shall be the responsibility of the User. MWS is not responsible for any errors or delays in the Service caused by any error or fault of User with the User Authorized Sites or the (X)HTML sent to MWS. User will ensure that the User Authorized Sites do not contain any computer virus, code or other feature that may harm or impair the operation of the Service.</p>
                <h2>Licenses</h2>
                <p>The Service includes the right for User to use (a) MWS's online tools to optimize the User Authorized Sites for mobile delivery; and (b) MWS mobile tags on User Authorized Sites to alert end users to the User Mobile Sites (such tools and tags the "MWS Tools"). MWS grants User a limited, non-exclusive, non-transferable right and license to use the MWS Tools during the Term in connection with User's use of the Service. Except as expressly permitted herein, User shall not copy, modify, distribute, sublicense, make available, reverse engineer, reverse compile or otherwise use the MWS Tools. No license is granted to User to MWS Tools or any other proprietary technology or intellectual property of MWS except as expressly stated herein, and MWS reserves all rights therein.<br />User hereby grants to MWS the limited, non-exclusive, right and license: (a) to use, copy and publish the User Authorized Sites to create User Mobile Sites and to display such User Mobile Sites to end-users on User's behalf. In addition, User hereby grants MWS the limited, non-exclusive right and license to display an image of User Mobile Sites (or any part thereof) in MWS's marketing materials and on MWS's websites. Users may opt out of such use of User Mobile Sites by sending written notice to MWS at support@mobilizetoday.com, and in the event of such opt out MWS will cease use of your User Mobile Sites promptly, subject to a reasonable transition period to allow MWS to make changes to marketing materials and websites. Except for the limited licenses granted to MWS in this Agreement, MWS acquires no rights in or to the User Authorized Sites, and all such rights are retained and reserved exclusively by User.</p>
                <h2>Fees</h2>
                <p>Use of the Service is subject to payment of the applicable fees listed on the MobilizeToday.com website, which are paid by User by credit card or arranged invoice. If any credit card payment is dishonored or charged back to MWS, the User remains liable to MWS for the full amount of fees payable. MWS reserves the right to collect interest at the maximum rate permitted by applicable law on overdue balances. If MWS terminates your User status or use of the Service as a result of breach of this Agreement, you will not be entitled to any refund of fees paid. If any taxes, including sales, use or service taxes, are applicable to MWS's provision of the Service to you, you are responsible for payment of such taxes.</p>
                <h2>Rules of Conduct for the Service</h2>
                <p>You shall not:</p>
                <ul>
                  <li>Use the Service for any purpose in violation of local, state, national or international laws</li>
                  <li>Impersonate any person or entity, or forge or manipulate headers to disguise the origin of any User Authorized Site</li>
                  <li>Harvest or otherwise collect information about others, including email addresses, without their consent</li>
                  <li>Harvest or collect any data from MobilizeToday.com or use any automated means, including spiders, robots, crawlers, data mining tools or the like to download data from MobilizeToday.com or relating to the Service (other than Internet search engines operating on terms reasonably acceptable to MWS)</li>
                  <li>Attempt to gain unauthorized access to MWS's computer systems</li>
                  <li>Engage in any other conduct that restricts or inhibits any other person from using or enjoying the Service, or which, in MWS's sole judgment, exposes MWS to any liability or detriment of any type</li>
                  <li>The Service may not be used to publish, distribute or otherwise make available any material that:
                    <ul>
                    <li>Is libelous, defamatory, threatening, abusive, scandalous, obscene or unlawful or that encourages a criminal offense</li>
                    <li>Contains material from other copyrighted works without the written consent of the owner of such copyrighted material</li>
                    <li>Infringes any copyright or violates any property rights, rights of privacy or publicity, or any other rights of any third party</li>
                    <li>Contains any statement, formula, direction, recipe, prescription or other matter that involves a reasonably foreseeable risk of injury or damage to the material's readers or others</li>
                    <li>Contains any software viruses or any other code, file or program that is designed to interrupt, destroy or limit the functionality of any computer software, hardware or telecommunications equipment</li>
                  </ul>
                  </li>
                  <li>MWS reserves the right (but is not obligated) to do any or all of the following:
                    <ul>
                    <li>Investigate any allegation that any User Authorized Site does not conform to the terms and conditions of this Agreement</li>
                    <li>Disable access to the Service with respect to any User Authorized Site that is abusive, illegal or disruptive, or that otherwise fails to conform with the terms and conditions of this Agreement</li>
                  </ul>
                  </li>
                  <li>MWS have no liability or responsibility to Users or any other person or entity for performance or nonperformance of the aforementioned activities.</li>
                </ul>
                <h2>Proprietary Rights</h2>
                <p>All the text, images, marks, logos, compilations (meaning the collection, arrangement and assembly of information) and other content on MobilizeToday.com, including any Submissions (as defined below) (collectively, the "Site Content") are proprietary to us or to third parties. MWS authorizes you to view, download, and use the Site Content solely in connection with your authorized use of the Service in accordance with this Agreement. Except as expressly permitted above, copying, modifying, reproduction, redistribution, republication, uploading, posting, transmitting, distributing or otherwise exploiting in any way the Site Content, or any portion of the Site Content, is strictly prohibited without the prior written permission of MWS. In addition, you may not link to any part of the Site Content or frame or otherwise display in any manner the Site Content at any other web site or elsewhere without MWS's written consent.<br />All software used by MWS to operate the Service is proprietary to us or to third parties, and except as may be required to use the Service in accordance with this Agreement, any use, copying, redistribution, sale, decompilation, reverse engineering, disassembly, translation or reduction of such software to human-readable form is prohibited.<br />The MobilizeToday.com trademark is proprietary to us, and it may not be used in connection with any service or products other than those provided by MWS, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits MWS. Any use of the MobilizeToday.com mark, or any others displayed on the Service, will inure solely to the benefit of their respective owners.<br />Certain types of data and analytics are generated in connection with use of the Service: (a) "User Data", meaning any data and analytics specific to Client, including number of page views, the types of handsets of viewers of Client Mobile Sites, and the source of mobile traffic; and (b) "Aggregated Data", meaning data generated by MWS in connection with this Agreement that does not identify Client, including aggregated traffic analysis, aggregated usage reports, and aggregated information about end-user access to mobile websites. MWS does not collect personally identifiable information from the Service. MWS shall make the User Data available to Client on MobilizeToday.com via a secured account and login in provided by MWS. As between Client and MWS and to the extent permitted by law: (i) Client owns and retains all rights to Client Data, and MWS shall use Client Data only for the purposes of this Agreement; and (ii) MWS owns and retains all rights to Aggregated Data. You agree, and represent and warrant, that your use or other exploitation of the Service and the Site Content, or any portion thereof, will be consistent with the licenses, covenants and restrictions in this Agreement and will neither infringe nor violate the rights of any other party or breach any contract or legal duty to any other parties. In addition, you agree that you will comply with all applicable laws, regulations and ordinances relating to the Service, the Site Content or your use of them, and you will be solely responsible for your own individual violations of any of them.</p>
                <h2>Submissions to MWS Belong to MWS</h2>
                <p>MWS is pleased to hear from you and welcomes your comments regarding the Service and Site Content. In the event that you submit ideas, suggestions, materials or other information to MWS, whether at the request of MWS or not (all of the foregoing being "Submissions"), the Submissions will be deemed, and will remain, the sole property of MWS. None of the Submissions will be subject to any obligation of confidence on the part of MWS, and MWS will not be liable for any use or disclosure of any Submissions. Without limiting the foregoing, MWS will exclusively own all now known or hereafter existing rights to the Submissions of every kind, in perpetuity, and will be entitled to unrestricted use and other exploitation of the Submissions for any purpose whatsoever, commercial or otherwise, by any means, by any media, without compensation to the provider, author, creator or inventor of the Submissions. Each of the them irrevocably and unconditionally waives and covenants not to assert any of such rights against MWS successors, assigns, officers, directors, employees and agents.</p>
                <h2>Warranty Disclaimers and Limitations of Liability</h2>
                <p>If you are a User who has paid all fees due, MWS covenants that it will deliver the Service in accordance with applicable industry standards. In the event of any breach of such covenant, or other failure or defect with respect to the Service, the sole and exclusive remedy of the User, and the sole and exclusive liability of MWS, shall be, at MWS's option (a) to re-perform the Service to remedy the defect or failure or (b) to refund the amount paid for the period during which the Service was alleged to be defective.<br />Except as stated in the previous paragraph, MWS make no representations or warranties of any kind regarding the Service and the Site Content. The Service and Site Content are provided in "AS IS" condition, and MWS EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING: ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NONINFRINGEMENT, AND ANY AND ALL WARRANTIES ARISING FROM COURSE OF DEALING AND USAGE OF TRADE; THAT THE SERVICE OR THE SITE CONTENT WILL MEET YOUR REQUIREMENTS, WILL ALWAYS BE AVAILABLE, ACCESSIBLE, UNINTERRUPTED, TIMELY, SECURE OR OPERATE WITHOUT ERROR, AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE OPERATION, USE OR OTHER EXPLOITATION OF THE SERVICE OR THE SITE CONTENT, AND AS TO THE ACCURACY OR RELIABILITY OF ANY INFORMATION OBTAINED FROM THE SERVICE OR THE SITE CONTENT. No advice or information, whether oral or written, obtained by you from MWS or through the Service or Site Content will create any warranty not expressly stated herein.<br />EXCEPT AS STATED ABOVE WITH RESPECT TO PREMIUM USERS, YOU USE THE SERVICE AND THE SITE CONTENT AT YOUR OWN RISK, AND MWS WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM OR RELATING TO ANY OF THEIR OPERATION, USE OR OTHER EXPLOITATION. You waive and covenant not to assert any claims or allegations of any nature arising from or relating to the operation, use or other exploitation of the Service or the Site Content, including any allegation or claim that MWS has or should indemnify, defend, or hold you harmless from any claim or allegation arising from the operation, use or other exploitation of the Service or the Site Content.<br />UNDER NO CIRCUMSTANCES WILL YOU BE ENTITLED TO RECOVER FROM MWS ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT, PUNITIVE OR SPECIAL DAMAGES (INCLUDING DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS OR LOSS OF USE), WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE ARISING FROM OR RELATING TO THE WEB SITE OR SITE CONTENT, EVEN IF MWS HAS BEEN INFORMED OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. THE MAXIMUM AGGREGATE LIABILITY OF MWS FOR ANY AND ALL DAMAGES INCURRED BY YOU SHALL BE THE AMOUNT PAID BY YOU TO MWS FOR THE SERVICE DURING THE PERIOD IN WHICH IT WAS ALLEGED TO BE DEFECTIVE.<br />SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF WARRANTIES OR OF LIABILITY, SO SOME OF THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.</p>
                <h2>Your Indemnity of MWS; Termination of Use</h2>
                <p>You agree to indemnify, hold harmless, and at their respective options, defend MWS from all causes of action, claims and allegations (whether threatened or pending), costs, fees, charges, and expenses (including reasonable attorneys' and professionals' fees), judgments, damages, losses, and liabilities arising from or relating to the breach or alleged breach of your duties or obligations under this Agreement or your use of the Service or Site Content. For any indemnified matter, MWS will have full control of the response thereto and the defense thereof, including any agreement relating to the settlement thereof, and you will cooperate fully with MWS in such matter.<br />MWS may, at its option, terminate any User's access to any or all of the Service, including your password and account.</p>
                <h2>Digital Millennium Copyright Act Compliance</h2>
                <p>MWS complies with the provisions of the Digital Millennium Copyright Act applicable to internet service providers (17 U.S.C. §512, as amended). If any person has any complaints or objections to material posted on the Service or on any User Mobile Site hosted by the Service, you may contact our Designated Agent at the following address:<br />Mobile Web Solutions, Inc.<br />1201 N. Orange St, #762<br />Wilmington, New Castle, DE, 19801<br />Email: support@mobilizetoday.com<br />Any notice alleging that materials on this Service or on any User Mobile Site hosted by the Service infringe intellectual property rights must include the following information:</p>
                <ul>
                  <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other right being infringed</li>
                  <li>a description of the copyrighted work or other intellectual property that you claim has been infringed</li>
                  <li>a description of the material that you claim is infringing and where it is located on the Service</li>
                  <li>your address, telephone number, and email address</li>
                  <li>a statement by you that you have a good faith belief that the use of the materials on the Site of which you are complaining is not authorized by the copyright owner, its agent, or the law</li>
                  <li>a statement by you that the above information in your notice is accurate and that, under penalty of perjury, you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf</li>
                </ul>
                <h2>Counter Notices</h2>
                <p>If material that you have posted to the Service or any User Mobile Site has been removed or disabled, you may file a counter notice pursuant to 17 U.S.C. §512 (g). To be effective, the counter notice must be a written communication sent to the designated agent address listed above that includes the following:</p>
                <ul>
                  <li>a physical or electronic signature of the subscriber</li>
                  <li>identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled</li>
                  <li>a statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled</li>
                  <li>your name, address, and telephone number, and a statement that you consent to the jurisdiction of Federal District Court for the judicial district in which the address is located or, if your address is outside of the United States, for any judicial district in which MWS may be found, and that you will accept service of process from the person who provided notification under subsection 17 U.S.C. §512 (c)(1)(C) or an agent of such person</li>
                </ul>
                <h2>Link to the Privacy Policy</h2>
                <p>MWS operates the Service under the PRIVACY POLICY published at [<a href='#privacy-policy'>www.mobilizetoday.com/privacy-policy</a>]. We urge you to read this policy now and, because the policy is updated from time to time, later at your convenience.</p>
                <h2>Minors</h2>
                <p>This Service is not directed at users under the age of 13. If you are under the age of 13, you are not permitted to register as a User or send any information about yourself to us.</p>
                <h2>Links to Third Party Service Are Not Endorsements</h2>
                <p>The Service may contains links to third-party web sites. The linked sites are not under our control, and we are not responsible for the contents of any linked site. We provide these links as a convenience only, and a link does not imply endorsement of, sponsorship of, or affiliation with the linked site by MWS. Links to merchants or advertisers are owned and operated by independent retailers or service providers, and therefore, we are unable to ensure that you will be satisfied with their products, services or business practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any of these third parties.</p>
                <h2>Miscellaneous Provisions</h2>
                <p>No delay or omission by MWS in exercising any of its rights occurring upon any noncompliance or default by you with respect to any of the terms and conditions of this Agreement will impair any such right or be construed to be a waiver thereof, and a waiver by MWS of any of the covenants, conditions or agreements to be performed by you will not be construed to be a waiver of any succeeding breach thereof or of any other covenant, condition or agreement hereof contained. As used in this Agreement, "including" means "including but not limited to." If any provision of this Agreement is found by a court of competent jurisdiction to be invalid or unenforceable, then this Agreement will remain in full force and effect and will be reformed to be valid and enforceable while reflecting the intent of the parties to the greatest extent permitted by law. Except as otherwise expressly provided herein, this Agreement sets forth the entire agreement between you and MWS regarding its subject matter, and supersedes all prior promises, agreements or representations, whether written or oral, regarding such subject matter. This Agreement may be assigned by MWS to any successor to its business, whether by merger, change of control, or sale of all or substantially all of its assets. You agree that the electronic text of this Agreement constitutes a writing and your assent to the terms and conditions hereof constitutes a "signing" for all purposes.</p>
                <p><em>Updated on December 31th, 2015</em></p>
                <br />
              </div>
            </div>
          </div>
        </main>
        <Footer url={url} />
      </div>
    )
  }
}

export default TermsOfService
