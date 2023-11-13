import { Link } from 'react-router-dom'
import Layout from '../layout'

const About = () => {
    return (
        <Layout>
            <h1>Aboutaaa</h1>
            <div className="card">
                <Link to="/">Home</Link>
            </div>
        </Layout>
    )
}

export default About