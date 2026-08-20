# `dataAwsccEvidentlyLaunch` Submodule <a name="`dataAwsccEvidentlyLaunch` Submodule" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvidentlyLaunch <a name="DataAwsccEvidentlyLaunch" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_launch awscc_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_launch#id DataAwsccEvidentlyLaunch#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEvidentlyLaunch resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEvidentlyLaunch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEvidentlyLaunch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEvidentlyLaunch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_launch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvidentlyLaunch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference">DataAwsccEvidentlyLaunchExecutionStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList">DataAwsccEvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.metricMonitors">metric_monitors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList">DataAwsccEvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList">DataAwsccEvidentlyLaunchScheduledSplitsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList">DataAwsccEvidentlyLaunchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.executionStatus"></a>

```python
execution_status: DataAwsccEvidentlyLaunchExecutionStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference">DataAwsccEvidentlyLaunchExecutionStatusOutputReference</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.groups"></a>

```python
groups: DataAwsccEvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList">DataAwsccEvidentlyLaunchGroupsList</a>

---

##### `metric_monitors`<sup>Required</sup> <a name="metric_monitors" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.metricMonitors"></a>

```python
metric_monitors: DataAwsccEvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList">DataAwsccEvidentlyLaunchMetricMonitorsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `randomization_salt`<sup>Required</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

---

##### `scheduled_splits_config`<sup>Required</sup> <a name="scheduled_splits_config" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.scheduledSplitsConfig"></a>

```python
scheduled_splits_config: DataAwsccEvidentlyLaunchScheduledSplitsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList">DataAwsccEvidentlyLaunchScheduledSplitsConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tags"></a>

```python
tags: DataAwsccEvidentlyLaunchTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList">DataAwsccEvidentlyLaunchTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvidentlyLaunchConfig <a name="DataAwsccEvidentlyLaunchConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evidently_launch#id DataAwsccEvidentlyLaunch#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvidentlyLaunchExecutionStatus <a name="DataAwsccEvidentlyLaunchExecutionStatus" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus()
```


### DataAwsccEvidentlyLaunchGroups <a name="DataAwsccEvidentlyLaunchGroups" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups()
```


### DataAwsccEvidentlyLaunchMetricMonitors <a name="DataAwsccEvidentlyLaunchMetricMonitors" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors()
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfig <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig()
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights()
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides()
```


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights()
```


### DataAwsccEvidentlyLaunchTags <a name="DataAwsccEvidentlyLaunchTags" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvidentlyLaunchExecutionStatusOutputReference <a name="DataAwsccEvidentlyLaunchExecutionStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus">DataAwsccEvidentlyLaunchExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchExecutionStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchExecutionStatus">DataAwsccEvidentlyLaunchExecutionStatus</a>

---


### DataAwsccEvidentlyLaunchGroupsList <a name="DataAwsccEvidentlyLaunchGroupsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchGroupsOutputReference <a name="DataAwsccEvidentlyLaunchGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups">DataAwsccEvidentlyLaunchGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.variation"></a>

```python
variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchGroups">DataAwsccEvidentlyLaunchGroups</a>

---


### DataAwsccEvidentlyLaunchMetricMonitorsList <a name="DataAwsccEvidentlyLaunchMetricMonitorsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchMetricMonitorsOutputReference <a name="DataAwsccEvidentlyLaunchMetricMonitorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors">DataAwsccEvidentlyLaunchMetricMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchMetricMonitors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchMetricMonitors">DataAwsccEvidentlyLaunchMetricMonitors</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeights</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights">group_weights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides">segment_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig">DataAwsccEvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_weights`<sup>Required</sup> <a name="group_weights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights"></a>

```python
group_weights: DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a>

---

##### `segment_overrides`<sup>Required</sup> <a name="segment_overrides" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides"></a>

```python
segment_overrides: DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchScheduledSplitsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfig">DataAwsccEvidentlyLaunchScheduledSplitsConfig</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder">evaluation_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights">weights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_order`<sup>Required</sup> <a name="evaluation_order" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder"></a>

```python
evaluation_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment"></a>

```python
segment: str
```

- *Type:* str

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights"></a>

```python
weights: DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference <a name="DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">DataAwsccEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>

---


### DataAwsccEvidentlyLaunchTagsList <a name="DataAwsccEvidentlyLaunchTagsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEvidentlyLaunchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEvidentlyLaunchTagsOutputReference <a name="DataAwsccEvidentlyLaunchTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_evidently_launch

dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags">DataAwsccEvidentlyLaunchTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEvidentlyLaunchTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyLaunch.DataAwsccEvidentlyLaunchTags">DataAwsccEvidentlyLaunchTags</a>

---



