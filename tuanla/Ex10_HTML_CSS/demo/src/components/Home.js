import React, {Fragment, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa"
import {MdLocationOn, MdEmail, MdPhone, MdAddCircle, MdExpandMore} from "react-icons/md"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SecondExample from "./SecondExample";
import Badge from "@material-ui/core/Badge";
import {BsHeart, BsPersonFill} from "react-icons/bs"
import {GiShoppingCart} from "react-icons/gi"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",

    },
    input: {
        borderRadius: 10
    },
    footer: {
        textDecoration: "none",
        color: "black",
        opacity: 0.5
    },
    icon: {
        root: {
            width: 200
        }
    },
    media: {
        height: 100,
        paddingTop: '56.25%', // 16:9,
        width: "100%"
    },
    card: {
        width: "100%",
        height: 280,
    },
    cardActionArea: {
        maxHeight: "100%",
    },
    cardContent: {
        height: 100
    },
    card2: {
        width: "100%",
        height: 450,
    },
    img1: {
        padding: 0,
        display: "block",
        margin: "0 auto",
        maxHeight: "100%",
        maxWidth: "100%",
    },
    img2: {
        display: "block",
        margin: "0 auto",
        maxHeight: "100%",
        maxWidth: "100%",
        width: 290
    },
    a: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold"
    },
    div1: {
        width: "100%",
        borderWidth: "thin",
        borderStyle: "dashed none",
        textAlign: "center"
    },
    menuNotActive: {
        opacity: 0.3,
        textTransform: "none"
    },
    menuActive: {
        textTransform: "none"
    },
    avatars: {
        paddingTop: 10,
        display: 'flex',
        '& > *': {
            margin: 2,
        },
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        textTransform: "none",
        marginRight: 5,
        background: "#73e600",
        color: "white",
        fontWeight: "bold",
        "&:hover": {
            background: "#73e600"
        }
    },
}));

