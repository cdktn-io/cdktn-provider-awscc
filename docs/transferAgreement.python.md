# `transferAgreement` Submodule <a name="`transferAgreement` Submodule" id="@cdktn/provider-awscc.transferAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAgreement <a name="TransferAgreement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement awscc_transfer_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_role: str,
  local_profile_id: str,
  partner_profile_id: str,
  server_id: str,
  base_directory: str = None,
  custom_directories: TransferAgreementCustomDirectories = None,
  description: str = None,
  enforce_message_signing: str = None,
  preserve_filename: str = None,
  status: str = None,
  tags: IResolvable | typing.List[TransferAgreementTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.accessRole">access_role</a></code> | <code>str</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.localProfileId">local_profile_id</a></code> | <code>str</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.baseDirectory">base_directory</a></code> | <code>str</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.customDirectories">custom_directories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.enforceMessageSigning">enforce_message_signing</a></code> | <code>str</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.preserveFilename">preserve_filename</a></code> | <code>str</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.status">status</a></code> | <code>str</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]</code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.accessRole"></a>

- *Type:* str

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.localProfileId"></a>

- *Type:* str

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.partnerProfileId"></a>

- *Type:* str

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.serverId"></a>

- *Type:* str

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `base_directory`<sup>Optional</sup> <a name="base_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.baseDirectory"></a>

- *Type:* str

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `custom_directories`<sup>Optional</sup> <a name="custom_directories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.customDirectories"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.description"></a>

- *Type:* str

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `enforce_message_signing`<sup>Optional</sup> <a name="enforce_message_signing" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.enforceMessageSigning"></a>

- *Type:* str

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `preserve_filename`<sup>Optional</sup> <a name="preserve_filename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.preserveFilename"></a>

- *Type:* str

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.status"></a>

- *Type:* str

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories">put_custom_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory">reset_base_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories">reset_custom_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning">reset_enforce_message_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename">reset_preserve_filename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_directories` <a name="put_custom_directories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories"></a>

```python
def put_custom_directories(
  failed_files_directory: str = None,
  mdn_files_directory: str = None,
  payload_files_directory: str = None,
  status_files_directory: str = None,
  temporary_files_directory: str = None
) -> None
```

###### `failed_files_directory`<sup>Optional</sup> <a name="failed_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.failedFilesDirectory"></a>

- *Type:* str

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

###### `mdn_files_directory`<sup>Optional</sup> <a name="mdn_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.mdnFilesDirectory"></a>

- *Type:* str

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

###### `payload_files_directory`<sup>Optional</sup> <a name="payload_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.payloadFilesDirectory"></a>

- *Type:* str

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

###### `status_files_directory`<sup>Optional</sup> <a name="status_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.statusFilesDirectory"></a>

- *Type:* str

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

###### `temporary_files_directory`<sup>Optional</sup> <a name="temporary_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.temporaryFilesDirectory"></a>

- *Type:* str

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TransferAgreementTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]

---

##### `reset_base_directory` <a name="reset_base_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory"></a>

```python
def reset_base_directory() -> None
```

##### `reset_custom_directories` <a name="reset_custom_directories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories"></a>

```python
def reset_custom_directories() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enforce_message_signing` <a name="reset_enforce_message_signing" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning"></a>

```python
def reset_enforce_message_signing() -> None
```

##### `reset_preserve_filename` <a name="reset_preserve_filename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename"></a>

```python
def reset_preserve_filename() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferAgreement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories">custom_directories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput">access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput">base_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput">custom_directories_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput">enforce_message_signing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput">local_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput">partner_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput">preserve_filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory">base_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning">enforce_message_signing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId">local_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename">preserve_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_directories`<sup>Required</sup> <a name="custom_directories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories"></a>

```python
custom_directories: TransferAgreementCustomDirectoriesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags"></a>

```python
tags: TransferAgreementTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a>

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput"></a>

```python
access_role_input: str
```

- *Type:* str

---

##### `base_directory_input`<sup>Optional</sup> <a name="base_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput"></a>

```python
base_directory_input: str
```

- *Type:* str

---

##### `custom_directories_input`<sup>Optional</sup> <a name="custom_directories_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput"></a>

```python
custom_directories_input: IResolvable | TransferAgreementCustomDirectories
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enforce_message_signing_input`<sup>Optional</sup> <a name="enforce_message_signing_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput"></a>

```python
enforce_message_signing_input: str
```

- *Type:* str

---

##### `local_profile_id_input`<sup>Optional</sup> <a name="local_profile_id_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput"></a>

```python
local_profile_id_input: str
```

- *Type:* str

---

##### `partner_profile_id_input`<sup>Optional</sup> <a name="partner_profile_id_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput"></a>

```python
partner_profile_id_input: str
```

- *Type:* str

---

##### `preserve_filename_input`<sup>Optional</sup> <a name="preserve_filename_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput"></a>

