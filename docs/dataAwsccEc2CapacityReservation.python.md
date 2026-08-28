# `dataAwsccEc2CapacityReservation` Submodule <a name="`dataAwsccEc2CapacityReservation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2CapacityReservation <a name="DataAwsccEc2CapacityReservation" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation awscc_ec2_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation#id DataAwsccEc2CapacityReservation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2CapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2CapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2CapacityReservation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2CapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2CapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availableInstanceCount">available_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityAllocationSet">capacity_allocation_set</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList">DataAwsccEc2CapacityReservationCapacityAllocationSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationArn">capacity_reservation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationFleetId">capacity_reservation_fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.commitmentInfo">commitment_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference">DataAwsccEc2CapacityReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.deliveryPreference">delivery_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ebsOptimized">ebs_optimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDateType">end_date_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ephemeralStorage">ephemeral_storage</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceMatchCriteria">instance_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instancePlatform">instance_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.outPostArn">out_post_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.placementGroupArn">placement_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.reservationType">reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList">DataAwsccEc2CapacityReservationTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.totalInstanceCount">total_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.unusedReservationBillingOwnerId">unused_reservation_billing_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `available_instance_count`<sup>Required</sup> <a name="available_instance_count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availableInstanceCount"></a>

```python
available_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_allocation_set`<sup>Required</sup> <a name="capacity_allocation_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityAllocationSet"></a>

```python
capacity_allocation_set: DataAwsccEc2CapacityReservationCapacityAllocationSetList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList">DataAwsccEc2CapacityReservationCapacityAllocationSetList</a>

---

##### `capacity_reservation_arn`<sup>Required</sup> <a name="capacity_reservation_arn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationArn"></a>

```python
capacity_reservation_arn: str
```

- *Type:* str

---

##### `capacity_reservation_fleet_id`<sup>Required</sup> <a name="capacity_reservation_fleet_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationFleetId"></a>

```python
capacity_reservation_fleet_id: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `commitment_info`<sup>Required</sup> <a name="commitment_info" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.commitmentInfo"></a>

```python
commitment_info: DataAwsccEc2CapacityReservationCommitmentInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference">DataAwsccEc2CapacityReservationCommitmentInfoOutputReference</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `delivery_preference`<sup>Required</sup> <a name="delivery_preference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.deliveryPreference"></a>

```python
delivery_preference: str
```

- *Type:* str

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ebsOptimized"></a>

```python
ebs_optimized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_date_type`<sup>Required</sup> <a name="end_date_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDateType"></a>

```python
end_date_type: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ephemeralStorage"></a>

```python
ephemeral_storage: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_match_criteria`<sup>Required</sup> <a name="instance_match_criteria" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceMatchCriteria"></a>

```python
instance_match_criteria: str
```

- *Type:* str

---

##### `instance_platform`<sup>Required</sup> <a name="instance_platform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instancePlatform"></a>

```python
instance_platform: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `out_post_arn`<sup>Required</sup> <a name="out_post_arn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.outPostArn"></a>

```python
out_post_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `placement_group_arn`<sup>Required</sup> <a name="placement_group_arn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.placementGroupArn"></a>

```python
placement_group_arn: str
```

- *Type:* str

---

##### `reservation_type`<sup>Required</sup> <a name="reservation_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.reservationType"></a>

```python
reservation_type: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tagSpecifications"></a>

```python
tag_specifications: DataAwsccEc2CapacityReservationTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList">DataAwsccEc2CapacityReservationTagSpecificationsList</a>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `total_instance_count`<sup>Required</sup> <a name="total_instance_count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.totalInstanceCount"></a>

```python
total_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unused_reservation_billing_owner_id`<sup>Required</sup> <a name="unused_reservation_billing_owner_id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.unusedReservationBillingOwnerId"></a>

```python
unused_reservation_billing_owner_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2CapacityReservationCapacityAllocationSet <a name="DataAwsccEc2CapacityReservationCapacityAllocationSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet()
```


### DataAwsccEc2CapacityReservationCommitmentInfo <a name="DataAwsccEc2CapacityReservationCommitmentInfo" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo()
```


### DataAwsccEc2CapacityReservationConfig <a name="DataAwsccEc2CapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation#id DataAwsccEc2CapacityReservation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2CapacityReservationTagSpecifications <a name="DataAwsccEc2CapacityReservationTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications()
```


### DataAwsccEc2CapacityReservationTagSpecificationsTags <a name="DataAwsccEc2CapacityReservationTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2CapacityReservationCapacityAllocationSetList <a name="DataAwsccEc2CapacityReservationCapacityAllocationSetList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference <a name="DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType">allocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet">DataAwsccEc2CapacityReservationCapacityAllocationSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_type`<sup>Required</sup> <a name="allocation_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType"></a>

```python
allocation_type: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2CapacityReservationCapacityAllocationSet
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet">DataAwsccEc2CapacityReservationCapacityAllocationSet</a>

---


### DataAwsccEc2CapacityReservationCommitmentInfoOutputReference <a name="DataAwsccEc2CapacityReservationCommitmentInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate">commitment_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount">committed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo">DataAwsccEc2CapacityReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_end_date`<sup>Required</sup> <a name="commitment_end_date" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```python
commitment_end_date: str
```

- *Type:* str

---

##### `committed_instance_count`<sup>Required</sup> <a name="committed_instance_count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```python
committed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2CapacityReservationCommitmentInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo">DataAwsccEc2CapacityReservationCommitmentInfo</a>

---


### DataAwsccEc2CapacityReservationTagSpecificationsList <a name="DataAwsccEc2CapacityReservationTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2CapacityReservationTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2CapacityReservationTagSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList">DataAwsccEc2CapacityReservationTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications">DataAwsccEc2CapacityReservationTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.tags"></a>

```python
tags: DataAwsccEc2CapacityReservationTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList">DataAwsccEc2CapacityReservationTagSpecificationsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2CapacityReservationTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications">DataAwsccEc2CapacityReservationTagSpecifications</a>

---


### DataAwsccEc2CapacityReservationTagSpecificationsTagsList <a name="DataAwsccEc2CapacityReservationTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference <a name="DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_capacity_reservation

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags">DataAwsccEc2CapacityReservationTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2CapacityReservationTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags">DataAwsccEc2CapacityReservationTagSpecificationsTags</a>

---



