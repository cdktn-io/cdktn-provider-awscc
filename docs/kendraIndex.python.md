# `kendraIndex` Submodule <a name="`kendraIndex` Submodule" id="@cdktn/provider-awscc.kendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraIndex <a name="KendraIndex" id="@cdktn/provider-awscc.kendraIndex.KendraIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index awscc_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndex(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  edition: str,
  name: str,
  role_arn: str,
  capacity_units: KendraIndexCapacityUnits = None,
  description: str = None,
  document_metadata_configurations: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations] = None,
  server_side_encryption_configuration: KendraIndexServerSideEncryptionConfiguration = None,
  tags: IResolvable | typing.List[KendraIndexTags] = None,
  user_context_policy: str = None,
  user_token_configurations: IResolvable | typing.List[KendraIndexUserTokenConfigurations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Edition of index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.documentMetadataConfigurations">document_metadata_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]</code> | Document metadata configurations. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | Server side encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]</code> | Tags for labeling the index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.userContextPolicy">user_context_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.userTokenConfigurations">user_token_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_token_configurations KendraIndex#user_token_configurations}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.edition"></a>

- *Type:* str

Edition of index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#edition KendraIndex#edition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.name"></a>

- *Type:* str

Name of index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#name KendraIndex#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.roleArn"></a>

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#role_arn KendraIndex#role_arn}

---

##### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.capacityUnits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.description"></a>

- *Type:* str

A description for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#description KendraIndex#description}

---

##### `document_metadata_configurations`<sup>Optional</sup> <a name="document_metadata_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.documentMetadataConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]

Document metadata configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#document_metadata_configurations KendraIndex#document_metadata_configurations}

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

Server side encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]

Tags for labeling the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#tags KendraIndex#tags}

---

##### `user_context_policy`<sup>Optional</sup> <a name="user_context_policy" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.userContextPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `user_token_configurations`<sup>Optional</sup> <a name="user_token_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.Initializer.parameter.userTokenConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_token_configurations KendraIndex#user_token_configurations}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.putCapacityUnits">put_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.putDocumentMetadataConfigurations">put_document_metadata_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration">put_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.putUserTokenConfigurations">put_user_token_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetCapacityUnits">reset_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetDocumentMetadataConfigurations">reset_document_metadata_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration">reset_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetUserContextPolicy">reset_user_context_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.resetUserTokenConfigurations">reset_user_token_configurations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_units` <a name="put_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putCapacityUnits"></a>

```python
def put_capacity_units(
  query_capacity_units: typing.Union[int, float] = None,
  storage_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `query_capacity_units`<sup>Optional</sup> <a name="query_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putCapacityUnits.parameter.queryCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

###### `storage_capacity_units`<sup>Optional</sup> <a name="storage_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putCapacityUnits.parameter.storageCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

##### `put_document_metadata_configurations` <a name="put_document_metadata_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putDocumentMetadataConfigurations"></a>

```python
def put_document_metadata_configurations(
  value: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putDocumentMetadataConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]

---

##### `put_server_side_encryption_configuration` <a name="put_server_side_encryption_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration"></a>

