# `appstreamFleet` Submodule <a name="`appstreamFleet` Submodule" id="@cdktn/provider-awscc.appstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleet <a name="AppstreamFleet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet awscc_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleet;

AppstreamFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .attributesToDelete(java.util.List<java.lang.String>)
//  .computeCapacity(AppstreamFleetComputeCapacity)
//  .description(java.lang.String)
//  .disableImdsv1(java.lang.Boolean|IResolvable)
//  .disconnectTimeoutInSeconds(java.lang.Number)
//  .displayName(java.lang.String)
//  .domainJoinInfo(AppstreamFleetDomainJoinInfo)
//  .enableDefaultInternetAccess(java.lang.Boolean|IResolvable)
//  .fleetType(java.lang.String)
//  .iamRoleArn(java.lang.String)
//  .idleDisconnectTimeoutInSeconds(java.lang.Number)
//  .imageArn(java.lang.String)
//  .imageName(java.lang.String)
//  .maxConcurrentSessions(java.lang.Number)
//  .maxSessionsPerInstance(java.lang.Number)
//  .maxUserDurationInSeconds(java.lang.Number)
//  .platform(java.lang.String)
//  .rootVolumeConfig(AppstreamFleetRootVolumeConfig)
//  .sessionScriptS3Location(AppstreamFleetSessionScriptS3Location)
//  .streamView(java.lang.String)
//  .tags(IResolvable|java.util.List<AppstreamFleetTags>)
//  .usbDeviceFilterStrings(java.util.List<java.lang.String>)
//  .vpcConfig(AppstreamFleetVpcConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disableImdsv1">disableImdsv1</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.streamView">streamView</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.attributesToDelete"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `computeCapacity`<sup>Optional</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.computeCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `disableImdsv1`<sup>Optional</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disableImdsv1"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disconnectTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.domainJoinInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.enableDefaultInternetAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.fleetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.idleDisconnectTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxConcurrentSessions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `maxSessionsPerInstance`<sup>Optional</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxSessionsPerInstance"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxUserDurationInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.platform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `rootVolumeConfig`<sup>Optional</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.rootVolumeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `sessionScriptS3Location`<sup>Optional</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.sessionScriptS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `streamView`<sup>Optional</sup> <a name="streamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.streamView"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `usbDeviceFilterStrings`<sup>Optional</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.usbDeviceFilterStrings"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity">putComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo">putDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig">putRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location">putSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete">resetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity">resetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1">resetDisableImdsv1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds">resetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo">resetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess">resetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds">resetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn">resetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions">resetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance">resetMaxSessionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds">resetMaxUserDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig">resetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location">resetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView">resetStreamView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings">resetUsbDeviceFilterStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeCapacity` <a name="putComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity"></a>

