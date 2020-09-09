import React, {Fragment, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {
    FaFacebookSquare,
    FaGooglePlusSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaFacebook,
    FaGooglePlus
} from "react-icons/fa"
import {MdLocationOn, MdEmail, MdPhone, MdExpandMore} from "react-icons/md"
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Badge from "@material-ui/core/Badge";
import {BsHeart, BsPersonFill} from "react-icons/bs"
import {GiShoppingCart} from "react-icons/gi"
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";

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
    button21: {
        background: "#0066ff",
        color: "white",
        fontWeight: "bold",
        "&:hover": {
            background: "#0066ff"
        }
    },
    button22: {
        background: red[500],
        color: "white",
        fontWeight: "bold",
        "&:hover": {
            background: red[500]
        }
    },
}));

function Registry() {
    const classes = useStyles();

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
                <Box justifyContent={"flex-end"} style={{position: "absolute", width: "75%"}}
                     display={"flex"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar} style={{background: "#73e600"}}>
                                <GiShoppingCart/>
                            </Avatar>
                        }
                        title={<text style={{fontWeight: "bold"}}>GIỎ HÀNG</text>}
                        subheader={"(0) Sản phẩm"}
                    />
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
            <Grid item lg={12} md={12}>
                <Grid container justify={"center"} direction={"row"}>
                    <Grid item md={4}>
                        <Box display={"flex"} width={"100%"} justifyContent={"center"}
                             style={{paddingTop: 50, paddingBottom: 30}}>
                            <Typography variant={"h5"}>Đăng ký tài khoản</Typography>
                        </Box>
                        <Box style={{paddingBottom: 20}}>
                            <TextField id="outlined-basic" label="Họ và tên" variant="outlined"
                                       style={{width: "100%", height: 48}}/>
                        </Box>
                        <Box style={{paddingBottom: 20}}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                       style={{width: "100%", height: 48}}/>
                        </Box>
                        <Box style={{paddingBottom: 20}}>
                            <TextField id="outlined-basic" label="Mật khẩu" variant="outlined"
                                       style={{width: "100%", height: 48}}/>
                        </Box>
                        <Box style={{paddingBottom: 20}}>
                            <TextField id="outlined-basic" label="Nhập lại mật khẩu" variant="outlined"
                                       style={{width: "100%", height: 48}}/>
                        </Box>
                        <Box style={{paddingBottom: 20}}>
                            <Button variant={"contained"} className={classes.button}
                                    style={{width: "100%", height: 48}}>
                                Đăng ký
                            </Button>
                        </Box>
                        <Box display={"flex"} width={"100%"} justifyContent={"center"}
                             style={{paddingBottom: 20}}>
                            <Typography variant={"subtitle2"} style={{opacity: 0.5}}>-----------------------------------
                                Hoặc đăng nhập
                                -----------------------------------</Typography>
                        </Box>
                        <Box display={"flex"} width={"100%"} justifyContent={"space-between"}
                             style={{}}>
                            <Box width={"48%"} style={{paddingBottom: 20}}>
                                <Button variant={"contained"} className={classes.button21}
                                        style={{width: "100%", height: 48}} startIcon={<FaFacebook/>}>
                                    FACEBOOK
                                </Button>
                            </Box>
                            <Box width={"48%"} style={{paddingBottom: 20}}>
                                <Button variant={"contained"} className={classes.button22}
                                        style={{width: "100%", height: 48}} startIcon={<FaGooglePlus/>}>
                                    GOOGLE+
                                </Button>
                            </Box>
                        </Box>
                        <Box display={"flex"} width={"100%"} justifyContent={"center"}
                             style={{paddingBottom: 50}}>
                            <Typography variant={"subtitle2"} style={{opacity: 0.5}}>Bạn đã có tài khoản hãy đăng
                                nhập <a href={"https://www.google.com/"} style={{color: "green"}}>tại
                                    đây</a></Typography>
                        </Box>
                    </Grid>
                </Grid>
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

export default Registry;