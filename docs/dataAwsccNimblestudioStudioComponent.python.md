# `dataAwsccNimblestudioStudioComponent` Submodule <a name="`dataAwsccNimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudioComponent <a name="DataAwsccNimblestudioStudioComponent" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/nimblestudio_studio_component#id DataAwsccNimblestudioStudioComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNimblestudioStudioComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds">ec2_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts">initialization_scripts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters">script_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId">studio_component_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.configuration"></a>

```python
configuration: DataAwsccNimblestudioStudioComponentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_security_group_ids`<sup>Required</sup> <a name="ec2_security_group_ids" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```python
ec2_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initialization_scripts`<sup>Required</sup> <a name="initialization_scripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.initializationScripts"></a>

```python
initialization_scripts: DataAwsccNimblestudioStudioComponentInitializationScriptsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList">DataAwsccNimblestudioStudioComponentInitializationScriptsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `script_parameters`<sup>Required</sup> <a name="script_parameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.scriptParameters"></a>

```python
script_parameters: DataAwsccNimblestudioStudioComponentScriptParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList">DataAwsccNimblestudioStudioComponentScriptParametersList</a>

---

##### `studio_component_id`<sup>Required</sup> <a name="studio_component_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioComponentId"></a>

```python
studio_component_id: str
```

- *Type:* str

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioComponentConfig <a name="DataAwsccNimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/nimblestudio_studio_component#id DataAwsccNimblestudioStudioComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioComponentConfiguration <a name="DataAwsccNimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration()
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration()
```


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes()
```


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration()
```


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration()
```


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration()
```


### DataAwsccNimblestudioStudioComponentInitializationScripts <a name="DataAwsccNimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts()
```


### DataAwsccNimblestudioStudioComponentScriptParameters <a name="DataAwsccNimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">computer_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `computer_attributes`<sup>Required</sup> <a name="computer_attributes" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```python
computer_attributes: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">active_directory_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_user`<sup>Required</sup> <a name="active_directory_user" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```python
active_directory_user: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">compute_farm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">license_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">shared_file_system_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_configuration`<sup>Required</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `compute_farm_configuration`<sup>Required</sup> <a name="compute_farm_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```python
compute_farm_configuration: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `license_service_configuration`<sup>Required</sup> <a name="license_service_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```python
license_service_configuration: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `shared_file_system_configuration`<sup>Required</sup> <a name="shared_file_system_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```python
shared_file_system_configuration: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfiguration">DataAwsccNimblestudioStudioComponentConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">linux_mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">windows_mount_drive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `linux_mount_point`<sup>Required</sup> <a name="linux_mount_point" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```python
linux_mount_point: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `windows_mount_drive`<sup>Required</sup> <a name="windows_mount_drive" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```python
windows_mount_drive: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsList <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference <a name="DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">launch_profile_protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">run_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_profile_protocol_version`<sup>Required</sup> <a name="launch_profile_protocol_version" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```python
launch_profile_protocol_version: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `run_context`<sup>Required</sup> <a name="run_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```python
run_context: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentInitializationScripts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentInitializationScripts">DataAwsccNimblestudioStudioComponentInitializationScripts</a>

---


### DataAwsccNimblestudioStudioComponentScriptParametersList <a name="DataAwsccNimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNimblestudioStudioComponentScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNimblestudioStudioComponentScriptParametersOutputReference <a name="DataAwsccNimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio_component

dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioComponentScriptParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudioComponent.DataAwsccNimblestudioStudioComponentScriptParameters">DataAwsccNimblestudioStudioComponentScriptParameters</a>

---



