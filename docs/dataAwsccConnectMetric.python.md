# `dataAwsccConnectMetric` Submodule <a name="`dataAwsccConnectMetric` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectMetric <a name="DataAwsccConnectMetric" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetric(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetric.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime">created_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser">created_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod">creation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime">effective_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings">groupings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser">last_modified_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn">metric_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation">metric_calculation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator">positive_trend_indicator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource">primary_event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType">primary_event_source_effective_timestamp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate">refresh_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats">supported_stats</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation">supports_custom_calculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation">supports_preaggregate_calculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime"></a>

```python
created_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_user`<sup>Required</sup> <a name="created_user" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser"></a>

```python
created_user: DataAwsccConnectMetricCreatedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a>

---

##### `creation_method`<sup>Required</sup> <a name="creation_method" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod"></a>

```python
creation_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime"></a>

```python
effective_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters"></a>

```python
filters: DataAwsccConnectMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a>

---

##### `groupings`<sup>Required</sup> <a name="groupings" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings"></a>

```python
groupings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified_user`<sup>Required</sup> <a name="last_modified_user" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser"></a>

```python
last_modified_user: DataAwsccConnectMetricLastModifiedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a>

---

##### `metric_arn`<sup>Required</sup> <a name="metric_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn"></a>

```python
metric_arn: str
```

- *Type:* str

---

##### `metric_calculation`<sup>Required</sup> <a name="metric_calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation"></a>

```python
metric_calculation: DataAwsccConnectMetricMetricCalculationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `positive_trend_indicator`<sup>Required</sup> <a name="positive_trend_indicator" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator"></a>

```python
positive_trend_indicator: str
```

- *Type:* str

---

##### `primary_event_source`<sup>Required</sup> <a name="primary_event_source" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource"></a>

```python
primary_event_source: str
```

- *Type:* str

---

##### `primary_event_source_effective_timestamp_type`<sup>Required</sup> <a name="primary_event_source_effective_timestamp_type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```python
primary_event_source_effective_timestamp_type: str
```

- *Type:* str

---

##### `refresh_rate`<sup>Required</sup> <a name="refresh_rate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate"></a>

```python
refresh_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `supported_stats`<sup>Required</sup> <a name="supported_stats" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats"></a>

```python
supported_stats: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_custom_calculation`<sup>Required</sup> <a name="supports_custom_calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation"></a>

```python
supports_custom_calculation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_preaggregate_calculation`<sup>Required</sup> <a name="supports_preaggregate_calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation"></a>

```python
supports_preaggregate_calculation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags"></a>

```python
tags: DataAwsccConnectMetricTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectMetricConfig <a name="DataAwsccConnectMetricConfig" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectMetricCreatedUser <a name="DataAwsccConnectMetricCreatedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser()
```


### DataAwsccConnectMetricFilters <a name="DataAwsccConnectMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricFilters()
```


### DataAwsccConnectMetricLastModifiedUser <a name="DataAwsccConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser()
```


### DataAwsccConnectMetricMetricCalculation <a name="DataAwsccConnectMetricMetricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation()
```


### DataAwsccConnectMetricMetricCalculationCalculationComponents <a name="DataAwsccConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents()
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters()
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition()
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition()
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition()
```


### DataAwsccConnectMetricTags <a name="DataAwsccConnectMetricTags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectMetricCreatedUserOutputReference <a name="DataAwsccConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn">aws_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn">connect_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_identity_arn`<sup>Required</sup> <a name="aws_identity_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```python
aws_identity_arn: str
```

- *Type:* str

---

##### `connect_user_arn`<sup>Required</sup> <a name="connect_user_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```python
connect_user_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricCreatedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a>

---


### DataAwsccConnectMetricFiltersList <a name="DataAwsccConnectMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectMetricFiltersOutputReference <a name="DataAwsccConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a>

---


### DataAwsccConnectMetricLastModifiedUserOutputReference <a name="DataAwsccConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">aws_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn">connect_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_identity_arn`<sup>Required</sup> <a name="aws_identity_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```python
aws_identity_arn: str
```

- *Type:* str

---

##### `connect_user_arn`<sup>Required</sup> <a name="connect_user_arn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```python
connect_user_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricLastModifiedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">boolean_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">metric_filter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">negate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">number_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">string_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_condition`<sup>Required</sup> <a name="boolean_condition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```python
boolean_condition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `metric_filter_key`<sup>Required</sup> <a name="metric_filter_key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```python
metric_filter_key: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```python
negate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `number_condition`<sup>Required</sup> <a name="number_condition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```python
number_condition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `string_condition`<sup>Required</sup> <a name="string_condition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```python
string_condition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">metric_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `metric_filters`<sup>Required</sup> <a name="metric_filters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```python
metric_filters: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `metric_id`<sup>Required</sup> <a name="metric_id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```python
metric_id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculationCalculationComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a>

---


### DataAwsccConnectMetricMetricCalculationOutputReference <a name="DataAwsccConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation">calculation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents">calculation_components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `calculation`<sup>Required</sup> <a name="calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```python
calculation: str
```

- *Type:* str

---

##### `calculation_components`<sup>Required</sup> <a name="calculation_components" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```python
calculation_components: DataAwsccConnectMetricMetricCalculationCalculationComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricMetricCalculation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a>

---


### DataAwsccConnectMetricTagsList <a name="DataAwsccConnectMetricTagsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectMetricTagsOutputReference <a name="DataAwsccConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_metric

dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectMetricTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a>

---



