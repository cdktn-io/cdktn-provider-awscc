# `dataAwsccIotfleetwiseSignalCatalog` Submodule <a name="`dataAwsccIotfleetwiseSignalCatalog` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseSignalCatalog <a name="DataAwsccIotfleetwiseSignalCatalog" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_signal_catalog#id DataAwsccIotfleetwiseSignalCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotfleetwiseSignalCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotfleetwiseSignalCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseSignalCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodeCounts">node_counts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference">DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList">DataAwsccIotfleetwiseSignalCatalogNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList">DataAwsccIotfleetwiseSignalCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_counts`<sup>Required</sup> <a name="node_counts" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodeCounts"></a>

```python
node_counts: DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference">DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodes"></a>

```python
nodes: DataAwsccIotfleetwiseSignalCatalogNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList">DataAwsccIotfleetwiseSignalCatalogNodesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tags"></a>

```python
tags: DataAwsccIotfleetwiseSignalCatalogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList">DataAwsccIotfleetwiseSignalCatalogTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseSignalCatalogConfig <a name="DataAwsccIotfleetwiseSignalCatalogConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_signal_catalog#id DataAwsccIotfleetwiseSignalCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseSignalCatalogNodeCounts <a name="DataAwsccIotfleetwiseSignalCatalogNodeCounts" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts()
```


### DataAwsccIotfleetwiseSignalCatalogNodes <a name="DataAwsccIotfleetwiseSignalCatalogNodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes()
```


### DataAwsccIotfleetwiseSignalCatalogNodesActuator <a name="DataAwsccIotfleetwiseSignalCatalogNodesActuator" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator()
```


### DataAwsccIotfleetwiseSignalCatalogNodesAttribute <a name="DataAwsccIotfleetwiseSignalCatalogNodesAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute()
```


### DataAwsccIotfleetwiseSignalCatalogNodesBranch <a name="DataAwsccIotfleetwiseSignalCatalogNodesBranch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch()
```


### DataAwsccIotfleetwiseSignalCatalogNodesSensor <a name="DataAwsccIotfleetwiseSignalCatalogNodesSensor" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor()
```


### DataAwsccIotfleetwiseSignalCatalogTags <a name="DataAwsccIotfleetwiseSignalCatalogTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators">total_actuators</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes">total_attributes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches">total_branches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes">total_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors">total_sensors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts">DataAwsccIotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_actuators`<sup>Required</sup> <a name="total_actuators" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators"></a>

```python
total_actuators: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_attributes`<sup>Required</sup> <a name="total_attributes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes"></a>

```python
total_attributes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_branches`<sup>Required</sup> <a name="total_branches" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches"></a>

```python
total_branches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_nodes`<sup>Required</sup> <a name="total_nodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes"></a>

```python
total_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_sensors`<sup>Required</sup> <a name="total_sensors" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors"></a>

```python
total_sensors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodeCounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts">DataAwsccIotfleetwiseSignalCatalogNodeCounts</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue">assigned_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator">DataAwsccIotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assigned_value`<sup>Required</sup> <a name="assigned_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue"></a>

```python
assigned_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodesActuator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator">DataAwsccIotfleetwiseSignalCatalogNodesActuator</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue">assigned_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute">DataAwsccIotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assigned_value`<sup>Required</sup> <a name="assigned_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue"></a>

```python
assigned_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodesAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute">DataAwsccIotfleetwiseSignalCatalogNodesAttribute</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch">DataAwsccIotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodesBranch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch">DataAwsccIotfleetwiseSignalCatalogNodesBranch</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesList <a name="DataAwsccIotfleetwiseSignalCatalogNodesList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseSignalCatalogNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseSignalCatalogNodesOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.actuator">actuator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.sensor">sensor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes">DataAwsccIotfleetwiseSignalCatalogNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actuator`<sup>Required</sup> <a name="actuator" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.actuator"></a>

```python
actuator: DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.attribute"></a>

```python
attribute: DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.branch"></a>

```python
branch: DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference</a>

---

##### `sensor`<sup>Required</sup> <a name="sensor" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.sensor"></a>

```python
sensor: DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes">DataAwsccIotfleetwiseSignalCatalogNodes</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor">DataAwsccIotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogNodesSensor
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor">DataAwsccIotfleetwiseSignalCatalogNodesSensor</a>

---


### DataAwsccIotfleetwiseSignalCatalogTagsList <a name="DataAwsccIotfleetwiseSignalCatalogTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseSignalCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseSignalCatalogTagsOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_signal_catalog

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags">DataAwsccIotfleetwiseSignalCatalogTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseSignalCatalogTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags">DataAwsccIotfleetwiseSignalCatalogTags</a>

---