```java
public void putComputeCapacity(AppstreamFleetComputeCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `putDomainJoinInfo` <a name="putDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo"></a>

```java
public void putDomainJoinInfo(AppstreamFleetDomainJoinInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `putRootVolumeConfig` <a name="putRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig"></a>

```java
public void putRootVolumeConfig(AppstreamFleetRootVolumeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `putSessionScriptS3Location` <a name="putSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location"></a>

```java
public void putSessionScriptS3Location(AppstreamFleetSessionScriptS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppstreamFleetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig"></a>

```java
public void putVpcConfig(AppstreamFleetVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `resetAttributesToDelete` <a name="resetAttributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete"></a>

```java
public void resetAttributesToDelete()
```

##### `resetComputeCapacity` <a name="resetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity"></a>

```java
public void resetComputeCapacity()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableImdsv1` <a name="resetDisableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1"></a>

```java
public void resetDisableImdsv1()
```

##### `resetDisconnectTimeoutInSeconds` <a name="resetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds"></a>

```java
public void resetDisconnectTimeoutInSeconds()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomainJoinInfo` <a name="resetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo"></a>

```java
public void resetDomainJoinInfo()
```

##### `resetEnableDefaultInternetAccess` <a name="resetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess"></a>

```java
public void resetEnableDefaultInternetAccess()
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType"></a>

```java
public void resetFleetType()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetIdleDisconnectTimeoutInSeconds` <a name="resetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds"></a>

```java
public void resetIdleDisconnectTimeoutInSeconds()
```

##### `resetImageArn` <a name="resetImageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn"></a>

```java
public void resetImageArn()
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetMaxConcurrentSessions` <a name="resetMaxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions"></a>

```java
public void resetMaxConcurrentSessions()
```

##### `resetMaxSessionsPerInstance` <a name="resetMaxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance"></a>

```java
public void resetMaxSessionsPerInstance()
```

##### `resetMaxUserDurationInSeconds` <a name="resetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds"></a>

```java
public void resetMaxUserDurationInSeconds()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetRootVolumeConfig` <a name="resetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig"></a>

```java
public void resetRootVolumeConfig()
```

##### `resetSessionScriptS3Location` <a name="resetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location"></a>

```java
public void resetSessionScriptS3Location()
```

##### `resetStreamView` <a name="resetStreamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView"></a>

```java
public void resetStreamView()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags"></a>

```java
public void resetTags()
```

##### `resetUsbDeviceFilterStrings` <a name="resetUsbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings"></a>

```java
public void resetUsbDeviceFilterStrings()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleet;

AppstreamFleet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleet;

AppstreamFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleet;

AppstreamFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleet;

AppstreamFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppstreamFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppstreamFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppstreamFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput">attributesToDeleteInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput">computeCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input">disableImdsv1Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput">disconnectTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput">domainJoinInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput">enableDefaultInternetAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput">idleDisconnectTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput">imageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput">maxConcurrentSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput">maxSessionsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput">maxUserDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput">rootVolumeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput">sessionScriptS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput">streamViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput">usbDeviceFilterStringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1">disableImdsv1</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView">streamView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `computeCapacity`<sup>Required</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity"></a>

```java
public AppstreamFleetComputeCapacityOutputReference getComputeCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a>

---

##### `domainJoinInfo`<sup>Required</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo"></a>

```java
public AppstreamFleetDomainJoinInfoOutputReference getDomainJoinInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rootVolumeConfig`<sup>Required</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig"></a>

```java
public AppstreamFleetRootVolumeConfigOutputReference getRootVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a>

---

##### `sessionScriptS3Location`<sup>Required</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location"></a>

```java
public AppstreamFleetSessionScriptS3LocationOutputReference getSessionScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags"></a>

```java
public AppstreamFleetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig"></a>

```java
public AppstreamFleetVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a>

---

##### `attributesToDeleteInput`<sup>Optional</sup> <a name="attributesToDeleteInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput"></a>

```java
public java.util.List<java.lang.String> getAttributesToDeleteInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeCapacityInput`<sup>Optional</sup> <a name="computeCapacityInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput"></a>

```java
public IResolvable|AppstreamFleetComputeCapacity getComputeCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableImdsv1Input`<sup>Optional</sup> <a name="disableImdsv1Input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input"></a>

```java
public java.lang.Boolean|IResolvable getDisableImdsv1Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="disconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput"></a>

```java
public java.lang.Number getDisconnectTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainJoinInfoInput`<sup>Optional</sup> <a name="domainJoinInfoInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput"></a>

```java
public IResolvable|AppstreamFleetDomainJoinInfo getDomainJoinInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `enableDefaultInternetAccessInput`<sup>Optional</sup> <a name="enableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultInternetAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput"></a>

```java
public java.lang.String getFleetTypeInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput"></a>

```java
public java.lang.String getImageArnInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrentSessionsInput`<sup>Optional</sup> <a name="maxConcurrentSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput"></a>

```java
public java.lang.Number getMaxConcurrentSessionsInput();
```

- *Type:* java.lang.Number

---

##### `maxSessionsPerInstanceInput`<sup>Optional</sup> <a name="maxSessionsPerInstanceInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput"></a>

```java
public java.lang.Number getMaxSessionsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxUserDurationInSecondsInput`<sup>Optional</sup> <a name="maxUserDurationInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput"></a>

```java
public java.lang.Number getMaxUserDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `rootVolumeConfigInput`<sup>Optional</sup> <a name="rootVolumeConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput"></a>

```java
public IResolvable|AppstreamFleetRootVolumeConfig getRootVolumeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `sessionScriptS3LocationInput`<sup>Optional</sup> <a name="sessionScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput"></a>

```java
public IResolvable|AppstreamFleetSessionScriptS3Location getSessionScriptS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `streamViewInput`<sup>Optional</sup> <a name="streamViewInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput"></a>

```java
public java.lang.String getStreamViewInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppstreamFleetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>>

---

##### `usbDeviceFilterStringsInput`<sup>Optional</sup> <a name="usbDeviceFilterStringsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput"></a>

```java
public java.util.List<java.lang.String> getUsbDeviceFilterStringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput"></a>

```java
public IResolvable|AppstreamFleetVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete"></a>

```java
public java.util.List<java.lang.String> getAttributesToDelete();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableImdsv1`<sup>Required</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1"></a>

```java
public java.lang.Boolean|IResolvable getDisableImdsv1();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `maxConcurrentSessions`<sup>Required</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions"></a>

```java
public java.lang.Number getMaxConcurrentSessions();
```

- *Type:* java.lang.Number

---

##### `maxSessionsPerInstance`<sup>Required</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance"></a>

```java
public java.lang.Number getMaxSessionsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds"></a>

```java
public java.lang.Number getMaxUserDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `streamView`<sup>Required</sup> <a name="streamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView"></a>

```java
public java.lang.String getStreamView();
```

- *Type:* java.lang.String

---

##### `usbDeviceFilterStrings`<sup>Required</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings"></a>

```java
public java.util.List<java.lang.String> getUsbDeviceFilterStrings();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetComputeCapacity <a name="AppstreamFleetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetComputeCapacity;

AppstreamFleetComputeCapacity.builder()
//  .desiredInstances(java.lang.Number)
//  .desiredSessions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances">desiredInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions">desiredSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}. |

---

##### `desiredInstances`<sup>Optional</sup> <a name="desiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances"></a>

```java
public java.lang.Number getDesiredInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

##### `desiredSessions`<sup>Optional</sup> <a name="desiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions"></a>

```java
public java.lang.Number getDesiredSessions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}.

---

### AppstreamFleetConfig <a name="AppstreamFleetConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetConfig;

AppstreamFleetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .attributesToDelete(java.util.List<java.lang.String>)
//  .computeCapacity(AppstreamFleetComputeCapacity)
//  .description(java.lang.String)
//  .disableImdsv1(java.lang.Boolean|IResolvable)
//  .disconnectTimeoutInSeconds(java.lang.Number)
//  .displayName(java.lang.String)
//  .domainJoinInfo(AppstreamFleetDomainJoinInfo)
//  .enableDefaultInternetAccess(java.lang.Boolean|IResolvable)
//  .fleetType(java.lang.String)
//  .iamRoleArn(java.lang.String)
//  .idleDisconnectTimeoutInSeconds(java.lang.Number)
//  .imageArn(java.lang.String)
//  .imageName(java.lang.String)
//  .maxConcurrentSessions(java.lang.Number)
//  .maxSessionsPerInstance(java.lang.Number)
//  .maxUserDurationInSeconds(java.lang.Number)
//  .platform(java.lang.String)
//  .rootVolumeConfig(AppstreamFleetRootVolumeConfig)
//  .sessionScriptS3Location(AppstreamFleetSessionScriptS3Location)
//  .streamView(java.lang.String)
//  .tags(IResolvable|java.util.List<AppstreamFleetTags>)
//  .usbDeviceFilterStrings(java.util.List<java.lang.String>)
//  .vpcConfig(AppstreamFleetVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete">attributesToDelete</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1">disableImdsv1</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView">streamView</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete"></a>

```java
public java.util.List<java.lang.String> getAttributesToDelete();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `computeCapacity`<sup>Optional</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity"></a>

```java
public AppstreamFleetComputeCapacity getComputeCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `disableImdsv1`<sup>Optional</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1"></a>

```java
public java.lang.Boolean|IResolvable getDisableImdsv1();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo"></a>

```java
public AppstreamFleetDomainJoinInfo getDomainJoinInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds"></a>

```java
public java.lang.Number getIdleDisconnectTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions"></a>

```java
public java.lang.Number getMaxConcurrentSessions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `maxSessionsPerInstance`<sup>Optional</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance"></a>

```java
public java.lang.Number getMaxSessionsPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds"></a>

```java
public java.lang.Number getMaxUserDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `rootVolumeConfig`<sup>Optional</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig"></a>

```java
public AppstreamFleetRootVolumeConfig getRootVolumeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `sessionScriptS3Location`<sup>Optional</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location"></a>

```java
public AppstreamFleetSessionScriptS3Location getSessionScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `streamView`<sup>Optional</sup> <a name="streamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView"></a>

```java
public java.lang.String getStreamView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppstreamFleetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `usbDeviceFilterStrings`<sup>Optional</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings"></a>

```java
public java.util.List<java.lang.String> getUsbDeviceFilterStrings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig"></a>

```java
public AppstreamFleetVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

### AppstreamFleetDomainJoinInfo <a name="AppstreamFleetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetDomainJoinInfo;

AppstreamFleetDomainJoinInfo.builder()
//  .directoryName(java.lang.String)
//  .organizationalUnitDistinguishedName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

### AppstreamFleetRootVolumeConfig <a name="AppstreamFleetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetRootVolumeConfig;

AppstreamFleetRootVolumeConfig.builder()
//  .volumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}. |

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}.

---

### AppstreamFleetSessionScriptS3Location <a name="AppstreamFleetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetSessionScriptS3Location;

AppstreamFleetSessionScriptS3Location.builder()
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}.

---

### AppstreamFleetTags <a name="AppstreamFleetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetTags;

AppstreamFleetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#key AppstreamFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#value AppstreamFleet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#key AppstreamFleet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#value AppstreamFleet#value}.

---

### AppstreamFleetVpcConfig <a name="AppstreamFleetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetVpcConfig;

AppstreamFleetVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamFleetComputeCapacityOutputReference <a name="AppstreamFleetComputeCapacityOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetComputeCapacityOutputReference;

new AppstreamFleetComputeCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances">resetDesiredInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions">resetDesiredSessions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredInstances` <a name="resetDesiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances"></a>

```java
public void resetDesiredInstances()
```

##### `resetDesiredSessions` <a name="resetDesiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions"></a>

```java
public void resetDesiredSessions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput">desiredInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput">desiredSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances">desiredInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions">desiredSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredInstancesInput`<sup>Optional</sup> <a name="desiredInstancesInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput"></a>

```java
public java.lang.Number getDesiredInstancesInput();
```

- *Type:* java.lang.Number

---

##### `desiredSessionsInput`<sup>Optional</sup> <a name="desiredSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput"></a>

```java
public java.lang.Number getDesiredSessionsInput();
```

- *Type:* java.lang.Number

---

##### `desiredInstances`<sup>Required</sup> <a name="desiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```java
public java.lang.Number getDesiredInstances();
```

- *Type:* java.lang.Number

---

##### `desiredSessions`<sup>Required</sup> <a name="desiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions"></a>

```java
public java.lang.Number getDesiredSessions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetComputeCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---


### AppstreamFleetDomainJoinInfoOutputReference <a name="AppstreamFleetDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetDomainJoinInfoOutputReference;

new AppstreamFleetDomainJoinInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName"></a>

```java
public void resetDirectoryName()
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```java
public void resetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```java
public java.lang.String getDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedNameInput();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetDomainJoinInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---


### AppstreamFleetRootVolumeConfigOutputReference <a name="AppstreamFleetRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetRootVolumeConfigOutputReference;

new AppstreamFleetRootVolumeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```java
public void resetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetRootVolumeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---


### AppstreamFleetSessionScriptS3LocationOutputReference <a name="AppstreamFleetSessionScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetSessionScriptS3LocationOutputReference;

new AppstreamFleetSessionScriptS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetSessionScriptS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---


### AppstreamFleetTagsList <a name="AppstreamFleetTagsList" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetTagsList;

new AppstreamFleetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get"></a>

```java
public AppstreamFleetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamFleetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>>

---


### AppstreamFleetTagsOutputReference <a name="AppstreamFleetTagsOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetTagsOutputReference;

new AppstreamFleetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>

---


### AppstreamFleetVpcConfigOutputReference <a name="AppstreamFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_fleet.AppstreamFleetVpcConfigOutputReference;

new AppstreamFleetVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamFleetVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---



