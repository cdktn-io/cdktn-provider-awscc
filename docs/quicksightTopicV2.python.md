# `quicksightTopicV2` Submodule <a name="`quicksightTopicV2` Submodule" id="@cdktn/provider-awscc.quicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTopicV2 <a name="QuicksightTopicV2" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  custom_instructions: QuicksightTopicV2CustomInstructions = None,
  data_set_relations: IResolvable | typing.List[QuicksightTopicV2DataSetRelations] = None,
  data_sets: IResolvable | typing.List[QuicksightTopicV2DataSets] = None,
  description: str = None,
  folder_arns: typing.List[str] = None,
  name: str = None,
  permissions: IResolvable | typing.List[QuicksightTopicV2Permissions] = None,
  tags: IResolvable | typing.List[QuicksightTopicV2Tags] = None,
  topic_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.customInstructions">custom_instructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSetRelations">data_set_relations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSets">data_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.folderArns">folder_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.topicId">topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `custom_instructions`<sup>Optional</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.customInstructions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `data_set_relations`<sup>Optional</sup> <a name="data_set_relations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSetRelations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `data_sets`<sup>Optional</sup> <a name="data_sets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.dataSets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `folder_arns`<sup>Optional</sup> <a name="folder_arns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.folderArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.permissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `topic_id`<sup>Optional</sup> <a name="topic_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.topicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions">put_custom_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations">put_data_set_relations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets">put_data_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions">reset_custom_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations">reset_data_set_relations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets">reset_data_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns">reset_folder_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId">reset_topic_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_instructions` <a name="put_custom_instructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions"></a>

```python
def put_custom_instructions(
  custom_instructions_string: str = None
) -> None
```

###### `custom_instructions_string`<sup>Optional</sup> <a name="custom_instructions_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions.parameter.customInstructionsString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}.

---

##### `put_data_set_relations` <a name="put_data_set_relations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations"></a>

