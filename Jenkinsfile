pipeline {
  agent {
    docker {
      image 'node:18-bullseye-slim'
      args '-u root:root'
    }
  }

  options {
    timestamps()
    ansiColor('xterm')
    timeout(time: 30, unit: 'MINUTES')
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci || npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test -- --watch=false'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build -- --configuration production'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
