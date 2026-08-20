# `dataAwsccCodepipelineCustomActionType` Submodule <a name="`dataAwsccCodepipelineCustomActionType` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelineCustomActionType <a name="DataAwsccCodepipelineCustomActionType" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codepipeline_custom_action_type#id DataAwsccCodepipelineCustomActionType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelineCustomActionType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodepipelineCustomActionType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodepipelineCustomActionType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodepipelineCustomActionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelineCustomActionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.configurationProperties">configuration_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList">DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.customActionTypeId">custom_action_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference">DataAwsccCodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList">DataAwsccCodepipelineCustomActionTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `configuration_properties`<sup>Required</sup> <a name="configuration_properties" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.configurationProperties"></a>

```python
configuration_properties: DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList">DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList</a>

---

##### `custom_action_type_id`<sup>Required</sup> <a name="custom_action_type_id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.customActionTypeId"></a>

```python
custom_action_type_id: str
```

- *Type:* str

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.inputArtifactDetails"></a>

```python
input_artifact_details: DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.outputArtifactDetails"></a>

```python
output_artifact_details: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.settings"></a>

```python
settings: DataAwsccCodepipelineCustomActionTypeSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference">DataAwsccCodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tags"></a>

```python
tags: DataAwsccCodepipelineCustomActionTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList">DataAwsccCodepipelineCustomActionTypeTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelineCustomActionTypeConfig <a name="DataAwsccCodepipelineCustomActionTypeConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codepipeline_custom_action_type#id DataAwsccCodepipelineCustomActionType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelineCustomActionTypeConfigurationProperties <a name="DataAwsccCodepipelineCustomActionTypeConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties()
```


### DataAwsccCodepipelineCustomActionTypeInputArtifactDetails <a name="DataAwsccCodepipelineCustomActionTypeInputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails()
```


### DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails <a name="DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails()
```


### DataAwsccCodepipelineCustomActionTypeSettings <a name="DataAwsccCodepipelineCustomActionTypeSettings" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings()
```


### DataAwsccCodepipelineCustomActionTypeTags <a name="DataAwsccCodepipelineCustomActionTypeTags" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList <a name="DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference <a name="DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key">key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable">queryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret">secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties">DataAwsccCodepipelineCustomActionTypeConfigurationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key"></a>

```python
key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queryable`<sup>Required</sup> <a name="queryable" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable"></a>

```python
queryable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret"></a>

```python
secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelineCustomActionTypeConfigurationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeConfigurationProperties">DataAwsccCodepipelineCustomActionTypeConfigurationProperties</a>

---


### DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails">DataAwsccCodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeInputArtifactDetails">DataAwsccCodepipelineCustomActionTypeInputArtifactDetails</a>

---


### DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails">DataAwsccCodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### DataAwsccCodepipelineCustomActionTypeSettingsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">entity_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">execution_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">revision_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">third_party_configuration_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings">DataAwsccCodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_url_template`<sup>Required</sup> <a name="entity_url_template" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```python
entity_url_template: str
```

- *Type:* str

---

##### `execution_url_template`<sup>Required</sup> <a name="execution_url_template" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```python
execution_url_template: str
```

- *Type:* str

---

##### `revision_url_template`<sup>Required</sup> <a name="revision_url_template" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```python
revision_url_template: str
```

- *Type:* str

---

##### `third_party_configuration_url`<sup>Required</sup> <a name="third_party_configuration_url" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```python
third_party_configuration_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeSettings">DataAwsccCodepipelineCustomActionTypeSettings</a>

---


### DataAwsccCodepipelineCustomActionTypeTagsList <a name="DataAwsccCodepipelineCustomActionTypeTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodepipelineCustomActionTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodepipelineCustomActionTypeTagsOutputReference <a name="DataAwsccCodepipelineCustomActionTypeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codepipeline_custom_action_type

dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags">DataAwsccCodepipelineCustomActionTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodepipelineCustomActionTypeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelineCustomActionType.DataAwsccCodepipelineCustomActionTypeTags">DataAwsccCodepipelineCustomActionTypeTags</a>

---



