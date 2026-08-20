# `securityhubSecurityControl` Submodule <a name="`securityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.securityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubSecurityControl <a name="SecurityhubSecurityControl" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parameters: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters],
  last_update_reason: str = None,
  security_control_arn: str = None,
  security_control_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]</code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lastUpdateReason">last_update_reason</a></code> | <code>str</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlArn">security_control_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlId">security_control_id</a></code> | <code>str</code> | The unique identifier of a security control across standards. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `last_update_reason`<sup>Optional</sup> <a name="last_update_reason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.lastUpdateReason"></a>

- *Type:* str

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `security_control_arn`<sup>Optional</sup> <a name="security_control_arn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `security_control_id`<sup>Optional</sup> <a name="security_control_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.securityControlId"></a>

- *Type:* str

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason">reset_last_update_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn">reset_security_control_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId">reset_security_control_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]

---

##### `reset_last_update_reason` <a name="reset_last_update_reason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason"></a>

```python
def reset_last_update_reason() -> None
```

##### `reset_security_control_arn` <a name="reset_security_control_arn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn"></a>

```python
def reset_security_control_arn() -> None
```

##### `reset_security_control_id` <a name="reset_security_control_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId"></a>

```python
def reset_security_control_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubSecurityControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput">last_update_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput">security_control_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput">security_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason">last_update_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn">security_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters"></a>

```python
parameters: SecurityhubSecurityControlParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a>

---

##### `last_update_reason_input`<sup>Optional</sup> <a name="last_update_reason_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput"></a>

```python
last_update_reason_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]

---

##### `security_control_arn_input`<sup>Optional</sup> <a name="security_control_arn_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput"></a>

```python
security_control_arn_input: str
```

- *Type:* str

---

##### `security_control_id_input`<sup>Optional</sup> <a name="security_control_id_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput"></a>

```python
security_control_id_input: str
```

- *Type:* str

---

##### `last_update_reason`<sup>Required</sup> <a name="last_update_reason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason"></a>

```python
last_update_reason: str
```

- *Type:* str

---

##### `security_control_arn`<sup>Required</sup> <a name="security_control_arn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn"></a>

```python
security_control_arn: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubSecurityControlConfig <a name="SecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parameters: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters],
  last_update_reason: str = None,
  security_control_arn: str = None,
  security_control_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]</code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason">last_update_reason</a></code> | <code>str</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn">security_control_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId">security_control_id</a></code> | <code>str</code> | The unique identifier of a security control across standards. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `last_update_reason`<sup>Optional</sup> <a name="last_update_reason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason"></a>

```python
last_update_reason: str
```

- *Type:* str

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `security_control_arn`<sup>Optional</sup> <a name="security_control_arn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn"></a>

```python
security_control_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `security_control_id`<sup>Optional</sup> <a name="security_control_id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

### SecurityhubSecurityControlParameters <a name="SecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlParameters(
  value: SecurityhubSecurityControlParametersValue = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value"></a>

```python
value: SecurityhubSecurityControlParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}.

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}.

---

### SecurityhubSecurityControlParametersValue <a name="SecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlParametersValue(
  boolean: bool | IResolvable = None,
  double: typing.Union[int, float] = None,
  enum: str = None,
  enum_list: typing.List[str] = None,
  integer: typing.Union[int, float] = None,
  integer_list: typing.List[typing.Union[int, float]] = None,
  string: str = None,
  string_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean">boolean</a></code> | <code>bool \| cdktn.IResolvable</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double">double</a></code> | <code>typing.Union[int, float]</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum">enum</a></code> | <code>str</code> | A control parameter that is a enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | A control parameter that is a integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string">string</a></code> | <code>str</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | A control parameter that is a list of strings. |

---

##### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean"></a>

```python
boolean: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

##### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum"></a>

```python
enum: str
```

- *Type:* str

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

##### `enum_list`<sup>Optional</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

##### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

##### `integer_list`<sup>Optional</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string"></a>

```python
string: str
```

- *Type:* str

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

##### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubSecurityControlParametersMap <a name="SecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get"></a>

```python
def get(
  key: str
) -> SecurityhubSecurityControlParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[SecurityhubSecurityControlParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>]

---


### SecurityhubSecurityControlParametersOutputReference <a name="SecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue"></a>

```python
def put_value(
  boolean: bool | IResolvable = None,
  double: typing.Union[int, float] = None,
  enum: str = None,
  enum_list: typing.List[str] = None,
  integer: typing.Union[int, float] = None,
  integer_list: typing.List[typing.Union[int, float]] = None,
  string: str = None,
  string_list: typing.List[str] = None
) -> None
```

###### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.boolean"></a>

- *Type:* bool | cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

###### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.double"></a>

- *Type:* typing.Union[int, float]

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.enum"></a>

- *Type:* str

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

###### `enum_list`<sup>Optional</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.enumList"></a>

- *Type:* typing.List[str]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

###### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.integer"></a>

- *Type:* typing.Union[int, float]

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

###### `integer_list`<sup>Optional</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.integerList"></a>

- *Type:* typing.List[typing.Union[int, float]]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

###### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.string"></a>

- *Type:* str

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

###### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.stringList"></a>

- *Type:* typing.List[str]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value"></a>

```python
value: SecurityhubSecurityControlParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | SecurityhubSecurityControlParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubSecurityControlParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>

---


### SecurityhubSecurityControlParametersValueOutputReference <a name="SecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_security_control

securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean">reset_boolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble">reset_double</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList">reset_enum_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger">reset_integer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList">reset_integer_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString">reset_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList">reset_string_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean` <a name="reset_boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean"></a>

```python
def reset_boolean() -> None
```

##### `reset_double` <a name="reset_double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble"></a>

```python
def reset_double() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_enum_list` <a name="reset_enum_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList"></a>

```python
def reset_enum_list() -> None
```

##### `reset_integer` <a name="reset_integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger"></a>

```python
def reset_integer() -> None
```

##### `reset_integer_list` <a name="reset_integer_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList"></a>

```python
def reset_integer_list() -> None
```

##### `reset_string` <a name="reset_string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString"></a>

```python
def reset_string() -> None
```

##### `reset_string_list` <a name="reset_string_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList"></a>

```python
def reset_string_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput">boolean_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput">double_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput">enum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput">enum_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput">integer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput">integer_list_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput">string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput">string_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean">boolean</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double">double</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum">enum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string">string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_input`<sup>Optional</sup> <a name="boolean_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput"></a>

```python
boolean_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_input`<sup>Optional</sup> <a name="double_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput"></a>

```python
double_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput"></a>

```python
enum_input: str
```

- *Type:* str

---

##### `enum_list_input`<sup>Optional</sup> <a name="enum_list_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput"></a>

```python
enum_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer_input`<sup>Optional</sup> <a name="integer_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput"></a>

```python
integer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list_input`<sup>Optional</sup> <a name="integer_list_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput"></a>

```python
integer_list_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string_input`<sup>Optional</sup> <a name="string_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput"></a>

```python
string_input: str
```

- *Type:* str

---

##### `string_list_input`<sup>Optional</sup> <a name="string_list_input" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput"></a>

```python
string_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```python
boolean: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```python
enum: str
```

- *Type:* str

---

##### `enum_list`<sup>Required</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list`<sup>Required</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```python
string: str
```

- *Type:* str

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubSecurityControlParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---