```python
preserve_filename_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TransferAgreementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `base_directory`<sup>Required</sup> <a name="base_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory"></a>

```python
base_directory: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enforce_message_signing`<sup>Required</sup> <a name="enforce_message_signing" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning"></a>

```python
enforce_message_signing: str
```

- *Type:* str

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

---

##### `preserve_filename`<sup>Required</sup> <a name="preserve_filename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename"></a>

```python
preserve_filename: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementConfig <a name="TransferAgreementConfig" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_role: str,
  local_profile_id: str,
  partner_profile_id: str,
  server_id: str,
  base_directory: str = None,
  custom_directories: TransferAgreementCustomDirectories = None,
  description: str = None,
  enforce_message_signing: str = None,
  preserve_filename: str = None,
  status: str = None,
  tags: IResolvable | typing.List[TransferAgreementTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole">access_role</a></code> | <code>str</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId">local_profile_id</a></code> | <code>str</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId">server_id</a></code> | <code>str</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory">base_directory</a></code> | <code>str</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories">custom_directories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description">description</a></code> | <code>str</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning">enforce_message_signing</a></code> | <code>str</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename">preserve_filename</a></code> | <code>str</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status">status</a></code> | <code>str</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]</code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `base_directory`<sup>Optional</sup> <a name="base_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory"></a>

```python
base_directory: str
```

- *Type:* str

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `custom_directories`<sup>Optional</sup> <a name="custom_directories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories"></a>

```python
custom_directories: TransferAgreementCustomDirectories
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `enforce_message_signing`<sup>Optional</sup> <a name="enforce_message_signing" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning"></a>

```python
enforce_message_signing: str
```

- *Type:* str

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `preserve_filename`<sup>Optional</sup> <a name="preserve_filename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename"></a>

```python
preserve_filename: str
```

- *Type:* str

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TransferAgreementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

### TransferAgreementCustomDirectories <a name="TransferAgreementCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementCustomDirectories(
  failed_files_directory: str = None,
  mdn_files_directory: str = None,
  payload_files_directory: str = None,
  status_files_directory: str = None,
  temporary_files_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory">failed_files_directory</a></code> | <code>str</code> | Specifies a location to store the failed files for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory">mdn_files_directory</a></code> | <code>str</code> | Specifies a location to store the MDN file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory">payload_files_directory</a></code> | <code>str</code> | Specifies a location to store the payload file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory">status_files_directory</a></code> | <code>str</code> | Specifies a location to store the status file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory">temporary_files_directory</a></code> | <code>str</code> | Specifies a location to store the temporary processing file for an AS2 message. |

---

##### `failed_files_directory`<sup>Optional</sup> <a name="failed_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory"></a>

```python
failed_files_directory: str
```

- *Type:* str

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

##### `mdn_files_directory`<sup>Optional</sup> <a name="mdn_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory"></a>

```python
mdn_files_directory: str
```

- *Type:* str

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

##### `payload_files_directory`<sup>Optional</sup> <a name="payload_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory"></a>

```python
payload_files_directory: str
```

- *Type:* str

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

##### `status_files_directory`<sup>Optional</sup> <a name="status_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory"></a>

```python
status_files_directory: str
```

- *Type:* str

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

##### `temporary_files_directory`<sup>Optional</sup> <a name="temporary_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory"></a>

```python
temporary_files_directory: str
```

- *Type:* str

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

### TransferAgreementTags <a name="TransferAgreementTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key">key</a></code> | <code>str</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value">value</a></code> | <code>str</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key"></a>

```python
key: str
```

- *Type:* str

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#key TransferAgreement#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value"></a>

```python
value: str
```

- *Type:* str

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#value TransferAgreement#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAgreementCustomDirectoriesOutputReference <a name="TransferAgreementCustomDirectoriesOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementCustomDirectoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory">reset_failed_files_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory">reset_mdn_files_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory">reset_payload_files_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory">reset_status_files_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory">reset_temporary_files_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failed_files_directory` <a name="reset_failed_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory"></a>

```python
def reset_failed_files_directory() -> None
```

##### `reset_mdn_files_directory` <a name="reset_mdn_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory"></a>

```python
def reset_mdn_files_directory() -> None
```

##### `reset_payload_files_directory` <a name="reset_payload_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory"></a>

```python
def reset_payload_files_directory() -> None
```

##### `reset_status_files_directory` <a name="reset_status_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory"></a>

```python
def reset_status_files_directory() -> None
```

##### `reset_temporary_files_directory` <a name="reset_temporary_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory"></a>

```python
def reset_temporary_files_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput">failed_files_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput">mdn_files_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput">payload_files_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput">status_files_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput">temporary_files_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory">failed_files_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory">mdn_files_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory">payload_files_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory">status_files_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory">temporary_files_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failed_files_directory_input`<sup>Optional</sup> <a name="failed_files_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput"></a>

```python
failed_files_directory_input: str
```

- *Type:* str

---

##### `mdn_files_directory_input`<sup>Optional</sup> <a name="mdn_files_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput"></a>

```python
mdn_files_directory_input: str
```

- *Type:* str

---

##### `payload_files_directory_input`<sup>Optional</sup> <a name="payload_files_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput"></a>

```python
payload_files_directory_input: str
```

- *Type:* str

---

##### `status_files_directory_input`<sup>Optional</sup> <a name="status_files_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput"></a>

```python
status_files_directory_input: str
```

- *Type:* str

---

##### `temporary_files_directory_input`<sup>Optional</sup> <a name="temporary_files_directory_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput"></a>

```python
temporary_files_directory_input: str
```

- *Type:* str

---

##### `failed_files_directory`<sup>Required</sup> <a name="failed_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory"></a>

```python
failed_files_directory: str
```

- *Type:* str

---

##### `mdn_files_directory`<sup>Required</sup> <a name="mdn_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory"></a>

```python
mdn_files_directory: str
```

- *Type:* str

---

##### `payload_files_directory`<sup>Required</sup> <a name="payload_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory"></a>

```python
payload_files_directory: str
```

- *Type:* str

---

##### `status_files_directory`<sup>Required</sup> <a name="status_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory"></a>

```python
status_files_directory: str
```

- *Type:* str

---

##### `temporary_files_directory`<sup>Required</sup> <a name="temporary_files_directory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory"></a>

```python
temporary_files_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferAgreementCustomDirectories
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---


### TransferAgreementTagsList <a name="TransferAgreementTagsList" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferAgreementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferAgreementTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>]

---


### TransferAgreementTagsOutputReference <a name="TransferAgreementTagsOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_agreement

transferAgreement.TransferAgreementTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferAgreementTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>

---



