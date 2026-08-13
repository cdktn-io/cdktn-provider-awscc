# `dataAwsccGreengrassv2ComponentVersion` Submodule <a name="`dataAwsccGreengrassv2ComponentVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGreengrassv2ComponentVersion <a name="DataAwsccGreengrassv2ComponentVersion" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/greengrassv2_component_version awscc_greengrassv2_component_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/greengrassv2_component_version#id DataAwsccGreengrassv2ComponentVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGreengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGreengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGreengrassv2ComponentVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGreengrassv2ComponentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGreengrassv2ComponentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.componentName">component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.inlineRecipe">inline_recipe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `inline_recipe`<sup>Required</sup> <a name="inline_recipe" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.inlineRecipe"></a>

```python
inline_recipe: str
```

- *Type:* str

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.lambdaFunction"></a>

```python
lambda_function: DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGreengrassv2ComponentVersionConfig <a name="DataAwsccGreengrassv2ComponentVersionConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/greengrassv2_component_version#id DataAwsccGreengrassv2ComponentVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGreengrassv2ComponentVersionLambdaFunction <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunction" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunction()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes()
```


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType">dependency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement">version_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_type`<sup>Required</sup> <a name="dependency_type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType"></a>

```python
dependency_type: str
```

- *Type:* str

---

##### `version_requirement`<sup>Required</sup> <a name="version_requirement" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement"></a>

```python
version_requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner">add_group_owner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_group_owner`<sup>Required</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner"></a>

```python
add_group_owner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb">memory_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs">mount_ro_sysfs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices"></a>

```python
devices: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a>

---

##### `memory_size_in_kb`<sup>Required</sup> <a name="memory_size_in_kb" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb"></a>

```python
memory_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_ro_sysfs`<sup>Required</sup> <a name="mount_ro_sysfs" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs"></a>

```python
mount_ro_sysfs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes"></a>

```python
volumes: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner">add_group_owner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath">source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_group_owner`<sup>Required</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner"></a>

```python
add_group_owner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `source_path`<sup>Required</sup> <a name="source_path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams">container_params</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_params`<sup>Required</sup> <a name="container_params" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams"></a>

```python
container_params: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a>

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources">event_sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs">exec_args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType">input_payload_encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams">linux_process_params</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds">max_idle_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount">max_instances_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize">max_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned">pinned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds">status_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `event_sources`<sup>Required</sup> <a name="event_sources" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources"></a>

```python
event_sources: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a>

---

##### `exec_args`<sup>Required</sup> <a name="exec_args" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs"></a>

```python
exec_args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_payload_encoding_type`<sup>Required</sup> <a name="input_payload_encoding_type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType"></a>

```python
input_payload_encoding_type: str
```

- *Type:* str

---

##### `linux_process_params`<sup>Required</sup> <a name="linux_process_params" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams"></a>

```python
linux_process_params: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a>

---

##### `max_idle_time_in_seconds`<sup>Required</sup> <a name="max_idle_time_in_seconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds"></a>

```python
max_idle_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances_count`<sup>Required</sup> <a name="max_instances_count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount"></a>

```python
max_instances_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_queue_size`<sup>Required</sup> <a name="max_queue_size" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize"></a>

```python
max_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned"></a>

```python
pinned: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status_timeout_in_seconds`<sup>Required</sup> <a name="status_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds"></a>

```python
status_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>

---


### DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference <a name="DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_component_version

dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies">component_dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters">component_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName">component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms">component_platforms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunction">DataAwsccGreengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_dependencies`<sup>Required</sup> <a name="component_dependencies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies"></a>

```python
component_dependencies: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a>

---

##### `component_lambda_parameters`<sup>Required</sup> <a name="component_lambda_parameters" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters"></a>

```python
component_lambda_parameters: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a>

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

---

##### `component_platforms`<sup>Required</sup> <a name="component_platforms" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms"></a>

```python
component_platforms: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a>

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2ComponentVersionLambdaFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2ComponentVersion.DataAwsccGreengrassv2ComponentVersionLambdaFunction">DataAwsccGreengrassv2ComponentVersionLambdaFunction</a>

---



