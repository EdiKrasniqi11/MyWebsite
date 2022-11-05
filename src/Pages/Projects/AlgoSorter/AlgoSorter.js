import './AlgoSorter.css'
import Algo from '../../../Images/algo.png'

const AlgoSorter = () =>{
    return (
        <>
            <div className="projectsFotoDiv">
                <h2 className="web-view lab"><a href="../">Home</a> {'>'} <a href="../my-projects">My Projects</a> {'>'} Sorting Algorithm Visualize</h2>

                <h2 className="mobile-view lab"><a href="../">Home</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab"><a href="../my-projects">My Projects</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab">Sorting Algorithm Visualizer</h2>
                <h3>Process of Learning about Algorithms</h3>
            </div>
            <div className="openingParagraph">
                <h3>Why Algo-Sort?</h3>
                <p>
                    Algo-Sort is a algorithm sorting visualizer tool that is used to view how different sorting algorithm work step by step using simple animations.<br/>
                    <a href="https://sorting-visualizer-krasniqi.netlify.app/" target="_blank">Link to Website</a>
                </p>
            </div>
            <div className="slider">
                <img src={Algo} alt=""/>
                <div className="slideText">
                    <h1>Sorting Algorithm Visualizer</h1>
                    <p>After learning about the basics of programming and then evolving to connecting back-end programming and front-end programming into full stack,
                     I began getting interested in algorithms and data-structures and using the best learning method I think there is; so I started this project. 
                     I started off learning on how sorting algortithm work, which are the fastest, and most efficient sorters. Starting off with merge sort, after which came quick and bubble sort.
                     After learning about how the algorithms work, and coding the basic logic, I started storing in an array animations, including the type of animations and the items that need to be switched with each other.
                     After which the only job left is to iterate through the animations array with a custom animation speed timeout that the user can set to their liking.</p>
                </div>
            </div>
        </>
    )
}

export default AlgoSorter