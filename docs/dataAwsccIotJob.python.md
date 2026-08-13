# `dataAwsccIotJob` Submodule <a name="`dataAwsccIotJob` Submodule" id="@cdktn/provider-awscc.dataAwsccIotJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotJob <a name="DataAwsccIotJob" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job awscc_iot_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJob(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#id DataAwsccIotJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference">DataAwsccIotJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.destinationPackageVersions">destination_package_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.document">document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentParameters">document_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentSource">document_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRetryConfig">job_executions_retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference">DataAwsccIotJobJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobTemplateArn">job_template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.presignedUrlConfig">presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference">DataAwsccIotJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.schedulingConfig">scheduling_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference">DataAwsccIotJobSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList">DataAwsccIotJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targetSelection">target_selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference">DataAwsccIotJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `abort_config`<sup>Required</sup> <a name="abort_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.abortConfig"></a>

```python
abort_config: DataAwsccIotJobAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference">DataAwsccIotJobAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_package_versions`<sup>Required</sup> <a name="destination_package_versions" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.destinationPackageVersions"></a>

```python
destination_package_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.document"></a>

```python
document: str
```

- *Type:* str

---

##### `document_parameters`<sup>Required</sup> <a name="document_parameters" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentParameters"></a>

```python
document_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `document_source`<sup>Required</sup> <a name="document_source" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.documentSource"></a>

```python
document_source: str
```

- *Type:* str

---

##### `job_executions_retry_config`<sup>Required</sup> <a name="job_executions_retry_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRetryConfig"></a>

```python
job_executions_retry_config: DataAwsccIotJobJobExecutionsRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference">DataAwsccIotJobJobExecutionsRetryConfigOutputReference</a>

---

##### `job_executions_rollout_config`<sup>Required</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: DataAwsccIotJobJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigOutputReference</a>

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_template_arn`<sup>Required</sup> <a name="job_template_arn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.jobTemplateArn"></a>

```python
job_template_arn: str
```

- *Type:* str

---

##### `presigned_url_config`<sup>Required</sup> <a name="presigned_url_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.presignedUrlConfig"></a>

```python
presigned_url_config: DataAwsccIotJobPresignedUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference">DataAwsccIotJobPresignedUrlConfigOutputReference</a>

---

##### `scheduling_config`<sup>Required</sup> <a name="scheduling_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.schedulingConfig"></a>

```python
scheduling_config: DataAwsccIotJobSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference">DataAwsccIotJobSchedulingConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tags"></a>

```python
tags: DataAwsccIotJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList">DataAwsccIotJobTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_selection`<sup>Required</sup> <a name="target_selection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.targetSelection"></a>

```python
target_selection: str
```

- *Type:* str

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.timeoutConfig"></a>

```python
timeout_config: DataAwsccIotJobTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference">DataAwsccIotJobTimeoutConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotJobAbortConfig <a name="DataAwsccIotJobAbortConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobAbortConfig()
```


### DataAwsccIotJobAbortConfigCriteriaListStruct <a name="DataAwsccIotJobAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct()
```


### DataAwsccIotJobConfig <a name="DataAwsccIotJobConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_job#id DataAwsccIotJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotJobJobExecutionsRetryConfig <a name="DataAwsccIotJobJobExecutionsRetryConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig()
```


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct()
```


### DataAwsccIotJobJobExecutionsRolloutConfig <a name="DataAwsccIotJobJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig()
```


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate()
```


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria()
```


### DataAwsccIotJobPresignedUrlConfig <a name="DataAwsccIotJobPresignedUrlConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig()
```


### DataAwsccIotJobSchedulingConfig <a name="DataAwsccIotJobSchedulingConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobSchedulingConfig()
```


### DataAwsccIotJobSchedulingConfigMaintenanceWindows <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindows" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows()
```


### DataAwsccIotJobTags <a name="DataAwsccIotJobTags" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobTags()
```


