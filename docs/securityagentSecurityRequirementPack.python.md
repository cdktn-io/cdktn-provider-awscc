# `securityagentSecurityRequirementPack` Submodule <a name="`securityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentSecurityRequirementPack <a name="SecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  kms_key_id: str = None,
  security_requirements: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements] = None,
  status: str = None,
  tags: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.securityRequirements">security_requirements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]</code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.status">status</a></code> | <code>str</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]</code> | Tags for the security requirement pack. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.name"></a>

- *Type:* str

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.description"></a>

- *Type:* str

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `security_requirements`<sup>Optional</sup> <a name="security_requirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.securityRequirements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.status"></a>

- *Type:* str

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements">put_security_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements">reset_security_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_security_requirements` <a name="put_security_requirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements"></a>

```python
def put_security_requirements(
  value: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_security_requirements` <a name="reset_security_requirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements"></a>

```python
def reset_security_requirements() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityagentSecurityRequirementPack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId">pack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements">security_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput">security_requirements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pack_id`<sup>Required</sup> <a name="pack_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId"></a>

```python
pack_id: str
```

- *Type:* str

---

##### `security_requirements`<sup>Required</sup> <a name="security_requirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```python
security_requirements: SecurityagentSecurityRequirementPackSecurityRequirementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags"></a>

```python
tags: SecurityagentSecurityRequirementPackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_requirements_input`<sup>Optional</sup> <a name="security_requirements_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput"></a>

```python
security_requirements_input: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentSecurityRequirementPackConfig <a name="SecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  kms_key_id: str = None,
  security_requirements: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements] = None,
  status: str = None,
  tags: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name">name</a></code> | <code>str</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description">description</a></code> | <code>str</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements">security_requirements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]</code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status">status</a></code> | <code>str</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]</code> | Tags for the security requirement pack. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `security_requirements`<sup>Optional</sup> <a name="security_requirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements"></a>

```python
security_requirements: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

### SecurityagentSecurityRequirementPackSecurityRequirements <a name="SecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements(
  description: str = None,
  domain: str = None,
  evaluation: str = None,
  name: str = None,
  remediation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description">description</a></code> | <code>str</code> | Description of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain">domain</a></code> | <code>str</code> | Security domain this requirement belongs to. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation">evaluation</a></code> | <code>str</code> | How to evaluate compliance with this requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name">name</a></code> | <code>str</code> | Name of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation">remediation</a></code> | <code>str</code> | How to remediate non-compliance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain"></a>

```python
domain: str
```

- *Type:* str

Security domain this requirement belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#domain SecurityagentSecurityRequirementPack#domain}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation"></a>

```python
evaluation: str
```

- *Type:* str

How to evaluate compliance with this requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#evaluation SecurityagentSecurityRequirementPack#evaluation}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

How to remediate non-compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#remediation SecurityagentSecurityRequirementPack#remediation}

---

### SecurityagentSecurityRequirementPackTags <a name="SecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#key SecurityagentSecurityRequirementPack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityagent_security_requirement_pack#value SecurityagentSecurityRequirementPack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentSecurityRequirementPackSecurityRequirementsList <a name="SecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityagentSecurityRequirementPackSecurityRequirements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>]

---


### SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation">reset_remediation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_remediation` <a name="reset_remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation"></a>

```python
def reset_remediation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput">evaluation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput">remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">evaluation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput"></a>

```python
evaluation_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remediation_input`<sup>Optional</sup> <a name="remediation_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput"></a>

```python
remediation_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```python
evaluation: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentSecurityRequirementPackSecurityRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### SecurityagentSecurityRequirementPackTagsList <a name="SecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityagentSecurityRequirementPackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>]

---


### SecurityagentSecurityRequirementPackTagsOutputReference <a name="SecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_security_requirement_pack

securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentSecurityRequirementPackTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>

---