```python
def put_server_side_encryption_configuration(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KendraIndexTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]

---

##### `put_user_token_configurations` <a name="put_user_token_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putUserTokenConfigurations"></a>

```python
def put_user_token_configurations(
  value: IResolvable | typing.List[KendraIndexUserTokenConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.putUserTokenConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]

---

##### `reset_capacity_units` <a name="reset_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetCapacityUnits"></a>

```python
def reset_capacity_units() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_document_metadata_configurations` <a name="reset_document_metadata_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetDocumentMetadataConfigurations"></a>

```python
def reset_document_metadata_configurations() -> None
```

##### `reset_server_side_encryption_configuration` <a name="reset_server_side_encryption_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration"></a>

```python
def reset_server_side_encryption_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_context_policy` <a name="reset_user_context_policy" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetUserContextPolicy"></a>

```python
def reset_user_context_policy() -> None
```

##### `reset_user_token_configurations` <a name="reset_user_token_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.resetUserTokenConfigurations"></a>

```python
def reset_user_token_configurations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KendraIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isConstruct"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KendraIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KendraIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KendraIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KendraIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.documentMetadataConfigurations">document_metadata_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList">KendraIndexDocumentMetadataConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList">KendraIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userTokenConfigurations">user_token_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList">KendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.capacityUnitsInput">capacity_units_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.documentMetadataConfigurationsInput">document_metadata_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput">server_side_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userContextPolicyInput">user_context_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userTokenConfigurationsInput">user_token_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userContextPolicy">user_context_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.capacityUnits"></a>

```python
capacity_units: KendraIndexCapacityUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a>

---

##### `document_metadata_configurations`<sup>Required</sup> <a name="document_metadata_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.documentMetadataConfigurations"></a>

```python
document_metadata_configurations: KendraIndexDocumentMetadataConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList">KendraIndexDocumentMetadataConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: KendraIndexServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tags"></a>

```python
tags: KendraIndexTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList">KendraIndexTagsList</a>

---

##### `user_token_configurations`<sup>Required</sup> <a name="user_token_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userTokenConfigurations"></a>

```python
user_token_configurations: KendraIndexUserTokenConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList">KendraIndexUserTokenConfigurationsList</a>

---

##### `capacity_units_input`<sup>Optional</sup> <a name="capacity_units_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.capacityUnitsInput"></a>

```python
capacity_units_input: IResolvable | KendraIndexCapacityUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `document_metadata_configurations_input`<sup>Optional</sup> <a name="document_metadata_configurations_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.documentMetadataConfigurationsInput"></a>

```python
document_metadata_configurations_input: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `server_side_encryption_configuration_input`<sup>Optional</sup> <a name="server_side_encryption_configuration_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput"></a>

```python
server_side_encryption_configuration_input: IResolvable | KendraIndexServerSideEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KendraIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]

---

##### `user_context_policy_input`<sup>Optional</sup> <a name="user_context_policy_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userContextPolicyInput"></a>

```python
user_context_policy_input: str
```

- *Type:* str

---

##### `user_token_configurations_input`<sup>Optional</sup> <a name="user_token_configurations_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userTokenConfigurationsInput"></a>

```python
user_token_configurations_input: IResolvable | typing.List[KendraIndexUserTokenConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_context_policy`<sup>Required</sup> <a name="user_context_policy" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.userContextPolicy"></a>

```python
user_context_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendraIndex.KendraIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KendraIndexCapacityUnits <a name="KendraIndexCapacityUnits" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexCapacityUnits(
  query_capacity_units: typing.Union[int, float] = None,
  storage_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits">query_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#query_capacity_units KendraIndex#query_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits">storage_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}. |

---

##### `query_capacity_units`<sup>Optional</sup> <a name="query_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits"></a>

```python
query_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

##### `storage_capacity_units`<sup>Optional</sup> <a name="storage_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits"></a>

```python
storage_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

### KendraIndexConfig <a name="KendraIndexConfig" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  edition: str,
  name: str,
  role_arn: str,
  capacity_units: KendraIndexCapacityUnits = None,
  description: str = None,
  document_metadata_configurations: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations] = None,
  server_side_encryption_configuration: KendraIndexServerSideEncryptionConfiguration = None,
  tags: IResolvable | typing.List[KendraIndexTags] = None,
  user_context_policy: str = None,
  user_token_configurations: IResolvable | typing.List[KendraIndexUserTokenConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.edition">edition</a></code> | <code>str</code> | Edition of index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.name">name</a></code> | <code>str</code> | Name of index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.description">description</a></code> | <code>str</code> | A description for the index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurations">document_metadata_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]</code> | Document metadata configurations. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | Server side encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]</code> | Tags for labeling the index. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.userContextPolicy">user_context_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.userTokenConfigurations">user_token_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_token_configurations KendraIndex#user_token_configurations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Edition of index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#edition KendraIndex#edition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#name KendraIndex#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#role_arn KendraIndex#role_arn}

---

##### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.capacityUnits"></a>

```python
capacity_units: KendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#description KendraIndex#description}

