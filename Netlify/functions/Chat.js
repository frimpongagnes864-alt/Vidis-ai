exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        error: "Method not allowed"
      })
    };
  }

  try {
    const data = JSON.parse(event.body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: "Hello! VIDIS AI is working.",
        message: data.message
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid request"
      })
    };
  }
};
