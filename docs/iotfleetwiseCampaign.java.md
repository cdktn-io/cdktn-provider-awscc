# `iotfleetwiseCampaign` Submodule <a name="`iotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.iotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseCampaign <a name="IotfleetwiseCampaign" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaign;

IotfleetwiseCampaign.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionScheme(IotfleetwiseCampaignCollectionScheme)
    .name(java.lang.String)
    .signalCatalogArn(java.lang.String)
    .targetArn(java.lang.String)
//  .action(java.lang.String)
//  .compression(java.lang.String)
//  .dataDestinationConfigs(IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs>)
//  .dataExtraDimensions(java.util.List<java.lang.String>)
//  .dataPartitions(IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions>)
//  .description(java.lang.String)
//  .diagnosticsMode(java.lang.String)
//  .expiryTime(java.lang.String)
//  .postTriggerCollectionDuration(java.lang.Number)
//  .priority(java.lang.Number)
//  .signalsToCollect(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect>)
//  .signalsToFetch(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch>)
//  .spoolingMode(java.lang.String)
//  .startTime(java.lang.String)
//  .tags(IResolvable|java.util.List<IotfleetwiseCampaignTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.collectionScheme">collectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalCatalogArn">signalCatalogArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataDestinationConfigs">dataDestinationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataExtraDimensions">dataExtraDimensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataPartitions">dataPartitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.diagnosticsMode">diagnosticsMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.expiryTime">expiryTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.postTriggerCollectionDuration">postTriggerCollectionDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToCollect">signalsToCollect</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToFetch">signalsToFetch</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.spoolingMode">spoolingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionScheme`<sup>Required</sup> <a name="collectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.collectionScheme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalCatalogArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.targetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.compression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `dataDestinationConfigs`<sup>Optional</sup> <a name="dataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataDestinationConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `dataExtraDimensions`<sup>Optional</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataExtraDimensions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `dataPartitions`<sup>Optional</sup> <a name="dataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataPartitions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `diagnosticsMode`<sup>Optional</sup> <a name="diagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.diagnosticsMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `expiryTime`<sup>Optional</sup> <a name="expiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.expiryTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `postTriggerCollectionDuration`<sup>Optional</sup> <a name="postTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.postTriggerCollectionDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `signalsToCollect`<sup>Optional</sup> <a name="signalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToCollect"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `signalsToFetch`<sup>Optional</sup> <a name="signalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToFetch"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `spoolingMode`<sup>Optional</sup> <a name="spoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.spoolingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme">putCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs">putDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions">putDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect">putSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch">putSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs">resetDataDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions">resetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions">resetDataPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode">resetDiagnosticsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime">resetExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration">resetPostTriggerCollectionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect">resetSignalsToCollect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch">resetSignalsToFetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode">resetSpoolingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectionScheme` <a name="putCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme"></a>