---

##### `document_metadata_configurations`<sup>Optional</sup> <a name="document_metadata_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurations"></a>

```python
document_metadata_configurations: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]

Document metadata configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#document_metadata_configurations KendraIndex#document_metadata_configurations}

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: KendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

Server side encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KendraIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]

Tags for labeling the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#tags KendraIndex#tags}

---

##### `user_context_policy`<sup>Optional</sup> <a name="user_context_policy" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.userContextPolicy"></a>

```python
user_context_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `user_token_configurations`<sup>Optional</sup> <a name="user_token_configurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndexConfig.property.userTokenConfigurations"></a>

```python
user_token_configurations: IResolvable | typing.List[KendraIndexUserTokenConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_token_configurations KendraIndex#user_token_configurations}.

---

### KendraIndexDocumentMetadataConfigurations <a name="KendraIndexDocumentMetadataConfigurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurations(
  name: str = None,
  relevance: KendraIndexDocumentMetadataConfigurationsRelevance = None,
  search: KendraIndexDocumentMetadataConfigurationsSearch = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.relevance">relevance</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#relevance KendraIndex#relevance}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.search">search</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#search KendraIndex#search}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#type KendraIndex#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#name KendraIndex#name}.

---

##### `relevance`<sup>Optional</sup> <a name="relevance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.relevance"></a>

```python
relevance: KendraIndexDocumentMetadataConfigurationsRelevance
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#relevance KendraIndex#relevance}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.search"></a>

```python
search: KendraIndexDocumentMetadataConfigurationsSearch
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#search KendraIndex#search}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#type KendraIndex#type}.

---

### KendraIndexDocumentMetadataConfigurationsRelevance <a name="KendraIndexDocumentMetadataConfigurationsRelevance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance(
  duration: str = None,
  freshness: bool | IResolvable = None,
  importance: typing.Union[int, float] = None,
  rank_order: str = None,
  value_importance_items: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#duration KendraIndex#duration}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.freshness">freshness</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#freshness KendraIndex#freshness}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.importance">importance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#importance KendraIndex#importance}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.rankOrder">rank_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#rank_order KendraIndex#rank_order}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.valueImportanceItems">value_importance_items</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value_importance_items KendraIndex#value_importance_items}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#duration KendraIndex#duration}.

---

##### `freshness`<sup>Optional</sup> <a name="freshness" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.freshness"></a>

```python
freshness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#freshness KendraIndex#freshness}.

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.importance"></a>

```python
importance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#importance KendraIndex#importance}.

---

##### `rank_order`<sup>Optional</sup> <a name="rank_order" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.rankOrder"></a>

```python
rank_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#rank_order KendraIndex#rank_order}.

---

##### `value_importance_items`<sup>Optional</sup> <a name="value_importance_items" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance.property.valueImportanceItems"></a>

```python
value_importance_items: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value_importance_items KendraIndex#value_importance_items}.

---

### KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems <a name="KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems(
  key: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key KendraIndex#key}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value KendraIndex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key KendraIndex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value KendraIndex#value}.

---

### KendraIndexDocumentMetadataConfigurationsSearch <a name="KendraIndexDocumentMetadataConfigurationsSearch" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch(
  displayable: bool | IResolvable = None,
  facetable: bool | IResolvable = None,
  searchable: bool | IResolvable = None,
  sortable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.displayable">displayable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#displayable KendraIndex#displayable}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.facetable">facetable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#facetable KendraIndex#facetable}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.searchable">searchable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#searchable KendraIndex#searchable}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.sortable">sortable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#sortable KendraIndex#sortable}. |

---

##### `displayable`<sup>Optional</sup> <a name="displayable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.displayable"></a>

```python
displayable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#displayable KendraIndex#displayable}.

