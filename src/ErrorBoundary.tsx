import { Card, CardContent, Typography } from '@mui/material';
import React, { Component } from 'react';

interface StateType {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<Props, StateType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Error caught by ErrorBoundary:', error);
    console.warn('Error info:', errorInfo);

    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Что-то пошло не так.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Мы извиняемся за неудобства, ошибка была зарегистрирована.
                <br />
                Попробуйте перейти на{' '}
                <a style={{ color: 'blue', textDecoration: 'underline' }} href="/">
                  Главную страницу
                </a>
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
