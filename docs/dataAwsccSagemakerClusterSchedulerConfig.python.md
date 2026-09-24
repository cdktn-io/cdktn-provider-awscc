# `dataAwsccSagemakerClusterSchedulerConfig` Submodule <a name="`dataAwsccSagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerClusterSchedulerConfig <a name="DataAwsccSagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config#id DataAwsccSagemakerClusterSchedulerConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerClusterSchedulerConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">cluster_scheduler_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">cluster_scheduler_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">cluster_scheduler_config_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.schedulerConfig">scheduler_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList">DataAwsccSagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `cluster_scheduler_config_arn`<sup>Required</sup> <a name="cluster_scheduler_config_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```python
cluster_scheduler_config_arn: str
```

- *Type:* str

---

##### `cluster_scheduler_config_id`<sup>Required</sup> <a name="cluster_scheduler_config_id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```python
cluster_scheduler_config_id: str
```

- *Type:* str

---

##### `cluster_scheduler_config_version`<sup>Required</sup> <a name="cluster_scheduler_config_version" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```python
cluster_scheduler_config_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scheduler_config`<sup>Required</sup> <a name="scheduler_config" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```python
scheduler_config: DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tags"></a>

```python
tags: DataAwsccSagemakerClusterSchedulerConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList">DataAwsccSagemakerClusterSchedulerConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerClusterSchedulerConfigConfig <a name="DataAwsccSagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config#id DataAwsccSagemakerClusterSchedulerConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig()
```


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses()
```


### DataAwsccSagemakerClusterSchedulerConfigTags <a name="DataAwsccSagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">fair_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">idle_resource_sharing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">priority_classes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fair_share`<sup>Required</sup> <a name="fair_share" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```python
fair_share: str
```

- *Type:* str

---

##### `idle_resource_sharing`<sup>Required</sup> <a name="idle_resource_sharing" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```python
idle_resource_sharing: str
```

- *Type:* str

---

##### `priority_classes`<sup>Required</sup> <a name="priority_classes" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```python
priority_classes: DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### DataAwsccSagemakerClusterSchedulerConfigTagsList <a name="DataAwsccSagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_cluster_scheduler_config

dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags">DataAwsccSagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerClusterSchedulerConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags">DataAwsccSagemakerClusterSchedulerConfigTags</a>

---



