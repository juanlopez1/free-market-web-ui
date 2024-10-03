import type { FC } from 'react';

type ErrorMessageProps = {
    message: string;
    onRetry?: () => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => (
    <div className="error-message">
        <h1>Disculpe las molestias</h1>
        <p>{message}</p>
        {onRetry && (
            <button type="button" className="button-primary" onClick={onRetry}>
                Reintentar
            </button>
        )}
    </div>
);

export default ErrorMessage;
