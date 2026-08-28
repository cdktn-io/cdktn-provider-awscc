# `iotfleetwiseCampaign` Submodule <a name="`iotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.iotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseCampaign <a name="IotfleetwiseCampaign" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaign(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_scheme: IotfleetwiseCampaignCollectionScheme,
  name: str,
  signal_catalog_arn: str,
  target_arn: str,
  action: str = None,
  compression: str = None,
  data_destination_configs: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs] = None,
  data_extra_dimensions: typing.List[str] = None,
  data_partitions: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions] = None,
  description: str = None,
  diagnostics_mode: str = None,
  expiry_time: str = None,
  post_trigger_collection_duration: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  signals_to_collect: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect] = None,
  signals_to_fetch: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch] = None,
  spooling_mode: str = None,
  start_time: str = None,
  tags: IResolvable | typing.List[IotfleetwiseCampaignTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.collectionScheme">collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataDestinationConfigs">data_destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataPartitions">data_partitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.diagnosticsMode">diagnostics_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.expiryTime">expiry_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.postTriggerCollectionDuration">post_trigger_collection_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToCollect">signals_to_collect</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToFetch">signals_to_fetch</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.spoolingMode">spooling_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_scheme`<sup>Required</sup> <a name="collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.collectionScheme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalCatalogArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.compression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `data_destination_configs`<sup>Optional</sup> <a name="data_destination_configs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataDestinationConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `data_extra_dimensions`<sup>Optional</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataExtraDimensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `data_partitions`<sup>Optional</sup> <a name="data_partitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.dataPartitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `diagnostics_mode`<sup>Optional</sup> <a name="diagnostics_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.diagnosticsMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `expiry_time`<sup>Optional</sup> <a name="expiry_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.expiryTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `post_trigger_collection_duration`<sup>Optional</sup> <a name="post_trigger_collection_duration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.postTriggerCollectionDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `signals_to_collect`<sup>Optional</sup> <a name="signals_to_collect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToCollect"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `signals_to_fetch`<sup>Optional</sup> <a name="signals_to_fetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.signalsToFetch"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `spooling_mode`<sup>Optional</sup> <a name="spooling_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.spoolingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme">put_collection_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs">put_data_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions">put_data_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect">put_signals_to_collect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch">put_signals_to_fetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs">reset_data_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions">reset_data_extra_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions">reset_data_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode">reset_diagnostics_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime">reset_expiry_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration">reset_post_trigger_collection_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect">reset_signals_to_collect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch">reset_signals_to_fetch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode">reset_spooling_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_collection_scheme` <a name="put_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme"></a>

```python
def put_collection_scheme(
  condition_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme = None,
  time_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme = None
) -> None
```

###### `condition_based_collection_scheme`<sup>Optional</sup> <a name="condition_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.conditionBasedCollectionScheme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

###### `time_based_collection_scheme`<sup>Optional</sup> <a name="time_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putCollectionScheme.parameter.timeBasedCollectionScheme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

##### `put_data_destination_configs` <a name="put_data_destination_configs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs"></a>

```python
def put_data_destination_configs(
  value: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataDestinationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]

---

##### `put_data_partitions` <a name="put_data_partitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions"></a>

```python
def put_data_partitions(
  value: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putDataPartitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]

---

##### `put_signals_to_collect` <a name="put_signals_to_collect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect"></a>

```python
def put_signals_to_collect(
  value: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToCollect.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]

---

##### `put_signals_to_fetch` <a name="put_signals_to_fetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch"></a>

```python
def put_signals_to_fetch(
  value: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putSignalsToFetch.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotfleetwiseCampaignTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_data_destination_configs` <a name="reset_data_destination_configs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataDestinationConfigs"></a>

```python
def reset_data_destination_configs() -> None
```

##### `reset_data_extra_dimensions` <a name="reset_data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataExtraDimensions"></a>

```python
def reset_data_extra_dimensions() -> None
```

##### `reset_data_partitions` <a name="reset_data_partitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDataPartitions"></a>

```python
def reset_data_partitions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_diagnostics_mode` <a name="reset_diagnostics_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetDiagnosticsMode"></a>

```python
def reset_diagnostics_mode() -> None
```

##### `reset_expiry_time` <a name="reset_expiry_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetExpiryTime"></a>

```python
def reset_expiry_time() -> None
```

##### `reset_post_trigger_collection_duration` <a name="reset_post_trigger_collection_duration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPostTriggerCollectionDuration"></a>

```python
def reset_post_trigger_collection_duration() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_signals_to_collect` <a name="reset_signals_to_collect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToCollect"></a>

```python
def reset_signals_to_collect() -> None
```

##### `reset_signals_to_fetch` <a name="reset_signals_to_fetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSignalsToFetch"></a>

```python
def reset_signals_to_fetch() -> None
```

##### `reset_spooling_mode` <a name="reset_spooling_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetSpoolingMode"></a>

```python
def reset_spooling_mode() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isConstruct"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaign.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaign.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaign.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaign.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotfleetwiseCampaign to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme">collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs">data_destination_configs</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions">data_partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect">signals_to_collect</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch">signals_to_fetch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput">collection_scheme_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput">data_destination_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput">data_extra_dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput">data_partitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput">diagnostics_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput">expiry_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput">post_trigger_collection_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput">signal_catalog_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput">signals_to_collect_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput">signals_to_fetch_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput">spooling_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode">diagnostics_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime">expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration">post_trigger_collection_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode">spooling_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collection_scheme`<sup>Required</sup> <a name="collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionScheme"></a>

```python
collection_scheme: IotfleetwiseCampaignCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_destination_configs`<sup>Required</sup> <a name="data_destination_configs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```python
data_destination_configs: IotfleetwiseCampaignDataDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList">IotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `data_partitions`<sup>Required</sup> <a name="data_partitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitions"></a>

```python
data_partitions: IotfleetwiseCampaignDataPartitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList">IotfleetwiseCampaignDataPartitionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `signals_to_collect`<sup>Required</sup> <a name="signals_to_collect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollect"></a>

```python
signals_to_collect: IotfleetwiseCampaignSignalsToCollectList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList">IotfleetwiseCampaignSignalsToCollectList</a>

---

##### `signals_to_fetch`<sup>Required</sup> <a name="signals_to_fetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetch"></a>

```python
signals_to_fetch: IotfleetwiseCampaignSignalsToFetchList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList">IotfleetwiseCampaignSignalsToFetchList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tags"></a>

```python
tags: IotfleetwiseCampaignTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList">IotfleetwiseCampaignTagsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `collection_scheme_input`<sup>Optional</sup> <a name="collection_scheme_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.collectionSchemeInput"></a>

```python
collection_scheme_input: IResolvable | IotfleetwiseCampaignCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `data_destination_configs_input`<sup>Optional</sup> <a name="data_destination_configs_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataDestinationConfigsInput"></a>

```python
data_destination_configs_input: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]