---

##### `facetable`<sup>Optional</sup> <a name="facetable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.facetable"></a>

```python
facetable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#facetable KendraIndex#facetable}.

---

##### `searchable`<sup>Optional</sup> <a name="searchable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.searchable"></a>

```python
searchable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#searchable KendraIndex#searchable}.

---

##### `sortable`<sup>Optional</sup> <a name="sortable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch.property.sortable"></a>

```python
sortable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#sortable KendraIndex#sortable}.

---

### KendraIndexServerSideEncryptionConfiguration <a name="KendraIndexServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexServerSideEncryptionConfiguration(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#kms_key_id KendraIndex#kms_key_id}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

### KendraIndexTags <a name="KendraIndexTags" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTags.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key KendraIndex#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value KendraIndex#value}

---

### KendraIndexUserTokenConfigurations <a name="KendraIndexUserTokenConfigurations" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurations(
  json_token_type_configuration: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration = None,
  jwt_token_type_configuration: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration">json_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration">jwt_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}. |

---

##### `json_token_type_configuration`<sup>Optional</sup> <a name="json_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration"></a>

```python
json_token_type_configuration: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}.

---

##### `jwt_token_type_configuration`<sup>Optional</sup> <a name="jwt_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration"></a>

```python
jwt_token_type_configuration: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}.

---

### KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration(
  group_attribute_field: str = None,
  user_name_attribute_field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `group_attribute_field`<sup>Optional</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `user_name_attribute_field`<sup>Optional</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

### KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration(
  claim_regex: str = None,
  group_attribute_field: str = None,
  issuer: str = None,
  key_location: str = None,
  secret_manager_arn: str = None,
  url: str = None,
  user_name_attribute_field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex">claim_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#claim_regex KendraIndex#claim_regex}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#issuer KendraIndex#issuer}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation">key_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key_location KendraIndex#key_location}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#url KendraIndex#url}. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `claim_regex`<sup>Optional</sup> <a name="claim_regex" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex"></a>

```python
claim_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#claim_regex KendraIndex#claim_regex}.

---

##### `group_attribute_field`<sup>Optional</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#issuer KendraIndex#issuer}.

---

##### `key_location`<sup>Optional</sup> <a name="key_location" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key_location KendraIndex#key_location}.

---

##### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#secret_manager_arn KendraIndex#secret_manager_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#url KendraIndex#url}.

---

##### `user_name_attribute_field`<sup>Optional</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraIndexCapacityUnitsOutputReference <a name="KendraIndexCapacityUnitsOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexCapacityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits">reset_query_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits">reset_storage_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_capacity_units` <a name="reset_query_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits"></a>

```python
def reset_query_capacity_units() -> None
```

##### `reset_storage_capacity_units` <a name="reset_storage_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits"></a>

```python
def reset_storage_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput">query_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput">storage_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">query_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storage_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_capacity_units_input`<sup>Optional</sup> <a name="query_capacity_units_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput"></a>

```python
query_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_units_input`<sup>Optional</sup> <a name="storage_capacity_units_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput"></a>

```python
storage_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_capacity_units`<sup>Required</sup> <a name="query_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```python
query_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_units`<sup>Required</sup> <a name="storage_capacity_units" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```python
storage_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexCapacityUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---


### KendraIndexDocumentMetadataConfigurationsList <a name="KendraIndexDocumentMetadataConfigurationsList" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraIndexDocumentMetadataConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>]

---


### KendraIndexDocumentMetadataConfigurationsOutputReference <a name="KendraIndexDocumentMetadataConfigurationsOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance">put_relevance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch">put_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetRelevance">reset_relevance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_relevance` <a name="put_relevance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance"></a>

