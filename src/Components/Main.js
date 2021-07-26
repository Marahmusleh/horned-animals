import React from 'react';


import HornedBeasts from './HornedBeasts';
class Main extends React.Component{

        render(){
            return (
                <main>

                <HornedBeasts 
                title="Markhor"
                description="Markhor grow to more than five feet long."
                img="https://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg"
                 />
                 
                <HornedBeasts
                  title="Saiga"
                 description=" the saiga is a truly absurd-looking and delightful antelope."
                img="https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg"
                 />

                </main>
            );

        }

}

export default Main;