---

##### `data_extra_dimensions_input`<sup>Optional</sup> <a name="data_extra_dimensions_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensionsInput"></a>

```python
data_extra_dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_partitions_input`<sup>Optional</sup> <a name="data_partitions_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataPartitionsInput"></a>

```python
data_partitions_input: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `diagnostics_mode_input`<sup>Optional</sup> <a name="diagnostics_mode_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsModeInput"></a>

```python
diagnostics_mode_input: str
```

- *Type:* str

---

##### `expiry_time_input`<sup>Optional</sup> <a name="expiry_time_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTimeInput"></a>

```python
expiry_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `post_trigger_collection_duration_input`<sup>Optional</sup> <a name="post_trigger_collection_duration_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDurationInput"></a>

```python
post_trigger_collection_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signal_catalog_arn_input`<sup>Optional</sup> <a name="signal_catalog_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArnInput"></a>

```python
signal_catalog_arn_input: str
```

- *Type:* str

---

##### `signals_to_collect_input`<sup>Optional</sup> <a name="signals_to_collect_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToCollectInput"></a>

```python
signals_to_collect_input: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]

---

##### `signals_to_fetch_input`<sup>Optional</sup> <a name="signals_to_fetch_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalsToFetchInput"></a>

```python
signals_to_fetch_input: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]

---

##### `spooling_mode_input`<sup>Optional</sup> <a name="spooling_mode_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingModeInput"></a>

```python
spooling_mode_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotfleetwiseCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `data_extra_dimensions`<sup>Required</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.dataExtraDimensions"></a>

```python
data_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `diagnostics_mode`<sup>Required</sup> <a name="diagnostics_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.diagnosticsMode"></a>

```python
diagnostics_mode: str
```

- *Type:* str

---

##### `expiry_time`<sup>Required</sup> <a name="expiry_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.expiryTime"></a>

```python
expiry_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `post_trigger_collection_duration`<sup>Required</sup> <a name="post_trigger_collection_duration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```python
post_trigger_collection_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.signalCatalogArn"></a>

```python
signal_catalog_arn: str
```

- *Type:* str

---

##### `spooling_mode`<sup>Required</sup> <a name="spooling_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.spoolingMode"></a>

```python
spooling_mode: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaign.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignCollectionScheme <a name="IotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme(
  condition_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme = None,
  time_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme">condition_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme">time_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}. |

---

##### `condition_based_collection_scheme`<sup>Optional</sup> <a name="condition_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.conditionBasedCollectionScheme"></a>

```python
condition_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based_collection_scheme IotfleetwiseCampaign#condition_based_collection_scheme}.

---

##### `time_based_collection_scheme`<sup>Optional</sup> <a name="time_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme.property.timeBasedCollectionScheme"></a>

```python
time_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based_collection_scheme IotfleetwiseCampaign#time_based_collection_scheme}.

---

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme(
  condition_language_version: typing.Union[int, float] = None,
  expression: str = None,
  minimum_trigger_interval_ms: typing.Union[int, float] = None,
  trigger_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs">minimum_trigger_interval_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode">trigger_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `condition_language_version`<sup>Optional</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `minimum_trigger_interval_ms`<sup>Optional</sup> <a name="minimum_trigger_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.minimumTriggerIntervalMs"></a>

```python
minimum_trigger_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

##### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme(
  period_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}. |

---

##### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

### IotfleetwiseCampaignConfig <a name="IotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_scheme: IotfleetwiseCampaignCollectionScheme,
  name: str,
  signal_catalog_arn: str,
  target_arn: str,
  action: str = None,
  compression: str = None,
  data_destination_configs: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs] = None,
  data_extra_dimensions: typing.List[str] = None,
  data_partitions: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions] = None,
  description: str = None,
  diagnostics_mode: str = None,
  expiry_time: str = None,
  post_trigger_collection_duration: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  signals_to_collect: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect] = None,
  signals_to_fetch: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch] = None,
  spooling_mode: str = None,
  start_time: str = None,
  tags: IResolvable | typing.List[IotfleetwiseCampaignTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme">collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs">data_destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions">data_partitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode">diagnostics_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime">expiry_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration">post_trigger_collection_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect">signals_to_collect</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch">signals_to_fetch</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode">spooling_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_scheme`<sup>Required</sup> <a name="collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.collectionScheme"></a>

```python
collection_scheme: IotfleetwiseCampaignCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#collection_scheme IotfleetwiseCampaign#collection_scheme}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalCatalogArn"></a>

```python
signal_catalog_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_catalog_arn IotfleetwiseCampaign#signal_catalog_arn}.

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#target_arn IotfleetwiseCampaign#target_arn}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#action IotfleetwiseCampaign#action}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#compression IotfleetwiseCampaign#compression}.

---

##### `data_destination_configs`<sup>Optional</sup> <a name="data_destination_configs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataDestinationConfigs"></a>

```python
data_destination_configs: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_destination_configs IotfleetwiseCampaign#data_destination_configs}.

---

##### `data_extra_dimensions`<sup>Optional</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataExtraDimensions"></a>

```python
data_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_extra_dimensions IotfleetwiseCampaign#data_extra_dimensions}.

---

##### `data_partitions`<sup>Optional</sup> <a name="data_partitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.dataPartitions"></a>

```python
data_partitions: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partitions IotfleetwiseCampaign#data_partitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#description IotfleetwiseCampaign#description}.

---

##### `diagnostics_mode`<sup>Optional</sup> <a name="diagnostics_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.diagnosticsMode"></a>

```python
diagnostics_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#diagnostics_mode IotfleetwiseCampaign#diagnostics_mode}.

---

##### `expiry_time`<sup>Optional</sup> <a name="expiry_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.expiryTime"></a>

```python
expiry_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expiry_time IotfleetwiseCampaign#expiry_time}.

---

##### `post_trigger_collection_duration`<sup>Optional</sup> <a name="post_trigger_collection_duration" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.postTriggerCollectionDuration"></a>

```python
post_trigger_collection_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#post_trigger_collection_duration IotfleetwiseCampaign#post_trigger_collection_duration}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#priority IotfleetwiseCampaign#priority}.

---

##### `signals_to_collect`<sup>Optional</sup> <a name="signals_to_collect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToCollect"></a>

```python
signals_to_collect: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_collect IotfleetwiseCampaign#signals_to_collect}.

---

##### `signals_to_fetch`<sup>Optional</sup> <a name="signals_to_fetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.signalsToFetch"></a>

```python
signals_to_fetch: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signals_to_fetch IotfleetwiseCampaign#signals_to_fetch}.

---

##### `spooling_mode`<sup>Optional</sup> <a name="spooling_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.spoolingMode"></a>

```python
spooling_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#spooling_mode IotfleetwiseCampaign#spooling_mode}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#start_time IotfleetwiseCampaign#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotfleetwiseCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#tags IotfleetwiseCampaign#tags}.

---

### IotfleetwiseCampaignDataDestinationConfigs <a name="IotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs(
  mqtt_topic_config: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig = None,
  s3_config: IotfleetwiseCampaignDataDestinationConfigsS3Config = None,
  timestream_config: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig">mqtt_topic_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig">timestream_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}. |

---

##### `mqtt_topic_config`<sup>Optional</sup> <a name="mqtt_topic_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.mqttTopicConfig"></a>

```python
mqtt_topic_config: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#mqtt_topic_config IotfleetwiseCampaign#mqtt_topic_config}.

---

##### `s3_config`<sup>Optional</sup> <a name="s3_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.s3Config"></a>

```python
s3_config: IotfleetwiseCampaignDataDestinationConfigsS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#s3_config IotfleetwiseCampaign#s3_config}.

---

##### `timestream_config`<sup>Optional</sup> <a name="timestream_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs.property.timestreamConfig"></a>

```python
timestream_config: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#timestream_config IotfleetwiseCampaign#timestream_config}.

---

### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig(
  execution_role_arn: str = None,
  mqtt_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn">mqtt_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}. |

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `mqtt_topic_arn`<sup>Optional</sup> <a name="mqtt_topic_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.property.mqttTopicArn"></a>

```python
mqtt_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

### IotfleetwiseCampaignDataDestinationConfigsS3Config <a name="IotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config(
  bucket_arn: str = None,
  data_format: str = None,
  prefix: str = None,
  storage_compression_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat">storage_compression_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}. |

---

##### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

##### `storage_compression_format`<sup>Optional</sup> <a name="storage_compression_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config.property.storageCompressionFormat"></a>

```python
storage_compression_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig(
  execution_role_arn: str = None,
  timestream_table_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn">timestream_table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}. |

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

##### `timestream_table_arn`<sup>Optional</sup> <a name="timestream_table_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.property.timestreamTableArn"></a>

```python
timestream_table_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

### IotfleetwiseCampaignDataPartitions <a name="IotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions(
  id: str = None,
  storage_options: IotfleetwiseCampaignDataPartitionsStorageOptions = None,
  upload_options: IotfleetwiseCampaignDataPartitionsUploadOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions">storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions">upload_options</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#id IotfleetwiseCampaign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_options`<sup>Optional</sup> <a name="storage_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.storageOptions"></a>

```python
storage_options: IotfleetwiseCampaignDataPartitionsStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_options IotfleetwiseCampaign#storage_options}.

---

##### `upload_options`<sup>Optional</sup> <a name="upload_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions.property.uploadOptions"></a>

```python
upload_options: IotfleetwiseCampaignDataPartitionsUploadOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#upload_options IotfleetwiseCampaign#upload_options}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptions <a name="IotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions(
  maximum_size: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize = None,
  minimum_time_to_live: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive = None,
  storage_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize">maximum_size</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive">minimum_time_to_live</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}. |

---

##### `maximum_size`<sup>Optional</sup> <a name="maximum_size" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.maximumSize"></a>

```python
maximum_size: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

##### `minimum_time_to_live`<sup>Optional</sup> <a name="minimum_time_to_live" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.minimumTimeToLive"></a>

```python
minimum_time_to_live: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

### IotfleetwiseCampaignDataPartitionsUploadOptions <a name="IotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions(
  condition_language_version: typing.Union[int, float] = None,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}. |