```python
def put_relevance(
  duration: str = None,
  freshness: bool | IResolvable = None,
  importance: typing.Union[int, float] = None,
  rank_order: str = None,
  value_importance_items: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems] = None
) -> None
```

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#duration KendraIndex#duration}.

---

###### `freshness`<sup>Optional</sup> <a name="freshness" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance.parameter.freshness"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#freshness KendraIndex#freshness}.

---

###### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance.parameter.importance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#importance KendraIndex#importance}.

---

###### `rank_order`<sup>Optional</sup> <a name="rank_order" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance.parameter.rankOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#rank_order KendraIndex#rank_order}.

---

###### `value_importance_items`<sup>Optional</sup> <a name="value_importance_items" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putRelevance.parameter.valueImportanceItems"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#value_importance_items KendraIndex#value_importance_items}.

---

##### `put_search` <a name="put_search" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch"></a>

```python
def put_search(
  displayable: bool | IResolvable = None,
  facetable: bool | IResolvable = None,
  searchable: bool | IResolvable = None,
  sortable: bool | IResolvable = None
) -> None
```

###### `displayable`<sup>Optional</sup> <a name="displayable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch.parameter.displayable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#displayable KendraIndex#displayable}.

---

###### `facetable`<sup>Optional</sup> <a name="facetable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch.parameter.facetable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#facetable KendraIndex#facetable}.

---

###### `searchable`<sup>Optional</sup> <a name="searchable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch.parameter.searchable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#searchable KendraIndex#searchable}.

---

###### `sortable`<sup>Optional</sup> <a name="sortable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.putSearch.parameter.sortable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#sortable KendraIndex#sortable}.

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_relevance` <a name="reset_relevance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetRelevance"></a>

```python
def reset_relevance() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.search">search</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference">KendraIndexDocumentMetadataConfigurationsSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.relevanceInput">relevance_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.searchInput">search_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance"></a>

```python
relevance: KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.search"></a>

```python
search: KendraIndexDocumentMetadataConfigurationsSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference">KendraIndexDocumentMetadataConfigurationsSearchOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `relevance_input`<sup>Optional</sup> <a name="relevance_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.relevanceInput"></a>

```python
relevance_input: IResolvable | KendraIndexDocumentMetadataConfigurationsRelevance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a>

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.searchInput"></a>

```python
search_input: IResolvable | KendraIndexDocumentMetadataConfigurationsSearch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexDocumentMetadataConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurations">KendraIndexDocumentMetadataConfigurations</a>

---


### KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference <a name="KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.putValueImportanceItems">put_value_importance_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetFreshness">reset_freshness</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetImportance">reset_importance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetRankOrder">reset_rank_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetValueImportanceItems">reset_value_importance_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_importance_items` <a name="put_value_importance_items" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.putValueImportanceItems"></a>

```python
def put_value_importance_items(
  value: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.putValueImportanceItems.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]

---

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_freshness` <a name="reset_freshness" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetFreshness"></a>

```python
def reset_freshness() -> None
```

##### `reset_importance` <a name="reset_importance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetImportance"></a>

```python
def reset_importance() -> None
```

##### `reset_rank_order` <a name="reset_rank_order" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetRankOrder"></a>

```python
def reset_rank_order() -> None
```

##### `reset_value_importance_items` <a name="reset_value_importance_items" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resetValueImportanceItems"></a>

```python
def reset_value_importance_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems">value_importance_items</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshnessInput">freshness_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importanceInput">importance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrderInput">rank_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItemsInput">value_importance_items_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness">freshness</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance">importance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder">rank_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_importance_items`<sup>Required</sup> <a name="value_importance_items" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems"></a>

```python
value_importance_items: KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `freshness_input`<sup>Optional</sup> <a name="freshness_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshnessInput"></a>

```python
freshness_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `importance_input`<sup>Optional</sup> <a name="importance_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importanceInput"></a>

