# `iotThingPrincipalAttachment` Submodule <a name="`iotThingPrincipalAttachment` Submodule" id="@cdktn/provider-awscc.iotThingPrincipalAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingPrincipalAttachment <a name="IotThingPrincipalAttachment" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment awscc_iot_thing_principal_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal: str,
  thing_name: str,
  thing_principal_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.principal">principal</a></code> | <code>str</code> | The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.thingName">thing_name</a></code> | <code>str</code> | The name of the AWS IoT thing. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.thingPrincipalType">thing_principal_type</a></code> | <code>str</code> | The type of the relation you want to specify when you attach a principal to a thing. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.principal"></a>

- *Type:* str

The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.thingName"></a>

- *Type:* str

The name of the AWS IoT thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_name IotThingPrincipalAttachment#thing_name}

---

##### `thing_principal_type`<sup>Optional</sup> <a name="thing_principal_type" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.thingPrincipalType"></a>

- *Type:* str

The type of the relation you want to specify when you attach a principal to a thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_principal_type IotThingPrincipalAttachment#thing_principal_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetThingPrincipalType">reset_thing_principal_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_thing_principal_type` <a name="reset_thing_principal_type" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetThingPrincipalType"></a>

```python
def reset_thing_principal_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotThingPrincipalAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotThingPrincipalAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotThingPrincipalAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotThingPrincipalAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotThingPrincipalAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingNameInput">thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalTypeInput">thing_principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalType">thing_principal_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `thing_name_input`<sup>Optional</sup> <a name="thing_name_input" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingNameInput"></a>

```python
thing_name_input: str
```

- *Type:* str

---

##### `thing_principal_type_input`<sup>Optional</sup> <a name="thing_principal_type_input" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalTypeInput"></a>

```python
thing_principal_type_input: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `thing_principal_type`<sup>Required</sup> <a name="thing_principal_type" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingPrincipalType"></a>

```python
thing_principal_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingPrincipalAttachmentConfig <a name="IotThingPrincipalAttachmentConfig" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_principal_attachment

iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal: str,
  thing_name: str,
  thing_principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal">principal</a></code> | <code>str</code> | The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingName">thing_name</a></code> | <code>str</code> | The name of the AWS IoT thing. |
| <code><a href="#@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingPrincipalType">thing_principal_type</a></code> | <code>str</code> | The type of the relation you want to specify when you attach a principal to a thing. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

The name of the AWS IoT thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_name IotThingPrincipalAttachment#thing_name}

---

##### `thing_principal_type`<sup>Optional</sup> <a name="thing_principal_type" id="@cdktn/provider-awscc.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thingPrincipalType"></a>

```python
thing_principal_type: str
```

- *Type:* str

The type of the relation you want to specify when you attach a principal to a thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_principal_type IotThingPrincipalAttachment#thing_principal_type}

---