```java
public void putCollectionScheme(IotfleetwiseCampaignCollectionScheme value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `putDataDestinationConfigs` <a name="putDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs"></a>

```java
public void putDataDestinationConfigs(IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>>

---

##### `putDataPartitions` <a name="putDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions"></a>

```java
public void putDataPartitions(IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>>

---

##### `putSignalsToCollect` <a name="putSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect"></a>

```java
public void putSignalsToCollect(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>>

---

##### `putSignalsToFetch` <a name="putSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch"></a>

```java
public void putSignalsToFetch(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotfleetwiseCampaignTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction"></a>

```java
public void resetAction()
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDataDestinationConfigs` <a name="resetDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs"></a>

```java
public void resetDataDestinationConfigs()
```

##### `resetDataExtraDimensions` <a name="resetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions"></a>

```java
public void resetDataExtraDimensions()
```

##### `resetDataPartitions` <a name="resetDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions"></a>

```java
public void resetDataPartitions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiagnosticsMode` <a name="resetDiagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode"></a>

```java
public void resetDiagnosticsMode()
```

##### `resetExpiryTime` <a name="resetExpiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime"></a>

```java
public void resetExpiryTime()
```

##### `resetPostTriggerCollectionDuration` <a name="resetPostTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration"></a>

```java
public void resetPostTriggerCollectionDuration()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSignalsToCollect` <a name="resetSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect"></a>

```java
public void resetSignalsToCollect()
```

##### `resetSignalsToFetch` <a name="resetSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch"></a>

```java
public void resetSignalsToFetch()
```

##### `resetSpoolingMode` <a name="resetSpoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode"></a>

```java
public void resetSpoolingMode()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaign;

IotfleetwiseCampaign.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaign;

IotfleetwiseCampaign.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaign;

IotfleetwiseCampaign.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaign;

IotfleetwiseCampaign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotfleetwiseCampaign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotfleetwiseCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme">collectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs">dataDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions">dataPartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime">lastModificationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect">signalsToCollect</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch">signalsToFetch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput">collectionSchemeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput">dataDestinationConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput">dataExtraDimensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput">dataPartitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput">diagnosticsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput">expiryTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput">postTriggerCollectionDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput">signalCatalogArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput">signalsToCollectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput">signalsToFetchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput">spoolingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode">diagnosticsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime">expiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration">postTriggerCollectionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn">signalCatalogArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode">spoolingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `collectionScheme`<sup>Required</sup> <a name="collectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionSchemeOutputReference getCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dataDestinationConfigs`<sup>Required</sup> <a name="dataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsList getDataDestinationConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `dataPartitions`<sup>Required</sup> <a name="dataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions"></a>

```java
public IotfleetwiseCampaignDataPartitionsList getDataPartitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime"></a>

```java
public java.lang.String getLastModificationTime();
```

- *Type:* java.lang.String

---

##### `signalsToCollect`<sup>Required</sup> <a name="signalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect"></a>

```java
public IotfleetwiseCampaignSignalsToCollectList getSignalsToCollect();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a>

---

##### `signalsToFetch`<sup>Required</sup> <a name="signalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch"></a>

```java
public IotfleetwiseCampaignSignalsToFetchList getSignalsToFetch();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags"></a>

```java
public IotfleetwiseCampaignTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `collectionSchemeInput`<sup>Optional</sup> <a name="collectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionScheme getCollectionSchemeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `dataDestinationConfigsInput`<sup>Optional</sup> <a name="dataDestinationConfigsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs> getDataDestinationConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>>

---

##### `dataExtraDimensionsInput`<sup>Optional</sup> <a name="dataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput"></a>

```java
public java.util.List<java.lang.String> getDataExtraDimensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataPartitionsInput`<sup>Optional</sup> <a name="dataPartitionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions> getDataPartitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diagnosticsModeInput`<sup>Optional</sup> <a name="diagnosticsModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput"></a>

```java
public java.lang.String getDiagnosticsModeInput();
```

- *Type:* java.lang.String

---

##### `expiryTimeInput`<sup>Optional</sup> <a name="expiryTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput"></a>

```java
public java.lang.String getExpiryTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `postTriggerCollectionDurationInput`<sup>Optional</sup> <a name="postTriggerCollectionDurationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput"></a>

```java
public java.lang.Number getPostTriggerCollectionDurationInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `signalCatalogArnInput`<sup>Optional</sup> <a name="signalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput"></a>

```java
public java.lang.String getSignalCatalogArnInput();
```

- *Type:* java.lang.String

---

##### `signalsToCollectInput`<sup>Optional</sup> <a name="signalsToCollectInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect> getSignalsToCollectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>>

---

##### `signalsToFetchInput`<sup>Optional</sup> <a name="signalsToFetchInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch> getSignalsToFetchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>>

---

##### `spoolingModeInput`<sup>Optional</sup> <a name="spoolingModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput"></a>

```java
public java.lang.String getSpoolingModeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `dataExtraDimensions`<sup>Required</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions"></a>

```java
public java.util.List<java.lang.String> getDataExtraDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diagnosticsMode`<sup>Required</sup> <a name="diagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode"></a>

```java
public java.lang.String getDiagnosticsMode();
```

- *Type:* java.lang.String

---

##### `expiryTime`<sup>Required</sup> <a name="expiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime"></a>

```java
public java.lang.String getExpiryTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postTriggerCollectionDuration`<sup>Required</sup> <a name="postTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```java
public java.lang.Number getPostTriggerCollectionDuration();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn"></a>

```java
public java.lang.String getSignalCatalogArn();
```

- *Type:* java.lang.String

---

##### `spoolingMode`<sup>Required</sup> <a name="spoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode"></a>

```java
public java.lang.String getSpoolingMode();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignCollectionScheme <a name="IotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionScheme;

IotfleetwiseCampaignCollectionScheme.builder()
//  .conditionBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme)
//  .timeBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme">conditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme">timeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}. |

---

##### `conditionBasedCollectionScheme`<sup>Optional</sup> <a name="conditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme getConditionBasedCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

##### `timeBasedCollectionScheme`<sup>Optional</sup> <a name="timeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme getTimeBasedCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme;

IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.builder()
//  .conditionLanguageVersion(java.lang.Number)
//  .expression(java.lang.String)
//  .minimumTriggerIntervalMs(java.lang.Number)
//  .triggerMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs">minimumTriggerIntervalMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode">triggerMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `minimumTriggerIntervalMs`<sup>Optional</sup> <a name="minimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs"></a>

```java
public java.lang.Number getMinimumTriggerIntervalMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

##### `triggerMode`<sup>Optional</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode"></a>

```java
public java.lang.String getTriggerMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme;

IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.builder()
//  .periodMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs">periodMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}. |

---

##### `periodMs`<sup>Optional</sup> <a name="periodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs"></a>

```java
public java.lang.Number getPeriodMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

### IotfleetwiseCampaignConfig <a name="IotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignConfig;

IotfleetwiseCampaignConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionScheme(IotfleetwiseCampaignCollectionScheme)
    .name(java.lang.String)
    .signalCatalogArn(java.lang.String)
    .targetArn(java.lang.String)
//  .action(java.lang.String)
//  .compression(java.lang.String)
//  .dataDestinationConfigs(IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs>)
//  .dataExtraDimensions(java.util.List<java.lang.String>)
//  .dataPartitions(IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions>)
//  .description(java.lang.String)
//  .diagnosticsMode(java.lang.String)
//  .expiryTime(java.lang.String)
//  .postTriggerCollectionDuration(java.lang.Number)
//  .priority(java.lang.Number)
//  .signalsToCollect(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect>)
//  .signalsToFetch(IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch>)
//  .spoolingMode(java.lang.String)
//  .startTime(java.lang.String)
//  .tags(IResolvable|java.util.List<IotfleetwiseCampaignTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme">collectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn">signalCatalogArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs">dataDestinationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions">dataPartitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode">diagnosticsMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime">expiryTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration">postTriggerCollectionDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect">signalsToCollect</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch">signalsToFetch</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode">spoolingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionScheme`<sup>Required</sup> <a name="collectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionScheme getCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn"></a>

```java
public java.lang.String getSignalCatalogArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `dataDestinationConfigs`<sup>Optional</sup> <a name="dataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs> getDataDestinationConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `dataExtraDimensions`<sup>Optional</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions"></a>

```java
public java.util.List<java.lang.String> getDataExtraDimensions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `dataPartitions`<sup>Optional</sup> <a name="dataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions> getDataPartitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `diagnosticsMode`<sup>Optional</sup> <a name="diagnosticsMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode"></a>

```java
public java.lang.String getDiagnosticsMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `expiryTime`<sup>Optional</sup> <a name="expiryTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime"></a>

```java
public java.lang.String getExpiryTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `postTriggerCollectionDuration`<sup>Optional</sup> <a name="postTriggerCollectionDuration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration"></a>

```java
public java.lang.Number getPostTriggerCollectionDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `signalsToCollect`<sup>Optional</sup> <a name="signalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect> getSignalsToCollect();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `signalsToFetch`<sup>Optional</sup> <a name="signalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch> getSignalsToFetch();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `spoolingMode`<sup>Optional</sup> <a name="spoolingMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode"></a>

```java
public java.lang.String getSpoolingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

### IotfleetwiseCampaignDataDestinationConfigs <a name="IotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigs;

IotfleetwiseCampaignDataDestinationConfigs.builder()
//  .mqttTopicConfig(IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig)
//  .s3Config(IotfleetwiseCampaignDataDestinationConfigsS3Config)
//  .timestreamConfig(IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig">mqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig">timestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}. |

---

##### `mqttTopicConfig`<sup>Optional</sup> <a name="mqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig getMqttTopicConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}.

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsS3Config getS3Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}.

---

##### `timestreamConfig`<sup>Optional</sup> <a name="timestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig getTimestreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}.

---

### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig;

IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.builder()
//  .executionRoleArn(java.lang.String)
//  .mqttTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn">mqttTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}. |

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `mqttTopicArn`<sup>Optional</sup> <a name="mqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn"></a>

```java
public java.lang.String getMqttTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

### IotfleetwiseCampaignDataDestinationConfigsS3Config <a name="IotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsS3Config;

IotfleetwiseCampaignDataDestinationConfigsS3Config.builder()
//  .bucketArn(java.lang.String)
//  .dataFormat(java.lang.String)
//  .prefix(java.lang.String)
//  .storageCompressionFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat">storageCompressionFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

##### `storageCompressionFormat`<sup>Optional</sup> <a name="storageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat"></a>

```java
public java.lang.String getStorageCompressionFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig;

IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.builder()
//  .executionRoleArn(java.lang.String)
//  .timestreamTableArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn">timestreamTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}. |

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `timestreamTableArn`<sup>Optional</sup> <a name="timestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn"></a>

```java
public java.lang.String getTimestreamTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

### IotfleetwiseCampaignDataPartitions <a name="IotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitions;

IotfleetwiseCampaignDataPartitions.builder()
//  .id(java.lang.String)
//  .storageOptions(IotfleetwiseCampaignDataPartitionsStorageOptions)
//  .uploadOptions(IotfleetwiseCampaignDataPartitionsUploadOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions">storageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions">uploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageOptions`<sup>Optional</sup> <a name="storageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptions getStorageOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}.

---

##### `uploadOptions`<sup>Optional</sup> <a name="uploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions"></a>

```java
public IotfleetwiseCampaignDataPartitionsUploadOptions getUploadOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptions <a name="IotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptions;

IotfleetwiseCampaignDataPartitionsStorageOptions.builder()
//  .maximumSize(IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize)
//  .minimumTimeToLive(IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive)
//  .storageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize">maximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive">minimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}. |

---

##### `maximumSize`<sup>Optional</sup> <a name="maximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize getMaximumSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

##### `minimumTimeToLive`<sup>Optional</sup> <a name="minimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive getMinimumTimeToLive();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize;

IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive;

IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsUploadOptions <a name="IotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsUploadOptions;

IotfleetwiseCampaignDataPartitionsUploadOptions.builder()
//  .conditionLanguageVersion(java.lang.Number)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

### IotfleetwiseCampaignSignalsToCollect <a name="IotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToCollect;

IotfleetwiseCampaignSignalsToCollect.builder()
//  .dataPartitionId(java.lang.String)
//  .maxSampleCount(java.lang.Number)
//  .minimumSamplingIntervalMs(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId">dataPartitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount">maxSampleCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs">minimumSamplingIntervalMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |

---

##### `dataPartitionId`<sup>Optional</sup> <a name="dataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId"></a>

```java
public java.lang.String getDataPartitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}.