```python
importance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rank_order_input`<sup>Optional</sup> <a name="rank_order_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrderInput"></a>

```python
rank_order_input: str
```

- *Type:* str

---

##### `value_importance_items_input`<sup>Optional</sup> <a name="value_importance_items_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItemsInput"></a>

```python
value_importance_items_input: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness"></a>

```python
freshness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance"></a>

```python
importance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rank_order`<sup>Required</sup> <a name="rank_order" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder"></a>

```python
rank_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexDocumentMetadataConfigurationsRelevance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevance">KendraIndexDocumentMetadataConfigurationsRelevance</a>

---


### KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList <a name="KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>]

---


### KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference <a name="KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>

---


### KendraIndexDocumentMetadataConfigurationsSearchOutputReference <a name="KendraIndexDocumentMetadataConfigurationsSearchOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetDisplayable">reset_displayable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetFacetable">reset_facetable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetSearchable">reset_searchable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetSortable">reset_sortable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_displayable` <a name="reset_displayable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetDisplayable"></a>

```python
def reset_displayable() -> None
```

##### `reset_facetable` <a name="reset_facetable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetFacetable"></a>

```python
def reset_facetable() -> None
```

##### `reset_searchable` <a name="reset_searchable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetSearchable"></a>

```python
def reset_searchable() -> None
```

##### `reset_sortable` <a name="reset_sortable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.resetSortable"></a>

```python
def reset_sortable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayableInput">displayable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetableInput">facetable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchableInput">searchable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortableInput">sortable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable">displayable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable">facetable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable">searchable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable">sortable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `displayable_input`<sup>Optional</sup> <a name="displayable_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayableInput"></a>

```python
displayable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `facetable_input`<sup>Optional</sup> <a name="facetable_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetableInput"></a>

```python
facetable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `searchable_input`<sup>Optional</sup> <a name="searchable_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchableInput"></a>

```python
searchable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sortable_input`<sup>Optional</sup> <a name="sortable_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortableInput"></a>

```python
sortable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable"></a>

```python
displayable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable"></a>

```python
facetable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable"></a>

```python
searchable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable"></a>

```python
sortable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexDocumentMetadataConfigurationsSearch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexDocumentMetadataConfigurationsSearch">KendraIndexDocumentMetadataConfigurationsSearch</a>

---


### KendraIndexServerSideEncryptionConfigurationOutputReference <a name="KendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexServerSideEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---


### KendraIndexTagsList <a name="KendraIndexTagsList" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>]

---


### KendraIndexTagsOutputReference <a name="KendraIndexTagsOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexTags">KendraIndexTags</a>

---


### KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resetGroupAttributeField">reset_group_attribute_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resetUserNameAttributeField">reset_user_name_attribute_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute_field` <a name="reset_group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```python
def reset_group_attribute_field() -> None
```

##### `reset_user_name_attribute_field` <a name="reset_user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```python
def reset_user_name_attribute_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">group_attribute_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">user_name_attribute_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_field_input`<sup>Optional</sup> <a name="group_attribute_field_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```python
group_attribute_field_input: str
```

- *Type:* str

---

##### `user_name_attribute_field_input`<sup>Optional</sup> <a name="user_name_attribute_field_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```python
user_name_attribute_field_input: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex">reset_claim_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField">reset_group_attribute_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetKeyLocation">reset_key_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretManagerArn">reset_secret_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField">reset_user_name_attribute_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_claim_regex` <a name="reset_claim_regex" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex"></a>

```python
def reset_claim_regex() -> None
```

