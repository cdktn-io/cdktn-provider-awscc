# `dataAwsccEfsAccessPoint` Submodule <a name="`dataAwsccEfsAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEfsAccessPoint <a name="DataAwsccEfsAccessPoint" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_access_point awscc_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_access_point#id DataAwsccEfsAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEfsAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEfsAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEfsAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEfsAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEfsAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointId">access_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointTags">access_point_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList">DataAwsccEfsAccessPointAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference">DataAwsccEfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference">DataAwsccEfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_point_id`<sup>Required</sup> <a name="access_point_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

---

##### `access_point_tags`<sup>Required</sup> <a name="access_point_tags" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointTags"></a>

```python
access_point_tags: DataAwsccEfsAccessPointAccessPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList">DataAwsccEfsAccessPointAccessPointTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.posixUser"></a>

```python
posix_user: DataAwsccEfsAccessPointPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference">DataAwsccEfsAccessPointPosixUserOutputReference</a>

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.rootDirectory"></a>

```python
root_directory: DataAwsccEfsAccessPointRootDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference">DataAwsccEfsAccessPointRootDirectoryOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEfsAccessPointAccessPointTags <a name="DataAwsccEfsAccessPointAccessPointTags" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags()
```


### DataAwsccEfsAccessPointConfig <a name="DataAwsccEfsAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_access_point#id DataAwsccEfsAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEfsAccessPointPosixUser <a name="DataAwsccEfsAccessPointPosixUser" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser()
```


### DataAwsccEfsAccessPointRootDirectory <a name="DataAwsccEfsAccessPointRootDirectory" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory()
```


### DataAwsccEfsAccessPointRootDirectoryCreationInfo <a name="DataAwsccEfsAccessPointRootDirectoryCreationInfo" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEfsAccessPointAccessPointTagsList <a name="DataAwsccEfsAccessPointAccessPointTagsList" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEfsAccessPointAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEfsAccessPointAccessPointTagsOutputReference <a name="DataAwsccEfsAccessPointAccessPointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags">DataAwsccEfsAccessPointAccessPointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEfsAccessPointAccessPointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags">DataAwsccEfsAccessPointAccessPointTags</a>

---


### DataAwsccEfsAccessPointPosixUserOutputReference <a name="DataAwsccEfsAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser">DataAwsccEfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser">DataAwsccEfsAccessPointPosixUser</a>

---


### DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference <a name="DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">owner_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">owner_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo">DataAwsccEfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```python
owner_gid: str
```

- *Type:* str

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```python
owner_uid: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo">DataAwsccEfsAccessPointRootDirectoryCreationInfo</a>

---


### DataAwsccEfsAccessPointRootDirectoryOutputReference <a name="DataAwsccEfsAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_efs_access_point

dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationInfo">creation_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference">DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory">DataAwsccEfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_info`<sup>Required</sup> <a name="creation_info" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```python
creation_info: DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference">DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory">DataAwsccEfsAccessPointRootDirectory</a>

---