---

##### `maxSampleCount`<sup>Optional</sup> <a name="maxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount"></a>

```java
public java.lang.Number getMaxSampleCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}.

---

##### `minimumSamplingIntervalMs`<sup>Optional</sup> <a name="minimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs"></a>

```java
public java.lang.Number getMinimumSamplingIntervalMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

### IotfleetwiseCampaignSignalsToFetch <a name="IotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetch;

IotfleetwiseCampaignSignalsToFetch.builder()
//  .actions(java.util.List<java.lang.String>)
//  .conditionLanguageVersion(java.lang.Number)
//  .fullyQualifiedName(java.lang.String)
//  .signalFetchConfig(IotfleetwiseCampaignSignalsToFetchSignalFetchConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig">signalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}.

---

##### `conditionLanguageVersion`<sup>Optional</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}.

---

##### `signalFetchConfig`<sup>Optional</sup> <a name="signalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfig getSignalFetchConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig;

IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.builder()
//  .conditionBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased)
//  .timeBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased">conditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased">timeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}. |

---

##### `conditionBased`<sup>Optional</sup> <a name="conditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased getConditionBased();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

##### `timeBased`<sup>Optional</sup> <a name="timeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased getTimeBased();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased;

IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.builder()
//  .conditionExpression(java.lang.String)
//  .triggerMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode">triggerMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `conditionExpression`<sup>Optional</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

