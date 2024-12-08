export async function recommendAttractionsApi({
  attractionCount,
  groupType,
  ageGroupStatus,
  difficultyLevels,
  themeTags,
}) {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_URL}/attractions/recommendations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attractionCount,
          groupType,
          ageGroupStatus,
          difficultyLevels,
          themeTags,
        }),
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    
    return data;
  } catch (error) {
    console.log('request: '+JSON.stringify({
      attractionCount,
      groupType,
      ageGroupStatus,
      difficultyLevels,
      themeTags,
    }));

    console.error(error);

    return null;
  }
}