---

##### `condition_language_version`<sup>Optional</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

### IotfleetwiseCampaignSignalsToCollect <a name="IotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect(
  data_partition_id: str = None,
  max_sample_count: typing.Union[int, float] = None,
  minimum_sampling_interval_ms: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId">data_partition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount">max_sample_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs">minimum_sampling_interval_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}. |

---

##### `data_partition_id`<sup>Optional</sup> <a name="data_partition_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.dataPartitionId"></a>

```python
data_partition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_partition_id IotfleetwiseCampaign#data_partition_id}.

---

##### `max_sample_count`<sup>Optional</sup> <a name="max_sample_count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.maxSampleCount"></a>

```python
max_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#max_sample_count IotfleetwiseCampaign#max_sample_count}.

---

##### `minimum_sampling_interval_ms`<sup>Optional</sup> <a name="minimum_sampling_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.minimumSamplingIntervalMs"></a>

```python
minimum_sampling_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_sampling_interval_ms IotfleetwiseCampaign#minimum_sampling_interval_ms}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#name IotfleetwiseCampaign#name}.

---

### IotfleetwiseCampaignSignalsToFetch <a name="IotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch(
  actions: typing.List[str] = None,
  condition_language_version: typing.Union[int, float] = None,
  fully_qualified_name: str = None,
  signal_fetch_config: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig">signal_fetch_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#actions IotfleetwiseCampaign#actions}.

---

##### `condition_language_version`<sup>Optional</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

##### `fully_qualified_name`<sup>Optional</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#fully_qualified_name IotfleetwiseCampaign#fully_qualified_name}.

---

##### `signal_fetch_config`<sup>Optional</sup> <a name="signal_fetch_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch.property.signalFetchConfig"></a>

```python
signal_fetch_config: IotfleetwiseCampaignSignalsToFetchSignalFetchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#signal_fetch_config IotfleetwiseCampaign#signal_fetch_config}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig(
  condition_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased = None,
  time_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased">condition_based</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased">time_based</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}. |

---

##### `condition_based`<sup>Optional</sup> <a name="condition_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.conditionBased"></a>

```python
condition_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

##### `time_based`<sup>Optional</sup> <a name="time_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig.property.timeBased"></a>

```python
time_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased(
  condition_expression: str = None,
  trigger_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression">condition_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode">trigger_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}. |

---

##### `condition_expression`<sup>Optional</sup> <a name="condition_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

##### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased(
  execution_frequency_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs">execution_frequency_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}. |

---

##### `execution_frequency_ms`<sup>Optional</sup> <a name="execution_frequency_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.property.executionFrequencyMs"></a>

