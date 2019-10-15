
  Pod::Spec.new do |s|
    s.name = 'CapacitorPushNotification'
    s.version = '0.0.1'
    s.summary = 'Push notification plugin for Capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/PR1YANKPAT3L/capacitor-push-notification'
    s.author = 'Priyank Patel <priyank.patel@stackspace.ca>'
    s.source = { :git => 'https://github.com/PR1YANKPAT3L/capacitor-push-notification', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end