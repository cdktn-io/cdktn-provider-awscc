# `connectPredefinedAttribute` Submodule <a name="`connectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.connectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPredefinedAttribute <a name="ConnectPredefinedAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttribute(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  name: str,
  attribute_configuration: ConnectPredefinedAttributeAttributeConfiguration = None,
  purposes: typing.List[str] = None,
  values: ConnectPredefinedAttributeValues = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.attributeConfiguration">attribute_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.purposes">purposes</a></code> | <code>typing.List[str]</code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.name"></a>

- *Type:* str

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `attribute_configuration`<sup>Optional</sup> <a name="attribute_configuration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.attributeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `purposes`<sup>Optional</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.purposes"></a>

- *Type:* typing.List[str]

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.values"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration">put_attribute_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration">reset_attribute_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes">reset_purposes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues">reset_values</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attribute_configuration` <a name="put_attribute_configuration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration"></a>

```python
def put_attribute_configuration(
  enable_value_validation_on_association: bool | IResolvable = None,
  is_read_only: bool | IResolvable = None
) -> None
```

###### `enable_value_validation_on_association`<sup>Optional</sup> <a name="enable_value_validation_on_association" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.enableValueValidationOnAssociation"></a>

- *Type:* bool | cdktn.IResolvable

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

###### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.isReadOnly"></a>

- *Type:* bool | cdktn.IResolvable

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

##### `put_values` <a name="put_values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues"></a>

```python
def put_values(
  string_list: typing.List[str] = None
) -> None
```

###### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues.parameter.stringList"></a>

- *Type:* typing.List[str]

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

##### `reset_attribute_configuration` <a name="reset_attribute_configuration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration"></a>

```python
def reset_attribute_configuration() -> None
```

##### `reset_purposes` <a name="reset_purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes"></a>

```python
def reset_purposes() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues"></a>

```python
def reset_values() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttribute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttribute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectPredefinedAttribute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration">attribute_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput">attribute_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput">purposes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput">values_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes">purposes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_configuration`<sup>Required</sup> <a name="attribute_configuration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration"></a>

```python
attribute_configuration: ConnectPredefinedAttributeAttributeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values"></a>

```python
values: ConnectPredefinedAttributeValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a>

---

##### `attribute_configuration_input`<sup>Optional</sup> <a name="attribute_configuration_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput"></a>

```python
attribute_configuration_input: IResolvable | ConnectPredefinedAttributeAttributeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `purposes_input`<sup>Optional</sup> <a name="purposes_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput"></a>

```python
purposes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput"></a>

```python
values_input: IResolvable | ConnectPredefinedAttributeValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purposes`<sup>Required</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes"></a>

```python
purposes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPredefinedAttributeAttributeConfiguration <a name="ConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration(
  enable_value_validation_on_association: bool | IResolvable = None,
  is_read_only: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation">enable_value_validation_on_association</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables customers to enforce strict validation on the specific values that this predefined attribute can hold. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly">is_read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows the predefined attribute to show up and be managed in the Amazon Connect UI. |

---

##### `enable_value_validation_on_association`<sup>Optional</sup> <a name="enable_value_validation_on_association" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation"></a>

```python
enable_value_validation_on_association: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

##### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly"></a>

```python
is_read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

### ConnectPredefinedAttributeConfig <a name="ConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttributeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  name: str,
  attribute_configuration: ConnectPredefinedAttributeAttributeConfiguration = None,
  purposes: typing.List[str] = None,
  values: ConnectPredefinedAttributeValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name">name</a></code> | <code>str</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration">attribute_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes">purposes</a></code> | <code>typing.List[str]</code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `attribute_configuration`<sup>Optional</sup> <a name="attribute_configuration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration"></a>

```python
attribute_configuration: ConnectPredefinedAttributeAttributeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `purposes`<sup>Optional</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes"></a>

```python
purposes: typing.List[str]
```

- *Type:* typing.List[str]

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values"></a>

```python
values: ConnectPredefinedAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

### ConnectPredefinedAttributeValues <a name="ConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttributeValues(
  string_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | Predefined attribute values of type string list. |

---

##### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="ConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation">reset_enable_value_validation_on_association</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly">reset_is_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_value_validation_on_association` <a name="reset_enable_value_validation_on_association" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation"></a>

```python
def reset_enable_value_validation_on_association() -> None
```

##### `reset_is_read_only` <a name="reset_is_read_only" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly"></a>

```python
def reset_is_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput">enable_value_validation_on_association_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput">is_read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">enable_value_validation_on_association</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">is_read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_value_validation_on_association_input`<sup>Optional</sup> <a name="enable_value_validation_on_association_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput"></a>

```python
enable_value_validation_on_association_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_read_only_input`<sup>Optional</sup> <a name="is_read_only_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput"></a>

```python
is_read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_value_validation_on_association`<sup>Required</sup> <a name="enable_value_validation_on_association" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```python
enable_value_validation_on_association: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```python
is_read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectPredefinedAttributeAttributeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---


### ConnectPredefinedAttributeValuesOutputReference <a name="ConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_predefined_attribute

connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList">reset_string_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_string_list` <a name="reset_string_list" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList"></a>

```python
def reset_string_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput">string_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_list_input`<sup>Optional</sup> <a name="string_list_input" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput"></a>

```python
string_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectPredefinedAttributeValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---



