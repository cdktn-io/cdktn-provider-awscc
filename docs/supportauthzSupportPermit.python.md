# `supportauthzSupportPermit` Submodule <a name="`supportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.supportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportauthzSupportPermit <a name="SupportauthzSupportPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermit(
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
  permit: SupportauthzSupportPermitPermit,
  signing_key_info: SupportauthzSupportPermitSigningKeyInfo,
  description: str = None,
  support_case_display_id: str = None,
  tags: IResolvable | typing.List[SupportauthzSupportPermitTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.signingKeyInfo">signing_key_info</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.supportCaseDisplayId">support_case_display_id</a></code> | <code>str</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]</code> | A list of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.name"></a>

- *Type:* str

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.permit"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `signing_key_info`<sup>Required</sup> <a name="signing_key_info" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.signingKeyInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `support_case_display_id`<sup>Optional</sup> <a name="support_case_display_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.supportCaseDisplayId"></a>

- *Type:* str

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit">put_permit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo">put_signing_key_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId">reset_support_case_display_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permit` <a name="put_permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit"></a>

```python
def put_permit(
  actions: SupportauthzSupportPermitPermitActions,
  resources: SupportauthzSupportPermitPermitResources,
  conditions: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions] = None
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.actions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

###### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.resources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

##### `put_signing_key_info` <a name="put_signing_key_info" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo"></a>

```python
def put_signing_key_info(
  kms_key: str
) -> None
```

###### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo.parameter.kmsKey"></a>

- *Type:* str

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SupportauthzSupportPermitTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_support_case_display_id` <a name="reset_support_case_display_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId"></a>

```python
def reset_support_case_display_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SupportauthzSupportPermit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId">permit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo">signing_key_info</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput">permit_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput">signing_key_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput">support_case_display_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId">support_case_display_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit"></a>

```python
permit: SupportauthzSupportPermitPermitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a>

---

##### `permit_id`<sup>Required</sup> <a name="permit_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId"></a>

```python
permit_id: str
```

- *Type:* str

---

##### `signing_key_info`<sup>Required</sup> <a name="signing_key_info" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo"></a>

```python
signing_key_info: SupportauthzSupportPermitSigningKeyInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags"></a>

```python
tags: SupportauthzSupportPermitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permit_input`<sup>Optional</sup> <a name="permit_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput"></a>

```python
permit_input: IResolvable | SupportauthzSupportPermitPermit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `signing_key_info_input`<sup>Optional</sup> <a name="signing_key_info_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput"></a>

```python
signing_key_info_input: IResolvable | SupportauthzSupportPermitSigningKeyInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `support_case_display_id_input`<sup>Optional</sup> <a name="support_case_display_id_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput"></a>

```python
support_case_display_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SupportauthzSupportPermitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `support_case_display_id`<sup>Required</sup> <a name="support_case_display_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```python
support_case_display_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportPermitConfig <a name="SupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  permit: SupportauthzSupportPermitPermit,
  signing_key_info: SupportauthzSupportPermitSigningKeyInfo,
  description: str = None,
  support_case_display_id: str = None,
  tags: IResolvable | typing.List[SupportauthzSupportPermitTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name">name</a></code> | <code>str</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo">signing_key_info</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description">description</a></code> | <code>str</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId">support_case_display_id</a></code> | <code>str</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]</code> | A list of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit"></a>

```python
permit: SupportauthzSupportPermitPermit
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `signing_key_info`<sup>Required</sup> <a name="signing_key_info" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo"></a>

```python
signing_key_info: SupportauthzSupportPermitSigningKeyInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `support_case_display_id`<sup>Optional</sup> <a name="support_case_display_id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId"></a>

```python
support_case_display_id: str
```

- *Type:* str

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SupportauthzSupportPermitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

### SupportauthzSupportPermitPermit <a name="SupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermit(
  actions: SupportauthzSupportPermitPermitActions,
  resources: SupportauthzSupportPermitPermitResources,
  conditions: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]</code> | Optional time-bound conditions (at most two). |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions"></a>

```python
actions: SupportauthzSupportPermitPermitActions
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources"></a>

```python
resources: SupportauthzSupportPermitPermitResources
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions"></a>

