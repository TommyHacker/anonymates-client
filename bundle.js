console.error("SyntaxError: Can't walk dependency graph: {\n\t\"name\": \"anonymates-client\",\n\t\"version\": \"1.0.0\",\n\t\"description\": \"\",\n\t\"main\": \"index.js\",\n\t\"scripts\": {\n\t\t\"test\": \"jest --watchAll --noStackTrace\",\n\t\t\"dev\": \"concurrently \\\"watchify ./index.js -o bundle.js\\\" \\\"python -m http.server\\\"\",\n<<<<<<< HEAD\n\t\t\"coverage\": \"jest --coverage\"\n=======\n\t\t\"coverage\": \"jest --coverage\",\n\t\t\"clear_jest\": \"jest --clearCache\"\n>>>>>>> 2740d9ee8e27d293312f9b6268c824f62ea02f26\n\t},\n\t\"repository\": {\n\t\t\"type\": \"git\",\n\t\t\"url\": \"git+https://github.com/tommyhacker/anonymates-client.git\"\n\t},\n\t\"keywords\": [],\n\t\"author\": \"\",\n\t\"license\": \"ISC\",\n\t\"bugs\": {\n\t\t\"url\": \"https://github.com/tommyhacker/anonymates-client/issues\"\n\t},\n\t\"homepage\": \"https://github.com/tommyhacker/anonymates-client#readme\",\n\t\"devDependencies\": {\n\t\t\"concurrently\": \"^7.2.1\",\n\t\t\"jest\": \"^28.1.0\",\n\t\t\"jest-environment-jsdom\": \"^28.1.1\",\n\t\t\"jest-fetch-mock\": \"^3.0.3\",\n\t\t\"jsdom\": \"^19.0.0\",\n\t\t\"watchify\": \"^4.0.0\"\n\t},\n\t\"jest\": {\n\t\t\"testEnvironment\": \"jsdom\",\n\t\t\"verbose\": true\n\t}\n}\n : Unexpected token < in JSON at position 240\n    required by C:\\Users\\marie\\FUTUREPROOF\\LAP-1\\L1-Week-3\\Project-Anonymates\\anonymates-client\\_fake.js");