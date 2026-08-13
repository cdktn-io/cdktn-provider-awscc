# `dataAwsccSagemakerTrialComponent` Submodule <a name="`dataAwsccSagemakerTrialComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerTrialComponent <a name="DataAwsccSagemakerTrialComponent" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_trial_component awscc_sagemaker_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_trial_component#id DataAwsccSagemakerTrialComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerTrialComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap">DataAwsccSagemakerTrialComponentInputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lineageGroupArn">lineage_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.outputArtifacts">output_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap">DataAwsccSagemakerTrialComponentOutputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap">DataAwsccSagemakerTrialComponentParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference">DataAwsccSagemakerTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList">DataAwsccSagemakerTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentArn">trial_component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentName">trial_component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.inputArtifacts"></a>

```python
input_artifacts: DataAwsccSagemakerTrialComponentInputArtifactsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap">DataAwsccSagemakerTrialComponentInputArtifactsMap</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `lineage_group_arn`<sup>Required</sup> <a name="lineage_group_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lineageGroupArn"></a>

```python
lineage_group_arn: str
```

- *Type:* str

---

##### `metadata_properties`<sup>Required</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.metadataProperties"></a>

```python
metadata_properties: DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference</a>

---

##### `output_artifacts`<sup>Required</sup> <a name="output_artifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.outputArtifacts"></a>

```python
output_artifacts: DataAwsccSagemakerTrialComponentOutputArtifactsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap">DataAwsccSagemakerTrialComponentOutputArtifactsMap</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.parameters"></a>

```python
parameters: DataAwsccSagemakerTrialComponentParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap">DataAwsccSagemakerTrialComponentParametersMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.status"></a>

```python
status: DataAwsccSagemakerTrialComponentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference">DataAwsccSagemakerTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tags"></a>

```python
tags: DataAwsccSagemakerTrialComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList">DataAwsccSagemakerTrialComponentTagsList</a>

---

##### `trial_component_arn`<sup>Required</sup> <a name="trial_component_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentArn"></a>

```python
trial_component_arn: str
```

- *Type:* str

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentName"></a>

```python
trial_component_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerTrialComponentConfig <a name="DataAwsccSagemakerTrialComponentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_trial_component#id DataAwsccSagemakerTrialComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerTrialComponentInputArtifacts <a name="DataAwsccSagemakerTrialComponentInputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts()
```


### DataAwsccSagemakerTrialComponentMetadataProperties <a name="DataAwsccSagemakerTrialComponentMetadataProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties()
```


### DataAwsccSagemakerTrialComponentOutputArtifacts <a name="DataAwsccSagemakerTrialComponentOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts()
```


### DataAwsccSagemakerTrialComponentParameters <a name="DataAwsccSagemakerTrialComponentParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters()
```


### DataAwsccSagemakerTrialComponentStatus <a name="DataAwsccSagemakerTrialComponentStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus()
```


### DataAwsccSagemakerTrialComponentTags <a name="DataAwsccSagemakerTrialComponentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerTrialComponentInputArtifactsMap <a name="DataAwsccSagemakerTrialComponentInputArtifactsMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccSagemakerTrialComponentInputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerTrialComponentInputArtifactsOutputReference <a name="DataAwsccSagemakerTrialComponentInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts">DataAwsccSagemakerTrialComponentInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts">DataAwsccSagemakerTrialComponentInputArtifacts</a>

---


### DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference <a name="DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties">DataAwsccSagemakerTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `generated_by`<sup>Required</sup> <a name="generated_by" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties">DataAwsccSagemakerTrialComponentMetadataProperties</a>

---


### DataAwsccSagemakerTrialComponentOutputArtifactsMap <a name="DataAwsccSagemakerTrialComponentOutputArtifactsMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference <a name="DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts">DataAwsccSagemakerTrialComponentOutputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentOutputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts">DataAwsccSagemakerTrialComponentOutputArtifacts</a>

---


### DataAwsccSagemakerTrialComponentParametersMap <a name="DataAwsccSagemakerTrialComponentParametersMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccSagemakerTrialComponentParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerTrialComponentParametersOutputReference <a name="DataAwsccSagemakerTrialComponentParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters">DataAwsccSagemakerTrialComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters">DataAwsccSagemakerTrialComponentParameters</a>

---


### DataAwsccSagemakerTrialComponentStatusOutputReference <a name="DataAwsccSagemakerTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.primaryStatus">primary_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus">DataAwsccSagemakerTrialComponentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `primary_status`<sup>Required</sup> <a name="primary_status" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.primaryStatus"></a>

```python
primary_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus">DataAwsccSagemakerTrialComponentStatus</a>

---


### DataAwsccSagemakerTrialComponentTagsList <a name="DataAwsccSagemakerTrialComponentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerTrialComponentTagsOutputReference <a name="DataAwsccSagemakerTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_trial_component

dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags">DataAwsccSagemakerTrialComponentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerTrialComponentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags">DataAwsccSagemakerTrialComponentTags</a>

---