```python
conditions: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

### SupportauthzSupportPermitPermitActions <a name="SupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitActions(
  actions: typing.List[str] = None,
  all_actions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions">actions</a></code> | <code>typing.List[str]</code> | An explicit list of actions to grant. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions">all_actions</a></code> | <code>str</code> | Grants all actions. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `all_actions`<sup>Optional</sup> <a name="all_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions"></a>

```python
all_actions: str
```

- *Type:* str

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

### SupportauthzSupportPermitPermitConditions <a name="SupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions(
  allow_after: str = None,
  allow_before: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter">allow_after</a></code> | <code>str</code> | The permit is active only after this time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore">allow_before</a></code> | <code>str</code> | The permit is active only before this time. |

---

##### `allow_after`<sup>Optional</sup> <a name="allow_after" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter"></a>

```python
allow_after: str
```

- *Type:* str

The permit is active only after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_after SupportauthzSupportPermit#allow_after}

---

##### `allow_before`<sup>Optional</sup> <a name="allow_before" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore"></a>

```python
allow_before: str
```

- *Type:* str

The permit is active only before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_before SupportauthzSupportPermit#allow_before}

---

### SupportauthzSupportPermitPermitResources <a name="SupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitResources(
  all_resources_in_region: str = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion">all_resources_in_region</a></code> | <code>str</code> | Applies to all resources in the region. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources">resources</a></code> | <code>typing.List[str]</code> | An explicit list of resource ARNs. |

---

##### `all_resources_in_region`<sup>Optional</sup> <a name="all_resources_in_region" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion"></a>

```python
all_resources_in_region: str
```

- *Type:* str

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

### SupportauthzSupportPermitSigningKeyInfo <a name="SupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo(
  kms_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey">kms_key</a></code> | <code>str</code> | The ARN of the KMS key used to sign permit grants. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

### SupportauthzSupportPermitTags <a name="SupportauthzSupportPermitTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#key SupportauthzSupportPermit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#value SupportauthzSupportPermit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzSupportPermitPermitActionsOutputReference <a name="SupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions">reset_all_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_all_actions` <a name="reset_all_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions"></a>

```python
def reset_all_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput">all_actions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions">all_actions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_actions_input`<sup>Optional</sup> <a name="all_actions_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput"></a>

```python
all_actions_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_actions`<sup>Required</sup> <a name="all_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```python
all_actions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitPermitActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---


### SupportauthzSupportPermitPermitConditionsList <a name="SupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupportauthzSupportPermitPermitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]

---


### SupportauthzSupportPermitPermitConditionsOutputReference <a name="SupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter">reset_allow_after</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore">reset_allow_before</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_after` <a name="reset_allow_after" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter"></a>

```python
def reset_allow_after() -> None
```

##### `reset_allow_before` <a name="reset_allow_before" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore"></a>

```python
def reset_allow_before() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput">allow_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput">allow_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">allow_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">allow_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_after_input`<sup>Optional</sup> <a name="allow_after_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput"></a>

```python
allow_after_input: str
```

- *Type:* str

---

##### `allow_before_input`<sup>Optional</sup> <a name="allow_before_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput"></a>

```python
allow_before_input: str
```

- *Type:* str

---

##### `allow_after`<sup>Required</sup> <a name="allow_after" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```python
allow_after: str
```

- *Type:* str

---

##### `allow_before`<sup>Required</sup> <a name="allow_before" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```python
allow_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitPermitConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>

---


### SupportauthzSupportPermitPermitOutputReference <a name="SupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions"></a>

```python
def put_actions(
  actions: typing.List[str] = None,
  all_actions: str = None
) -> None
```

###### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.actions"></a>

- *Type:* typing.List[str]

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

###### `all_actions`<sup>Optional</sup> <a name="all_actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.allActions"></a>

- *Type:* str

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]

---

##### `put_resources` <a name="put_resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources"></a>

```python
def put_resources(
  all_resources_in_region: str = None,
  resources: typing.List[str] = None
) -> None
```

###### `all_resources_in_region`<sup>Optional</sup> <a name="all_resources_in_region" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.allResourcesInRegion"></a>

- *Type:* str

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.resources"></a>

- *Type:* typing.List[str]

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```python
actions: SupportauthzSupportPermitPermitActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```python
conditions: SupportauthzSupportPermitPermitConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```python
resources: SupportauthzSupportPermitPermitResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | SupportauthzSupportPermitPermitActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[SupportauthzSupportPermitPermitConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput"></a>

```python
resources_input: IResolvable | SupportauthzSupportPermitPermitResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitPermit
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---


### SupportauthzSupportPermitPermitResourcesOutputReference <a name="SupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion">reset_all_resources_in_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_resources_in_region` <a name="reset_all_resources_in_region" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion"></a>

```python
def reset_all_resources_in_region() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput">all_resources_in_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">all_resources_in_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_resources_in_region_input`<sup>Optional</sup> <a name="all_resources_in_region_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput"></a>

```python
all_resources_in_region_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_resources_in_region`<sup>Required</sup> <a name="all_resources_in_region" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```python
all_resources_in_region: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitPermitResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---


### SupportauthzSupportPermitSigningKeyInfoOutputReference <a name="SupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitSigningKeyInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---


### SupportauthzSupportPermitTagsList <a name="SupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupportauthzSupportPermitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SupportauthzSupportPermitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>]

---


### SupportauthzSupportPermitTagsOutputReference <a name="SupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import supportauthz_support_permit

supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupportauthzSupportPermitTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>

---