```python
execution_frequency_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

### IotfleetwiseCampaignTags <a name="IotfleetwiseCampaignTags" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#key IotfleetwiseCampaign#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion">reset_condition_language_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs">reset_minimum_trigger_interval_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode">reset_trigger_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_language_version` <a name="reset_condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetConditionLanguageVersion"></a>

```python
def reset_condition_language_version() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_minimum_trigger_interval_ms` <a name="reset_minimum_trigger_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetMinimumTriggerIntervalMs"></a>

```python
def reset_minimum_trigger_interval_ms() -> None
```

##### `reset_trigger_mode` <a name="reset_trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resetTriggerMode"></a>

```python
def reset_trigger_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput">condition_language_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput">minimum_trigger_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput">trigger_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">minimum_trigger_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_language_version_input`<sup>Optional</sup> <a name="condition_language_version_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersionInput"></a>

```python
condition_language_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `minimum_trigger_interval_ms_input`<sup>Optional</sup> <a name="minimum_trigger_interval_ms_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMsInput"></a>

```python
minimum_trigger_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_mode_input`<sup>Optional</sup> <a name="trigger_mode_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerModeInput"></a>

```python
trigger_mode_input: str
```

- *Type:* str

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `minimum_trigger_interval_ms`<sup>Required</sup> <a name="minimum_trigger_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```python
minimum_trigger_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme">put_condition_based_collection_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme">put_time_based_collection_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme">reset_condition_based_collection_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme">reset_time_based_collection_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_based_collection_scheme` <a name="put_condition_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme"></a>

```python
def put_condition_based_collection_scheme(
  condition_language_version: typing.Union[int, float] = None,
  expression: str = None,
  minimum_trigger_interval_ms: typing.Union[int, float] = None,
  trigger_mode: str = None
) -> None
```

###### `condition_language_version`<sup>Optional</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.conditionLanguageVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

###### `minimum_trigger_interval_ms`<sup>Optional</sup> <a name="minimum_trigger_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.minimumTriggerIntervalMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_trigger_interval_ms IotfleetwiseCampaign#minimum_trigger_interval_ms}.

---

###### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putConditionBasedCollectionScheme.parameter.triggerMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

##### `put_time_based_collection_scheme` <a name="put_time_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme"></a>

```python
def put_time_based_collection_scheme(
  period_ms: typing.Union[int, float] = None
) -> None
```

###### `period_ms`<sup>Optional</sup> <a name="period_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.putTimeBasedCollectionScheme.parameter.periodMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#period_ms IotfleetwiseCampaign#period_ms}.

---

##### `reset_condition_based_collection_scheme` <a name="reset_condition_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetConditionBasedCollectionScheme"></a>

```python
def reset_condition_based_collection_scheme() -> None
```

##### `reset_time_based_collection_scheme` <a name="reset_time_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.resetTimeBasedCollectionScheme"></a>

```python
def reset_time_based_collection_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">condition_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">time_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput">condition_based_collection_scheme_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput">time_based_collection_scheme_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_based_collection_scheme`<sup>Required</sup> <a name="condition_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```python
condition_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `time_based_collection_scheme`<sup>Required</sup> <a name="time_based_collection_scheme" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```python
time_based_collection_scheme: IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `condition_based_collection_scheme_input`<sup>Optional</sup> <a name="condition_based_collection_scheme_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionSchemeInput"></a>

```python
condition_based_collection_scheme_input: IResolvable | IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---

##### `time_based_collection_scheme_input`<sup>Optional</sup> <a name="time_based_collection_scheme_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionSchemeInput"></a>

```python
time_based_collection_scheme_input: IResolvable | IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionScheme">IotfleetwiseCampaignCollectionScheme</a>

---


### IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs">reset_period_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period_ms` <a name="reset_period_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resetPeriodMs"></a>

```python
def reset_period_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput">period_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms_input`<sup>Optional</sup> <a name="period_ms_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMsInput"></a>

```python
period_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">IotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---


### IotfleetwiseCampaignDataDestinationConfigsList <a name="IotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseCampaignDataDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseCampaignDataDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>]

---


### IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn">reset_mqtt_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_mqtt_topic_arn` <a name="reset_mqtt_topic_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resetMqttTopicArn"></a>

```python
def reset_mqtt_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput">mqtt_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">mqtt_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `mqtt_topic_arn_input`<sup>Optional</sup> <a name="mqtt_topic_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArnInput"></a>

```python
mqtt_topic_arn_input: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `mqtt_topic_arn`<sup>Required</sup> <a name="mqtt_topic_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```python
mqtt_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---


### IotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig">put_mqtt_topic_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config">put_s3_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig">put_timestream_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig">reset_mqtt_topic_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config">reset_s3_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig">reset_timestream_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mqtt_topic_config` <a name="put_mqtt_topic_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig"></a>

```python
def put_mqtt_topic_config(
  execution_role_arn: str = None,
  mqtt_topic_arn: str = None
) -> None
```

###### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

###### `mqtt_topic_arn`<sup>Optional</sup> <a name="mqtt_topic_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putMqttTopicConfig.parameter.mqttTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#mqtt_topic_arn IotfleetwiseCampaign#mqtt_topic_arn}.