##### `triggerMode`<sup>Optional</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode"></a>

```java
public java.lang.String getTriggerMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased;

IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.builder()
//  .executionFrequencyMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs">executionFrequencyMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}. |

---

##### `executionFrequencyMs`<sup>Optional</sup> <a name="executionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs"></a>

```java
public java.lang.Number getExecutionFrequencyMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

### IotfleetwiseCampaignTags <a name="IotfleetwiseCampaignTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignTags;

IotfleetwiseCampaignTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference;

new IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs">resetMinimumTriggerIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode">resetTriggerMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion"></a>

```java
public void resetConditionLanguageVersion()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetMinimumTriggerIntervalMs` <a name="resetMinimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs"></a>

```java
public void resetMinimumTriggerIntervalMs()
```

##### `resetTriggerMode` <a name="resetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode"></a>

```java
public void resetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput">minimumTriggerIntervalMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">minimumTriggerIntervalMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">triggerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput"></a>

```java
public java.lang.Number getConditionLanguageVersionInput();
```

- *Type:* java.lang.Number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `minimumTriggerIntervalMsInput`<sup>Optional</sup> <a name="minimumTriggerIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput"></a>

```java
public java.lang.Number getMinimumTriggerIntervalMsInput();
```

- *Type:* java.lang.Number

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput"></a>

```java
public java.lang.String getTriggerModeInput();
```

- *Type:* java.lang.String

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `minimumTriggerIntervalMs`<sup>Required</sup> <a name="minimumTriggerIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```java
public java.lang.Number getMinimumTriggerIntervalMs();
```

- *Type:* java.lang.Number

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```java
public java.lang.String getTriggerMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionSchemeOutputReference;

new IotfleetwiseCampaignCollectionSchemeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme">putConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme">putTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme">resetConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme">resetTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionBasedCollectionScheme` <a name="putConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme"></a>

```java
public void putConditionBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `putTimeBasedCollectionScheme` <a name="putTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme"></a>

```java
public void putTimeBasedCollectionScheme(IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `resetConditionBasedCollectionScheme` <a name="resetConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme"></a>

```java
public void resetConditionBasedCollectionScheme()
```

##### `resetTimeBasedCollectionScheme` <a name="resetTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme"></a>

```java
public void resetTimeBasedCollectionScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">conditionBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">timeBasedCollectionScheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput">conditionBasedCollectionSchemeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput">timeBasedCollectionSchemeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionBasedCollectionScheme`<sup>Required</sup> <a name="conditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference getConditionBasedCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `timeBasedCollectionScheme`<sup>Required</sup> <a name="timeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```java
public IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference getTimeBasedCollectionScheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `conditionBasedCollectionSchemeInput`<sup>Optional</sup> <a name="conditionBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme getConditionBasedCollectionSchemeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `timeBasedCollectionSchemeInput`<sup>Optional</sup> <a name="timeBasedCollectionSchemeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme getTimeBasedCollectionSchemeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionScheme getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference;

new IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs">resetPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriodMs` <a name="resetPeriodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs"></a>

```java
public void resetPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput">periodMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">periodMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodMsInput`<sup>Optional</sup> <a name="periodMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput"></a>

```java
public java.lang.Number getPeriodMsInput();
```

- *Type:* java.lang.Number

---

##### `periodMs`<sup>Required</sup> <a name="periodMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```java
public java.lang.Number getPeriodMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---


