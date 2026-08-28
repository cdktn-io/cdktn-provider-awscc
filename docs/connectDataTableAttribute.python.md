# `connectDataTableAttribute` Submodule <a name="`connectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.connectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableAttribute <a name="ConnectDataTableAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttribute(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_arn: str,
  instance_arn: str,
  name: str,
  value_type: str,
  description: str = None,
  primary: bool | IResolvable = None,
  validation: ConnectDataTableAttributeValidation = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dataTableArn">data_table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dataTableArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.valueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.primary"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.validation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation">put_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation">reset_validation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_validation` <a name="put_validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation"></a>

```python
def put_validation(
  enum: ConnectDataTableAttributeValidationEnum = None,
  exclusive_maximum: typing.Union[int, float] = None,
  exclusive_minimum: typing.Union[int, float] = None,
  maximum: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_values: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_values: typing.Union[int, float] = None,
  multiple_of: typing.Union[int, float] = None
) -> None
```

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.enum"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

###### `exclusive_maximum`<sup>Optional</sup> <a name="exclusive_maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.exclusiveMaximum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

###### `exclusive_minimum`<sup>Optional</sup> <a name="exclusive_minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.exclusiveMinimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

###### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

###### `max_values`<sup>Optional</sup> <a name="max_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.maxValues"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

###### `min_values`<sup>Optional</sup> <a name="min_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.minValues"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

###### `multiple_of`<sup>Optional</sup> <a name="multiple_of" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.multipleOf"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_validation` <a name="reset_validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation"></a>

```python
def reset_validation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttribute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttribute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectDataTableAttribute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion">lock_version</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput">data_table_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput">validation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lock_version`<sup>Required</sup> <a name="lock_version" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion"></a>

```python
lock_version: ConnectDataTableAttributeLockVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation"></a>

```python
validation: ConnectDataTableAttributeValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a>

---

##### `data_table_arn_input`<sup>Optional</sup> <a name="data_table_arn_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput"></a>

```python
data_table_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput"></a>

```python
validation_input: IResolvable | ConnectDataTableAttributeValidation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableAttributeConfig <a name="ConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_arn: str,
  instance_arn: str,
  name: str,
  value_type: str,
  description: str = None,
  primary: bool | IResolvable = None,
  validation: ConnectDataTableAttributeValidation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation"></a>

```python
validation: ConnectDataTableAttributeValidation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

### ConnectDataTableAttributeLockVersion <a name="ConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeLockVersion()
```


### ConnectDataTableAttributeValidation <a name="ConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeValidation(
  enum: ConnectDataTableAttributeValidationEnum = None,
  exclusive_maximum: typing.Union[int, float] = None,
  exclusive_minimum: typing.Union[int, float] = None,
  maximum: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_values: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_values: typing.Union[int, float] = None,
  multiple_of: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum">exclusive_maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum">exclusive_minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues">max_values</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues">min_values</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf">multiple_of</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}. |

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum"></a>

```python
enum: ConnectDataTableAttributeValidationEnum
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

##### `exclusive_maximum`<sup>Optional</sup> <a name="exclusive_maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum"></a>

```python
exclusive_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

##### `exclusive_minimum`<sup>Optional</sup> <a name="exclusive_minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum"></a>

```python
exclusive_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

##### `max_values`<sup>Optional</sup> <a name="max_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues"></a>

```python
max_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

##### `min_values`<sup>Optional</sup> <a name="min_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues"></a>

```python
min_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

##### `multiple_of`<sup>Optional</sup> <a name="multiple_of" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf"></a>

```python
multiple_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

### ConnectDataTableAttributeValidationEnum <a name="ConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeValidationEnum(
  strict: bool | IResolvable = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict">strict</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}. |

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict"></a>

```python
strict: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableAttributeLockVersionOutputReference <a name="ConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable">data_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `data_table`<sup>Required</sup> <a name="data_table" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```python
data_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```python
internal_value: ConnectDataTableAttributeLockVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a>

---


### ConnectDataTableAttributeValidationEnumOutputReference <a name="ConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict">reset_strict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_strict` <a name="reset_strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict"></a>

```python
def reset_strict() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput">strict_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict">strict</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `strict_input`<sup>Optional</sup> <a name="strict_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput"></a>

```python
strict_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```python
strict: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectDataTableAttributeValidationEnum
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---


### ConnectDataTableAttributeValidationOutputReference <a name="ConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_attribute

connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum">put_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum">reset_exclusive_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum">reset_exclusive_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues">reset_max_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues">reset_min_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf">reset_multiple_of</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum` <a name="put_enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum"></a>

```python
def put_enum(
  strict: bool | IResolvable = None,
  values: typing.List[str] = None
) -> None
```

###### `strict`<sup>Optional</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.strict"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_exclusive_maximum` <a name="reset_exclusive_maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum"></a>

```python
def reset_exclusive_maximum() -> None
```

##### `reset_exclusive_minimum` <a name="reset_exclusive_minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum"></a>

```python
def reset_exclusive_minimum() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_max_values` <a name="reset_max_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues"></a>

```python
def reset_max_values() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_min_values` <a name="reset_min_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues"></a>

```python
def reset_min_values() -> None
```

##### `reset_multiple_of` <a name="reset_multiple_of" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf"></a>

```python
def reset_multiple_of() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput">enum_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput">exclusive_maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput">exclusive_minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput">max_values_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput">min_values_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput">multiple_of_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">exclusive_maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">exclusive_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues">max_values</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues">min_values</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf">multiple_of</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```python
enum: ConnectDataTableAttributeValidationEnumOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput"></a>

```python
enum_input: IResolvable | ConnectDataTableAttributeValidationEnum
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `exclusive_maximum_input`<sup>Optional</sup> <a name="exclusive_maximum_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput"></a>

```python
exclusive_maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclusive_minimum_input`<sup>Optional</sup> <a name="exclusive_minimum_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput"></a>

```python
exclusive_minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_values_input`<sup>Optional</sup> <a name="max_values_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput"></a>

```python
max_values_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_values_input`<sup>Optional</sup> <a name="min_values_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput"></a>

```python
min_values_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiple_of_input`<sup>Optional</sup> <a name="multiple_of_input" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput"></a>

```python
multiple_of_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclusive_maximum`<sup>Required</sup> <a name="exclusive_maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```python
exclusive_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclusive_minimum`<sup>Required</sup> <a name="exclusive_minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```python
exclusive_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_values`<sup>Required</sup> <a name="max_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```python
max_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_values`<sup>Required</sup> <a name="min_values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```python
min_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiple_of`<sup>Required</sup> <a name="multiple_of" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```python
multiple_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectDataTableAttributeValidation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---