### DataAwsccIotJobTimeoutConfig <a name="DataAwsccIotJobTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobTimeoutConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotJobAbortConfigCriteriaListStructList <a name="DataAwsccIotJobAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotJobAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotJobAbortConfigCriteriaListStructOutputReference <a name="DataAwsccIotJobAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct">DataAwsccIotJobAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `min_number_of_executed_things`<sup>Required</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage`<sup>Required</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobAbortConfigCriteriaListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStruct">DataAwsccIotJobAbortConfigCriteriaListStruct</a>

---


### DataAwsccIotJobAbortConfigOutputReference <a name="DataAwsccIotJobAbortConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.criteriaList">criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList">DataAwsccIotJobAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig">DataAwsccIotJobAbortConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_list`<sup>Required</sup> <a name="criteria_list" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.criteriaList"></a>

```python
criteria_list: DataAwsccIotJobAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigCriteriaListStructList">DataAwsccIotJobAbortConfigCriteriaListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobAbortConfig">DataAwsccIotJobAbortConfig</a>

---


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference <a name="DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries">number_of_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `number_of_retries`<sup>Required</sup> <a name="number_of_retries" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries"></a>

```python
number_of_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStruct</a>

---


### DataAwsccIotJobJobExecutionsRetryConfigOutputReference <a name="DataAwsccIotJobJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.criteriaList">criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig">DataAwsccIotJobJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_list`<sup>Required</sup> <a name="criteria_list" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.criteriaList"></a>

```python
criteria_list: DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList">DataAwsccIotJobJobExecutionsRetryConfigCriteriaListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobJobExecutionsRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRetryConfig">DataAwsccIotJobJobExecutionsRetryConfig</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_rate_per_minute`<sup>Required</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor`<sup>Required</sup> <a name="increment_factor" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_increase_criteria`<sup>Required</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRate</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_notified_things`<sup>Required</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things`<sup>Required</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### DataAwsccIotJobJobExecutionsRolloutConfigOutputReference <a name="DataAwsccIotJobJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig">DataAwsccIotJobJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exponential_rate`<sup>Required</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```python
exponential_rate: DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `maximum_per_minute`<sup>Required</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobJobExecutionsRolloutConfig">DataAwsccIotJobJobExecutionsRolloutConfig</a>

---


### DataAwsccIotJobPresignedUrlConfigOutputReference <a name="DataAwsccIotJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.expiresInSec">expires_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig">DataAwsccIotJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_in_sec`<sup>Required</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```python
expires_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobPresignedUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobPresignedUrlConfig">DataAwsccIotJobPresignedUrlConfig</a>

---


### DataAwsccIotJobSchedulingConfigMaintenanceWindowsList <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindowsList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference <a name="DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows">DataAwsccIotJobSchedulingConfigMaintenanceWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobSchedulingConfigMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindows">DataAwsccIotJobSchedulingConfigMaintenanceWindows</a>

---


### DataAwsccIotJobSchedulingConfigOutputReference <a name="DataAwsccIotJobSchedulingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endBehavior">end_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.maintenanceWindows">maintenance_windows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList">DataAwsccIotJobSchedulingConfigMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig">DataAwsccIotJobSchedulingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_behavior`<sup>Required</sup> <a name="end_behavior" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endBehavior"></a>

```python
end_behavior: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `maintenance_windows`<sup>Required</sup> <a name="maintenance_windows" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.maintenanceWindows"></a>

```python
maintenance_windows: DataAwsccIotJobSchedulingConfigMaintenanceWindowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigMaintenanceWindowsList">DataAwsccIotJobSchedulingConfigMaintenanceWindowsList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobSchedulingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobSchedulingConfig">DataAwsccIotJobSchedulingConfig</a>

---


### DataAwsccIotJobTagsList <a name="DataAwsccIotJobTagsList" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotJobTagsOutputReference <a name="DataAwsccIotJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags">DataAwsccIotJobTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTags">DataAwsccIotJobTags</a>

---


### DataAwsccIotJobTimeoutConfigOutputReference <a name="DataAwsccIotJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_job

dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig">DataAwsccIotJobTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_progress_timeout_in_minutes`<sup>Required</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotJobTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotJob.DataAwsccIotJobTimeoutConfig">DataAwsccIotJobTimeoutConfig</a>

---



