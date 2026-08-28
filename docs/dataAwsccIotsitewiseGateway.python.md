# `dataAwsccIotsitewiseGateway` Submodule <a name="`dataAwsccIotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseGateway <a name="DataAwsccIotsitewiseGateway" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsitewise_gateway#id DataAwsccIotsitewiseGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotsitewiseGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayCapabilitySummaries">gateway_capability_summaries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList">DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayPlatform">gateway_platform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayVersion">gateway_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList">DataAwsccIotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `gateway_capability_summaries`<sup>Required</sup> <a name="gateway_capability_summaries" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```python
gateway_capability_summaries: DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList">DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `gateway_platform`<sup>Required</sup> <a name="gateway_platform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayPlatform"></a>

```python
gateway_platform: DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `gateway_version`<sup>Required</sup> <a name="gateway_version" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.gatewayVersion"></a>

```python
gateway_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tags"></a>

```python
tags: DataAwsccIotsitewiseGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList">DataAwsccIotsitewiseGatewayTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseGatewayConfig <a name="DataAwsccIotsitewiseGatewayConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotsitewise_gateway#id DataAwsccIotsitewiseGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries()
```


### DataAwsccIotsitewiseGatewayGatewayPlatform <a name="DataAwsccIotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform()
```


### DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2()
```


### DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe <a name="DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe()
```


### DataAwsccIotsitewiseGatewayTags <a name="DataAwsccIotsitewiseGatewayTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">capability_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">capability_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries">DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capability_configuration`<sup>Required</sup> <a name="capability_configuration" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```python
capability_configuration: str
```

- *Type:* str

---

##### `capability_namespace`<sup>Required</sup> <a name="capability_namespace" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```python
capability_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries">DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">core_device_operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">core_device_thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_device_operating_system`<sup>Required</sup> <a name="core_device_operating_system" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```python
core_device_operating_system: str
```

- *Type:* str

---

##### `core_device_thing_name`<sup>Required</sup> <a name="core_device_thing_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```python
core_device_thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">greengrass_v2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">siemens_ie</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform">DataAwsccIotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `greengrass_v2`<sup>Required</sup> <a name="greengrass_v2" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```python
greengrass_v2: DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `siemens_ie`<sup>Required</sup> <a name="siemens_ie" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```python
siemens_ie: DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseGatewayGatewayPlatform
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatform">DataAwsccIotsitewiseGatewayGatewayPlatform</a>

---


### DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">iot_core_thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iot_core_thing_name`<sup>Required</sup> <a name="iot_core_thing_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```python
iot_core_thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe">DataAwsccIotsitewiseGatewayGatewayPlatformSiemensIe</a>

---


### DataAwsccIotsitewiseGatewayTagsList <a name="DataAwsccIotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotsitewiseGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotsitewiseGatewayTagsOutputReference <a name="DataAwsccIotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_gateway

dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags">DataAwsccIotsitewiseGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseGateway.DataAwsccIotsitewiseGatewayTags">DataAwsccIotsitewiseGatewayTags</a>

---



