import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {AlertTitle, CardActionArea, CardMedia, Collapse, TextField} from "@mui/material";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import FibonacciDefinition from './images/fibonacci-folge-definition.jpg'
import Apes2getherStrong from './images/Apes2togetherStrong.jpg'
import ParkIcon from '@mui/icons-material/Park';

const theme = createTheme();

export default function Quiz() {
    const [quiz1Answer, setQuiz1Answer] = useState(0);
    const [quiz1AnswerCorrect, setQuiz1AnswerCorrect] = useState(false);
    const [showQuiz1WrongAnswerAlert, setShowQuiz1WrongAnswerAlert] = React.useState(false);


    useEffect(() => {
    }, [quiz1AnswerCorrect])

    const onQuiz1AnswerChangeHandler = event => {
        setQuiz1Answer(event.target.value);
    };


    const onQuiz1SubmitAnswerButtonClickHandler = () => {
        if (quiz1Answer && quiz1Answer.toString() === '1223312068647805695866041001606414215425662481984418699889280184734522565471193888244259842002003203662301235495264496143544059342859868972795832692060911690562863420044109984978877398486541422811217041686547085400321400') {
            setQuiz1AnswerCorrect(true);
            setShowQuiz1WrongAnswerAlert(false);
            console.log("Quiz 1 was correctly answered")
        } else {
            setShowQuiz1WrongAnswerAlert(true);
            console.error("Quiz 1 answer was wrong")
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar sx={{backgroundColor: '#346633'}}>

                </Toolbar>
            </AppBar>


            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        marginBottom: '0',
                        paddingBottom: '0'
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            <ParkIcon sx={{color: 'green'}}></ParkIcon>
                            Frohe Weihnachten David
                            <ParkIcon sx={{color: 'green'}}></ParkIcon>
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Ich wünsche dir frohe Weihnachten! Ich habe ein Geschenk für dich vorbereitet. Damit du das
                            Geschenk allerdings bekommst musst du zuerst eine schwierige Aufgabe lösen. Ich wünsche viel
                            Erfolg dabei!
                        </Typography>
                    </Container>
                </Box>

                <Container sx={{py: 8, paddingTop: '20px'}} maxWidth="md">
                    <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{flexGrow: 1}}>
                            <Collapse in={showQuiz1WrongAnswerAlert}>
                                <Alert
                                    severity={"error"}
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="error"
                                            size="small"
                                            onClick={() => {
                                                setShowQuiz1WrongAnswerAlert(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit"/>
                                        </IconButton>
                                    }
                                    sx={{mb: 2}}
                                >
                                    <AlertTitle>Falsche Antwort</AlertTitle>
                                    Die Antwort ist leider falsch!
                                </Alert>
                            </Collapse>

                            <Typography gutterBottom variant="h4" component="h2">
                                Wie lautet die Fibonacci Zahl #1050 ???

                                {(quiz1AnswerCorrect) &&
                                    <CheckCircleIcon color={'success'}
                                                     fontSize={'large'}
                                                     sx={{marginLeft: '10px'}}
                                    />
                                }

                            </Typography>
                            <Typography>
                                Ich möchte von dir wissen wie die 1050 Fibonacci Zahl lautet. Es führen mehrere Wege zur
                                gesuchten Lösung. Betrachte diese Challenge als perfekte Gelgenheit um deine Kenntnisse
                                aus dem Informatikstudium wieder aufzufrischen. Hier könnten vor allem generelle
                                Programmierkenntnissse weiterhelfen oder eventuell sogar Skills aus IT-Security. Viel
                                Erfolg!
                            </Typography>

                            <CardMedia
                                component="img"
                                image={FibonacciDefinition}
                                sx={{marginTop: '5px', marginBottom: '15px'}}
                            />
                        </CardContent>
                        {!quiz1AnswerCorrect &&
                            <CardActions>
                                <TextField
                                    id="outlined-number"
                                    label="Antwort"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={onQuiz1AnswerChangeHandler}
                                    value={quiz1Answer}
                                    sx={{width: '100%'}}
                                />
                                <Button variant="outlined"
                                        sx={{
                                            marginLeft: '10px',
                                            height: '56px'
                                        }}
                                        onClick={onQuiz1SubmitAnswerButtonClickHandler}
                                >Antwort prüfen</Button>
                            </CardActions>
                        }
                    </Card>
                </Container>


                {quiz1AnswerCorrect &&
                    <Container sx={{py: 8, paddingTop: '0'}} maxWidth="md">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="650"
                                    image={Apes2getherStrong}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Dein Geschenk
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ich möchte mich bei dir für die Freundschaft die uns beide verbindet bedanken.
                                        Auch wenn ich es weniger oft zeige als ich es sollte, bedeutet mir die
                                        Freundschaft doch sehr viel und ich bin froh mit dir einige coole, peinliche,
                                        anstrengende aber auch witzige Momente erlebt zu haben. Du warst da als ich noch
                                        relativ neu im Lande war und auch als eine schwierige Zeit durchgemacht habe und
                                        für das möchte ich mich bei dir durch eine kleine Aufmerksamkeit erkenntlich
                                        zeigen. Es ist nicht besonders viel aber es ist ja bekanntlich die Geste die
                                        zählt! Ich möchte dich gerne zu einem gemeinsamen Abendessen in der Blinden Kuh
                                        in Zürich auf ein Überraschungsmenü einladen. Dort kannst du zur Schau stellen
                                        wie
                                        gut deine Geschmackssinne ausgeprägt sind. Falls dir die Idee aus irgendwelchen
                                        Gründen nicht besonders zusagt finden wir sicherlich eine gute Alternative. Ich
                                        finde es toll wie du gerade dabei bist aus dem Hamsterrad auszubrechen und
                                        deinen eigenen Weg zu finden. Du weist du kannst jederzeit auf mich zählen wenn
                                        du Untertützung brauchst oder einfach nur eine ehrliche Meinung hören
                                        möchtest.

                                        Ich wünsche dir ein gesegnetes Weihachtsfest und eine schöne Zeit mit deiner
                                        Familie und deinen Freunden und hoffe, dass wir uns bald wieder mit neuer
                                        frischer Energie im nächsten Jahr sehen.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Container>
                }
            </main>
        </ThemeProvider>
    )
        ;
}