### IotfleetwiseCampaignDataDestinationConfigsList <a name="IotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsList;

new IotfleetwiseCampaignDataDestinationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataDestinationConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>>

---


### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference;

new IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn">resetMqttTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetMqttTopicArn` <a name="resetMqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn"></a>

```java
public void resetMqttTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput">mqttTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">mqttTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `mqttTopicArnInput`<sup>Optional</sup> <a name="mqttTopicArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput"></a>

```java
public java.lang.String getMqttTopicArnInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `mqttTopicArn`<sup>Required</sup> <a name="mqttTopicArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```java
public java.lang.String getMqttTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---


### IotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference;

new IotfleetwiseCampaignDataDestinationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig">putMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig">putTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig">resetMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config">resetS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig">resetTimestreamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMqttTopicConfig` <a name="putMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig"></a>

```java
public void putMqttTopicConfig(IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config"></a>

```java
public void putS3Config(IotfleetwiseCampaignDataDestinationConfigsS3Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `putTimestreamConfig` <a name="putTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig"></a>

```java
public void putTimestreamConfig(IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `resetMqttTopicConfig` <a name="resetMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig"></a>

```java
public void resetMqttTopicConfig()
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config"></a>

```java
public void resetS3Config()
```

##### `resetTimestreamConfig` <a name="resetTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig"></a>

```java
public void resetTimestreamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">mqttTopicConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">timestreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput">mqttTopicConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput">s3ConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput">timestreamConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mqttTopicConfig`<sup>Required</sup> <a name="mqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference getMqttTopicConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference getS3Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `timestreamConfig`<sup>Required</sup> <a name="timestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```java
public IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference getTimestreamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `mqttTopicConfigInput`<sup>Optional</sup> <a name="mqttTopicConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig getMqttTopicConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsS3Config getS3ConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `timestreamConfigInput`<sup>Optional</sup> <a name="timestreamConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig getTimestreamConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>

---


### IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference;

new IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat">resetStorageCompressionFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetStorageCompressionFormat` <a name="resetStorageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat"></a>

```java
public void resetStorageCompressionFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput">storageCompressionFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">storageCompressionFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `storageCompressionFormatInput`<sup>Optional</sup> <a name="storageCompressionFormatInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput"></a>

```java
public java.lang.String getStorageCompressionFormatInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `storageCompressionFormat`<sup>Required</sup> <a name="storageCompressionFormat" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```java
public java.lang.String getStorageCompressionFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsS3Config getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---


### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference;

new IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn">resetTimestreamTableArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetTimestreamTableArn` <a name="resetTimestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn"></a>

```java
public void resetTimestreamTableArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput">timestreamTableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">timestreamTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timestreamTableArnInput`<sup>Optional</sup> <a name="timestreamTableArnInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput"></a>

```java
public java.lang.String getTimestreamTableArnInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `timestreamTableArn`<sup>Required</sup> <a name="timestreamTableArn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```java
public java.lang.String getTimestreamTableArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---


### IotfleetwiseCampaignDataPartitionsList <a name="IotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsList;

new IotfleetwiseCampaignDataPartitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get"></a>

```java
public IotfleetwiseCampaignDataPartitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignDataPartitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>>

---


### IotfleetwiseCampaignDataPartitionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsOutputReference;

new IotfleetwiseCampaignDataPartitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions">putStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions">putUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions">resetStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions">resetUploadOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageOptions` <a name="putStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions"></a>

```java
public void putStorageOptions(IotfleetwiseCampaignDataPartitionsStorageOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `putUploadOptions` <a name="putUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions"></a>

```java
public void putUploadOptions(IotfleetwiseCampaignDataPartitionsUploadOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetStorageOptions` <a name="resetStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions"></a>

```java
public void resetStorageOptions()
```

##### `resetUploadOptions` <a name="resetUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions"></a>

```java
public void resetUploadOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">storageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">uploadOptions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput">storageOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput">uploadOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageOptions`<sup>Required</sup> <a name="storageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference getStorageOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `uploadOptions`<sup>Required</sup> <a name="uploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```java
public IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference getUploadOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `storageOptionsInput`<sup>Optional</sup> <a name="storageOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptions getStorageOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `uploadOptionsInput`<sup>Optional</sup> <a name="uploadOptionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsUploadOptions getUploadOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference;

new IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference;

new IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize">putMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive">putMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize">resetMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive">resetMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumSize` <a name="putMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize"></a>

```java
public void putMaximumSize(IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `putMinimumTimeToLive` <a name="putMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive"></a>

```java
public void putMinimumTimeToLive(IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `resetMaximumSize` <a name="resetMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize"></a>

```java
public void resetMaximumSize()
```

##### `resetMinimumTimeToLive` <a name="resetMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive"></a>

```java
public void resetMinimumTimeToLive()
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation"></a>

```java
public void resetStorageLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">maximumSize</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">minimumTimeToLive</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput">maximumSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput">minimumTimeToLiveInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference getMaximumSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `minimumTimeToLive`<sup>Required</sup> <a name="minimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```java
public IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference getMinimumTimeToLive();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `maximumSizeInput`<sup>Optional</sup> <a name="maximumSizeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize getMaximumSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `minimumTimeToLiveInput`<sup>Optional</sup> <a name="minimumTimeToLiveInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive getMinimumTimeToLiveInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput"></a>

```java
public java.lang.String getStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsStorageOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---


### IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference;

new IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion"></a>

```java
public void resetConditionLanguageVersion()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput"></a>

```java
public java.lang.Number getConditionLanguageVersionInput();
```

- *Type:* java.lang.Number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignDataPartitionsUploadOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---


### IotfleetwiseCampaignSignalsToCollectList <a name="IotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToCollectList;

new IotfleetwiseCampaignSignalsToCollectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get"></a>

```java
public IotfleetwiseCampaignSignalsToCollectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToCollect> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>>

---


### IotfleetwiseCampaignSignalsToCollectOutputReference <a name="IotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToCollectOutputReference;

new IotfleetwiseCampaignSignalsToCollectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId">resetDataPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount">resetMaxSampleCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs">resetMinimumSamplingIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataPartitionId` <a name="resetDataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId"></a>

```java
public void resetDataPartitionId()
```

##### `resetMaxSampleCount` <a name="resetMaxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount"></a>

```java
public void resetMaxSampleCount()
```

##### `resetMinimumSamplingIntervalMs` <a name="resetMinimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs"></a>

```java
public void resetMinimumSamplingIntervalMs()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput">dataPartitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput">maxSampleCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput">minimumSamplingIntervalMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">dataPartitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">maxSampleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">minimumSamplingIntervalMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataPartitionIdInput`<sup>Optional</sup> <a name="dataPartitionIdInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput"></a>

```java
public java.lang.String getDataPartitionIdInput();
```

- *Type:* java.lang.String

---

##### `maxSampleCountInput`<sup>Optional</sup> <a name="maxSampleCountInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput"></a>

```java
public java.lang.Number getMaxSampleCountInput();
```

- *Type:* java.lang.Number

---

##### `minimumSamplingIntervalMsInput`<sup>Optional</sup> <a name="minimumSamplingIntervalMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput"></a>

```java
public java.lang.Number getMinimumSamplingIntervalMsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dataPartitionId`<sup>Required</sup> <a name="dataPartitionId" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```java
public java.lang.String getDataPartitionId();
```

- *Type:* java.lang.String

---

##### `maxSampleCount`<sup>Required</sup> <a name="maxSampleCount" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```java
public java.lang.Number getMaxSampleCount();
```

- *Type:* java.lang.Number

---

##### `minimumSamplingIntervalMs`<sup>Required</sup> <a name="minimumSamplingIntervalMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```java
public java.lang.Number getMinimumSamplingIntervalMs();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToCollect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>

---


### IotfleetwiseCampaignSignalsToFetchList <a name="IotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchList;

new IotfleetwiseCampaignSignalsToFetchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get"></a>

```java
public IotfleetwiseCampaignSignalsToFetchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignSignalsToFetch> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>>

---


### IotfleetwiseCampaignSignalsToFetchOutputReference <a name="IotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchOutputReference;

new IotfleetwiseCampaignSignalsToFetchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig">putSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion">resetConditionLanguageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig">resetSignalFetchConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignalFetchConfig` <a name="putSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig"></a>

```java
public void putSignalFetchConfig(IotfleetwiseCampaignSignalsToFetchSignalFetchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetConditionLanguageVersion` <a name="resetConditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion"></a>

```java
public void resetConditionLanguageVersion()
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName"></a>

```java
public void resetFullyQualifiedName()
```

##### `resetSignalFetchConfig` <a name="resetSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig"></a>

```java
public void resetSignalFetchConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">signalFetchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput">conditionLanguageVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput">signalFetchConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signalFetchConfig`<sup>Required</sup> <a name="signalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference getSignalFetchConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionLanguageVersionInput`<sup>Optional</sup> <a name="conditionLanguageVersionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput"></a>

```java
public java.lang.Number getConditionLanguageVersionInput();
```

- *Type:* java.lang.Number

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput"></a>

```java
public java.lang.String getFullyQualifiedNameInput();
```

- *Type:* java.lang.String

---

##### `signalFetchConfigInput`<sup>Optional</sup> <a name="signalFetchConfigInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfig getSignalFetchConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```java
public java.lang.Number getConditionLanguageVersion();
```

- *Type:* java.lang.Number

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression">resetConditionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode">resetTriggerMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionExpression` <a name="resetConditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression"></a>

```java
public void resetConditionExpression()
```

##### `resetTriggerMode` <a name="resetTriggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode"></a>

```java
public void resetTriggerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput">conditionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">triggerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionExpressionInput`<sup>Optional</sup> <a name="conditionExpressionInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput"></a>

```java
public java.lang.String getConditionExpressionInput();
```

- *Type:* java.lang.String

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput"></a>

```java
public java.lang.String getTriggerModeInput();
```

- *Type:* java.lang.String

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```java
public java.lang.String getTriggerMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased">putConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased">putTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased">resetConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased">resetTimeBased</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionBased` <a name="putConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased"></a>

```java
public void putConditionBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `putTimeBased` <a name="putTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased"></a>

```java
public void putTimeBased(IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `resetConditionBased` <a name="resetConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased"></a>

```java
public void resetConditionBased()
```

##### `resetTimeBased` <a name="resetTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased"></a>

```java
public void resetTimeBased()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">conditionBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">timeBased</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput">conditionBasedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput">timeBasedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionBased`<sup>Required</sup> <a name="conditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference getConditionBased();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `timeBased`<sup>Required</sup> <a name="timeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```java
public IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference getTimeBased();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `conditionBasedInput`<sup>Optional</sup> <a name="conditionBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased getConditionBasedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `timeBasedInput`<sup>Optional</sup> <a name="timeBasedInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased getTimeBasedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference;

new IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs">resetExecutionFrequencyMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionFrequencyMs` <a name="resetExecutionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs"></a>

```java
public void resetExecutionFrequencyMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput">executionFrequencyMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">executionFrequencyMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionFrequencyMsInput`<sup>Optional</sup> <a name="executionFrequencyMsInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput"></a>

```java
public java.lang.Number getExecutionFrequencyMsInput();
```

- *Type:* java.lang.Number

---

##### `executionFrequencyMs`<sup>Required</sup> <a name="executionFrequencyMs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```java
public java.lang.Number getExecutionFrequencyMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---


### IotfleetwiseCampaignTagsList <a name="IotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignTagsList;

new IotfleetwiseCampaignTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get"></a>

```java
public IotfleetwiseCampaignTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotfleetwiseCampaignTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>>

---


### IotfleetwiseCampaignTagsOutputReference <a name="IotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotfleetwise_campaign.IotfleetwiseCampaignTagsOutputReference;

new IotfleetwiseCampaignTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotfleetwiseCampaignTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>

---



