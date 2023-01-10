import { useState, useEffect, memo } from 'react';

const FormationAway = (props) => {

    const [lineups, setLineaups] = useState(props.lineups);

    useEffect(() => {
        setLineaups(props.lineups);
    }, [props.lineups]);

    function lineupTeam(item) {

        if (item === "4-3-3") {
            formation433();
        }
        if (item === "4-4-2") {
            formation442();
        }
            
        if (item === "3-4-3") {
            formation343();
        }
            
        if (item === "3-5-2") {
            formation352();
        }

        if (item === "5-3-2") {
            formation532();
        }
            
        if (item === "4-2-3-1") {
            formation4231();
        }

        if (item === "3-4-2-1") {
            formation3421();
        }
    
        if (item === "4-1-4-1") {
            formation4141();
        }
            
        if (item === "4-3-1-2") {
            formation4312();
        }
            
        if (item === "3-5-1-1") {
            formation3511();
        }

        if (item === "3-2-4-1") {
            formation3241();
        }
    }

    function formation433() {

        const span3Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway");

        const span4Away = document.querySelectorAll(".Player-fiveAway, .Player-sixAway, .Player-sevenAway, .Player-eightAway, .Player-nineAway, .Player-tenAway");
        
        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4Away.length; i < lin; i++) {
            span4Away[i].style.setProperty("grid-row", "span 4");
        }
    }

    function formation442() {

        const span3Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway, .Player-fiveAway, .Player-sixAway, .Player-sevenAway, .Player-eightAway");

        const span6Away = document.querySelectorAll(".Player-nineAway, .Player-tenAway");
        
        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }
    }

    function formation343() {
    
        const span3Away = document.querySelectorAll(".Player-fourAway, .Player-fiveAway, .Player-sixAway, .Player-sevenAway");

        const span4Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-eightAway, .Player-nineAway, .Player-tenAway");
        
        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4Away.length; i < lin; i++) {
            span4Away[i].style.setProperty("grid-row", "span 4");
        }
    }

    function formation352() {

        const span30Away = document.getElementsByClassName('Player-goalkeeperAway')[0];
        span30Away.style.setProperty('grid-row', 'span 30');

        const span10Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway");

        const span6Away = document.querySelectorAll(".Player-fourAway, .Player-fiveAway, .Player-sixAway, .Player-sevenAway, .Player-eightAway");

        const span15Away = document.querySelectorAll(".Player-nineAway, .Player-tenAway");
        
        for (var i = 0, lin = span10Away.length; i < lin; i++) {
            span10Away[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span15Away.length; i < lin; i++) {
            span15Away[i].style.setProperty("grid-row", "span 15");
        }
    }

    function formation532() {

        const span30Away = document.getElementsByClassName('Player-goalkeeperAway')[0];
        span30Away.style.setProperty('grid-row', 'span 30');

        const span6Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway, .Player-fiveAway");

        const span10Away = document.querySelectorAll(".Player-sixAway, .Player-sevenAway, .Player-eightAway");

        const span15Away = document.querySelectorAll(".Player-nineAway, .Player-tenAway");
        
        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span10Away.length; i < lin; i++) {
            span10Away[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span15Away.length; i < lin; i++) {
            span15Away[i].style.setProperty("grid-row", "span 15");
        }
    }

    function formation4231() {

        const span3Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway");

        const span6Away = document.querySelectorAll(".Player-fiveAway, .Player-sixAway");

        const span4Away = document.querySelectorAll(".Player-sevenAway, .Player-eightAway, .Player-nineAway");

        const span12Away = document.getElementsByClassName('Player-tenAway')[0];
        span12Away.style.setProperty("grid-row", "span 12");
    
        for (var i = 0, lin = span3Away.length; i < lin; i++) {
        span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
        span6Away[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span4Away.length; i < lin; i++) {
        span4Away[i].style.setProperty("grid-row", "span 4");
        }
    }

    function formation3421() {

        const span4Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway");

        const span3Away = document.querySelectorAll(".Player-fourAway, .Player-fiveAway, .Player-sixAway, .Player-sevenAway");

        const span6Away = document.querySelectorAll(".Player-eightAway, .Player-nineAway");

        const span12Away = document.getElementsByClassName('Player-tenAway')[0];
        span12Away.style.setProperty('grid-row', 'span 12');
        
        for (var i = 0, lin = span4Away.length; i < lin; i++) {
            span4Away[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }
    }

    function formation4141() {

        const span3Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway, .Player-sixAway, .Player-sevenAway, .Player-eightAway, .Player-nineAway");

        const span12Away = document.querySelectorAll(".Player-fiveAway, .Player-tenAway");
        
        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span12Away.length; i < lin; i++) {
            span12Away[i].style.setProperty("grid-row", "span 12");
        }
    }

    function formation4312() {

        const span12Away = document.getElementsByClassName('Player-eightAway')[0];
        span12Away.style.setProperty('grid-row', 'span 12');

        const span3Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway, .Player-fourAway");

        const span4Away = document.querySelectorAll(".Player-fiveAway, .Player-sixAway, .Player-sevenAway");

        const span6Away = document.querySelectorAll(".Player-nineAway, .Player-tenAway");

        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4Away.length; i < lin; i++) {
            span4Away[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }
    }

    function formation3511() {

        const span10Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway");

        const span6Away = document.querySelectorAll(".Player-fourAway, .Player-fiveAway, .Player-sixAway, .Player-sevenAway, .Player-eightAway");

        const span30Away = document.querySelectorAll('.Player-goalkeeperAway, .Player-nineAway, .Player-tenAway');

        for (var i = 0, lin = span10Away.length; i < lin; i++) {
            span10Away[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span30Away.length; i < lin; i++) {
            span30Away[i].style.setProperty("grid-row", "span 30");
        }
    }
    function formation3241() {
        const span4Away = document.querySelectorAll(".Player-oneAway, .Player-twoAway, .Player-threeAway");

        const span6Away = document.querySelectorAll(".Player-fourAway, .Player-fiveAway");

        const span3Away = document.querySelectorAll(".Player-sixAway, .Player-sevenAway, .Player-eightAway, .Player-nineAway");

        const span12Away = document.getElementsByClassName('Player-tenAway')[0];
        span12Away.style.setProperty('grid-row', 'span 12');
        
        for (var i = 0, lin = span4Away.length; i < lin; i++) {
            span4Away[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span6Away.length; i < lin; i++) {
            span6Away[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span3Away.length; i < lin; i++) {
            span3Away[i].style.setProperty("grid-row", "span 3");
        }
    }

return(
    <>
        {lineupTeam(lineups[1]?.formation)}
        <div className='DivgridAway'>
            <div className="Player Player-tenAway">{lineups[1]?.startXI[10]?.player?.name}</div>
            <div className="Player Player-nineAway">{lineups[1]?.startXI[9]?.player?.name}</div>
            <div className="Player Player-eightAway">{lineups[1]?.startXI[8]?.player?.name}</div>
            <div className="Player Player-sevenAway">{lineups[1]?.startXI[7]?.player?.name}</div>
            <div className="Player Player-sixAway">{lineups[1]?.startXI[6]?.player?.name}</div>
            <div className="Player Player-fiveAway">{lineups[1]?.startXI[5]?.player?.name}</div>
            <div className="Player Player-fourAway">{lineups[1]?.startXI[4]?.player?.name}</div>
            <div className="Player Player-threeAway">{lineups[1]?.startXI[3]?.player?.name}</div>
            <div className="Player Player-twoAway">{lineups[1]?.startXI[2]?.player?.name}</div>
            <div className="Player Player-oneAway">{lineups[1]?.startXI[1]?.player?.name}</div>
            <div className="Player Player-goalkeeperAway">{lineups[1]?.startXI[0]?.player?.name}</div>
        </div>
    </>
    );
}

export default memo(FormationAway);
