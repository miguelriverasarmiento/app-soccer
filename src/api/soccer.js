export async function getSoccerLeagues() {
    const response = await fetch('https://v3.football.api-sports.io/teams?league=39&season=2022', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "5c42fdc9e107817b839c25662930d2c6"
        }
    });
    const data = await response.json();
    return data;
}
