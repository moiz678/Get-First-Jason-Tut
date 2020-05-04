      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhttp.responseText);

            //Home_Content Component
            const home = response.home;
            const homeData = home.map(function(show){
              return `
                <img src="${show.home_img}" class="margin-top-100 img-circle center-block profile_picture" alt="profile picture">
                <h1 class="text-capitalize text-center">${show.home_heading_one}</h1>
                <h3 class="text-capitalize text-center">${show.home_heading_three}</h3>
              `;
            });
            document.getElementById('home_content').innerHTML = homeData.join("");

            //Home and footer Social Icon Component
            const homeIcon = response.homeIcon;
            const homeIconData = homeIcon.map(function(show){
              return `
                <li><a href="${show.home_icon_link}" class="${show.home_icon}">${show.home_icon_content}</a></li>
              `;
            });
            document.getElementById('home_social_icon').innerHTML = homeIconData.join("");
            document.getElementById('footer_social_icon').innerHTML = homeIconData.join("")


            //portfolio_img_list Component
            const portfolio = response.portfolio;
            const portfolioData = portfolio.map(function(show){
              return `
              <div class="col-sm-4 col-xs-6">
                <figure >
                    <img src="${show.portfolio_img}" alt="">
                    <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                        <h3>${show.portfolio_heading_three}</h3>
                        <hr>                      
                        <p>${show.portfolio_paragraph}</p>
                        </a>
                    </figcaption>
                </figure>
                <br><br>
                </div>`;
            });
            document.getElementById('portfolio_img_list').innerHTML = portfolioData.join("");


            // const reviews = response.reviews;
            // const reviewsData = reviews.map(function(show){
            //     return `
            //         <div class="carousel-inner text-center">
            //             <div class="item active">
            //                 <blockquote>
            //                     <div class="row">
            //                         <div class="col-sm-8 col-sm-offset-2">

            //                             <p>${show.review_paragrapg}</p>
            //                             <small>${show.review_small_name}</small>
            //                         </div>
            //                     </div>
            //                 </blockquote>
            //             </div>
            //         </div>
            //     `;
            // });
            // document.getElementById('reviews_list').innerHTML = reviewsData.join("");


            // const reviewsImg = response.reviewsImg;
            // const reviewsImgData = reviewsImg.map(function(show){
            //     return `
                
            //         <li data-target="#quote-carousel" data-slide-to="${show.review_data_slide}" class="active"><img class="img-responsive " src="${show.review_img}" alt="">
            //         </li>
               
            //     `;
            // });
            // document.getElementById('reviews_img_list').innerHTML = reviewsImgData.join("");


            //About me Content Component 
            const aboutMe = response.aboutMe;
            const aboutMeData = aboutMe.map(function(show){
                return `
                    <p>${show.about_me_paragraph}</p>
                `;
            });
            document.getElementById('about').innerHTML = aboutMeData.join("");

            //About Work History Content Component 
            const aboutWorkHistory = response.aboutWorkHistory;
            const aboutWorkHistoryData = aboutWorkHistory.map(function(show){
                return `
                    <div class="block">
                        <h4>${show.about_workHisotory_heading_four}</h4>
                        <ul class="icon-list">
                            <li><i class="${show.about_workHistory_iconOne}"></i> ${show.about_workHistory_listOne}</li>
                            <li><i class="${show.about_workHistory_iconTwo}"></i> ${show.about_workHistory_listTwo}</li>
                        </ul>
                    </div>
                `;
            });
            document.getElementById('about_work_history').innerHTML = aboutWorkHistoryData.join("");

            //About Education Content Component 
            const aboutEducation = response.aboutEducation;
            const aboutEducationData = aboutEducation.map(function(show){
                return `
                    <div class="block">
                        <h4>${show.about_education_heading_four}</h4>
                        <ul class="icon-list">
                            <li><i class="${show.about_education_iconOne}"></i> ${show.about_education_listOne}</li>
                            <li><i class="${show.about_education_iconTwo}"></i> ${show.about_education_listTwo}</li>
                        </ul>
                    </div> 
                `;
            });
            document.getElementById('about_education').innerHTML = aboutEducationData.join("");
            
            //Services Component 
            const services = response.services;
            const servicesData = services.map(function(show){
                return `
                <div class="col-sm-4 col-xs-6">
                    <div class="block">
                        <i class="${show.service_icon}"></i>
                        <h4 class="text-uppercase">${show.service_heading_four}</h4>
                        <p>${show.service_paragraph}</p>
                    </div>
                </div>
                `;
            });
            document.getElementById('services_item').innerHTML = servicesData.join("");

            //Contact Component 
            const contact = response.contact;
            const contactData = contact.map(function(show){
                return `
                <div class="col-sm-4 col-xs-12">
                    <div class="block">
                        <i class="${show.contact_icon}"></i>
                        <h4 class="text-uppercase">${show.contact_heading_four}</h4>
                        <ul class="list-unstyled">
                            <li>${show.contact_webInfo_mail}</li>
                            <li>${show.contact_gmail}</li>
                        </ul>
                    </div> 
                </div>
                `;
            })
            document.getElementById('contact_info').innerHTML = contactData.join("");


            //contact Form Compomnent
            const contactForm = response.contactForm;
            const contactFormData = contactForm.map(function(show){
                return `
                    <div class="col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="${show.contact_form_label_for}">${show.contact_form_label}</label>
                            <input type="${show.contact_form_input_type}" class="form-control" name="${show.contact_form_input_name}" id="${show.contact_form_input_id}" placeholder="${show.contact_form_input_placeholder}" row="${show.contact_form_input_row}">
                        </div>
                    </div>
                `
            })
            document.getElementById('contact_form').innerHTML = contactFormData.join("");
            
            
            // const peopleOne = response.peopleOne;
            // const peopleOneData = peopleOne.map(function(show){
            //   return `${show.name}<br>`;
            // });
            // document.getElementById('people1').innerHTML = peopleOneData.join("");
          }
      };
      xhttp.open("GET", "data.json", true);
      xhttp.send();
