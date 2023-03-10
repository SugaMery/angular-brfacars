/** 2790299606635566214 */
self.document = self;
self.window = self;
var ytcfg = {
    d: function() {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {})
    },
    get: function(k, o) {
        return k in ytcfg.d() ? ytcfg.d()[k] : o
    },
    set: function() {
        var a = arguments;
        if (a.length > 1) ytcfg.d()[a[0]] = a[1];
        else
            for (var k in a[0]) ytcfg.d()[k] = a[0][k]
    }
};
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "allow_skip_networkless": true,
        "clear_user_partitioned_ls": true,
        "deprecate_two_way_binding_child": true,
        "deprecate_two_way_binding_parent": true,
        "desktop_image_cta_no_background": true,
        "desktop_text_ads_gray_visurl": true,
        "disable_child_node_auto_formatted_strings": true,
        "disable_simple_mixed_direction_formatted_strings": true,
        "disable_thumbnail_preloading": true,
        "enable_client_sli_logging": true,
        "enable_gel_log_commands": true,
        "enable_gray_visurl": true,
        "enable_mixed_direction_formatted_strings": true,
        "enable_share_panel_page_as_screen_layer": true,
        "enable_sli_flush": true,
        "enable_topsoil_wta_for_halftime_live_infra": true,
        "export_networkless_options": true,
        "forward_domain_admin_state_on_embeds": true,
        "html5_enable_single_video_vod_ivar_on_pacf": true,
        "html5_enable_video_overlay_on_inplayer_slot_for_tv": true,
        "html5_pacf_enable_dai": true,
        "kevlar_dropdown_fix": true,
        "kevlar_gel_error_routing": true,
        "kevlar_sw_app_wide_fallback": true,
        "log_heartbeat_with_lifecycles": true,
        "log_web_endpoint_to_layer": true,
        "networkless_gel": true,
        "networkless_logging": true,
        "nwl_send_fast_on_unload": true,
        "offline_error_handling": true,
        "omit_innertube_api_key_for_bearer_auth_header": true,
        "pageid_as_header_web": true,
        "pes_migrate_association_data": true,
        "polymer_bad_build_labels": true,
        "polymer_verifiy_app_state": true,
        "qoe_send_and_write": true,
        "record_app_crashed_web": true,
        "render_unicode_emojis_as_images_counterfactual": true,
        "screen_manager_log_servlet_ei": true,
        "skip_ls_gel_retry": true,
        "sponsorships_upsell_in_picker_check_eligibility": true,
        "state_machine_dynamic_events_lifecycles": true,
        "suppress_error_204_logging": true,
        "sw_nav_request_network_first": true,
        "use_bg_facade": true,
        "use_document_lifecycles": true,
        "use_screen_manager_util": true,
        "use_undefined_csn_any_layer": true,
        "vss_final_ping_send_and_write": true,
        "vss_playback_use_send_and_write": true,
        "web_api_url": true,
        "web_broadcast_eocs_with_lifecycle": true,
        "web_dedupe_ve_grafting": true,
        "web_deprecate_service_ajax_map_dependency": true,
        "web_enable_ad_signals_in_it_context": true,
        "web_fetch_promise_cleanup_killswitch": true,
        "web_forward_command_on_pbj": true,
        "web_log_memory_total_kbytes": true,
        "web_prefetch_preload_video": true,
        "web_yt_config_context": true,
        "ytidb_fetch_datasync_ids_for_data_cleanup": true,
        "addto_ajax_log_warning_fraction": 0.1,
        "log_window_onerror_fraction": 0.1,
        "ytidb_transaction_ended_event_rate_limit": 0.02,
        "botguard_async_snapshot_timeout_ms": 3000,
        "check_navigator_accuracy_timeout_ms": 0,
        "initial_gel_batch_timeout": 2000,
        "network_polling_interval": 30000,
        "web_foreground_heartbeat_interval_ms": 28000,
        "web_logging_max_batch": 150,
        "ytidb_remake_db_retries": 3,
        "ytidb_reopen_db_retries": 3,
        "cb_v2_uxe": "23983171",
        "web_client_version_override": "",
        "kevlar_command_handler_command_banlist": [],
        "web_op_continuation_type_banlist": [],
        "web_op_endpoint_banlist": [],
        "web_op_signal_type_banlist": []
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20220114.01.00",
    "INNERTUBE_CONTEXT": {
        "client": {
            "clientName": "WEB",
            "clientVersion": "2.20220114.01.00"
        }
    },
    "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
    "INNERTUBE_CONTEXT_CLIENT_VERSION": "2.20220114.01.00",
    "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS": {
        "client.name": "WEB"
    }
});
window.ytcfg.obfuscatedData_ = [];
importScripts('https:\/\/www.youtube.com\/s\/desktop\/d3411c39\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js');