```python
def put_data_set_relations(
  value: IResolvable | typing.List[QuicksightTopicV2DataSetRelations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]

---

##### `put_data_sets` <a name="put_data_sets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets"></a>

```python
def put_data_sets(
  value: IResolvable | typing.List[QuicksightTopicV2DataSets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[QuicksightTopicV2Permissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightTopicV2Tags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_custom_instructions` <a name="reset_custom_instructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions"></a>

```python
def reset_custom_instructions() -> None
```

##### `reset_data_set_relations` <a name="reset_data_set_relations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations"></a>

```python
def reset_data_set_relations() -> None
```

##### `reset_data_sets` <a name="reset_data_sets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets"></a>

```python
def reset_data_sets() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder_arns` <a name="reset_folder_arns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns"></a>

```python
def reset_folder_arns() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_topic_id` <a name="reset_topic_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId"></a>

```python
def reset_topic_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightTopicV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions">custom_instructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations">data_set_relations</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets">data_sets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput">custom_instructions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput">data_set_relations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput">data_sets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput">folder_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput">permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput">topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns">folder_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions"></a>

```python
custom_instructions: QuicksightTopicV2CustomInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `data_set_relations`<sup>Required</sup> <a name="data_set_relations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations"></a>

```python
data_set_relations: QuicksightTopicV2DataSetRelationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a>

---

##### `data_sets`<sup>Required</sup> <a name="data_sets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets"></a>

```python
data_sets: QuicksightTopicV2DataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions"></a>

```python
permissions: QuicksightTopicV2PermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags"></a>

```python
tags: QuicksightTopicV2TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `custom_instructions_input`<sup>Optional</sup> <a name="custom_instructions_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput"></a>

```python
custom_instructions_input: IResolvable | QuicksightTopicV2CustomInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `data_set_relations_input`<sup>Optional</sup> <a name="data_set_relations_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput"></a>

```python
data_set_relations_input: IResolvable | typing.List[QuicksightTopicV2DataSetRelations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]

---

##### `data_sets_input`<sup>Optional</sup> <a name="data_sets_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput"></a>

```python
data_sets_input: IResolvable | typing.List[QuicksightTopicV2DataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_arns_input`<sup>Optional</sup> <a name="folder_arns_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput"></a>

```python
folder_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[QuicksightTopicV2Permissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightTopicV2Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]

---

##### `topic_id_input`<sup>Optional</sup> <a name="topic_id_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput"></a>

```python
topic_id_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder_arns`<sup>Required</sup> <a name="folder_arns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns"></a>

```python
folder_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTopicV2Config <a name="QuicksightTopicV2Config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  custom_instructions: QuicksightTopicV2CustomInstructions = None,
  data_set_relations: IResolvable | typing.List[QuicksightTopicV2DataSetRelations] = None,
  data_sets: IResolvable | typing.List[QuicksightTopicV2DataSets] = None,
  description: str = None,
  folder_arns: typing.List[str] = None,
  name: str = None,
  permissions: IResolvable | typing.List[QuicksightTopicV2Permissions] = None,
  tags: IResolvable | typing.List[QuicksightTopicV2Tags] = None,
  topic_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions">custom_instructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations">data_set_relations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets">data_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns">folder_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId">topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `custom_instructions`<sup>Optional</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions"></a>

```python
custom_instructions: QuicksightTopicV2CustomInstructions
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `data_set_relations`<sup>Optional</sup> <a name="data_set_relations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations"></a>

```python
data_set_relations: IResolvable | typing.List[QuicksightTopicV2DataSetRelations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `data_sets`<sup>Optional</sup> <a name="data_sets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets"></a>

```python
data_sets: IResolvable | typing.List[QuicksightTopicV2DataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `folder_arns`<sup>Optional</sup> <a name="folder_arns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns"></a>

```python
folder_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions"></a>

```python
permissions: IResolvable | typing.List[QuicksightTopicV2Permissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightTopicV2Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `topic_id`<sup>Optional</sup> <a name="topic_id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

### QuicksightTopicV2CustomInstructions <a name="QuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2CustomInstructions(
  custom_instructions_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString">custom_instructions_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}. |

---

##### `custom_instructions_string`<sup>Optional</sup> <a name="custom_instructions_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString"></a>

```python
custom_instructions_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}.

---

### QuicksightTopicV2DataSetRelations <a name="QuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelations(
  left: QuicksightTopicV2DataSetRelationsLeft = None,
  right: QuicksightTopicV2DataSetRelationsRight = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}. |

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left"></a>

```python
left: QuicksightTopicV2DataSetRelationsLeft
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}.

---

##### `right`<sup>Optional</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right"></a>

```python
right: QuicksightTopicV2DataSetRelationsRight
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}.

---

### QuicksightTopicV2DataSetRelationsLeft <a name="QuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft(
  column_names: typing.List[str] = None,
  data_set_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSetRelationsRight <a name="QuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight(
  column_names: typing.List[str] = None,
  data_set_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSets <a name="QuicksightTopicV2DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSets(
  data_set_arn: str = None,
  data_set_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName">data_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}. |

---

##### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `data_set_name`<sup>Optional</sup> <a name="data_set_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName"></a>

```python
data_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}.

---

### QuicksightTopicV2Permissions <a name="QuicksightTopicV2Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2Permissions(
  actions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}.

---

### QuicksightTopicV2Tags <a name="QuicksightTopicV2Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2Tags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#key QuicksightTopicV2#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#value QuicksightTopicV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTopicV2CustomInstructionsOutputReference <a name="QuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString">reset_custom_instructions_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_instructions_string` <a name="reset_custom_instructions_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString"></a>

```python
def reset_custom_instructions_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput">custom_instructions_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">custom_instructions_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions_string_input`<sup>Optional</sup> <a name="custom_instructions_string_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput"></a>

```python
custom_instructions_string_input: str
```

- *Type:* str

---

##### `custom_instructions_string`<sup>Required</sup> <a name="custom_instructions_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```python
custom_instructions_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2CustomInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---


### QuicksightTopicV2DataSetRelationsLeftOutputReference <a name="QuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn">reset_data_set_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_data_set_arn` <a name="reset_data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn"></a>

```python
def reset_data_set_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput">data_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn_input`<sup>Optional</sup> <a name="data_set_arn_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput"></a>

```python
data_set_arn_input: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2DataSetRelationsLeft
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---


### QuicksightTopicV2DataSetRelationsList <a name="QuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightTopicV2DataSetRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightTopicV2DataSetRelations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>]

---


### QuicksightTopicV2DataSetRelationsOutputReference <a name="QuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft">put_left</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight">put_right</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft">reset_left</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight">reset_right</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left` <a name="put_left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft"></a>

```python
def put_left(
  column_names: typing.List[str] = None,
  data_set_arn: str = None
) -> None
```

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

###### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft.parameter.dataSetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `put_right` <a name="put_right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight"></a>

```python
def put_right(
  column_names: typing.List[str] = None,
  data_set_arn: str = None
) -> None
```

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

###### `data_set_arn`<sup>Optional</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight.parameter.dataSetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `reset_left` <a name="reset_left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft"></a>

```python
def reset_left() -> None
```

##### `reset_right` <a name="reset_right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight"></a>

```python
def reset_right() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput">left_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput">right_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```python
left: QuicksightTopicV2DataSetRelationsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```python
right: QuicksightTopicV2DataSetRelationsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `left_input`<sup>Optional</sup> <a name="left_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput"></a>

```python
left_input: IResolvable | QuicksightTopicV2DataSetRelationsLeft
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `right_input`<sup>Optional</sup> <a name="right_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput"></a>

```python
right_input: IResolvable | QuicksightTopicV2DataSetRelationsRight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2DataSetRelations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>

---


### QuicksightTopicV2DataSetRelationsRightOutputReference <a name="QuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn">reset_data_set_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_data_set_arn` <a name="reset_data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn"></a>

```python
def reset_data_set_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput">data_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn_input`<sup>Optional</sup> <a name="data_set_arn_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput"></a>

```python
data_set_arn_input: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2DataSetRelationsRight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---


### QuicksightTopicV2DataSetsList <a name="QuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightTopicV2DataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightTopicV2DataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>]

---


### QuicksightTopicV2DataSetsOutputReference <a name="QuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn">reset_data_set_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName">reset_data_set_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_set_arn` <a name="reset_data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn"></a>

```python
def reset_data_set_arn() -> None
```

##### `reset_data_set_name` <a name="reset_data_set_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName"></a>

```python
def reset_data_set_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput">data_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput">data_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName">data_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_arn_input`<sup>Optional</sup> <a name="data_set_arn_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput"></a>

```python
data_set_arn_input: str
```

- *Type:* str

---

##### `data_set_name_input`<sup>Optional</sup> <a name="data_set_name_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput"></a>

```python
data_set_name_input: str
```

- *Type:* str

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `data_set_name`<sup>Required</sup> <a name="data_set_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```python
data_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2DataSets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>

---


### QuicksightTopicV2PermissionsList <a name="QuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2PermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightTopicV2PermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightTopicV2Permissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>]

---


### QuicksightTopicV2PermissionsOutputReference <a name="QuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2Permissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>

---


### QuicksightTopicV2TagsList <a name="QuicksightTopicV2TagsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightTopicV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightTopicV2Tags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>]

---


### QuicksightTopicV2TagsOutputReference <a name="QuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_topic_v2

quicksightTopicV2.QuicksightTopicV2TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightTopicV2Tags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>

---



