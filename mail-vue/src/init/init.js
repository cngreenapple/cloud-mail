import { websiteConfig } from '@/request/setting';
import { useSettingStore } from '@/store/setting';
import { useUserStore } from '@/store/user';

async function init() {
	const settingStore = useSettingStore();
	const userStore = useUserStore();

	try {
		const config = await websiteConfig();
		if (config) {
			settingStore.settings = { ...settingStore.settings, ...config };
			if (config.domainList) {
				settingStore.domainList = config.domainList;
			}
		}
	} catch (e) {
		console.warn('Failed to load website config:', e.message);
	}

	try {
		await userStore.refreshUserInfo();
	} catch (e) {
		console.warn('User not logged in:', e.message);
	}
}

export { init };