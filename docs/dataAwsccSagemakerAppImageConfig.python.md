# `dataAwsccSagemakerAppImageConfig` Submodule <a name="`dataAwsccSagemakerAppImageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAppImageConfig <a name="DataAwsccSagemakerAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config awscc_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config#id DataAwsccSagemakerAppImageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerAppImageConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn">app_image_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName">app_image_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig">code_editor_app_image_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig">jupyter_lab_app_image_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig">kernel_gateway_image_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `app_image_config_arn`<sup>Required</sup> <a name="app_image_config_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn"></a>

```python
app_image_config_arn: str
```

- *Type:* str

---

##### `app_image_config_name`<sup>Required</sup> <a name="app_image_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName"></a>

```python
app_image_config_name: str
```

- *Type:* str

---

##### `code_editor_app_image_config`<sup>Required</sup> <a name="code_editor_app_image_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```python
code_editor_app_image_config: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `jupyter_lab_app_image_config`<sup>Required</sup> <a name="jupyter_lab_app_image_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig"></a>

```python
jupyter_lab_app_image_config: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a>

---

##### `kernel_gateway_image_config`<sup>Required</sup> <a name="kernel_gateway_image_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```python
kernel_gateway_image_config: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags"></a>

```python
tags: DataAwsccSagemakerAppImageConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig()
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig()
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables()
```


### DataAwsccSagemakerAppImageConfigConfig <a name="DataAwsccSagemakerAppImageConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config#id DataAwsccSagemakerAppImageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig()
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig()
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables()
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig()
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig()
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs()
```


### DataAwsccSagemakerAppImageConfigTags <a name="DataAwsccSagemakerAppImageConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">container_environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_environment_variables`<sup>Required</sup> <a name="container_environment_variables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```python
container_environment_variables: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">container_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_config`<sup>Required</sup> <a name="container_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```python
container_config: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">container_environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_environment_variables`<sup>Required</sup> <a name="container_environment_variables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```python
container_environment_variables: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig">container_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_config`<sup>Required</sup> <a name="container_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig"></a>

```python
container_config: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">default_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">default_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_gid`<sup>Required</sup> <a name="default_gid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```python
default_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_uid`<sup>Required</sup> <a name="default_uid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```python
default_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">file_system_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs">kernel_specs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_config`<sup>Required</sup> <a name="file_system_config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```python
file_system_config: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `kernel_specs`<sup>Required</sup> <a name="kernel_specs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs"></a>

```python
kernel_specs: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigTagsList <a name="DataAwsccSagemakerAppImageConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerAppImageConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerAppImageConfigTagsOutputReference <a name="DataAwsccSagemakerAppImageConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_app_image_config

dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerAppImageConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a>

---



