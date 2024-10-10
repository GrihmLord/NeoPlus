import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
  header: ViewStyle;
  coverImage: ImageStyle;
  gradient: ViewStyle;
  headerContent: ViewStyle;
  profileImage: ImageStyle;
  name: TextStyle;
  role: TextStyle;
  ratingContainer: ViewStyle;
  rating: TextStyle;
  content: ViewStyle;
  bioSection: ViewStyle;
  bio: TextStyle;
  statsContainer: ViewStyle;
  tabContainer: ViewStyle;
  tab: ViewStyle;
  activeTab: ViewStyle;
  tabText: TextStyle;
  activeTabText: TextStyle;
  analyticsSection: ViewStyle;
  sectionTitle: TextStyle;
  analyticsRow: ViewStyle;
  aliasSection: ViewStyle;
  aliasImage: ImageStyle;
  aliasHandle: TextStyle;
  walletSection: ViewStyle;
  credits: TextStyle;
  creditsLabel: TextStyle;
  walletButtons: ViewStyle;
  walletButton: ViewStyle;
  walletButtonText: TextStyle;
  settingsSection: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    opacity: 0.5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  bioSection: {
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    alignItems: 'center',
  },
  activeTab: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    fontSize: 14,
    color: '#333',
  },
  analyticsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  analyticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  aliasSection: {
    marginBottom: 20,
  },
  aliasImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  aliasHandle: {
    fontSize: 16,
    color: '#666',
  },
  walletSection: {
    marginBottom: 20,
  },
  credits: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  creditsLabel: {
    fontSize: 14,
    color: '#666',
  },
  walletButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  walletButton: {
    alignItems: 'center',
  },
  walletButtonText: {
    fontSize: 14,
    color: '#666',
  },
  settingsSection: {
    marginBottom: 20,
  },
});