---

##### `put_s3_config` <a name="put_s3_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config"></a>

```python
def put_s3_config(
  bucket_arn: str = None,
  data_format: str = None,
  prefix: str = None,
  storage_compression_format: str = None
) -> None
```

###### `bucket_arn`<sup>Optional</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.bucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#bucket_arn IotfleetwiseCampaign#bucket_arn}.

---

###### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.dataFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#data_format IotfleetwiseCampaign#data_format}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#prefix IotfleetwiseCampaign#prefix}.

---

###### `storage_compression_format`<sup>Optional</sup> <a name="storage_compression_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putS3Config.parameter.storageCompressionFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_compression_format IotfleetwiseCampaign#storage_compression_format}.

---

##### `put_timestream_config` <a name="put_timestream_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig"></a>

```python
def put_timestream_config(
  execution_role_arn: str = None,
  timestream_table_arn: str = None
) -> None
```

###### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_role_arn IotfleetwiseCampaign#execution_role_arn}.

---

###### `timestream_table_arn`<sup>Optional</sup> <a name="timestream_table_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.putTimestreamConfig.parameter.timestreamTableArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#timestream_table_arn IotfleetwiseCampaign#timestream_table_arn}.

---

##### `reset_mqtt_topic_config` <a name="reset_mqtt_topic_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetMqttTopicConfig"></a>

```python
def reset_mqtt_topic_config() -> None
```

##### `reset_s3_config` <a name="reset_s3_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetS3Config"></a>

```python
def reset_s3_config() -> None
```

##### `reset_timestream_config` <a name="reset_timestream_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.resetTimestreamConfig"></a>

```python
def reset_timestream_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">mqtt_topic_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">timestream_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput">mqtt_topic_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput">s3_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput">timestream_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqtt_topic_config`<sup>Required</sup> <a name="mqtt_topic_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```python
mqtt_topic_config: IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```python
s3_config: IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `timestream_config`<sup>Required</sup> <a name="timestream_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```python
timestream_config: IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `mqtt_topic_config_input`<sup>Optional</sup> <a name="mqtt_topic_config_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfigInput"></a>

```python
mqtt_topic_config_input: IResolvable | IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">IotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---

##### `s3_config_input`<sup>Optional</sup> <a name="s3_config_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3ConfigInput"></a>

```python
s3_config_input: IResolvable | IotfleetwiseCampaignDataDestinationConfigsS3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---

##### `timestream_config_input`<sup>Optional</sup> <a name="timestream_config_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfigInput"></a>

```python
timestream_config_input: IResolvable | IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataDestinationConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigs">IotfleetwiseCampaignDataDestinationConfigs</a>

---


### IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn">reset_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat">reset_storage_compression_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_arn` <a name="reset_bucket_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetBucketArn"></a>

```python
def reset_bucket_arn() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_storage_compression_format` <a name="reset_storage_compression_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resetStorageCompressionFormat"></a>

```python
def reset_storage_compression_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput">storage_compression_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">storage_compression_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `storage_compression_format_input`<sup>Optional</sup> <a name="storage_compression_format_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormatInput"></a>

```python
storage_compression_format_input: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_compression_format`<sup>Required</sup> <a name="storage_compression_format" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```python
storage_compression_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataDestinationConfigsS3Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsS3Config">IotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---


### IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn">reset_timestream_table_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_timestream_table_arn` <a name="reset_timestream_table_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resetTimestreamTableArn"></a>

```python
def reset_timestream_table_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput">timestream_table_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">timestream_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `timestream_table_arn_input`<sup>Optional</sup> <a name="timestream_table_arn_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArnInput"></a>

```python
timestream_table_arn_input: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `timestream_table_arn`<sup>Required</sup> <a name="timestream_table_arn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```python
timestream_table_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">IotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---


### IotfleetwiseCampaignDataPartitionsList <a name="IotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseCampaignDataPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseCampaignDataPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>]

---


### IotfleetwiseCampaignDataPartitionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions">put_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions">put_upload_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions">reset_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions">reset_upload_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_options` <a name="put_storage_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions"></a>

```python
def put_storage_options(
  maximum_size: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize = None,
  minimum_time_to_live: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive = None,
  storage_location: str = None
) -> None
```

###### `maximum_size`<sup>Optional</sup> <a name="maximum_size" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.maximumSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#maximum_size IotfleetwiseCampaign#maximum_size}.

---

###### `minimum_time_to_live`<sup>Optional</sup> <a name="minimum_time_to_live" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.minimumTimeToLive"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#minimum_time_to_live IotfleetwiseCampaign#minimum_time_to_live}.

---

###### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putStorageOptions.parameter.storageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#storage_location IotfleetwiseCampaign#storage_location}.

---

##### `put_upload_options` <a name="put_upload_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions"></a>

```python
def put_upload_options(
  condition_language_version: typing.Union[int, float] = None,
  expression: str = None
) -> None
```

