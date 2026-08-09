# `dataAwsccAutoscalingWarmPool` Submodule <a name="`dataAwsccAutoscalingWarmPool` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingWarmPool <a name="DataAwsccAutoscalingWarmPool" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_warm_pool awscc_autoscaling_warm_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_warm_pool#id DataAwsccAutoscalingWarmPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingWarmPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAutoscalingWarmPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAutoscalingWarmPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAutoscalingWarmPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingWarmPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.instanceReusePolicy">instance_reuse_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference">DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.maxGroupPreparedCapacity">max_group_prepared_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.poolState">pool_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

---

##### `instance_reuse_policy`<sup>Required</sup> <a name="instance_reuse_policy" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.instanceReusePolicy"></a>

```python
instance_reuse_policy: DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference">DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference</a>

---

##### `max_group_prepared_capacity`<sup>Required</sup> <a name="max_group_prepared_capacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.maxGroupPreparedCapacity"></a>

```python
max_group_prepared_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_state`<sup>Required</sup> <a name="pool_state" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.poolState"></a>

```python
pool_state: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingWarmPoolConfig <a name="DataAwsccAutoscalingWarmPoolConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_warm_pool#id DataAwsccAutoscalingWarmPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingWarmPoolInstanceReusePolicy <a name="DataAwsccAutoscalingWarmPoolInstanceReusePolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference <a name="DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_warm_pool

dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn">reuse_on_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicy">DataAwsccAutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reuse_on_scale_in`<sup>Required</sup> <a name="reuse_on_scale_in" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn"></a>

```python
reuse_on_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingWarmPoolInstanceReusePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingWarmPool.DataAwsccAutoscalingWarmPoolInstanceReusePolicy">DataAwsccAutoscalingWarmPoolInstanceReusePolicy</a>

---



