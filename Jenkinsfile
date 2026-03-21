pipeline {
    agent { label 'agent' }
    
    environment {
        PROD_IP = '172.31.39.108'
        APP_DIR = '/home/ubuntu/voting-app'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checkout from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t voting-app:latest .'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@${PROD_IP} '
                        mkdir -p ${APP_DIR}
                    '
                    docker save voting-app:latest | ssh -o StrictHostKeyChecking=no ubuntu@${PROD_IP} 'docker load'
                    scp -o StrictHostKeyChecking=no docker-compose.yml ubuntu@${PROD_IP}:${APP_DIR}/
                    scp -o StrictHostKeyChecking=no .env ubuntu@${PROD_IP}:${APP_DIR}/
                    scp -o StrictHostKeyChecking=no -r frontend ubuntu@${PROD_IP}:${APP_DIR}/
                    ssh -o StrictHostKeyChecking=no ubuntu@${PROD_IP} '
                        cd ${APP_DIR}
                        docker-compose down
                        docker-compose up -d
                    '
                """
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
            echo "App live at: http://13.232.123.47"
        }
        failure {
            echo '❌ Deployment Failed! Check logs!'
        }
    }
}
