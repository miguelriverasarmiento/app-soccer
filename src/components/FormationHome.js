import { useState, useEffect, memo } from 'react';

const FormationHome = (props) => {

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
        if (item === "4-5-1") {
            formation451();
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

        const span3 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four");

        const span4 = document.querySelectorAll(".Player-five, .Player-six, .Player-seven, .Player-eight, .Player-nine, .Player-ten");
        
        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }
       }
    function formation442() {

        const span3 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four, .Player-five, .Player-six, .Player-seven, .Player-eight");

        const span6 = document.querySelectorAll(".Player-nine, .Player-ten");
        
        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }
    }
    function formation343() {

        const span3 = document.querySelectorAll(".Player-four, .Player-five, .Player-six, .Player-seven");

        const span4 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-eight, .Player-nine, .Player-ten");
        
        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }
    }

    function formation352() {

        const span30 = document.getElementsByClassName('Player-goalkeeper')[0];
        span30.style.setProperty('grid-row', 'span 30');

        const span10 = document.querySelectorAll(".Player-one, .Player-two, .Player-three");

        const span6 = document.querySelectorAll(".Player-four, .Player-five, .Player-six, .Player-seven, .Player-eight");

        const span15 = document.querySelectorAll(".Player-nine, .Player-ten");
        
        for (var i = 0, lin = span10.length; i < lin; i++) {
            span10[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span15.length; i < lin; i++) {
            span15[i].style.setProperty("grid-row", "span 15");
        }
    }

    function formation532() {

        const span30 = document.getElementsByClassName('Player-goalkeeper')[0];
        span30.style.setProperty('grid-row', 'span 30');

        const span6 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four, .Player-five");

        const span10 = document.querySelectorAll(".Player-six, .Player-seven, .Player-eight");

        const span15 = document.querySelectorAll(".Player-nine, .Player-ten");
        
        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span10.length; i < lin; i++) {
            span10[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span15.length; i < lin; i++) {
            span15[i].style.setProperty("grid-row", "span 15");
        }
    }

    function formation451() {

        const span5 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four");

        const span4 = document.querySelectorAll(".Player-five, .Player-six, .Player-seven, .Player-eight, .Player-nine");

        const span20 = document.querySelectorAll(".Player-goalkeeper, .Player-ten");
        
        for (var i = 0, lin = span5.length; i < lin; i++) {
            span5[i].style.setProperty("grid-row", "span 5");
        }

        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span20.length; i < lin; i++) {
            span20[i].style.setProperty("grid-row", "span 20");
        }
    }

    function formation4231() {

        const span3 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four");

        const span6 = document.querySelectorAll(".Player-five, .Player-six");

        const span4 = document.querySelectorAll(".Player-seven, .Player-eight, .Player-nine");

        const span12 = document.getElementsByClassName('Player-ten')[0];
        span12.style.setProperty("grid-row", "span 12");
        
        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }
    }

    function formation3421() {

        const span4 = document.querySelectorAll(".Player-one, .Player-two, .Player-three");

        const span3 = document.querySelectorAll(".Player-four, .Player-five, .Player-six, .Player-seven");

        const span6 = document.querySelectorAll(".Player-eight, .Player-nine");

        const span12 = document.getElementsByClassName('Player-ten')[0];
        span12.style.setProperty('grid-row', 'span 12');
        
        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }
    }
    function formation4141() {

        const span3 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four, .Player-six, .Player-seven, .Player-eight, .Player-nine");

        const span12 = document.querySelectorAll(".Player-five, .Player-ten");
        
        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span12.length; i < lin; i++) {
            span12[i].style.setProperty("grid-row", "span 12");
        }
    }
    function formation4312() {

        const span12 = document.getElementsByClassName('Player-eight')[0];
        span12.style.setProperty('grid-row', 'span 12', 'important');

        const span3 = document.querySelectorAll(".Player-one, .Player-two, .Player-three, .Player-four");

        const span4 = document.querySelectorAll(".Player-five, .Player-six, .Player-seven");

        const span6 = document.querySelectorAll(".Player-nine, .Player-ten");

        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }

        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }
    }
    function formation3511() {

        const span10 = document.querySelectorAll(".Player-one, .Player-two, .Player-three");

        const span6 = document.querySelectorAll(".Player-four, .Player-five, .Player-six, .Player-seven, .Player-eight");

        const span30 = document.querySelectorAll('.Player-goalkeeper, .Player-nine, .Player-ten');

        for (var i = 0, lin = span10.length; i < lin; i++) {
            span10[i].style.setProperty("grid-row", "span 10");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span30.length; i < lin; i++) {
            span30[i].style.setProperty("grid-row", "span 30");
        }
    }
    function formation3241() {
        const span4 = document.querySelectorAll(".Player-one, .Player-two, .Player-three");

        const span6 = document.querySelectorAll(".Player-four, .Player-five");

        const span3 = document.querySelectorAll(".Player-six, .Player-seven, .Player-eight, .Player-nine");

        const span12 = document.getElementsByClassName('Player-ten')[0];
        span12.style.setProperty('grid-row', 'span 12');
        
        for (var i = 0, lin = span4.length; i < lin; i++) {
            span4[i].style.setProperty("grid-row", "span 4");
        }

        for (var i = 0, lin = span6.length; i < lin; i++) {
            span6[i].style.setProperty("grid-row", "span 6");
        }

        for (var i = 0, lin = span3.length; i < lin; i++) {
            span3[i].style.setProperty("grid-row", "span 3");
        }
    }

return(
    <>
        {lineupTeam(lineups[0]?.formation)}
        <div className='DivgridHome'>
            <div className="Player Player-goalkeeper">{lineups[0]?.startXI[0]?.player?.name}</div>
            <div className="Player Player-one">{lineups[0]?.startXI[1]?.player?.name}</div>
            <div className="Player Player-two">{lineups[0]?.startXI[2]?.player?.name}</div>
            <div className="Player Player-three">{lineups[0]?.startXI[3]?.player?.name}</div>
            <div className="Player Player-four">{lineups[0]?.startXI[4]?.player?.name}</div>
            <div className="Player Player-five">{lineups[0]?.startXI[5]?.player?.name}</div>
            <div className="Player Player-six">{lineups[0]?.startXI[6]?.player?.name}</div>  
            <div className="Player Player-seven">{lineups[0]?.startXI[7]?.player?.name}</div>
            <div className="Player Player-eight">{lineups[0]?.startXI[8]?.player?.name}</div>
            <div className="Player Player-nine">{lineups[0]?.startXI[9]?.player?.name}</div>
            <div className="Player Player-ten">{lineups[0]?.startXI[10]?.player?.name}</div> 
        </div>
    </>
    );
}

export default memo(FormationHome);
