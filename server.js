import app from './app';
import config from './config';

const { PORT } = config || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
