import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import AccountMenu from './AccountMenu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: '100%',
    maxWidth: 360,
  	backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

	const appSteps = [
		'Choosing your mask. Hi, Human is based on anonymity, so instead of using a profile picture, you will pick a mask.',
		'Choose 8 icons that best describe your personality. This will help us learn a bit about you and we can decide which tests to give you.',
		'Chose a reason you want to meet people. We will connect you to users who are looking for the same thing as you.',
		'Start testing! Anytime you want to connect with a user you must take a short test.'
	];

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            [HiH]
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>About Us</Button>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Welcome to Hi, Human!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Before you start meeting other users, you need to create your profile. Start by:
						<List className={classes.list}>
              {appSteps.map((value, index) => {
								const labelId = `checkbox-list-label-${index}`;

								return (
									<ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={checked.indexOf(value) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={value}/>
									</ListItem>
								);
							})}
						</List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Thanks!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