function Home() {
    const classes = useStyles();
    const listProducts = [
        [
            {
                imgName: "1.jpg",
                productName: "Dưa hấu",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "2.jpg",
                productName: "Cà chua",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "4.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "5.jpg",
                productName: "Xà lách",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "6.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            }
        ],
        [
            {
                imgName: "7.jpg",
                productName: "Ớt ngọt",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "8.jpg",
                productName: "Tỏi đen",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "9.jpg",
                productName: "Thịt ba chỉ",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "10.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "11.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            }
        ]
    ]

    const listProducts2 = [
        [
            {
                imgName: "12.jpg",
                productName: "Dưa hấu",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "13.jpg",
                productName: "Cà chua",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "14.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "15.jpg",
                productName: "Đoán xem",
                price: "399.000 Đ/KG"
            },
        ],
        [
            {
                imgName: "16.jpg",
                productName: "Ớt ngọt",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "18.jpg",
                productName: "Tỏi đen",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "19.jpg",
                productName: "Thịt ba chỉ",
                price: "399.000 Đ/KG"
            },
            {
                imgName: "20.jpg",
                productName: "Thịt ba chỉ",
                price: "399.000 Đ/KG"
            },
        ]
    ]

    const menu = [
        {
            link: "https://www.google.com/",
            text: "Thực phẩm   "
        },
        {
            link: "https://www.google.com/",
            text: "   Nấm   "
        },
        {
            link: "https://www.google.com/",
            text: "   Trái cây   "
        },
        {
            link: "https://www.google.com/",
            text: "Củ quả"
        },
        {
            link: "https://www.google.com/",
            text: "   Rau xanh   "
        },
        {
            link: "https://www.google.com/",
            text: "   Rau gia vị   "
        },
    ]

    const footer1 = ["Accessories", "Gaming", "Laptop & Computer", "Mac Computers", "PC Computers", "Ultrabooks"]

    const footer2 = ["About Us", "Contact Us", "All Collection", "Privacy Policy", "Terms & Condition", "Blog"]

    const [selectedMenu, setSelectedMenu] = useState(3)

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [handleOpen, setHandleOpen] = useState({open: false});

    const handleClick = () => {
        setHandleOpen({open: true});
    };
    const matches = useMediaQuery("(max-width:600px)");

    const onClickMenu = (e) => {
        setSelectedMenu(Number(e.currentTarget.value))
    }

    return (
        <Grid container
              direction="row"
              alignItems="center"
              justify={"center"}
        >
            <Grid item lg={12}>
                <Box justifyContent={"flex-end"} style={{position: "absolute", paddingTop: 10, width: "75%"}}
                     display={"flex"}>
                    <Box><Badge color="secondary" overlap="circle" badgeContent="5">
                        <IconButton>
                            <BsHeart/>
                        </IconButton>
                    </Badge>
                    </Box>
                    <Box><Badge color="secondary" overlap="circle" badgeContent="2">
                        <IconButton>
                            <BsPersonFill/>
                        </IconButton>
                    </Badge>
                    </Box>
                    <Box><Badge color="secondary" overlap="circle" badgeContent="3">
                        <IconButton>
                            <GiShoppingCart/>
                        </IconButton>
                    </Badge>
                    </Box>
                </Box>

                <div style={{position: "absolute", paddingTop: 115, width: "100%"}}>
                    <Box fullWidth justifyContent={"center"} display={"flex"}>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Trang chủ
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Giới thiệu sản phẩm
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Liên hệ
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Hướng dẫn mua hàng
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Blog chia sẻ
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={"contained"} className={classes.button}>
                                Bản đồ
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                className={classes.button}
                                endIcon={<MdExpandMore/>}
                            >
                                Sản phẩm
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({TransitionProps, placement}) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow"
                                                          onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={handleClose}>Thực phẩm</MenuItem>
                                                    <MenuItem onClick={handleClose}>Nấm</MenuItem>
                                                    <MenuItem onClick={handleClose}>Trái cây</MenuItem>
                                                    <MenuItem onClick={handleClose}>Củ quả</MenuItem>
                                                    <MenuItem onClick={handleClose}>Rau xanh</MenuItem>
                                                    <MenuItem onClick={handleClose}>Rau gia vị</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Box>
                    </Box>
                </div>
                <img src={require("../static/images/HEADER.jpg")} className={classes.img1}/>
            </Grid>
            <Grid item lg={12}>
                <SecondExample/>
                <img src={require("../static/images/Background.jpg")} className={classes.img1}/>
            </Grid>

            <Grid item lg={8}>
                <div style={{height: 50}}/>
                <Grid container justify={"space-between"} spacing={2}>
                    <Grid item md={4}>
                        <img src={require("../static/images/Annotation 2020-07-28 081302.png")}
                             className={classes.img2}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <img src={require("../static/images/Annotation 2020-07-28 081618.png")}
                             className={classes.img2}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <img src={require("../static/images/01_Home.jpg")}
                             className={classes.img2}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <img
                            src={require("../static/images/01_Home1.jpg")}
                            style={{
                                maxWidth: "100%"
                            }}/>
                    </Grid>
                    <div className={classes.div1}>
                        <p>
                            {menu.map((item, index) => {
                                if (index === selectedMenu) {
                                    return <Button className={classes.menuActive} color="inherit" disableRipple
                                                   onClick={onClickMenu} value={index}> {item.text} </Button>
                                } else {
                                    return <Button className={classes.menuNotActive} color="inherit" disableRipple
                                                   onClick={onClickMenu} value={index}> {item.text} </Button>
                                }
                            })}
                        </p>
                    </div>
                </Grid>

                {listProducts.map(products => (<Fragment>
                    <div style={{height: 50, width: "100%"}}/>
                    <Grid container justify={"space-between"}>
                        {products.map(p => (<Grid item md={2}>
                            <Card className={classes.card}>
                                <Box alignItems={"flex-start"}>
                                    <CardActionArea className={classes.cardActionArea}>
                                        <CardMedia
                                            image={require(`../static/images/${p.imgName}`)}
                                            className={classes.media}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant="body2" color="textSecondary">
                                                {p.productName}
                                            </Typography>
                                            <Typography variant="body2" color="error">
                                                {p.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Box>
                            </Card>
                        </Grid>))}
                    </Grid>
                </Fragment>))}

                <div style={{height: 50}}/>
                <Grid container justify={"space-between"} spacing={2}>
                    <Grid item md={4}>
                        <img src={require("../static/images/GH.jpg")}
                             className={classes.img2}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <img src={require("../static/images/CL.jpg")}
                             className={classes.img2}/>
                    </Grid>
                    <Grid item md={4}>
                        <img src={require("../static/images/TK.jpg")}
                             className={classes.img2}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <img
                            src={require("../static/images/GG.jpg")}
                            className={classes.img1}
                        />
                    </Grid>
                    <div className={classes.div1}>
                        <p>Giảm giá <text style={{color: "red"}}>40%</text> trên tất cả sản phẩm dưới đây</p>
                    </div>
                </Grid>

                <div style={{height: 50}}/>
                <Grid container justify={"space-between"} spacing={2}>
                    <Grid item md={4}>
                        <Card className={classes.card2} variant="outlined">
                            <Box alignItems={"flex-start"}>
                                <CardActionArea className={classes.cardActionArea}>
                                    <CardMedia
                                        image={require(`../static/images/21.jpg`)}
                                        className={classes.media}
                                    />
                                    <CardContent className={classes.cardContent} style={{height: 400}}>
                                        <Typography variant="body2" color="textSecondary">
                                            Lựu 4 mùa 9 mm
                                        </Typography>
                                        <Typography variant="body2" color="error">
                                            399.000 Đ/KG
                                        </Typography>
                                        <div className={classes.avatars}>
                                            <Avatar aria-label="recipe" className={classes.avatar}
                                                    style={{marginLeft: 0}}>
                                                120
                                            </Avatar>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                12
                                            </Avatar>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                40
                                            </Avatar>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                40
                                            </Avatar>
                                        </div>
                                        <p style={{wordSpacing: 15, color: "red", paddingLeft: 3}}>Ngày Giờ Phút
                                            Giây</p>
                                    </CardContent>
                                </CardActionArea>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item md={8}>
                        {listProducts2.map(products => (<Fragment>
                            <Grid container justify={"space-around"} spacing={1}>
                                {products.map(p => (<Grid item md={3}>
                                    <Card className={classes.card} style={{height: 200}}>
                                        <Box alignItems={"flex-start"}>
                                            <CardActionArea className={classes.cardActionArea}>
                                                <CardMedia
                                                    image={require(`../static/images/${p.imgName}`)}
                                                    className={classes.media}
                                                    style={{paddingTop: 0}}
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {p.productName}
                                                    </Typography>
                                                    <Typography variant="body2" color="error">
                                                        {p.price}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Box>
                                    </Card>
                                </Grid>))}
                            </Grid>
                            <div style={{height: 20}}/>
                        </Fragment>))}
                        <text style={{
                            paddingRight: 10,
                            margin: 0,
                            opacity: 0.1
                        }}>-------------------------------
                        </text>
                        <text style={{marginRight: 20}}><MdAddCircle
                            style={{position: "absolute", marginTop: 4, color: "red"}}/></text>
                        <a href={"https://www.google.com/"} className={classes.a}
                           style={{color: "red", opacity: 1.0}}>Xem thêm sản phẩm</a>
                        <text style={{paddingLeft: 10, margin: 0, opacity: 0.1}}>-------------------------------</text>
                    </Grid>
                </Grid>
                {/*</Paper>*/}

                <div style={{height: 50}}/>
                <Grid container justify={"space-between"} spacing={1}>
                    <Grid item md={4}>
                        <img src={require(`../static/images/leaf.jpg`)} className={classes.img1}/>
                        <Typography className={classes.title} color="inherit" variant={"h5"}>
                            Danh mục khác
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="p" style={{paddingRight: 50}}>
                            Kohirabi combines the texture of a broccoli stem with the taste of cauliflower
                            and a hint of radish tang. That sounds complicated, but it's a simple
                        </Typography>
                    </Grid>
                    <Grid item md={8}>
                        <Grid container justify={"space-around"} spacing={2}>
                            <Grid item md={6}>
                                <Card className={classes.card} variant={"outlined"} style={{height: 200}}>
                                    <Box alignItems={"flex-start"}>
                                        <CardActionArea className={classes.cardActionArea}>
                                            <Grid container>
                                                <Grid item md={6}>
                                                    <CardContent className={classes.cardContent}
                                                                 style={{paddingTop: 25}}>
                                                        <Typography variant="subtitle1" style={{paddingBottom: 20}}>
                                                            Rau củ quả
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Thịt ba chỉ
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Cá mè 3 kg
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Chuối tiêu quê
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Rau mùi tây
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Chuối tiêu quê
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <img src={require(`../static/images/22.jpg`)}
                                                         className={classes.img1}
                                                         style={{height: 200}}/>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item md={6}>
                                <Card className={classes.card} variant={"outlined"} style={{height: 200}}>
                                    <Box alignItems={"flex-start"}>
                                        <CardActionArea className={classes.cardActionArea}>
                                            <Grid container>
                                                <Grid item md={6}>
                                                    <CardContent className={classes.cardContent}
                                                                 style={{paddingTop: 25}}>
                                                        <Typography variant="subtitle1" style={{paddingBottom: 20}}>
                                                            Đồ uống
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Thịt ba chỉ
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Cá mè 3 kg
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Chuối tiêu quê
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Rau mùi tây
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Chuối tiêu quê
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <img src={require(`../static/images/23.jpg`)}
                                                         className={classes.img1}
                                                         style={{height: 200}}/>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <div style={{height: 50}}/>
                <Grid container justify={"space-between"} spacing={3}>
                    <Grid item md={3}>
                        <Typography color="inherit" variant={"h5"} style={{paddingBottom: 20}}>
                            Blog nấu ăn
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={require(`../static/images/24.jpg`)}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    GL
                                </Avatar>
                            }
                            title={<Typography variant={"body2"}>Viết bởi: <a href={"https://www.google.com/"}
                                                                              className={classes.a}>Giang
                                Lê</a></Typography>}
                            style={{paddingBottom: 0}}
                        />
                        <CardContent>
                            <a href={"https://www.google.com/"} className={classes.a}>Sách hay nhất tháng sẽ
                                về trong ngày hôm nay</a>
                            <Typography variant="body2" color="textSecondary" component="p"
                                        style={{paddingTop: 10}}>
                                Stress là một cái gì đó tất cả chúng ta đã trải qua. Nhưng nghiên...
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={3}>
                        <CardMedia
                            className={classes.media}
                            image={require(`../static/images/25.jpg`)}
                            style={{marginTop: 52}}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    GL
                                </Avatar>
                            }
                            title={<Typography variant={"body2"}>Viết bởi: <a href={"https://www.google.com/"}
                                                                              className={classes.a}>Giang
                                Lê</a></Typography>}
                            style={{paddingBottom: 0}}
                        />
                        <CardContent>
                            <a href={"https://www.google.com/"} className={classes.a}>Sách hay nhất tháng sẽ
                                về trong ngày hôm nay</a>
                            <Typography variant="body2" color="textSecondary" component="p"
                                        style={{paddingTop: 10}}>
                                Stress là một cái gì đó tất cả chúng ta đã trải qua. Nhưng nghiên...
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item md={6}>
                        <Typography color="inherit" variant={"h5"} style={{paddingBottom: 20}}>
                            Ý kiến khách hàng
                        </Typography>
                        <Card className={classes.root} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    At Craffwork, we're building out a new corner of the Internet specifically designed
                                    for people and publishers who want to experience a deeper level of discourse and
                                    engagement. At Craffwork, we're building out a new corner of the Internet
                                    specifically designed
                                </Typography>
                            </CardContent>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        CS
                                    </Avatar>
                                }
                                title={<a href={"https://www.google.com/"} className={classes.a}>Cole Stanley</a>}
                                subheader={<a href={"https://www.bizweb.vn/"} className={classes.a}
                                              style={{color: "green"}}>https://www.bizweb.vn/</a>}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <div style={{height: 50}}/>
            </Grid>

            <Grid item lg={12}>
                <img src={require("../static/images/Base copy.jpg")} className={classes.img1}/>
            </Grid>
            <Grid container justify={"center"}>
                <img src={require("../static/images/FOOTER.jpg")} className={classes.img1}
                     style={{position: "absolute"}}/>
                <Grid item lg={8}>
                    {/*<Paper className={classes.paper} style={{color: "grey"}}>*/}
                    <Grid container justify={"space-between"} spacing={4}>
                        <Grid item lg={3}>
                            <Typography variant={"caption"} style={{position: "absolute", marginTop: 70}}>At vero eos et
                                accusamus et
                                iusto
                                <br/>
                                odio dignissimos qui blanditiis
                                <br/>
                                <MdLocationOn style={{marginRight: 5, paddingTop: 15}}/>
                                <p style={{width: "fit-content", position: "absolute", display: "inline"}}>Big Ben
                                    Street, E16 3LS, London, United Kingdom</p>
                                <br/>
                                <MdEmail style={{marginRight: 5, marginTop: 25}}/>Support24/7@domain.com
                                <br/>
                                <MdPhone style={{marginRight: 5, marginTop: 10}}/>(0084)+ 123 45 67 89 0
                            </Typography>
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant={"h6"} style={{position: "absolute", marginTop: 25}}>Tài
                                khoản</Typography>
                            {
                                footer1.map((item, index) => (
                                    <Typography variant={"caption"}
                                                style={{position: "absolute", marginTop: 60 + index * 25}}
                                                className={classes.footer} component={"a"}
                                                href={"https://www.google.com/"}>
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant={"h6"} style={{position: "absolute", marginTop: 25}}>Tài
                                khoản</Typography>
                            {
                                footer2.map((item, index) => (
                                    <Typography variant={"caption"}
                                                style={{position: "absolute", marginTop: 60 + index * 25}}
                                                className={classes.footer} component={"a"}
                                                href={"https://www.google.com/"}>
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant={"h6"} style={{position: "absolute", marginTop: 25}}>Gửi
                                email</Typography>
                            <Typography variant={"caption"}
                                        style={{position: "absolute", marginTop: 60}}
                                        className={classes.footer}>
                                Gửi email để nhận khuyến mãi
                            </Typography>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{marginTop: 80, fontSize: 15}}>Email
                                    của bạn</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                <SendIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                    style={{marginTop: 90, height: 35}}
                                />
                            </FormControl>
                            <div style={{position: "absolute", paddingTop: 20, opacity: 0.5}}>Kết nối <br/>
                                <IconButton>
                                    <FaGooglePlusSquare/>
                                </IconButton>
                                <IconButton>
                                    <FaFacebookSquare/>
                                </IconButton>
                                <IconButton>
                                    <FaTwitterSquare/>
                                </IconButton>
                                <IconButton>
                                    <FaLinkedin/>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;