##### `reset_group_attribute_field` <a name="reset_group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```python
def reset_group_attribute_field() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_key_location` <a name="reset_key_location" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetKeyLocation"></a>

```python
def reset_key_location() -> None
```

##### `reset_secret_manager_arn` <a name="reset_secret_manager_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretManagerArn"></a>

```python
def reset_secret_manager_arn() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_name_attribute_field` <a name="reset_user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```python
def reset_user_name_attribute_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput">claim_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">group_attribute_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput">key_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArnInput">secret_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">user_name_attribute_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claim_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">key_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_regex_input`<sup>Optional</sup> <a name="claim_regex_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput"></a>

```python
claim_regex_input: str
```

- *Type:* str

---

##### `group_attribute_field_input`<sup>Optional</sup> <a name="group_attribute_field_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```python
group_attribute_field_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `key_location_input`<sup>Optional</sup> <a name="key_location_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput"></a>

```python
key_location_input: str
```

- *Type:* str

---

##### `secret_manager_arn_input`<sup>Optional</sup> <a name="secret_manager_arn_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArnInput"></a>

```python
secret_manager_arn_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_name_attribute_field_input`<sup>Optional</sup> <a name="user_name_attribute_field_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```python
user_name_attribute_field_input: str
```

- *Type:* str

---

##### `claim_regex`<sup>Required</sup> <a name="claim_regex" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```python
claim_regex: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_location`<sup>Required</sup> <a name="key_location" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsList <a name="KendraIndexUserTokenConfigurationsList" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraIndexUserTokenConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraIndexUserTokenConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>]

---


### KendraIndexUserTokenConfigurationsOutputReference <a name="KendraIndexUserTokenConfigurationsOutputReference" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_index

kendraIndex.KendraIndexUserTokenConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration">put_json_token_type_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration">put_jwt_token_type_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration">reset_json_token_type_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration">reset_jwt_token_type_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_json_token_type_configuration` <a name="put_json_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration"></a>

```python
def put_json_token_type_configuration(
  group_attribute_field: str = None,
  user_name_attribute_field: str = None
) -> None
```

###### `group_attribute_field`<sup>Optional</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.groupAttributeField"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

###### `user_name_attribute_field`<sup>Optional</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.userNameAttributeField"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

##### `put_jwt_token_type_configuration` <a name="put_jwt_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration"></a>

```python
def put_jwt_token_type_configuration(
  claim_regex: str = None,
  group_attribute_field: str = None,
  issuer: str = None,
  key_location: str = None,
  secret_manager_arn: str = None,
  url: str = None,
  user_name_attribute_field: str = None
) -> None
```

###### `claim_regex`<sup>Optional</sup> <a name="claim_regex" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.claimRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#claim_regex KendraIndex#claim_regex}.

---

###### `group_attribute_field`<sup>Optional</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.groupAttributeField"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#issuer KendraIndex#issuer}.

---

###### `key_location`<sup>Optional</sup> <a name="key_location" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.keyLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#key_location KendraIndex#key_location}.

---

###### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.secretManagerArn"></a>

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#secret_manager_arn KendraIndex#secret_manager_arn}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#url KendraIndex#url}.

---

###### `user_name_attribute_field`<sup>Optional</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.userNameAttributeField"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

##### `reset_json_token_type_configuration` <a name="reset_json_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration"></a>

```python
def reset_json_token_type_configuration() -> None
```

##### `reset_jwt_token_type_configuration` <a name="reset_jwt_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration"></a>

```python
def reset_jwt_token_type_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">json_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwt_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput">json_token_type_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput">jwt_token_type_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_token_type_configuration`<sup>Required</sup> <a name="json_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```python
json_token_type_configuration: KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwt_token_type_configuration`<sup>Required</sup> <a name="jwt_token_type_configuration" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```python
jwt_token_type_configuration: KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `json_token_type_configuration_input`<sup>Optional</sup> <a name="json_token_type_configuration_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput"></a>

```python
json_token_type_configuration_input: IResolvable | KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `jwt_token_type_configuration_input`<sup>Optional</sup> <a name="jwt_token_type_configuration_input" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput"></a>

```python
jwt_token_type_configuration_input: IResolvable | KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraIndexUserTokenConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---



