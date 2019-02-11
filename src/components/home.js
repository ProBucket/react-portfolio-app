import React from 'react';
import { ServiceItem } from './service-item';
import { services } from '../data'

export const Home = () => {
    return (
        <React.Fragment>
            <section>
                <h3 className="section-header">About Me</h3>
                <div className="section-content">
                    <p>Since 2015, I am working as a software engineer in professional software industry, where I have been developing innovative solutions, software and systems. </p>
                </div>
                <br />
                <br />
                <h3 className="section-header">Summary</h3>
                <div className="section-content">
                    <ul>
                        <li>Experienced to build backend web application using <strong>ASP.NET MVC</strong>, <strong>ASP.NET CORE MVC</strong>, and <strong>ASP.NET CORE WEB API</strong>.</li>

                        <li>Experienced in frontend development to build any web app using <strong>ES6 JavaScript</strong>, <strong>Angular 2+</strong>, <strong>React</strong>, <strong>jQuery</strong> etc.</li>

                        <li>Prefer to do <strong>Research and Development (RnD)</strong>.</li>

                        <li>Experienced with <strong>.NET Core</strong>, <strong>.NET Framework</strong> and worked on various <strong>WPF</strong> applications with <strong>DevExpress</strong> UI tool and <strong>MVVM</strong> design pattern.</li>

                        <li>Ability to integrate third party library by the help of their documentation.</li>

                        <li>Experienced with <strong>Git</strong>, <strong>GitHub</strong>, <strong>BitBucket</strong> and tools <strong>TGit</strong>, <strong>Git Bash</strong>, <strong>Source Tree</strong>. </li>
                    </ul>
                </div>
            </section>
            <section className="service-section">
                <h3 className="section-header">My Services</h3>
                <div className="section-content">
                    {
                        services.map((data, index) => {
                            return <ServiceItem key={index} icon={data.icon} title={data.title} details={data.details} />
                        })
                    }
                </div>
            </section>
        </React.Fragment >
    )
}