###### `condition_language_version`<sup>Optional</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.conditionLanguageVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_language_version IotfleetwiseCampaign#condition_language_version}.

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.putUploadOptions.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#expression IotfleetwiseCampaign#expression}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_options` <a name="reset_storage_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetStorageOptions"></a>

```python
def reset_storage_options() -> None
```

##### `reset_upload_options` <a name="reset_upload_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.resetUploadOptions"></a>

```python
def reset_upload_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">upload_options</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput">storage_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput">upload_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_options`<sup>Required</sup> <a name="storage_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```python
storage_options: IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `upload_options`<sup>Required</sup> <a name="upload_options" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```python
upload_options: IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_options_input`<sup>Optional</sup> <a name="storage_options_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptionsInput"></a>

```python
storage_options_input: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---

##### `upload_options_input`<sup>Optional</sup> <a name="upload_options_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptionsInput"></a>

```python
upload_options_input: IResolvable | IotfleetwiseCampaignDataPartitionsUploadOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataPartitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitions">IotfleetwiseCampaignDataPartitions</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---


### IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize">put_maximum_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive">put_minimum_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize">reset_maximum_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive">reset_minimum_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maximum_size` <a name="put_maximum_size" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize"></a>

```python
def put_maximum_size(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMaximumSize.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

##### `put_minimum_time_to_live` <a name="put_minimum_time_to_live" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive"></a>

```python
def put_minimum_time_to_live(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#unit IotfleetwiseCampaign#unit}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.putMinimumTimeToLive.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#value IotfleetwiseCampaign#value}.

---

##### `reset_maximum_size` <a name="reset_maximum_size" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMaximumSize"></a>

```python
def reset_maximum_size() -> None
```

##### `reset_minimum_time_to_live` <a name="reset_minimum_time_to_live" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetMinimumTimeToLive"></a>

```python
def reset_minimum_time_to_live() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">maximum_size</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">minimum_time_to_live</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput">maximum_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput">minimum_time_to_live_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```python
maximum_size: IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `minimum_time_to_live`<sup>Required</sup> <a name="minimum_time_to_live" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```python
minimum_time_to_live: IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `maximum_size_input`<sup>Optional</sup> <a name="maximum_size_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSizeInput"></a>

```python
maximum_size_input: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">IotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---

##### `minimum_time_to_live_input`<sup>Optional</sup> <a name="minimum_time_to_live_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLiveInput"></a>

```python
minimum_time_to_live_input: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">IotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataPartitionsStorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsStorageOptions">IotfleetwiseCampaignDataPartitionsStorageOptions</a>

---


### IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion">reset_condition_language_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_language_version` <a name="reset_condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetConditionLanguageVersion"></a>

```python
def reset_condition_language_version() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput">condition_language_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_language_version_input`<sup>Optional</sup> <a name="condition_language_version_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersionInput"></a>

```python
condition_language_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignDataPartitionsUploadOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignDataPartitionsUploadOptions">IotfleetwiseCampaignDataPartitionsUploadOptions</a>

---


### IotfleetwiseCampaignSignalsToCollectList <a name="IotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseCampaignSignalsToCollectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseCampaignSignalsToCollect]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>]

---


### IotfleetwiseCampaignSignalsToCollectOutputReference <a name="IotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId">reset_data_partition_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount">reset_max_sample_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs">reset_minimum_sampling_interval_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_partition_id` <a name="reset_data_partition_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetDataPartitionId"></a>

```python
def reset_data_partition_id() -> None
```

##### `reset_max_sample_count` <a name="reset_max_sample_count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMaxSampleCount"></a>

```python
def reset_max_sample_count() -> None
```

##### `reset_minimum_sampling_interval_ms` <a name="reset_minimum_sampling_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetMinimumSamplingIntervalMs"></a>

```python
def reset_minimum_sampling_interval_ms() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput">data_partition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput">max_sample_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput">minimum_sampling_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">data_partition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">max_sample_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">minimum_sampling_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_partition_id_input`<sup>Optional</sup> <a name="data_partition_id_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionIdInput"></a>

```python
data_partition_id_input: str
```

- *Type:* str

---

##### `max_sample_count_input`<sup>Optional</sup> <a name="max_sample_count_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCountInput"></a>

```python
max_sample_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_sampling_interval_ms_input`<sup>Optional</sup> <a name="minimum_sampling_interval_ms_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMsInput"></a>

```python
minimum_sampling_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `data_partition_id`<sup>Required</sup> <a name="data_partition_id" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```python
data_partition_id: str
```

- *Type:* str

---

##### `max_sample_count`<sup>Required</sup> <a name="max_sample_count" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```python
max_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_sampling_interval_ms`<sup>Required</sup> <a name="minimum_sampling_interval_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```python
minimum_sampling_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignSignalsToCollect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToCollect">IotfleetwiseCampaignSignalsToCollect</a>

---


### IotfleetwiseCampaignSignalsToFetchList <a name="IotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseCampaignSignalsToFetchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseCampaignSignalsToFetch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>]

---


### IotfleetwiseCampaignSignalsToFetchOutputReference <a name="IotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig">put_signal_fetch_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion">reset_condition_language_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName">reset_fully_qualified_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig">reset_signal_fetch_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_signal_fetch_config` <a name="put_signal_fetch_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig"></a>

```python
def put_signal_fetch_config(
  condition_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased = None,
  time_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased = None
) -> None
```

###### `condition_based`<sup>Optional</sup> <a name="condition_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.conditionBased"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_based IotfleetwiseCampaign#condition_based}.

---

###### `time_based`<sup>Optional</sup> <a name="time_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.putSignalFetchConfig.parameter.timeBased"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#time_based IotfleetwiseCampaign#time_based}.

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_condition_language_version` <a name="reset_condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetConditionLanguageVersion"></a>

```python
def reset_condition_language_version() -> None
```

##### `reset_fully_qualified_name` <a name="reset_fully_qualified_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetFullyQualifiedName"></a>

```python
def reset_fully_qualified_name() -> None
```

##### `reset_signal_fetch_config` <a name="reset_signal_fetch_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.resetSignalFetchConfig"></a>

```python
def reset_signal_fetch_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">signal_fetch_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput">condition_language_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput">fully_qualified_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput">signal_fetch_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signal_fetch_config`<sup>Required</sup> <a name="signal_fetch_config" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```python
signal_fetch_config: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_language_version_input`<sup>Optional</sup> <a name="condition_language_version_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersionInput"></a>

```python
condition_language_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_name_input`<sup>Optional</sup> <a name="fully_qualified_name_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedNameInput"></a>

```python
fully_qualified_name_input: str
```

- *Type:* str

---

##### `signal_fetch_config_input`<sup>Optional</sup> <a name="signal_fetch_config_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfigInput"></a>

```python
signal_fetch_config_input: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignSignalsToFetch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetch">IotfleetwiseCampaignSignalsToFetch</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression">reset_condition_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode">reset_trigger_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_expression` <a name="reset_condition_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetConditionExpression"></a>

```python
def reset_condition_expression() -> None
```

##### `reset_trigger_mode` <a name="reset_trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resetTriggerMode"></a>

```python
def reset_trigger_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput">condition_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput">trigger_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">condition_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_expression_input`<sup>Optional</sup> <a name="condition_expression_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpressionInput"></a>

```python
condition_expression_input: str
```

- *Type:* str

---

##### `trigger_mode_input`<sup>Optional</sup> <a name="trigger_mode_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerModeInput"></a>

```python
trigger_mode_input: str
```

- *Type:* str

---

##### `condition_expression`<sup>Required</sup> <a name="condition_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased">put_condition_based</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased">put_time_based</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased">reset_condition_based</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased">reset_time_based</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_based` <a name="put_condition_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased"></a>

```python
def put_condition_based(
  condition_expression: str = None,
  trigger_mode: str = None
) -> None
```

###### `condition_expression`<sup>Optional</sup> <a name="condition_expression" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.conditionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#condition_expression IotfleetwiseCampaign#condition_expression}.

---

###### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putConditionBased.parameter.triggerMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#trigger_mode IotfleetwiseCampaign#trigger_mode}.

---

##### `put_time_based` <a name="put_time_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased"></a>

```python
def put_time_based(
  execution_frequency_ms: typing.Union[int, float] = None
) -> None
```

###### `execution_frequency_ms`<sup>Optional</sup> <a name="execution_frequency_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.putTimeBased.parameter.executionFrequencyMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_campaign#execution_frequency_ms IotfleetwiseCampaign#execution_frequency_ms}.

---

##### `reset_condition_based` <a name="reset_condition_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetConditionBased"></a>

```python
def reset_condition_based() -> None
```

##### `reset_time_based` <a name="reset_time_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resetTimeBased"></a>

```python
def reset_time_based() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">condition_based</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">time_based</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput">condition_based_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput">time_based_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_based`<sup>Required</sup> <a name="condition_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```python
condition_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `time_based`<sup>Required</sup> <a name="time_based" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```python
time_based: IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `condition_based_input`<sup>Optional</sup> <a name="condition_based_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBasedInput"></a>

```python
condition_based_input: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---

##### `time_based_input`<sup>Optional</sup> <a name="time_based_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBasedInput"></a>

```python
time_based_input: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfig">IotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---


### IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs">reset_execution_frequency_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_frequency_ms` <a name="reset_execution_frequency_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resetExecutionFrequencyMs"></a>

```python
def reset_execution_frequency_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput">execution_frequency_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">execution_frequency_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_frequency_ms_input`<sup>Optional</sup> <a name="execution_frequency_ms_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMsInput"></a>

```python
execution_frequency_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_frequency_ms`<sup>Required</sup> <a name="execution_frequency_ms" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```python
execution_frequency_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">IotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---


### IotfleetwiseCampaignTagsList <a name="IotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>]

---


### IotfleetwiseCampaignTagsOutputReference <a name="IotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_campaign

iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseCampaignTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseCampaign.IotfleetwiseCampaignTags">IotfleetwiseCampaignTags</a>

---



